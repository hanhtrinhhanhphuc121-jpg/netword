/**
 * NETWORD - Dữ liệu Từ điển Ngôn ngữ trên không gian mạng dành cho học sinh THPT
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển và Thẩm định: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 * 
 * Nguồn tài liệu chính thức: Tu_dien_300_tu_ngu_gioi_tre_NETWORD.pdf
 * Gồm toàn bộ 300 mục từ (NW-0001 -> NW-0300) phân theo 12 Nhóm chủ đề chuyên đề.
 */

import { WordEntry, ChallengeQuestion } from '../types';
import { NETWORD_300_ENTRIES, NETWORD_TOPIC_THEMES } from './netword300Entries';

export { NETWORD_300_ENTRIES, NETWORD_TOPIC_THEMES };

// 300 mục từ chính thức được tải trực tiếp từ bộ dữ liệu Chuyên đề 2
export const INITIAL_WORDS: WordEntry[] = NETWORD_300_ENTRIES;

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
    unitLesson: 'Ngữ văn 11 - Chuyên đề 2: Ngôn ngữ trong đời sống hiện đại và Phong cách ngôn ngữ hành chính.'
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
    label: 'Viết tắt và Teencode',
    color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    desc: 'Ký hiệu, chữ viết tắt sinh động trên không gian số'
  },
  meme_trend: {
    label: 'Xu hướng và Meme MXH',
    color: 'bg-pink-100 text-pink-700 border-pink-200',
    desc: 'Bắt nguồn từ trào lưu TikTok, Facebook, YouTube'
  },
  borrowed: {
    label: 'Từ mượn và Chuyển mã',
    color: 'bg-blue-100 text-blue-700 border-blue-200',
    desc: 'Vay mượn tiếng Anh được tái cấu trúc ngữ nghĩa'
  },
  game_stream: {
    label: 'Thuật ngữ Game và Stream',
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
    label: 'Cấm dùng trong thi cử và văn bản',
    color: 'text-rose-700 bg-rose-50 border-rose-200',
    badge: 'Tuyệt đối cấm trong bài thi'
  }
};
