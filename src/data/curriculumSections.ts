/**
 * NETWORD - Dữ liệu Ngữ liệu Chuyên đề 2 (Ngữ văn 11)
 * "Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại"
 * GV biên soạn và hướng dẫn: Thầy Trầm Thanh Tuấn - THCS và THPT Long Hiệp
 * 
 * Phân chia theo 4 nhóm chuẩn hóa khảo sát ngôn ngữ không gian mạng:
 * 1. Những tiếng lóng phổ biến (20 từ)
 * 2. Những từ viết tắt thường gặp (16 từ)
 * 3. Tiếng lóng mang màu sắc Gen Z (20 từ)
 * 4. Một số câu giao tiếp trên mạng xã hội (10 câu)
 */

export interface CurriculumTermItem {
  id: string;
  term: string;
  meaning: string;
  standardEquivalent: string;
  category: 'slang' | 'abbreviation' | 'genz' | 'sentence';
  sectionNumber: 1 | 2 | 3 | 4;
  sectionTitle: string;
  originDetail?: string;
  usageContext: string;
  pedagogicalNote: string;
  exampleSentence: string;
  schoolAppropriateness: 'acceptable_casual' | 'strictly_informal' | 'caution_required' | 'forbidden_in_formal';
}

export interface CurriculumSocialSentence {
  id: string;
  sentence: string;
  meaning: string;
  speakerIntent: string;
  standardFormal: string;
  studentChat: string;
  pedagogicalGuidance: string;
  suggestedContext: 'friend_chat' | 'social_comment' | 'teacher_exchange' | 'class_announcement' | 'academic_writing';
  tags: string[];
}

export interface CurriculumSectionMeta {
  id: string;
  sectionNumber: number;
  title: string;
  subtitle: string;
  count: number;
  badgeColor: string;
  description: string;
  educationalObjective: string;
}

export const CURRICULUM_SECTIONS_META: CurriculumSectionMeta[] = [
  {
    id: 'sec-1',
    sectionNumber: 1,
    title: 'Những tiếng lóng phổ biến',
    subtitle: '20 từ lóng mượn và thịnh hành trên Internet',
    count: 20,
    badgeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
    description: 'Tập hợp các từ mượn tiếng Anh được tái cấu trúc ngữ nghĩa và lan truyền rộng rãi trong đời sống giao tiếp số của học sinh.',
    educationalObjective: 'Hiểu cơ chế chuyển nghĩa của từ mượn; vận dụng linh hoạt trong giao tiếp bạn bè và biết thay thế bằng từ ngữ toàn dân trong bài học.'
  },
  {
    id: 'sec-2',
    sectionNumber: 2,
    title: 'Những từ viết tắt thường gặp',
    subtitle: '16 từ viết tắt giao tiếp nhanh trên mạng',
    count: 16,
    badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    description: 'Các ký hiệu viết tắt tiếng Anh và tiếng Việt được tạo ra nhằm tối ưu tốc độ nhắn tin, trao đổi trực tuyến.',
    educationalObjective: 'Nắm vững nghĩa gốc để không hiểu sai; tuyệt đối không đưa chữ viết tắt mạng vào bài kiểm tra, bài thi chính quy.'
  },
  {
    id: 'sec-3',
    sectionNumber: 3,
    title: 'Tiếng lóng mang màu sắc Gen Z',
    subtitle: '20 cách nói giàu hình ảnh và cảm xúc thế hệ số',
    count: 20,
    badgeColor: 'bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    description: 'Những cụm từ biểu cảm độc đáo, nói quá, chơi chữ sinh động phản ánh thế giới nội tâm và đời sống tinh thần của học sinh.',
    educationalObjective: 'Nhận diện giá trị biểu cảm tu từ dân gian hiện đại; điều chỉnh liều lượng để giữ gìn sự trong sáng của Tiếng Việt.'
  },
  {
    id: 'sec-4',
    sectionNumber: 4,
    title: 'Một số câu giao tiếp trên mạng xã hội',
    subtitle: '10 mẫu câu điển hình và cách diễn đạt tương ứng',
    count: 10,
    badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    description: 'Các phát ngôn hoàn chỉnh thường thấy trong bình luận Facebook, TikTok và cách chuyển đổi sang phát ngôn lịch sự, học đường.',
    educationalObjective: 'Rèn luyện năng lực ứng xử ngôn ngữ phù hợp ngữ cảnh (Contextual Communication Competence).'
  }
];

// 1. NHỮNG TIẾNG LÓNG PHỔ BIẾN (20 TỪ)
export const SECTION_1_COMMON_SLANG: CurriculumTermItem[] = [
  {
    id: 'cs-01',
    term: 'Flex',
    meaning: 'Khoe khoang, thể hiện điều mình có',
    standardEquivalent: 'Tự hào chia sẻ thành tích, khoe khéo trải nghiệm',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Từ mượn tiếng Anh chỉ hành động siết cơ bắp khoe thể lực trong phòng gym, chuyển nghĩa sang văn hóa số từ trào lưu 2023.',
    usageContext: 'Tán gẫu bạn bè khi khoe điểm cao, bằng khen, chuyến đi chơi.',
    pedagogicalNote: 'Chấp nhận khen vui bạn bè nhưng tránh tự mãn, kiêu căng. Trong văn bản nghị luận thay bằng "thói khoe khoang" hoặc "chia sẻ thành tựu".',
    exampleSentence: 'Minh Thư mới nhận giải Ba HSG tỉnh, lên trang cá nhân flex nhẹ một tấm hình.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-02',
    term: 'Slay',
    meaning: 'Quá xuất sắc, nổi bật, đầy tự tin',
    standardEquivalent: 'Xuất sắc, tuyệt vời, thần thái ấn tượng',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Từ tiếng Anh mang nghĩa gốc "hạ gục", trong văn hóa mạng mang hàm nghĩa người biểu diễn quá tự tin, cuốn hút làm say đắm người xem.',
    usageContext: 'Khen ngợi ngoại hình, trang phục hoặc tiết mục biểu diễn văn nghệ của bạn bè.',
    pedagogicalNote: 'Mang năng lượng tích cực, dùng vui ngoài giờ học. Không dùng trong nhận xét học tập chính thức của giáo viên.',
    exampleSentence: 'Tiết mục múa của chi đoàn 11A1 sáng nay slay thật sự!',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-03',
    term: 'Cringe',
    meaning: 'Ngượng ngùng, sượng trân, khó chịu',
    standardEquivalent: 'Gượng gạo, ngượng ngùng, xấu hổ thay',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Mượn từ tiếng Anh chỉ cảm giác co rúm vì xấu hổ hoặc ghê rợn trước một hành vi lố lăng của người khác.',
    usageContext: 'Bình luận về một tình huống giao tiếp quá đà, thiếu tự nhiên.',
    pedagogicalNote: 'Cần cẩn trọng khi dùng để tránh làm bạn bè tổn thương hay cảm thấy bị chê bai ác ý.',
    exampleSentence: 'Xem lại đoạn video kịch ngắn hồi lớp 10 diễn ngây ngô thấy cringe dễ sợ!',
    schoolAppropriateness: 'caution_required'
  },
  {
    id: 'cs-04',
    term: 'Red flag 🚩',
    meaning: 'Dấu hiệu cảnh báo, không đáng tin',
    standardEquivalent: 'Dấu hiệu rủi ro, nguy cơ tiềm ẩn, điều đáng ngờ',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Hình ảnh lá cờ đỏ cảnh báo nguy hiểm trong giao thông hàng hải và thời tiết, du nhập vào tâm lý học tình cảm và ứng xử xã hội.',
    usageContext: 'Cảnh báo về biểu hiện ích kỷ, gian dối hoặc thói quen xấu của một người.',
    pedagogicalNote: 'Giúp học sinh rèn luyện tư duy phản biện, nhận diện người tốt kẻ xấu nhưng tránh dán nhãn phiến diện lên bạn bè.',
    exampleSentence: 'Hứa làm bài tập nhóm chung mà tới giờ chót tắt máy biến mất là red flag rõ ràng.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-05',
    term: 'Green flag 💚',
    meaning: 'Dấu hiệu tốt, đáng tin cậy',
    standardEquivalent: 'Phẩm chất tốt đẹp, điểm tích cực, dấu hiệu đáng tin',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Tương phản với cờ đỏ cảnh báo, cờ xanh tượng trưng cho sự an toàn, chuẩn mực và đáng tin cậy.',
    usageContext: 'Khen ngợi đức tính thật thà, biết lắng nghe, quan tâm tập thể.',
    pedagogicalNote: 'Khuyến khích học sinh dùng từ ngữ biểu dương các đức tính đẹp trong tập thể lớp.',
    exampleSentence: 'Bạn Nam luôn chủ động nhặt rác sân trường và giúp bạn giải bài khó, đúng là một green flag!',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-06',
    term: 'POV',
    meaning: 'Góc nhìn, tình huống giả định',
    standardEquivalent: 'Dưới góc nhìn của, tình huống giả định khi',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Viết tắt của "Point Of View" (điểm nhìn trần thuật trong văn học và điện ảnh), rất phổ biến trong các video ngắn TikTok.',
    usageContext: 'Đặt người xem vào một hoàn cảnh nhập vai giả định cụ thể.',
    pedagogicalNote: 'Gắn liền với kiến thức "Điểm nhìn trần thuật" trong chương trình Ngữ văn 11. Giáo viên có thể liên hệ trực tiếp bài học văn xuôi.',
    exampleSentence: 'POV: Tiết 5 thứ Bảy chuẩn bị tan trường về nhà ăn cơm mẹ nấu.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-07',
    term: 'Viral',
    meaning: 'Lan truyền rộng rãi',
    standardEquivalent: 'Phổ biến rộng khắp, lan tỏa nhanh chóng trên cộng đồng',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Bắt nguồn từ từ gốc virus (lan truyền theo cấp số nhân), dùng trong truyền thông số.',
    usageContext: 'Nói về một video, bài hát hoặc phát ngôn nhận được hàng triệu lượt tương tác.',
    pedagogicalNote: 'Từ mượn quốc tế đã được Việt hóa rộng rãi trong truyền thông. Có thể dùng trong bài nghị luận khi bàn về văn hóa số.',
    exampleSentence: 'Hình ảnh lớp 11A trang trí bảng phấn tri ân thầy cô bất ngờ viral trên Facebook.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-08',
    term: 'Trend',
    meaning: 'Xu hướng đang thịnh hành',
    standardEquivalent: 'Trào lưu thịnh hành, xu thế xã hội',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Từ mượn tiếng Anh "trend" (chiều hướng phát triển, xu hướng).',
    usageContext: 'Chỉ các điệu nhảy, câu nói hay hoạt động đang được đông đảo học sinh làm theo.',
    pedagogicalNote: 'Cần phân biệt giữa trào lưu tích cực (đọc sách, rèn thể lực) và trào lưu độc hại (a dua, câu like vô bổ).',
    exampleSentence: 'Trào lưu đọc sách mỗi ngày 15 phút đang là một trend rất bổ ích của trường mình.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-09',
    term: 'Flop',
    meaning: 'Thất bại, không được chú ý',
    standardEquivalent: 'Không thành công, lượng tương tác thấp, chìm lắng',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Từ tiếng Anh miêu tả cú rơi phịch xuống đất, dùng trong giới âm nhạc/điện ảnh khi tác phẩm ế ẩm.',
    usageContext: 'Nói đùa về bài đăng ít like hoặc buổi sinh hoạt nhóm vắng người.',
    pedagogicalNote: 'Dùng đùa vui, tránh dùng để chế giễu nỗ lực thật của bạn bè khi tham gia phong trào nhà trường.',
    exampleSentence: 'Đăng tấm ảnh kỷ yếu nhóm mà ít tương tác quá, sắp flop rồi bạn ơi!',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'cs-10',
    term: 'Lowkey',
    meaning: 'Âm thầm, kín đáo',
    standardEquivalent: 'Kín đáo, không phô trương, khiêm tốn',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Từ gốc âm nhạc (nốt thấp, tông trầm), chuyển nghĩa chỉ thái độ làm việc hoặc sống khiêm nhường.',
    usageContext: 'Mô tả người âm thầm cố gắng học tập mà không lên tiếng khoe mẽ.',
    pedagogicalNote: 'Sắc thái nghĩa tích cực khi khen tính cách khiêm tốn. Trong bài văn thay bằng "lối sống kín đáo, giản dị".',
    exampleSentence: 'Bạn ấy lowkey lắm, im im tự ôn bài mà thi thử toàn đứng đầu trường.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-11',
    term: 'Highkey',
    meaning: 'Rõ ràng, công khai, rất',
    standardEquivalent: 'Công khai, rõ rệt, vô cùng, hết sức',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Tương phản với lowkey, biểu thị mức độ cao độ, muốn mọi người đều nhận thấy.',
    usageContext: 'Nhấn mạnh cảm xúc yêu thích, ủng hộ nhiệt liệt một người hoặc sự việc.',
    pedagogicalNote: 'Khẩu ngữ biểu thị mức độ cảm thán; trong văn chương nên dùng "thực sự", "rất đỗi", "vô cùng".',
    exampleSentence: 'Tớ highkey khâm phục bạn tổ trưởng vì luôn kiên nhẫn giảng lại bài cho các bạn.',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'cs-12',
    term: 'Toxic',
    meaning: 'Độc hại, tiêu cực',
    standardEquivalent: 'Tiêu cực, độc hại, gây tổn hại tinh thần',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Từ tiếng Anh mượn từ gốc Hy Lạp (chất độc), mở rộng sang các mối quan hệ xã hội gây mệt mỏi.',
    usageContext: 'Nhận xét về môi trường trò chuyện tiêu cực, hay chửi bới, ghen ghét.',
    pedagogicalNote: 'Một từ quan trọng trong giáo dục tâm lý học đường: dạy học sinh biết bảo vệ bản thân trước mối quan hệ độc hại.',
    exampleSentence: 'Bình luận mỉa mai khuyết điểm người khác là biểu hiện rất toxic cần loại bỏ.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-13',
    term: 'Chill',
    meaning: 'Thư giãn, thoải mái',
    standardEquivalent: 'Thư thái, an yên, nhẹ nhàng thư giãn',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Từ lóng tiếng Anh chỉ nhiệt độ mát mẻ, chuyển thành trạng thái tâm trí bình thản.',
    usageContext: 'Mô tả không gian yên tĩnh đọc sách, nghe nhạc sau giờ học căng thẳng.',
    pedagogicalNote: 'Gợi mở lối sống lành mạnh, biết cân bằng giữa học tập và nghỉ ngơi.',
    exampleSentence: 'Chiều thứ Bảy ngồi ghế đá sân trường Long Hiệp ngắm hoàng hôn chill thật sự.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-14',
    term: 'Mood',
    meaning: 'Tâm trạng, cảm xúc',
    standardEquivalent: 'Tâm trạng hiện tại, trạng thái cảm xúc',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Từ tiếng Anh chỉ trạng thái tâm lý tạm thời.',
    usageContext: 'Nói về tâm trạng vui, buồn hoặc mất hứng ("tụt mood").',
    pedagogicalNote: 'Khi giao tiếp với thầy cô nên nói: "Hôm nay em hơi mệt / tâm trạng chưa tốt", không nên nói "Em tụt mood ạ".',
    exampleSentence: 'Nghe bài hát nhẹ nhàng này tự nhiên tâm trạng tụt mood thấy buồn ngang.',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'cs-15',
    term: 'Vibe',
    meaning: 'Không khí, cảm giác, phong cách',
    standardEquivalent: 'Bầu không khí, cảm thức, phong thái riêng biệt',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Rút gọn từ "vibration" (tần số dao động năng lượng), miêu tả cảm giác một không gian mang lại.',
    usageContext: 'Cảm nhận về một buổi học, quán nước hay phong cách một người.',
    pedagogicalNote: 'Có thể liên hệ với khái niệm "Không khí trữ tình / sắc điệu thẩm mỹ" trong thơ ca Ngữ văn 11.',
    exampleSentence: 'Lớp mình trang trí hoa mai hoa đào đón Tết tạo nên vibe ấm áp ghê!',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-16',
    term: 'Healing',
    meaning: 'Chữa lành tinh thần',
    standardEquivalent: 'Xoa dịu tâm hồn, phục hồi tinh thần, an ủi nội tâm',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Từ vựng tiếng Anh về y khoa và tâm lý học, bùng nổ trên mạng thành trào lưu tìm kiếm sự bình yên.',
    usageContext: 'Chỉ các hoạt động dã ngoại, đi uống trà, tâm sự giúp giải tỏa áp lực thi cử.',
    pedagogicalNote: 'Từ ngữ tích cực nhưng cần tránh xu hướng thương mại hóa, lạm dụng thành sáo rỗng.',
    exampleSentence: 'Một buổi chiều đi dạo dưới bóng cây xanh mát giúp chữa lành sau tuần thi căng thẳng.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-17',
    term: 'Ghosting',
    meaning: 'Đột ngột ngừng liên lạc',
    standardEquivalent: 'Bặt vô âm tín, ngắt liên lạc bất ngờ không lý do',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Hình ảnh bóng ma (ghost) biến mất không dấu vết trong các mối quan hệ trực tuyến.',
    usageContext: 'Nói về người đột ngột biến mất, không trả lời tin nhắn hay trách nhiệm làm việc chung.',
    pedagogicalNote: 'Phản ánh một thói quen ứng xử kém văn minh trên mạng xã hội; nhắc nhở học sinh có trách nhiệm khi trao đổi.',
    exampleSentence: 'Đang làm bài thuyết trình chung mà bạn ấy ghosting cả nhóm là thiếu trách nhiệm lắm.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-18',
    term: 'Simp',
    meaning: 'Quá mê hoặc chiều chuộng ai đó',
    standardEquivalent: 'Mê muội, quá mức si tình, chiều chuộng mù quáng',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Từ lóng Internet tiếng Anh (viết tắt / biến thể của Simpleton), châm biếm người quá quỵ lụy tình cảm.',
    usageContext: 'Trêu đùa bạn bè khi thấy bạn quá chăm sóc hoặc nhường nhịn một người bạn khác giới.',
    pedagogicalNote: 'Chỉ nên dùng trêu đùa vui vẻ giữa bạn thân, tránh làm tổn thương tình cảm trong sáng tuổi học trò.',
    exampleSentence: 'Thấy người ta xin mượn tập là chạy đi chép giùm liền, đúng là simp chúa rồi!',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'cs-19',
    term: 'Stan',
    meaning: 'Hâm mộ cuồng nhiệt',
    standardEquivalent: 'Người hâm mộ trung thành, thần tượng cuồng nhiệt',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Xuất phát từ bài hát "Stan" năm 2000 của Eminem kết hợp giữa Stalker (theo dõi) và Fan (người hâm mộ).',
    usageContext: 'Nói về sự yêu thích nhiệt thành một tác giả, ca sĩ, ban nhạc hay tác phẩm nghệ thuật.',
    pedagogicalNote: 'Khuyến khích học sinh hâm mộ các tấm gương học tập tốt, các nhà văn hóa lớn một cách văn minh, tỉnh táo.',
    exampleSentence: 'Lớp mình có nhiều bạn stan đội tuyển học sinh giỏi Văn của trường lắm.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'cs-20',
    term: 'Flexing',
    meaning: 'Hành động khoe thành tích, tài sản',
    standardEquivalent: 'Hành vi phô trương, sự thể hiện thành quả',
    category: 'slang',
    sectionNumber: 1,
    sectionTitle: 'Những tiếng lóng phổ biến',
    originDetail: 'Dạng danh động từ (V-ing) của động từ Flex, chỉ tiến trình hành động thể hiện.',
    usageContext: 'Mô tả hiện tượng xã hội hay thói quen khoe khoang trên không gian mạng.',
    pedagogicalNote: 'Thích hợp dùng trong phân tích đề tài văn hóa số ở bài nghị luận xã hội nhưng cần đặt trong dấu ngoặc kép.',
    exampleSentence: 'Hiện tượng flexing trên mạng xã hội đang tạo ra áp lực đồng trang lứa cho nhiều bạn trẻ.',
    schoolAppropriateness: 'acceptable_casual'
  }
];

// 2. NHỮNG TỪ VIẾT TẮT THƯỜNG GẶP (16 TỪ)
export const SECTION_2_ABBREVIATIONS: CurriculumTermItem[] = [
  {
    id: 'ab-01',
    term: 'LOL',
    meaning: 'Laughing Out Loud – cười lớn',
    standardEquivalent: 'Cười to, bật cười sảng khoái',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Viết tắt tiếng Anh chuẩn mạng quốc tế (Laugh Out Loud), có mặt từ những ngày đầu của Internet.',
    usageContext: 'Bày tỏ sự buồn cười tột độ trong tin nhắn tán gẫu.',
    pedagogicalNote: 'Chỉ dùng khi nhắn tin phi chính thức; tuyệt đối không ghi vào bài tập làm văn.',
    exampleSentence: 'Nghe bạn kể chuyện quên mang giày đi học mà cười bể bụng LOL!',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'ab-02',
    term: 'OMG',
    meaning: 'Oh My God – trời ơi',
    standardEquivalent: 'Trời ơi, kinh ngạc quá, bất ngờ quá',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Cụm từ cảm thán viết tắt phổ biến toàn cầu để diễn tả sự kinh ngạc.',
    usageContext: 'Bày tỏ cảm xúc giật mình, sửng sốt trước một thông tin bất ngờ.',
    pedagogicalNote: 'Thay bằng thán từ tiếng Việt chuẩn: "Ôi trời!", "Thật bất ngờ!" khi viết văn.',
    exampleSentence: 'OMG, đề kiểm tra 1 tiết lần này khó bất ngờ luôn!',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'ab-03',
    term: 'BTW',
    meaning: 'By The Way – nhân tiện',
    standardEquivalent: 'Nhân tiện, tiện đây, nhân thể',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Viết tắt tiếng Anh dùng để chuyển ý hoặc bổ sung thông tin ngoài lề.',
    usageContext: 'Thêm một lưu ý nhỏ vào cuối đoạn tin nhắn.',
    pedagogicalNote: 'Rèn luyện thói quen dùng từ liên kết tiếng Việt trong giao tiếp chính thức: "Nhân tiện đây...", "Tiện thể...".',
    exampleSentence: 'Tớ gửi cậu đề cương Văn nha. BTW, mai nhớ mang tập giùm tớ!',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'ab-04',
    term: 'IDK',
    meaning: "I Don't Know – tôi không biết",
    standardEquivalent: 'Mình chưa rõ, tớ không biết, tôi chưa nắm được',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Viết tắt 3 chữ cái đầu của câu phủ định tiếng Anh quen thuộc.',
    usageContext: 'Phản hồi nhanh trong tin nhắn khi chưa có câu trả lời.',
    pedagogicalNote: 'Khi trả lời thầy cô hoặc người lớn, phải dùng câu đầy đủ: "Dạ thưa thầy/cô, em chưa rõ điều này ạ".',
    exampleSentence: 'Câu hỏi nâng cao này khó quá, IDK giải thế nào luôn!',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'ab-05',
    term: 'IMO',
    meaning: 'In My Opinion – theo ý kiến tôi',
    standardEquivalent: 'Theo quan điểm của tôi, theo thiển ý của mình',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Viết tắt biểu thị quan điểm cá nhân trong tranh biện trực tuyến.',
    usageContext: 'Đưa ra góc nhìn riêng một cách lịch sự, tránh áp đặt.',
    pedagogicalNote: 'Một kỹ năng phản biện tốt. Trong bài văn nghị luận nên dùng: "Theo quan điểm cá nhân tôi...", "Người viết nhận thấy...".',
    exampleSentence: 'IMO, nhân vật Chí Phèo là một bi kịch bị cự tuyệt quyền làm người.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'ab-06',
    term: 'FYI',
    meaning: 'For Your Information – để bạn biết',
    standardEquivalent: 'Xin thông tin để bạn rõ, gửi bạn tham khảo thêm',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Từ viết tắt trong thư điện tử và công sở quốc tế, chuyển sang nhóm học tập trực tuyến.',
    usageContext: 'Chia sẻ tài liệu, thời khóa biểu cho bạn học cùng lớp.',
    pedagogicalNote: 'Từ viết tắt mang tính học tập và công việc. Có thể dùng trong email học nhóm văn minh.',
    exampleSentence: 'FYI: Lịch thi học kỳ 1 của trường THPT Long Hiệp đã được công bố rồi nhé cả lớp.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'ab-07',
    term: 'IB',
    meaning: 'Inbox – nhắn tin riêng',
    standardEquivalent: 'Nhắn tin riêng, trao đổi qua hộp thư cá nhân',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Rút ngắn từ "inbox" (hộp thư đến trên mạng xã hội Facebook, Instagram).',
    usageContext: 'Hẹn bạn nhắn tin riêng để trao đổi nội dung chi tiết hơn.',
    pedagogicalNote: 'Khi mời thầy cô hay phụ huynh trao đổi, nên nhắn: "Em xin phép được nhắn tin riêng trao đổi với thầy/cô ạ".',
    exampleSentence: 'Bạn nào cần file đề thi thử Văn thì IB cho tớ gửi nhé.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'ab-08',
    term: 'Rep',
    meaning: 'Reply – trả lời',
    standardEquivalent: 'Hồi âm, phản hồi, trả lời tin nhắn',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Rút ngắn từ động từ "reply" trong giao diện hòm thư và ứng dụng chat.',
    usageContext: 'Hối thúc bạn trả lời tin nhắn hoặc cảm ơn vì đã hồi âm.',
    pedagogicalNote: 'Tránh dùng cộc lốc "rep đi"; với thầy cô phải thưa: "Dạ em cảm ơn cô đã phản hồi tin nhắn của em ạ".',
    exampleSentence: 'Cậu rep tin nhắn nhóm sớm để tổ mình thống nhất phân công thuyết trình nhé.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'ab-09',
    term: 'Cmt',
    meaning: 'Comment – bình luận',
    standardEquivalent: 'Bình luận, để lại ý kiến dưới bài viết',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Viết tắt phụ âm c-m-t của từ comment.',
    usageContext: 'Kêu gọi bạn bè đóng góp ý kiến dưới bài đăng hoạt động đoàn trường.',
    pedagogicalNote: 'Nhắc nhở học sinh giữ văn hóa bình luận văn minh, tôn trọng người khác.',
    exampleSentence: 'Các bạn cmt bên dưới để chọn bài hát cho buổi diễn văn nghệ 20/11 nha.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'ab-10',
    term: 'Ad',
    meaning: 'Admin – quản trị viên',
    standardEquivalent: 'Quản trị viên, người điều hành trang/nhóm',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Rút ngắn từ "Administrator" (người quản trị hệ thống công nghệ thông tin).',
    usageContext: 'Xưng hô với người điều hành fanpage của trường THCS và THPT Long Hiệp.',
    pedagogicalNote: 'Cách xưng hô chức danh trên mạng xã hội tiện lợi, được chấp nhận rộng rãi.',
    exampleSentence: 'Ad ơi cho em hỏi khi nào nhà trường mở đăng ký giải bóng đá truyền thống ạ?',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'ab-11',
    term: 'Ib',
    meaning: 'Inbox – nhắn tin',
    standardEquivalent: 'Gửi tin nhắn riêng (dạng viết thường)',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Dạng viết thường của từ viết tắt IB trong tin nhắn nhanh.',
    usageContext: 'Nhắn nhanh cho bạn bè trên Zalo/Messenger.',
    pedagogicalNote: 'Tương tự IB, mang tính tiện lợi trong hội thoại trực tuyến thường ngày.',
    exampleSentence: 'Chút nữa tan học ib tớ mượn máy tính Casio nha.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'ab-12',
    term: 'K',
    meaning: 'Không',
    standardEquivalent: 'Không, chẳng (từ phủ định)',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Ký hiệu chữ K đại diện cho âm "kh-" trong teencode tiếng Việt thời kỳ đầu Yahoo và SMS.',
    usageContext: 'Tin nhắn siêu ngắn giữa bạn bè cùng trang lứa.',
    pedagogicalNote: 'Tuyệt đối cấm viết chữ "k" thay cho "không" trong bất kỳ bài tập, bài thi hay đơn từ nào!',
    exampleSentence: 'Tớ k đi học thêm buổi chiều được vì bận việc nhà rồi.',
    schoolAppropriateness: 'forbidden_in_formal'
  },
  {
    id: 'ab-13',
    term: 'Ko',
    meaning: 'Không',
    standardEquivalent: 'Không (từ phủ định teencode)',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Rút gọn chữ "không" bằng cách bỏ các phụ âm cuối và dấu thanh.',
    usageContext: 'Nhắn tin nhanh trên điện thoại di động.',
    pedagogicalNote: 'Hiện tượng lười gõ dấu tiếng Việt; cần rèn luyện thói quen gõ tiếng Việt có dấu đầy đủ, tròn vành rõ chữ.',
    exampleSentence: 'Bài tập này khó quá ko biết mai thầy có sửa trên lớp ko.',
    schoolAppropriateness: 'forbidden_in_formal'
  },
  {
    id: 'ab-14',
    term: 'G9',
    meaning: 'Good night – chúc ngủ ngon',
    standardEquivalent: 'Chúc ngủ ngon, chúc bạn một đêm ngon giấc',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Chơi chữ kết hợp ký tự chữ G và số 9 (phát âm Nine gần âm với Night).',
    usageContext: 'Lời chúc tạm biệt trước khi đi ngủ trong nhóm chat lớp.',
    pedagogicalNote: 'Lời chào hóm hỉnh giữa bạn trẻ, nhưng với bố mẹ thầy cô nên chúc bằng tiếng Việt trọn vẹn: "Con chúc bố mẹ ngủ ngon ạ".',
    exampleSentence: 'Học bài xong rồi, tớ đi ngủ trước đây, g9 cả nhóm nhé!',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'ab-15',
    term: 'Oke',
    meaning: 'Đồng ý, được',
    standardEquivalent: 'Đồng ý, nhất trí, vâng ạ',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Việt hóa từ "OK" (O.K - All Correct) của tiếng Anh Mỹ thành dạng phát âm hai âm tiết thân thuộc.',
    usageContext: 'Bày tỏ sự đồng thuận nhanh trong đối thoại thường ngày.',
    pedagogicalNote: 'Khi thưa gửi với thầy cô, phải nói "Dạ vâng ạ" hoặc "Em hiểu rồi ạ", không được đáp cụt ngủn "Oke".',
    exampleSentence: 'Oke mai 7 giờ tụi mình tập trung trước cổng trường nha!',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'ab-16',
    term: 'Hmmm',
    meaning: 'Đang suy nghĩ, phân vân',
    standardEquivalent: 'Đang đắn đo suy nghĩ, còn băn khoăn',
    category: 'abbreviation',
    sectionNumber: 2,
    sectionTitle: 'Những từ viết tắt thường gặp',
    originDetail: 'Từ tượng thanh mô phỏng tiếng thở dài hoặc tiếng ậm ừ ngập ngừng khi đang tư duy.',
    usageContext: 'Biểu thị sự ngập ngừng chưa quyết định được phương án.',
    pedagogicalNote: 'Là từ tượng thanh biểu cảm trong chat; trong thuyết trình nên thay bằng: "Để trả lời câu hỏi này, chúng ta cần cân nhắc...".',
    exampleSentence: 'Hmmm... để tớ suy nghĩ xem nên chọn đề tài thuyết trình nào nhé.',
    schoolAppropriateness: 'acceptable_casual'
  }
];

// 3. TIẾNG LÓNG MANG MÀU SẮC GEN Z (20 TỪ)
export const SECTION_3_GEN_Z_SLANG: CurriculumTermItem[] = [
  {
    id: 'gz-01',
    term: 'Mãi đỉnh',
    meaning: 'Rất tuyệt vời',
    standardEquivalent: 'Tuyệt vời vô cùng, xuất sắc đỉnh cao, mãi mãi đứng đầu',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Cụm từ khen ngợi bùng nổ trên mạng xã hội từ 2021 nhằm biểu thị sự ngưỡng mộ tuyệt đối.',
    usageContext: 'Tán thưởng một thành tích xuất sắc hoặc tình bạn gắn bó bền chặt.',
    pedagogicalNote: 'Mang năng lượng cổ vũ tinh thần rất lớn. Trong văn nghị luận nên dùng từ ngữ chuẩn mực: "vô cùng kiệt xuất", "đạt đến đỉnh cao nghệ thuật".',
    exampleSentence: 'Đội tuyển kéo co trường Long Hiệp hôm nay thi đấu quá xuất sắc, mãi đỉnh luôn!',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'gz-02',
    term: 'Hết nước chấm',
    meaning: 'Quá xuất sắc',
    standardEquivalent: 'Tuyệt vời không còn chỗ nào để chê, hoàn hảo xuất sắc',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Ẩn dụ ẩm thực Việt Nam (chấm đến giọt nước chấm cuối cùng), ngụ ý đã thưởng thức trọn vẹn sự tuyệt vời.',
    usageContext: 'Khen ngợi một món ăn ngon, bài hát hay, hoặc bài tập thuyết trình quá hoàn hảo.',
    pedagogicalNote: 'Một ví dụ đặc sắc về hiện tượng ẩn dụ ẩm thực trong khẩu ngữ hiện đại của người Việt.',
    exampleSentence: 'Bài vẽ cổ động của lớp 11A3 nhìn hài hòa màu sắc hết nước chấm luôn á.',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'gz-03',
    term: 'Đỉnh nóc, kịch trần',
    meaning: 'Cực kỳ tuyệt vời',
    standardEquivalent: 'Vô cùng ngoạn mục, đạt đến mức cao nhất có thể',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Trào lưu bùng nổ từ phát ngôn hài hước "Đỉnh nóc, kịch trần, bay phấp phới" trong mùa thi tốt nghiệp 2024.',
    usageContext: 'Ca ngợi cảm xúc phấn khích tột độ khi đạt điểm 10 hoặc hoàn thành mục tiêu lớn.',
    pedagogicalNote: 'Biện pháp nói quá (hyperbole) phóng đại cảm xúc của học trò, thể hiện sự vui tươi hồn nhiên.',
    exampleSentence: 'Đạt điểm tối đa bài kiểm tra Hóa học thì đúng là đỉnh nóc kịch trần rồi!',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'gz-04',
    term: 'Xỉu up xỉu down',
    meaning: 'Quá bất ngờ hoặc thích thú',
    standardEquivalent: 'Vô cùng thích thú, kinh ngạc đến mức choáng ngợp',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Chuyển mã kết hợp tiếng Việt (xỉu) và hai trạng từ phương hướng tiếng Anh (up - down), tạo nhịp điệu dập dềnh.',
    usageContext: 'Mô tả trạng thái quá đỗi hào hứng trước vẻ đẹp hoặc một bất ngờ dễ thương.',
    pedagogicalNote: 'Hiện tượng chuyển mã Anh - Việt vui tươi; trong văn học nên phân tích như một nét tâm lý lứa tuổi.',
    exampleSentence: 'Màn ảo thuật của bạn lớp bên làm cả hội trường xỉu up xỉu down vì bất ngờ.',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'gz-05',
    term: 'Chấn động',
    meaning: 'Gây bất ngờ lớn',
    standardEquivalent: 'Gây kinh ngạc to lớn, tạo nên tiếng vang bất ngờ',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Từ Hán Việt vốn chỉ động đất hoặc biến cố lịch sử, được giới trẻ hạ bậc nghĩa để chỉ những tin giật gân.',
    usageContext: 'Bàn tán về một sự việc bất ngờ vừa diễn ra trong trường lớp.',
    pedagogicalNote: 'Hiện tượng mở rộng và hạ bậc trường nghĩa; cần nhắc học sinh dùng đúng quy mô sự việc.',
    exampleSentence: 'Thông tin trường chuẩn bị tổ chức hội trại xuân làm chấn động cả khối 11.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'gz-06',
    term: 'Cấn cấn',
    meaning: 'Có điều gì đó không ổn',
    standardEquivalent: 'Có điều gì lấn cấn, thiếu hợp lý, gượng gạo',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Từ tượng hình cảm giác vướng víu thể chất chuyển sang chỉ sự băn khoăn về mặt logic hoặc ứng xử.',
    usageContext: 'Nhận xét một lập luận chưa chặt chẽ hoặc một cách hành xử gượng gạo.',
    pedagogicalNote: 'Từ thuần Việt giàu tính trực giác; rất phù hợp để chỉ ra lỗ hổng lập luận khi phản biện văn bản.',
    exampleSentence: 'Cách giải thích trong bài văn này nghe cứ cấn cấn sao đó, luận cứ chưa thật thuyết phục.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'gz-07',
    term: 'Suy',
    meaning: 'Buồn, tâm trạng, suy tư',
    standardEquivalent: 'Chìm đắm trong âu sầu, suy tư muộn phiền',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Rút gọn từ các chữ "suy tư", "suy sụp" hoặc dòng nhạc lãng mạn buồn lụy.',
    usageContext: 'Tự nhận mình đang buồn rầu vì bài tập hoặc chuyện tình cảm bạn bè.',
    pedagogicalNote: 'Cần động viên học sinh chia sẻ để giải tỏa tâm lý, không chìm đắm trong suy nghĩ tiêu cực.',
    exampleSentence: 'Hôm nay trời mưa lành lạnh, ngồi nghe bản nhạc không lời tự nhiên thấy suy ngang.',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'gz-08',
    term: 'Keo lỳ',
    meaning: 'Đẹp, cuốn hút, ấn tượng',
    standardEquivalent: 'Hết sức quyến rũ, cuốn hút, đẹp đẽ ấn tượng',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Bắt nguồn từ cộng đồng sáng tạo nội dung trực tuyến, ví nét đẹp cuốn hút như chất keo dán chặt ánh nhìn.',
    usageContext: 'Khen ngợi bức ảnh kỷ yếu hoặc thần thái chụp ảnh của bạn học.',
    pedagogicalNote: 'Ngôn ngữ tán gẫu thị giác của học sinh; trong bài phân tích vẻ đẹp nhân vật văn học phải dùng từ ngữ chuẩn.',
    exampleSentence: 'Tấm hình chụp bế mạc năm học này nhìn lớp mình keo lỳ ghê!',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'gz-09',
    term: 'Báo thủ',
    meaning: 'Người thường gây rắc rối',
    standardEquivalent: 'Người hay nghịch ngợm gây rối, người hay làm hỏng việc',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Chơi chữ từ "báo" trong "báo đời, báo hại" kết hợp hậu tố Hán Việt "thủ" (người làm một nghề/thói quen).',
    usageContext: 'Trêu chọc bạn học hậu đậu làm rơi vỡ đồ hoặc quên nhiệm vụ của tổ.',
    pedagogicalNote: 'Trêu đùa hóm hỉnh nhưng không nên biến thành kỳ thị, xúc phạm nhân cách của bạn bè.',
    exampleSentence: 'Hôm nay phân công ông trực nhật mà quên mang chổi, đúng là báo thủ của tổ!',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'gz-10',
    term: 'Ô dề',
    meaning: 'Quá mức, lố',
    standardEquivalent: 'Lố lăng, làm quá mức cần thiết, phản cảm',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Bắt nguồn từ một đoạn clip ngắn trên TikTok người phụ nữ trang điểm đậm nói câu "Làm gì làm cũng đừng để ô dề".',
    usageContext: 'Nhắc nhở bạn bè đừng trang điểm quá đậm hay cư xử quá lố ở trường học.',
    pedagogicalNote: 'Giúp học sinh tự điều chỉnh hành vi cho phù hợp chuẩn mực tác phong học đường.',
    exampleSentence: 'Mặc đồng phục chỉnh tề đi học là đẹp rồi, đừng gắn phụ kiện rườm rà nhìn ô dề lắm.',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'gz-11',
    term: 'Hướng nội online',
    meaning: 'Trên mạng nói nhiều, ngoài đời ít nói',
    standardEquivalent: 'Nhút nhát ngoài đời nhưng hoạt ngôn trên mạng',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Kết hợp khái niệm tâm lý học (hướng nội) với môi trường số hóa để miêu tả mâu thuẫn hành vi của giới trẻ.',
    usageContext: 'Tự trào về bản thân khi ở trường thì rụt rè nhưng trên mạng thì bình luận rôm rả.',
    pedagogicalNote: 'Một nét tâm lý học đường thời đại số; giáo viên cần khuyến khích học sinh tự tin giao tiếp ngoài đời thực.',
    exampleSentence: 'Ở lớp thì im re không dám phát biểu mà về nhà vào nhóm chat chat lia lịa, đúng là hướng nội online.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'gz-12',
    term: 'Hệ tư tưởng',
    meaning: 'Điều mình đặc biệt yêu thích',
    standardEquivalent: 'Sở thích đặc trưng, phong cách độc đáo yêu thích',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Thuật ngữ triết học chính trị được học sinh sử dụng theo nghĩa bóng vui để chỉ phong cách hay nhân vật mình theo đuổi.',
    usageContext: 'Nói về sự gắn bó đặc biệt với một trào lưu, món ăn hoặc thần tượng.',
    pedagogicalNote: 'Lưu ý học sinh: Trong môn Giáo dục Kinh tế và Pháp luật / Triết học, "hệ tư tưởng" mang nghĩa học thuật rất nghiêm cẩn.',
    exampleSentence: 'Món trà tắc giải nhiệt sau giờ thể dục đã trở thành một hệ tư tưởng của cả lớp mình.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'gz-13',
    term: 'Không có nhưng',
    meaning: 'Khẳng định mạnh mẽ',
    standardEquivalent: 'Khẳng định dứt khoát, không cần bàn cãi thêm',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Mô phỏng mệnh lệnh dứt khoát loại trừ mọi lý do thoái thác.',
    usageContext: 'Yêu cầu các thành viên trong tổ nộp bài tập đúng hạn.',
    pedagogicalNote: 'Rèn luyện tính kỷ luật, sự dứt khoát trong công việc tập thể.',
    exampleSentence: 'Tối nay 8 giờ tất cả phải gửi bài thuyết trình cho tổ trưởng, không có nhưng!',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'gz-14',
    term: 'Cái nết đánh chết cái đẹp',
    meaning: 'Châm biếm tính cách không tốt',
    standardEquivalent: 'Tính cách xấu làm mất đi vẻ đẹp bên ngoài',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Cải biên từ câu tục ngữ truyền thống "Cái nết đánh chết cái đẹp" (vốn khẳng định nết na quan trọng hơn nhan sắc), dùng để phê phán thói xấu.',
    usageContext: 'Nhắc nhở người có vẻ ngoài ưa nhìn nhưng lại ăn nói thô lỗ, ích kỷ.',
    pedagogicalNote: 'Bài học đạo đức quý báu của dân tộc được kế thừa trong bối cảnh ứng xử mạng hiện đại.',
    exampleSentence: 'Dù ngoại hình có ưa nhìn đến mấy mà ăn nói xấc xược thì đúng là cái nết đánh chết cái đẹp.',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'gz-15',
    term: 'Rén',
    meaning: 'Sợ, e ngại',
    standardEquivalent: 'E sợ, dè dặt, lo lắng chùn bước',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Khẩu ngữ bắt nguồn từ cảm giác sợ sệt, co ro không dám hành động.',
    usageContext: 'Nói về cảm giác lo lắng trước khi bước vào phòng thi hoặc gọi lên bảng.',
    pedagogicalNote: 'Khẩu ngữ dân gian quen thuộc; trong bài văn cần diễn tả bằng các trạng từ tâm lý phong phú.',
    exampleSentence: 'Mỗi lần thầy gọi kiểm tra miệng bài thơ Tây Tiến là cả lớp rén ngang.',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'gz-16',
    term: 'Quạo',
    meaning: 'Cáu giận',
    standardEquivalent: 'Cáu bẳn, bực bội, nổi nóng',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Phương ngữ Nam Bộ đặc sắc thể hiện trạng thái bực tức, cau có gương mặt.',
    usageContext: 'Phản ứng khi bị trêu chọc quá đà hoặc gặp trục trặc công việc.',
    pedagogicalNote: 'Từ ngữ Nam Bộ sinh động; khuyên học sinh biết kiềm chế cảm xúc nóng giận trong lớp học.',
    exampleSentence: 'Đang mệt mà cứ chọc ghẹo hoài là người ta quạo thiệt đó nhen!',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'gz-17',
    term: 'Hết cứu',
    meaning: 'Tình huống khó xử lý',
    standardEquivalent: 'Vô phương cứu chữa, tình thế quá khó tháo gỡ',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Ngữ cảnh y khoa chuyển sang đời sống chỉ sự bất lực một cách hài hước trước một sai sót trớ trêu.',
    usageContext: 'Than thở khi làm sai đề thi hoặc làm cháy chiếc bánh nướng.',
    pedagogicalNote: 'Thể hiện sự hóm hỉnh khi nhận lỗi, nhưng không nên có thái độ buông xuôi, bỏ cuộc thật sự.',
    exampleSentence: 'Tô màu nhầm cả góc tranh cổ động rồi, tình huống này đúng là hết cứu!',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'gz-18',
    term: 'Ủa alo?',
    meaning: 'Ngạc nhiên, khó hiểu',
    standardEquivalent: 'Sao lại thế nhỉ?, thật khó hiểu, bất ngờ quá',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Kết hợp thán từ nghi vấn "Ủa" với lời chào qua điện thoại "Alo", tạo thành thán từ bất ngờ đặc trưng.',
    usageContext: 'Bày tỏ sự kinh ngạc trước một tình huống phi lý hoặc thông báo bất ngờ.',
    pedagogicalNote: 'Chỉ dùng tán gẫu với bạn bè; tránh phát ngôn vô thức khi đứng trước thầy cô giáo.',
    exampleSentence: 'Ủa alo? Rõ ràng hôm qua nhớ cất máy tính vào cặp rồi mà nay đâu mất tiêu?',
    schoolAppropriateness: 'strictly_informal'
  },
  {
    id: 'gz-19',
    term: 'Xin vía',
    meaning: 'Mong được may mắn giống người khác',
    standardEquivalent: 'Mong cầu nhận được sự may mắn và thành công tương tự',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Bắt nguồn từ tín ngưỡng dân gian "vía" (ba hồn bảy vía), được cư dân mạng dùng như một lời chúc may mắn.',
    usageContext: 'Bình luận dưới bài đăng bạn bè đạt điểm cao, đậu học bổng.',
    pedagogicalNote: 'Lời chúc dễ thương mang tính khích lệ, nhưng học sinh cần hiểu thành công đến từ sự nỗ lực chứ không chỉ dựa vào may mắn.',
    exampleSentence: 'Thấy bạn đạt giải Nhất tỉnh môn Văn mà khâm phục quá, cho mình xin vía chăm học nha!',
    schoolAppropriateness: 'acceptable_casual'
  },
  {
    id: 'gz-20',
    term: 'Mãi keo',
    meaning: 'Rất yêu thích, quý mến',
    standardEquivalent: 'Mãi mãi gắn bó khăng khít, tình cảm keo sơn bền chặt',
    category: 'genz',
    sectionNumber: 3,
    sectionTitle: 'Tiếng lóng mang màu sắc Gen Z',
    originDetail: 'Ẩn dụ chất keo kết dính, liên hệ với thành ngữ truyền thống "tình cảm keo sơn".',
    usageContext: 'Khẳng định tình bạn thân thiết, đoàn kết giữa các thành viên trong lớp học.',
    pedagogicalNote: 'Một sự kế thừa thú vị từ ngữ nghĩa truyền thống "keo sơn gắn bó" trong diện mạo ngôn ngữ trẻ thơ ngây.',
    exampleSentence: 'Dù sau này tốt nghiệp ra trường mỗi người một nơi thì lớp 11 tụi mình vẫn mãi keo nhé!',
    schoolAppropriateness: 'acceptable_casual'
  }
];

// 4. MỘT SỐ CÂU GIAO TIẾP TRÊN MẠNG XÃ HỘI (10 CÂU)
export const SECTION_4_SOCIAL_SENTENCES: CurriculumSocialSentence[] = [
  {
    id: 'ss-01',
    sentence: 'Bạn này slay quá!',
    meaning: 'Bạn này quá xuất sắc!',
    speakerIntent: 'Khen ngợi phong thái tự tin, trang phục đẹp hoặc phần trình diễn xuất sắc của người bạn.',
    standardFormal: 'Bạn ấy trông rất nổi bật và tự tin trong trang phục hôm nay.',
    studentChat: 'Bạn này slay quá, thần thái đỉnh cao luôn á!',
    pedagogicalGuidance: 'Câu khẩu ngữ khen ngợi giàu cảm xúc trên mạng xã hội. Khi chuyển sang giao tiếp học đường, nên diễn đạt cụ thể lời khen: "Bạn thuyết trình rất tự tin và cuốn hút".',
    suggestedContext: 'friend_chat',
    tags: ['Khen ngợi', 'Ngoại hình', 'Slay']
  },
  {
    id: 'ss-02',
    sentence: 'Cho xin vía học giỏi!',
    meaning: 'Mong mình cũng học giỏi như vậy!',
    speakerIntent: 'Bày tỏ sự ngưỡng mộ thành tích học tập của bạn và mong ước bản thân cũng đạt kết quả tương tự.',
    standardFormal: 'Mong rằng mình cũng có thể chăm chỉ và đạt được kết quả học tập tốt như bạn.',
    studentChat: 'Nhìn bảng điểm 10 tròn xoe của bạn mà ngưỡng mộ ghê, cho mình xin vía học giỏi nha!',
    pedagogicalGuidance: 'Lời khen mang tính ước lệ vui vẻ. Giáo viên cần nhắc nhở học sinh: may mắn là một phần nhưng kết quả học tập thực chất đến từ sự kiên trì, rèn luyện của bản thân.',
    suggestedContext: 'social_comment',
    tags: ['Học tập', 'Xin vía', 'Ngưỡng mộ']
  },
  {
    id: 'ss-03',
    sentence: 'Nay outfit cháy phố!',
    meaning: 'Trang phục hôm nay rất nổi bật!',
    speakerIntent: 'Khen ngợi bộ trang phục bạn mặc rất thời trang, bắt mắt và phong cách.',
    standardFormal: 'Hôm nay bạn diện trang phục rất đẹp mắt và nổi bật.',
    studentChat: 'Áo lớp hôm nay diện đi dã ngoại trông cháy phố thật sự!',
    pedagogicalGuidance: 'Từ "outfit" (trang phục) và "cháy phố" (nổi bật, rực rỡ) thể hiện sự năng động của tuổi trẻ. Khi đi học, học sinh cần giữ gìn trang phục đồng phục nghiêm túc, đúng quy định.',
    suggestedContext: 'friend_chat',
    tags: ['Trang phục', 'Thời trang', 'Khen ngợi']
  },
  {
    id: 'ss-04',
    sentence: 'Câu chuyện này hơi cấn!',
    meaning: 'Câu chuyện có điều gì chưa hợp lý.',
    speakerIntent: 'Bày tỏ sự nghi ngờ, hoài nghi trước một chi tiết hoặc lời kể cảm thấy thiếu nhất quán.',
    standardFormal: 'Tình tiết này dường như chưa thật sự hợp lý, có điểm cần phải xem xét lại.',
    studentChat: 'Nghe lời giải thích vụ làm mất chìa khóa lớp thấy hơi cấn cấn sao á.',
    pedagogicalGuidance: 'Từ "cấn" gợi cảm giác gợn, vướng víu về mặt logic. Đây là phản xạ tư duy phản biện tốt của học sinh khi tiếp nhận thông tin trên mạng xã hội.',
    suggestedContext: 'academic_writing',
    tags: ['Phản biện', 'Nghi vấn', 'Logic']
  },
  {
    id: 'ss-05',
    sentence: 'Đúng gu tôi luôn!',
    meaning: 'Rất hợp sở thích của tôi.',
    speakerIntent: 'Khẳng định sự tương đồng về sở thích, phong cách hay quan điểm cá nhân.',
    standardFormal: 'Điều này hoàn toàn phù hợp với sở thích và sự quan tâm của bản thân tôi.',
    studentChat: 'Đề tài thuyết trình về văn hóa dân gian này đúng gu tôi luôn rồi!',
    pedagogicalGuidance: 'Từ "gu" (mượn từ goût trong tiếng Pháp) đã hòa nhập vào tiếng Việt hàng trăm năm. Câu nói tự nhiên, lịch thiệp trong trò chuyện đời thường.',
    suggestedContext: 'friend_chat',
    tags: ['Sở thích', 'Đồng điệu', 'Từ mượn']
  },
  {
    id: 'ss-06',
    sentence: 'Không đùa được đâu!',
    meaning: 'Thực sự rất ấn tượng.',
    speakerIntent: 'Nhấn mạnh mức độ nghiêm túc, tầm vóc hoặc năng lực thực sự đáng gờm của một người/việc.',
    standardFormal: 'Thành quả này thực sự rất ấn tượng và đáng được nhìn nhận một cách nghiêm túc.',
    studentChat: 'Điểm tổng kết môn Toán của bạn ấy 9.8, thực lực này không đùa được đâu!',
    pedagogicalGuidance: 'Thành ngữ khẩu ngữ biểu thị sự khẳng định chắc chắn. Có thể dùng trong giao tiếp khẩu ngữ để khích lệ sự nỗ lực của tập thể.',
    suggestedContext: 'friend_chat',
    tags: ['Khẳng định', 'Ấn tượng', 'Khẩu ngữ']
  },
  {
    id: 'ss-07',
    sentence: 'Tôi bị sốc visual!',
    meaning: 'Bị ấn tượng mạnh về ngoại hình hoặc hình ảnh.',
    speakerIntent: 'Bày tỏ sự choáng ngợp trước vẻ đẹp ngoại hình, khung cảnh hoặc hình ảnh nghệ thuật quá lộng lẫy.',
    standardFormal: 'Tôi thực sự bị choáng ngợp trước vẻ đẹp và sự ấn tượng của khung cảnh này.',
    studentChat: 'Sân khấu bế giảng trường mình được trang hoàng lộng lẫy làm ai cũng bị sốc visual!',
    pedagogicalGuidance: 'Chuyển mã kết hợp từ tiếng Anh "visual" (thị giác, diện mạo). Trong văn miêu tả Ngữ văn 11, cần dùng hệ thống từ láy tượng hình tiếng Việt phong phú để tả cảnh, tả người.',
    suggestedContext: 'social_comment',
    tags: ['Thị giác', 'Ngoại hình', 'Chuyển mã']
  },
  {
    id: 'ss-08',
    sentence: 'Mãi keo nha!',
    meaning: 'Luôn yêu quý, gắn bó nhé!',
    speakerIntent: 'Gửi gắm lời chúc tình bạn luôn keo sơn, gắn kết dài lâu dù trải qua nhiều thử thách.',
    standardFormal: 'Chúc cho tình bạn và sự gắn bó đoàn kết của chúng ta mãi mãi bền chặt.',
    studentChat: 'Năm học cuối cấp rồi, chúc tập thể lớp mình mãi keo nha các bạn!',
    pedagogicalGuidance: 'Lời chúc thân thương của tuổi học trò. Từ "keo" gợi liên tưởng đến câu thành ngữ "keo sơn gắn bó" trong kho tàng văn học dân gian Việt Nam.',
    suggestedContext: 'friend_chat',
    tags: ['Tình bạn', 'Gắn kết', 'Lời chúc']
  },
  {
    id: 'ss-09',
    sentence: 'Xin phép được flex nhẹ!',
    meaning: 'Cho phép tôi khoe một chút!',
    speakerIntent: 'Mở lời một cách khiêm tốn trước khi chia sẻ về một niềm vui, thành tích hoặc kỷ niệm đáng tự hào.',
    standardFormal: 'Tôi xin phép được chia sẻ một niềm vui nho nhỏ cùng với tất cả mọi người.',
    studentChat: 'Sau bao ngày luyện tập thì đội tuyển trường mình đã có huy chương, xin phép được flex nhẹ tấm hình!',
    pedagogicalGuidance: 'Sự kết hợp giữa nghi thức lịch sự tiếng Việt ("Xin phép") và từ lóng mạng ("flex nhẹ"). Thể hiện nét tinh nghịch nhưng vẫn lễ độ của học sinh.',
    suggestedContext: 'social_comment',
    tags: ['Flex', 'Khiêm tốn', 'Chia sẻ']
  },
  {
    id: 'ss-10',
    sentence: 'Đúng là hết cứu!',
    meaning: 'Tình huống quá khó đỡ!',
    speakerIntent: 'Thốt lên trước một tình thế bế tắc, sai lầm khó sửa hoặc hành động ngớ ngẩn nhưng buồn cười.',
    standardFormal: 'Tình huống này quả thực vô cùng khó xử lý và nan giải.',
    studentChat: 'Sáng nay dậy trễ còn để quên chìa khóa trong phòng, đúng là hết cứu luôn!',
    pedagogicalGuidance: 'Thán từ gây cười trong giao tiếp bè bạn. Cần nhắc nhở học sinh dù gặp khó khăn trong học tập cũng phải luôn tìm giải pháp, không nản chí buông xuôi.',
    suggestedContext: 'friend_chat',
    tags: ['Hài hước', 'Than thở', 'Tình huống']
  }
];

// Helper xuất tất cả các từ và câu
export function getAllCurriculumTerms(): CurriculumTermItem[] {
  return [...SECTION_1_COMMON_SLANG, ...SECTION_2_ABBREVIATIONS, ...SECTION_3_GEN_Z_SLANG];
}

export function getCurriculumSection(sectionNum: 1 | 2 | 3 | 4) {
  switch (sectionNum) {
    case 1:
      return { meta: CURRICULUM_SECTIONS_META[0], items: SECTION_1_COMMON_SLANG };
    case 2:
      return { meta: CURRICULUM_SECTIONS_META[1], items: SECTION_2_ABBREVIATIONS };
    case 3:
      return { meta: CURRICULUM_SECTIONS_META[2], items: SECTION_3_GEN_Z_SLANG };
    case 4:
      return { meta: CURRICULUM_SECTIONS_META[3], items: SECTION_4_SOCIAL_SENTENCES };
  }
}
