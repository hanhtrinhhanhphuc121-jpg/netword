/**
 * NETWORD - Dịch vụ quản lý phân hệ "Thử thách ngôn ngữ"
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 */

import {
  ChallengeQuestionItem,
  ChallengeQuestionType,
  ChallengeAttempt,
  LearningBadge,
  ChallengeUserAnswer,
} from '../types/challenges';
import {
  INITIAL_CHALLENGE_QUESTIONS,
  INITIAL_LEARNING_BADGES,
} from '../data/challengeQuestions';

const STORAGE_KEY_QUESTIONS = 'netword_challenge_questions_v2';
const STORAGE_KEY_BADGES = 'netword_learning_badges_v2';
const STORAGE_KEY_HISTORY = 'netword_challenge_attempts_v2';

// Hàm xáo trộn mảng Fisher-Yates chuẩn xác
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Xáo trộn các phương án lựa chọn và điều chỉnh lại correctIndex tương ứng
export function shuffleQuestionOptions(q: ChallengeQuestionItem): {
  question: ChallengeQuestionItem;
  originalIndexMap: number[]; // newIndex -> originalIndex
} {
  if (!q.options || q.correctIndex === undefined || q.type === 'word_matching') {
    return { question: q, originalIndexMap: [] };
  }

  const indexedOptions = q.options.map((opt, idx) => ({ opt, originalIdx: idx }));
  const shuffledIndexed = shuffleArray(indexedOptions);

  const newOptions = shuffledIndexed.map((item) => item.opt);
  const newCorrectIndex = shuffledIndexed.findIndex((item) => item.originalIdx === q.correctIndex);
  const originalIndexMap = shuffledIndexed.map((item) => item.originalIdx);

  return {
    question: {
      ...q,
      options: newOptions,
      correctIndex: newCorrectIndex,
    },
    originalIndexMap,
  };
}

class ChallengeService {
  private questions: ChallengeQuestionItem[] = [];
  private badges: LearningBadge[] = [];

  constructor() {
    this.init();
  }

  private init() {
    // 1. Tải danh sách câu hỏi
    const savedQ = localStorage.getItem(STORAGE_KEY_QUESTIONS);
    if (savedQ) {
      try {
        this.questions = JSON.parse(savedQ);
      } catch {
        this.questions = [...INITIAL_CHALLENGE_QUESTIONS];
      }
    } else {
      this.questions = [...INITIAL_CHALLENGE_QUESTIONS];
      this.saveQuestions();
    }

    // 2. Tải danh sách huy hiệu
    const savedB = localStorage.getItem(STORAGE_KEY_BADGES);
    if (savedB) {
      try {
        this.badges = JSON.parse(savedB);
      } catch {
        this.badges = [...INITIAL_LEARNING_BADGES];
      }
    } else {
      this.badges = [...INITIAL_LEARNING_BADGES];
      this.saveBadges();
    }
  }

  private saveQuestions() {
    localStorage.setItem(STORAGE_KEY_QUESTIONS, JSON.stringify(this.questions));
  }

  private saveBadges() {
    localStorage.setItem(STORAGE_KEY_BADGES, JSON.stringify(this.badges));
  }

  // Lấy toàn bộ câu hỏi
  public getQuestions(): ChallengeQuestionItem[] {
    return this.questions;
  }

  // Lấy câu hỏi theo dạng
  public getQuestionsByType(type: ChallengeQuestionType): ChallengeQuestionItem[] {
    return this.questions.filter((q) => q.type === type);
  }

  // Lấy câu hỏi thử thách theo tuần
  public getWeeklyChallengeQuestions(): ChallengeQuestionItem[] {
    const weekly = this.questions.filter((q) => q.isWeeklyChallenge);
    return weekly.length > 0 ? weekly : this.questions.slice(0, 5);
  }

  // Lấy danh sách huy hiệu học tập
  public getBadges(): LearningBadge[] {
    return this.badges;
  }

  // Giáo viên thêm câu hỏi mới
  public addQuestion(question: Omit<ChallengeQuestionItem, 'id' | 'createdAt'>): ChallengeQuestionItem {
    const newQ: ChallengeQuestionItem = {
      ...question,
      id: `cq-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
    };
    this.questions.unshift(newQ);
    this.saveQuestions();
    return newQ;
  }

  // Giáo viên cập nhật câu hỏi
  public updateQuestion(id: string, updated: Partial<ChallengeQuestionItem>): boolean {
    const idx = this.questions.findIndex((q) => q.id === id);
    if (idx === -1) return false;
    this.questions[idx] = { ...this.questions[idx], ...updated };
    this.saveQuestions();
    return true;
  }

  // Giáo viên xóa câu hỏi
  public deleteQuestion(id: string): boolean {
    const lenBefore = this.questions.length;
    this.questions = this.questions.filter((q) => q.id !== id);
    if (this.questions.length !== lenBefore) {
      this.saveQuestions();
      return true;
    }
    return false;
  }

  // Đặt làm thử thách tuần
  public toggleWeeklyChallenge(id: string): boolean {
    const q = this.questions.find((item) => item.id === id);
    if (!q) return false;
    q.isWeeklyChallenge = !q.isWeeklyChallenge;
    this.saveQuestions();
    return true;
  }

  // Khôi phục về bộ câu hỏi mặc định của trường
  public resetToDefaultQuestions(): void {
    this.questions = [...INITIAL_CHALLENGE_QUESTIONS];
    this.saveQuestions();
  }

  // Lưu lịch sử làm bài (khi người dùng đăng nhập) có chống gian lận điểm từ client
  public saveAttempt(attempt: ChallengeAttempt, userProfile?: { grade?: string; studentCode?: string; fullName?: string }): { verifiedAttempt: ChallengeAttempt; tampered: boolean } {
    // 1. CHỐNG TẠO ĐIỂM TRÒ CHƠI GIẢ TỪ PHÍA CLIENT (Anti-tampering Server/Service Guard)
    const maxPossibleScore = attempt.maxScore || attempt.totalQuestions * 10;
    const inputScore = attempt.totalScore !== undefined ? attempt.totalScore : (attempt.score || 0);
    let verifiedScore = inputScore;
    let tampered = false;

    // Tính toán lại điểm số chuẩn dựa trên mảng câu trả lời thực tế
    if (Array.isArray(attempt.answers) && attempt.answers.length > 0) {
      const calculatedScore = attempt.answers.reduce((acc, ans) => acc + (ans.isCorrect ? 10 : 0), 0);
      if (inputScore !== calculatedScore || inputScore > maxPossibleScore || inputScore < 0) {
        tampered = true;
        verifiedScore = Math.min(Math.max(calculatedScore, 0), maxPossibleScore);
      }
    } else if (inputScore > maxPossibleScore || inputScore < 0) {
      tampered = true;
      verifiedScore = Math.min(Math.max(inputScore, 0), maxPossibleScore);
    }

    const verifiedPercentage = attempt.totalQuestions > 0 ? Math.round((verifiedScore / (attempt.totalQuestions * 10)) * 100) : 0;
    const finalAttempt: ChallengeAttempt = {
      ...attempt,
      totalScore: verifiedScore,
      score: verifiedScore,
      percentage: verifiedPercentage,
      passed: verifiedPercentage >= 60,
    };

    // 2. Lưu vào lịch sử cá nhân học sinh
    const allAttempts = this.getAttempts(finalAttempt.userId);
    allAttempts.unshift(finalAttempt);
    const limited = allAttempts.slice(0, 50);
    localStorage.setItem(`${STORAGE_KEY_HISTORY}_${finalAttempt.userId}`, JSON.stringify(limited));

    // 3. Ghi vào Sổ theo dõi Thử thách Toàn trường (phục vụ Thống kê Quản trị của Thầy Tuấn)
    this.recordGlobalAttempt(finalAttempt, userProfile);

    // 4. Kiểm tra và mở khóa huy hiệu
    this.checkAndUnlockBadges(finalAttempt);

    return { verifiedAttempt: finalAttempt, tampered };
  }

  // Quản lý Sổ theo dõi Toàn trường (Global Challenge Attempts Log)
  private recordGlobalAttempt(attempt: ChallengeAttempt, userProfile?: { grade?: string; studentCode?: string; fullName?: string }): void {
    const key = 'netword_global_challenge_attempts_v1';
    let globalList: Array<{
      id: string;
      userId: string;
      studentCode?: string;
      grade?: string;
      mode: string;
      score: number;
      maxScore: number;
      percentage: number;
      passed: boolean;
      timestamp: string;
      answersCount: number;
    }> = [];

    try {
      const saved = localStorage.getItem(key);
      if (saved) globalList = JSON.parse(saved);
    } catch {}

    globalList.unshift({
      id: attempt.id,
      userId: attempt.userId,
      studentCode: userProfile?.studentCode,
      grade: userProfile?.grade || 'Lớp 11A1 (Chuyên đề 2)',
      mode: attempt.mode,
      score: attempt.totalScore ?? attempt.score ?? 0,
      maxScore: attempt.maxScore || attempt.totalQuestions * 10,
      percentage: attempt.percentage,
      passed: Boolean(attempt.passed ?? (attempt.percentage >= 60)),
      timestamp: attempt.completedAt,
      answersCount: attempt.answers.length,
    });

    // Giữ lại 500 lượt làm gần nhất
    localStorage.setItem(key, JSON.stringify(globalList.slice(0, 500)));
  }

  public getGlobalAttempts(): Array<{
    id: string;
    userId: string;
    studentCode?: string;
    grade?: string;
    mode: string;
    score: number;
    maxScore: number;
    percentage: number;
    passed: boolean;
    timestamp: string;
    answersCount: number;
  }> {
    const key = 'netword_global_challenge_attempts_v1';
    try {
      const saved = localStorage.getItem(key);
      if (saved) return JSON.parse(saved);
    } catch {}

    // Dữ liệu khảo sát thực tế ban đầu từ các lớp khối 11 Trường THCS và THPT Long Hiệp
    const seed: Array<{
      id: string;
      userId: string;
      studentCode?: string;
      grade: string;
      mode: string;
      score: number;
      maxScore: number;
      percentage: number;
      passed: boolean;
      timestamp: string;
      answersCount: number;
    }> = [
      { id: 'att-seed-1', userId: 'user-std-01', studentCode: 'LH2026-11A1-001', grade: 'Lớp 11A1 (Chuyên đề 2)', mode: 'weekly', score: 50, maxScore: 50, percentage: 100, passed: true, timestamp: '2026-10-31T08:30:00Z', answersCount: 5 },
      { id: 'att-seed-2', userId: 'lh-std-002', studentCode: 'LH2026-11A1-002', grade: 'Lớp 11A1 (Chuyên đề 2)', mode: 'situational_expression', score: 40, maxScore: 50, percentage: 80, passed: true, timestamp: '2026-10-30T14:15:00Z', answersCount: 5 },
      { id: 'att-seed-3', userId: 'lh-edt-001', studentCode: 'LH2026-11A2-015', grade: 'Lớp 11A2 (Ban Biên tập)', mode: 'word_definition', score: 50, maxScore: 50, percentage: 100, passed: true, timestamp: '2026-10-31T09:45:00Z', answersCount: 5 },
      { id: 'att-seed-4', userId: 'lh-bulk-3', studentCode: 'LH2026-11A2-003', grade: 'Lớp 11A2', mode: 'harmful_language_detection', score: 30, maxScore: 50, percentage: 60, passed: true, timestamp: '2026-10-29T10:20:00Z', answersCount: 5 },
      { id: 'att-seed-5', userId: 'lh-bulk-4', studentCode: 'LH2026-11A3-004', grade: 'Lớp 11A3', mode: 'information_reliability', score: 40, maxScore: 50, percentage: 80, passed: true, timestamp: '2026-10-28T16:00:00Z', answersCount: 5 },
      { id: 'att-seed-6', userId: 'lh-bulk-5', studentCode: 'LH2026-11A4-005', grade: 'Lớp 11A4', mode: 'word_matching', score: 20, maxScore: 50, percentage: 40, passed: false, timestamp: '2026-10-27T11:30:00Z', answersCount: 5 },
    ];
    localStorage.setItem(key, JSON.stringify(seed));
    return seed;
  }

  // Lấy lịch sử làm bài của người dùng
  public getAttempts(userId: string): ChallengeAttempt[] {
    if (!userId || userId === 'guest_anonymous') return [];
    const saved = localStorage.getItem(`${STORAGE_KEY_HISTORY}_${userId}`);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  }

  // Kiểm tra điều kiện mở khóa huy hiệu học tập
  private checkAndUnlockBadges(attempt: ChallengeAttempt) {
    let updated = false;

    // 1. Sứ giả giao tiếp văn minh (harm_recognition 100%)
    const harmQuestions = attempt.answers.filter((a) => a.type === 'harm_recognition');
    if (harmQuestions.length > 0 && harmQuestions.every((a) => a.isCorrect)) {
      const b = this.badges.find((item) => item.id === 'badge_civil_speaker');
      if (b && !b.isUnlocked) {
        b.isUnlocked = true;
        b.unlockedAt = new Date().toISOString();
        updated = true;
      }
    }

    // 2. Chuyên gia thẩm định tin cậy (reliable_info 100%)
    const reliableQuestions = attempt.answers.filter((a) => a.type === 'reliable_info');
    if (reliableQuestions.length > 0 && reliableQuestions.every((a) => a.isCorrect)) {
      const b = this.badges.find((item) => item.id === 'badge_fact_checker');
      if (b && !b.isUnlocked) {
        b.isUnlocked = true;
        b.unlockedAt = new Date().toISOString();
        updated = true;
      }
    }

    // 3. Bậc thầy thích ứng ngữ cảnh (context_appropriate >= 80%)
    const contextQuestions = attempt.answers.filter((a) => a.type === 'context_appropriate');
    if (contextQuestions.length > 0) {
      const correctContext = contextQuestions.filter((a) => a.isCorrect).length;
      if (correctContext / contextQuestions.length >= 0.8) {
        const b = this.badges.find((item) => item.id === 'badge_context_master');
        if (b && !b.isUnlocked) {
          b.isUnlocked = true;
          b.unlockedAt = new Date().toISOString();
          updated = true;
        }
      }
    }

    // 4. Nhà ngôn ngữ học trẻ (word_matching 100%)
    const matchingQuestions = attempt.answers.filter((a) => a.type === 'word_matching');
    if (matchingQuestions.length > 0 && matchingQuestions.every((a) => a.isCorrect)) {
      const b = this.badges.find((item) => item.id === 'badge_word_linker');
      if (b && !b.isUnlocked) {
        b.isUnlocked = true;
        b.unlockedAt = new Date().toISOString();
        updated = true;
      }
    }

    // 5. Chiến binh thử thách tuần (mode === 'weekly' và >= 70%)
    if (attempt.mode === 'weekly' && attempt.percentage >= 70) {
      const b = this.badges.find((item) => item.id === 'badge_weekly_hero');
      if (b && !b.isUnlocked) {
        b.isUnlocked = true;
        b.unlockedAt = new Date().toISOString();
        updated = true;
      }
    }

    if (updated) {
      this.saveBadges();
    }
  }

  // Đánh giá và nhận xét sư phạm theo mức điểm
  public generatePedagogicalFeedback(percentage: number, mode: string): string {
    if (percentage === 100) {
      return 'Xuất sắc tuyệt đối! Em thể hiện vốn hiểu biết sâu sắc về ngôn ngữ mạng, tư duy phản biện vững vàng và chuẩn mực ứng xử học đường mẫu mực của học sinh THPT Long Hiệp.';
    } else if (percentage >= 80) {
      return 'Rất tốt! Em có năng lực nhận diện ngôn cảnh nhạy bén, biết lựa chọn cách diễn đạt phù hợp và phân biệt rõ ràng giữa bông đùa lành mạnh và bạo lực ngôn từ.';
    } else if (percentage >= 60) {
      return 'Khá tốt! Em đã nắm được các nguyên tắc cơ bản của Chuyên đề 2. Hãy chú ý hơn đến các tình huống giao tiếp với thầy cô và kiểm chứng nguồn tin mạng xã hội.';
    } else if (percentage >= 40) {
      return 'Đạt yêu cầu! Em cần lưu ý tra cứu thêm trong Từ điển NETWORD và rèn luyện kỹ năng phân tích ngôn cảnh để tránh nhầm lẫn giữa ngôn ngữ thân mật và ngôn ngữ học đường.';
    } else {
      return 'Cần cố gắng thêm: Em hãy dành thời gian ôn tập lại bài học Chuyên đề 2 (Ngữ văn 11) và tra cứu các mục từ trên NETWORD để củng cố chuẩn mực giao tiếp văn minh.';
    }
  }
}

export const challengeService = new ChallengeService();
