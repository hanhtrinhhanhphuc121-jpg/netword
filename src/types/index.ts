/**
 * NETWORD - Định nghĩa kiểu dữ liệu Từ điển ngôn ngữ mạng THPT
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển: Trầm Thanh Tuấn - THCS và THPT Long Hiệp
 */

export type WordCategory =
  | 'slang'         // Tiếng lóng Gen Z
  | 'teencode'      // Viết tắt & Teencode hiện đại
  | 'meme_trend'    // Xu hướng & Meme mạng xã hội
  | 'borrowed'      // Từ mượn & Chuyển mã (Code-switching)
  | 'game_stream'   // Thuật ngữ Game & Stream
  | 'school';       // Tiếng lóng học đường Long Hiệp & THPT

export type SchoolAppropriateness =
  | 'acceptable_casual'    // Phù hợp trò chuyện vui bè bạn ngoài giờ học
  | 'strictly_informal'     // Chỉ dùng trên mạng xã hội thân mật
  | 'caution_required'     // Dễ gây hiểu lầm / Phản cảm nếu lạm dụng
  | 'forbidden_in_formal';  // Tuyệt đối không dùng trong bài kiểm tra, thi cử, văn bản

export type SuggestionStatus = 'pending' | 'approved' | 'rejected' | 'needs_revision';

export interface DialogueMessage {
  id: string;
  sender: string;
  avatar?: string;
  isMe: boolean;
  text: string;
  time: string;
}

export interface WordComment {
  id: string;
  wordId: string;
  authorName: string;
  authorRole: 'student' | 'editor' | 'teacher';
  authorSchool: string;
  content: string;
  createdAt: string;
}

export interface WordEntry {
  id: string;
  officialCode?: string;        // Mã mục từ chính thức NW-0001 -> NW-0300
  stt?: number;                 // Số thứ tự 1 -> 300
  word: string;
  pronunciation?: string;
  category: WordCategory;
  topicTheme?: string;          // 12 Nhóm chủ đề từ Chuyên đề 2
  unitType?: string;            // Loại đơn vị: Từ / thuật ngữ, Cụm từ, Mẫu câu...
  sourceUrl?: string;           // Nguồn tham khảo
  literalMeaning: string;       // Nghĩa gốc / nghĩa đen
  netMeaning: string;           // Nghĩa trên không gian mạng
  origin: string;               // Nguồn gốc xuất hiện & hoàn cảnh nảy sinh
  dialogueExample: DialogueMessage[]; // Đoạn hội thoại minh họa
  academicGuidance: string;     // Nhận định sư phạm của GV Ngữ văn 11
  schoolAppropriateness: SchoolAppropriateness;
  standardScore: number;        // Thang điểm chuẩn mực (1 = hoàn toàn phi quy chuẩn, 5 = có thể chấp nhận linh hoạt)
  tags: string[];
  likesCount: number;
  viewsCount: number;
  status: 'approved' | 'pending';
  author: string;
  createdAt: string;
  updatedAt?: string;
  moderatorNote?: string;
}

export interface WordSuggestion {
  id: string;
  word: string;
  category: WordCategory;
  netMeaning: string;
  origin: string;
  exampleContext: string;
  evidenceUrlOrProof?: string;
  schoolAppropriateness: SchoolAppropriateness;
  submittedBy: string;
  submitterEmail?: string;
  submitterSchool: string;
  submittedAt: string;
  status: SuggestionStatus;
  moderatorFeedback?: string;
  reviewedBy?: string;
  reviewedAt?: string;
}

export type UserRole = 'guest' | 'student' | 'editor' | 'admin';

export type PermissionAction =
  | 'view_published_words'     // Xem từ đã xuất bản (Tất cả vai trò)
  | 'take_trial_quiz'          // Làm bài thử nghiệm (Tất cả vai trò)
  | 'save_favorite_words'      // Lưu từ yêu thích (Student, Editor, Admin)
  | 'record_quiz_score'        // Tích lũy điểm & xếp hạng (Student, Editor, Admin)
  | 'submit_new_word'          // Gửi đề xuất từ mới (Student, Editor, Admin)
  | 'review_assigned_content'  // Thẩm định & xử lý đề xuất (Editor, Admin)
  | 'edit_term_snapshot'       // Hiệu đính nội dung (Editor, Admin)
  | 'publish_word_direct'      // Xuất bản từ điển trực tiếp (Chỉ Admin)
  | 'delete_word'              // Xóa mục từ khỏi từ điển (Chỉ Admin)
  | 'manage_user_accounts'     // Quản lý tài khoản & phân quyền (Chỉ Admin)
  | 'issue_school_accounts'    // Cấp phát tài khoản nhà trường (Chỉ Admin)
  | 'view_audit_logs'          // Xem nhật ký hoạt động (Chỉ Admin)
  | 'configure_database';      // Cấu hình cơ sở dữ liệu Supabase (Chỉ Admin)

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  school: string;
  grade: string;
  title: string;
  points: number;
  bookmarkedWordIds: string[];
  solvedChallengeIds: string[];
  createdWordIds: string[];
  isSchoolIssued?: boolean;
  studentCode?: string;
  accountStatus?: 'active' | 'suspended';
  createdAt?: string;
}

export interface SchoolIssuedAccount {
  id: string;
  studentCode: string;
  fullName: string;
  email: string;
  initialPassword: string;
  role: 'student' | 'editor';
  grade: string;
  school: string;
  status: 'active' | 'suspended';
  isActivated: boolean;
  issuedAt: string;
  lastLoginAt?: string;
}

export interface RoleTestItem {
  id: string;
  action: PermissionAction;
  actionLabel: string;
  description: string;
  allowedRoles: UserRole[];
}

export interface ChallengeQuestion {
  id: string;
  title: string;
  scenario: string;
  category: 'context_awareness' | 'slang_meaning' | 'linguistic_purity';
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  points: number;
  unitLesson: string; // Tham chiếu bài học Ngữ văn 11
}

export type ActiveTab =
  | 'home'
  | 'dictionary'
  | 'curriculum'
  | 'detail'
  | 'suggest'
  | 'challenges'
  | 'expression'
  | 'students'
  | 'profile'
  | 'editor'
  | 'admin'
  | 'role_tests'
  | 'about';



