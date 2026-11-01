/**
 * NETWORD - Dịch vụ "Diễn đạt phù hợp" (Contextual Expression Advisor)
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 * 
 * NGUYÊN TẮC SƯ PHẠM CỐT LÕI:
 * 1. Không khẳng định mọi tiếng lóng đều sai: Tiếng lóng có giá trị riêng biệt trong văn hóa nhóm bạn bè.
 * 2. Không tự ý thay đổi ý nghĩa câu gốc: Giữ nguyên mục đích phát ngôn và tình cảm biểu đạt.
 * 3. Nếu thiếu dữ liệu, báo rõ chưa đủ căn cứ từ điển đã duyệt.
 * 4. Nếu dùng AI, gắn nhãn gợi ý tự động rõ ràng và qua quy trình kiểm soát nội dung học đường.
 */

import {
  ExpressionContext,
  ContextDefinition,
  ExpressionAnalysisResult,
  DetectedTermMatch,
  SampleExpressionPrompt,
} from '../types/expression';
import { INITIAL_WORDS } from '../data/initialWords';

// Định nghĩa 5 ngữ cảnh giao tiếp theo yêu cầu Chuyên đề 2
export const CONTEXT_DEFINITIONS: Record<ExpressionContext, ContextDefinition> = {
  friend_chat: {
    id: 'friend_chat',
    label: 'Trò chuyện với bạn bè',
    shortDesc: 'Giao tiếp thân mật, vui tươi, thoải mái ngoài giờ học',
    iconName: 'Users',
    tone: 'Thân mật, cởi mở, tự nhiên, gắn kết',
    targetAudience: 'Bạn học cùng trang lứa, nhóm bạn thân',
    principles: [
      'Chấp nhận tiếng lóng vui tươi, lành mạnh để tạo tiếng cười và gắn kết.',
      'Không khẳng định tiếng lóng là sai trong ngữ cảnh này.',
      'Tránh các từ ngữ thô tục, quá đà gây hiểu lầm hoặc phản cảm.',
      'Giữ sự trong sáng qua việc diễn đạt hóm hỉnh mà không lạm dụng từ ngoại lai.'
    ]
  },
  social_comment: {
    id: 'social_comment',
    label: 'Bình luận mạng xã hội',
    shortDesc: 'Không gian mạng công cộng (Facebook, TikTok, diễn đàn học sinh)',
    iconName: 'MessageSquare',
    tone: 'Văn minh, lịch sự, tôn trọng, có chừng mực',
    targetAudience: 'Cộng đồng mạng, thầy cô, phụ huynh và học sinh các trường khác',
    principles: [
      'Bình luận văn minh, thể hiện tư duy phản biện tích cực của học sinh THPT.',
      'Tránh hùa theo các trào lưu tiêu cực, công kích cá nhân hay xúc phạm uy tín.',
      'Ngôn ngữ có thể hài hước nhưng cần chuẩn mực và giữ hình ảnh người học sinh.'
    ]
  },
  teacher_exchange: {
    id: 'teacher_exchange',
    label: 'Trao đổi với thầy cô',
    shortDesc: 'Tin nhắn Zalo/Email, hỏi bài, xin phép thầy cô giáo',
    iconName: 'GraduationCap',
    tone: 'Lễ phép, kính trọng, khiêm tốn, nghiêm túc',
    targetAudience: 'Thầy cô giáo bộ môn, Giáo viên chủ nhiệm, Ban Giám hiệu',
    principles: [
      'Sử dụng kính ngữ trang trọng: "Kính gửi", "Thưa thầy/cô", "ạ".',
      'Tuyệt đối KHÔNG chêm xen tiếng lóng, từ mượn mạng xã hội hay chữ viết tắt teencode.',
      'Trình bày mục đích rõ ràng, ngắn gọn, mạch lạc, đúng nghi thức sư phạm học đường.'
    ]
  },
  class_announcement: {
    id: 'class_announcement',
    label: 'Thông báo của lớp',
    shortDesc: 'Nhóm Zalo lớp, bảng tin lớp, thông báo của Ban cán sự',
    iconName: 'Megaphone',
    tone: 'Rõ ràng, khúc chiết, chuẩn mực, tinh thần tập thể',
    targetAudience: 'Toàn thể học sinh trong lớp, tập thể phụ huynh học sinh',
    principles: [
      'Thông tin chính xác về thời gian, địa điểm, nhiệm vụ được giao.',
      'Dùng tiếng Việt chuẩn mực, tránh viết tắt teencode để ai đọc cũng hiểu ngay.',
      'Giọng văn vừa trang trọng vừa khích lệ tinh thần đoàn kết của tập thể.'
    ]
  },
  academic_writing: {
    id: 'academic_writing',
    label: 'Bài viết học tập',
    shortDesc: 'Bài tập làm văn, bài nghị luận xã hội, bài thuyết trình Ngữ văn 11',
    iconName: 'BookMarked',
    tone: 'Học thuật, logic, khúc chiết, giàu hình ảnh biểu đạt chuẩn mực',
    targetAudience: 'Giáo viên chấm bài, Hội đồng giám khảo, người đọc học thuật',
    principles: [
      'Sử dụng hoàn toàn từ ngữ toàn dân chính thống, cấu trúc câu ngữ pháp chuẩn xác.',
      'Tiếng lóng và từ ngữ mạng CHỈ ĐƯỢC PHÉP xuất hiện trong dấu ngoặc kép ("") với vai trò là dẫn chứng thực tế để khảo sát, phân tích, phản biện.',
      'Thể hiện năng lực lập luận, vốn từ vựng phong phú và ý thức bảo vệ sự trong sáng của Tiếng Việt.'
    ]
  }
};

// Từ điển chuyển đổi ngữ cảnh được Hội đồng sư phạm Ngữ văn 11 (Thầy Trầm Thanh Tuấn) duyệt
interface ApprovedTermRule {
  term: string;
  aliases: string[];
  category: string;
  isSensitive?: boolean;
  mappings: Record<ExpressionContext, {
    replacement: string;
    explanation: string;
    pedagogicalGuidance: string;
    keepSlangAcceptable?: boolean;
  }>;
}

const APPROVED_TERM_RULES: ApprovedTermRule[] = [
  {
    term: 'Flex',
    aliases: ['flex', 'flếch', 'phờ lếch'],
    category: 'Từ mượn tiếng Anh',
    mappings: {
      friend_chat: {
        replacement: 'khoe khéo / chia sẻ niềm vui',
        explanation: 'Trong trò chuyện với bạn bè, dùng "flex" tạo sắc thái trêu đùa vui vẻ. Bạn hoàn toàn có thể giữ từ này nếu nói với bạn thân, hoặc chuyển thành "khoe khéo" nếu muốn tế nhị.',
        pedagogicalGuidance: 'Tiếng lóng này không sai trong tán gẫu bạn bè, nhưng cần tránh thói tự phụ phô trương thật sự.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'chia sẻ thành tích / lan tỏa năng lượng tích cực',
        explanation: 'Trên không gian mạng công cộng, thay từ "flex" bằng cụm từ khẳng định giá trị nỗ lực sẽ giúp bạn để lại ấn tượng văn minh và truyền cảm hứng hơn.',
        pedagogicalGuidance: 'Thể hiện thái độ khiêm tốn trên mạng xã hội.'
      },
      teacher_exchange: {
        replacement: 'chia sẻ kết quả học tập / báo cáo thành tích đã đạt được',
        explanation: 'Khi trao đổi với thầy cô, dùng cụm từ nghiêm túc "báo cáo kết quả / chia sẻ niềm vui học tập" thể hiện sự tôn trọng và tính lễ phép học đường.',
        pedagogicalGuidance: 'Tuyệt đối không dùng từ lóng "flex" khi nhắn tin cho giáo viên.'
      },
      class_announcement: {
        replacement: 'biểu dương thành tích / chia sẻ gương sáng học tập',
        explanation: 'Trong thông báo chung của lớp, cần dùng từ mang tính động viên tập thể như "biểu dương", "chúc mừng thành tích tiêu biểu".',
        pedagogicalGuidance: 'Tạo động lực thi đua học tập lành mạnh cho cả tập thể.'
      },
      academic_writing: {
        replacement: 'hiện tượng phô trương thành tích cá nhân trên không gian mạng',
        explanation: 'Trong bài văn nghị luận xã hội, "flex" được chuyển thành hiện tượng tâm lý xã hội để phân tích hai mặt: tự hào chính đáng và thói chuộng hư danh.',
        pedagogicalGuidance: 'Chỉ đặt từ "flex" trong dấu ngoặc kép để làm đối tượng khảo sát ngôn ngữ.'
      }
    }
  },
  {
    term: 'Check var',
    aliases: ['check var', 'checkvar', 'sao kê var'],
    category: 'Thuật ngữ bóng đá chuyển nghĩa',
    mappings: {
      friend_chat: {
        replacement: 'soi lại tin nhắn / kiểm tra chứng cứ đùa vui',
        explanation: 'Với bạn bè, "check var" là cách đối đáp hài hước nhằm bắt lỗi vui. Hoàn toàn được chấp nhận trong nhóm bạn.',
        pedagogicalGuidance: 'Tránh soi mói chuyện riêng tư gây rạn nứt tình bạn.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'đối chiếu thông tin / xác minh nguồn gốc sự việc',
        explanation: 'Giúp bình luận có sức nặng, tính thuyết phục và tinh thần thượng tôn sự thật thay vì cãi vã.',
        pedagogicalGuidance: 'Thể hiện năng lực kiểm chứng thông tin thời đại số.'
      },
      teacher_exchange: {
        replacement: 'kính nhờ Thầy/Cô kiểm tra, đối chiếu lại thông tin giúp em',
        explanation: 'Dùng từ ngữ lễ độ, thể hiện mong muốn được thầy cô hỗ trợ xác minh một cách khiêm tốn.',
        pedagogicalGuidance: 'Không dùng từ lóng bóng đá khi làm việc với giáo viên.'
      },
      class_announcement: {
        replacement: 'rà soát và đối chiếu lại dữ liệu / danh sách đã nộp',
        explanation: 'Từ ngữ hành chính học đường chuẩn xác giúp toàn bộ học sinh và cán sự lớp nắm rõ yêu cầu.',
        pedagogicalGuidance: 'Rõ ràng, chuyên nghiệp trong công tác cán sự lớp.'
      },
      academic_writing: {
        replacement: 'thao tác kiểm chứng tính xác thực và đối chiếu dữ liệu thực tế',
        explanation: 'Chuyển hóa thành thuật ngữ nghiên cứu khoa học xã hội về tính minh bạch thông tin.',
        pedagogicalGuidance: 'Đặt trong ngoặc kép nếu phân tích như một trào lưu ngôn ngữ.'
      }
    }
  },
  {
    term: 'Cột sống',
    aliases: ['cột sống', 'cot song'],
    category: 'Chơi chữ đồng âm (cuộc sống)',
    mappings: {
      friend_chat: {
        replacement: 'cuộc sống dạo này / áp lực học tập mệt mỏi',
        explanation: 'Đây là lối chơi chữ dí dỏm than vãn của học sinh khi làm nhiều bài tập. Trong nhóm bạn rất thú vị và gây cười.',
        pedagogicalGuidance: 'Khuyến khích cách chơi chữ lành mạnh nhưng nhớ viết đúng chính tả.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'nhịp sống và áp lực công việc, học tập hiện đại',
        explanation: 'Chuyển thành từ toàn dân giúp người đọc mọi lứa tuổi đều thấu hiểu thông điệp của bạn.',
        pedagogicalGuidance: 'Không biến lời than vãn thành năng lượng tiêu cực lan tỏa.'
      },
      teacher_exchange: {
        replacement: 'dạo này sức khỏe của em hơi mệt mỏi / em cảm thấy bị áp lực ạ',
        explanation: 'Khi thưa chuyện với thầy cô, phải viết đúng từ ngữ chuẩn xác chỉ sức khỏe hoặc tinh thần, tránh chơi chữ bông đùa.',
        pedagogicalGuidance: 'Thầy cô sẽ hiểu rõ và kịp thời động viên, hỗ trợ sức khỏe cho em.'
      },
      class_announcement: {
        replacement: 'tình hình sức khỏe và phân bổ thời gian học tập hợp lý',
        explanation: 'Thông báo lớp cần hướng đến giải pháp cân bằng giờ học và giờ nghỉ ngơi.',
        pedagogicalGuidance: 'Nhắc nhở bạn bè giữ gìn sức khỏe mùa thi cử.'
      },
      academic_writing: {
        replacement: 'áp lực đời sống và gánh nặng tâm lý của thế hệ trẻ',
        explanation: 'Dùng từ vựng chuẩn mực triết học - xã hội học để bình luận về cuộc sống hiện đại.',
        pedagogicalGuidance: 'Phân tích cơ chế chơi chữ đồng âm ngữ âm nếu đề bài yêu cầu khảo sát.'
      }
    }
  },
  {
    term: 'Ét ô ét',
    aliases: ['ét ô ét', 'ét o ét', 'sos', 'et o et', 'ét o ét cứu'],
    category: 'Meme mạng xã hội',
    mappings: {
      friend_chat: {
        replacement: 'cứu bồ tớ với / giúp mình một tay với',
        explanation: 'Một khẩu ngữ meme vui nhộn khi gặp bài tập khó hoặc tình huống trớ trêu giữa bạn bè.',
        pedagogicalGuidance: 'Không nên lạm dụng quá nhiều làm loãng nội dung trao đổi.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'rất mong nhận được sự hỗ trợ / cần lời khuyên của mọi người',
        explanation: 'Cách diễn đạt chân thành sẽ nhận được nhiều sự tương trợ thiện chí hơn.',
        pedagogicalGuidance: 'Giữ tính lịch sự khi nhờ vả trên không gian mạng.'
      },
      teacher_exchange: {
        replacement: 'em kính nhờ Thầy/Cô hướng dẫn và giải đáp thắc mắc thêm giúp em ạ',
        explanation: 'Thể hiện tinh thần cầu tiến, hiếu học và sự tôn sư trọng đạo.',
        pedagogicalGuidance: 'Tuyệt đối không dùng tín hiệu cấp cứu giả làm trò đùa với thầy cô.'
      },
      class_announcement: {
        replacement: 'thông báo cần sự hỗ trợ gấp từ các bạn trong lớp',
        explanation: 'Thông báo rõ ràng việc gì cần giúp để các tổ cùng chung tay phối hợp.',
        pedagogicalGuidance: 'Tính khẩn trương nhưng rõ ràng về mặt hành chính lớp.'
      },
      academic_writing: {
        replacement: 'lời thỉnh cầu trợ giúp khẩn thiết trước hoàn cảnh gian nan',
        explanation: 'Trong văn học, chuyển thành trạng thái cần sự đồng cảm, tương thân tương ái.',
        pedagogicalGuidance: 'Tuyệt đối không đưa khẩu ngữ TikTok vào bài làm văn.'
      }
    }
  },
  {
    term: 'Chữa lành',
    aliases: ['chữa lành', 'chua lanh', 'healing'],
    category: 'Mở rộng ngữ nghĩa / Từ mượn',
    mappings: {
      friend_chat: {
        replacement: 'thư giãn / nghỉ ngơi / giải tỏa căng thẳng',
        explanation: 'Học sinh hay dùng để rủ nhau đi trà sữa, tán gẫu sau giờ thi. Rất tự nhiên và ấm áp.',
        pedagogicalGuidance: 'Tạo bầu không khí tích cực cho tình bạn học đường.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'tìm lại sự bình yên trong tâm hồn / phục hồi năng lượng sống',
        explanation: 'Từ ngữ giàu chất thơ và tính nhân văn, phù hợp các bài đăng chia sẻ cảm xúc.',
        pedagogicalGuidance: 'Tránh biến chữa lành thành trào lưu tiêu dùng hình thức.'
      },
      teacher_exchange: {
        replacement: 'nghỉ ngơi để lấy lại năng lượng và tinh thần học tập tốt nhất ạ',
        explanation: 'Báo cáo với thầy cô về việc học sinh biết chủ động cân bằng việc học và nghỉ ngơi.',
        pedagogicalGuidance: 'Diễn đạt đứng đắn, thể hiện sự chín chắn trong lối sống.'
      },
      class_announcement: {
        replacement: 'hoạt động ngoại khóa và vui chơi gắn kết tập thể lớp',
        explanation: 'Định hướng các hoạt động tập thể mang lại niềm vui thực sự cho cả lớp.',
        pedagogicalGuidance: 'Gắn kết học sinh bằng những trải nghiệm học đường ý nghĩa.'
      },
      academic_writing: {
        replacement: 'quá trình tự hàn gắn những tổn thương tinh thần và nuôi dưỡng tâm hồn',
        explanation: 'Đặt trong chủ đề văn học và tâm lý học nhân văn để phân tích chiều sâu nghị luận.',
        pedagogicalGuidance: 'Phân biệt giữa giá trị chữa lành đích thực và thói a dua trào lưu.'
      }
    }
  },
  {
    term: 'Xu cà na',
    aliases: ['xu cà na', 'xucana', 'xu ca na'],
    category: 'Khẩu ngữ Nam Bộ chơi chữ',
    mappings: {
      friend_chat: {
        replacement: 'xui xẻo / không may mắn ghê',
        explanation: 'Khẩu ngữ Nam Bộ hóm hỉnh tạo cảm giác gần gũi, chia sẻ nỗi buồn vui với bạn thân.',
        pedagogicalGuidance: 'Mang nét đặc trưng giao tiếp phương ngữ vui vẻ.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'sự cố ngoài ý muốn / trải nghiệm kém may mắn',
        explanation: 'Vừa giữ được sự hóm hỉnh vừa chuẩn mực hơn trên mạng xã hội.',
        pedagogicalGuidance: 'Thái độ lạc quan khi đối diện với chuyện không may.'
      },
      teacher_exchange: {
        replacement: 'em không may gặp sự cố đột xuất ngoài ý muốn ạ',
        explanation: 'Trình bày sự cố với thầy cô một cách trang trọng, nghiêm túc.',
        pedagogicalGuidance: 'Không đem khẩu ngữ quả cà na chua chát vào tin nhắn cho thầy cô.'
      },
      class_announcement: {
        replacement: 'sự cố phát sinh ngoài dự kiến của ban tổ chức',
        explanation: 'Rõ ràng, khách quan khi thông báo sự cố của lớp.',
        pedagogicalGuidance: 'Giữ tính chuyên nghiệp cho thông báo lớp học.'
      },
      academic_writing: {
        replacement: 'hoàn cảnh trớ trêu, rủi ro bất ngờ trong hiện thực đời sống',
        explanation: 'Chuyển hóa thành từ ngữ văn học chuẩn mực diễn tả bước thăng trầm của số phận.',
        pedagogicalGuidance: 'Tuyệt đối cấm dùng trong bài tập làm văn chính quy.'
      }
    }
  },
  {
    term: 'Pressing',
    aliases: ['pressing', 'bị pressing', 'bắt bài pressing'],
    category: 'Từ mượn thể thao chuyển nghĩa',
    mappings: {
      friend_chat: {
        replacement: 'vặn vẹo / dồn ép bằng lý lẽ sắc bén',
        explanation: 'Mô tả cuộc đối đáp gay cấn giữa bạn bè một cách sinh động.',
        pedagogicalGuidance: 'Tranh luận để hiểu nhau hơn, không biến thành cãi vã.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'tranh luận dồn dập / phản biện sắc bén',
        explanation: 'Thể hiện một tinh thần thảo luận có chiều sâu và dựa trên lý chứng.',
        pedagogicalGuidance: 'Tranh luận văn minh, tôn trọng người khác.'
      },
      teacher_exchange: {
        replacement: 'được Thầy/Cô chỉ ra những điểm chưa chặt chẽ trong bài làm ạ',
        explanation: 'Thái độ tiếp thu lời chỉ dạy và phản biện học thuật từ giáo viên.',
        pedagogicalGuidance: 'Kính trọng và biết ơn khi thầy cô sửa sai cho mình.'
      },
      class_announcement: {
        replacement: 'nhắc nhở và đôn đốc nghiêm túc tiến độ công việc',
        explanation: 'Thông báo lớp cần mang tính nhắc nhở trách nhiệm chung.',
        pedagogicalGuidance: 'Khuyến khích bạn bè hoàn thành đúng thời hạn.'
      },
      academic_writing: {
        replacement: 'nghệ thuật phản biện sắc sảo và tạo sức ép lập luận trong tranh biện',
        explanation: 'Phân tích phương pháp lập luận logic, chặt chẽ trong văn nghị luận.',
        pedagogicalGuidance: 'Chuyển thuật ngữ thể thao thành phạm trù tu từ học.'
      }
    }
  },
  {
    term: 'Xịt keo',
    aliases: ['xịt keo', 'xit keo', 'xịt keo cứng ngắc'],
    category: 'Meme ẩn dụ hình thể',
    mappings: {
      friend_chat: {
        replacement: 'đứng hình / bất ngờ câm nín luôn',
        explanation: 'Ẩn dụ hình tượng mặt đơ cứng như dán keo, tạo tiếng cười sảng khoái khi tán gẫu.',
        pedagogicalGuidance: 'Tạo sự gắn kết bằng những quan sát hóm hỉnh.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'ngỡ ngàng / vô cùng bất ngờ trước tình huống',
        explanation: 'Diễn tả cảm xúc ngạc nhiên rõ ràng, dễ hiểu cho mọi lứa tuổi.',
        pedagogicalGuidance: 'Biểu đạt cảm xúc chừng mực.'
      },
      teacher_exchange: {
        replacement: 'vô cùng ngạc nhiên và bối rối trước tình huống ạ',
        explanation: 'Bày tỏ sự bối rối trước thầy cô bằng từ ngữ tiếng Việt trong sáng.',
        pedagogicalGuidance: 'Giữ phong thái nghiêm túc khi giao tiếp sư phạm.'
      },
      class_announcement: {
        replacement: 'bất ngờ trước sự cố ngoài dự liệu',
        explanation: 'Thông báo sự việc khách quan cho tập thể.',
        pedagogicalGuidance: 'Tránh ngôn từ thiếu nghiêm túc trong thông báo chung.'
      },
      academic_writing: {
        replacement: 'trạng thái sững sờ, bàng hoàng đến mức ngưng trệ phản ứng',
        explanation: 'Dùng từ vựng miêu tả tâm lý nhân vật sâu sắc trong bài văn.',
        pedagogicalGuidance: 'Tuyệt đối cấm trong bài thi môn Ngữ văn.'
      }
    }
  },
  {
    term: 'Cook',
    aliases: ['cook', 'cúc', 'cho cook', 'bị cook'],
    category: 'Từ mượn tiếng Anh / Nói trại nhạy cảm',
    isSensitive: true,
    mappings: {
      friend_chat: {
        replacement: 'rời đi thôi / rút lui thôi (đùa vui thân mật)',
        explanation: 'LƯU Ý SƯ PHẠM: "Cook" là từ nói trại dễ gợi liên tưởng đến từ ngữ thô tục khiếm nhã. Kể cả với bạn bè, chỉ nên dùng khi thực sự thân thiết và hiểu nhau là đùa giỡn, tránh dùng bừa bãi.',
        pedagogicalGuidance: 'Cảnh báo: Không biến từ lóng thành thói quen nói bậy, chửi thề trá hình.',
        keepSlangAcceptable: false
      },
      social_comment: {
        replacement: 'rời khỏi cuộc tranh luận / xin phép dừng bình luận tại đây',
        explanation: 'Bảo vệ hình ảnh cá nhân trên mạng xã hội bằng lời chào rút lui lịch thiệp.',
        pedagogicalGuidance: 'Ứng xử có văn hóa khi thảo luận trực tuyến.'
      },
      teacher_exchange: {
        replacement: 'em xin phép Thầy/Cô cho em được ra về / em xin phép vắng mặt ạ',
        explanation: 'Xin phép thầy cô phải dùng từ ngữ kính cẩn, đoan trang, tuyệt đối không dùng từ "cook".',
        pedagogicalGuidance: 'Vi phạm nghiêm trọng chuẩn mực giao tiếp nếu dùng từ này với thầy cô.'
      },
      class_announcement: {
        replacement: 'các bạn hoàn thành nhiệm vụ và trật tự ra về',
        explanation: 'Thông báo lớp học mẫu mực, nghiêm túc.',
        pedagogicalGuidance: 'Xây dựng văn hóa lớp học thanh lịch.'
      },
      academic_writing: {
        replacement: 'hành động rút lui hoặc buộc phải rời khỏi vị trí',
        explanation: 'Diễn đạt sự rời đi bằng từ ngữ toàn dân chính xác.',
        pedagogicalGuidance: 'Không sử dụng trong bài văn học sinh giỏi và thi THPT.'
      }
    }
  },
  {
    term: 'Mãi mận',
    aliases: ['mãi mận', 'mai man', 'mãi mặn', 'mãi mận mãi xoài'],
    category: 'Nói trại từ vựng trái cây',
    mappings: {
      friend_chat: {
        replacement: 'mãi đỉnh / xuất sắc tuyệt vời',
        explanation: 'Lời khen bạn bè dễ thương, bắt tai và ấm áp sau một thành tích chung.',
        pedagogicalGuidance: 'Động viên tinh thần học tập và năng nổ của bạn bè.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'vô cùng duyên dáng và tài năng / rất tuyệt vời',
        explanation: 'Khen ngợi người khác một cách văn minh, thanh lịch trên mạng xã hội.',
        pedagogicalGuidance: 'Lan tỏa năng lượng tích cực.'
      },
      teacher_exchange: {
        replacement: 'rất tuyệt vời và đáng khích lệ ạ',
        explanation: 'Bày tỏ sự khâm phục hoặc tiếp thu lời khen của thầy cô lễ độ.',
        pedagogicalGuidance: 'Biết ơn và khiêm tốn khi đón nhận thành công.'
      },
      class_announcement: {
        replacement: 'tập thể lớp chúng ta đã hoàn thành vô cùng xuất sắc',
        explanation: 'Ghi nhận chiến công chung của cả lớp với lời văn trang trọng, hào sảng.',
        pedagogicalGuidance: 'Củng cố tinh thần đoàn kết của tập thể Long Hiệp.'
      },
      academic_writing: {
        replacement: 'duy trì trọn vẹn nét duyên dáng, giá trị cốt lõi và sức sống bền bỉ',
        explanation: 'Vận dụng vốn từ ngữ trau chuốt, giàu chất văn học nghị luận.',
        pedagogicalGuidance: 'Rèn luyện thói quen dùng tiếng Việt chuẩn mực.'
      }
    }
  },
  {
    term: 'Quắn quéo',
    aliases: ['quắn quéo', 'quan queo'],
    category: 'Từ tượng hình chuyển nghĩa',
    mappings: {
      friend_chat: {
        replacement: 'thích mê / phấn khích vô cùng',
        explanation: 'Diễn tả cảm giác rung động hoặc phấn khích tột độ trước một tình huống dễ thương.',
        pedagogicalGuidance: 'Cảm xúc trong sáng của tuổi học trò.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'vô cùng hào hứng và thích thú',
        explanation: 'Bình luận tích cực, vui vẻ.',
        pedagogicalGuidance: 'Tạo thiện cảm cho người đọc.'
      },
      teacher_exchange: {
        replacement: 'rất vui mừng và hào hứng trước thông tin ạ',
        explanation: 'Báo cáo tâm trạng phấn khởi với thầy cô bằng từ ngữ mực thước.',
        pedagogicalGuidance: 'Lễ phép và chững chạc.'
      },
      class_announcement: {
        replacement: 'không khí lớp học vô cùng sôi nổi và hào hứng',
        explanation: 'Miêu tả không khí tập thể chuẩn mực.',
        pedagogicalGuidance: 'Tạo tinh thần phấn chấn cho hoạt động đoàn thể.'
      },
      academic_writing: {
        replacement: 'trạng thái xúc cảm rung động mãnh liệt và nỗi xao xuyến trong tâm hồn',
        explanation: 'Khắc họa tâm lý nhân vật trong tác phẩm văn học.',
        pedagogicalGuidance: 'Làm giàu chất cảm xúc cho bài văn phân tích.'
      }
    }
  },
  {
    term: 'Red flag',
    aliases: ['red flag', 'cờ đỏ cảnh báo', 'redflag'],
    category: 'Từ mượn / Biểu tượng cảnh báo',
    mappings: {
      friend_chat: {
        replacement: 'dấu hiệu bất ổn / điểm trừ đáng ngờ',
        explanation: 'Nhắc nhở bạn thân cảnh giác trước một người hoặc tình huống có biểu hiện không tốt.',
        pedagogicalGuidance: 'Quan tâm và bảo vệ bạn bè đúng mực.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'tín hiệu cảnh báo nguy cơ / dấu hiệu cần đề phòng',
        explanation: 'Đóng góp ý kiến tỉnh táo, giúp cộng đồng mạng tránh bẫy lừa đảo.',
        pedagogicalGuidance: 'Cảnh giác và tỉnh táo trước các trào lưu ảo.'
      },
      teacher_exchange: {
        replacement: 'dấu hiệu bất thường cần xin ý kiến chỉ đạo của Thầy/Cô ạ',
        explanation: 'Báo cáo tình hình bất thường cho thầy cô kịp thời can thiệp bảo vệ học sinh.',
        pedagogicalGuidance: 'Tin tưởng và cầu thị sự hướng dẫn của thầy cô.'
      },
      class_announcement: {
        replacement: 'những biểu hiện tiêu cực cần toàn thể lớp chấn chỉnh ngay',
        explanation: 'Nhắc nhở nề nếp kỷ luật lớp học một cách nghiêm túc.',
        pedagogicalGuidance: 'Xây dựng môi trường lớp học an toàn, lành mạnh.'
      },
      academic_writing: {
        replacement: 'những chỉ dấu cảnh báo nguy cơ rủi ro hoặc biểu hiện tha hóa lối sống',
        explanation: 'Sử dụng như một khái niệm xã hội học khi phân tích hiện tượng tha hóa.',
        pedagogicalGuidance: 'Phân tích bản chất của cái xấu, cái tiêu cực.'
      }
    }
  },
  {
    term: 'Cà khịa',
    aliases: ['cà khịa', 'ca khia', 'khịa'],
    category: 'Khẩu ngữ Nam Bộ',
    mappings: {
      friend_chat: {
        replacement: 'trêu chọc vui / bông đùa bạn bè',
        explanation: 'Cách trêu đùa quen thuộc tạo tiếng cười giữa những người bạn thân.',
        pedagogicalGuidance: 'Đùa vui có chừng mực, không lấy khuyết điểm của bạn ra làm trò đùa.',
        keepSlangAcceptable: true
      },
      social_comment: {
        replacement: 'châm biếm nhẹ nhàng / bình luận hóm hỉnh',
        explanation: 'Bình luận có duyên, tránh gây hấn hoặc hiềm khích.',
        pedagogicalGuidance: 'Bảo đảm văn hóa ứng xử trên mạng.'
      },
      teacher_exchange: {
        replacement: 'thẳng thắn góp ý / trao đổi chân thành ạ',
        explanation: 'Khi trao đổi học tập với thầy cô, phải dùng thái độ khiêm tốn, chân thành.',
        pedagogicalGuidance: 'Tuyệt đối không mang thái độ cợt nhả vào học đường.'
      },
      class_announcement: {
        replacement: 'nhắc nhở thân ái, giữ gìn đoàn kết nội bộ',
        explanation: 'Kêu gọi lớp tôn trọng lẫn nhau.',
        pedagogicalGuidance: 'Xóa bỏ hiềm khích trong tập thể.'
      },
      academic_writing: {
        replacement: 'thủ pháp châm biếm, khiêu khích mỉa mai trong đối thoại nghệ thuật',
        explanation: 'Nâng lên thành biện pháp tu từ châm biếm trong văn học hiện thực.',
        pedagogicalGuidance: 'Đánh giá nghệ thuật trào phúng của tác phẩm.'
      }
    }
  }
];

// Bộ câu mẫu gợi ý để học sinh và giáo viên trải nghiệm nhanh
export const SAMPLE_PROMPTS: SampleExpressionPrompt[] = [
  {
    id: 'sp-1',
    sentence: 'Hôm nay em xin phép cô cho em cook sớm vì cột sống em bất ổn quá ạ.',
    suggestedContext: 'teacher_exchange',
    description: 'Học sinh nhắn tin xin phép giáo viên về sớm',
    slangContained: ['cook', 'cột sống']
  },
  {
    id: 'sp-2',
    sentence: 'Bài thuyết trình Ngữ văn hôm nay bạn flex mượt ghê á, cả lớp xịt keo luôn!',
    suggestedContext: 'friend_chat',
    description: 'Khen ngợi bạn học sau tiết học kịch nghệ',
    slangContained: ['flex', 'xịt keo']
  },
  {
    id: 'sp-3',
    sentence: 'Tổ 1 mãi mận nha, ai cũng làm bài tập đầy đủ khỏi lo bị cô giáo check var!',
    suggestedContext: 'class_announcement',
    description: 'Tổ trưởng thông báo tình hình nề nếp của tổ',
    slangContained: ['mãi mận', 'check var']
  },
  {
    id: 'sp-4',
    sentence: 'Thi giữa kỳ xong rồi, chiều nay rủ nhau đi trà sữa chữa lành tâm hồn đi bà con.',
    suggestedContext: 'social_comment',
    description: 'Đăng trạng thái rủ bạn bè thư giãn trên mạng',
    slangContained: ['chữa lành']
  },
  {
    id: 'sp-5',
    sentence: 'Thanh niên ngày nay rất thích flex lối sống sang chảnh nhưng lại thấy red flag khắp nơi.',
    suggestedContext: 'academic_writing',
    description: 'Câu văn phân tích hiện tượng tâm lý thanh niên trong bài nghị luận',
    slangContained: ['flex', 'red flag']
  }
];

// Hàm quét và tìm các từ lóng đã được Hội đồng biên tập phê duyệt trong câu
export function detectApprovedTerms(sentence: string, targetContext: ExpressionContext): DetectedTermMatch[] {
  const matches: DetectedTermMatch[] = [];
  const lowerSentence = sentence.toLowerCase();

  for (const rule of APPROVED_TERM_RULES) {
    for (const alias of rule.aliases) {
      // Dùng regex boundary để tránh bắt nhầm chuỗi con
      const regex = new RegExp(`(^|\\s|[.,!?;:"])${alias.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}($|\\s|[.,!?;:"])`, 'i');
      if (regex.test(lowerSentence)) {
        const mapping = rule.mappings[targetContext];
        matches.push({
          rawTerm: alias,
          officialWord: rule.term,
          replacement: mapping.replacement,
          pedagogicalNuance: mapping.pedagogicalGuidance
        });
        break; // Mỗi rule chỉ ghi nhận 1 lần trùng khớp
      }
    }
  }

  return matches;
}

// Kiểm tra xem câu có chứa từ ngữ lạ/chưa kiểm chứng trong từ điển không
export function checkForUncatalogedSlang(sentence: string): { hasUncataloged: boolean; suspectWords: string[] } {
  // Một số từ lóng đang rộ trên mạng nhưng chưa có trong chương trình Chuyên đề 2 Long Hiệp
  const uncatalogedMarkers = [
    'skibidi', 'rizz', 'sigma', 'fanum tax', 'delulu', 'solulu',
    'chằm dzn', 'gút chóp', 'ố dề', 'khum', 'tam tai', 'trầm kảm', 'gét gô', 'suy'
  ];

  const lower = sentence.toLowerCase();
  const found: string[] = [];
  for (const marker of uncatalogedMarkers) {
    if (lower.includes(marker)) {
      found.push(marker);
    }
  }

  return {
    hasUncataloged: found.length > 0,
    suspectWords: found
  };
}

// Kiểm tra nội dung an toàn học đường (Content Safety Audit)
export function auditContentSafety(sentence: string): { passed: boolean; note?: string } {
  const prohibitedViolations = [
    'đù má', 'đm', 'vcl', 'đcm', 'chết tiệt', 'con đĩ', 'thằng chó', 'đánh nhau', 'bạo lực'
  ];

  const lower = sentence.toLowerCase();
  for (const bad of prohibitedViolations) {
    if (lower.includes(bad)) {
      return {
        passed: false,
        note: 'Hệ thống phát hiện câu có chứa từ ngữ không chuẩn mực hoặc có tính xúc phạm/bạo lực. Vui lòng điều chỉnh để bảo đảm chuẩn mực văn hóa học đường.'
      };
    }
  }

  return { passed: true };
}

/**
 * Động cơ phân tích diễn đạt phù hợp (Contextual Expression Advisor Engine)
 * Chạy cục bộ 100% dựa trên kho từ điển và quy tắc sư phạm của Thầy Trầm Thanh Tuấn
 */
export function analyzeAppropriateExpression(
  sentence: string,
  context: ExpressionContext
): ExpressionAnalysisResult {
  const trimmed = sentence.trim();
  const contextDef = CONTEXT_DEFINITIONS[context];

  // 1. Kiểm tra an toàn nội dung
  const safety = auditContentSafety(trimmed);
  if (!safety.passed) {
    return {
      id: `res-${Date.now()}`,
      originalSentence: trimmed,
      context,
      suggestedExpression: 'Không thể tạo gợi ý cho nội dung vi phạm tiêu chuẩn văn hóa học đường.',
      detectedTerms: [],
      differenceExplanation: 'Nội dung chứa từ ngữ khiếm nhã, đi ngược lại tiêu chí giao tiếp văn minh của Chuyên đề 2.',
      pedagogicalNotes: ['Yêu cầu sử dụng ngôn ngữ trong sáng, không xúc phạm người khác.'],
      isAppropriateAsIs: false,
      hasInsufficientData: false,
      sourceType: 'approved_dictionary_rules',
      safetyCheck: safety,
      analyzedAt: new Date().toISOString()
    };
  }

  // 2. Quét từ lóng đã được duyệt
  const detected = detectApprovedTerms(trimmed, context);
  const uncataloged = checkForUncatalogedSlang(trimmed);

  // 3. Trường hợp: Chưa đủ căn cứ từ điển (yêu cầu nghiệp vụ: Nếu thiếu dữ liệu, báo rõ chưa đủ căn cứ)
  if (detected.length === 0 && uncataloged.hasUncataloged) {
    return {
      id: `res-${Date.now()}`,
      originalSentence: trimmed,
      context,
      suggestedExpression: trimmed,
      detectedTerms: [],
      differenceExplanation: `Hệ thống nhận diện được từ ngữ mang tính trào lưu mới (${uncataloged.suspectWords.map(w => `"${w}"`).join(', ')}) nhưng từ ngữ này CHƯA CÓ trong kho dữ liệu và quy tắc biên tập đã được Thầy Trầm Thanh Tuấn cùng Hội đồng thẩm định phê duyệt.`,
      pedagogicalNotes: [
        'Hệ thống từ chối suy đoán tự tiện để bảo đảm tính chuẩn xác của nghiên cứu ngôn ngữ học THPT.',
        'Em có thể vào mục "Đề xuất từ mới" để cung cấp thêm ngữ cảnh khảo sát cho các mục từ này.'
      ],
      isAppropriateAsIs: false,
      hasInsufficientData: true,
      insufficientDataReason: `Chưa đủ căn cứ từ điển đã duyệt đối với các từ: ${uncataloged.suspectWords.join(', ')}.`,
      sourceType: 'approved_dictionary_rules',
      safetyCheck: safety,
      analyzedAt: new Date().toISOString()
    };
  }

  // 4. Trường hợp câu không chứa từ ngữ mạng nào:
  if (detected.length === 0) {
    return {
      id: `res-${Date.now()}`,
      originalSentence: trimmed,
      context,
      suggestedExpression: trimmed,
      detectedTerms: [],
      differenceExplanation: `Câu của bạn đang sử dụng hoàn toàn từ ngữ tiếng Việt thông dụng, không phát hiện từ lóng mạng xã hội hay chữ viết tắt teencode cần chuyển đổi trong ngữ cảnh "${contextDef.label}".`,
      pedagogicalNotes: [
        `Ngữ cảnh "${contextDef.label}" yêu cầu giọng điệu: ${contextDef.tone}.`,
        'Câu của bạn đã cơ bản đáp ứng tính trong sáng và mục đích giao tiếp ban đầu.'
      ],
      isAppropriateAsIs: true,
      hasInsufficientData: false,
      sourceType: 'approved_dictionary_rules',
      safetyCheck: safety,
      analyzedAt: new Date().toISOString()
    };
  }

  // 5. Biến đổi câu theo quy tắc đã duyệt của từng ngữ cảnh
  let suggested = trimmed;
  const explanations: string[] = [];
  const notes: string[] = [];

  // Áp dụng thay thế từng từ ngữ tương ứng
  for (const match of detected) {
    const rule = APPROVED_TERM_RULES.find(r => r.term === match.officialWord);
    if (!rule) continue;

    const mapping = rule.mappings[context];

    // Tạo regex thay thế
    const replaceRegex = new RegExp(`(^|\\s|[.,!?;:"])${match.rawTerm.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}($|\\s|[.,!?;:"])`, 'gi');
    suggested = suggested.replace(replaceRegex, `$1${match.replacement}$2`);

    explanations.push(`Từ lóng "${match.rawTerm}" (${rule.term}) được chuyển thành "${match.replacement}". Giải thích: ${mapping.explanation}`);
    notes.push(mapping.pedagogicalGuidance);
  }

  // Tinh chỉnh cấu trúc câu theo đặc thù từng ngữ cảnh giao tiếp:
  if (context === 'teacher_exchange') {
    // Nếu chưa có kính ngữ mở đầu
    if (!suggested.toLowerCase().startsWith('em kính gửi') && !suggested.toLowerCase().startsWith('kính thưa') && !suggested.toLowerCase().startsWith('thưa')) {
      suggested = `Kính thưa Thầy/Cô, ${suggested.charAt(0).toLowerCase() + suggested.slice(1)}`;
    }
    // Nếu chưa có dạ/ạ cuối câu
    if (!suggested.trim().endsWith('ạ.') && !suggested.trim().endsWith('ạ!') && !suggested.trim().endsWith('ạ')) {
      suggested = suggested.replace(/[.!?]*$/, ' ạ.');
    }
  } else if (context === 'class_announcement') {
    if (!suggested.toLowerCase().startsWith('thông báo:') && !suggested.toLowerCase().startsWith('kính gửi') && !suggested.toLowerCase().startsWith('thân gửi')) {
      suggested = `Thông báo đến cả lớp: ${suggested}`;
    }
  } else if (context === 'academic_writing') {
    // Với bài viết học tập, nếu câu nói về bản thân thì nâng lên thành phân tích hiện tượng
    suggested = suggested.replace(/\btao\b/gi, 'chúng ta').replace(/\bmày\b/gi, 'đối tượng');
  }

  // Xử lý nguyên tắc: Không khẳng định mọi tiếng lóng đều sai
  const isCasualAcceptable = context === 'friend_chat' && detected.every(d => {
    const r = APPROVED_TERM_RULES.find(x => x.term === d.officialWord);
    return r && r.mappings.friend_chat.keepSlangAcceptable;
  });

  if (isCasualAcceptable) {
    notes.unshift('LƯU Ý SƯ PHẠM (Chuyên đề 2): Trong ngữ cảnh trò chuyện bạn bè thân mật, việc sử dụng các từ ngữ mạng trên KHÔNG HỀ SAI mà thể hiện sự gần gũi, sinh động. Cách gợi ý dưới đây chỉ nhằm giúp em tham khảo thêm phương án diễn đạt chỉn chu và đa dạng hơn.');
  } else {
    notes.unshift(`NGUYÊN TẮC NGỮ CẢNH: Khi chuyển sang "${contextDef.label}", việc chuẩn hóa từ ngữ giúp nâng cao tính văn minh, thể hiện sự tôn trọng đối tượng giao tiếp và tránh gây hiểu lầm.`);
  }

  return {
    id: `res-${Date.now()}`,
    originalSentence: trimmed,
    context,
    suggestedExpression: suggested,
    detectedTerms: detected,
    differenceExplanation: explanations.join('\n\n'),
    pedagogicalNotes: notes,
    isAppropriateAsIs: isCasualAcceptable,
    hasInsufficientData: false,
    sourceType: 'approved_dictionary_rules',
    safetyCheck: safety,
    analyzedAt: new Date().toISOString()
  };
}

/**
 * Gọi AI Server-side Gemini 3.8 Flash (có nhãn gợi ý tự động & bộ lọc kiểm duyệt học đường)
 */
export async function requestAIAssistedExpression(
  sentence: string,
  context: ExpressionContext
): Promise<ExpressionAnalysisResult> {
  const trimmed = sentence.trim();

  // Kiểm tra an toàn trước khi gọi server
  const safety = auditContentSafety(trimmed);
  if (!safety.passed) {
    return analyzeAppropriateExpression(sentence, context);
  }

  try {
    const response = await fetch('/api/expression/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sentence: trimmed,
        context,
        schoolInfo: {
          course: 'Ngữ văn 11 - Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại',
          teacher: 'Thầy Trầm Thanh Tuấn',
          school: 'Trường THCS và THPT Long Hiệp'
        }
      })
    });

    if (response.ok) {
      const data = await response.json();
      return {
        ...data,
        sourceType: 'ai_generated',
        aiLabel: 'Gợi ý tự động từ AI (Đã qua bộ lọc kiểm soát nội dung học đường)',
        safetyCheck: { passed: true }
      };
    }
  } catch (err) {
    console.warn('Backend AI service not reachable, falling back to approved dictionary rules', err);
  }

  // Tự động rơi về hệ thống quy tắc từ điển đã duyệt nếu server chưa có kết nối AI
  const fallbackResult = analyzeAppropriateExpression(sentence, context);
  return {
    ...fallbackResult,
    sourceType: 'approved_dictionary_rules'
  };
}
