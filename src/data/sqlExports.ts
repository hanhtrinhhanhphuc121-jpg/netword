/**
 * NETWORD - SQL Migration, Seed, Verification & ERD Exporters
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV: Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 */

export const MIGRATION_SQL = `-- ==============================================================================
-- NETWORD - DATABASE MIGRATION SCRIPT (SUPABASE / POSTGRESQL)
-- Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
-- Đơn vị: Trường THCS và THPT Long Hiệp
-- Giáo viên phát triển: Thầy Trầm Thanh Tuấn (tramthanhtuanlh@gmail.com)
-- Ngày tạo: 2026-10-31
-- ==============================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- 0. HÀM HỖ TRỢ VÀ CHUẨN HÓA
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION public.normalize_term(input_term TEXT)
RETURNS TEXT AS $$
BEGIN
  IF input_term IS NULL THEN
    RETURN '';
  END IF;
  RETURN regexp_replace(lower(trim(unaccent(input_term))), '\\s+', ' ', 'g');
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 1. BẢNG PROFILES
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'student' CHECK (role IN ('student', 'editor', 'teacher_admin')),
  school TEXT NOT NULL DEFAULT 'Trường THCS và THPT Long Hiệp',
  grade TEXT DEFAULT 'Lớp 11 (Chuyên đề 2)',
  title TEXT DEFAULT 'Học viên Ngôn ngữ Trẻ',
  points INTEGER NOT NULL DEFAULT 0 CHECK (points >= 0),
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER trg_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 2. BẢNG TERMS
CREATE TABLE IF NOT EXISTS public.terms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term TEXT NOT NULL,
  normalized_term TEXT NOT NULL GENERATED ALWAYS AS (public.normalize_term(term)) STORED,
  pronunciation TEXT,
  category TEXT NOT NULL CHECK (category IN ('slang', 'teencode', 'meme_trend', 'borrowed', 'game_stream', 'school')),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'pending', 'needs_revision', 'published', 'rejected', 'archived')),
  author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL DEFAULT 'Ban Biên tập Ngữ văn',
  tags TEXT[] DEFAULT ARRAY[]::TEXT[],
  likes_count INTEGER NOT NULL DEFAULT 0 CHECK (likes_count >= 0),
  views_count INTEGER NOT NULL DEFAULT 0 CHECK (views_count >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_terms_normalized_active UNIQUE (normalized_term)
);

CREATE TRIGGER trg_terms_updated_at
  BEFORE UPDATE ON public.terms
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 3. BẢNG TERM_MEANINGS (1 từ có nhiều nghĩa)
CREATE TABLE IF NOT EXISTS public.term_meanings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term_id UUID NOT NULL REFERENCES public.terms(id) ON DELETE CASCADE,
  meaning_order INTEGER NOT NULL DEFAULT 1 CHECK (meaning_order > 0),
  meaning_type TEXT NOT NULL DEFAULT 'net_meaning' CHECK (meaning_type IN ('net_meaning', 'literal_meaning', 'extended_meaning', 'metaphoric_meaning')),
  definition TEXT NOT NULL,
  academic_guidance TEXT NOT NULL,
  school_appropriateness TEXT NOT NULL CHECK (school_appropriateness IN ('acceptable_casual', 'strictly_informal', 'caution_required', 'forbidden_in_formal')),
  standard_score INTEGER NOT NULL DEFAULT 3 CHECK (standard_score BETWEEN 1 AND 5),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_term_meaning_order UNIQUE (term_id, meaning_order)
);

CREATE TRIGGER trg_term_meanings_updated_at
  BEFORE UPDATE ON public.term_meanings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 4. BẢNG TERM_EXAMPLES (1 từ có nhiều ngữ cảnh đối thoại)
CREATE TABLE IF NOT EXISTS public.term_examples (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term_id UUID NOT NULL REFERENCES public.terms(id) ON DELETE CASCADE,
  meaning_id UUID REFERENCES public.term_meanings(id) ON DELETE SET NULL,
  context_title TEXT NOT NULL DEFAULT 'Hội thoại giao tiếp học sinh',
  dialogue JSONB NOT NULL DEFAULT '[]'::jsonb,
  notes TEXT,
  audio_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 5. BẢNG TERM_SOURCES (Nguồn gốc nảy sinh và tư liệu khảo sát)
CREATE TABLE IF NOT EXISTS public.term_sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term_id UUID NOT NULL REFERENCES public.terms(id) ON DELETE CASCADE,
  platform TEXT NOT NULL CHECK (platform IN ('tiktok', 'facebook', 'youtube', 'school_campus', 'online_game', 'rap_music', 'forum_other')),
  source_url TEXT,
  surveyor_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  surveyor_name TEXT NOT NULL DEFAULT 'Khảo sát thực địa học đường',
  surveyed_date DATE NOT NULL DEFAULT CURRENT_DATE,
  cultural_context TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 6. BẢNG TERM_REVISIONS (Lịch sử chỉnh sửa, kiểm duyệt)
CREATE TABLE IF NOT EXISTS public.term_revisions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term_id UUID NOT NULL REFERENCES public.terms(id) ON DELETE CASCADE,
  editor_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  editor_name TEXT NOT NULL,
  revision_summary TEXT NOT NULL,
  previous_snapshot JSONB NOT NULL,
  updated_snapshot JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 7. BẢNG SUBMISSIONS (Đề xuất từ mới từ học sinh)
CREATE TABLE IF NOT EXISTS public.submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submitted_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  submitter_name TEXT NOT NULL,
  submitter_school TEXT NOT NULL DEFAULT 'Trường THCS và THPT Long Hiệp',
  submitter_email TEXT,
  word TEXT NOT NULL,
  normalized_word TEXT NOT NULL GENERATED ALWAYS AS (public.normalize_term(word)) STORED,
  category TEXT NOT NULL CHECK (category IN ('slang', 'teencode', 'meme_trend', 'borrowed', 'game_stream', 'school')),
  proposed_meaning TEXT NOT NULL,
  origin TEXT,
  example_context TEXT NOT NULL,
  evidence_url_or_proof TEXT,
  school_appropriateness TEXT NOT NULL CHECK (school_appropriateness IN ('acceptable_casual', 'strictly_informal', 'caution_required', 'forbidden_in_formal')),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'needs_revision')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER trg_submissions_updated_at
  BEFORE UPDATE ON public.submissions
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- 8. BẢNG REVIEWS (Hồ sơ thẩm định và phê duyệt)
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id UUID NOT NULL REFERENCES public.submissions(id) ON DELETE CASCADE,
  term_id UUID REFERENCES public.terms(id) ON DELETE SET NULL,
  reviewer_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  reviewer_name TEXT NOT NULL,
  reviewer_role TEXT NOT NULL DEFAULT 'editor' CHECK (reviewer_role IN ('editor', 'teacher_admin')),
  decision TEXT NOT NULL CHECK (decision IN ('approved', 'rejected', 'needs_revision')),
  pedagogical_feedback TEXT NOT NULL,
  points_awarded INTEGER NOT NULL DEFAULT 30 CHECK (points_awarded >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 9. BẢNG FAVORITES (Mục từ yêu thích)
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  term_id UUID NOT NULL REFERENCES public.terms(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_user_favorite_term UNIQUE (user_id, term_id)
);

-- 10. BẢNG QUIZ_QUESTIONS (Ngân hàng câu hỏi trắc nghiệm)
CREATE TABLE IF NOT EXISTS public.quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  scenario TEXT,
  category TEXT NOT NULL CHECK (category IN ('context_awareness', 'slang_meaning', 'linguistic_purity')),
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_index INTEGER NOT NULL CHECK (correct_index BETWEEN 0 AND 3),
  explanation TEXT NOT NULL,
  points INTEGER NOT NULL DEFAULT 20 CHECK (points > 0),
  unit_lesson TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 11. BẢNG QUIZ_ATTEMPTS (Lịch sử làm bài thử thách)
CREATE TABLE IF NOT EXISTS public.quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  score INTEGER NOT NULL DEFAULT 0,
  total_questions INTEGER NOT NULL,
  details JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 12. BẢNG ACTIVITY_LOGS (Nhật ký hoạt động hệ thống)
CREATE TABLE IF NOT EXISTS public.activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 13. BẢNG REPORTS (Phản ánh từ ngữ nhạy cảm)
CREATE TABLE IF NOT EXISTS public.reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term_id UUID REFERENCES public.terms(id) ON DELETE CASCADE,
  reported_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  reporter_name TEXT,
  reason TEXT NOT NULL CHECK (reason IN ('offensive_content', 'inaccurate_meaning', 'inappropriate_for_school', 'duplicate_term', 'other')),
  details TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'investigating', 'resolved', 'dismissed')),
  resolution_note TEXT,
  resolved_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TRIGGER trg_reports_updated_at
  BEFORE UPDATE ON public.reports
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- CHỈ MỤC TỐI ƯU HIỆU NĂNG
CREATE INDEX IF NOT EXISTS idx_terms_status ON public.terms(status);
CREATE INDEX IF NOT EXISTS idx_terms_category ON public.terms(category);
CREATE INDEX IF NOT EXISTS idx_terms_normalized ON public.terms(normalized_term);
CREATE INDEX IF NOT EXISTS idx_term_meanings_term_id ON public.term_meanings(term_id);
CREATE INDEX IF NOT EXISTS idx_term_examples_term_id ON public.term_examples(term_id);
CREATE INDEX IF NOT EXISTS idx_term_sources_term_id ON public.term_sources(term_id);
CREATE INDEX IF NOT EXISTS idx_submissions_status ON public.submissions(status);
CREATE INDEX IF NOT EXISTS idx_submissions_normalized ON public.submissions(normalized_word);
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_attempts_user_id ON public.quiz_attempts(user_id);
CREATE INDEX IF NOT EXISTS idx_activity_logs_action ON public.activity_logs(action);
CREATE INDEX IF NOT EXISTS idx_reports_status ON public.reports(status);

-- CƠ CHẾ PHÁT HIỆN TỪ TRÙNG
CREATE OR REPLACE FUNCTION public.check_duplicate_term(p_term TEXT)
RETURNS TABLE (
  term_id UUID,
  term_name TEXT,
  status TEXT,
  category TEXT,
  similarity_type TEXT
) AS $$
DECLARE
  v_norm TEXT := public.normalize_term(p_term);
BEGIN
  RETURN QUERY
  SELECT 
    t.id AS term_id,
    t.term AS term_name,
    t.status,
    t.category,
    CASE 
      WHEN t.normalized_term = v_norm THEN 'exact_match'
      WHEN t.normalized_term LIKE '%' || v_norm || '%' OR v_norm LIKE '%' || t.normalized_term || '%' THEN 'partial_match'
      ELSE 'fuzzy_match'
    END AS similarity_type
  FROM public.terms t
  WHERE t.normalized_term = v_norm
     OR t.normalized_term LIKE '%' || v_norm || '%'
     OR v_norm LIKE '%' || t.normalized_term || '%';
END;
$$ LANGUAGE plpgsql STABLE;

-- THIẾT LẬP ROW LEVEL SECURITY (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.terms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.term_meanings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.term_examples ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.term_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.term_revisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reports ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.is_editor_or_teacher()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role IN ('editor', 'teacher_admin')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE POLICY "Cho phép đọc hồ sơ công khai" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Chủ sở hữu được cập nhật hồ sơ cá nhân" ON public.profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Mọi người được đọc mục từ đã xuất bản" ON public.terms
  FOR SELECT USING (status = 'published' OR public.is_editor_or_teacher() OR auth.uid() = author_id);
CREATE POLICY "Ban biên tập và giáo viên được chỉnh sửa mục từ" ON public.terms
  FOR ALL USING (public.is_editor_or_teacher());

CREATE POLICY "Mọi người được đọc nghĩa của từ đã xuất bản" ON public.term_meanings
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.terms WHERE terms.id = term_meanings.term_id AND (terms.status = 'published' OR public.is_editor_or_teacher()))
  );
CREATE POLICY "Ban biên tập được quản lý nghĩa của từ" ON public.term_meanings
  FOR ALL USING (public.is_editor_or_teacher());

CREATE POLICY "Mọi người được đọc ví dụ của từ đã xuất bản" ON public.term_examples
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.terms WHERE terms.id = term_examples.term_id AND (terms.status = 'published' OR public.is_editor_or_teacher()))
  );
CREATE POLICY "Ban biên tập được quản lý ví dụ" ON public.term_examples
  FOR ALL USING (public.is_editor_or_teacher());

CREATE POLICY "Mọi người được xem nguồn khảo sát" ON public.term_sources
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.terms WHERE terms.id = term_sources.term_id AND (terms.status = 'published' OR public.is_editor_or_teacher()))
  );
CREATE POLICY "Ban biên tập được quản lý nguồn khảo sát" ON public.term_sources
  FOR ALL USING (public.is_editor_or_teacher());

CREATE POLICY "Mọi người được đọc lịch sử chỉnh sửa sư phạm" ON public.term_revisions FOR SELECT USING (true);
CREATE POLICY "Ban biên tập được ghi lịch sử chỉnh sửa" ON public.term_revisions FOR INSERT WITH CHECK (public.is_editor_or_teacher());

CREATE POLICY "Người dùng được gửi đề xuất mới" ON public.submissions
  FOR INSERT WITH CHECK (auth.uid() = submitted_by OR auth.uid() IS NULL);
CREATE POLICY "Người gửi được xem đề xuất của mình" ON public.submissions
  FOR SELECT USING (auth.uid() = submitted_by OR public.is_editor_or_teacher() OR submitted_by IS NULL);
CREATE POLICY "Ban biên tập được duyệt và cập nhật đề xuất" ON public.submissions
  FOR UPDATE USING (public.is_editor_or_teacher());

CREATE POLICY "Mọi người được đọc kết quả thẩm định" ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Ban biên tập và giáo viên được tạo thẩm định" ON public.reviews FOR INSERT WITH CHECK (public.is_editor_or_teacher());

CREATE POLICY "Người dùng quản lý danh sách yêu thích của chính mình" ON public.favorites FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Mọi người được đọc câu hỏi thử thách đang kích hoạt" ON public.quiz_questions
  FOR SELECT USING (is_active = true OR public.is_editor_or_teacher());
CREATE POLICY "Giáo viên được quản lý ngân hàng câu hỏi" ON public.quiz_questions FOR ALL USING (public.is_editor_or_teacher());

CREATE POLICY "Học sinh được lưu bài làm của mình" ON public.quiz_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Học sinh xem lịch sử làm bài của mình" ON public.quiz_attempts FOR SELECT USING (auth.uid() = user_id OR public.is_editor_or_teacher());

CREATE POLICY "Người dùng được ghi nhật ký hoạt động" ON public.activity_logs
  FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);
CREATE POLICY "Chỉ giáo viên và quản trị viên được xem nhật ký" ON public.activity_logs
  FOR SELECT USING (public.is_editor_or_teacher());

CREATE POLICY "Mọi người được gửi báo cáo nội dung nhạy cảm" ON public.reports FOR INSERT WITH CHECK (true);
CREATE POLICY "Chỉ giáo viên và ban biên tập được xử lý báo cáo" ON public.reports FOR SELECT USING (public.is_editor_or_teacher());
CREATE POLICY "Chỉ giáo viên và ban biên tập được cập nhật báo cáo" ON public.reports FOR UPDATE USING (public.is_editor_or_teacher());
`;

export const SEED_SQL = `-- SEED DATA (Dữ liệu mẫu tách biệt có thể xóa an toàn)
INSERT INTO public.profiles (id, email, full_name, role, school, grade, title, points)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'tramthanhtuanlh@gmail.com', 'Thầy Trầm Thanh Tuấn', 'teacher_admin', 'Trường THCS và THPT Long Hiệp', 'Tổ bộ môn Ngữ văn', 'Giáo viên phát triển Chuyên đề 2', 999),
  ('00000000-0000-0000-0000-000000000002', 'ngocmai.editor@longhiep.edu.vn', 'Lê Hoàng Ngọc Mai', 'editor', 'Trường THCS và THPT Long Hiệp', 'Lớp 11A2 (Ban Biên tập)', 'Trưởng ban Thẩm định Ngôn ngữ', 380),
  ('00000000-0000-0000-0000-000000000003', 'vanminh11a1@longhiep.edu.vn', 'Nguyễn Văn Minh', 'student', 'Trường THCS và THPT Long Hiệp', 'Lớp 11A1 (Chuyên đề 2)', 'Học viên Ngôn ngữ Trẻ', 160)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.terms (id, term, pronunciation, category, status, author_id, author_name, tags, likes_count, views_count)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'Flex', '/fleks/', 'borrowed', 'published', '00000000-0000-0000-0000-000000000001', 'Thầy Trầm Thanh Tuấn (GV Ngữ văn)', ARRAY['Trend MXH', 'Từ mượn', 'Khen ngợi'], 142, 1250),
  ('22222222-2222-2222-2222-222222222222', 'Check var', '/tʃek vaːr/', 'borrowed', 'published', '00000000-0000-0000-0000-000000000001', 'Thầy Trầm Thanh Tuấn (GV Ngữ văn)', ARRAY['Trend bóng đá', 'Minh bạch'], 98, 890),
  ('33333333-3333-3333-3333-333333333333', 'Cột sống', '/kot sopŋ/', 'slang', 'published', '00000000-0000-0000-0000-000000000001', 'Thầy Trầm Thanh Tuấn (GV Ngữ văn)', ARRAY['Chơi chữ', 'Meme', 'Đồng âm'], 215, 1670),
  ('44444444-4444-4444-4444-444444444444', 'Ét ô ét', '/ɛt o ɛt/ (S.O.S)', 'meme_trend', 'published', '00000000-0000-0000-0000-000000000001', 'Thầy Trầm Thanh Tuấn (GV Ngữ văn)', ARRAY['Meme TikTok', 'Than thở'], 180, 1420),
  ('55555555-5555-5555-5555-555555555555', 'Chữa lành', '/tɕɨə laːŋ/', 'slang', 'published', '00000000-0000-0000-0000-000000000001', 'Thầy Trầm Thanh Tuấn (GV Ngữ văn)', ARRAY['Tâm lý', 'Xu hướng', 'Thư giãn'], 167, 1340)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.term_meanings (id, term_id, meaning_order, meaning_type, definition, academic_guidance, school_appropriateness, standard_score)
VALUES
  ('aa000000-0000-0000-0000-000000000001', '11111111-1111-1111-1111-111111111111', 1, 'net_meaning', 'Hành động khoe khoang một cách tinh tế hoặc công khai về thành tích, tài sản, bằng khen trên mạng xã hội.', 'Từ mượn tiếng Anh. Trong giao tiếp học sinh có thể dùng để chúc mừng bạn bè, tuyệt đối không dùng trong bài làm văn.', 'acceptable_casual', 3),
  ('aa000000-0000-0000-0000-000000000002', '11111111-1111-1111-1111-111111111111', 2, 'literal_meaning', 'Hành động uốn cong hoặc siết chặt cơ bắp trong thể hình.', 'Nghĩa gốc sinh học và thể thao.', 'acceptable_casual', 5),
  ('aa000000-0000-0000-0000-000000000003', '22222222-2222-2222-2222-222222222222', 1, 'net_meaning', 'Hành động đối chiếu bằng chứng để xác thực một phát ngôn xem có đúng sự thật hay chém gió.', 'Phản ánh tư duy phản biện của học sinh thời đại số, không nên dùng để soi mói bắt nạt mạng.', 'acceptable_casual', 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.quiz_questions (id, title, scenario, category, question, options, correct_index, explanation, points, unit_lesson, is_active)
VALUES
  ('99000000-0000-0000-0000-000000000001', 'Ngữ cảnh giao tiếp: Đúng nơi - Đúng lúc', 'Em viết email xin phép cô giáo chủ nhiệm nghỉ học do bị sốt.', 'context_awareness', 'Cách diễn đạt nào là CHUẨN MỰC học đường?', '["Em chào cô, hôm nay em bị sốt ét ô ét...", "Kính gửi cô giáo chủ nhiệm, em viết thư này xin phép cô cho em nghỉ học buổi sáng nay do bị ốm.", "Cô ơi, cột sống em bất ổn quá...", "Chào cô, em ốm xịt keo..."]'::jsonb, 1, 'Trong văn bản học đường gửi thầy cô giáo, học sinh cần giữ thái độ lễ phép, trang trọng, dùng tiếng Việt chuẩn mực.', 20, 'Ngữ văn 11 - Chuyên đề 2', true)
ON CONFLICT (id) DO NOTHING;
`;

export const VERIFY_INTEGRITY_SQL = `-- ==============================================================================
-- KIỂM TRA TÍNH TOÀN VẸN CƠ SỞ DỮ LIỆU (DATABASE INTEGRITY VERIFICATION SUITE)
-- ==============================================================================

-- 1. Kiểm tra 13 bảng đã được tạo đầy đủ trong schema public:
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN (
    'profiles', 'terms', 'term_meanings', 'term_examples', 
    'term_sources', 'term_revisions', 'submissions', 'reviews', 
    'favorites', 'quiz_questions', 'quiz_attempts', 'activity_logs', 'reports'
  )
ORDER BY table_name;

-- 2. Kiểm tra trạng thái Row Level Security (RLS) của 13 bảng (Tất cả phải là TRUE):
SELECT relname AS table_name, relrowsecurity AS rls_enabled 
FROM pg_class 
WHERE relnamespace = 'public'::regnamespace 
  AND relname IN (
    'profiles', 'terms', 'term_meanings', 'term_examples', 
    'term_sources', 'term_revisions', 'submissions', 'reviews', 
    'favorites', 'quiz_questions', 'quiz_attempts', 'activity_logs', 'reports'
  )
ORDER BY relname;

-- 3. Kiểm tra tính toàn vẹn khóa ngoại và phát hiện bản ghi mồ côi (Orphan records - kết quả phải = 0):
SELECT 'term_meanings' AS table_checked, count(*) AS orphan_records 
FROM public.term_meanings tm LEFT JOIN public.terms t ON tm.term_id = t.id WHERE t.id IS NULL
UNION ALL
SELECT 'term_examples', count(*) 
FROM public.term_examples te LEFT JOIN public.terms t ON te.term_id = t.id WHERE t.id IS NULL
UNION ALL
SELECT 'term_sources', count(*) 
FROM public.term_sources ts LEFT JOIN public.terms t ON ts.term_id = t.id WHERE t.id IS NULL
UNION ALL
SELECT 'term_revisions', count(*) 
FROM public.term_revisions tr LEFT JOIN public.terms t ON tr.term_id = t.id WHERE t.id IS NULL
UNION ALL
SELECT 'reviews (on terms)', count(*) 
FROM public.reviews r LEFT JOIN public.terms t ON r.term_id = t.id WHERE r.term_id IS NOT NULL AND t.id IS NULL;

-- 4. Thử nghiệm hàm phát hiện từ trùng lặp (normalize_term và check_duplicate_term):
-- Test với chữ hoa, có dấu tiếng Việt, khoảng trắng thừa:
SELECT * FROM public.check_duplicate_term('   FLEX   ');
SELECT * FROM public.check_duplicate_term('Chữa Lành');
SELECT * FROM public.check_duplicate_term('từ_mới_hoàn_toàn_12345');
`;

export const ERD_MARKDOWN = `# SƠ ĐỒ QUAN HỆ THỰC THỂ (ERD) & KIẾN TRÚC CƠ SỞ DỮ LIỆU NETWORD
**Dự án:** NETWORD – Từ điển ngôn ngữ trên không gian mạng dành cho học sinh THPT
**Chuyên đề 2:** Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại (Ngữ văn 11)
**Đơn vị:** Trường THCS và THPT Long Hiệp
**Giáo viên phát triển:** Thầy Trầm Thanh Tuấn (tramthanhtuanlh@gmail.com)

\`\`\`mermaid
erDiagram
    PROFILES ||--o{ TERMS : "tạo / quản lý"
    PROFILES ||--o{ SUBMISSIONS : "đề xuất từ"
    PROFILES ||--o{ REVIEWS : "thẩm định"
    PROFILES ||--o{ FAVORITES : "lưu yêu thích"
    PROFILES ||--o{ QUIZ_ATTEMPTS : "làm thử thách"
    PROFILES ||--o{ ACTIVITY_LOGS : "thực hiện hành động"
    PROFILES ||--o{ REPORTS : "phản ánh"

    TERMS ||--|{ TERM_MEANINGS : "có 1 hoặc nhiều nghĩa (1:N)"
    TERMS ||--o{ TERM_EXAMPLES : "có nhiều ngữ cảnh đối thoại (1:N)"
    TERMS ||--o{ TERM_SOURCES : "có nguồn khảo sát thực địa (1:N)"
    TERMS ||--o{ TERM_REVISIONS : "lưu vết lịch sử biên tập (1:N)"
    TERMS ||--o{ FAVORITES : "được yêu thích"
    TERMS ||--o{ REPORTS : "bị phản ánh"
    TERMS ||--o{ REVIEWS : "kết quả thẩm định"

    TERM_MEANINGS ||--o{ TERM_EXAMPLES : "áp dụng cho nghĩa"
    SUBMISSIONS ||--o{ REVIEWS : "được thẩm định bởi"
    QUIZ_QUESTIONS ||--o{ QUIZ_ATTEMPTS : "được trả lời trong"
\`\`\`

## 13 Bảng trong Cơ sở dữ liệu:
1. profiles: Hồ sơ học sinh, biên tập viên, giáo viên admin
2. terms: Mục từ chính (hỗ trợ 6 trạng thái, chống trùng lặp qua normalized_term)
3. term_meanings: Nhiều nghĩa của 1 từ (nghĩa mạng, nghĩa đen, lời khuyên sư phạm)
4. term_examples: Nhiều ngữ cảnh và đối thoại minh họa (JSONB)
5. term_sources: Nguồn khảo sát mạng xã hội (TikTok, Facebook, học đường...)
6. term_revisions: Lịch sử sửa đổi biên tập (snapshots trước/sau)
7. submissions: Đề xuất từ mới từ học sinh THPT
8. reviews: Biên bản kiểm duyệt và thẩm định của giáo viên / biên tập viên
9. favorites: Danh sách mục từ yêu thích của học sinh
10. quiz_questions: Ngân hàng câu hỏi trắc nghiệm Chuyên đề 2
11. quiz_attempts: Lịch sử làm bài thử thách của học sinh
12. activity_logs: Nhật ký hoạt động hệ thống
13. reports: Báo cáo phản ánh nội dung nhạy cảm hoặc sai lệch
`;

export interface TableSummaryItem {
  name: string;
  vietnameseName: string;
  purpose: string;
  rlsPolicy: string;
  keyFields: string;
}

export const SUPABASE_TABLES_INFO: TableSummaryItem[] = [
  {
    name: 'profiles',
    vietnameseName: 'Hồ sơ người dùng & Phân quyền',
    purpose: 'Lưu thông tin học sinh, ban biên tập và giáo viên Trường THCS & THPT Long Hiệp.',
    rlsPolicy: 'Đọc công khai, người dùng tự sửa hồ sơ của mình, chỉ giáo viên đổi vai trò.',
    keyFields: 'id (PK), email, full_name, role (student | editor | teacher_admin), points',
  },
  {
    name: 'terms',
    vietnameseName: 'Bảng mục từ chính',
    purpose: 'Lưu thông tin định danh thuật ngữ, kiểm soát 6 trạng thái và chống trùng lặp.',
    rlsPolicy: 'Công chúng đọc từ published, tác giả xem bản draft/pending, giáo viên toàn quyền.',
    keyFields: 'id (PK), term, normalized_term (UNIQUE), status (6 trạng thái), category, author_id',
  },
  {
    name: 'term_meanings',
    vietnameseName: 'Nghĩa của mục từ (1:N)',
    purpose: 'Hỗ trợ một từ có nhiều nghĩa (nghĩa mạng, nghĩa đen), điểm chuẩn mực và lời khuyên sư phạm.',
    rlsPolicy: 'Công chúng đọc nghĩa của từ published, giáo viên quản lý chỉnh sửa.',
    keyFields: 'id (PK), term_id (FK), meaning_order, meaning_type, definition, academic_guidance',
  },
  {
    name: 'term_examples',
    vietnameseName: 'Ví dụ & Đối thoại minh họa (1:N)',
    purpose: 'Lưu các đoạn chat giả lập thực tế giữa học sinh để hiểu ngữ cảnh dùng từ.',
    rlsPolicy: 'Công chúng đọc ví dụ từ published, giáo viên/biên tập viên quản lý.',
    keyFields: 'id (PK), term_id (FK), meaning_id (FK), context_title, dialogue (JSONB)',
  },
  {
    name: 'term_sources',
    vietnameseName: 'Nguồn khảo sát thực địa (1:N)',
    purpose: 'Lưu vết nền tảng xuất hiện (TikTok, Facebook, sân trường), bối cảnh văn hóa.',
    rlsPolicy: 'Đọc công khai, giáo viên và ban biên tập ghi nhận.',
    keyFields: 'id (PK), term_id (FK), platform, source_url, cultural_context, surveyed_date',
  },
  {
    name: 'term_revisions',
    vietnameseName: 'Lịch sử kiểm duyệt & Sửa đổi',
    purpose: 'Lưu vết toàn bộ thay đổi nội dung mục từ (snapshot trước và sau) phục vụ học thuật.',
    rlsPolicy: 'Chỉ giáo viên và ban biên tập được truy cập kiểm toán.',
    keyFields: 'id (PK), term_id (FK), editor_id (FK), editor_name, previous_snapshot, updated_snapshot',
  },
  {
    name: 'submissions',
    vietnameseName: 'Đề xuất từ mới từ học sinh',
    purpose: 'Tiếp nhận các từ ngữ mới do học sinh THPT phát hiện và gửi lên ban biên tập.',
    rlsPolicy: 'Học sinh được tạo và xem đề xuất của mình; ban biên tập duyệt.',
    keyFields: 'id (PK), word, submitted_by (FK), status (pending | approved | rejected)',
  },
  {
    name: 'reviews',
    vietnameseName: 'Biên bản thẩm định & Phê duyệt',
    purpose: 'Ghi nhận nhận xét chuyên môn, quyết định duyệt hoặc yêu cầu chỉnh sửa của thầy cô.',
    rlsPolicy: 'Công chúng đọc nhận xét được công bố; giáo viên/biên tập viên ghi phiếu.',
    keyFields: 'id (PK), submission_id (FK), term_id (FK), reviewer_id (FK), decision, feedback',
  },
  {
    name: 'favorites',
    vietnameseName: 'Mục từ yêu thích của học sinh',
    purpose: 'Học sinh lưu lại các mục từ hữu ích để tra cứu lại và ôn tập.',
    rlsPolicy: 'Học sinh chỉ xem và quản lý danh sách yêu thích của chính mình.',
    keyFields: 'id (PK), user_id (FK), term_id (FK) - UNIQUE(user_id, term_id)',
  },
  {
    name: 'quiz_questions',
    vietnameseName: 'Ngân hàng câu hỏi thử thách',
    purpose: 'Lưu các tình huống trắc nghiệm văn hóa giao tiếp và hiểu biết ngôn ngữ Chuyên đề 2.',
    rlsPolicy: 'Học sinh đọc câu hỏi đang kích hoạt; giáo viên biên soạn.',
    keyFields: 'id (PK), title, scenario, category, question, options (JSONB), correct_index, points',
  },
  {
    name: 'quiz_attempts',
    vietnameseName: 'Lịch sử làm bài thử thách',
    purpose: 'Lưu điểm số, thời gian và số câu trả lời đúng của học sinh để xếp hạng vinh danh.',
    rlsPolicy: 'Học sinh lưu và xem bài làm của mình; giáo viên xem thống kê toàn trường.',
    keyFields: 'id (PK), user_id (FK), question_id (FK), selected_index, is_correct, points_awarded',
  },
  {
    name: 'activity_logs',
    vietnameseName: 'Nhật ký hoạt động hệ thống',
    purpose: 'Ghi nhận các thao tác tra cứu, thích từ, đóng góp đề xuất nhằm phục vụ nghiên cứu.',
    rlsPolicy: 'Ghi nhận tự động; chỉ giáo viên và quản trị viên xem báo cáo.',
    keyFields: 'id (PK), user_id (FK), action_type, entity_type, entity_id, metadata (JSONB)',
  },
  {
    name: 'reports',
    vietnameseName: 'Báo cáo & Phản ánh nội dung',
    purpose: 'Học sinh gửi phản ánh khi phát hiện từ ngữ phản cảm hoặc thông tin giải nghĩa chưa chuẩn.',
    rlsPolicy: 'Mọi người được gửi báo cáo; chỉ giáo viên và ban biên tập tiếp nhận xử lý.',
    keyFields: 'id (PK), term_id (FK), reporter_id (FK), reason, description, status (pending | resolved)',
  },
];

