-- ==============================================================================
-- NETWORD - DATABASE MIGRATION SCRIPT (SUPABASE / POSTGRESQL)
-- Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
-- Đơn vị: Trường THCS và THPT Long Hiệp
-- Giáo viên phát triển: Thầy Trầm Thanh Tuấn (tramthanhtuanlh@gmail.com)
-- Ngày tạo: 2026-10-31
-- ==============================================================================

-- Bật extension cần thiết
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "unaccent";

-- ------------------------------------------------------------------------------
-- 0. HÀM HỖ TRỢ VÀ CHUẨN HÓA (HELPER FUNCTIONS)
-- ------------------------------------------------------------------------------

-- Hàm tự động cập nhật timestamp updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Hàm chuẩn hóa từ để phát hiện từ trùng (loại bỏ dấu, khoảng trắng thừa, chữ thường)
CREATE OR REPLACE FUNCTION public.normalize_term(input_term TEXT)
RETURNS TEXT AS $$
BEGIN
  IF input_term IS NULL THEN
    RETURN '';
  END IF;
  -- Chuyển về chữ thường, bỏ dấu tiếng Việt, loại bỏ ký tự đặc biệt, gộp khoảng trắng
  RETURN regexp_replace(lower(trim(unaccent(input_term))), '\s+', ' ', 'g');
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- ------------------------------------------------------------------------------
-- 1. BẢNG PROFILES (Hồ sơ người dùng & Phân quyền)
-- ------------------------------------------------------------------------------
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

-- ------------------------------------------------------------------------------
-- 2. BẢNG TERMS (Mục từ vựng ngôn ngữ mạng)
-- ------------------------------------------------------------------------------
-- Trạng thái từ: draft, pending, needs_revision, published, rejected, archived
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

-- ------------------------------------------------------------------------------
-- 3. BẢNG TERM_MEANINGS (Một từ có nhiều nghĩa & Định hướng sư phạm)
-- ------------------------------------------------------------------------------
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

-- ------------------------------------------------------------------------------
-- 4. BẢNG TERM_EXAMPLES (Một từ có nhiều ngữ cảnh đối thoại / ví dụ)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.term_examples (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term_id UUID NOT NULL REFERENCES public.terms(id) ON DELETE CASCADE,
  meaning_id UUID REFERENCES public.term_meanings(id) ON DELETE SET NULL,
  context_title TEXT NOT NULL DEFAULT 'Hội thoại giao tiếp học sinh',
  dialogue JSONB NOT NULL DEFAULT '[]'::jsonb, -- Mảng tin nhắn đối thoại: [{sender, isMe, text, time}]
  notes TEXT,
  audio_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ------------------------------------------------------------------------------
-- 5. BẢNG TERM_SOURCES (Nguồn gốc nảy sinh và tư liệu khảo sát)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.term_sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  term_id UUID NOT NULL REFERENCES public.terms(id) ON DELETE CASCADE,
  platform TEXT NOT NULL CHECK (platform IN ('tiktok', 'facebook', 'youtube', 'school_campus', 'online_game', 'rap_music', 'forum_other')),
  source_url TEXT,
  surveyor_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  surveyor_name TEXT NOT NULL DEFAULT 'Khảo sát thực địa học đường',
  surveyed_date DATE NOT NULL DEFAULT CURRENT_DATE,
  cultural_context TEXT NOT NULL, -- Bối cảnh văn hóa xã hội nảy sinh
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ------------------------------------------------------------------------------
-- 6. BẢNG TERM_REVISIONS (Lịch sử chỉnh sửa, kiểm duyệt mục từ)
-- ------------------------------------------------------------------------------
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

-- ------------------------------------------------------------------------------
-- 7. BẢNG SUBMISSIONS (Đề xuất từ mới từ học sinh)
-- ------------------------------------------------------------------------------
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

-- ------------------------------------------------------------------------------
-- 8. BẢNG REVIEWS (Hồ sơ thẩm định và phê duyệt sư phạm)
-- ------------------------------------------------------------------------------
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

-- ------------------------------------------------------------------------------
-- 9. BẢNG FAVORITES (Mục từ yêu thích của học sinh)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  term_id UUID NOT NULL REFERENCES public.terms(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT uq_user_favorite_term UNIQUE (user_id, term_id)
);

-- ------------------------------------------------------------------------------
-- 10. BẢNG QUIZ_QUESTIONS (Ngân hàng câu hỏi trắc nghiệm Ngữ văn 11)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.quiz_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  scenario TEXT,
  category TEXT NOT NULL CHECK (category IN ('context_awareness', 'slang_meaning', 'linguistic_purity')),
  question TEXT NOT NULL,
  options JSONB NOT NULL, -- Mảng 4 lựa chọn [A, B, C, D]
  correct_index INTEGER NOT NULL CHECK (correct_index BETWEEN 0 AND 3),
  explanation TEXT NOT NULL,
  points INTEGER NOT NULL DEFAULT 20 CHECK (points > 0),
  unit_lesson TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ------------------------------------------------------------------------------
-- 11. BẢNG QUIZ_ATTEMPTS (Lịch sử làm bài thử thách & điểm số)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.quiz_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  score INTEGER NOT NULL DEFAULT 0,
  total_questions INTEGER NOT NULL,
  details JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ------------------------------------------------------------------------------
-- 12. BẢNG ACTIVITY_LOGS (Nhật ký hoạt động hệ thống & Thống kê)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  action TEXT NOT NULL, -- 'search', 'view', 'bookmark', 'submit', 'review', 'quiz_finish'
  entity_type TEXT NOT NULL, -- 'term', 'submission', 'quiz', 'system'
  entity_id TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ------------------------------------------------------------------------------
-- 13. BẢNG REPORTS (Phản ánh từ ngữ nhạy cảm / chưa chuẩn mực)
-- ------------------------------------------------------------------------------
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

-- ------------------------------------------------------------------------------
-- 14. CHỈ MỤC TỐI ƯU HIỆU NĂNG (INDEXES)
-- ------------------------------------------------------------------------------
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

-- ------------------------------------------------------------------------------
-- 15. CƠ CHẾ PHÁT HIỆN TỪ TRÙNG (DUPLICATE DETECTION FUNCTION)
-- ------------------------------------------------------------------------------
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

-- ------------------------------------------------------------------------------
-- 16. THIẾT LẬP BẢO MẬT ROW LEVEL SECURITY (RLS) & CHÍNH SÁCH QUYỀN TỐI THIỂU
-- ------------------------------------------------------------------------------
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

-- Helper check role
CREATE OR REPLACE FUNCTION public.is_editor_or_teacher()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role IN ('editor', 'teacher_admin')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Chính sách bảng profiles
CREATE POLICY "Cho phép đọc hồ sơ công khai" ON public.profiles
  FOR SELECT USING (true);

CREATE POLICY "Chủ sở hữu được cập nhật hồ sơ cá nhân" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Chính sách bảng terms
CREATE POLICY "Mọi người được đọc mục từ đã xuất bản" ON public.terms
  FOR SELECT USING (status = 'published' OR public.is_editor_or_teacher() OR auth.uid() = author_id);

CREATE POLICY "Ban biên tập và giáo viên được chỉnh sửa mục từ" ON public.terms
  FOR ALL USING (public.is_editor_or_teacher());

-- Chính sách bảng term_meanings & term_examples & term_sources
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

-- Chính sách bảng term_revisions
CREATE POLICY "Mọi người được đọc lịch sử chỉnh sửa sư phạm" ON public.term_revisions
  FOR SELECT USING (true);

CREATE POLICY "Ban biên tập được ghi lịch sử chỉnh sửa" ON public.term_revisions
  FOR INSERT WITH CHECK (public.is_editor_or_teacher());

-- Chính sách bảng submissions
CREATE POLICY "Người dùng được gửi đề xuất mới" ON public.submissions
  FOR INSERT WITH CHECK (auth.uid() = submitted_by OR auth.uid() IS NULL);

CREATE POLICY "Người gửi được xem đề xuất của mình" ON public.submissions
  FOR SELECT USING (auth.uid() = submitted_by OR public.is_editor_or_teacher() OR submitted_by IS NULL);

CREATE POLICY "Ban biên tập được duyệt và cập nhật đề xuất" ON public.submissions
  FOR UPDATE USING (public.is_editor_or_teacher());

-- Chính sách bảng reviews
CREATE POLICY "Mọi người được đọc kết quả thẩm định" ON public.reviews
  FOR SELECT USING (true);

CREATE POLICY "Ban biên tập và giáo viên được tạo thẩm định" ON public.reviews
  FOR INSERT WITH CHECK (public.is_editor_or_teacher());

-- Chính sách bảng favorites
CREATE POLICY "Người dùng quản lý danh sách yêu thích của chính mình" ON public.favorites
  FOR ALL USING (auth.uid() = user_id);

-- Chính sách bảng quiz_questions
CREATE POLICY "Mọi người được đọc câu hỏi thử thách đang kích hoạt" ON public.quiz_questions
  FOR SELECT USING (is_active = true OR public.is_editor_or_teacher());

CREATE POLICY "Giáo viên được quản lý ngân hàng câu hỏi" ON public.quiz_questions
  FOR ALL USING (public.is_editor_or_teacher());

-- Chính sách bảng quiz_attempts
CREATE POLICY "Học sinh được lưu bài làm của mình" ON public.quiz_attempts
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Học sinh xem lịch sử làm bài của mình" ON public.quiz_attempts
  FOR SELECT USING (auth.uid() = user_id OR public.is_editor_or_teacher());

-- Chính sách bảng activity_logs
CREATE POLICY "Người dùng được ghi nhật ký hoạt động" ON public.activity_logs
  FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Chỉ giáo viên và quản trị viên được xem nhật ký" ON public.activity_logs
  FOR SELECT USING (public.is_editor_or_teacher());

-- Chính sách bảng reports
CREATE POLICY "Mọi người được gửi báo cáo nội dung nhạy cảm" ON public.reports
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Chỉ giáo viên và ban biên tập được xử lý báo cáo" ON public.reports
  FOR SELECT USING (public.is_editor_or_teacher());

CREATE POLICY "Chỉ giáo viên và ban biên tập được cập nhật báo cáo" ON public.reports
  FOR UPDATE USING (public.is_editor_or_teacher());
