/**
 * NETWORD - Định nghĩa kiểu dữ liệu cho chức năng "Diễn đạt phù hợp"
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển: Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 */

export type ExpressionContext =
  | 'friend_chat'         // Trò chuyện với bạn bè
  | 'social_comment'       // Bình luận mạng xã hội
  | 'teacher_exchange'     // Trao đổi với thầy cô
  | 'class_announcement'   // Thông báo của lớp
  | 'academic_writing';    // Bài viết học tập (Văn nghị luận)

export interface ContextDefinition {
  id: ExpressionContext;
  label: string;
  shortDesc: string;
  iconName: string;
  tone: string;
  targetAudience: string;
  principles: string[];
}

export interface DetectedTermMatch {
  rawTerm: string;
  matchedId?: string;
  officialWord?: string;
  replacement: string;
  pedagogicalNuance: string;
}

export interface ExpressionAnalysisResult {
  id: string;
  originalSentence: string;
  context: ExpressionContext;
  suggestedExpression: string;
  detectedTerms: DetectedTermMatch[];
  differenceExplanation: string;
  pedagogicalNotes: string[];
  isAppropriateAsIs: boolean;
  hasInsufficientData: boolean;
  insufficientDataReason?: string;
  sourceType: 'approved_dictionary_rules' | 'ai_generated';
  aiLabel?: string;
  safetyCheck: {
    passed: boolean;
    moderationNote?: string;
  };
  analyzedAt: string;
}

export interface SampleExpressionPrompt {
  id: string;
  sentence: string;
  suggestedContext: ExpressionContext;
  description: string;
  slangContained: string[];
}
