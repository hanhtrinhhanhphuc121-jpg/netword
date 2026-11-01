/**
 * NETWORD - Danh mục 300 mục từ chính thức từ Chuyên đề 2 Ngữ văn 11
 * Trường THCS và THPT Long Hiệp - Huyện Trà Cú, Trà Vinh
 * Giáo viên hướng dẫn và thẩm định: Thầy Trầm Thanh Tuấn
 * Trích xuất từ tài liệu chuẩn: Tu_dien_300_tu_ngu_gioi_tre_NETWORD.pdf
 * Đầy đủ 300 mã mục từ NW-0001 -> NW-0300 qua 12 Nhóm chủ đề (25 từ / nhóm).
 */

import type { WordEntry } from '../types';

export const NETWORD_TOPIC_THEMES = [
  "Cảm xúc và tâm trạng",
  "Đánh giá và thái độ",
  "Tình yêu và quan hệ",
  "Bản sắc và lối sống",
  "Học tập và công việc",
  "Tương tác mạng xã hội",
  "Giải trí, game và fandom",
  "Tiêu dùng và phong cách",
  "Sức khỏe tinh thần và đời sống",
  "Meme và hài hước",
  "Biến thể chữ viết và viết tắt",
  "Xung đột và chuẩn mực mạng"
] as const;

export const NETWORD_300_ENTRIES: WordEntry[] = [
  {
    "id": "nw-0001",
    "officialCode": "NW-0001",
    "stt": 1,
    "word": "Chill",
    "pronunciation": "/tʃɪl/",
    "category": "borrowed",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Cảm giác ớn lạnh, thời tiết se lạnh.",
    "netMeaning": "Thư giãn, có cảm giác nhẹ nhàng.",
    "origin": "Văn hóa âm nhạc Lo-fi Hip-hop và khẩu ngữ tiếng Anh thanh thiếu niên.",
    "dialogueExample": [
      {
        "id": "d-NW-0001-1",
        "sender": "Thạch Minh An (11A1)",
        "isMe": false,
        "text": "Cuối tuần này mình muốn chill ở nhà.",
        "time": "14:10"
      },
      {
        "id": "d-NW-0001-2",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Chill\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:12"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 25,
    "viewsCount": 150,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0002",
    "officialCode": "NW-0002",
    "stt": 2,
    "word": "Suy",
    "pronunciation": "/sui/",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Suy giảm, suy sụp, suy kiệt.",
    "netMeaning": "Buồn và suy nghĩ nhiều, nhất là về chuyện tình cảm.",
    "origin": "Rút gọn từ suy tư/suy sụp, gắn với các bài hát Indie lofi giàu chất thơ buồn của giới trẻ.",
    "dialogueExample": [
      {
        "id": "d-NW-0002-1",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": false,
        "text": "Nghe bài đó là mình suy ngay.",
        "time": "15:11"
      },
      {
        "id": "d-NW-0002-2",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Suy\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:13"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Từ / thuật ngữ"
    ],
    "likesCount": 42,
    "viewsCount": 197,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0003",
    "officialCode": "NW-0003",
    "stt": 3,
    "word": "Suy ngang",
    "category": "borrowed",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 3 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Bất chợt cảm thấy buồn hoặc trầm tư.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0003-1",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": false,
        "text": "Lướt ảnh cũ tự nhiên suy ngang.",
        "time": "16:12"
      },
      {
        "id": "d-NW-0003-2",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Suy ngang\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:14"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 59,
    "viewsCount": 244,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0004",
    "officialCode": "NW-0004",
    "stt": 4,
    "word": "Mood",
    "pronunciation": "/muːd/",
    "category": "borrowed",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Tâm trạng, sắc thái tâm lý trong từ điển tiếng Anh.",
    "netMeaning": "Tâm trạng tại một thời điểm.",
    "origin": "Từ vựng tiếng Anh mượn nguyên dạng vào tiếng Việt của giới trẻ.",
    "dialogueExample": [
      {
        "id": "d-NW-0004-1",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": false,
        "text": "Mood hôm nay của mình khá tốt.",
        "time": "17:13"
      },
      {
        "id": "d-NW-0004-2",
        "sender": "Nguyễn Phi Hùng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mood\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:15"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 76,
    "viewsCount": 291,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0005",
    "officialCode": "NW-0005",
    "stt": 5,
    "word": "Vibe",
    "pronunciation": "/vaɪb/",
    "category": "borrowed",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Sự rung động, dao động năng lượng (rút gọn từ Vibration).",
    "netMeaning": "Cảm giác hoặc bầu không khí mà người hay sự vật tạo ra.",
    "origin": "Văn hóa nghệ thuật phương Tây lan tỏa qua các cộng đồng thưởng thức âm nhạc và nhiếp ảnh.",
    "dialogueExample": [
      {
        "id": "d-NW-0005-1",
        "sender": "Thạch Minh Dàn",
        "isMe": false,
        "text": "Quán này có vibe rất dễ chịu.",
        "time": "18:14"
      },
      {
        "id": "d-NW-0005-2",
        "sender": "Kim Nhật Huy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Vibe\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:16"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 93,
    "viewsCount": 338,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0006",
    "officialCode": "NW-0006",
    "stt": 6,
    "word": "Overthinking",
    "category": "borrowed",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 6 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Suy nghĩ quá nhiều đến mức lo lắng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0006-1",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": false,
        "text": "Đừng overthinking về một tin nhắn nhé.",
        "time": "19:15"
      },
      {
        "id": "d-NW-0006-2",
        "sender": "Thạch Thị Ka",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Overthinking\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:17"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 110,
    "viewsCount": 385,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0007",
    "officialCode": "NW-0007",
    "stt": 7,
    "word": "Stress",
    "category": "borrowed",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 7 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Trạng thái căng thẳng vì áp lực.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0007-1",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": false,
        "text": "Tuần kiểm tra khiến cả nhóm stress.",
        "time": "20:16"
      },
      {
        "id": "d-NW-0007-2",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Stress\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:18"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 127,
    "viewsCount": 432,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0008",
    "officialCode": "NW-0008",
    "stt": 8,
    "word": "Healing",
    "pronunciation": "/ˈhiːlɪŋ/",
    "category": "borrowed",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Làm lành vết thương, phục hồi sức khỏe thể chất hoặc tâm lý.",
    "netMeaning": "Hoạt động nhằm phục hồi cảm xúc hoặc tìm cân bằng.",
    "origin": "Phong trào chăm sóc sức khỏe tinh thần toàn cầu bùng nổ mạnh mẽ trên mạng xã hội Việt Nam từ 2023.",
    "dialogueExample": [
      {
        "id": "d-NW-0008-1",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": false,
        "text": "Mình đi dạo một mình để healing.",
        "time": "21:17"
      },
      {
        "id": "d-NW-0008-2",
        "sender": "Thạch Thiên Lâm",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Healing\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:19"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 144,
    "viewsCount": 479,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0009",
    "officialCode": "NW-0009",
    "stt": 9,
    "word": "Chữa lành",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 9 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tìm lại cảm giác bình yên sau tổn thương.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0009-1",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": false,
        "text": "Chuyến đi này giúp mình chữa lành.",
        "time": "14:18"
      },
      {
        "id": "d-NW-0009-2",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Chữa lành\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:20"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 161,
    "viewsCount": 526,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0010",
    "officialCode": "NW-0010",
    "stt": 10,
    "word": "Bất ổn",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 10 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Khác thường, khó đoán, đôi khi nói đùa.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0010-1",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": false,
        "text": "Mấy pha xử lý này thật bất ổn.",
        "time": "15:19"
      },
      {
        "id": "d-NW-0010-2",
        "sender": "Kiên Văn Lợi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Bất ổn\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:21"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 178,
    "viewsCount": 573,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0011",
    "officialCode": "NW-0011",
    "stt": 11,
    "word": "Xỉu",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 11 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Quá bất ngờ, thích thú hoặc kiệt sức theo lối phóng đại.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0011-1",
        "sender": "Nguyễn Phi Hùng",
        "isMe": false,
        "text": "Thấy ảnh mới của bạn mà xỉu.",
        "time": "16:20"
      },
      {
        "id": "d-NW-0011-2",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Xỉu\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:22"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Từ / thuật ngữ"
    ],
    "likesCount": 195,
    "viewsCount": 620,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0012",
    "officialCode": "NW-0012",
    "stt": 12,
    "word": "Xỉu up xỉu down",
    "pronunciation": "/siw ʌp siw daʊn/",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Ngất lên ngất xuống vì bất ngờ.",
    "netMeaning": "Phản ứng cực mạnh vì bất ngờ hoặc xúc động.",
    "origin": "Chuyển mã kết hợp tiếng Việt (xỉu) và hai trạng từ phương hướng tiếng Anh (up - down) nhịp nhàng.",
    "dialogueExample": [
      {
        "id": "d-NW-0012-1",
        "sender": "Kim Nhật Huy",
        "isMe": false,
        "text": "Đọc kết truyện xỉu up xỉu down.",
        "time": "17:21"
      },
      {
        "id": "d-NW-0012-2",
        "sender": "Kim Chăm Nanl",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Xỉu up xỉu down\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:23"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 32,
    "viewsCount": 667,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0013",
    "officialCode": "NW-0013",
    "stt": 13,
    "word": "Cạn lời",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 13 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Không biết nói gì vì quá bất ngờ hoặc ngán ngẩm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0013-1",
        "sender": "Thạch Thị Ka",
        "isMe": false,
        "text": "Nghe lời giải thích mà cạn lời.",
        "time": "18:22"
      },
      {
        "id": "d-NW-0013-2",
        "sender": "Thạch Thị Nga",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cạn lời\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:24"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 49,
    "viewsCount": 714,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0014",
    "officialCode": "NW-0014",
    "stt": 14,
    "word": "Cạn phước",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 14 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Than thở về vận rủi hoặc tình huống oái oăm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0014-1",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": false,
        "text": "Mưa đúng lúc đi chơi, cạn phước.",
        "time": "19:23"
      },
      {
        "id": "d-NW-0014-2",
        "sender": "Thạch Thị Nhi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cạn phước\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:25"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 66,
    "viewsCount": 761,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0015",
    "officialCode": "NW-0015",
    "stt": 15,
    "word": "Ét o ét",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 15 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách đọc SOS để kêu cứu, thường dùng hài hước.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0015-1",
        "sender": "Thạch Thiên Lâm",
        "isMe": false,
        "text": "Bài tập khó quá, ét o ét!",
        "time": "20:24"
      },
      {
        "id": "d-NW-0015-2",
        "sender": "Kim Thị Tú Như",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Ét o ét\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:26"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 83,
    "viewsCount": 808,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0016",
    "officialCode": "NW-0016",
    "stt": 16,
    "word": "Tụt mood",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 16 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đột nhiên mất hứng hoặc buồn đi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0016-1",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": false,
        "text": "Tin đó làm cả nhóm tụt mood.",
        "time": "21:25"
      },
      {
        "id": "d-NW-0016-2",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Tụt mood\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:27"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 100,
    "viewsCount": 855,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0017",
    "officialCode": "NW-0017",
    "stt": 17,
    "word": "Lên mood",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 17 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Trở nên hào hứng, có cảm hứng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0017-1",
        "sender": "Kiên Văn Lợi",
        "isMe": false,
        "text": "Bật nhạc lên là mình lên mood.",
        "time": "14:26"
      },
      {
        "id": "d-NW-0017-2",
        "sender": "Kim Minh Phương",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Lên mood\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:28"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 117,
    "viewsCount": 902,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0018",
    "officialCode": "NW-0018",
    "stt": 18,
    "word": "Hết pin xã hội",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 18 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Mệt vì tương tác, muốn ở một mình.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0018-1",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": false,
        "text": "Đi sự kiện cả ngày, tôi hết pin xã hội.",
        "time": "15:27"
      },
      {
        "id": "d-NW-0018-2",
        "sender": "Thạch Minh Quý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hết pin xã hội\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:29"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 134,
    "viewsCount": 949,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0019",
    "officialCode": "NW-0019",
    "stt": 19,
    "word": "Hướng nội tạm thời",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 19 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nói đùa về việc muốn tránh giao tiếp.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0019-1",
        "sender": "Kim Chăm Nanl",
        "isMe": false,
        "text": "Sau màn hát sai, tôi hướng nội tạm thời.",
        "time": "16:28"
      },
      {
        "id": "d-NW-0019-2",
        "sender": "Thạch Thị Thia Ri",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hướng nội tạm thời\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:30"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 151,
    "viewsCount": 996,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0020",
    "officialCode": "NW-0020",
    "stt": 20,
    "word": "Rén",
    "pronunciation": "/rɛn/",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Co cụm lại vì sợ hãi hoặc giá rét.",
    "netMeaning": "Sợ hoặc chùn bước trước điều gì.",
    "origin": "Khẩu ngữ dân gian phương Nam quen thuộc trong sinh hoạt thường nhật.",
    "dialogueExample": [
      {
        "id": "d-NW-0020-1",
        "sender": "Thạch Thị Nga",
        "isMe": false,
        "text": "Nhìn đề thi dài quá nên hơi rén.",
        "time": "17:29"
      },
      {
        "id": "d-NW-0020-2",
        "sender": "Thạch Ngọc Thanh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Rén\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:31"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Từ / thuật ngữ"
    ],
    "likesCount": 168,
    "viewsCount": 1043,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0021",
    "officialCode": "NW-0021",
    "stt": 21,
    "word": "Quắn quéo",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 21 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Bối rối, phấn khích vì quá thích.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0021-1",
        "sender": "Thạch Thị Nhi",
        "isMe": false,
        "text": "Thấy hai nhân vật gặp lại mà quắn quéo.",
        "time": "18:30"
      },
      {
        "id": "d-NW-0021-2",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Quắn quéo\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:32"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 185,
    "viewsCount": 1090,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0022",
    "officialCode": "NW-0022",
    "stt": 22,
    "word": "Đứng hình",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 22 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Sững lại vì sốc hoặc bất ngờ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0022-1",
        "sender": "Kim Thị Tú Như",
        "isMe": false,
        "text": "Nghe tin đó mình đứng hình.",
        "time": "19:31"
      },
      {
        "id": "d-NW-0022-2",
        "sender": "Thạch Thị Anh Thư",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Đứng hình\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:33"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 202,
    "viewsCount": 1137,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0023",
    "officialCode": "NW-0023",
    "stt": 23,
    "word": "Khóc thét",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 23 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Phản ứng mạnh trước điều khó chịu hay bất ngờ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0023-1",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": false,
        "text": "Nhìn lịch deadline mà khóc thét.",
        "time": "20:32"
      },
      {
        "id": "d-NW-0023-2",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Khóc thét\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:34"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 39,
    "viewsCount": 1184,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0024",
    "officialCode": "NW-0024",
    "stt": 24,
    "word": "Vui xỉu",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 24 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Rất vui, phấn khích.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0024-1",
        "sender": "Kim Minh Phương",
        "isMe": false,
        "text": "Được nghỉ thêm một ngày, vui xỉu!",
        "time": "21:33"
      },
      {
        "id": "d-NW-0024-2",
        "sender": "Thạch Khánh Vinh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Vui xỉu\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:35"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 56,
    "viewsCount": 1231,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0025",
    "officialCode": "NW-0025",
    "stt": 25,
    "word": "Muốn độn thổ",
    "category": "slang",
    "topicTheme": "Cảm xúc và tâm trạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 25 thuộc nhóm chủ đề: \"Cảm xúc và tâm trạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Xấu hổ đến mức muốn biến mất.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0025-1",
        "sender": "Thạch Minh Quý",
        "isMe": false,
        "text": "Đọc nhầm tên người ta, muốn độn thổ.",
        "time": "14:34"
      },
      {
        "id": "d-NW-0025-2",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Muốn độn thổ\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:36"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Cảm xúc và tâm trạng",
      "Cụm từ"
    ],
    "likesCount": 73,
    "viewsCount": 1278,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0026",
    "officialCode": "NW-0026",
    "stt": 26,
    "word": "Slay",
    "pronunciation": "/sleɪ/",
    "category": "borrowed",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Hạ gục, tiêu diệt trong tiếng Anh cổ.",
    "netMeaning": "Xuất sắc, nổi bật hoặc đầy tự tin.",
    "origin": "Văn hóa biểu diễn và thời trang quốc tế, lan tỏa mạnh mẽ trên TikTok và Instagram trong cộng đồng học sinh THPT.",
    "dialogueExample": [
      {
        "id": "d-NW-0026-1",
        "sender": "Thạch Thị Thia Ri",
        "isMe": false,
        "text": "Bộ trang phục hôm nay slay thật.",
        "time": "15:35"
      },
      {
        "id": "d-NW-0026-2",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Slay\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:37"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 90,
    "viewsCount": 1325,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0027",
    "officialCode": "NW-0027",
    "stt": 27,
    "word": "Đỉnh nóc",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 27 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cực kỳ xuất sắc, ấn tượng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0027-1",
        "sender": "Thạch Ngọc Thanh",
        "isMe": false,
        "text": "Phần biểu diễn đỉnh nóc luôn.",
        "time": "16:36"
      },
      {
        "id": "d-NW-0027-2",
        "sender": "Kim Thị Như Ý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Đỉnh nóc\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:38"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 107,
    "viewsCount": 172,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0028",
    "officialCode": "NW-0028",
    "stt": 28,
    "word": "Mãi đỉnh",
    "pronunciation": "/maːj dɪŋ/",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mãi mãi ở vị trí đỉnh cao nhất.",
    "netMeaning": "Lời khen cho điều được xem là luôn xuất sắc.",
    "origin": "Khẩu ngữ khen ngợi bùng nổ trong giới trẻ từ năm 2021 và trở thành câu cửa miệng của học sinh.",
    "dialogueExample": [
      {
        "id": "d-NW-0028-1",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": false,
        "text": "Giọng ca ấy mãi đỉnh.",
        "time": "17:37"
      },
      {
        "id": "d-NW-0028-2",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mãi đỉnh\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:39"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 124,
    "viewsCount": 219,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0029",
    "officialCode": "NW-0029",
    "stt": 29,
    "word": "Xịn sò",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 29 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đẹp, tốt hoặc có chất lượng cao.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0029-1",
        "sender": "Thạch Thị Anh Thư",
        "isMe": false,
        "text": "Chiếc máy ảnh này xịn sò.",
        "time": "18:38"
      },
      {
        "id": "d-NW-0029-2",
        "sender": "Thạch Minh An (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Xịn sò\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:40"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 141,
    "viewsCount": 266,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0030",
    "officialCode": "NW-0030",
    "stt": 30,
    "word": "Cuốn",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 30 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Hấp dẫn đến mức muốn tiếp tục theo dõi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0030-1",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": false,
        "text": "Video mở đầu rất cuốn.",
        "time": "19:39"
      },
      {
        "id": "d-NW-0030-2",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cuốn\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:41"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Từ / thuật ngữ"
    ],
    "likesCount": 158,
    "viewsCount": 313,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0031",
    "officialCode": "NW-0031",
    "stt": 31,
    "word": "Keo",
    "category": "borrowed",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 31 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lời khen về vẻ đẹp hoặc sức hút trong một số cộng đồng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0031-1",
        "sender": "Thạch Khánh Vinh",
        "isMe": false,
        "text": "Kiểu tóc mới nhìn keo quá.",
        "time": "20:40"
      },
      {
        "id": "d-NW-0031-2",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Keo\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:42"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 175,
    "viewsCount": 360,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0032",
    "officialCode": "NW-0032",
    "stt": 32,
    "word": "Cringe",
    "pronunciation": "/krɪndʒ/",
    "category": "borrowed",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Co rúm người lại vì sợ hãi hoặc lạnh cóng.",
    "netMeaning": "Gây ngượng, gượng gạo hoặc khó xem.",
    "origin": "Meme văn hóa Internet phương Tây, du nhập vào các trang cộng đồng học sinh Việt Nam để bình luận các tình huống ",
    "dialogueExample": [
      {
        "id": "d-NW-0032-1",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": false,
        "text": "Câu thoại đó hơi cringe.",
        "time": "21:41"
      },
      {
        "id": "d-NW-0032-2",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cringe\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:43"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 192,
    "viewsCount": 407,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0033",
    "officialCode": "NW-0033",
    "stt": 33,
    "word": "Phèn",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 33 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Bị xem là kém tinh tế hoặc lỗi thời.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0033-1",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": false,
        "text": "Thiết kế cũ nhìn hơi phèn.",
        "time": "14:42"
      },
      {
        "id": "d-NW-0033-2",
        "sender": "Thạch Minh Dàn",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Phèn\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:44"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Từ / thuật ngữ"
    ],
    "likesCount": 29,
    "viewsCount": 454,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0034",
    "officialCode": "NW-0034",
    "stt": 34,
    "word": "Ô dề",
    "pronunciation": "/oʊ zeː/",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Từ lóng tự tạo không có nghĩa trong từ điển chuẩn.",
    "netMeaning": "Lố hoặc quá mức cần thiết.",
    "origin": "Trào lưu video TikTok một phụ nữ trang điểm đậm với câu nói: ",
    "dialogueExample": [
      {
        "id": "d-NW-0034-1",
        "sender": "Kim Thị Như Ý",
        "isMe": false,
        "text": "Cách diễn xuất ấy hơi ô dề.",
        "time": "15:43"
      },
      {
        "id": "d-NW-0034-2",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Ô dề\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:45"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 46,
    "viewsCount": 501,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0035",
    "officialCode": "NW-0035",
    "stt": 35,
    "word": "Báo",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 35 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Gây rắc rối, hậu quả cho người khác.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0035-1",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": false,
        "text": "Đừng báo cả nhóm vào phút cuối.",
        "time": "16:44"
      },
      {
        "id": "d-NW-0035-2",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Báo\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:46"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Từ / thuật ngữ"
    ],
    "likesCount": 63,
    "viewsCount": 548,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0036",
    "officialCode": "NW-0036",
    "stt": 36,
    "word": "Báo thủ",
    "pronunciation": "/baːw tʰu/",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Người chuyên săn bắt hoặc báo cáo.",
    "netMeaning": "Người hay gây rắc rối cho tập thể.",
    "origin": "Chơi chữ từ ",
    "dialogueExample": [
      {
        "id": "d-NW-0036-1",
        "sender": "Thạch Minh An (11A1)",
        "isMe": false,
        "text": "Đội có một báo thủ chuyên đi muộn.",
        "time": "17:45"
      },
      {
        "id": "d-NW-0036-2",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Báo thủ\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:47"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 80,
    "viewsCount": 595,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0037",
    "officialCode": "NW-0037",
    "stt": 37,
    "word": "Out trình",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 37 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Vượt trội rõ rệt về trình độ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0037-1",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": false,
        "text": "Bạn ấy out trình ở vòng chung kết.",
        "time": "18:46"
      },
      {
        "id": "d-NW-0037-2",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Out trình\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:48"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 97,
    "viewsCount": 642,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0038",
    "officialCode": "NW-0038",
    "stt": 38,
    "word": "Gắt",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 38 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Mạnh, quyết liệt hoặc ấn tượng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0038-1",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": false,
        "text": "Màn đáp trả này gắt thật.",
        "time": "19:47"
      },
      {
        "id": "d-NW-0038-2",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Gắt\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:49"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Từ / thuật ngữ"
    ],
    "likesCount": 114,
    "viewsCount": 689,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0039",
    "officialCode": "NW-0039",
    "stt": 39,
    "word": "Đỉnh chóp",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 39 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Rất tốt, đặc biệt xuất sắc.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0039-1",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": false,
        "text": "Món mới của quán đỉnh chóp.",
        "time": "20:48"
      },
      {
        "id": "d-NW-0039-2",
        "sender": "Nguyễn Phi Hùng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Đỉnh chóp\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:50"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 131,
    "viewsCount": 736,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0040",
    "officialCode": "NW-0040",
    "stt": 40,
    "word": "Đỉnh của chóp",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 40 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách nhấn mạnh mức độ cực kỳ xuất sắc.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0040-1",
        "sender": "Thạch Minh Dàn",
        "isMe": false,
        "text": "Pha cứu bóng đúng là đỉnh của chóp.",
        "time": "21:49"
      },
      {
        "id": "d-NW-0040-2",
        "sender": "Kim Nhật Huy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Đỉnh của chóp\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:51"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 148,
    "viewsCount": 783,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0041",
    "officialCode": "NW-0041",
    "stt": 41,
    "word": "Đáng đồng tiền bát gạo",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Mẫu câu / cụm cố định",
    "literalMeaning": "Mục từ số 41 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đáng giá so với chi phí bỏ ra.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0041-1",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": false,
        "text": "Vé xem buổi diễn thật đáng đồng tiền bát gạo.",
        "time": "14:50"
      },
      {
        "id": "d-NW-0041-2",
        "sender": "Thạch Thị Ka",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Đáng đồng tiền bát gạo\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:52"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Mẫu câu / cụm cố định"
    ],
    "likesCount": 165,
    "viewsCount": 830,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0042",
    "officialCode": "NW-0042",
    "stt": 42,
    "word": "Chất chơi",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 42 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Có phong cách táo bạo, ấn tượng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0042-1",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": false,
        "text": "Cách phối màu này chất chơi.",
        "time": "15:51"
      },
      {
        "id": "d-NW-0042-2",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Chất chơi\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:53"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 182,
    "viewsCount": 877,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0043",
    "officialCode": "NW-0043",
    "stt": 43,
    "word": "Lemỏn",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 43 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách viết đùa của lemon, chỉ cảm giác chua chát, ghen tị.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0043-1",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": false,
        "text": "Nhìn hai bạn phát cơm chó mà lemỏn.",
        "time": "16:52"
      },
      {
        "id": "d-NW-0043-2",
        "sender": "Thạch Thiên Lâm",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Lemỏn\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:54"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Từ / thuật ngữ"
    ],
    "likesCount": 199,
    "viewsCount": 924,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0044",
    "officialCode": "NW-0044",
    "stt": 44,
    "word": "Mlem",
    "category": "borrowed",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 44 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Biểu cảm thích thú trước đồ ăn hoặc vẻ ngoài hấp dẫn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0044-1",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": false,
        "text": "Nhìn bánh kem mà mlem.",
        "time": "17:53"
      },
      {
        "id": "d-NW-0044-2",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mlem\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:55"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 36,
    "viewsCount": 971,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0045",
    "officialCode": "NW-0045",
    "stt": 45,
    "word": "Chê nha",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 45 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách chê nhẹ nhưng có thể mang ý giễu nhại.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0045-1",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": false,
        "text": "Bài phối đồ này thì chê nha.",
        "time": "18:54"
      },
      {
        "id": "d-NW-0045-2",
        "sender": "Kiên Văn Lợi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Chê nha\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:56"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 53,
    "viewsCount": 1018,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0046",
    "officialCode": "NW-0046",
    "stt": 46,
    "word": "Hết nước chấm",
    "pronunciation": "/het nɨək cəm/",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Chấm hết giọt nước chấm cuối cùng trong bát.",
    "netMeaning": "Rất xuất sắc, không còn gì để chê.",
    "origin": "Ẩn dụ ẩm thực đặc sắc của người Việt chuyển hóa vào khẩu ngữ mạng hài hước.",
    "dialogueExample": [
      {
        "id": "d-NW-0046-1",
        "sender": "Nguyễn Phi Hùng",
        "isMe": false,
        "text": "Pha ghi bàn hết nước chấm.",
        "time": "19:10"
      },
      {
        "id": "d-NW-0046-2",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hết nước chấm\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:12"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 70,
    "viewsCount": 1065,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0047",
    "officialCode": "NW-0047",
    "stt": 47,
    "word": "Hết cứu",
    "pronunciation": "/het kɨw/",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Không còn thuốc hay phương pháp chữa trị.",
    "netMeaning": "Khó cứu vãn, thường dùng để trêu chọc.",
    "origin": "Ngữ cảnh y khoa được giới trẻ mang ra nói đùa khi rơi vào hoàn cảnh trớ trêu.",
    "dialogueExample": [
      {
        "id": "d-NW-0047-1",
        "sender": "Kim Nhật Huy",
        "isMe": false,
        "text": "Nộp nhầm bài thì hết cứu rồi.",
        "time": "20:11"
      },
      {
        "id": "d-NW-0047-2",
        "sender": "Kim Chăm Nanl",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hết cứu\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:13"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 87,
    "viewsCount": 1112,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0048",
    "officialCode": "NW-0048",
    "stt": 48,
    "word": "Không có cửa",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 48 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Không đủ khả năng so sánh hoặc cạnh tranh.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0048-1",
        "sender": "Thạch Thị Ka",
        "isMe": false,
        "text": "Đấu cờ với bạn ấy mình không có cửa.",
        "time": "21:12"
      },
      {
        "id": "d-NW-0048-2",
        "sender": "Thạch Thị Nga",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Không có cửa\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:14"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 104,
    "viewsCount": 1159,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0049",
    "officialCode": "NW-0049",
    "stt": 49,
    "word": "Quá trời quá đất",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 49 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nhấn mạnh số lượng hoặc mức độ rất lớn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0049-1",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": false,
        "text": "Bạn ấy dễ thương quá trời quá đất.",
        "time": "14:13"
      },
      {
        "id": "d-NW-0049-2",
        "sender": "Thạch Thị Nhi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Quá trời quá đất\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:15"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 121,
    "viewsCount": 1206,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0050",
    "officialCode": "NW-0050",
    "stt": 50,
    "word": "Dữ thần",
    "category": "slang",
    "topicTheme": "Đánh giá và thái độ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 50 thuộc nhóm chủ đề: \"Đánh giá và thái độ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lời cảm thán trước sự mạnh mẽ hoặc mức độ quá đà.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0050-1",
        "sender": "Thạch Thiên Lâm",
        "isMe": false,
        "text": "Hôm nay bạn làm việc dữ thần!",
        "time": "15:14"
      },
      {
        "id": "d-NW-0050-2",
        "sender": "Kim Thị Tú Như",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Dữ thần\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:16"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Đánh giá và thái độ",
      "Cụm từ"
    ],
    "likesCount": 138,
    "viewsCount": 1253,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0051",
    "officialCode": "NW-0051",
    "stt": 51,
    "word": "Crush",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 51 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Người mình có cảm tình, thích thầm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0051-1",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": false,
        "text": "Mình gặp crush ở thư viện.",
        "time": "16:15"
      },
      {
        "id": "d-NW-0051-2",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Crush\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:17"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 155,
    "viewsCount": 1300,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0052",
    "officialCode": "NW-0052",
    "stt": 52,
    "word": "Red flag",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 52 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Dấu hiệu cảnh báo trong quan hệ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0052-1",
        "sender": "Kiên Văn Lợi",
        "isMe": false,
        "text": "Hay kiểm soát người khác là red flag.",
        "time": "17:16"
      },
      {
        "id": "d-NW-0052-2",
        "sender": "Kim Minh Phương",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Red flag\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:18"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 172,
    "viewsCount": 1347,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0053",
    "officialCode": "NW-0053",
    "stt": 53,
    "word": "Green flag",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 53 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Dấu hiệu tích cực, đáng tin trong quan hệ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0053-1",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": false,
        "text": "Biết lắng nghe là một green flag.",
        "time": "18:17"
      },
      {
        "id": "d-NW-0053-2",
        "sender": "Thạch Minh Quý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Green flag\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:19"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 189,
    "viewsCount": 194,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0054",
    "officialCode": "NW-0054",
    "stt": 54,
    "word": "Beige flag",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 54 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đặc điểm kỳ lạ nhưng không hẳn tốt hay xấu.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0054-1",
        "sender": "Kim Chăm Nanl",
        "isMe": false,
        "text": "Thói quen sắp sách theo màu là beige flag.",
        "time": "19:18"
      },
      {
        "id": "d-NW-0054-2",
        "sender": "Thạch Thị Thia Ri",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Beige flag\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:20"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 26,
    "viewsCount": 241,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0055",
    "officialCode": "NW-0055",
    "stt": 55,
    "word": "Situationship",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 55 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Quan hệ tình cảm chưa rõ tên gọi hoặc cam kết.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0055-1",
        "sender": "Thạch Thị Nga",
        "isMe": false,
        "text": "Hai người vẫn trong một situationship.",
        "time": "20:19"
      },
      {
        "id": "d-NW-0055-2",
        "sender": "Thạch Ngọc Thanh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Situationship\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:21"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 43,
    "viewsCount": 288,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0056",
    "officialCode": "NW-0056",
    "stt": 56,
    "word": "Ghosting",
    "pronunciation": "/ˈɡoʊstɪŋ/",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Hóa thành bóng ma (ghost), vô hình biến mất.",
    "netMeaning": "Bỗng dưng cắt liên lạc mà không giải thích.",
    "origin": "Thuật ngữ hẹn hò thời đại số của phương Tây, chuyển sang chỉ hành vi thiếu trách nhiệm trong trao đổi thông tin.",
    "dialogueExample": [
      {
        "id": "d-NW-0056-1",
        "sender": "Thạch Thị Nhi",
        "isMe": false,
        "text": "Sau buổi hẹn, anh ấy ghosting.",
        "time": "21:20"
      },
      {
        "id": "d-NW-0056-2",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Ghosting\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:22"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 60,
    "viewsCount": 335,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0057",
    "officialCode": "NW-0057",
    "stt": 57,
    "word": "Simp",
    "pronunciation": "/sɪmp/",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Từ lóng viết tắt / biến thể của Simpleton (người khờ khạo).",
    "netMeaning": "Quá si mê hoặc chiều chuộng một người.",
    "origin": "Cộng đồng mạng Twitter, Reddit Mỹ, du nhập mạnh vào giới trẻ Việt Nam để trêu chọc bạn bè si tình.",
    "dialogueExample": [
      {
        "id": "d-NW-0057-1",
        "sender": "Kim Thị Tú Như",
        "isMe": false,
        "text": "Cả nhóm trêu cậu ấy là simp.",
        "time": "14:21"
      },
      {
        "id": "d-NW-0057-2",
        "sender": "Thạch Thị Anh Thư",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Simp\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:23"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 77,
    "viewsCount": 382,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0058",
    "officialCode": "NW-0058",
    "stt": 58,
    "word": "Lụy",
    "category": "slang",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 58 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Quá vương vấn, khó buông bỏ tình cảm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0058-1",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": false,
        "text": "Đừng lụy một lời hứa cũ mãi.",
        "time": "15:22"
      },
      {
        "id": "d-NW-0058-2",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Lụy\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:24"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ"
    ],
    "likesCount": 94,
    "viewsCount": 429,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0059",
    "officialCode": "NW-0059",
    "stt": 59,
    "word": "Delulu",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 59 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tự tưởng tượng điều khó có thật, thường nói đùa.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0059-1",
        "sender": "Kim Minh Phương",
        "isMe": false,
        "text": "Mới được thả tim đã delulu rồi.",
        "time": "16:23"
      },
      {
        "id": "d-NW-0059-2",
        "sender": "Thạch Khánh Vinh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Delulu\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:25"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 111,
    "viewsCount": 476,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0060",
    "officialCode": "NW-0060",
    "stt": 60,
    "word": "Rizz",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 60 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Khả năng tạo sức hút khi giao tiếp, tán tỉnh.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0060-1",
        "sender": "Thạch Minh Quý",
        "isMe": false,
        "text": "Bạn ấy có rizz rất tự nhiên.",
        "time": "17:24"
      },
      {
        "id": "d-NW-0060-2",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Rizz\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:26"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 128,
    "viewsCount": 523,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0061",
    "officialCode": "NW-0061",
    "stt": 61,
    "word": "Ship",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 61 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Mong hoặc tưởng tượng hai người thành đôi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0061-1",
        "sender": "Thạch Thị Thia Ri",
        "isMe": false,
        "text": "Fan thường ship hai nhân vật này.",
        "time": "18:25"
      },
      {
        "id": "d-NW-0061-2",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Ship\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:27"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 145,
    "viewsCount": 570,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0062",
    "officialCode": "NW-0062",
    "stt": 62,
    "word": "OTP",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 62 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cặp đôi mà người hâm mộ đặc biệt yêu thích.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0062-1",
        "sender": "Thạch Ngọc Thanh",
        "isMe": false,
        "text": "Đây là OTP của mình trong phim.",
        "time": "19:26"
      },
      {
        "id": "d-NW-0062-2",
        "sender": "Kim Thị Như Ý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"OTP\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:28"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 162,
    "viewsCount": 617,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0063",
    "officialCode": "NW-0063",
    "stt": 63,
    "word": "NOTP",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 63 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cặp đôi mà người hâm mộ không thích ghép.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0063-1",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": false,
        "text": "Hai nhân vật đó là NOTP của mình.",
        "time": "20:27"
      },
      {
        "id": "d-NW-0063-2",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"NOTP\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:29"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 179,
    "viewsCount": 664,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0064",
    "officialCode": "NW-0064",
    "stt": 64,
    "word": "Skinship",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 64 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tiếp xúc cơ thể thể hiện sự thân mật.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0064-1",
        "sender": "Thạch Thị Anh Thư",
        "isMe": false,
        "text": "Cảnh skinship làm fan reo lên.",
        "time": "21:28"
      },
      {
        "id": "d-NW-0064-2",
        "sender": "Thạch Minh An (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Skinship\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:30"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 196,
    "viewsCount": 711,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0065",
    "officialCode": "NW-0065",
    "stt": 65,
    "word": "Mập mờ",
    "category": "slang",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 65 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Quan hệ có tình cảm nhưng thiếu xác định rõ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0065-1",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": false,
        "text": "Mình không muốn kéo dài mập mờ.",
        "time": "14:29"
      },
      {
        "id": "d-NW-0065-2",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mập mờ\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:31"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ"
    ],
    "likesCount": 33,
    "viewsCount": 758,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0066",
    "officialCode": "NW-0066",
    "stt": 66,
    "word": "Trà xanh",
    "category": "slang",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 66 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách gọi chê trách người bị cho là chen vào tình cảm của người khác.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0066-1",
        "sender": "Thạch Khánh Vinh",
        "isMe": false,
        "text": "Bình luận gọi nhân vật kia là trà xanh.",
        "time": "15:30"
      },
      {
        "id": "d-NW-0066-2",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Trà xanh\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:32"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ"
    ],
    "likesCount": 50,
    "viewsCount": 805,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0067",
    "officialCode": "NW-0067",
    "stt": 67,
    "word": "Cơm chó",
    "category": "slang",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 67 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cảnh thể hiện tình cảm khiến người độc thân chạnh lòng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0067-1",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": false,
        "text": "Hai bạn lại phát cơm chó rồi.",
        "time": "16:31"
      },
      {
        "id": "d-NW-0067-2",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cơm chó\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:33"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ"
    ],
    "likesCount": 67,
    "viewsCount": 852,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0068",
    "officialCode": "NW-0068",
    "stt": 68,
    "word": "Phát cơm chó",
    "category": "slang",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 68 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Công khai tình cảm trước mặt người khác.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0068-1",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": false,
        "text": "Đôi ấy phát cơm chó cả buổi.",
        "time": "17:32"
      },
      {
        "id": "d-NW-0068-2",
        "sender": "Thạch Minh Dàn",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Phát cơm chó\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:34"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ"
    ],
    "likesCount": 84,
    "viewsCount": 899,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0069",
    "officialCode": "NW-0069",
    "stt": 69,
    "word": "Đẩy thuyền",
    "category": "slang",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 69 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Ủng hộ hai người trở thành một cặp.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0069-1",
        "sender": "Kim Thị Như Ý",
        "isMe": false,
        "text": "Khán giả nhiệt tình đẩy thuyền.",
        "time": "18:33"
      },
      {
        "id": "d-NW-0069-2",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Đẩy thuyền\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:35"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ"
    ],
    "likesCount": 101,
    "viewsCount": 946,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0070",
    "officialCode": "NW-0070",
    "stt": 70,
    "word": "Thả thính",
    "category": "slang",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 70 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nói hoặc làm điều gợi ý tình cảm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0070-1",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": false,
        "text": "Bạn ấy đang thả thính ai thế?",
        "time": "19:34"
      },
      {
        "id": "d-NW-0070-2",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Thả thính\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:36"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ"
    ],
    "likesCount": 118,
    "viewsCount": 993,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0071",
    "officialCode": "NW-0071",
    "stt": 71,
    "word": "Bật đèn xanh",
    "category": "slang",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 71 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Phát tín hiệu đồng ý hoặc có thiện cảm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0071-1",
        "sender": "Thạch Minh An (11A1)",
        "isMe": false,
        "text": "Cô ấy đã bật đèn xanh rồi.",
        "time": "20:35"
      },
      {
        "id": "d-NW-0071-2",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Bật đèn xanh\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:37"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ"
    ],
    "likesCount": 135,
    "viewsCount": 1040,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0072",
    "officialCode": "NW-0072",
    "stt": 72,
    "word": "Friendzone",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 72 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tình huống chỉ được xem là bạn dù muốn yêu.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0072-1",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": false,
        "text": "Anh ấy sợ bị đưa vào friendzone.",
        "time": "21:36"
      },
      {
        "id": "d-NW-0072-2",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Friendzone\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:38"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 152,
    "viewsCount": 1087,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0073",
    "officialCode": "NW-0073",
    "stt": 73,
    "word": "Ex",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 73 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Người yêu cũ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0073-1",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": false,
        "text": "Mình tình cờ gặp ex ở quán cà phê.",
        "time": "14:37"
      },
      {
        "id": "d-NW-0073-2",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Ex\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:39"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 169,
    "viewsCount": 1134,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0074",
    "officialCode": "NW-0074",
    "stt": 74,
    "word": "Soft launch",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 74 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Hé lộ kín đáo một quan hệ tình cảm trên mạng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0074-1",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": false,
        "text": "Bạn ấy soft launch bằng ảnh hai ly nước.",
        "time": "15:38"
      },
      {
        "id": "d-NW-0074-2",
        "sender": "Nguyễn Phi Hùng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Soft launch\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:40"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 186,
    "viewsCount": 1181,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0075",
    "officialCode": "NW-0075",
    "stt": 75,
    "word": "Hard launch",
    "category": "borrowed",
    "topicTheme": "Tình yêu và quan hệ",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 75 thuộc nhóm chủ đề: \"Tình yêu và quan hệ\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Công khai rõ ràng quan hệ tình cảm trên mạng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0075-1",
        "sender": "Thạch Minh Dàn",
        "isMe": false,
        "text": "Cặp đôi hard launch bằng ảnh chụp chung.",
        "time": "16:39"
      },
      {
        "id": "d-NW-0075-2",
        "sender": "Kim Nhật Huy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hard launch\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:41"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tình yêu và quan hệ",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 203,
    "viewsCount": 1228,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0076",
    "officialCode": "NW-0076",
    "stt": 76,
    "word": "Flex",
    "pronunciation": "/fleks/",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Uốn cong, siết cơ bắp để phô trương thể lực trong thể hình (Gym).",
    "netMeaning": "Khoe thành tích, năng lực hoặc tài sản.",
    "origin": "Bắt nguồn từ văn hóa Hip-hop Mỹ, du nhập mạnh mẽ vào mạng xã hội Việt Nam từ giữa năm 2023 qua trào lưu nhóm ",
    "dialogueExample": [
      {
        "id": "d-NW-0076-1",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": false,
        "text": "Cho mình flex nhẹ thành tích nhé.",
        "time": "17:40"
      },
      {
        "id": "d-NW-0076-2",
        "sender": "Thạch Thị Ka",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Flex\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:42"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 40,
    "viewsCount": 1275,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0077",
    "officialCode": "NW-0077",
    "stt": 77,
    "word": "Lowkey",
    "pronunciation": "/ˌloʊˈkiː/",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Nốt trầm, tông màu nhẹ trong hội họa và âm nhạc.",
    "netMeaning": "Kín đáo, ít phô trương; đôi khi chỉ mức độ nhẹ.",
    "origin": "Từ lóng tiếng Anh về phong cách sống giản dị, kín tiếng.",
    "dialogueExample": [
      {
        "id": "d-NW-0077-1",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": false,
        "text": "Bạn ấy sống khá lowkey.",
        "time": "18:41"
      },
      {
        "id": "d-NW-0077-2",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Lowkey\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:43"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 57,
    "viewsCount": 1322,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0078",
    "officialCode": "NW-0078",
    "stt": 78,
    "word": "Highkey",
    "pronunciation": "/ˌhaɪˈkiː/",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Tông sáng cao trong nhiếp ảnh.",
    "netMeaning": "Rõ ràng, công khai hoặc ở mức độ mạnh.",
    "origin": "Cặp đối ứng của Lowkey, biểu thị cấp độ cảm xúc bộc trực, công khai.",
    "dialogueExample": [
      {
        "id": "d-NW-0078-1",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": false,
        "text": "Mình highkey thích bộ phim này.",
        "time": "19:42"
      },
      {
        "id": "d-NW-0078-2",
        "sender": "Thạch Thiên Lâm",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Highkey\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:44"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 74,
    "viewsCount": 169,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0079",
    "officialCode": "NW-0079",
    "stt": 79,
    "word": "Main character",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 79 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách tự xem mình là nhân vật chính của câu chuyện.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0079-1",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": false,
        "text": "Hôm nay mình có main character energy.",
        "time": "20:43"
      },
      {
        "id": "d-NW-0079-2",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Main character\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:45"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 91,
    "viewsCount": 216,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0080",
    "officialCode": "NW-0080",
    "stt": 80,
    "word": "Main character energy",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 80 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thần thái tự tin như nhân vật chính.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0080-1",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": false,
        "text": "Bộ ảnh toát main character energy.",
        "time": "21:44"
      },
      {
        "id": "d-NW-0080-2",
        "sender": "Kiên Văn Lợi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Main character energy\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:46"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 108,
    "viewsCount": 263,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0081",
    "officialCode": "NW-0081",
    "stt": 81,
    "word": "Pick me",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 81 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chỉ người cố tỏ ra khác biệt để được chú ý, thường mang ý chê.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0081-1",
        "sender": "Nguyễn Phi Hùng",
        "isMe": false,
        "text": "Bình luận ấy bị gọi là pick me.",
        "time": "14:45"
      },
      {
        "id": "d-NW-0081-2",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Pick me\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:47"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 125,
    "viewsCount": 310,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0082",
    "officialCode": "NW-0082",
    "stt": 82,
    "word": "Bestie",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 82 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Bạn thân; đôi khi xưng hô thân mật với người lạ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0082-1",
        "sender": "Kim Nhật Huy",
        "isMe": false,
        "text": "Bestie ơi, xem ảnh mới này!",
        "time": "15:46"
      },
      {
        "id": "d-NW-0082-2",
        "sender": "Kim Chăm Nanl",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Bestie\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:48"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 142,
    "viewsCount": 357,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0083",
    "officialCode": "NW-0083",
    "stt": 83,
    "word": "Idol",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 83 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Người được yêu mến, thần tượng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0083-1",
        "sender": "Thạch Thị Ka",
        "isMe": false,
        "text": "Chị ấy là idol của mình.",
        "time": "16:47"
      },
      {
        "id": "d-NW-0083-2",
        "sender": "Thạch Thị Nga",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Idol\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:49"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 159,
    "viewsCount": 404,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0084",
    "officialCode": "NW-0084",
    "stt": 84,
    "word": "Manifest",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 84 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Hình dung và tin tưởng điều mong muốn sẽ thành hiện thực.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0084-1",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": false,
        "text": "Mình manifest một kỳ thi thuận lợi.",
        "time": "17:48"
      },
      {
        "id": "d-NW-0084-2",
        "sender": "Thạch Thị Nhi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Manifest\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:50"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 176,
    "viewsCount": 451,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0085",
    "officialCode": "NW-0085",
    "stt": 85,
    "word": "Aura",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 85 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Khí chất, sức hút của một người.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0085-1",
        "sender": "Thạch Thiên Lâm",
        "isMe": false,
        "text": "Bước vào sân khấu là aura khác hẳn.",
        "time": "18:49"
      },
      {
        "id": "d-NW-0085-2",
        "sender": "Kim Thị Tú Như",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Aura\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:51"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 193,
    "viewsCount": 498,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0086",
    "officialCode": "NW-0086",
    "stt": 86,
    "word": "Vía",
    "category": "slang",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 86 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách nói về vận may hoặc ảnh hưởng tinh thần.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0086-1",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": false,
        "text": "Xin vía đỗ kỳ thi của bạn.",
        "time": "19:50"
      },
      {
        "id": "d-NW-0086-2",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Vía\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:52"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ"
    ],
    "likesCount": 30,
    "viewsCount": 545,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0087",
    "officialCode": "NW-0087",
    "stt": 87,
    "word": "Xin vía",
    "pronunciation": "/sin viə/",
    "category": "slang",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Cầu xin linh hồn/vía tốt theo quan niệm dân gian.",
    "netMeaning": "Mong nhận may mắn từ người khác.",
    "origin": "Tín ngưỡng dân gian về ",
    "dialogueExample": [
      {
        "id": "d-NW-0087-1",
        "sender": "Kiên Văn Lợi",
        "isMe": false,
        "text": "Cho mình xin vía phỏng vấn tốt nhé.",
        "time": "20:51"
      },
      {
        "id": "d-NW-0087-2",
        "sender": "Kim Minh Phương",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Xin vía\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:53"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ"
    ],
    "likesCount": 47,
    "viewsCount": 592,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0088",
    "officialCode": "NW-0088",
    "stt": 88,
    "word": "Nhả vía",
    "category": "slang",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 88 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nói đùa về việc chia sẻ may mắn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0088-1",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": false,
        "text": "Thi xong rồi, nhả vía cho mọi người.",
        "time": "21:52"
      },
      {
        "id": "d-NW-0088-2",
        "sender": "Thạch Minh Quý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Nhả vía\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:54"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ"
    ],
    "likesCount": 64,
    "viewsCount": 639,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0089",
    "officialCode": "NW-0089",
    "stt": 89,
    "word": "Gu",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 89 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Sở thích hoặc kiểu người, phong cách mình chuộng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0089-1",
        "sender": "Kim Chăm Nanl",
        "isMe": false,
        "text": "Phong cách đó đúng gu mình.",
        "time": "14:53"
      },
      {
        "id": "d-NW-0089-2",
        "sender": "Thạch Thị Thia Ri",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Gu\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:55"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 81,
    "viewsCount": 686,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0090",
    "officialCode": "NW-0090",
    "stt": 90,
    "word": "Hệ",
    "category": "slang",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 90 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chỉ kiểu người hoặc nhóm có đặc trưng chung.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0090-1",
        "sender": "Thạch Thị Nga",
        "isMe": false,
        "text": "Mình thuộc hệ mê đồ ngọt.",
        "time": "15:54"
      },
      {
        "id": "d-NW-0090-2",
        "sender": "Thạch Ngọc Thanh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hệ\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:56"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ"
    ],
    "likesCount": 98,
    "viewsCount": 733,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0091",
    "officialCode": "NW-0091",
    "stt": 91,
    "word": "Hệ tâm linh",
    "category": "slang",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 91 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nhóm người hay lý giải theo niềm tin tâm linh, thường nói đùa.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0091-1",
        "sender": "Thạch Thị Nhi",
        "isMe": false,
        "text": "Gặp số đẹp là hệ tâm linh vui rồi.",
        "time": "16:10"
      },
      {
        "id": "d-NW-0091-2",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hệ tâm linh\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:12"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ"
    ],
    "likesCount": 115,
    "viewsCount": 780,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0092",
    "officialCode": "NW-0092",
    "stt": 92,
    "word": "Gen Z",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 92 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thế hệ sinh sau Millennials; trên mạng còn chỉ phong cách trẻ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0092-1",
        "sender": "Kim Thị Tú Như",
        "isMe": false,
        "text": "Cách trả lời này đúng kiểu Gen Z.",
        "time": "17:11"
      },
      {
        "id": "d-NW-0092-2",
        "sender": "Thạch Thị Anh Thư",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Gen Z\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:13"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 132,
    "viewsCount": 827,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0093",
    "officialCode": "NW-0093",
    "stt": 93,
    "word": "Gen Alpha",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 93 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thế hệ thường được xác định tiếp sau Gen Z.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0093-1",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": false,
        "text": "Nhiều meme mới bắt nguồn từ Gen Alpha.",
        "time": "18:12"
      },
      {
        "id": "d-NW-0093-2",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Gen Alpha\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:14"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 149,
    "viewsCount": 874,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0094",
    "officialCode": "NW-0094",
    "stt": 94,
    "word": "Hướng nội",
    "category": "slang",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 94 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách tự nhận mình thích ít tương tác, đôi khi dùng không đúng nghĩa tâm lý.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0094-1",
        "sender": "Kim Minh Phương",
        "isMe": false,
        "text": "Hôm nay mình hướng nội, không đi tiệc.",
        "time": "19:13"
      },
      {
        "id": "d-NW-0094-2",
        "sender": "Thạch Khánh Vinh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hướng nội\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:15"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ"
    ],
    "likesCount": 166,
    "viewsCount": 921,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0095",
    "officialCode": "NW-0095",
    "stt": 95,
    "word": "Hướng ngoại",
    "category": "slang",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 95 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách tự nhận mình thích giao tiếp, gặp gỡ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0095-1",
        "sender": "Thạch Minh Quý",
        "isMe": false,
        "text": "Bạn ấy hướng ngoại nên dễ bắt chuyện.",
        "time": "20:14"
      },
      {
        "id": "d-NW-0095-2",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hướng ngoại\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:16"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ"
    ],
    "likesCount": 183,
    "viewsCount": 968,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0096",
    "officialCode": "NW-0096",
    "stt": 96,
    "word": "Hướng nội hết phần đời còn lại",
    "category": "slang",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Mẫu câu / cụm cố định",
    "literalMeaning": "Mục từ số 96 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách nói phóng đại khi quá xấu hổ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0096-1",
        "sender": "Thạch Thị Thia Ri",
        "isMe": false,
        "text": "Hát lệch nhạc xong hướng nội hết phần đời còn lại.",
        "time": "21:15"
      },
      {
        "id": "d-NW-0096-2",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hướng nội hết phần đời còn lại\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:17"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Mẫu câu / cụm cố định"
    ],
    "likesCount": 200,
    "viewsCount": 1015,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0097",
    "officialCode": "NW-0097",
    "stt": 97,
    "word": "Self-love",
    "category": "slang",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 97 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Yêu thương, tôn trọng bản thân.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0097-1",
        "sender": "Thạch Ngọc Thanh",
        "isMe": false,
        "text": "Dành thời gian nghỉ ngơi cũng là self-love.",
        "time": "14:16"
      },
      {
        "id": "d-NW-0097-2",
        "sender": "Kim Thị Như Ý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Self-love\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:18"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ"
    ],
    "likesCount": 37,
    "viewsCount": 1062,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0098",
    "officialCode": "NW-0098",
    "stt": 98,
    "word": "Self-care",
    "category": "slang",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 98 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Hoạt động chăm sóc thể chất, tinh thần.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0098-1",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": false,
        "text": "Đọc sách là một phần self-care của mình.",
        "time": "15:17"
      },
      {
        "id": "d-NW-0098-2",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Self-care\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:19"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Từ / thuật ngữ"
    ],
    "likesCount": 54,
    "viewsCount": 1109,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0099",
    "officialCode": "NW-0099",
    "stt": 99,
    "word": "Glow up",
    "category": "borrowed",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 99 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thay đổi tích cực về ngoại hình hoặc phong thái.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0099-1",
        "sender": "Thạch Thị Anh Thư",
        "isMe": false,
        "text": "Sau một năm bạn ấy glow up rõ rệt.",
        "time": "16:18"
      },
      {
        "id": "d-NW-0099-2",
        "sender": "Thạch Minh An (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Glow up\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:20"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 71,
    "viewsCount": 1156,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0100",
    "officialCode": "NW-0100",
    "stt": 100,
    "word": "Reset bản thân",
    "category": "slang",
    "topicTheme": "Bản sắc và lối sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 100 thuộc nhóm chủ đề: \"Bản sắc và lối sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Bắt đầu lại hoặc thiết lập thói quen mới.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0100-1",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": false,
        "text": "Đầu tháng mình muốn reset bản thân.",
        "time": "17:19"
      },
      {
        "id": "d-NW-0100-2",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Reset bản thân\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:21"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Bản sắc và lối sống",
      "Cụm từ"
    ],
    "likesCount": 88,
    "viewsCount": 1203,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0101",
    "officialCode": "NW-0101",
    "stt": 101,
    "word": "Deadline",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 101 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Hạn chót hoàn thành công việc.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0101-1",
        "sender": "Thạch Khánh Vinh",
        "isMe": false,
        "text": "Deadline bài nhóm là tối nay.",
        "time": "18:20"
      },
      {
        "id": "d-NW-0101-2",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Deadline\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:22"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 105,
    "viewsCount": 1250,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0102",
    "officialCode": "NW-0102",
    "stt": 102,
    "word": "Dí deadline",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 102 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thúc ép hoặc bị áp lực sát hạn chót.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0102-1",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": false,
        "text": "Cả đội đang bị dí deadline.",
        "time": "19:21"
      },
      {
        "id": "d-NW-0102-2",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Dí deadline\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:23"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Cụm từ"
    ],
    "likesCount": 122,
    "viewsCount": 1297,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0103",
    "officialCode": "NW-0103",
    "stt": 103,
    "word": "Chạy deadline",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 103 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tập trung làm gấp để kịp hạn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0103-1",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": false,
        "text": "Tối nay mình chạy deadline.",
        "time": "20:22"
      },
      {
        "id": "d-NW-0103-2",
        "sender": "Thạch Minh Dàn",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Chạy deadline\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:24"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Cụm từ"
    ],
    "likesCount": 139,
    "viewsCount": 1344,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0104",
    "officialCode": "NW-0104",
    "stt": 104,
    "word": "Burnout",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 104 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Kiệt sức do căng thẳng kéo dài.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0104-1",
        "sender": "Kim Thị Như Ý",
        "isMe": false,
        "text": "Làm liên tục dễ dẫn tới burnout.",
        "time": "21:23"
      },
      {
        "id": "d-NW-0104-2",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Burnout\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:25"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 156,
    "viewsCount": 191,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0105",
    "officialCode": "NW-0105",
    "stt": 105,
    "word": "Gánh team",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 105 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đảm nhiệm phần quan trọng để cả nhóm thành công.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0105-1",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": false,
        "text": "Bạn ấy gánh team trong bài thuyết trình.",
        "time": "14:24"
      },
      {
        "id": "d-NW-0105-2",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Gánh team\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:26"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Cụm từ"
    ],
    "likesCount": 173,
    "viewsCount": 238,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0106",
    "officialCode": "NW-0106",
    "stt": 106,
    "word": "Teamwork",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 106 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Sự phối hợp làm việc theo nhóm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0106-1",
        "sender": "Thạch Minh An (11A1)",
        "isMe": false,
        "text": "Bài này cần teamwork tốt.",
        "time": "15:25"
      },
      {
        "id": "d-NW-0106-2",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Teamwork\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:27"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 190,
    "viewsCount": 285,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0107",
    "officialCode": "NW-0107",
    "stt": 107,
    "word": "Skill issue",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 107 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lỗi do kỹ năng yếu, có thể mang tính trêu chọc.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0107-1",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": false,
        "text": "Thua game vì skill issue thôi.",
        "time": "16:26"
      },
      {
        "id": "d-NW-0107-2",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Skill issue\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:28"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Cụm từ"
    ],
    "likesCount": 27,
    "viewsCount": 332,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0108",
    "officialCode": "NW-0108",
    "stt": 108,
    "word": "Cày",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 108 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Học hoặc làm việc nhiều giờ, liên tục.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0108-1",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": false,
        "text": "Mình cày đề đến tối.",
        "time": "17:27"
      },
      {
        "id": "d-NW-0108-2",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cày\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:29"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 44,
    "viewsCount": 379,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0109",
    "officialCode": "NW-0109",
    "stt": 109,
    "word": "Cày cuốc",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 109 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nỗ lực làm việc hay học tập chăm chỉ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0109-1",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": false,
        "text": "Cả lớp đang cày cuốc ôn thi.",
        "time": "18:28"
      },
      {
        "id": "d-NW-0109-2",
        "sender": "Nguyễn Phi Hùng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cày cuốc\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:30"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Cụm từ"
    ],
    "likesCount": 61,
    "viewsCount": 426,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0110",
    "officialCode": "NW-0110",
    "stt": 110,
    "word": "Nước đến chân mới nhảy",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Mẫu câu / cụm cố định",
    "literalMeaning": "Mục từ số 110 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chỉ làm khi sắp hết thời gian.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0110-1",
        "sender": "Thạch Minh Dàn",
        "isMe": false,
        "text": "Đừng nước đến chân mới nhảy nữa.",
        "time": "19:29"
      },
      {
        "id": "d-NW-0110-2",
        "sender": "Kim Nhật Huy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Nước đến chân mới nhảy\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:31"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Mẫu câu / cụm cố định"
    ],
    "likesCount": 78,
    "viewsCount": 473,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0111",
    "officialCode": "NW-0111",
    "stt": 111,
    "word": "Ôm job",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 111 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nhận quá nhiều việc cùng lúc.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0111-1",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": false,
        "text": "Bạn ấy ôm job nên rất mệt.",
        "time": "20:30"
      },
      {
        "id": "d-NW-0111-2",
        "sender": "Thạch Thị Ka",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Ôm job\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:32"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Cụm từ"
    ],
    "likesCount": 95,
    "viewsCount": 520,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0112",
    "officialCode": "NW-0112",
    "stt": 112,
    "word": "Task",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 112 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đầu việc cụ thể cần hoàn thành.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0112-1",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": false,
        "text": "Hôm nay còn ba task chưa xong.",
        "time": "21:31"
      },
      {
        "id": "d-NW-0112-2",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Task\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:33"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 112,
    "viewsCount": 567,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0113",
    "officialCode": "NW-0113",
    "stt": 113,
    "word": "To-do list",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 113 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Danh sách việc cần làm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0113-1",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": false,
        "text": "Mình viết to-do list mỗi sáng.",
        "time": "14:32"
      },
      {
        "id": "d-NW-0113-2",
        "sender": "Thạch Thiên Lâm",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"To-do list\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:34"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Cụm từ"
    ],
    "likesCount": 129,
    "viewsCount": 614,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0114",
    "officialCode": "NW-0114",
    "stt": 114,
    "word": "Feedback",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 114 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Ý kiến nhận xét để điều chỉnh.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0114-1",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": false,
        "text": "Cho mình xin feedback về bản thảo.",
        "time": "15:33"
      },
      {
        "id": "d-NW-0114-2",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Feedback\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:35"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 146,
    "viewsCount": 661,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0115",
    "officialCode": "NW-0115",
    "stt": 115,
    "word": "Brief",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 115 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Bản mô tả ngắn yêu cầu công việc.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0115-1",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": false,
        "text": "Đọc brief trước khi thiết kế nhé.",
        "time": "16:34"
      },
      {
        "id": "d-NW-0115-2",
        "sender": "Kiên Văn Lợi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Brief\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:36"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 163,
    "viewsCount": 708,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0116",
    "officialCode": "NW-0116",
    "stt": 116,
    "word": "Pitch",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 116 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Trình bày ý tưởng nhằm thuyết phục người nghe.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0116-1",
        "sender": "Nguyễn Phi Hùng",
        "isMe": false,
        "text": "Ngày mai nhóm sẽ pitch dự án.",
        "time": "17:35"
      },
      {
        "id": "d-NW-0116-2",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Pitch\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:37"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 180,
    "viewsCount": 755,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0117",
    "officialCode": "NW-0117",
    "stt": 117,
    "word": "KPI",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 117 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chỉ tiêu đo lường kết quả hoạt động.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0117-1",
        "sender": "Kim Nhật Huy",
        "isMe": false,
        "text": "Tháng này đội đã đạt KPI.",
        "time": "18:36"
      },
      {
        "id": "d-NW-0117-2",
        "sender": "Kim Chăm Nanl",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"KPI\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:38"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 197,
    "viewsCount": 802,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0118",
    "officialCode": "NW-0118",
    "stt": 118,
    "word": "OKR",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 118 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Phương pháp xác lập mục tiêu và kết quả then chốt.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0118-1",
        "sender": "Thạch Thị Ka",
        "isMe": false,
        "text": "Nhóm lập OKR cho học kỳ mới.",
        "time": "19:37"
      },
      {
        "id": "d-NW-0118-2",
        "sender": "Thạch Thị Nga",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"OKR\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:39"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 34,
    "viewsCount": 849,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0119",
    "officialCode": "NW-0119",
    "stt": 119,
    "word": "Freelance",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 119 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Làm việc tự do theo dự án.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0119-1",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": false,
        "text": "Chị mình nhận việc freelance.",
        "time": "20:38"
      },
      {
        "id": "d-NW-0119-2",
        "sender": "Thạch Thị Nhi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Freelance\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:40"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 51,
    "viewsCount": 896,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0120",
    "officialCode": "NW-0120",
    "stt": 120,
    "word": "Part-time",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 120 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Công việc bán thời gian.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0120-1",
        "sender": "Thạch Thiên Lâm",
        "isMe": false,
        "text": "Bạn ấy làm part-time cuối tuần.",
        "time": "21:39"
      },
      {
        "id": "d-NW-0120-2",
        "sender": "Kim Thị Tú Như",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Part-time\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:41"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 68,
    "viewsCount": 943,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0121",
    "officialCode": "NW-0121",
    "stt": 121,
    "word": "Full-time",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 121 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Công việc toàn thời gian.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0121-1",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": false,
        "text": "Ra trường mình muốn làm full-time.",
        "time": "14:40"
      },
      {
        "id": "d-NW-0121-2",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Full-time\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:42"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 85,
    "viewsCount": 990,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0122",
    "officialCode": "NW-0122",
    "stt": 122,
    "word": "Work-life balance",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 122 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Sự cân bằng giữa công việc và đời sống.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0122-1",
        "sender": "Kiên Văn Lợi",
        "isMe": false,
        "text": "Mình đang tìm work-life balance.",
        "time": "15:41"
      },
      {
        "id": "d-NW-0122-2",
        "sender": "Kim Minh Phương",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Work-life balance\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:43"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Cụm từ"
    ],
    "likesCount": 102,
    "viewsCount": 1037,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0123",
    "officialCode": "NW-0123",
    "stt": 123,
    "word": "Quiet quitting",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 123 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chỉ làm trong phạm vi công việc yêu cầu, không tự nguyện làm thêm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0123-1",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": false,
        "text": "Chủ đề quiet quitting gây tranh luận.",
        "time": "16:42"
      },
      {
        "id": "d-NW-0123-2",
        "sender": "Thạch Minh Quý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Quiet quitting\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:44"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Cụm từ"
    ],
    "likesCount": 119,
    "viewsCount": 1084,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0124",
    "officialCode": "NW-0124",
    "stt": 124,
    "word": "Networking",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 124 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Xây dựng mạng lưới quan hệ nghề nghiệp.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0124-1",
        "sender": "Kim Chăm Nanl",
        "isMe": false,
        "text": "Hội thảo giúp sinh viên networking.",
        "time": "17:43"
      },
      {
        "id": "d-NW-0124-2",
        "sender": "Thạch Thị Thia Ri",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Networking\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:45"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 136,
    "viewsCount": 1131,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0125",
    "officialCode": "NW-0125",
    "stt": 125,
    "word": "Intern",
    "category": "school",
    "topicTheme": "Học tập và công việc",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 125 thuộc nhóm chủ đề: \"Học tập và công việc\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Người thực tập.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0125-1",
        "sender": "Thạch Thị Nga",
        "isMe": false,
        "text": "Mình là intern ở công ty truyền thông.",
        "time": "18:44"
      },
      {
        "id": "d-NW-0125-2",
        "sender": "Thạch Ngọc Thanh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Intern\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:46"
      }
    ],
    "academicGuidance": "Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 4,
    "tags": [
      "Chuyên đề 2",
      "Học tập và công việc",
      "Từ / thuật ngữ"
    ],
    "likesCount": 153,
    "viewsCount": 1178,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0126",
    "officialCode": "NW-0126",
    "stt": 126,
    "word": "Viral",
    "pronunciation": "/ˈvaɪrəl/",
    "category": "borrowed",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Thuộc về virus, tính chất lây lan sinh học.",
    "netMeaning": "Lan truyền nhanh và được nhiều người chú ý.",
    "origin": "Thuật ngữ tiếp thị truyền thông số (Viral Marketing), đã trở thành từ vựng toàn cầu quen thuộc.",
    "dialogueExample": [
      {
        "id": "d-NW-0126-1",
        "sender": "Thạch Thị Nhi",
        "isMe": false,
        "text": "Clip đó viral chỉ sau một đêm.",
        "time": "19:45"
      },
      {
        "id": "d-NW-0126-2",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Viral\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:47"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 170,
    "viewsCount": 1225,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0127",
    "officialCode": "NW-0127",
    "stt": 127,
    "word": "Trend",
    "pronunciation": "/trend/",
    "category": "borrowed",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Phương hướng vận động, chiều hướng biến đổi.",
    "netMeaning": "Xu hướng nổi bật tại một thời điểm.",
    "origin": "Từ mượn tiếng Anh kinh tế - xã hội, trở thành khái niệm căn bản của văn hóa mạng.",
    "dialogueExample": [
      {
        "id": "d-NW-0127-1",
        "sender": "Kim Thị Tú Như",
        "isMe": false,
        "text": "Tuần này xuất hiện trend nhảy mới.",
        "time": "20:46"
      },
      {
        "id": "d-NW-0127-2",
        "sender": "Thạch Thị Anh Thư",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Trend\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:48"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 187,
    "viewsCount": 1272,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0128",
    "officialCode": "NW-0128",
    "stt": 128,
    "word": "Bắt trend",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 128 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Làm theo một xu hướng đang phổ biến.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0128-1",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": false,
        "text": "Lớp mình cũng bắt trend quay video.",
        "time": "21:47"
      },
      {
        "id": "d-NW-0128-2",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Bắt trend\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:49"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 204,
    "viewsCount": 1319,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0129",
    "officialCode": "NW-0129",
    "stt": 129,
    "word": "Đu trend",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 129 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tham gia trào lưu, thường mang giọng vui.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0129-1",
        "sender": "Kim Minh Phương",
        "isMe": false,
        "text": "Tụi mình đu trend cho vui thôi.",
        "time": "14:48"
      },
      {
        "id": "d-NW-0129-2",
        "sender": "Thạch Khánh Vinh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Đu trend\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:50"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 41,
    "viewsCount": 166,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0130",
    "officialCode": "NW-0130",
    "stt": 130,
    "word": "FOMO",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 130 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lo sợ bỏ lỡ một trải nghiệm hoặc xu hướng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0130-1",
        "sender": "Thạch Minh Quý",
        "isMe": false,
        "text": "Mình mua vé vì hơi FOMO.",
        "time": "15:49"
      },
      {
        "id": "d-NW-0130-2",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"FOMO\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:51"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 58,
    "viewsCount": 213,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0131",
    "officialCode": "NW-0131",
    "stt": 131,
    "word": "Flop",
    "pronunciation": "/flɑːp/",
    "category": "borrowed",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Cú rơi phịch xuống sàn nhà.",
    "netMeaning": "Không đạt mức chú ý hoặc thành công kỳ vọng.",
    "origin": "Từ lóng giới âm nhạc US-UK khi một album không bán được, lan rộng vào cộng đồng học sinh.",
    "dialogueExample": [
      {
        "id": "d-NW-0131-1",
        "sender": "Thạch Thị Thia Ri",
        "isMe": false,
        "text": "Bài đăng hôm qua bị flop.",
        "time": "16:50"
      },
      {
        "id": "d-NW-0131-2",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Flop\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:52"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 75,
    "viewsCount": 260,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0132",
    "officialCode": "NW-0132",
    "stt": 132,
    "word": "Seeding",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 132 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tạo thảo luận hoặc bình luận có chủ đích để thúc đẩy chú ý.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0132-1",
        "sender": "Thạch Ngọc Thanh",
        "isMe": false,
        "text": "Nhóm đang seeding cho chiến dịch.",
        "time": "17:51"
      },
      {
        "id": "d-NW-0132-2",
        "sender": "Kim Thị Như Ý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Seeding\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:53"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 92,
    "viewsCount": 307,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0133",
    "officialCode": "NW-0133",
    "stt": 133,
    "word": "Check var",
    "pronunciation": "/tʃek vaːr/",
    "category": "borrowed",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Kiểm tra video hỗ trợ trọng tài trong bóng đá để đưa ra phán quyết chính xác.",
    "netMeaning": "Kiểm tra, đối chiếu dữ kiện hoặc lời khẳng định.",
    "origin": "Xuất phát từ công nghệ VAR bóng đá FIFA, phổ biến qua các trào lưu sao kê minh bạch và đối chất trực tuyến.",
    "dialogueExample": [
      {
        "id": "d-NW-0133-1",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": false,
        "text": "Trước khi chia sẻ hãy check var.",
        "time": "18:52"
      },
      {
        "id": "d-NW-0133-2",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Check var\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:54"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 109,
    "viewsCount": 354,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0134",
    "officialCode": "NW-0134",
    "stt": 134,
    "word": "Hóng",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 134 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Theo dõi chờ diễn biến mới.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0134-1",
        "sender": "Thạch Thị Anh Thư",
        "isMe": false,
        "text": "Cả nhóm đang hóng phần tiếp theo.",
        "time": "19:53"
      },
      {
        "id": "d-NW-0134-2",
        "sender": "Thạch Minh An (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hóng\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:55"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 126,
    "viewsCount": 401,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0135",
    "officialCode": "NW-0135",
    "stt": 135,
    "word": "Drama",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 135 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Sự việc gây tranh cãi, nhiều xung đột.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0135-1",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": false,
        "text": "Mình không muốn tham gia drama.",
        "time": "20:54"
      },
      {
        "id": "d-NW-0135-2",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Drama\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:56"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 143,
    "viewsCount": 448,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0136",
    "officialCode": "NW-0136",
    "stt": 136,
    "word": "Leak",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 136 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Làm lộ thông tin chưa công bố.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0136-1",
        "sender": "Thạch Khánh Vinh",
        "isMe": false,
        "text": "Ảnh sản phẩm mới bị leak.",
        "time": "21:10"
      },
      {
        "id": "d-NW-0136-2",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Leak\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:12"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 160,
    "viewsCount": 495,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0137",
    "officialCode": "NW-0137",
    "stt": 137,
    "word": "Block",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 137 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chặn tài khoản để hạn chế liên hệ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0137-1",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": false,
        "text": "Bạn có thể block tài khoản quấy rối.",
        "time": "14:11"
      },
      {
        "id": "d-NW-0137-2",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Block\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:13"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 177,
    "viewsCount": 542,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0138",
    "officialCode": "NW-0138",
    "stt": 138,
    "word": "Unfriend",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 138 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Hủy quan hệ bạn bè trên nền tảng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0138-1",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": false,
        "text": "Hai người đã unfriend nhau.",
        "time": "15:12"
      },
      {
        "id": "d-NW-0138-2",
        "sender": "Thạch Minh Dàn",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Unfriend\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:14"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 194,
    "viewsCount": 589,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0139",
    "officialCode": "NW-0139",
    "stt": 139,
    "word": "Rep",
    "pronunciation": "/rep/",
    "category": "teencode",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Reply – trả lời, hồi đáp.",
    "netMeaning": "Trả lời tin nhắn hoặc bình luận.",
    "origin": "Rút ngắn từ nút bấm Reply trên giao diện phần mềm nhắn tin.",
    "dialogueExample": [
      {
        "id": "d-NW-0139-1",
        "sender": "Kim Thị Như Ý",
        "isMe": false,
        "text": "Rảnh thì rep mình nhé.",
        "time": "16:13"
      },
      {
        "id": "d-NW-0139-2",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Rep\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:15"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 31,
    "viewsCount": 636,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0140",
    "officialCode": "NW-0140",
    "stt": 140,
    "word": "Inb",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 140 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nhắn tin riêng, viết tắt của inbox.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0140-1",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": false,
        "text": "Muốn biết chi tiết thì inb mình.",
        "time": "17:14"
      },
      {
        "id": "d-NW-0140-2",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Inb\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:16"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 48,
    "viewsCount": 683,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0141",
    "officialCode": "NW-0141",
    "stt": 141,
    "word": "Stalk",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 141 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Theo dõi hoặc dò tìm thông tin người khác trên mạng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0141-1",
        "sender": "Thạch Minh An (11A1)",
        "isMe": false,
        "text": "Đừng stalk tài khoản riêng tư của người ta.",
        "time": "18:15"
      },
      {
        "id": "d-NW-0141-2",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Stalk\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:17"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 65,
    "viewsCount": 730,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0142",
    "officialCode": "NW-0142",
    "stt": 142,
    "word": "Tag",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 142 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Gắn tên, nhắc đến tài khoản khác.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0142-1",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": false,
        "text": "Tag mình vào ảnh nhóm nhé.",
        "time": "19:16"
      },
      {
        "id": "d-NW-0142-2",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Tag\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:18"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 82,
    "viewsCount": 777,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0143",
    "officialCode": "NW-0143",
    "stt": 143,
    "word": "Mention",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 143 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nhắc đến tài khoản bằng tên định danh.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0143-1",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": false,
        "text": "Bài đăng có mention bạn đó.",
        "time": "20:17"
      },
      {
        "id": "d-NW-0143-2",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mention\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:19"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 99,
    "viewsCount": 824,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0144",
    "officialCode": "NW-0144",
    "stt": 144,
    "word": "Hashtag",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 144 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nhãn từ khóa có dấu # để gom nội dung.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0144-1",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": false,
        "text": "Thêm hashtag phù hợp cho bài viết.",
        "time": "21:18"
      },
      {
        "id": "d-NW-0144-2",
        "sender": "Nguyễn Phi Hùng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hashtag\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:20"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 116,
    "viewsCount": 871,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0145",
    "officialCode": "NW-0145",
    "stt": 145,
    "word": "Repost",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 145 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đăng lại nội dung đã có.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0145-1",
        "sender": "Thạch Minh Dàn",
        "isMe": false,
        "text": "Mình repost thông báo của câu lạc bộ.",
        "time": "14:19"
      },
      {
        "id": "d-NW-0145-2",
        "sender": "Kim Nhật Huy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Repost\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:21"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 133,
    "viewsCount": 918,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0146",
    "officialCode": "NW-0146",
    "stt": 146,
    "word": "Story",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 146 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nội dung ngắn thường hiển thị trong thời gian giới hạn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0146-1",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": false,
        "text": "Bạn ấy vừa đăng story.",
        "time": "15:20"
      },
      {
        "id": "d-NW-0146-2",
        "sender": "Thạch Thị Ka",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Story\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:22"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 150,
    "viewsCount": 965,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0147",
    "officialCode": "NW-0147",
    "stt": 147,
    "word": "Reel",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 147 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Định dạng video ngắn trên nền tảng xã hội.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0147-1",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": false,
        "text": "Mình xem reel về học tiếng Anh.",
        "time": "16:21"
      },
      {
        "id": "d-NW-0147-2",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Reel\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:23"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 167,
    "viewsCount": 1012,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0148",
    "officialCode": "NW-0148",
    "stt": 148,
    "word": "POV",
    "pronunciation": "/piː oʊ viː/",
    "category": "borrowed",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Point Of View – Điểm nhìn trần thuật hoặc góc nhìn ống kính máy quay.",
    "netMeaning": "Góc nhìn của nhân vật hoặc tình huống giả định.",
    "origin": "Kỹ thuật điện ảnh và phân tích tác phẩm văn xuôi, chuyển thành định dạng video nhập vai thịnh hành trên TikTok.",
    "dialogueExample": [
      {
        "id": "d-NW-0148-1",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": false,
        "text": "Video có chú thích POV: ngày đầu đi học.",
        "time": "17:22"
      },
      {
        "id": "d-NW-0148-2",
        "sender": "Thạch Thiên Lâm",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"POV\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:24"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 184,
    "viewsCount": 1059,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0149",
    "officialCode": "NW-0149",
    "stt": 149,
    "word": "Thuật toán đề xuất",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 149 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cơ chế gợi ý nội dung theo nhiều tín hiệu.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0149-1",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": false,
        "text": "Thuật toán đề xuất đưa video này lên bảng tin.",
        "time": "18:23"
      },
      {
        "id": "d-NW-0149-2",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Thuật toán đề xuất\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:25"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 201,
    "viewsCount": 1106,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0150",
    "officialCode": "NW-0150",
    "stt": 150,
    "word": "Tương tác ảo",
    "category": "meme_trend",
    "topicTheme": "Tương tác mạng xã hội",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/concert-quoc-gia-vao-top-slang-thinh-hanh-nhat-2025-2026021205",
    "literalMeaning": "Mục từ số 150 thuộc nhóm chủ đề: \"Tương tác mạng xã hội\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lượt thích, theo dõi hoặc bình luận không phản ánh quan tâm thật.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0150-1",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": false,
        "text": "Nhãn hàng nghi ngờ bài có tương tác ảo.",
        "time": "19:24"
      },
      {
        "id": "d-NW-0150-2",
        "sender": "Kiên Văn Lợi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Tương tác ảo\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:26"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tương tác mạng xã hội",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 38,
    "viewsCount": 1153,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0151",
    "officialCode": "NW-0151",
    "stt": 151,
    "word": "Bias",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 151 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thành viên được yêu thích nhất trong nhóm thần tượng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0151-1",
        "sender": "Nguyễn Phi Hùng",
        "isMe": false,
        "text": "Bias của mình hát đoạn mở đầu.",
        "time": "20:25"
      },
      {
        "id": "d-NW-0151-2",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Bias\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:27"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 55,
    "viewsCount": 1200,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0152",
    "officialCode": "NW-0152",
    "stt": 152,
    "word": "Fandom",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 152 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cộng đồng người hâm mộ một nghệ sĩ hoặc tác phẩm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0152-1",
        "sender": "Kim Nhật Huy",
        "isMe": false,
        "text": "Fandom tổ chức hoạt động thiện nguyện.",
        "time": "21:26"
      },
      {
        "id": "d-NW-0152-2",
        "sender": "Kim Chăm Nanl",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Fandom\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:28"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 72,
    "viewsCount": 1247,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0153",
    "officialCode": "NW-0153",
    "stt": 153,
    "word": "Stan",
    "pronunciation": "/stæn/",
    "category": "borrowed",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Tên nhân vật trong bài hát năm 2000 của Eminem kết hợp Stalker (kẻ theo dõi) và Fan (người hâm mộ).",
    "netMeaning": "Hâm mộ và ủng hộ rất nhiệt tình.",
    "origin": "Văn hóa fandom âm nhạc quốc tế và K-pop.",
    "dialogueExample": [
      {
        "id": "d-NW-0153-1",
        "sender": "Thạch Thị Ka",
        "isMe": false,
        "text": "Mình stan nhóm nhạc này lâu rồi.",
        "time": "14:27"
      },
      {
        "id": "d-NW-0153-2",
        "sender": "Thạch Thị Nga",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Stan\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:29"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 89,
    "viewsCount": 1294,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0154",
    "officialCode": "NW-0154",
    "stt": 154,
    "word": "Comeback",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 154 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Trở lại hoạt động hoặc phát hành sản phẩm mới.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0154-1",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": false,
        "text": "Ca sĩ sẽ comeback tháng tới.",
        "time": "15:28"
      },
      {
        "id": "d-NW-0154-2",
        "sender": "Thạch Thị Nhi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Comeback\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:30"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 106,
    "viewsCount": 1341,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0155",
    "officialCode": "NW-0155",
    "stt": 155,
    "word": "Spoil",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 155 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tiết lộ trước tình tiết quan trọng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0155-1",
        "sender": "Thạch Thiên Lâm",
        "isMe": false,
        "text": "Đừng spoil kết phim nhé.",
        "time": "16:29"
      },
      {
        "id": "d-NW-0155-2",
        "sender": "Kim Thị Tú Như",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Spoil\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:31"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 123,
    "viewsCount": 188,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0156",
    "officialCode": "NW-0156",
    "stt": 156,
    "word": "Plot twist",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 156 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tình tiết đảo chiều gây bất ngờ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0156-1",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": false,
        "text": "Đoạn cuối có plot twist khó đoán.",
        "time": "17:30"
      },
      {
        "id": "d-NW-0156-2",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Plot twist\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:32"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Cụm từ"
    ],
    "likesCount": 140,
    "viewsCount": 235,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0157",
    "officialCode": "NW-0157",
    "stt": 157,
    "word": "Canon",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 157 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chi tiết được xác nhận trong thế giới tác phẩm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0157-1",
        "sender": "Kiên Văn Lợi",
        "isMe": false,
        "text": "Mối quan hệ ấy đã là canon.",
        "time": "18:31"
      },
      {
        "id": "d-NW-0157-2",
        "sender": "Kim Minh Phương",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Canon\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:33"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 157,
    "viewsCount": 282,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0158",
    "officialCode": "NW-0158",
    "stt": 158,
    "word": "Headcanon",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 158 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách diễn giải riêng của người hâm mộ, chưa được xác nhận.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0158-1",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": false,
        "text": "Đó chỉ là headcanon của fan.",
        "time": "19:32"
      },
      {
        "id": "d-NW-0158-2",
        "sender": "Thạch Minh Quý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Headcanon\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:34"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 174,
    "viewsCount": 329,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0159",
    "officialCode": "NW-0159",
    "stt": 159,
    "word": "Fan service",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 159 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nội dung hoặc hành động nhằm chiều lòng người hâm mộ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0159-1",
        "sender": "Kim Chăm Nanl",
        "isMe": false,
        "text": "Màn giao lưu có nhiều fan service.",
        "time": "20:33"
      },
      {
        "id": "d-NW-0159-2",
        "sender": "Thạch Thị Thia Ri",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Fan service\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:35"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Cụm từ"
    ],
    "likesCount": 191,
    "viewsCount": 376,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0160",
    "officialCode": "NW-0160",
    "stt": 160,
    "word": "Fanwar",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 160 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tranh cãi giữa các nhóm người hâm mộ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0160-1",
        "sender": "Thạch Thị Nga",
        "isMe": false,
        "text": "Đừng biến bình luận thành fanwar.",
        "time": "21:34"
      },
      {
        "id": "d-NW-0160-2",
        "sender": "Thạch Ngọc Thanh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Fanwar\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:36"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 28,
    "viewsCount": 423,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0161",
    "officialCode": "NW-0161",
    "stt": 161,
    "word": "Buff",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 161 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tăng sức mạnh hoặc khả năng nhân vật trong trò chơi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0161-1",
        "sender": "Thạch Thị Nhi",
        "isMe": false,
        "text": "Bản cập nhật buff tướng này.",
        "time": "14:35"
      },
      {
        "id": "d-NW-0161-2",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Buff\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:37"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 45,
    "viewsCount": 470,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0162",
    "officialCode": "NW-0162",
    "stt": 162,
    "word": "Nerf",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 162 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Giảm sức mạnh của nhân vật hoặc trang bị.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0162-1",
        "sender": "Kim Thị Tú Như",
        "isMe": false,
        "text": "Nhân vật bị nerf khá nhiều.",
        "time": "15:36"
      },
      {
        "id": "d-NW-0162-2",
        "sender": "Thạch Thị Anh Thư",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Nerf\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:38"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 62,
    "viewsCount": 517,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0163",
    "officialCode": "NW-0163",
    "stt": 163,
    "word": "AFK",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 163 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tạm rời bàn phím hoặc trò chơi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0163-1",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": false,
        "text": "Mình AFK năm phút nhé.",
        "time": "16:37"
      },
      {
        "id": "d-NW-0163-2",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"AFK\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:39"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 79,
    "viewsCount": 564,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0164",
    "officialCode": "NW-0164",
    "stt": 164,
    "word": "GG",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 164 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết tắt good game; lời kết trận, đôi khi nói đùa là hết cơ hội.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0164-1",
        "sender": "Kim Minh Phương",
        "isMe": false,
        "text": "Thua ván này rồi, GG.",
        "time": "17:38"
      },
      {
        "id": "d-NW-0164-2",
        "sender": "Thạch Khánh Vinh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"GG\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:40"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 96,
    "viewsCount": 611,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0165",
    "officialCode": "NW-0165",
    "stt": 165,
    "word": "GGWP",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 165 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lời kết trận khen đối thủ chơi tốt.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0165-1",
        "sender": "Thạch Minh Quý",
        "isMe": false,
        "text": "Kết trận cả đội nhắn GGWP.",
        "time": "18:39"
      },
      {
        "id": "d-NW-0165-2",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"GGWP\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:41"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 113,
    "viewsCount": 658,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0166",
    "officialCode": "NW-0166",
    "stt": 166,
    "word": "Noob",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 166 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Người chơi thiếu kinh nghiệm, đôi khi mang ý chê.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0166-1",
        "sender": "Thạch Thị Thia Ri",
        "isMe": false,
        "text": "Mình còn noob ở trò này.",
        "time": "19:40"
      },
      {
        "id": "d-NW-0166-2",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Noob\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:42"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 130,
    "viewsCount": 705,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0167",
    "officialCode": "NW-0167",
    "stt": 167,
    "word": "Pro",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 167 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Người có kỹ năng cao, rất thành thạo.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0167-1",
        "sender": "Thạch Ngọc Thanh",
        "isMe": false,
        "text": "Cách xử lý này đúng là pro.",
        "time": "20:41"
      },
      {
        "id": "d-NW-0167-2",
        "sender": "Kim Thị Như Ý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Pro\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:43"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 147,
    "viewsCount": 752,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0168",
    "officialCode": "NW-0168",
    "stt": 168,
    "word": "Rank",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 168 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Bậc xếp hạng trong trò chơi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0168-1",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": false,
        "text": "Tối nay cùng leo rank nhé.",
        "time": "21:42"
      },
      {
        "id": "d-NW-0168-2",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Rank\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:44"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 164,
    "viewsCount": 799,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0169",
    "officialCode": "NW-0169",
    "stt": 169,
    "word": "Leo rank",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 169 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cố gắng nâng thứ hạng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0169-1",
        "sender": "Thạch Thị Anh Thư",
        "isMe": false,
        "text": "Cả nhóm hẹn leo rank cuối tuần.",
        "time": "14:43"
      },
      {
        "id": "d-NW-0169-2",
        "sender": "Thạch Minh An (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Leo rank\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:45"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Cụm từ"
    ],
    "likesCount": 181,
    "viewsCount": 846,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0170",
    "officialCode": "NW-0170",
    "stt": 170,
    "word": "Carry",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 170 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Gánh đội, giúp đội chiến thắng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0170-1",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": false,
        "text": "Bạn ấy carry cả trận.",
        "time": "15:44"
      },
      {
        "id": "d-NW-0170-2",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Carry\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:46"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 198,
    "viewsCount": 893,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0171",
    "officialCode": "NW-0171",
    "stt": 171,
    "word": "Combo",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 171 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chuỗi thao tác hoặc kỹ năng kết hợp.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0171-1",
        "sender": "Thạch Khánh Vinh",
        "isMe": false,
        "text": "Cú combo đó thật đẹp mắt.",
        "time": "16:45"
      },
      {
        "id": "d-NW-0171-2",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Combo\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:47"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 35,
    "viewsCount": 940,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0172",
    "officialCode": "NW-0172",
    "stt": 172,
    "word": "Skin",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 172 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Trang phục hoặc giao diện nhân vật trong game.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0172-1",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": false,
        "text": "Mình thích skin mới của nhân vật.",
        "time": "17:46"
      },
      {
        "id": "d-NW-0172-2",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Skin\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:48"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 52,
    "viewsCount": 987,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0173",
    "officialCode": "NW-0173",
    "stt": 173,
    "word": "Gacha",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 173 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cơ chế nhận vật phẩm ngẫu nhiên trong trò chơi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0173-1",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": false,
        "text": "Bạn ấy tiết kiệm tiền để quay gacha.",
        "time": "18:47"
      },
      {
        "id": "d-NW-0173-2",
        "sender": "Thạch Minh Dàn",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Gacha\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:49"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 69,
    "viewsCount": 1034,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0174",
    "officialCode": "NW-0174",
    "stt": 174,
    "word": "Waifu",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 174 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nhân vật nữ hư cấu mà người hâm mộ đặc biệt yêu thích.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0174-1",
        "sender": "Kim Thị Như Ý",
        "isMe": false,
        "text": "Đó là waifu của bạn mình.",
        "time": "19:48"
      },
      {
        "id": "d-NW-0174-2",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Waifu\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:50"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 86,
    "viewsCount": 1081,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0175",
    "officialCode": "NW-0175",
    "stt": 175,
    "word": "Husbando",
    "category": "game_stream",
    "topicTheme": "Giải trí, game và fandom",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 175 thuộc nhóm chủ đề: \"Giải trí, game và fandom\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nhân vật nam hư cấu mà người hâm mộ đặc biệt yêu thích.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0175-1",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": false,
        "text": "Nhân vật ấy là husbando của fan.",
        "time": "20:49"
      },
      {
        "id": "d-NW-0175-2",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Husbando\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:51"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Giải trí, game và fandom",
      "Từ / thuật ngữ"
    ],
    "likesCount": 103,
    "viewsCount": 1128,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0176",
    "officialCode": "NW-0176",
    "stt": 176,
    "word": "Outfit",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 176 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Bộ trang phục được phối cho một dịp.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0176-1",
        "sender": "Thạch Minh An (11A1)",
        "isMe": false,
        "text": "Outfit hôm nay hợp trời thu.",
        "time": "21:50"
      },
      {
        "id": "d-NW-0176-2",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Outfit\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:52"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 120,
    "viewsCount": 1175,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0177",
    "officialCode": "NW-0177",
    "stt": 177,
    "word": "OOTD",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 177 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết tắt outfit of the day, trang phục trong ngày.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0177-1",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": false,
        "text": "Mình đăng OOTD lên story.",
        "time": "14:51"
      },
      {
        "id": "d-NW-0177-2",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"OOTD\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:53"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 137,
    "viewsCount": 1222,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0178",
    "officialCode": "NW-0178",
    "stt": 178,
    "word": "Aesthetic",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 178 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Phong cách hoặc cảm quan thẩm mỹ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0178-1",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": false,
        "text": "Góc học tập có aesthetic tối giản.",
        "time": "15:52"
      },
      {
        "id": "d-NW-0178-2",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Aesthetic\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:54"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 154,
    "viewsCount": 1269,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0179",
    "officialCode": "NW-0179",
    "stt": 179,
    "word": "Unbox",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 179 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Mở hộp và giới thiệu sản phẩm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0179-1",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": false,
        "text": "Hôm nay mình unbox chiếc máy ảnh.",
        "time": "16:53"
      },
      {
        "id": "d-NW-0179-2",
        "sender": "Nguyễn Phi Hùng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Unbox\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:55"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 171,
    "viewsCount": 1316,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0180",
    "officialCode": "NW-0180",
    "stt": 180,
    "word": "Review",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 180 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nhận xét, đánh giá sản phẩm hoặc trải nghiệm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0180-1",
        "sender": "Thạch Minh Dàn",
        "isMe": false,
        "text": "Bạn review cuốn sách này được không?",
        "time": "17:54"
      },
      {
        "id": "d-NW-0180-2",
        "sender": "Kim Nhật Huy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Review\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:56"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 188,
    "viewsCount": 163,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0181",
    "officialCode": "NW-0181",
    "stt": 181,
    "word": "Haul",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 181 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nội dung giới thiệu loạt món đồ đã mua.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0181-1",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": false,
        "text": "Video haul đồ dùng học tập khá hữu ích.",
        "time": "18:10"
      },
      {
        "id": "d-NW-0181-2",
        "sender": "Thạch Thị Ka",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Haul\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:12"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 25,
    "viewsCount": 210,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0182",
    "officialCode": "NW-0182",
    "stt": 182,
    "word": "Pass đồ",
    "category": "slang",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 182 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Bán lại hoặc chuyển nhượng đồ dùng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0182-1",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": false,
        "text": "Mình cần pass đồ ít sử dụng.",
        "time": "19:11"
      },
      {
        "id": "d-NW-0182-2",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Pass đồ\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:13"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ"
    ],
    "likesCount": 42,
    "viewsCount": 257,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0183",
    "officialCode": "NW-0183",
    "stt": 183,
    "word": "Dupe",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 183 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Sản phẩm có đặc điểm gần giống mẫu đắt tiền hơn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0183-1",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": false,
        "text": "Bạn ấy tìm một bản dupe phù hợp.",
        "time": "20:12"
      },
      {
        "id": "d-NW-0183-2",
        "sender": "Thạch Thiên Lâm",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Dupe\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:14"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 59,
    "viewsCount": 304,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0184",
    "officialCode": "NW-0184",
    "stt": 184,
    "word": "Blind box",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 184 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Hộp kín chứa món đồ bất ngờ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0184-1",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": false,
        "text": "Mình mở blind box được mẫu yêu thích.",
        "time": "21:13"
      },
      {
        "id": "d-NW-0184-2",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Blind box\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:15"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 76,
    "viewsCount": 351,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0185",
    "officialCode": "NW-0185",
    "stt": 185,
    "word": "Chốt đơn",
    "category": "slang",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 185 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Quyết định đặt mua hàng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0185-1",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": false,
        "text": "Ưng màu này rồi thì chốt đơn.",
        "time": "14:14"
      },
      {
        "id": "d-NW-0185-2",
        "sender": "Kiên Văn Lợi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Chốt đơn\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:16"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ"
    ],
    "likesCount": 93,
    "viewsCount": 398,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0186",
    "officialCode": "NW-0186",
    "stt": 186,
    "word": "Săn sale",
    "category": "slang",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 186 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tìm mua hàng khi giảm giá.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0186-1",
        "sender": "Nguyễn Phi Hùng",
        "isMe": false,
        "text": "Mình đợi cuối tháng để săn sale.",
        "time": "15:15"
      },
      {
        "id": "d-NW-0186-2",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Săn sale\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:17"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ"
    ],
    "likesCount": 110,
    "viewsCount": 445,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0187",
    "officialCode": "NW-0187",
    "stt": 187,
    "word": "Deal hời",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 187 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Ưu đãi được xem là đáng giá.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0187-1",
        "sender": "Kim Nhật Huy",
        "isMe": false,
        "text": "Mua được vé rẻ đúng deal hời.",
        "time": "16:16"
      },
      {
        "id": "d-NW-0187-2",
        "sender": "Kim Chăm Nanl",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Deal hời\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:18"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 127,
    "viewsCount": 492,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0188",
    "officialCode": "NW-0188",
    "stt": 188,
    "word": "Voucher",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 188 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Phiếu hoặc mã ưu đãi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0188-1",
        "sender": "Thạch Thị Ka",
        "isMe": false,
        "text": "Nhớ dùng voucher trước khi thanh toán.",
        "time": "17:17"
      },
      {
        "id": "d-NW-0188-2",
        "sender": "Thạch Thị Nga",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Voucher\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:19"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 144,
    "viewsCount": 539,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0189",
    "officialCode": "NW-0189",
    "stt": 189,
    "word": "Mã freeship",
    "category": "slang",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 189 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Mã hỗ trợ miễn hoặc giảm phí giao hàng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0189-1",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": false,
        "text": "Mình đợi mã freeship mới mua.",
        "time": "18:18"
      },
      {
        "id": "d-NW-0189-2",
        "sender": "Thạch Thị Nhi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mã freeship\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:20"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ"
    ],
    "likesCount": 161,
    "viewsCount": 586,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0190",
    "officialCode": "NW-0190",
    "stt": 190,
    "word": "Shopee haul",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 190 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Video giới thiệu nhiều món hàng mua trên Shopee.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0190-1",
        "sender": "Thạch Thiên Lâm",
        "isMe": false,
        "text": "Bạn ấy đăng Shopee haul đồ học tập.",
        "time": "19:19"
      },
      {
        "id": "d-NW-0190-2",
        "sender": "Kim Thị Tú Như",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Shopee haul\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:21"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 178,
    "viewsCount": 633,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0191",
    "officialCode": "NW-0191",
    "stt": 191,
    "word": "Order",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 191 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đặt mua hàng hóa hoặc đồ ăn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0191-1",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": false,
        "text": "Tối nay mình order đồ ăn.",
        "time": "20:20"
      },
      {
        "id": "d-NW-0191-2",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Order\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:22"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 195,
    "viewsCount": 680,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0192",
    "officialCode": "NW-0192",
    "stt": 192,
    "word": "Pre-order",
    "category": "slang",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 192 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đặt trước sản phẩm chưa phát hành hoặc chưa có sẵn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0192-1",
        "sender": "Kiên Văn Lợi",
        "isMe": false,
        "text": "Mình pre-order album mới.",
        "time": "21:21"
      },
      {
        "id": "d-NW-0192-2",
        "sender": "Kim Minh Phương",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Pre-order\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:23"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ"
    ],
    "likesCount": 32,
    "viewsCount": 727,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0193",
    "officialCode": "NW-0193",
    "stt": 193,
    "word": "Sold out",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 193 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đã bán hết hàng hoặc vé.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0193-1",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": false,
        "text": "Vé chương trình sold out rất nhanh.",
        "time": "14:22"
      },
      {
        "id": "d-NW-0193-2",
        "sender": "Thạch Minh Quý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Sold out\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:24"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 49,
    "viewsCount": 774,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0194",
    "officialCode": "NW-0194",
    "stt": 194,
    "word": "Restock",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 194 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Bổ sung hàng đã hết.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0194-1",
        "sender": "Kim Chăm Nanl",
        "isMe": false,
        "text": "Shop hẹn restock tuần sau.",
        "time": "15:23"
      },
      {
        "id": "d-NW-0194-2",
        "sender": "Thạch Thị Thia Ri",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Restock\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:25"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 66,
    "viewsCount": 821,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0195",
    "officialCode": "NW-0195",
    "stt": 195,
    "word": "Local brand",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 195 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thương hiệu nội địa, thường dùng trong thời trang.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0195-1",
        "sender": "Thạch Thị Nga",
        "isMe": false,
        "text": "Bạn ấy thích áo của local brand.",
        "time": "16:24"
      },
      {
        "id": "d-NW-0195-2",
        "sender": "Thạch Ngọc Thanh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Local brand\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:26"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 83,
    "viewsCount": 868,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0196",
    "officialCode": "NW-0196",
    "stt": 196,
    "word": "Mix and match",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 196 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Phối kết hợp trang phục, phụ kiện.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0196-1",
        "sender": "Thạch Thị Nhi",
        "isMe": false,
        "text": "Mình thích mix and match đồ cũ.",
        "time": "17:25"
      },
      {
        "id": "d-NW-0196-2",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mix and match\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:27"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 100,
    "viewsCount": 915,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0197",
    "officialCode": "NW-0197",
    "stt": 197,
    "word": "Clean girl",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 197 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Phong cách trang điểm, ăn mặc nhấn mạnh sự gọn gàng và tối giản.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0197-1",
        "sender": "Kim Thị Tú Như",
        "isMe": false,
        "text": "Bạn ấy thử phong cách clean girl.",
        "time": "18:26"
      },
      {
        "id": "d-NW-0197-2",
        "sender": "Thạch Thị Anh Thư",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Clean girl\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:28"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 117,
    "viewsCount": 962,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0198",
    "officialCode": "NW-0198",
    "stt": 198,
    "word": "Old money",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 198 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thẩm mỹ gợi sự cổ điển, kín đáo và sang trọng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0198-1",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": false,
        "text": "Bộ ảnh đi theo phong cách old money.",
        "time": "19:27"
      },
      {
        "id": "d-NW-0198-2",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Old money\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:29"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 134,
    "viewsCount": 1009,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0199",
    "officialCode": "NW-0199",
    "stt": 199,
    "word": "Y2K",
    "category": "slang",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 199 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Phong cách gợi thời trang, văn hóa đầu thập niên 2000.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0199-1",
        "sender": "Kim Minh Phương",
        "isMe": false,
        "text": "Hôm nay nhóm mặc đồ Y2K.",
        "time": "20:28"
      },
      {
        "id": "d-NW-0199-2",
        "sender": "Thạch Khánh Vinh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Y2K\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:30"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ"
    ],
    "likesCount": 151,
    "viewsCount": 1056,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0200",
    "officialCode": "NW-0200",
    "stt": 200,
    "word": "Thrift",
    "category": "borrowed",
    "topicTheme": "Tiêu dùng và phong cách",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 200 thuộc nhóm chủ đề: \"Tiêu dùng và phong cách\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Mua hoặc tìm đồ đã qua sử dụng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0200-1",
        "sender": "Thạch Minh Quý",
        "isMe": false,
        "text": "Cuối tuần mình đi thrift áo khoác.",
        "time": "21:29"
      },
      {
        "id": "d-NW-0200-2",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Thrift\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:31"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Tiêu dùng và phong cách",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 168,
    "viewsCount": 1103,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0201",
    "officialCode": "NW-0201",
    "stt": 201,
    "word": "Toxic",
    "pronunciation": "/ˈtɑːksɪk/",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Chất độc hại gây nguy hiểm tính mạng.",
    "netMeaning": "Có tác động tiêu cực, thường dùng để nhận xét hành vi hoặc môi trường.",
    "origin": "Thuật ngữ sinh học và tâm lý trị liệu, lan tỏa thành từ vựng xã hội phổ biến trên mạng.",
    "dialogueExample": [
      {
        "id": "d-NW-0201-1",
        "sender": "Thạch Thị Thia Ri",
        "isMe": false,
        "text": "Mình muốn tránh cuộc tranh luận toxic.",
        "time": "14:30"
      },
      {
        "id": "d-NW-0201-2",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Toxic\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:32"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 185,
    "viewsCount": 1150,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0202",
    "officialCode": "NW-0202",
    "stt": 202,
    "word": "Gaslighting",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 202 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thao túng khiến người khác nghi ngờ nhận thức của mình.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0202-1",
        "sender": "Thạch Ngọc Thanh",
        "isMe": false,
        "text": "Đừng vội gọi mọi tranh cãi là gaslighting.",
        "time": "15:31"
      },
      {
        "id": "d-NW-0202-2",
        "sender": "Kim Thị Như Ý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Gaslighting\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:33"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 202,
    "viewsCount": 1197,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0203",
    "officialCode": "NW-0203",
    "stt": 203,
    "word": "Boundary",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 203 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Ranh giới cá nhân trong quan hệ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0203-1",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": false,
        "text": "Mình cần nói rõ boundary của mình.",
        "time": "16:32"
      },
      {
        "id": "d-NW-0203-2",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Boundary\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:34"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 39,
    "viewsCount": 1244,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0204",
    "officialCode": "NW-0204",
    "stt": 204,
    "word": "Trigger",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 204 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Yếu tố gợi phản ứng cảm xúc mạnh hoặc ký ức khó chịu.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0204-1",
        "sender": "Thạch Thị Anh Thư",
        "isMe": false,
        "text": "Chủ đề đó có thể là trigger với ai đó.",
        "time": "17:33"
      },
      {
        "id": "d-NW-0204-2",
        "sender": "Thạch Minh An (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Trigger\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:35"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 56,
    "viewsCount": 1291,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0205",
    "officialCode": "NW-0205",
    "stt": 205,
    "word": "Safe space",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 205 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Không gian được cảm nhận là an toàn để chia sẻ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0205-1",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": false,
        "text": "Nhóm cố tạo safe space cho thành viên.",
        "time": "18:34"
      },
      {
        "id": "d-NW-0205-2",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Safe space\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:36"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 73,
    "viewsCount": 1338,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0206",
    "officialCode": "NW-0206",
    "stt": 206,
    "word": "Me time",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 206 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thời gian riêng dành cho bản thân.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0206-1",
        "sender": "Thạch Khánh Vinh",
        "isMe": false,
        "text": "Tối nay mình muốn có me time.",
        "time": "19:35"
      },
      {
        "id": "d-NW-0206-2",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Me time\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:37"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 90,
    "viewsCount": 185,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0207",
    "officialCode": "NW-0207",
    "stt": 207,
    "word": "Digital detox",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 207 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tạm giảm sử dụng thiết bị và mạng xã hội.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0207-1",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": false,
        "text": "Cuối tuần mình thử digital detox.",
        "time": "20:36"
      },
      {
        "id": "d-NW-0207-2",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Digital detox\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:38"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 107,
    "viewsCount": 232,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0208",
    "officialCode": "NW-0208",
    "stt": 208,
    "word": "Doomscrolling",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 208 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lướt liên tục nội dung tiêu cực, khó dừng lại.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0208-1",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": false,
        "text": "Đừng doomscrolling trước khi ngủ.",
        "time": "21:37"
      },
      {
        "id": "d-NW-0208-2",
        "sender": "Thạch Minh Dàn",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Doomscrolling\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:39"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 124,
    "viewsCount": 279,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0209",
    "officialCode": "NW-0209",
    "stt": 209,
    "word": "Brainrot",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 209 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nội dung ngớ ngẩn lặp đi lặp lại, hoặc trạng thái bị cuốn vào nó.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0209-1",
        "sender": "Kim Thị Như Ý",
        "isMe": false,
        "text": "Meme brainrot này cứ hiện trong đầu.",
        "time": "14:38"
      },
      {
        "id": "d-NW-0209-2",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Brainrot\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:40"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 141,
    "viewsCount": 326,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0210",
    "officialCode": "NW-0210",
    "stt": 210,
    "word": "Nghiện điện thoại",
    "category": "slang",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 210 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách nói thông tục về việc khó rời thiết bị.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0210-1",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": false,
        "text": "Mình đùa rằng mình nghiện điện thoại.",
        "time": "15:39"
      },
      {
        "id": "d-NW-0210-2",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Nghiện điện thoại\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:41"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ"
    ],
    "likesCount": 158,
    "viewsCount": 373,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0211",
    "officialCode": "NW-0211",
    "stt": 211,
    "word": "Bình yên chữa lành",
    "category": "slang",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 211 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Không gian hoặc trải nghiệm tạo cảm giác dễ chịu.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0211-1",
        "sender": "Thạch Minh An (11A1)",
        "isMe": false,
        "text": "Chiều mưa này bình yên chữa lành.",
        "time": "16:40"
      },
      {
        "id": "d-NW-0211-2",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Bình yên chữa lành\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:42"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ"
    ],
    "likesCount": 175,
    "viewsCount": 420,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0212",
    "officialCode": "NW-0212",
    "stt": 212,
    "word": "Tần số",
    "category": "slang",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 212 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Ẩn dụ về sự đồng điệu của hai người.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0212-1",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": false,
        "text": "Hai đứa mình có vẻ cùng tần số.",
        "time": "17:41"
      },
      {
        "id": "d-NW-0212-2",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Tần số\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:43"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ"
    ],
    "likesCount": 192,
    "viewsCount": 467,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0213",
    "officialCode": "NW-0213",
    "stt": 213,
    "word": "Tần số năng lượng",
    "category": "slang",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 213 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách nói ẩn dụ về trạng thái, cảm nhận cá nhân.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0213-1",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": false,
        "text": "Mình thích tần số năng lượng của nhóm.",
        "time": "18:42"
      },
      {
        "id": "d-NW-0213-2",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Tần số năng lượng\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:44"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ"
    ],
    "likesCount": 29,
    "viewsCount": 514,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0214",
    "officialCode": "NW-0214",
    "stt": 214,
    "word": "Vũ trụ gửi tín hiệu",
    "category": "slang",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Mẫu câu / cụm cố định",
    "literalMeaning": "Mục từ số 214 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách nói đùa hoặc tin rằng có dấu hiệu dẫn đường.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0214-1",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": false,
        "text": "Thấy lịch trống, mình bảo vũ trụ gửi tín hiệu.",
        "time": "19:43"
      },
      {
        "id": "d-NW-0214-2",
        "sender": "Nguyễn Phi Hùng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Vũ trụ gửi tín hiệu\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:45"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Mẫu câu / cụm cố định"
    ],
    "likesCount": 46,
    "viewsCount": 561,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0215",
    "officialCode": "NW-0215",
    "stt": 215,
    "word": "Luật hấp dẫn",
    "category": "slang",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 215 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Quan niệm rằng suy nghĩ tích cực có thể thu hút điều mong muốn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0215-1",
        "sender": "Thạch Minh Dàn",
        "isMe": false,
        "text": "Bạn ấy làm video nói về luật hấp dẫn.",
        "time": "20:44"
      },
      {
        "id": "d-NW-0215-2",
        "sender": "Kim Nhật Huy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Luật hấp dẫn\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:46"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ"
    ],
    "likesCount": 63,
    "viewsCount": 608,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0216",
    "officialCode": "NW-0216",
    "stt": 216,
    "word": "Affirmation",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 216 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lời tự khẳng định mang tính tích cực.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0216-1",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": false,
        "text": "Mình viết affirmation vào sổ tay.",
        "time": "21:45"
      },
      {
        "id": "d-NW-0216-2",
        "sender": "Thạch Thị Ka",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Affirmation\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:47"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 80,
    "viewsCount": 655,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0217",
    "officialCode": "NW-0217",
    "stt": 217,
    "word": "Journaling",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 217 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết nhật ký nhằm ghi lại suy nghĩ, cảm xúc.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0217-1",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": false,
        "text": "Journaling giúp mình sắp xếp ý nghĩ.",
        "time": "14:46"
      },
      {
        "id": "d-NW-0217-2",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Journaling\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:48"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 97,
    "viewsCount": 702,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0218",
    "officialCode": "NW-0218",
    "stt": 218,
    "word": "Mindfulness",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 218 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thực hành chú tâm đến hiện tại.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0218-1",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": false,
        "text": "Bạn ấy tập mindfulness vài phút mỗi ngày.",
        "time": "15:47"
      },
      {
        "id": "d-NW-0218-2",
        "sender": "Thạch Thiên Lâm",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mindfulness\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:49"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 114,
    "viewsCount": 749,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0219",
    "officialCode": "NW-0219",
    "stt": 219,
    "word": "Slow living",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 219 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lối sống chậm, chú trọng trải nghiệm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0219-1",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": false,
        "text": "Mình thích những video slow living.",
        "time": "16:48"
      },
      {
        "id": "d-NW-0219-2",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Slow living\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:50"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 131,
    "viewsCount": 796,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0220",
    "officialCode": "NW-0220",
    "stt": 220,
    "word": "Workaholic",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 220 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Người có xu hướng làm việc quá mức.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0220-1",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": false,
        "text": "Bạn ấy tự nhận là workaholic.",
        "time": "17:49"
      },
      {
        "id": "d-NW-0220-2",
        "sender": "Kiên Văn Lợi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Workaholic\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:51"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 148,
    "viewsCount": 843,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0221",
    "officialCode": "NW-0221",
    "stt": 221,
    "word": "Social battery",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 221 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Khả năng duy trì năng lượng khi giao tiếp.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0221-1",
        "sender": "Nguyễn Phi Hùng",
        "isMe": false,
        "text": "Social battery của mình sắp cạn.",
        "time": "18:50"
      },
      {
        "id": "d-NW-0221-2",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Social battery\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:52"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 165,
    "viewsCount": 890,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0222",
    "officialCode": "NW-0222",
    "stt": 222,
    "word": "Emotional damage",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 222 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách nói phóng đại về cảm giác bị tổn thương hoặc quê.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0222-1",
        "sender": "Kim Nhật Huy",
        "isMe": false,
        "text": "Nghe lời chê đó đúng emotional damage.",
        "time": "19:51"
      },
      {
        "id": "d-NW-0222-2",
        "sender": "Kim Chăm Nanl",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Emotional damage\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:53"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 182,
    "viewsCount": 937,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0223",
    "officialCode": "NW-0223",
    "stt": 223,
    "word": "Impostor syndrome",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 223 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cảm giác không xứng đáng với thành tích mình có.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0223-1",
        "sender": "Thạch Thị Ka",
        "isMe": false,
        "text": "Bạn ấy kể về impostor syndrome khi đi làm.",
        "time": "20:52"
      },
      {
        "id": "d-NW-0223-2",
        "sender": "Thạch Thị Nga",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Impostor syndrome\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:54"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 199,
    "viewsCount": 984,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0224",
    "officialCode": "NW-0224",
    "stt": 224,
    "word": "FOMO xã hội",
    "category": "slang",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 224 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nỗi sợ bỏ lỡ những hoạt động của bạn bè.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0224-1",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": false,
        "text": "Thấy ảnh chuyến đi, mình hơi FOMO xã hội.",
        "time": "21:53"
      },
      {
        "id": "d-NW-0224-2",
        "sender": "Thạch Thị Nhi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"FOMO xã hội\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:55"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Cụm từ"
    ],
    "likesCount": 36,
    "viewsCount": 1031,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0225",
    "officialCode": "NW-0225",
    "stt": 225,
    "word": "JOMO",
    "category": "borrowed",
    "topicTheme": "Sức khỏe tinh thần và đời sống",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 225 thuộc nhóm chủ đề: \"Sức khỏe tinh thần và đời sống\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Niềm vui khi chủ động bỏ qua một số sự kiện, hoạt động.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0225-1",
        "sender": "Thạch Thiên Lâm",
        "isMe": false,
        "text": "Ở nhà đọc sách cũng là JOMO.",
        "time": "14:54"
      },
      {
        "id": "d-NW-0225-2",
        "sender": "Kim Thị Tú Như",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"JOMO\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:56"
      }
    ],
    "academicGuidance": "Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.",
    "schoolAppropriateness": "acceptable_casual",
    "standardScore": 3,
    "tags": [
      "Chuyên đề 2",
      "Sức khỏe tinh thần và đời sống",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 53,
    "viewsCount": 1078,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0226",
    "officialCode": "NW-0226",
    "stt": 226,
    "word": "Hẹ hẹ hẹ",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 226 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách ghi tiếng cười tinh nghịch, đắc ý.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0226-1",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": false,
        "text": "Anh em mình cứ thế thôi, hẹ hẹ hẹ.",
        "time": "15:10"
      },
      {
        "id": "d-NW-0226-2",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hẹ hẹ hẹ\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:12"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 70,
    "viewsCount": 1125,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0227",
    "officialCode": "NW-0227",
    "stt": 227,
    "word": "Ủa alo",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 227 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Câu cảm thán khi bất ngờ, khó hiểu.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0227-1",
        "sender": "Kiên Văn Lợi",
        "isMe": false,
        "text": "Ủa alo, sao bài kiểm tra đổi lịch?",
        "time": "16:11"
      },
      {
        "id": "d-NW-0227-2",
        "sender": "Kim Minh Phương",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Ủa alo\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:13"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 87,
    "viewsCount": 1172,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0228",
    "officialCode": "NW-0228",
    "stt": 228,
    "word": "Cứu",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 228 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cảm thán khi gặp tình huống gây ngượng hoặc quá buồn cười.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0228-1",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": false,
        "text": "Cứu, mình gửi nhầm sticker rồi!",
        "time": "17:12"
      },
      {
        "id": "d-NW-0228-2",
        "sender": "Thạch Minh Quý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cứu\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:14"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 104,
    "viewsCount": 1219,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0229",
    "officialCode": "NW-0229",
    "stt": 229,
    "word": "7749",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Từ / thuật ngữ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 229 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chỉ số lượng rất nhiều theo cách phóng đại.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0229-1",
        "sender": "Kim Chăm Nanl",
        "isMe": false,
        "text": "Mình thử 7749 cách vẫn chưa được.",
        "time": "18:13"
      },
      {
        "id": "d-NW-0229-2",
        "sender": "Thạch Thị Thia Ri",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"7749\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:15"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Từ / thuật ngữ",
      "Meme và Xu hướng"
    ],
    "likesCount": 121,
    "viewsCount": 1266,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0230",
    "officialCode": "NW-0230",
    "stt": 230,
    "word": "Não cá vàng",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 230 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chỉ người hay quên, thường tự trào.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0230-1",
        "sender": "Thạch Thị Nga",
        "isMe": false,
        "text": "Não cá vàng nên mình quên mang bút.",
        "time": "19:14"
      },
      {
        "id": "d-NW-0230-2",
        "sender": "Thạch Ngọc Thanh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Não cá vàng\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:16"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 138,
    "viewsCount": 1313,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0231",
    "officialCode": "NW-0231",
    "stt": 231,
    "word": "Tấu hài",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 231 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nói hoặc làm điều gây cười.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0231-1",
        "sender": "Thạch Thị Nhi",
        "isMe": false,
        "text": "Nhóm bạn này suốt ngày tấu hài.",
        "time": "20:15"
      },
      {
        "id": "d-NW-0231-2",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Tấu hài\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:17"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 155,
    "viewsCount": 160,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0232",
    "officialCode": "NW-0232",
    "stt": 232,
    "word": "Vô tri",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 232 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Ngớ ngẩn, không có logic nhưng gây cười.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0232-1",
        "sender": "Kim Thị Tú Như",
        "isMe": false,
        "text": "Câu hỏi vô tri mà cả lớp cười.",
        "time": "21:16"
      },
      {
        "id": "d-NW-0232-2",
        "sender": "Thạch Thị Anh Thư",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Vô tri\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:18"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 172,
    "viewsCount": 207,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0233",
    "officialCode": "NW-0233",
    "stt": 233,
    "word": "Vô tri có tổ chức",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Mẫu câu / cụm cố định",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 233 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chỉ hành động ngớ ngẩn được chuẩn bị có chủ ý.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0233-1",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": false,
        "text": "Đây đúng là vô tri có tổ chức.",
        "time": "14:17"
      },
      {
        "id": "d-NW-0233-2",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Vô tri có tổ chức\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:19"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Mẫu câu / cụm cố định",
      "Meme và Xu hướng"
    ],
    "likesCount": 189,
    "viewsCount": 254,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0234",
    "officialCode": "NW-0234",
    "stt": 234,
    "word": "Trí thông minh giản zị",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Mẫu câu / cụm cố định",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 234 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lời mỉa mai về hành động thiếu suy nghĩ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0234-1",
        "sender": "Kim Minh Phương",
        "isMe": false,
        "text": "Pha xử lý ấy đúng trí thông minh giản zị.",
        "time": "15:18"
      },
      {
        "id": "d-NW-0234-2",
        "sender": "Thạch Khánh Vinh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Trí thông minh giản zị\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:20"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Mẫu câu / cụm cố định",
      "Meme và Xu hướng"
    ],
    "likesCount": 26,
    "viewsCount": 301,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0235",
    "officialCode": "NW-0235",
    "stt": 235,
    "word": "Chưa đủ wow",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 235 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chưa đủ mức gây ấn tượng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0235-1",
        "sender": "Thạch Minh Quý",
        "isMe": false,
        "text": "Ý tưởng này vẫn chưa đủ wow.",
        "time": "16:19"
      },
      {
        "id": "d-NW-0235-2",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Chưa đủ wow\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:21"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 43,
    "viewsCount": 348,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0236",
    "officialCode": "NW-0236",
    "stt": 236,
    "word": "Đủ wow rồi đó",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 236 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Bày tỏ sự bất ngờ hoặc khen, có thể mỉa mai.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0236-1",
        "sender": "Thạch Thị Thia Ri",
        "isMe": false,
        "text": "Phần trình diễn này đủ wow rồi đó.",
        "time": "17:20"
      },
      {
        "id": "d-NW-0236-2",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Đủ wow rồi đó\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:22"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 60,
    "viewsCount": 395,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0237",
    "officialCode": "NW-0237",
    "stt": 237,
    "word": "Mời đoàn mình lên núi",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Mẫu câu / cụm cố định",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 237 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách nói đùa khi xấu hổ hoặc muốn lánh đi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0237-1",
        "sender": "Thạch Ngọc Thanh",
        "isMe": false,
        "text": "Đọc nhầm lời nhắn, mời đoàn mình lên núi.",
        "time": "18:21"
      },
      {
        "id": "d-NW-0237-2",
        "sender": "Kim Thị Như Ý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mời đoàn mình lên núi\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:23"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Mẫu câu / cụm cố định",
      "Meme và Xu hướng"
    ],
    "likesCount": 77,
    "viewsCount": 442,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0238",
    "officialCode": "NW-0238",
    "stt": 238,
    "word": "Thua Gia Cát Lượng đúng cây quạt",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Mẫu câu / cụm cố định",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 238 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "So sánh hài hước để khen hoặc mỉa mai sự mưu trí.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0238-1",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": false,
        "text": "Bày kế vậy thua Gia Cát Lượng đúng cây quạt.",
        "time": "19:22"
      },
      {
        "id": "d-NW-0238-2",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Thua Gia Cát Lượng đúng cây quạt\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:24"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Mẫu câu / cụm cố định",
      "Meme và Xu hướng"
    ],
    "likesCount": 94,
    "viewsCount": 489,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0239",
    "officialCode": "NW-0239",
    "stt": 239,
    "word": "Anh em mình cứ thế thôi",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Mẫu câu / cụm cố định",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 239 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Mẫu câu diễn tả sự đồng lòng, đôi khi trêu đùa.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0239-1",
        "sender": "Thạch Thị Anh Thư",
        "isMe": false,
        "text": "Cả nhóm đu trend, anh em mình cứ thế thôi.",
        "time": "20:23"
      },
      {
        "id": "d-NW-0239-2",
        "sender": "Thạch Minh An (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Anh em mình cứ thế thôi\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:25"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Mẫu câu / cụm cố định",
      "Meme và Xu hướng"
    ],
    "likesCount": 111,
    "viewsCount": 536,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0240",
    "officialCode": "NW-0240",
    "stt": 240,
    "word": "Flop quá thì ghi tên anh vào",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Mẫu câu / cụm cố định",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 240 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Meme nói đùa về cách kéo chú ý cho nội dung ít tương tác.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0240-1",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": false,
        "text": "Clip ít view, bạn trêu flop quá thì ghi tên anh vào.",
        "time": "21:24"
      },
      {
        "id": "d-NW-0240-2",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Flop quá thì ghi tên anh vào\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:26"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Mẫu câu / cụm cố định",
      "Meme và Xu hướng"
    ],
    "likesCount": 128,
    "viewsCount": 583,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0241",
    "officialCode": "NW-0241",
    "stt": 241,
    "word": "Cơm nước gì chưa người đẹp",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Mẫu câu / cụm cố định",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 241 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Câu hỏi thăm dí dỏm, đôi khi dùng để bắt chuyện.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0241-1",
        "sender": "Thạch Khánh Vinh",
        "isMe": false,
        "text": "Cơm nước gì chưa người đẹp, đi ăn không?",
        "time": "14:25"
      },
      {
        "id": "d-NW-0241-2",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cơm nước gì chưa người đẹp\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:27"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Mẫu câu / cụm cố định",
      "Meme và Xu hướng"
    ],
    "likesCount": 145,
    "viewsCount": 630,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0242",
    "officialCode": "NW-0242",
    "stt": 242,
    "word": "Tôi phải gọi bạn bằng điện thoại",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Mẫu câu / cụm cố định",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 242 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lối khen đùa khi người khác vượt trội, gây bất ngờ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0242-1",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": false,
        "text": "Bạn làm bài nhanh quá, tôi phải gọi bạn bằng điện thoại.",
        "time": "15:26"
      },
      {
        "id": "d-NW-0242-2",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Tôi phải gọi bạn bằng điện thoại\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:28"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Mẫu câu / cụm cố định",
      "Meme và Xu hướng"
    ],
    "likesCount": 162,
    "viewsCount": 677,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0243",
    "officialCode": "NW-0243",
    "stt": 243,
    "word": "Nhiệm vụ hệ thống",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 243 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách đùa rằng hành động lạ là thử thách do hệ thống giao.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0243-1",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": false,
        "text": "Bạn ấy tự dưng nhảy một điệu, chắc nhiệm vụ hệ thống.",
        "time": "16:27"
      },
      {
        "id": "d-NW-0243-2",
        "sender": "Thạch Minh Dàn",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Nhiệm vụ hệ thống\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:29"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 179,
    "viewsCount": 724,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0244",
    "officialCode": "NW-0244",
    "stt": 244,
    "word": "Quê một cục",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 244 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Rất xấu hổ trước tình huống khó xử.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0244-1",
        "sender": "Kim Thị Như Ý",
        "isMe": false,
        "text": "Vấp ngay trước lớp, quê một cục.",
        "time": "17:28"
      },
      {
        "id": "d-NW-0244-2",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Quê một cục\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:30"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 196,
    "viewsCount": 771,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0245",
    "officialCode": "NW-0245",
    "stt": 245,
    "word": "Mắc cỡ giùm",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 245 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cảm thấy ngượng thay cho người khác.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0245-1",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": false,
        "text": "Nghe câu thả thính mà mắc cỡ giùm.",
        "time": "18:29"
      },
      {
        "id": "d-NW-0245-2",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mắc cỡ giùm\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:31"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 33,
    "viewsCount": 818,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0246",
    "officialCode": "NW-0246",
    "stt": 246,
    "word": "Cười xỉu",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 246 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cười quá nhiều, quá buồn cười.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0246-1",
        "sender": "Thạch Minh An (11A1)",
        "isMe": false,
        "text": "Đọc bình luận mà cười xỉu.",
        "time": "19:30"
      },
      {
        "id": "d-NW-0246-2",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cười xỉu\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:32"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 50,
    "viewsCount": 865,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0247",
    "officialCode": "NW-0247",
    "stt": 247,
    "word": "Cười nội thương",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 247 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cười quá mức theo cách phóng đại.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0247-1",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": false,
        "text": "Màn diễn ấy làm mình cười nội thương.",
        "time": "20:31"
      },
      {
        "id": "d-NW-0247-2",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cười nội thương\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:33"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 67,
    "viewsCount": 912,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0248",
    "officialCode": "NW-0248",
    "stt": 248,
    "word": "Quay xe",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 248 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đột ngột thay đổi quyết định hoặc quan điểm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0248-1",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": false,
        "text": "Thấy trời mưa nên cả nhóm quay xe.",
        "time": "21:32"
      },
      {
        "id": "d-NW-0248-2",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Quay xe\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:34"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 84,
    "viewsCount": 959,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0249",
    "officialCode": "NW-0249",
    "stt": 249,
    "word": "Lật kèo",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 249 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đảo ngược tình thế, thay đổi kết quả hoặc thỏa thuận.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0249-1",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": false,
        "text": "Đội nhà lật kèo phút cuối.",
        "time": "14:33"
      },
      {
        "id": "d-NW-0249-2",
        "sender": "Nguyễn Phi Hùng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Lật kèo\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:35"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 101,
    "viewsCount": 1006,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0250",
    "officialCode": "NW-0250",
    "stt": 250,
    "word": "Concert quốc gia",
    "category": "meme_trend",
    "topicTheme": "Meme và hài hước",
    "unitType": "Cụm từ",
    "sourceUrl": "https://tuoitre.vn/moi-nha-minh-len-nui-gium-em-he-he-he-diem-danh-nhung-cum-t",
    "literalMeaning": "Mục từ số 250 thuộc nhóm chủ đề: \"Meme và hài hước\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách gọi những sự kiện, hoạt động cộng đồng quy mô lớn tạo không khí như hòa nhạc.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0250-1",
        "sender": "Thạch Minh Dàn",
        "isMe": false,
        "text": "Nhiều bạn trẻ gọi buổi diễu hành là concert quốc gia.",
        "time": "15:34"
      },
      {
        "id": "d-NW-0250-2",
        "sender": "Kim Nhật Huy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Concert quốc gia\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:36"
      }
    ],
    "academicGuidance": "Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Meme và hài hước",
      "Cụm từ",
      "Meme và Xu hướng"
    ],
    "likesCount": 118,
    "viewsCount": 1053,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0251",
    "officialCode": "NW-0251",
    "stt": 251,
    "word": "Khum",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 251 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Biến thể viết vui của không.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0251-1",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": false,
        "text": "Mình khum biết chuyện đó.",
        "time": "16:35"
      },
      {
        "id": "d-NW-0251-2",
        "sender": "Thạch Thị Ka",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Khum\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:37"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 135,
    "viewsCount": 1100,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0252",
    "officialCode": "NW-0252",
    "stt": 252,
    "word": "Hem",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 252 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Biến thể thân mật của không.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0252-1",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": false,
        "text": "Bạn đi cùng hem?",
        "time": "17:36"
      },
      {
        "id": "d-NW-0252-2",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hem\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:38"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 152,
    "viewsCount": 1147,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0253",
    "officialCode": "NW-0253",
    "stt": 253,
    "word": "Hong",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 253 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Biến thể khẩu ngữ của không.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0253-1",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": false,
        "text": "Hôm nay bạn rảnh hong?",
        "time": "18:37"
      },
      {
        "id": "d-NW-0253-2",
        "sender": "Thạch Thiên Lâm",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hong\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:39"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 169,
    "viewsCount": 1194,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0254",
    "officialCode": "NW-0254",
    "stt": 254,
    "word": "Iu",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 254 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách viết thân mật của yêu.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0254-1",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": false,
        "text": "Mình iu chiếc áo này quá.",
        "time": "19:38"
      },
      {
        "id": "d-NW-0254-2",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Iu\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:40"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 186,
    "viewsCount": 1241,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0255",
    "officialCode": "NW-0255",
    "stt": 255,
    "word": "Bít",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 255 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách viết chệch của biết.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0255-1",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": false,
        "text": "Bạn bít quán đó không?",
        "time": "20:39"
      },
      {
        "id": "d-NW-0255-2",
        "sender": "Kiên Văn Lợi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Bít\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:41"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 203,
    "viewsCount": 1288,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0256",
    "officialCode": "NW-0256",
    "stt": 256,
    "word": "Rùi",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 256 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách viết biến đổi của rồi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0256-1",
        "sender": "Nguyễn Phi Hùng",
        "isMe": false,
        "text": "Mình làm xong rùi.",
        "time": "21:40"
      },
      {
        "id": "d-NW-0256-2",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Rùi\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:42"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 40,
    "viewsCount": 1335,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0257",
    "officialCode": "NW-0257",
    "stt": 257,
    "word": "Ròi",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 257 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách viết vui của rồi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0257-1",
        "sender": "Kim Nhật Huy",
        "isMe": false,
        "text": "Đi ăn thui, đói ròi.",
        "time": "14:41"
      },
      {
        "id": "d-NW-0257-2",
        "sender": "Kim Chăm Nanl",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Ròi\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:43"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 57,
    "viewsCount": 182,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0258",
    "officialCode": "NW-0258",
    "stt": 258,
    "word": "Thui",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 258 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách viết thân mật của thôi.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0258-1",
        "sender": "Thạch Thị Ka",
        "isMe": false,
        "text": "Hôm nay nghỉ thui.",
        "time": "15:42"
      },
      {
        "id": "d-NW-0258-2",
        "sender": "Thạch Thị Nga",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Thui\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:44"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 74,
    "viewsCount": 229,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0259",
    "officialCode": "NW-0259",
    "stt": 259,
    "word": "Lun",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 259 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Biến thể chữ viết của luôn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0259-1",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": false,
        "text": "Mình đồng ý lun.",
        "time": "16:43"
      },
      {
        "id": "d-NW-0259-2",
        "sender": "Thạch Thị Nhi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Lun\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:45"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 91,
    "viewsCount": 276,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0260",
    "officialCode": "NW-0260",
    "stt": 260,
    "word": "Zậy",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 260 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách viết chệch của vậy.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0260-1",
        "sender": "Thạch Thiên Lâm",
        "isMe": false,
        "text": "Sao lại zậy ta?",
        "time": "17:44"
      },
      {
        "id": "d-NW-0260-2",
        "sender": "Kim Thị Tú Như",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Zậy\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:46"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 108,
    "viewsCount": 323,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0261",
    "officialCode": "NW-0261",
    "stt": 261,
    "word": "Dị",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 261 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Biến thể khẩu ngữ của vậy trong một số ngữ cảnh.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0261-1",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": false,
        "text": "Sao hôm nay im lặng dị?",
        "time": "18:45"
      },
      {
        "id": "d-NW-0261-2",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Dị\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:47"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 125,
    "viewsCount": 370,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0262",
    "officialCode": "NW-0262",
    "stt": 262,
    "word": "Tui",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 262 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Đại từ khẩu ngữ tương ứng tôi, thường tạo sắc thái thân mật.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0262-1",
        "sender": "Kiên Văn Lợi",
        "isMe": false,
        "text": "Tui đang đọc sách.",
        "time": "19:46"
      },
      {
        "id": "d-NW-0262-2",
        "sender": "Kim Minh Phương",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Tui\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:48"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 142,
    "viewsCount": 417,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0263",
    "officialCode": "NW-0263",
    "stt": 263,
    "word": "Đc",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 263 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết tắt của được.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0263-1",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": false,
        "text": "Mai gặp nhau đc không?",
        "time": "20:47"
      },
      {
        "id": "d-NW-0263-2",
        "sender": "Thạch Minh Quý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Đc\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:49"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 159,
    "viewsCount": 464,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0264",
    "officialCode": "NW-0264",
    "stt": 264,
    "word": "Ko",
    "pronunciation": "/koʊ/",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Từ rút gọn của chữ ",
    "netMeaning": "Viết tắt của không.",
    "origin": "Lối gõ lười bỏ phụ âm cuối ",
    "dialogueExample": [
      {
        "id": "d-NW-0264-1",
        "sender": "Kim Chăm Nanl",
        "isMe": false,
        "text": "Bạn có đi ko?",
        "time": "21:48"
      },
      {
        "id": "d-NW-0264-2",
        "sender": "Thạch Thị Thia Ri",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Ko\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:50"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 176,
    "viewsCount": 511,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0265",
    "officialCode": "NW-0265",
    "stt": 265,
    "word": "K",
    "pronunciation": "/kaː/",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Chữ cái K trong bảng chữ cái.",
    "netMeaning": "Viết tắt rất ngắn của không.",
    "origin": "Thời kỳ nhắn tin SMS tính phí và ngôn ngữ Teencode Yahoo Messenger đầu những năm 2000.",
    "dialogueExample": [
      {
        "id": "d-NW-0265-1",
        "sender": "Thạch Thị Nga",
        "isMe": false,
        "text": "Tối nay k đi được.",
        "time": "14:49"
      },
      {
        "id": "d-NW-0265-2",
        "sender": "Thạch Ngọc Thanh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"K\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:51"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 193,
    "viewsCount": 558,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0266",
    "officialCode": "NW-0266",
    "stt": 266,
    "word": "Mn",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 266 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết tắt của mọi người.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0266-1",
        "sender": "Thạch Thị Nhi",
        "isMe": false,
        "text": "Mn nhớ nộp bài nhé.",
        "time": "15:50"
      },
      {
        "id": "d-NW-0266-2",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mn\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:52"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 30,
    "viewsCount": 605,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0267",
    "officialCode": "NW-0267",
    "stt": 267,
    "word": "Tks",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 267 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết tắt thanks, cảm ơn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0267-1",
        "sender": "Kim Thị Tú Như",
        "isMe": false,
        "text": "Tks bạn đã giúp mình.",
        "time": "16:51"
      },
      {
        "id": "d-NW-0267-2",
        "sender": "Thạch Thị Anh Thư",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Tks\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:53"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 47,
    "viewsCount": 652,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0268",
    "officialCode": "NW-0268",
    "stt": 268,
    "word": "Thx",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 268 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết tắt thanks, cảm ơn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0268-1",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": false,
        "text": "Thx vì lời nhắc nhé.",
        "time": "17:52"
      },
      {
        "id": "d-NW-0268-2",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Thx\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:54"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 64,
    "viewsCount": 699,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0269",
    "officialCode": "NW-0269",
    "stt": 269,
    "word": "Jz",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 269 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết chệch của gì vậy.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0269-1",
        "sender": "Kim Minh Phương",
        "isMe": false,
        "text": "Ủa jz, sao lại thế?",
        "time": "18:53"
      },
      {
        "id": "d-NW-0269-2",
        "sender": "Thạch Khánh Vinh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Jz\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:55"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 81,
    "viewsCount": 746,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0270",
    "officialCode": "NW-0270",
    "stt": 270,
    "word": "Jztr",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 270 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết chệch của gì vậy trời.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0270-1",
        "sender": "Thạch Minh Quý",
        "isMe": false,
        "text": "Jztr, tin này bất ngờ quá.",
        "time": "19:54"
      },
      {
        "id": "d-NW-0270-2",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Jztr\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:56"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 98,
    "viewsCount": 793,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0271",
    "officialCode": "NW-0271",
    "stt": 271,
    "word": "Ny",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 271 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết tắt của người yêu.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0271-1",
        "sender": "Thạch Thị Thia Ri",
        "isMe": false,
        "text": "Bạn ấy đi xem phim với ny.",
        "time": "20:10"
      },
      {
        "id": "d-NW-0271-2",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Ny\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:12"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 115,
    "viewsCount": 840,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0272",
    "officialCode": "NW-0272",
    "stt": 272,
    "word": "Nyc",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 272 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết tắt của người yêu cũ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0272-1",
        "sender": "Thạch Ngọc Thanh",
        "isMe": false,
        "text": "Mình không nhắc chuyện nyc nữa.",
        "time": "21:11"
      },
      {
        "id": "d-NW-0272-2",
        "sender": "Kim Thị Như Ý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Nyc\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:13"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 132,
    "viewsCount": 887,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0273",
    "officialCode": "NW-0273",
    "stt": 273,
    "word": "Kb",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 273 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết tắt có thể là kết bạn hoặc không biết, tùy ngữ cảnh.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0273-1",
        "sender": "Thạch Thị Thanh Thảo",
        "isMe": false,
        "text": "Bạn kb với mình trên mạng nhé.",
        "time": "14:12"
      },
      {
        "id": "d-NW-0273-2",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Kb\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:14"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 149,
    "viewsCount": 934,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0274",
    "officialCode": "NW-0274",
    "stt": 274,
    "word": "Mk",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 274 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Viết tắt có thể là mình, đôi khi là mật khẩu, tùy ngữ cảnh.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0274-1",
        "sender": "Thạch Thị Anh Thư",
        "isMe": false,
        "text": "Mk gửi bài sau nhé.",
        "time": "15:13"
      },
      {
        "id": "d-NW-0274-2",
        "sender": "Thạch Minh An (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Mk\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:15"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 166,
    "viewsCount": 981,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0275",
    "officialCode": "NW-0275",
    "stt": 275,
    "word": "Đỉnh kout",
    "category": "teencode",
    "topicTheme": "Biến thể chữ viết và viết tắt",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 275 thuộc nhóm chủ đề: \"Biến thể chữ viết và viết tắt\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách viết đùa, nhấn mạnh cực kỳ xuất sắc.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0275-1",
        "sender": "Thạch Thị Ngọc Trân",
        "isMe": false,
        "text": "Bức ảnh này đỉnh kout.",
        "time": "16:14"
      },
      {
        "id": "d-NW-0275-2",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Đỉnh kout\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:16"
      }
    ],
    "academicGuidance": "Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.",
    "schoolAppropriateness": "strictly_informal",
    "standardScore": 2,
    "tags": [
      "Chuyên đề 2",
      "Biến thể chữ viết và viết tắt",
      "Từ / thuật ngữ",
      "Từ viết tắt"
    ],
    "likesCount": 183,
    "viewsCount": 1028,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0276",
    "officialCode": "NW-0276",
    "stt": 276,
    "word": "Anti",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 276 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Người hoặc nhóm phản đối một nhân vật hay sản phẩm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0276-1",
        "sender": "Thạch Khánh Vinh",
        "isMe": false,
        "text": "Nhóm anti để lại nhiều bình luận.",
        "time": "17:15"
      },
      {
        "id": "d-NW-0276-2",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Anti\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:17"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 200,
    "viewsCount": 1075,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0277",
    "officialCode": "NW-0277",
    "stt": 277,
    "word": "Hater",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 277 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Người hay thể hiện sự thù ghét, chê bai.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0277-1",
        "sender": "Nguyễn Thị Tường Vy",
        "isMe": false,
        "text": "Bạn ấy phớt lờ lời của hater.",
        "time": "18:16"
      },
      {
        "id": "d-NW-0277-2",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Hater\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:18"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 37,
    "viewsCount": 1122,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0278",
    "officialCode": "NW-0278",
    "stt": 278,
    "word": "War",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 278 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tranh cãi hoặc đối đầu giữa các nhóm.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0278-1",
        "sender": "Thạch Kim Sa Wane (Ban Biên tập)",
        "isMe": false,
        "text": "Hai fandom lại war trên mạng.",
        "time": "19:17"
      },
      {
        "id": "d-NW-0278-2",
        "sender": "Thạch Minh Dàn",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"War\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:19"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 54,
    "viewsCount": 1169,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0279",
    "officialCode": "NW-0279",
    "stt": 279,
    "word": "Combat",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 279 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tranh luận hoặc đấu khẩu gay gắt.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0279-1",
        "sender": "Kim Thị Như Ý",
        "isMe": false,
        "text": "Đừng combat trong phần bình luận.",
        "time": "20:18"
      },
      {
        "id": "d-NW-0279-2",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Combat\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:20"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 71,
    "viewsCount": 1216,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0280",
    "officialCode": "NW-0280",
    "stt": 280,
    "word": "Bóc phốt",
    "category": "slang",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 280 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Công khai thông tin nhằm tố cáo hoặc chỉ trích.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0280-1",
        "sender": "Thạch Thị Ngọc Yến",
        "isMe": false,
        "text": "Bài bóc phốt cần có bằng chứng.",
        "time": "21:19"
      },
      {
        "id": "d-NW-0280-2",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Bóc phốt\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:21"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Cụm từ"
    ],
    "likesCount": 88,
    "viewsCount": 1263,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0281",
    "officialCode": "NW-0281",
    "stt": 281,
    "word": "Phốt",
    "category": "slang",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 281 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Thông tin về vụ việc tiêu cực bị công khai.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0281-1",
        "sender": "Thạch Minh An (11A1)",
        "isMe": false,
        "text": "Đừng chia sẻ phốt chưa kiểm chứng.",
        "time": "14:20"
      },
      {
        "id": "d-NW-0281-2",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Phốt\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:22"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ"
    ],
    "likesCount": 105,
    "viewsCount": 1310,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0282",
    "officialCode": "NW-0282",
    "stt": 282,
    "word": "Doxxing",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 282 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Công bố thông tin riêng của người khác khi chưa được đồng ý.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0282-1",
        "sender": "Lư Thị Trúc Anh (11A1)",
        "isMe": false,
        "text": "Doxxing có thể gây hại nghiêm trọng.",
        "time": "15:21"
      },
      {
        "id": "d-NW-0282-2",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Doxxing\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:23"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 122,
    "viewsCount": 157,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0283",
    "officialCode": "NW-0283",
    "stt": 283,
    "word": "Body shaming",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 283 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Chê bai hoặc miệt thị ngoại hình.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0283-1",
        "sender": "Kim Thị Ngọc Bích (11A2)",
        "isMe": false,
        "text": "Body shaming không phải lời góp ý.",
        "time": "16:22"
      },
      {
        "id": "d-NW-0283-2",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Body shaming\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:24"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 139,
    "viewsCount": 204,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0284",
    "officialCode": "NW-0284",
    "stt": 284,
    "word": "Cancel",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 284 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Kêu gọi ngừng ủng hộ, tẩy chay một đối tượng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0284-1",
        "sender": "Thạch Chí Cường (11A2)",
        "isMe": false,
        "text": "Một số tài khoản kêu gọi cancel nhãn hàng.",
        "time": "17:23"
      },
      {
        "id": "d-NW-0284-2",
        "sender": "Nguyễn Phi Hùng",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cancel\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:25"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 156,
    "viewsCount": 251,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0285",
    "officialCode": "NW-0285",
    "stt": 285,
    "word": "Cancel culture",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 285 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Văn hóa tẩy chay người hoặc tổ chức bị phản đối.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0285-1",
        "sender": "Thạch Minh Dàn",
        "isMe": false,
        "text": "Cả lớp tranh luận về cancel culture.",
        "time": "18:24"
      },
      {
        "id": "d-NW-0285-2",
        "sender": "Kim Nhật Huy",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cancel culture\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:26"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 173,
    "viewsCount": 298,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0286",
    "officialCode": "NW-0286",
    "stt": 286,
    "word": "Sân si",
    "category": "slang",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 286 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "So đo, soi mói, ganh tị.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0286-1",
        "sender": "Lâm Sơn Khánh Đông (Ban Biên tập)",
        "isMe": false,
        "text": "Đừng sân si chuyện riêng của họ.",
        "time": "19:25"
      },
      {
        "id": "d-NW-0286-2",
        "sender": "Thạch Thị Ka",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Sân si\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:27"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Cụm từ"
    ],
    "likesCount": 190,
    "viewsCount": 345,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0287",
    "officialCode": "NW-0287",
    "stt": 287,
    "word": "Khịa",
    "category": "slang",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 287 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nói móc, châm chọc gián tiếp.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0287-1",
        "sender": "Thạch Thị Ngọc Giàu (Ban Biên tập)",
        "isMe": false,
        "text": "Câu bình luận đó đang khịa ai?",
        "time": "20:26"
      },
      {
        "id": "d-NW-0287-2",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Khịa\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:28"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ"
    ],
    "likesCount": 27,
    "viewsCount": 392,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0288",
    "officialCode": "NW-0288",
    "stt": 288,
    "word": "Cà khịa",
    "category": "slang",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 288 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Trêu chọc hoặc nói móc, có thể vui hay gây hấn.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0288-1",
        "sender": "Kim Thị Diễm Hằng",
        "isMe": false,
        "text": "Hai bạn cà khịa nhau cho vui.",
        "time": "21:27"
      },
      {
        "id": "d-NW-0288-2",
        "sender": "Thạch Thiên Lâm",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Cà khịa\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:29"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Cụm từ"
    ],
    "likesCount": 44,
    "viewsCount": 439,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0289",
    "officialCode": "NW-0289",
    "stt": 289,
    "word": "Troll",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 289 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Trêu chọc để gây phản ứng; có thể gây khó chịu.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0289-1",
        "sender": "Thạch Thị Diễm Hằng",
        "isMe": false,
        "text": "Đừng troll người mới quá đà.",
        "time": "14:28"
      },
      {
        "id": "d-NW-0289-2",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Troll\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:30"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 61,
    "viewsCount": 486,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0290",
    "officialCode": "NW-0290",
    "stt": 290,
    "word": "Bait",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 290 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nội dung giăng mồi để dụ người khác phản ứng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0290-1",
        "sender": "Thạch Hoàng Hiếu",
        "isMe": false,
        "text": "Tiêu đề này giống bait tương tác.",
        "time": "15:29"
      },
      {
        "id": "d-NW-0290-2",
        "sender": "Kiên Văn Lợi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Bait\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:31"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 78,
    "viewsCount": 533,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0291",
    "officialCode": "NW-0291",
    "stt": 291,
    "word": "Rage bait",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 291 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Nội dung cố tình chọc tức để kéo tương tác.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0291-1",
        "sender": "Nguyễn Phi Hùng",
        "isMe": false,
        "text": "Đừng chia sẻ rage bait vô căn cứ.",
        "time": "16:30"
      },
      {
        "id": "d-NW-0291-2",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Rage bait\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:32"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 95,
    "viewsCount": 580,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0292",
    "officialCode": "NW-0292",
    "stt": 292,
    "word": "Clickbait",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 292 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tiêu đề giật gân nhằm dụ người dùng nhấp vào.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0292-1",
        "sender": "Kim Nhật Huy",
        "isMe": false,
        "text": "Bài đó dùng clickbait quá mức.",
        "time": "17:31"
      },
      {
        "id": "d-NW-0292-2",
        "sender": "Kim Chăm Nanl",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Clickbait\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:33"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 112,
    "viewsCount": 627,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0293",
    "officialCode": "NW-0293",
    "stt": 293,
    "word": "Scam",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 293 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Lừa đảo hoặc hành vi có dấu hiệu lừa đảo.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0293-1",
        "sender": "Thạch Thị Ka",
        "isMe": false,
        "text": "Kiểm tra kỹ để tránh scam nhé.",
        "time": "18:32"
      },
      {
        "id": "d-NW-0293-2",
        "sender": "Thạch Thị Nga",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Scam\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "18:34"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 129,
    "viewsCount": 674,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0294",
    "officialCode": "NW-0294",
    "stt": 294,
    "word": "Fake news",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 294 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tin giả, thông tin sai lệch được trình bày như tin tức.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0294-1",
        "sender": "Thạch Thị Trúc Lan",
        "isMe": false,
        "text": "Đừng lan truyền fake news.",
        "time": "19:33"
      },
      {
        "id": "d-NW-0294-2",
        "sender": "Thạch Thị Nhi",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Fake news\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "19:35"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Cụm từ",
      "Từ mượn"
    ],
    "likesCount": 146,
    "viewsCount": 721,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0295",
    "officialCode": "NW-0295",
    "stt": 295,
    "word": "Fact-check",
    "category": "slang",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 295 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Kiểm tra độ xác thực của thông tin.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0295-1",
        "sender": "Thạch Thiên Lâm",
        "isMe": false,
        "text": "Nhóm cần fact-check trước khi đăng.",
        "time": "20:34"
      },
      {
        "id": "d-NW-0295-2",
        "sender": "Kim Thị Tú Như",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Fact-check\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "20:36"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ"
    ],
    "likesCount": 163,
    "viewsCount": 768,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0296",
    "officialCode": "NW-0296",
    "stt": 296,
    "word": "Phông bạt",
    "category": "slang",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 296 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Khoe khoang, tạo hình ảnh hào nhoáng không sát thực tế.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0296-1",
        "sender": "Phạm Thị Thùy Linh",
        "isMe": false,
        "text": "Đừng phông bạt thành tích của mình.",
        "time": "21:35"
      },
      {
        "id": "d-NW-0296-2",
        "sender": "Nguyễn Mai Nhựt Phong",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Phông bạt\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "21:37"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Cụm từ"
    ],
    "likesCount": 180,
    "viewsCount": 815,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0297",
    "officialCode": "NW-0297",
    "stt": 297,
    "word": "Sống ảo",
    "category": "slang",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 297 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tập trung xây dựng hình ảnh trên mạng, đôi khi trái thực tế.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0297-1",
        "sender": "Kiên Văn Lợi",
        "isMe": false,
        "text": "Bức ảnh bị chê là sống ảo quá đà.",
        "time": "14:36"
      },
      {
        "id": "d-NW-0297-2",
        "sender": "Kim Minh Phương",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Sống ảo\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "14:38"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Cụm từ"
    ],
    "likesCount": 197,
    "viewsCount": 862,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0298",
    "officialCode": "NW-0298",
    "stt": 298,
    "word": "Seeding bẩn",
    "category": "slang",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Cụm từ",
    "literalMeaning": "Mục từ số 298 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Tạo bình luận, thảo luận giả tạo nhằm dẫn dắt dư luận.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0298-1",
        "sender": "Thạch Thị Huỳnh Mai",
        "isMe": false,
        "text": "Chiến dịch bị nghi seeding bẩn.",
        "time": "15:37"
      },
      {
        "id": "d-NW-0298-2",
        "sender": "Thạch Minh Quý",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Seeding bẩn\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "15:39"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Cụm từ"
    ],
    "likesCount": 34,
    "viewsCount": 909,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0299",
    "officialCode": "NW-0299",
    "stt": 299,
    "word": "Report",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 299 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Báo cáo nội dung hoặc tài khoản vi phạm quy định nền tảng.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0299-1",
        "sender": "Kim Chăm Nanl",
        "isMe": false,
        "text": "Nếu bị quấy rối, hãy report tài khoản.",
        "time": "16:38"
      },
      {
        "id": "d-NW-0299-2",
        "sender": "Thạch Thị Thia Ri",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Report\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "16:40"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 51,
    "viewsCount": 956,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  },
  {
    "id": "nw-0300",
    "officialCode": "NW-0300",
    "stt": 300,
    "word": "Shadowban",
    "category": "borrowed",
    "topicTheme": "Xung đột và chuẩn mực mạng",
    "unitType": "Từ / thuật ngữ",
    "literalMeaning": "Mục từ số 300 thuộc nhóm chủ đề: \"Xung đột và chuẩn mực mạng\" trong Chuyên đề 2 Ngữ văn 11.",
    "netMeaning": "Cách người dùng gọi hiện tượng nội dung bị giảm hiển thị mà không được thông báo rõ.",
    "origin": "Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).",
    "dialogueExample": [
      {
        "id": "d-NW-0300-1",
        "sender": "Thạch Thị Nga",
        "isMe": false,
        "text": "Bạn ấy nghi tài khoản bị shadowban.",
        "time": "17:39"
      },
      {
        "id": "d-NW-0300-2",
        "sender": "Thạch Ngọc Thanh",
        "isMe": true,
        "text": "Chuẩn luôn bạn ơi, từ \"Shadowban\" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!",
        "time": "17:41"
      }
    ],
    "academicGuidance": "Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.",
    "schoolAppropriateness": "forbidden_in_formal",
    "standardScore": 1,
    "tags": [
      "Chuyên đề 2",
      "Xung đột và chuẩn mực mạng",
      "Từ / thuật ngữ",
      "Từ mượn"
    ],
    "likesCount": 68,
    "viewsCount": 1003,
    "status": "approved",
    "author": "Trầm Thanh Tuấn (GV Ngữ văn)",
    "createdAt": "2025-02-15"
  }
];
