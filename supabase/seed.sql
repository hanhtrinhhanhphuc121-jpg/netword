-- ==============================================================================
-- NETWORD - SAMPLE SEED DATA (DỮ LIỆU MẪU CHUYÊN ĐỀ 2 NGỮ VĂN 11)
-- Trường THCS và THPT Long Hiệp - GV: Thầy Trầm Thanh Tuấn
-- Lưu ý: Dữ liệu mẫu hoàn toàn tách biệt, có thể chạy lại hoặc xóa an toàn
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- 0. TÙY CHỌN DỌN DẸP AN TOÀN TRƯỚC KHI NẠP LẠI (SAFE TEARDOWN SCRIPT)
-- Để xóa an toàn chỉ dữ liệu mẫu, chạy khối lệnh bên dưới:
/*
DELETE FROM public.reports WHERE details LIKE '%[SEED]%';
DELETE FROM public.activity_logs WHERE metadata->>'is_seed' = 'true';
DELETE FROM public.quiz_attempts WHERE details->0->>'is_seed' = 'true';
DELETE FROM public.quiz_questions WHERE unit_lesson LIKE '%Ngữ văn 11%';
DELETE FROM public.favorites WHERE id IN ('fa000000-0000-0000-0000-000000000001', 'fa000000-0000-0000-0000-000000000002');
DELETE FROM public.reviews WHERE submission_id IN ('bb000000-0000-0000-0000-000000000001', 'bb000000-0000-0000-0000-000000000002', 'bb000000-0000-0000-0000-000000000003');
DELETE FROM public.submissions WHERE id IN ('bb000000-0000-0000-0000-000000000001', 'bb000000-0000-0000-0000-000000000002', 'bb000000-0000-0000-0000-000000000003');
DELETE FROM public.term_revisions WHERE id IN ('cc000000-0000-0000-0000-000000000001', 'cc000000-0000-0000-0000-000000000002');
DELETE FROM public.term_sources WHERE id IN ('ee000000-0000-0000-0000-000000000001', 'ee000000-0000-0000-0000-000000000002', 'ee000000-0000-0000-0000-000000000003');
DELETE FROM public.term_examples WHERE id IN ('dd000000-0000-0000-0000-000000000001', 'dd000000-0000-0000-0000-000000000002', 'dd000000-0000-0000-0000-000000000003', 'dd000000-0000-0000-0000-000000000004');
DELETE FROM public.term_meanings WHERE id IN ('aa000000-0000-0000-0000-000000000001', 'aa000000-0000-0000-0000-000000000002', 'aa000000-0000-0000-0000-000000000003', 'aa000000-0000-0000-0000-000000000004', 'aa000000-0000-0000-0000-000000000005', 'aa000000-0000-0000-0000-000000000006');
DELETE FROM public.terms WHERE id IN ('11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', '44444444-4444-4444-4444-444444444444', '55555555-5555-5555-5555-555555555555');
*/

-- ------------------------------------------------------------------------------
-- 1. SEED PROFILES (3 Vai trò đại diện học đường Long Hiệp)
-- ------------------------------------------------------------------------------
-- Lưu ý: Trong môi trường thực tế, ID lấy từ auth.users. Dưới đây dùng UUID cố định.
INSERT INTO public.profiles (id, email, full_name, role, school, grade, title, points)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'tramthanhtuanlh@gmail.com', 'Thầy Trầm Thanh Tuấn', 'teacher_admin', 'Trường THCS và THPT Long Hiệp', 'Tổ bộ môn Ngữ văn', 'Giáo viên phát triển Chuyên đề 2', 999),
  ('00000000-0000-0000-0000-000000000002', 'ngocmai.editor@longhiep.edu.vn', 'Lê Hoàng Ngọc Mai', 'editor', 'Trường THCS và THPT Long Hiệp', 'Lớp 11A2 (Ban Biên tập)', 'Trưởng ban Thẩm định Ngôn ngữ', 380),
  ('00000000-0000-0000-0000-000000000003', 'vanminh11a1@longhiep.edu.vn', 'Nguyễn Văn Minh', 'student', 'Trường THCS và THPT Long Hiệp', 'Lớp 11A1 (Chuyên đề 2)', 'Học viên Ngôn ngữ Trẻ', 160)
ON CONFLICT (id) DO UPDATE SET
  full_name = EXCLUDED.full_name,
  role = EXCLUDED.role,
  points = EXCLUDED.points;

-- ------------------------------------------------------------------------------
-- 2. SEED TERMS (Các mục từ tiêu biểu được xuất bản)
-- ------------------------------------------------------------------------------
INSERT INTO public.terms (id, term, pronunciation, category, status, author_id, author_name, tags, likes_count, views_count)
VALUES
  (
    '11111111-1111-1111-1111-111111111111',
    'Flex',
    '/fleks/',
    'borrowed',
    'published',
    '00000000-0000-0000-0000-000000000001',
    'Thầy Trầm Thanh Tuấn (GV Ngữ văn)',
    ARRAY['Trend MXH', 'Từ mượn', 'Khen ngợi', 'Hài hước'],
    142,
    1250
  ),
  (
    '22222222-2222-2222-2222-222222222222',
    'Check var',
    '/tʃek vaːr/',
    'borrowed',
    'published',
    '00000000-0000-0000-0000-000000000001',
    'Thầy Trầm Thanh Tuấn (GV Ngữ văn)',
    ARRAY['Trend bóng đá', 'Minh bạch', 'Đối chiếu', 'Châm biếm vui'],
    98,
    890
  ),
  (
    '33333333-3333-3333-3333-333333333333',
    'Cột sống',
    '/kot sopŋ/',
    'slang',
    'published',
    '00000000-0000-0000-0000-000000000001',
    'Thầy Trầm Thanh Tuấn (GV Ngữ văn)',
    ARRAY['Chơi chữ', 'Meme', 'Áp lực học tập', 'Đồng âm'],
    215,
    1670
  ),
  (
    '44444444-4444-4444-4444-444444444444',
    'Ét ô ét',
    '/ɛt o ɛt/ (S.O.S)',
    'meme_trend',
    'published',
    '00000000-0000-0000-0000-000000000001',
    'Thầy Trầm Thanh Tuấn (GV Ngữ văn)',
    ARRAY['Meme TikTok', 'Than thở', 'Cầu cứu hài', 'Khẩu ngữ'],
    180,
    1420
  ),
  (
    '55555555-5555-5555-5555-555555555555',
    'Chữa lành',
    '/tɕɨə laːŋ/',
    'slang',
    'published',
    '00000000-0000-0000-0000-000000000001',
    'Thầy Trầm Thanh Tuấn (GV Ngữ văn)',
    ARRAY['Tâm lý', 'Xu hướng', 'Thư giãn', 'Mở rộng nghĩa'],
    167,
    1340
  )
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 3. SEED TERM_MEANINGS (Nhiều tầng nghĩa & định hướng sư phạm)
-- ------------------------------------------------------------------------------
INSERT INTO public.term_meanings (id, term_id, meaning_order, meaning_type, definition, academic_guidance, school_appropriateness, standard_score)
VALUES
  -- Flex: Nghĩa 1 (Mạng xã hội)
  (
    'aa000000-0000-0000-0000-000000000001',
    '11111111-1111-1111-1111-111111111111',
    1,
    'net_meaning',
    'Hành động khoe khoang một cách tinh tế hoặc công khai về thành tích, tài sản, bằng khen hay trải nghiệm đặc biệt nhằm tạo ấn tượng trên mạng xã hội.',
    'Từ mượn tiếng Anh được chuyển dịch nghĩa theo hướng hài hước. Trong giao tiếp học sinh, có thể dùng để chúc mừng, khen ngợi bạn bè có thành tích nhưng tránh thói kiêu căng phô trương thật sự. Tuyệt đối không dùng từ này trong bài tập làm văn nghị luận.',
    'acceptable_casual',
    3
  ),
  -- Flex: Nghĩa 2 (Nghĩa gốc thể hình)
  (
    'aa000000-0000-0000-0000-000000000002',
    '11111111-1111-1111-1111-111111111111',
    2,
    'literal_meaning',
    'Hành động uốn cong hoặc siết chặt cơ bắp trong thể hình để phô diễn sức mạnh thể chất.',
    'Là nghĩa gốc trong tiếng Anh (to flex a muscle), thuộc từ vựng sinh học và thể dục thể thao.',
    'acceptable_casual',
    5
  ),
  -- Check var: Nghĩa 1 (Mạng xã hội)
  (
    'aa000000-0000-0000-0000-000000000003',
    '22222222-2222-2222-2222-222222222222',
    1,
    'net_meaning',
    'Hành động điều tra, đối chiếu bằng chứng, hình ảnh chụp màn hình để xác thực một phát ngôn hoặc lời nói xem có đúng sự thật hay chém gió.',
    'Phản ánh tư duy phản biện và nhu cầu minh bạch thông tin của học sinh thời đại số. Tuy nhiên, không nên dùng việc "check var" để soi mói đời tư tiêu cực hay bắt nạt trên mạng.',
    'acceptable_casual',
    3
  ),
  -- Cột sống: Nghĩa 1 (Mạng xã hội - chơi chữ)
  (
    'aa000000-0000-0000-0000-000000000004',
    '33333333-3333-3333-3333-333333333333',
    1,
    'net_meaning',
    'Chơi chữ đồng âm biến thể của "cuộc sống", vừa ám chỉ nỗi mệt mỏi, áp lực của cuộc sống hiện đại, vừa châm biếm chứng đau lưng mỏi cổ của học sinh, giới trẻ ngồi học nhiều.',
    'Hiện tượng hoán dụ - chơi chữ đặc sắc thể hiện sự hóm hỉnh khi giải tỏa áp lực. Giáo viên Ngữ văn khuyến khích học sinh hiểu cơ chế tu từ dân gian hiện đại nhưng phải viết đúng chính tả "cuộc sống" trong văn bản chính quy.',
    'strictly_informal',
    2
  ),
  -- Ét ô ét: Nghĩa 1
  (
    'aa000000-0000-0000-0000-000000000005',
    '44444444-4444-4444-4444-444444444444',
    1,
    'net_meaning',
    'Lời than thở hài hước hoặc kêu gọi cứu viện khi gặp phải một tình huống khó đỡ, bài tập khó, hoặc cảnh tượng trớ trêu trên mạng xã hội.',
    'Khẩu ngữ mang tính trào lưu nhất thời. Cần nhắc nhở học sinh không nên sử dụng trong các tình huống cứu nạn có thật để tránh gây hiểu nhầm về mức độ khẩn cấp ngoài đời sống.',
    'strictly_informal',
    2
  ),
  -- Chữa lành: Nghĩa 1
  (
    'aa000000-0000-0000-0000-000000000006',
    '55555555-5555-5555-5555-555555555555',
    1,
    'net_meaning',
    'Dùng để chỉ mọi hoạt động thư giãn, đi uống trà sữa, mua sắm, du lịch hay nghỉ ngơi nhằm xoa dịu cảm giác mệt mỏi trong học tập, công việc.',
    'Từ ngữ mang sắc thái nhân văn ban đầu nhưng đang bị lạm phát nghĩa. Trong Ngữ văn 11, cần hướng dẫn học sinh phân biệt giá trị chữa lành nội tâm đích thực và trào lưu tiêu dùng hình thức.',
    'acceptable_casual',
    4
  )
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 4. SEED TERM_EXAMPLES (Ngữ cảnh hội thoại minh họa)
-- ------------------------------------------------------------------------------
INSERT INTO public.term_examples (id, term_id, meaning_id, context_title, dialogue, notes)
VALUES
  (
    'dd000000-0000-0000-0000-000000000001',
    '11111111-1111-1111-1111-111111111111',
    'aa000000-0000-0000-0000-000000000001',
    'Đoạn chat chúc mừng bạn đạt giải học sinh giỏi',
    '[
      {"id": "d1", "sender": "Minh Thư (11A1)", "isMe": false, "text": "Mới nhận học bổng tỉnh xong, tối nay đãi trà sữa nhé!", "time": "14:20"},
      {"id": "d2", "sender": "Quốc Bảo (11A2)", "isMe": true, "text": "Ủa bạn flex mượt ghê á! Chúc mừng bạn nhen!", "time": "14:21"}
    ]'::jsonb,
    'Học sinh sử dụng với ý nghĩa thân mật khen ngợi bạn bè'
  ),
  (
    'dd000000-0000-0000-0000-000000000002',
    '22222222-2222-2222-2222-222222222222',
    'aa000000-0000-0000-0000-000000000003',
    'Đối thoại xác thực ôn thi học kỳ',
    '[
      {"id": "d3", "sender": "Thanh Phong", "isMe": false, "text": "Hôm qua tớ tự ôn bài đến 2h sáng giải xong 10 đề Văn á!", "time": "08:15"},
      {"id": "d4", "sender": "Ngọc Mai", "isMe": true, "text": "Để tôi check var lịch sử tin nhắn coi ai online đến 1h45 coi clip nha!", "time": "08:16"}
    ]'::jsonb,
    'Sử dụng trong tình huống trêu đùa sự trung thực học tập'
  ),
  (
    'dd000000-0000-0000-0000-000000000003',
    '33333333-3333-3333-3333-333333333333',
    'aa000000-0000-0000-0000-000000000004',
    'Tán gẫu mùa thi giữa kỳ',
    '[
      {"id": "d5", "sender": "Lan Anh (11A3)", "isMe": false, "text": "Tuần này kiểm tra giữa kỳ 5 môn liên tục, bão não quá trời ơi!", "time": "21:05"},
      {"id": "d6", "sender": "Gia Huy", "isMe": true, "text": "Cột sống bất ổn thực sự, ráng học cho qua kỳ thi này rồi đi đá banh nghỉ ngơi.", "time": "21:07"}
    ]'::jsonb,
    'Giải tỏa áp lực thi cử qua ngôn từ dí dỏm'
  ),
  (
    'dd000000-0000-0000-0000-000000000004',
    '44444444-4444-4444-4444-444444444444',
    'aa000000-0000-0000-0000-000000000005',
    'Tin nhắn ôn bài nhóm Văn học Trung đại',
    '[
      {"id": "d7", "sender": "Hoàng Long", "isMe": false, "text": "Mai cô trả bài kiểm tra 15 phút phần văn học trung đại rồi mấy đứa!", "time": "19:30"},
      {"id": "d8", "sender": "Bích Trâm", "isMe": true, "text": "Ét ô ét cứu bồ tớ với, tớ chưa kịp thuộc bài thơ bài phú nào hết nè!", "time": "19:32"}
    ]'::jsonb,
    'Khẩu ngữ hài hước kêu cứu bạn bè học tập'
  )
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 5. SEED TERM_SOURCES (Tư liệu điều tra xã hội học ngôn ngữ)
-- ------------------------------------------------------------------------------
INSERT INTO public.term_sources (id, term_id, platform, source_url, surveyor_name, surveyed_date, cultural_context)
VALUES
  (
    'ee000000-0000-0000-0000-000000000001',
    '11111111-1111-1111-1111-111111111111',
    'facebook',
    'https://facebook.com/groups/flexdenhoithocuoicung',
    'Thầy Trầm Thanh Tuấn',
    '2024-09-01',
    'Bắt nguồn từ cộng đồng người nghe nhạc Rap/Hip-hop Mỹ, lan tỏa đột biến sang Facebook Việt Nam qua trào lưu khoe thành tích học thuật, nghiên cứu.'
  ),
  (
    'ee000000-0000-0000-0000-000000000002',
    '22222222-2222-2222-2222-222222222222',
    'tiktok',
    'https://tiktok.com/tag/checkvar',
    'Lê Hoàng Ngọc Mai',
    '2024-09-05',
    'Gắn liền với công nghệ VAR trong bóng đá World Cup/Euro, được thanh thiếu niên ứng dụng vào việc đòi hỏi chứng cứ đối thoại trực tuyến.'
  ),
  (
    'ee000000-0000-0000-0000-000000000003',
    '33333333-3333-3333-3333-333333333333',
    'school_campus',
    NULL,
    'Nguyễn Văn Minh',
    '2024-09-10',
    'Ghi nhận trực tiếp tại sân trường THCS và THPT Long Hiệp trong giờ ra chơi khi học sinh chia sẻ áp lực các bài kiểm tra tuần.'
  )
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 6. SEED TERM_REVISIONS (Nhật ký biên tập sư phạm)
-- ------------------------------------------------------------------------------
INSERT INTO public.term_revisions (id, term_id, editor_name, revision_summary, previous_snapshot, updated_snapshot)
VALUES
  (
    'cc000000-0000-0000-0000-000000000001',
    '11111111-1111-1111-1111-111111111111',
    'Thầy Trầm Thanh Tuấn',
    'Bổ sung lưu ý sư phạm: Tuyệt đối không dùng Flex trong bài văn nghị luận xã hội.',
    '{"academic_guidance": "Từ mượn tiếng Anh dùng để khoe khoang."}'::jsonb,
    '{"academic_guidance": "Từ mượn tiếng Anh được chuyển dịch nghĩa theo hướng hài hước. Tuyệt đối không dùng trong bài văn thi cử."}'::jsonb
  ),
  (
    'cc000000-0000-0000-0000-000000000002',
    '33333333-3333-3333-3333-333333333333',
    'Thầy Trầm Thanh Tuấn',
    'Thẩm định giá trị tu từ: Xác nhận cơ chế chơi chữ đồng âm giữa cột sống và cuộc sống.',
    '{"notes": "Từ nói trại"}'::jsonb,
    '{"notes": "Hiện tượng hoán dụ - chơi chữ đặc sắc thể hiện sự hóm hỉnh giải tỏa áp lực."}'::jsonb
  )
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 7. SEED SUBMISSIONS (Đề xuất đang trong quy trình thẩm định)
-- ------------------------------------------------------------------------------
INSERT INTO public.submissions (id, submitted_by, submitter_name, submitter_school, submitter_email, word, category, proposed_meaning, origin, example_context, school_appropriateness, status)
VALUES
  (
    'bb000000-0000-0000-0000-000000000001',
    '00000000-0000-0000-0000-000000000003',
    'Nguyễn Văn Minh',
    'Trường THCS và THPT Long Hiệp (11A1)',
    'vanminh11a1@longhiep.edu.vn',
    'Simp',
    'borrowed',
    'Mê muội, quá chiều chuộng hoặc cung phụng một người mà không được đáp lại tình cảm tương xứng.',
    'Bắt nguồn từ tiếng Anh lóng Internet, trở thành từ cửa miệng trên MXH Việt Nam.',
    'Nó thức nguyên đêm chép bài giùm crush luôn á, simp chúa rồi!',
    'acceptable_casual',
    'pending'
  ),
  (
    'bb000000-0000-0000-0000-000000000002',
    NULL,
    'Lê Thị Thu Thảo',
    'Trường THCS và THPT Long Hiệp (11A2)',
    'thuthao11a2@longhiep.edu.vn',
    'Trầm kẽm',
    'slang',
    'Nói trại từ "Trầm cảm", dùng để miêu tả tâm trạng chán chường, bế tắc hài hước trước bài tập khó.',
    'Kẽm là kim loại ký hiệu Zn trong Hóa học, học sinh chơi chữ đồng âm với Trầm cảm.',
    'Nhìn cái đề Toán hình học không gian mà trầm kẽm thiệt sự luôn á.',
    'strictly_informal',
    'pending'
  ),
  (
    'bb000000-0000-0000-0000-000000000003',
    NULL,
    'Trần Hoàng Long',
    'Trường THCS và THPT Long Hiệp (11A4)',
    'hoanglong11a4@longhiep.edu.vn',
    'Bật mode',
    'borrowed',
    'Kích hoạt một trạng thái tập trung cao độ hoặc phong thái cụ thể (ví dụ: bật mode học bài, bật mode nghiêm túc).',
    'Từ mượn tiếng Anh "mode" (chế độ điện thoại, máy tính).',
    'Còn 3 ngày nữa thi học kỳ rồi, bật mode cày ngày cày đêm thôi!',
    'acceptable_casual',
    'approved'
  )
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 8. SEED REVIEWS (Thẩm định sư phạm cho đề xuất)
-- ------------------------------------------------------------------------------
INSERT INTO public.reviews (id, submission_id, reviewer_name, reviewer_role, decision, pedagogical_feedback, points_awarded)
VALUES
  (
    '88000000-0000-0000-0000-000000000001',
    'bb000000-0000-0000-0000-000000000003',
    'Thầy Trầm Thanh Tuấn',
    'teacher_admin',
    'approved',
    'Từ ngữ mang tính tích cực thúc đẩy tinh thần học tập. Cấu trúc chuyển mã quen thuộc của giới trẻ. Phê duyệt đưa vào từ điển.',
    30
  )
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 9. SEED FAVORITES (Mục từ đã lưu)
-- ------------------------------------------------------------------------------
INSERT INTO public.favorites (id, user_id, term_id)
VALUES
  ('fa000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000003', '11111111-1111-1111-1111-111111111111'),
  ('fa000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000003', '33333333-3333-3333-3333-333333333333')
ON CONFLICT (user_id, term_id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 10. SEED QUIZ_QUESTIONS (Bộ đề trắc nghiệm Chuyên đề 2 Ngữ văn 11)
-- ------------------------------------------------------------------------------
INSERT INTO public.quiz_questions (id, title, scenario, category, question, options, correct_index, explanation, points, unit_lesson, is_active)
VALUES
  (
    '99000000-0000-0000-0000-000000000001',
    'Ngữ cảnh giao tiếp: Đúng nơi - Đúng lúc',
    'Em đang viết một bức thư điện tử (email) gửi cho cô giáo chủ nhiệm để xin phép nghỉ học do bị sốt.',
    'context_awareness',
    'Cách diễn đạt nào sau đây là CHUẨN MỰC và phù hợp với chuẩn mực giao tiếp học đường?',
    '[
      "Em chào cô ạ, hôm nay em bị sốt ét ô ét nên xin phép cô cho em tạm cook khỏi tiết sinh hoạt.",
      "Kính gửi cô giáo chủ nhiệm, em viết thư này xin phép cô cho em nghỉ học buổi sáng nay do bị ốm.",
      "Cô ơi, cột sống em hôm nay bất ổn quá, em xin bật mode nghỉ học một buổi nhen cô.",
      "Chào cô, hôm nay em bị ốm xịt keo, em báo để cô check var điểm danh giúp em."
    ]'::jsonb,
    1,
    'Trong văn bản hành chính học đường gửi thầy cô giáo, học sinh cần giữ thái độ lễ phép, trang trọng, sử dụng tiếng Việt chuẩn mực, tuyệt đối không chêm xen tiếng lóng mạng xã hội.',
    20,
    'Ngữ văn 11 - Chuyên đề 2: Ngôn ngữ trong đời sống hiện đại & Phong cách ngôn ngữ hành chính.',
    true
  ),
  (
    '99000000-0000-0000-0000-000000000002',
    'Bản chất ngôn ngữ: Nhận diện hiện tượng Chuyển mã (Code-switching)',
    'Trong câu nói: "Hôm qua bạn ấy flex giải Nhì học sinh giỏi Văn làm cả lớp trầm trồ."',
    'slang_meaning',
    'Từ "flex" trong câu trên đại diện cho hiện tượng ngôn ngữ nào được nghiên cứu trong Chuyên đề 2?',
    '[
      "Hiện tượng dùng từ thuần Việt cổ bị mai một",
      "Hiện tượng mượn từ tiếng Anh và chuyển hóa nghĩa theo văn hóa mạng của giới trẻ",
      "Hiện tượng phương ngữ Nam Bộ truyền thống",
      "Hiện tượng lỗi chính tả ngữ âm vùng miền"
    ]'::jsonb,
    1,
    '"Flex" là từ tiếng Anh được giới trẻ mượn và mở rộng ngữ nghĩa trong không gian mạng để chỉ hành vi khoe thành tích, thuộc hiện tượng từ mượn và tiếp xúc ngôn ngữ thời đại hội nhập.',
    20,
    'Ngữ văn 11 - Chuyên đề 2: Hiện tượng tiếp xúc ngôn ngữ và từ ngữ mới trong xã hội đương đại.',
    true
  ),
  (
    '99000000-0000-0000-0000-000000000003',
    'Giữ gìn sự trong sáng của Tiếng Việt',
    'Học sinh viết bài văn nghị luận xã hội về đức tính khiêm tốn của người thanh niên hiện đại.',
    'linguistic_purity',
    'Hành động nào sau đây thể hiện đúng tinh thần giữ gìn sự trong sáng của Tiếng Việt?',
    '[
      "Tận dụng thật nhiều từ lóng như check var, xịt keo, pressing vào bài văn để thể hiện sự hợp thời.",
      "Sử dụng ngôn ngữ trong sáng, có thể đưa tiếng lóng vào phần dẫn chứng để phân tích hiện tượng nhưng kèm nhận định phản biện khách quan.",
      "Viết toàn bộ bài văn bằng chữ viết tắt teencode để tiết kiệm thời gian làm bài thi.",
      "Nghiêm cấm học sinh tìm hiểu về bất kỳ từ lóng nào trên không gian mạng."
    ]'::jsonb,
    1,
    'Giữ gìn sự trong sáng của Tiếng Việt không có nghĩa là phủ nhận sự tồn tại của ngôn ngữ mạng, mà là biết phân tích, phê phán và đặt đúng chỗ: trong bài văn nghị luận chỉ nêu như ví dụ dẫn chứng để khảo sát.',
    20,
    'Ngữ văn 11 - Bài học: Giữ gìn sự trong sáng của Tiếng Việt trong thời đại số.',
    true
  )
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 11. SEED QUIZ_ATTEMPTS (Lịch sử làm bài mẫu)
-- ------------------------------------------------------------------------------
INSERT INTO public.quiz_attempts (id, user_id, score, total_questions, details)
VALUES
  (
    '77000000-0000-0000-0000-000000000001',
    '00000000-0000-0000-0000-000000000003',
    60,
    3,
    '[{"question_id": "99000000-0000-0000-0000-000000000001", "is_correct": true, "is_seed": true}]'::jsonb
  )
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 12. SEED ACTIVITY_LOGS (Nhật ký mẫu)
-- ------------------------------------------------------------------------------
INSERT INTO public.activity_logs (id, user_id, action, entity_type, entity_id, metadata)
VALUES
  (
    '66000000-0000-0000-0000-000000000001',
    '00000000-0000-0000-0000-000000000001',
    'publish_term',
    'term',
    '11111111-1111-1111-1111-111111111111',
    '{"term": "Flex", "is_seed": true, "note": "Phê duyệt đưa vào từ điển Chuyên đề 2"}'::jsonb
  )
ON CONFLICT (id) DO NOTHING;

-- ------------------------------------------------------------------------------
-- 13. SEED REPORTS (Báo cáo phản ánh mẫu)
-- ------------------------------------------------------------------------------
INSERT INTO public.reports (id, term_id, reported_by, reporter_name, reason, details, status, resolution_note)
VALUES
  (
    '55000000-0000-0000-0000-000000000001',
    '11111111-1111-1111-1111-111111111111',
    '00000000-0000-0000-0000-000000000003',
    'Nguyễn Văn Minh',
    'other',
    '[SEED] Đề xuất thêm ví dụ hội thoại trong bối cảnh học tập văn học.',
    'resolved',
    'Đã bổ sung ví dụ chúc mừng giải học sinh giỏi tỉnh.'
  )
ON CONFLICT (id) DO NOTHING;
