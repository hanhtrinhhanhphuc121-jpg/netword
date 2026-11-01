-- ==============================================================================
-- NETWORD - SUPABASE MIGRATION: HỆ THỐNG PHÂN QUYỀN RBAC & TÀI KHOẢN TRƯỜNG CẤP
-- 4 Vai trò: guest, student, editor, admin
-- Cơ chế chống tự nâng quyền (Anti Self-Elevation Protection) & Trigger tin cậy
-- Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
-- GV: Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
-- ==============================================================================

-- 1. CẬP NHẬT RÀNG BUỘC VAI TRÒ TRONG PROFILES
ALTER TABLE public.profiles 
  DROP CONSTRAINT IF EXISTS profiles_role_check;

ALTER TABLE public.profiles 
  ADD CONSTRAINT profiles_role_check 
  CHECK (role IN ('guest', 'student', 'editor', 'admin'));

-- 2. TẠO BẢNG TÀI KHOẢN DO NHÀ TRƯỜNG CẤP (SCHOOL-ISSUED ACCOUNTS)
CREATE TABLE IF NOT EXISTS public.school_issued_accounts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_code TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  initial_password TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'editor')),
  grade TEXT NOT NULL DEFAULT 'Lớp 11A1 (Chuyên đề 2)',
  school TEXT NOT NULL DEFAULT 'Trường THCS và THPT Long Hiệp',
  status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'suspended')),
  is_activated BOOLEAN NOT NULL DEFAULT false,
  issued_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  last_login_at TIMESTAMPTZ,
  notes TEXT
);

-- Index tra cứu nhanh mã học sinh và email trường cấp
CREATE INDEX IF NOT EXISTS idx_school_accounts_code ON public.school_issued_accounts(student_code);
CREATE INDEX IF NOT EXISTS idx_school_accounts_email ON public.school_issued_accounts(email);

-- 3. HÀM KIỂM TRA QUYỀN ADMIN TIN CẬY PHÍA DATABASE
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.is_editor_or_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE id = auth.uid() AND role IN ('editor', 'admin')
  );
END;
$$ LANGUAGE plpgsql STABLE SECURITY DEFINER;

-- 4. TRIGGER BẢO VỆ CHỐNG TỰ NÂNG QUYỀN (ANTI PRIVILEGE ESCALATION TRIGGER)
-- Tuyệt đối ngăn chặn học sinh / khách tự gửi payload UPDATE profiles SET role = 'admin'
CREATE OR REPLACE FUNCTION public.protect_user_role()
RETURNS TRIGGER AS $$
BEGIN
  -- Nếu cột role bị thay đổi
  IF NEW.role IS DISTINCT FROM OLD.role THEN
    -- Nếu người gửi yêu cầu không phải là Admin
    IF NOT public.is_admin() THEN
      RAISE EXCEPTION 'LỖI BẢO MẬT (403 Forbidden): Học sinh không được phép tự sửa đổi vai trò hệ thống! Chỉ Giáo viên Quản trị (Admin) mới có thẩm quyền phân quyền.';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_protect_user_role ON public.profiles;
CREATE TRIGGER trg_protect_user_role
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_user_role();

-- 5. TRIGGER TỰ ĐỘNG KHỞI TẠO HỒ SƠ TỪ AUTH.USERS VỚI ROLE MẶC ĐỊNH LÀ STUDENT
-- Bỏ qua mọi metadata role do người dùng tự khai báo
CREATE OR REPLACE FUNCTION public.handle_new_auth_user()
RETURNS TRIGGER AS $$
DECLARE
  assigned_role TEXT := 'student';
BEGIN
  -- Email đặc biệt của Giáo viên chủ nhiệm phát triển Chuyên đề 2
  IF NEW.email = 'tramthanhtuanlh@gmail.com' THEN
    assigned_role := 'admin';
  END IF;

  INSERT INTO public.profiles (
    id, email, full_name, role, school, grade, title, points
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    assigned_role,
    COALESCE(NEW.raw_user_meta_data->>'school', 'Trường THCS và THPT Long Hiệp'),
    COALESCE(NEW.raw_user_meta_data->>'grade', 'Lớp 11 (Chuyên đề 2)'),
    CASE WHEN assigned_role = 'admin' THEN 'Giáo viên phát triển Chuyên đề 2' ELSE 'Học viên Ngôn ngữ Trẻ' END,
    CASE WHEN assigned_role = 'admin' THEN 999 ELSE 50 END
  )
  ON CONFLICT (id) DO NOTHING;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_auth_user();

-- 6. HÀM RPC TIN CẬY CHO PHÉP ADMIN PHÂN QUYỀN NGƯỜI DÙNG
CREATE OR REPLACE FUNCTION public.admin_update_user_role(
  p_target_user_id UUID,
  p_new_role TEXT
)
RETURNS JSONB AS $$
BEGIN
  -- Kiểm tra quyền người gọi
  IF NOT public.is_admin() THEN
    RAISE EXCEPTION 'Quyền truy cập bị từ chối: Chỉ Giáo viên Quản trị (Admin) mới có quyền phân vai trò.';
  END IF;

  IF p_new_role NOT IN ('guest', 'student', 'editor', 'admin') THEN
    RAISE EXCEPTION 'Vai trò không hợp lệ: %', p_new_role;
  END IF;

  UPDATE public.profiles
  SET role = p_new_role, updated_at = now()
  WHERE id = p_target_user_id;

  RETURN jsonb_build_object(
    'success', true,
    'user_id', p_target_user_id,
    'new_role', p_new_role,
    'updated_at', now()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 7. KÍCH HOẠT RLS TRÊN BẢNG TÀI KHOẢN TRƯỜNG CẤP
ALTER TABLE public.school_issued_accounts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Chỉ Admin được xem danh sách tài khoản trường cấp" ON public.school_issued_accounts;
CREATE POLICY "Chỉ Admin được xem danh sách tài khoản trường cấp" 
  ON public.school_issued_accounts 
  FOR SELECT USING (public.is_admin());

DROP POLICY IF EXISTS "Chỉ Admin được cấp tài khoản trường" ON public.school_issued_accounts;
CREATE POLICY "Chỉ Admin được cấp tài khoản trường" 
  ON public.school_issued_accounts 
  FOR INSERT WITH CHECK (public.is_admin());

DROP POLICY IF EXISTS "Chỉ Admin được sửa tài khoản trường cấp" ON public.school_issued_accounts;
CREATE POLICY "Chỉ Admin được sửa tài khoản trường cấp" 
  ON public.school_issued_accounts 
  FOR UPDATE USING (public.is_admin());

DROP POLICY IF EXISTS "Chỉ Admin được xóa tài khoản trường cấp" ON public.school_issued_accounts;
CREATE POLICY "Chỉ Admin được xóa tài khoản trường cấp" 
  ON public.school_issued_accounts 
  FOR DELETE USING (public.is_admin());
