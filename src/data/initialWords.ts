/**
 * Dữ liệu ban đầu phục vụ nghiên cứu và trải nghiệm ứng dụng NETWORD
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển: Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 * 
 * LƯU Ý SƯ PHẠM: Dữ liệu này chỉ mang tính chất khảo sát ngôn ngữ học sinh trên không gian mạng,
 * KHÔNG PHẢI là từ điển chính thức của Tiếng Việt toàn dân.
 */

import { WordEntry, ChallengeQuestion } from '../types';

export const INITIAL_WORDS: WordEntry[] = [
  {
    id: 'nw-001',
    word: 'Flex',
    pronunciation: '/fleks/',
    category: 'borrowed',
    literalMeaning: 'Uốn cong, siết cơ bắp để phô trương thể lực trong thể hình (Gym).',
    netMeaning: 'Hành động khoe khoang một cách tinh tế hoặc công khai về thành tích, tài sản, bằng khen hay trải nghiệm đặc biệt nhằm gây ấn tượng với cộng đồng mạng.',
    origin: 'Bắt nguồn từ văn hóa Hip-hop Mỹ, du nhập mạnh mẽ vào mạng xã hội Việt Nam từ giữa năm 2023 qua trào lưu nhóm "Flex đến hơi thở cuối cùng".',
    dialogueExample: [
      {
        id: 'd1',
        sender: 'Minh Thư (11A1)',
        isMe: false,
        text: 'Mới nhận học bổng tỉnh xong, tối nay đãi trà sữa nhé!',
        time: '14:20'
      },
      {
        id: 'd2',
        sender: 'Quốc Bảo (11A2)',
        isMe: true,
        text: 'Ủa bạn flex mượt ghê á! Chúc mừng bạn nhen, nhất định phải khao rồi!',
        time: '14:21'
      }
    ],
    academicGuidance: 'Từ mượn tiếng Anh được chuyển dịch nghĩa theo hướng hài hước. Trong giao tiếp học sinh, có thể dùng để chúc mừng, khen ngợi bạn bè có thành tích nhưng tránh thói kiêu căng phô trương thật sự. Tuyệt đối không dùng từ này trong bài tập làm văn nghị luận.',
    schoolAppropriateness: 'acceptable_casual',
    standardScore: 3,
    tags: ['Trend MXH', 'Từ mượn', 'Khen ngợi', 'Hài hước'],
    likesCount: 142,
    viewsCount: 1250,
    status: 'approved',
    author: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-09-05'
  },
  {
    id: 'nw-002',
    word: 'Check var',
    pronunciation: '/tʃek vaːr/',
    category: 'borrowed',
    literalMeaning: 'Kiểm tra video hỗ trợ trọng tài trong bóng đá để đưa ra phán quyết chính xác.',
    netMeaning: 'Hành động điều tra, đối chiếu bằng chứng, hình ảnh chụp màn hình để xác thực một phát ngôn hoặc lời nói xem có đúng sự thật hay là "chém gió".',
    origin: 'Xuất phát từ công nghệ VAR bóng đá FIFA, được giới trẻ Việt Nam sử dụng phổ biến sau các trào lưu sao kê minh bạch và đối chất tranh cãi trên Facebook, TikTok.',
    dialogueExample: [
      {
        id: 'd3',
        sender: 'Thanh Phong',
        isMe: false,
        text: 'Hôm qua tớ tự ôn bài đến 2h sáng giải xong 10 đề Văn á!',
        time: '08:15'
      },
      {
        id: 'd4',
        sender: 'Ngọc Mai',
        isMe: true,
        text: 'Để tôi check var lịch sử tin nhắn coi ai online đến 1h45 coi clip nha!',
        time: '08:16'
      }
    ],
    academicGuidance: 'Phản ánh tư duy phản biện và nhu cầu minh bạch thông tin của học sinh thời đại số. Tuy nhiên, không nên dùng việc "check var" để soi mói đời tư tiêu cực hay bắt nạt trên mạng (cyberbullying).',
    schoolAppropriateness: 'acceptable_casual',
    standardScore: 3,
    tags: ['Trend bóng đá', 'Minh bạch', 'Đối chiếu', 'Châm biếm vui'],
    likesCount: 98,
    viewsCount: 890,
    status: 'approved',
    author: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-09-08'
  },
  {
    id: 'nw-003',
    word: 'Cột sống',
    pronunciation: '/kot sopŋ/',
    category: 'slang',
    literalMeaning: 'Bộ phận xương sống nâng đỡ cơ thể con người và động vật có xương sống.',
    netMeaning: 'Chơi chữ đồng âm biến thể của "cuộc sống", vừa ám chỉ nỗi mệt mỏi, áp lực của cuộc sống hiện đại, vừa châm biếm chứng đau lưng mỏi cổ của học sinh, giới trẻ ngồi học/dùng máy tính nhiều.',
    origin: 'Sáng tạo ngôn ngữ chơi chữ (pun) của cộng đồng mạng Việt Nam khoảng năm 2020 - 2022, xuất hiện ngập tràn trong các ảnh chế (meme) hài hước.',
    dialogueExample: [
      {
        id: 'd5',
        sender: 'Lan Anh (11A3)',
        isMe: false,
        text: 'Tuần này kiểm tra giữa kỳ 5 môn liên tục, bão não quá trời ơi!',
        time: '21:05'
      },
      {
        id: 'd6',
        sender: 'Gia Huy',
        isMe: true,
        text: 'Cột sống bất ổn thực sự, mau ráng học cho qua kỳ thi này rồi đi đá banh nghỉ ngơi.',
        time: '21:07'
      }
    ],
    academicGuidance: 'Một hiện tượng hoán dụ - chơi chữ đặc sắc thể hiện sự hóm hỉnh khi giải tỏa áp lực. Giáo viên Ngữ văn khuyến khích học sinh hiểu được cơ chế tu từ dân gian hiện đại nhưng phải viết đúng chính tả "cuộc sống" trong văn bản chính quy.',
    schoolAppropriateness: 'strictly_informal',
    standardScore: 2,
    tags: ['Chơi chữ', 'Meme', 'Áp lực học tập', 'Đồng âm'],
    likesCount: 215,
    viewsCount: 1670,
    status: 'approved',
    author: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-09-10'
  },
  {
    id: 'nw-004',
    word: 'Ét ô ét',
    pronunciation: '/ɛt o ɛt/ (S.O.S)',
    category: 'meme_trend',
    literalMeaning: 'Tín hiệu cầu cứu quốc tế khẩn cấp theo mã Morse (Save Our Souls).',
    netMeaning: 'Lời than thở hài hước hoặc kêu gọi cứu viện khi gặp phải một tình huống khó đỡ, bài tập khó, hoặc cảnh tượng trớ trêu trên mạng xã hội.',
    origin: 'Xuất phát từ video TikTok của người sáng tạo nội dung "Bà Toang" đầu năm 2022 và nhanh chóng trở thành câu cửa miệng của học sinh cả nước.',
    dialogueExample: [
      {
        id: 'd7',
        sender: 'Hoàng Long',
        isMe: false,
        text: 'Mai cô trả bài kiểm tra 15 phút phần văn học trung đại rồi mấy đứa!',
        time: '19:30'
      },
      {
        id: 'd8',
        sender: 'Bích Trâm',
        isMe: true,
        text: 'Ét ô ét cứu bồ tớ với, tớ chưa kịp thuộc bài thơ bài phú nào hết nè!',
        time: '19:32'
      }
    ],
    academicGuidance: 'Khẩu ngữ mang tính trào lưu nhất thời (vogue word). Cần nhắc nhở học sinh không nên sử dụng trong các tình huống cứu nạn có thật để tránh gây hiểu nhầm về mức độ khẩn cấp ngoài đời sống.',
    schoolAppropriateness: 'strictly_informal',
    standardScore: 2,
    tags: ['Meme TikTok', 'Than thở', 'Cầu cứu hài', 'Khẩu ngữ'],
    likesCount: 180,
    viewsCount: 1420,
    status: 'approved',
    author: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-09-12'
  },
  {
    id: 'nw-005',
    word: 'Chữa lành',
    pronunciation: '/tɕɨə laːŋ/',
    category: 'slang',
    literalMeaning: 'Làm lành vết thương thể xác hoặc phục hồi tổn thương tâm lý, tinh thần.',
    netMeaning: 'Dùng (đôi khi quá đà hoặc châm biếm) để chỉ mọi hoạt động thư giãn, đi uống trà sữa, mua sắm, du lịch hay nghỉ ngơi nhằm xoa dịu cảm giác mệt mỏi trong học tập, công việc.',
    origin: 'Du nhập từ phong trào "healing" toàn cầu, bùng nổ mạnh mẽ trong giới trẻ thành thị và học sinh THPT giai đoạn 2023 - 2025.',
    dialogueExample: [
      {
        id: 'd9',
        sender: 'Phương Uyên',
        isMe: false,
        text: 'Làm bài tập Hóa xong đuối quá, chiều nay ra quán nước mía cổng trường không?',
        time: '16:45'
      },
      {
        id: 'd10',
        sender: 'Khánh Vy',
        isMe: true,
        text: 'Ok liền, đi một ly nước mía siêu to khổng lồ để chữa lành tâm hồn!',
        time: '16:46'
      }
    ],
    academicGuidance: 'Từ ngữ mang sắc thái nhân văn tích cực ban đầu nhưng đang bị lạm phát nghĩa (lạm dụng thành từ sáo rỗng). Trong Ngữ văn 11, cần hướng dẫn học sinh phân biệt giá trị chữa lành nội tâm đích thực và trào lưu tiêu dùng hình thức.',
    schoolAppropriateness: 'acceptable_casual',
    standardScore: 4,
    tags: ['Tâm lý', 'Xu hướng', 'Thư giãn', 'Mở rộng nghĩa'],
    likesCount: 167,
    viewsCount: 1340,
    status: 'approved',
    author: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-09-15'
  },
  {
    id: 'nw-006',
    word: 'Xu cà na',
    pronunciation: '/su kaː naː/',
    category: 'slang',
    literalMeaning: 'Cà na là loại quả có vị chua chát, chát đắng nếu ăn tươi chưa chế biến.',
    netMeaning: 'Xui xẻo, gặp phải chuyện không may mắn hoặc kết quả không như ý muốn.',
    origin: 'Hiện tượng chơi chữ dân gian Nam Bộ kết hợp từ lóng giới trẻ (Xu = Xui; Cà na = vị chua chát, gợi cảm giác trắc trở). Trở nên phổ biến qua các video livestream vui nhộn.',
    dialogueExample: [
      {
        id: 'd11',
        sender: 'Tấn Lộc (Long Hiệp)',
        isMe: false,
        text: 'Sáng nay vừa dắt xe ra thì thủng lốp, đi trễ mất 5 phút!',
        time: '11:30'
      },
      {
        id: 'd12',
        sender: 'Văn Hải',
        isMe: true,
        text: 'Trời ơi đúng là xu cà na ghê! Để lát tao chở mày về cho nè.',
        time: '11:32'
      }
    ],
    academicGuidance: 'Từ ngữ đậm chất phương ngữ khẩu ngữ Nam Bộ, sinh động và giàu tính hình tượng trong sinh hoạt thường ngày. Học sinh cần ý thức đây là khẩu ngữ địa phương, không dùng trong văn bản nhà trường chính thống.',
    schoolAppropriateness: 'strictly_informal',
    standardScore: 2,
    tags: ['Khẩu ngữ Nam Bộ', 'Xui xẻo', 'Hình tượng', 'Hài hước'],
    likesCount: 134,
    viewsCount: 990,
    status: 'approved',
    author: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-09-18'
  },
  {
    id: 'nw-007',
    word: 'Pressing',
    pronunciation: '/presɪŋ/',
    category: 'borrowed',
    literalMeaning: 'Chiến thuật bóng đá gây áp lực liên tục lên đối phương ngay trên phần sân của họ.',
    netMeaning: 'Hành động dùng lý lẽ sắc bén, dồn dập hoặc lời nói áp đảo khiến đối phương trong cuộc trò chuyện/tranh luận không kịp trở tay hoặc cứng họng.',
    origin: 'Thuật ngữ thể thao bóng đá được giới trẻ chuyển hóa vào giao tiếp tranh luận trực tuyến và đối đáp bạn bè hàng ngày.',
    dialogueExample: [
      {
        id: 'd13',
        sender: 'Đức Anh',
        isMe: false,
        text: 'Tổ trưởng nói câu nào chuẩn chỉnh câu đó, thằng Hùng nín thin luôn!',
        time: '15:10'
      },
      {
        id: 'd14',
        sender: 'Tuấn Khang',
        isMe: true,
        text: 'Bà ấy pressing nguyên buổi họp lớp mà, lý lẽ vậy ai cãi lại nổi!',
        time: '15:12'
      }
    ],
    academicGuidance: 'Hiện tượng chuyển trường nghĩa (semantic shift) từ thể thao sang giao tiếp xã hội. Khi tranh luận học đường, cần tranh luận có văn hóa, tôn trọng bạn bè, tránh biến tranh luận thành công kích cá nhân.',
    schoolAppropriateness: 'acceptable_casual',
    standardScore: 3,
    tags: ['Tranh luận', 'Thuật ngữ thể thao', 'Chuyển trường nghĩa'],
    likesCount: 112,
    viewsCount: 820,
    status: 'approved',
    author: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-09-20'
  },
  {
    id: 'nw-008',
    word: 'Xịt keo',
    pronunciation: '/sit kɛw/',
    category: 'meme_trend',
    literalMeaning: 'Phun keo dán dính hoặc xịt keo tạo kiểu tóc.',
    netMeaning: 'Trạng thái bất ngờ, sững sờ, đứng hình hoặc câm nín không nói nên lời trước một hành động hay phát ngôn quá đỗi khó hiểu, kỳ quặc.',
    origin: 'Bắt nguồn từ cộng đồng mạng và giới giải trí, mô tả biểu cảm gương mặt đơ cứng như bị bôi keo dính lại.',
    dialogueExample: [
      {
        id: 'd15',
        sender: 'Bảo Trân',
        isMe: false,
        text: 'Hôm nay thầy hỏi bài cũ bạn An, bạn ấy trả lời nhầm sang tác giả khác tự tin ghê.',
        time: '17:00'
      },
      {
        id: 'd16',
        sender: 'Diệu Thảo',
        isMe: true,
        text: 'Cả lớp xịt keo luôn, không ai dám cười vì sợ cô gọi tiếp theo!',
        time: '17:02'
      }
    ],
    academicGuidance: 'Ẩn dụ hình ảnh sống động mô tả tâm trạng ngượng ngùng hoặc sững sờ. Chỉ dùng trong giao tiếp tán gẫu, không phù hợp môi trường học thuật trang trọng.',
    schoolAppropriateness: 'strictly_informal',
    standardScore: 2,
    tags: ['Đứng hình', 'Meme', 'Ẩn dụ', 'Biểu cảm'],
    likesCount: 156,
    viewsCount: 1150,
    status: 'approved',
    author: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-09-25'
  },
  {
    id: 'nw-009',
    word: 'Cook',
    pronunciation: '/kʊk/',
    category: 'borrowed',
    literalMeaning: 'Nấu ăn, nấu nướng món ăn.',
    netMeaning: '1) Biến đi, rời khỏi đây ngay (nói trại từ "cút" trong ngữ cảnh đùa vui hoặc đuổi khéo); 2) Để cho họ tự thể hiện tài năng ("let him cook" - hãy để anh ấy tỏa sáng).',
    origin: 'Văn hóa Internet phương Tây kết hợp hiện tượng đồng âm hài hước trong cách phát âm của người Việt trẻ.',
    dialogueExample: [
      {
        id: 'd17',
        sender: 'Văn Hoàng',
        isMe: false,
        text: 'Tao lỡ tay làm hỏng slide thuyết trình của nhóm rồi...',
        time: '20:00'
      },
      {
        id: 'd18',
        sender: 'Nhóm trưởng Nam',
        isMe: true,
        text: 'Trời ơi cook giùm tôi cái! Đùa thôi gửi file qua đây tao sửa lại liền cho.',
        time: '20:01'
      }
    ],
    academicGuidance: 'CẢNH BÁO SƯ PHẠM: Từ này có yếu tố nhạy cảm vì có thể gợi liên tưởng tới từ ngữ khiếm nhã. Học sinh chỉ nên dùng với bạn bè cực kỳ thân thiết để đùa giỡn, tuyệt đối không dùng với người lớn hoặc trong môi trường tập thể nhà trường.',
    schoolAppropriateness: 'caution_required',
    standardScore: 1,
    tags: ['Cảnh báo nhạy cảm', 'Từ mượn', 'Nói trại', 'Học đường'],
    likesCount: 88,
    viewsCount: 940,
    status: 'approved',
    author: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-02'
  },
  {
    id: 'nw-0010',
    word: 'Mãi mận',
    pronunciation: '/maːj mən/',
    category: 'slang',
    literalMeaning: 'Quả mận (loại trái cây quả đỏ miền Bắc hoặc quả roi miền Nam).',
    netMeaning: 'Nói trại từ "Mãi mặn mà" - dùng để ca ngợi ai đó luôn duy trì được nét duyên dáng, tài năng, xuất sắc hoặc sự hài hước tuyệt vời.',
    origin: 'Sáng tạo của Gen Z trên Facebook và TikTok qua các cụm từ ghép hài hước như "Mãi mận mãi xoài mãi ổi cóc".',
    dialogueExample: [
      {
        id: 'd19',
        sender: 'Khánh Linh',
        isMe: false,
        text: 'Hôm nay nhóm mình diễn kịch môn Ngữ văn đạt giải Nhất khối 11 rồi nè!',
        time: '11:45'
      },
      {
        id: 'd20',
        sender: 'Thanh Thảo',
        isMe: true,
        text: 'Nhóm 1 mãi mận nha! Mọi người diễn xuất sắc thật sự luôn á!',
        time: '11:46'
      }
    ],
    academicGuidance: 'Phương thức sáng tạo từ ngữ dựa trên trường từ vựng trái cây mang tính vui tươi, lạc quan. Khuyến khích sự gắn kết bạn bè nhưng cần rèn luyện vốn từ thuần Việt phong phú hơn.',
    schoolAppropriateness: 'acceptable_casual',
    standardScore: 3,
    tags: ['Khen ngợi', 'Nói trại', 'Gen Z', 'Dễ thương'],
    likesCount: 175,
    viewsCount: 1210,
    status: 'approved',
    author: 'Trầm Thanh Tuấn (GV Ngữ văn)',
    createdAt: '2024-10-10'
  }
];

export const INITIAL_CHALLENGES: ChallengeQuestion[] = [
  {
    id: 'ch-1',
    title: 'Ngữ cảnh giao tiếp: Đúng nơi - Đúng lúc',
    scenario: 'Em đang viết một bức thư điện tử (email) gửi cho cô giáo chủ nhiệm để xin phép nghỉ học do bị sốt.',
    category: 'context_awareness',
    question: 'Cách diễn đạt nào sau đây là CHUẨN MỰC và phù hợp với chuẩn mực giao tiếp học đường?',
    options: [
      'Em chào cô ạ, hôm nay em bị sốt ét ô ét nên xin phép cô cho em tạm cook khỏi tiết sinh hoạt.',
      'Kính gửi cô giáo chủ nhiệm, em viết thư này xin phép cô cho em nghỉ học buổi sáng nay do bị ốm.',
      'Cô ơi, cột sống em hôm nay bất ổn quá, em xin bật mode nghỉ học một buổi nhen cô.',
      'Chào cô, hôm nay em bị ốm xịt keo, em báo để cô check var điểm danh giúp em.'
    ],
    correctIndex: 1,
    explanation: 'Trong văn bản hành chính học đường gửi thầy cô giáo, học sinh cần giữ thái độ lễ phép, trang trọng, sử dụng tiếng Việt chuẩn mực, tuyệt đối không chêm xen tiếng lóng mạng xã hội.',
    points: 20,
    unitLesson: 'Ngữ văn 11 - Chuyên đề 2: Ngôn ngữ trong đời sống hiện đại & Phong cách ngôn ngữ hành chính.'
  },
  {
    id: 'ch-2',
    title: 'Bản chất ngôn ngữ: Nhận diện hiện tượng Chuyển mã (Code-switching)',
    scenario: 'Trong câu nói: "Hôm qua bạn ấy flex giải Nhì học sinh giỏi Văn làm cả lớp trầm trồ."',
    category: 'slang_meaning',
    question: 'Từ "flex" trong câu trên đại diện cho hiện tượng ngôn ngữ nào được nghiên cứu trong Chuyên đề 2?',
    options: [
      'Hiện tượng dùng từ thuần Việt cổ bị mai một',
      'Hiện tượng mượn từ tiếng Anh và chuyển hóa nghĩa theo văn hóa mạng của giới trẻ',
      'Hiện tượng phương ngữ Nam Bộ truyền thống',
      'Hiện tượng lỗi chính tả ngữ âm vùng miền'
    ],
    correctIndex: 1,
    explanation: '"Flex" là từ tiếng Anh được giới trẻ mượn và mở rộng ngữ nghĩa trong không gian mạng để chỉ hành vi khoe thành tích, thuộc hiện tượng từ mượn và tiếp xúc ngôn ngữ thời đại hội nhập.',
    points: 20,
    unitLesson: 'Ngữ văn 11 - Chuyên đề 2: Hiện tượng tiếp xúc ngôn ngữ và từ ngữ mới trong xã hội đương đại.'
  },
  {
    id: 'ch-3',
    title: 'Giữ gìn sự trong sáng của Tiếng Việt',
    scenario: 'Học sinh viết bài văn nghị luận xã hội về đức tính khiêm tốn của người thanh niên hiện đại.',
    category: 'linguistic_purity',
    question: 'Hành động nào sau đây thể hiện đúng tinh thần giữ gìn sự trong sáng của Tiếng Việt?',
    options: [
      'Tận dụng thật nhiều từ lóng như "check var", "xịt keo", "pressing" vào bài văn để thể hiện sự hợp thời.',
      'Sử dụng ngôn ngữ trong sáng, giàu sắc thái biểu cảm, có thể đưa tiếng lóng vào phần dẫn chứng để phân tích hiện tượng nhưng kèm nhận định phản biện khách quan.',
      'Viết toàn bộ bài văn bằng chữ viết tắt teencode để tiết kiệm thời gian làm bài thi.',
      'Nghiêm cấm học sinh tìm hiểu về bất kỳ từ lóng nào trên không gian mạng.'
    ],
    correctIndex: 1,
    explanation: 'Giữ gìn sự trong sáng của Tiếng Việt không có nghĩa là phủ nhận sự tồn tại của ngôn ngữ mạng, mà là biết phân tích, phê phán và đặt đúng chỗ: trong bài văn nghị luận chỉ nêu như ví dụ dẫn chứng để khảo sát.',
    points: 20,
    unitLesson: 'Ngữ văn 11 - Bài học: Giữ gìn sự trong sáng của Tiếng Việt trong thời đại số.'
  },
  {
    id: 'ch-4',
    title: 'Chơi chữ và Hoán dụ trong từ lóng',
    scenario: 'Nhiều bạn học sinh hiện nay thường nói đùa cụm từ: "Cột sống này mệt mỏi quá".',
    category: 'slang_meaning',
    question: 'Cụm từ "cột sống" ở đây được hình thành dựa trên cơ chế nghệ thuật ngôn từ nào?',
    options: [
      'Nói lái (ví dụ: mộng mơ - mở mông)',
      'Chơi chữ đồng âm / gần âm giữa "cột sống" (sinh học) và "cuộc sống" (xã hội) kết hợp ẩn dụ hài hước',
      'Từ tượng thanh mô phỏng tiếng kêu',
      'Dịch nguyên xi thành ngữ tiếng Pháp'
    ],
    correctIndex: 1,
    explanation: 'Hiện tượng này dựa trên sự tương đồng về ngữ âm giữa "cột sống" và "cuộc sống", tạo ra hiệu quả gây cười và cảm giác giải tỏa căng thẳng trong đời sống học đường.',
    points: 20,
    unitLesson: 'Ngữ văn 11 - Các biện pháp tu từ từ vựng và sự biến đổi nghĩa của từ.'
  }
];

export const CATEGORY_LABELS: Record<string, { label: string; color: string; desc: string }> = {
  slang: {
    label: 'Tiếng lóng Gen Z',
    color: 'bg-purple-100 text-purple-700 border-purple-200',
    desc: 'Từ ngữ mang tính ước lệ trong nhóm thanh thiếu niên'
  },
  teencode: {
    label: 'Viết tắt & Teencode',
    color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    desc: 'Ký hiệu, chữ viết tắt sinh động trên không gian số'
  },
  meme_trend: {
    label: 'Xu hướng & Meme MXH',
    color: 'bg-pink-100 text-pink-700 border-pink-200',
    desc: 'Bắt nguồn từ trào lưu TikTok, Facebook, YouTube'
  },
  borrowed: {
    label: 'Từ mượn & Chuyển mã',
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    desc: 'Vay mượn tiếng Anh được tái cấu trúc ngữ nghĩa'
  },
  game_stream: {
    label: 'Thuật ngữ Game & Stream',
    color: 'bg-amber-100 text-amber-700 border-amber-200',
    desc: 'Xuất xứ từ cộng đồng game thủ và các streamer'
  },
  school: {
    label: 'Lóng học đường Long Hiệp',
    color: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    desc: 'Gắn liền với sinh hoạt lớp học THPT và bạn bè'
  }
};

export const APPROPRIATENESS_LABELS: Record<string, { label: string; color: string; badge: string }> = {
  acceptable_casual: {
    label: 'Phù hợp tán gẫu bè bạn',
    color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    badge: 'Chấp nhận vui vẻ ngoài giờ'
  },
  strictly_informal: {
    label: 'Chỉ dùng trên mạng xã hội',
    color: 'text-amber-700 bg-amber-50 border-amber-200',
    badge: 'Không trang trọng'
  },
  caution_required: {
    label: 'Cần cẩn trọng khi dùng',
    color: 'text-orange-700 bg-orange-50 border-orange-200',
    badge: 'Dễ gây hiểu lầm / phản cảm'
  },
  forbidden_in_formal: {
    label: 'Cấm dùng trong thi cử & văn bản',
    color: 'text-rose-700 bg-rose-50 border-rose-200',
    badge: 'Tuyệt đối cấm trong bài thi'
  }
};
