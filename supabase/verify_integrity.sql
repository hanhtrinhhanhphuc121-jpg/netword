-- ==============================================================================
-- NETWORD - DATA INTEGRITY VERIFICATION SUITE
-- Bộ câu lệnh SQL kiểm tra toàn diện tính toàn vẹn và tính đúng đắn của dữ liệu
-- ==============================================================================

-- 1. KIỂM TRA SỐ LƯỢNG BẢNG ĐÃ TẠO (Yêu cầu đủ 13 bảng)
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN (
    'profiles', 'terms', 'term_meanings', 'term_examples', 
    'term_sources', 'term_revisions', 'submissions', 'reviews', 
    'favorites', 'quiz_questions', 'quiz_attempts', 'activity_logs', 'reports'
  )
ORDER BY table_name;

-- 2. KIỂM TRA TRẠNG THÁI ROW LEVEL SECURITY (RLS) TRÊN CẢ 13 BẢNG (Tất cả phải = true)
SELECT 
  relname AS table_name,
  relrowsecurity AS rls_enabled,
  relforcerowsecurity AS rls_forced
FROM pg_class
WHERE relnamespace = 'public'::regnamespace
  AND relname IN (
    'profiles', 'terms', 'term_meanings', 'term_examples', 
    'term_sources', 'term_revisions', 'submissions', 'reviews', 
    'favorites', 'quiz_questions', 'quiz_attempts', 'activity_logs', 'reports'
  )
ORDER BY relname;

-- 3. KIỂM TRA TẤT CẢ KHÓA NGOẠI (FOREIGN KEY INTEGRITY)
SELECT
    tc.table_name, 
    kcu.column_name, 
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name,
    rc.delete_rule AS on_delete
FROM information_schema.table_constraints AS tc 
JOIN information_schema.key_column_usage AS kcu
  ON tc.constraint_name = kcu.constraint_name
  AND tc.table_schema = kcu.table_schema
JOIN information_schema.constraint_column_usage AS ccu
  ON ccu.constraint_name = tc.constraint_name
  AND ccu.table_schema = tc.table_schema
JOIN information_schema.referential_constraints AS rc
  ON rc.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY' 
  AND tc.table_schema = 'public'
ORDER BY tc.table_name;

-- 4. KIỂM TRA BẢNG TERMS: TRẠNG THÁI HỢP LỆ VÀ KHÔNG CÓ BẢN GHI RÁC
SELECT 
  status, 
  COUNT(*) AS total_terms
FROM public.terms
GROUP BY status;

-- 5. KIỂM TRA CƠ CHẾ CHỐNG TRÙNG LẶP TỪ NGỮ (DUPLICATE DETECTION TEST)
-- Test hàm chuẩn hóa
SELECT 
  'Flex' AS input_term,
  public.normalize_term('  Flex   ') AS normalized,
  public.normalize_term('FLEX') = public.normalize_term('flex') AS is_case_insensitive_match,
  public.normalize_term('Flèx') = public.normalize_term('flex') AS is_accent_stripped;

-- Test hàm tìm từ trùng
SELECT * FROM public.check_duplicate_term('flex');
SELECT * FROM public.check_duplicate_term('check');

-- 6. KIỂM TRA MỐI QUAN HỆ 1 TỪ CÓ NHIỀU NGHĨA VÀ NHIỀU VÍ DỤ
SELECT 
  t.term,
  t.status,
  COUNT(DISTINCT tm.id) AS total_meanings,
  COUNT(DISTINCT te.id) AS total_examples,
  COUNT(DISTINCT ts.id) AS total_sources
FROM public.terms t
LEFT JOIN public.term_meanings tm ON tm.term_id = t.id
LEFT JOIN public.term_examples te ON te.term_id = t.id
LEFT JOIN public.term_sources ts ON ts.term_id = t.id
GROUP BY t.id, t.term, t.status
ORDER BY total_meanings DESC;

-- 7. KIỂM TRA BẢN GHI MỒ CÔI (ORPHAN RECORDS CHECK - PHẢI TRẢ VỀ 0)
SELECT 'Orphan term_meanings' AS issue, COUNT(*) AS count
FROM public.term_meanings tm
LEFT JOIN public.terms t ON tm.term_id = t.id
WHERE t.id IS NULL
UNION ALL
SELECT 'Orphan term_examples', COUNT(*)
FROM public.term_examples te
LEFT JOIN public.terms t ON te.term_id = t.id
WHERE t.id IS NULL
UNION ALL
SELECT 'Orphan reviews', COUNT(*)
FROM public.reviews r
LEFT JOIN public.submissions s ON r.submission_id = s.id
WHERE s.id IS NULL;

-- 8. KIỂM TRA BẢNG NGÂN HÀNG CÂU HỎI TRẮC NGHIỆM (QUIZ INTEGRITY)
SELECT 
  id,
  title,
  category,
  jsonb_array_length(options) AS num_options,
  correct_index,
  points,
  unit_lesson
FROM public.quiz_questions;
