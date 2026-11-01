/**
 * NETWORD - Bộ câu hỏi Thử thách ngôn ngữ (Chuyên đề 2 Ngữ văn 11)
 * GV phát triển & Thẩm định: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 */

import { ChallengeQuestionItem, LearningBadge } from '../types/challenges';

export const INITIAL_CHALLENGE_QUESTIONS: ChallengeQuestionItem[] = [
  // ==========================================
  // DẠNG 1: CHỌN ĐÚNG Ý NGHĨA CỦA TỪ (slang_meaning)
  // ==========================================
  {
    id: 'cq-01',
    title: 'Ý nghĩa của thuật ngữ "Flex" trên không gian số',
    type: 'slang_meaning',
    difficulty: 'easy',
    scenario: 'Trong nhóm chat của lớp 11A1, bạn Nam chia sẻ hình ảnh giấy khen học sinh Ba môn Văn cấp tỉnh và nhận được lời bình luận: "Bạn flex mượt ghê á!"',
    question: 'Trong bối cảnh văn hóa mạng hiện nay, từ "Flex" mang ý nghĩa chính xác nhất là gì?',
    options: [
      'Gập người uốn cong cơ bắp để kiểm tra sức mạnh thể hình trong phòng gym.',
      'Hành động khoe khéo hoặc chia sẻ về thành tích, tài sản, trải nghiệm đặc biệt một cách hài hước nhằm gây ấn tượng tích cực.',
      'Hành vi chỉ trích, bới móc lỗi lầm của người khác để hạ bệ uy tín trên mạng.',
      'Việc từ chối tham gia một hoạt động tập thể do cảm thấy không hứng thú.'
    ],
    correctIndex: 1,
    explanation: '"Flex" là từ mượn tiếng Anh được chuyển dịch nghĩa trong văn hóa mạng giới trẻ từ năm 2023. Ban đầu chỉ việc siết cơ bắp phô trương thể lực, trên mạng nó chuyển nghĩa sang việc khoe thành tích, trải nghiệm tích cực một cách khéo léo và hài hước.',
    points: 20,
    unitLesson: 'Ngữ văn 11 - Chuyên đề 2: Hiện tượng vay mượn từ ngữ và mở rộng ngữ nghĩa trong xã hội hiện đại.',
    isWeeklyChallenge: true,
    weekNumber: 8,
    createdBy: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-01'
  },
  {
    id: 'cq-02',
    title: 'Cơ chế tu từ của từ "Cột sống"',
    type: 'slang_meaning',
    difficulty: 'medium',
    scenario: 'Học sinh thường hay than thở trước kỳ thi: "Cột sống dạo này bất ổn quá bà con ơi!"',
    question: 'Cụm từ "cột sống" ở đây được hình thành dựa trên cơ chế ngôn ngữ nào?',
    options: [
      'Nói lái phương ngữ Nam Bộ.',
      'Hiện tượng mượn từ gốc Hán cổ.',
      'Chơi chữ đồng âm / gần âm giữa "cột sống" (sinh học) và "cuộc sống" (xã hội) kết hợp ẩn dụ hài hước.',
      'Lỗi sai chính tả do gõ nhầm bàn phím máy tính.'
    ],
    correctIndex: 2,
    explanation: '"Cột sống" là một sáng tạo chơi chữ đồng âm hóm hỉnh của học sinh và giới trẻ, vừa ám chỉ những áp lực của cuộc sống vừa gắn liền với chứng đau lưng mỏi cổ do ngồi học nhiều.',
    points: 20,
    unitLesson: 'Ngữ văn 11 - Bài học: Các biện pháp tu từ từ vựng và sự biến đổi nghĩa của từ trong đời sống hiện đại.',
    createdBy: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-02'
  },

  // ==========================================
  // DẠNG 2: GHÉP TỪ VỚI NGHĨA (word_matching)
  // ==========================================
  {
    id: 'cq-03',
    title: 'Ghép nối từ ngữ mạng thế hệ mới với nghĩa tương ứng',
    type: 'word_matching',
    difficulty: 'medium',
    scenario: 'Các từ ngữ dưới đây đang được học sinh THPT sử dụng rất phổ biến trong giao tiếp thường nhật.',
    question: 'Hãy ghép mỗi thuật ngữ mạng ở cột trái với đúng bản chất ngữ nghĩa của nó ở cột phải:',
    matchingPairs: [
      {
        id: 'p1',
        term: 'Check var',
        meaning: 'Đối chiếu, kiểm chứng bằng chứng xác thực lời nói'
      },
      {
        id: 'p2',
        term: 'Xịt keo',
        meaning: 'Trạng thái bất ngờ, sững sờ đến mức ngưng trệ biểu cảm'
      },
      {
        id: 'p3',
        term: 'Pressing',
        meaning: 'Dùng lý lẽ dồn dập, sắc bén để phản biện áp đảo'
      },
      {
        id: 'p4',
        term: 'Mãi mận',
        meaning: 'Ca ngợi ai đó luôn duy trì sự duyên dáng, xuất sắc'
      }
    ],
    explanation: 'Việc nắm vững nghĩa của từng từ lóng giúp học sinh hiểu được tâm lý ngôn ngữ đương đại của bạn bè, đồng thời biết cách giải mã và sử dụng đúng lúc, không bị sa đà.',
    points: 40,
    unitLesson: 'Ngữ văn 11 - Chuyên đề 2: Khảo sát vốn từ ngữ mới của thanh thiếu niên trên mạng xã hội.',
    isWeeklyChallenge: true,
    weekNumber: 8,
    createdBy: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-03'
  },
  {
    id: 'cq-04',
    title: 'Ghép cặp thuật ngữ tâm lý học đường chuyển nghĩa',
    type: 'word_matching',
    difficulty: 'hard',
    scenario: 'Nhiều thuật ngữ tâm lý và cảnh báo xã hội được giới trẻ vận dụng theo phong cách mới.',
    question: 'Hãy ghép cặp từ ngữ với lời giải thích sư phạm chuẩn xác:',
    matchingPairs: [
      {
        id: 'p5',
        term: 'Chữa lành (Healing)',
        meaning: 'Xoa dịu mệt mỏi, phục hồi năng lượng tinh thần tích cực'
      },
      {
        id: 'p6',
        term: 'Red flag',
        meaning: 'Tín hiệu cảnh báo nguy cơ độc hại hoặc hành vi bất ổn'
      },
      {
        id: 'p7',
        term: 'Quắn quéo',
        meaning: 'Cảm xúc phấn khích, bấn loạn trước sự việc dễ thương'
      },
      {
        id: 'p8',
        term: 'Cà khịa',
        meaning: 'Trêu chọc, châm biếm hóm hỉnh tạo tiếng cười'
      }
    ],
    explanation: 'Các từ ngữ này thể hiện đời sống cảm xúc phong phú của học sinh THPT thời kỳ chuyển đổi số.',
    points: 40,
    unitLesson: 'Ngữ văn 11 - Chuyên đề 2: Đời sống tâm lý và ngôn từ của giới trẻ hiện đại.',
    createdBy: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-04'
  },

  // ==========================================
  // DẠNG 3: CHỌN CÁCH DIỄN ĐẠT PHÙ HỢP TÌNH HUỐNG (context_appropriate)
  // ==========================================
  {
    id: 'cq-05',
    title: 'Giao tiếp sư phạm: Viết thư xin phép giáo viên',
    type: 'context_appropriate',
    difficulty: 'easy',
    scenario: 'Em bị sốt xuất huyết phải nghỉ học 3 ngày và cần gửi thư điện tử (email) xin phép cô giáo chủ nhiệm.',
    question: 'Lời diễn đạt nào sau đây thể hiện đúng tinh thần tôn sư trọng đạo và chuẩn mực ngôn ngữ hành chính học đường?',
    options: [
      'Chào cô, hôm nay em bị ốm xịt keo, em báo để cô check var điểm danh giúp em nhen.',
      'Cô ơi cột sống em bất ổn quá, hôm nay cho em xin phép cook khỏi trường một bữa nha cô.',
      'Kính gửi Cô giáo chủ nhiệm, em tên là Nguyễn Văn An, học sinh lớp 11A1. Em viết thư này kính xin phép Cô cho em nghỉ học 3 ngày để điều trị bệnh sốt theo chỉ định của bác sĩ.',
      'Ét ô ét cô ơi, em bị sốt cao quá không flex bài vở nổi, em off nha cô.'
    ],
    correctIndex: 2,
    explanation: 'Trong quan hệ thầy - trò và văn bản hành chính nhà trường, học sinh tuyệt đối không được dùng tiếng lóng mạng (xịt keo, cook, ét ô ét). Cần sử dụng kính ngữ: "Kính gửi", xưng tên, nêu lý do rõ ràng, lịch sự.',
    points: 20,
    unitLesson: 'Ngữ văn 11 - Phong cách ngôn ngữ hành chính và Chuẩn mực giao tiếp học đường.',
    isWeeklyChallenge: true,
    weekNumber: 8,
    createdBy: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-05'
  },
  {
    id: 'cq-06',
    title: 'Ngôn ngữ làm văn: Đưa dẫn chứng mạng vào bài nghị luận',
    type: 'context_appropriate',
    difficulty: 'hard',
    scenario: 'Đề bài môn Ngữ văn 11 yêu cầu bàn về lối sống khiêm tốn của thanh niên trước trào lưu thích khoe khoang ảo.',
    question: 'Cách viết nào sau đây vừa thể hiện tính chuẩn mực học thuật vừa bám sát thực tiễn xã hội hiện đại?',
    options: [
      'Thanh niên ngày nay ai cũng thích flex đến hơi thở cuối cùng, đứa nào không flex là bị bạn bè chê phèn.',
      'Hiện tượng phô trương thành tích trên không gian mạng – thường được giới trẻ gọi bằng thuật ngữ "flex" – là một biểu hiện tâm lý cần được nhìn nhận thấu đáo giữa ranh giới tự hào chính đáng và thói chuộng hư danh.',
      'Flex là một từ ngữ quá bậy bạ mà học sinh không bao giờ được phép nhắc đến trong bất kỳ tình huống nào.',
      'Để bài văn hay hơn, ta nên chêm xen liên tục các từ như check var, pressing, xịt keo để gây ấn tượng với giám khảo.'
    ],
    correctIndex: 1,
    explanation: 'Trong bài văn nghị luận xã hội, từ lóng được đưa vào trong ngoặc kép ("flex") như một đối tượng nghiên cứu để phân tích bản chất hiện tượng xã hội, không được dùng làm ngôn ngữ tường thuật chính.',
    points: 30,
    unitLesson: 'Ngữ văn 11 - Kỹ năng viết bài nghị luận xã hội về một hiện tượng đời sống.',
    createdBy: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-06'
  },

  // ==========================================
  // DẠNG 4: PHÂN BIỆT THÔNG TIN ĐÁNG TIN CẬY (reliable_info)
  // ==========================================
  {
    id: 'cq-07',
    title: 'Kỹ năng thẩm định tin đồn và kiểm chứng thông tin (Check var)',
    type: 'reliable_info',
    difficulty: 'medium',
    scenario: 'Trên Facebook xuất hiện một bài đăng giật gân có nội dung: "Bộ Giáo dục vừa quyết định bỏ kỳ thi tốt nghiệp THPT từ năm nay, học sinh chỉ cần gửi tin nhắn bình chọn!". Bài viết nhận được hàng nghìn lượt chia sẻ và bình luận hoang mang.',
    question: 'Hành động nào của học sinh thể hiện năng lực phân biệt thông tin đáng tin cậy theo Chuyên đề 2?',
    options: [
      'Chia sẻ ngay về trang cá nhân của mình kèm lời than thở "ét ô ét" để cảnh báo bạn bè.',
      'Bình luận chửi bới người đăng bài ngay lập tức mà không cần kiểm chứng.',
      'Không vội tin và chia sẻ; chủ động kiểm tra cổng thông tin chính thức của Bộ Giáo dục và Đào tạo (moet.gov.vn) hoặc hỏi lại thầy cô giáo để xác thực.',
      'Lấy số liệu trong bài đăng đó làm dẫn chứng chính thức cho bài tập làm văn trên lớp.'
    ],
    correctIndex: 2,
    explanation: 'Văn hóa số đòi hỏi học sinh THPT phải có "bộ lọc tư duy phản biện": luôn kiểm chứng nguồn phát ngôn, đối chiếu với cơ quan chức năng chính thống trước khi tin tưởng hoặc lan truyền thông tin.',
    points: 25,
    unitLesson: 'Ngữ văn 11 - Chuyên đề 2: Tiếp nhận thông tin và tư duy phản biện trong kỷ nguyên truyền thông số.',
    isWeeklyChallenge: true,
    weekNumber: 8,
    createdBy: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-07'
  },
  {
    id: 'cq-08',
    title: 'Nhận diện bẫy thông tin và tài khoản mạo danh',
    type: 'reliable_info',
    difficulty: 'medium',
    scenario: 'Một tài khoản Zalo có hình đại diện là Thầy Hiệu trưởng nhắn tin riêng cho em yêu cầu chuyển khoản tiền quỹ hỗ trợ học sinh khó khăn vào một tài khoản ngân hàng cá nhân lạ.',
    question: 'Dấu hiệu nào cho thấy đây là thông tin giả mạo và có nguy cơ lừa đảo?',
    options: [
      'Tin nhắn dùng lời lẽ rất gấp gáp, thúc ép chuyển tiền vào tài khoản cá nhân, không thông qua kênh thông báo chính thức của Ban Giám hiệu hay Giáo viên chủ nhiệm.',
      'Tài khoản có tên và ảnh giống hệt nên chắc chắn 100% là thầy hiệu trưởng thật.',
      'Bất kỳ tin nhắn nào có ảnh đại diện của giáo viên đều phải nghe theo ngay.',
      'Học sinh tự ý chuyển tiền rồi sau đó mới báo cho phụ huynh.'
    ],
    correctIndex: 0,
    explanation: 'Nhà trường luôn làm việc qua các văn bản và kênh thông tin chính thức. Việc thúc ép chuyển tiền cá nhân là dấu hiệu kinh điển của lừa đảo công nghệ cao mạo danh giáo viên.',
    points: 25,
    unitLesson: 'Ngữ văn 11 - An toàn thông tin và văn hóa ứng xử trên không gian mạng.',
    createdBy: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-08'
  },

  // ==========================================
  // DẠNG 5: NHẬN DIỆN NGÔN TỪ CÓ NGUY CƠ GÂY TỔN THƯƠNG (harm_recognition)
  // ==========================================
  {
    id: 'cq-09',
    title: 'Nhận diện hành vi miệt thị ngoại hình (Body shaming) trá hình',
    type: 'harm_recognition',
    difficulty: 'medium',
    scenario: 'Một bạn nữ trong lớp đăng ảnh kỷ yếu lên trang cá nhân. Một số bạn vào bình luận: "Trông bạn như con heo nái xịt keo, bớt ăn lại cho bạn bè nhờ, đùa tí làm gì căng!".',
    question: 'Hành vi ngôn ngữ trên thuộc hiện tượng tiêu cực nào trên không gian mạng?',
    options: [
      'Sự hài hước, thân mật đáng yêu giữa những người bạn học cùng trường.',
      'Hiện tượng miệt thị ngoại hình (Body shaming) và bạo lực ngôn từ (Cyberbullying) núp bóng lời nói đùa, có thể gây tổn thương tâm lý sâu sắc cho nạn nhân.',
      'Một cách diễn đạt tu từ so sánh phóng đại chuẩn mực trong văn học.',
      'Lời góp ý chân thành giúp bạn bè giữ gìn vóc dáng khỏe mạnh.'
    ],
    correctIndex: 1,
    explanation: 'Chuyên đề 2 Ngữ văn 11 nhấn mạnh: "Lấy khuyết điểm ngoại hình hay điểm yếu của người khác ra làm trò cười dưới chiêu bài "nói đùa" chính là bạo lực mạng". Lời nói đùa chỉ có giá trị khi tất cả các bên cùng cảm thấy vui vẻ.',
    points: 30,
    unitLesson: 'Ngữ văn 11 - Chuyên đề 2: Giao tiếp văn minh và phòng chống bạo lực ngôn từ trên không gian số.',
    isWeeklyChallenge: true,
    weekNumber: 8,
    createdBy: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-09'
  },
  {
    id: 'cq-10',
    title: 'Ranh giới giữa phản biện sắc bén và công kích cá nhân (Ad hominem)',
    type: 'harm_recognition',
    difficulty: 'hard',
    scenario: 'Trong buổi tranh biện của Câu lạc bộ Hùng biện THPT Long Hiệp, khi bạn Minh đưa ra luận điểm bảo vệ quan điểm của mình, đối phương liền ngắt lời: "Bạn học dốt môn Toán thì biết gì về kinh tế mà đòi pressing người khác, cook đi cho đỡ nhục!".',
    question: 'Phát ngôn của người đối biện vi phạm nguyên tắc giao tiếp văn minh nào?',
    options: [
      'Không vi phạm gì vì tranh biện là phải dùng mọi lời lẽ gay gắt để chiến thắng.',
      'Đây là kỹ thuật pressing bóng đá rất thời thượng của giới trẻ.',
      'Vi phạm nghiêm trọng lỗi ngụy biện tấn công cá nhân (Ad hominem) và sử dụng ngôn từ sỉ nhục, hạ thấp nhân phẩm đối phương thay vì tập trung phản biện vào nội dung luận điểm.',
      'Thể hiện sự thẳng thắn, mạnh mẽ cần có của một người lãnh đạo.'
    ],
    correctIndex: 2,
    explanation: 'Tranh luận văn minh là tập trung vào tính đúng/sai của luận cứ và luận chứng, tuyệt đối không lăng mạ hoàn cảnh hay năng lực cá nhân của người tranh luận. Hành vi đuổi bạn "cook đi" là thiếu tôn trọng.',
    points: 30,
    unitLesson: 'Ngữ văn 11 - Nghệ thuật tranh biện và Đạo đức giao tiếp trong xã hội hiện đại.',
    createdBy: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-10'
  }
];

export const INITIAL_LEARNING_BADGES: LearningBadge[] = [
  {
    id: 'badge_civil_speaker',
    name: 'Sứ giả Giao tiếp Văn minh',
    description: 'Hoàn thành xuất sắc thử thách nhận diện ngôn từ có nguy cơ gây tổn thương, luôn giữ gìn chuẩn mực văn hóa học đường.',
    icon: 'ShieldCheck',
    requirement: 'Đạt điểm tuyệt đối trong phần thi Nhận diện ngôn từ gây tổn thương',
    category: 'harm_recognition',
    isUnlocked: false
  },
  {
    id: 'badge_fact_checker',
    name: 'Chuyên gia Thẩm định Tin cậy',
    description: 'Thành thạo kỹ năng đối chiếu nguồn tin, không bị lung lay trước tin giả và thuyết âm mưu trên mạng.',
    icon: 'SearchCheck',
    requirement: 'Trả lời đúng 100% câu hỏi về Phân biệt thông tin đáng tin cậy',
    category: 'reliable_info',
    isUnlocked: false
  },
  {
    id: 'badge_context_master',
    name: 'Bậc thầy Thích ứng Ngữ cảnh',
    description: 'Sử dụng ngôn ngữ linh hoạt, chuẩn mực: biết phân biệt rạch ròi giữa giao tiếp bạn bè và giao tiếp sư phạm.',
    icon: 'Sparkles',
    requirement: 'Đạt từ 80% điểm trở lên ở dạng Chọn cách diễn đạt phù hợp tình huống',
    category: 'context_appropriate',
    isUnlocked: false
  },
  {
    id: 'badge_word_linker',
    name: 'Nhà Ngôn ngữ học Trẻ',
    description: 'Khám phá và giải mã thành công hệ thống từ lóng, từ mượn và cách chơi chữ của thế hệ trẻ.',
    icon: 'Layers',
    requirement: 'Ghép chính xác toàn bộ các cặp từ ngữ với nghĩa tương ứng',
    category: 'word_matching',
    isUnlocked: false
  },
  {
    id: 'badge_weekly_hero',
    name: 'Chiến binh Thử thách Tuần',
    description: 'Vượt qua bài thử thách định kỳ tuần của Trường THCS & THPT Long Hiệp.',
    icon: 'Trophy',
    requirement: 'Hoàn thành bài Thử thách Tuần với số điểm trên 70/100',
    category: 'general',
    isUnlocked: false
  }
];

export const QUESTION_TYPE_LABELS: Record<string, { label: string; color: string; desc: string }> = {
  slang_meaning: {
    label: 'Chọn đúng ý nghĩa của từ',
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800',
    desc: 'Giải mã bản chất ngữ nghĩa của từ ngữ mạng'
  },
  word_matching: {
    label: 'Ghép từ với nghĩa',
    color: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800',
    desc: 'Tương tác ghép nối cặp từ và định nghĩa tương ứng'
  },
  context_appropriate: {
    label: 'Chọn cách diễn đạt phù hợp tình huống',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
    desc: 'Ứng dụng đúng nơi, đúng lúc, đúng đối tượng'
  },
  reliable_info: {
    label: 'Phân biệt thông tin đáng tin cậy',
    color: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
    desc: 'Rèn luyện tư duy phản biện và kiểm chứng sự thật'
  },
  harm_recognition: {
    label: 'Nhận diện ngôn từ gây tổn thương',
    color: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800',
    desc: 'Bảo vệ tình bạn, phòng chống bạo lực mạng'
  }
};
