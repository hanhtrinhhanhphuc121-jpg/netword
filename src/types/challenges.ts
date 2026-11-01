/**
 * NETWORD - Định nghĩa phân hệ "Thử thách ngôn ngữ"
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 */

export type ChallengeQuestionType =
  | 'slang_meaning'        // 1. Chọn đúng ý nghĩa của từ
  | 'word_matching'        // 2. Ghép từ với nghĩa
  | 'context_appropriate'  // 3. Chọn cách diễn đạt phù hợp tình huống
  | 'reliable_info'        // 4. Phân biệt thông tin đáng tin cậy
  | 'harm_recognition';    // 5. Nhận diện ngôn từ có nguy cơ gây tổn thương

export type ChallengeDifficulty = 'easy' | 'medium' | 'hard';

export interface MatchingPair {
  id: string;
  term: string;
  meaning: string;
}

export interface ChallengeQuestionItem {
  id: string;
  title: string;
  type: ChallengeQuestionType;
  difficulty: ChallengeDifficulty;
  scenario: string;
  question: string;
  // Dành cho dạng trắc nghiệm thông thường (slang_meaning, context_appropriate, reliable_info, harm_recognition)
  options?: string[];
  correctIndex?: number;
  // Dành cho dạng Ghép từ với nghĩa (word_matching)
  matchingPairs?: MatchingPair[];
  explanation: string;
  points: number;
  unitLesson: string;
  isWeeklyChallenge?: boolean;
  weekNumber?: number;
  createdBy: string;
  createdAt: string;
}

export interface ChallengeUserAnswer {
  questionId: string;
  questionTitle: string;
  type: ChallengeQuestionType;
  userAnswerIndex?: number;
  correctIndex?: number;
  isCorrect: boolean;
  userMatching?: Record<string, string>; // termId -> meaningId
  explanation: string;
  pointsAwarded: number;
}

export interface ChallengeAttempt {
  id: string;
  userId: string;
  userName: string;
  userRole: string;
  mode: 'all' | 'standard' | 'weekly' | ChallengeQuestionType;
  totalQuestions: number;
  correctCount: number;
  totalScore: number;
  score?: number; // alias for totalScore
  maxScore: number;
  percentage: number;
  passed?: boolean;
  pedagogicalFeedback: string;
  badgeAwarded?: string;
  completedAt: string;
  timeSpentSeconds: number;
  answers: ChallengeUserAnswer[];
}

export interface LearningBadge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  category: ChallengeQuestionType | 'general';
  isUnlocked: boolean;
  unlockedAt?: string;
}
