/**
 * NETWORD - Supabase Relational Database Schema & TypeScript Models
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV: Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 */

export type TermStatus =
  | 'draft'
  | 'pending'
  | 'needs_revision'
  | 'published'
  | 'rejected'
  | 'archived';

export type UserRole = 'student' | 'editor' | 'teacher_admin';

export type MeaningType =
  | 'net_meaning'
  | 'literal_meaning'
  | 'extended_meaning'
  | 'metaphoric_meaning';

export type SourcePlatform =
  | 'tiktok'
  | 'facebook'
  | 'youtube'
  | 'school_campus'
  | 'online_game'
  | 'rap_music'
  | 'forum_other';

export interface ProfileRow {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  school: string;
  grade?: string;
  title?: string;
  points: number;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface TermRow {
  id: string;
  term: string;
  normalized_term: string;
  pronunciation?: string;
  category: string;
  status: TermStatus;
  author_id?: string;
  author_name: string;
  tags: string[];
  likes_count: number;
  views_count: number;
  created_at: string;
  updated_at: string;
}

export interface TermMeaningRow {
  id: string;
  term_id: string;
  meaning_order: number;
  meaning_type: MeaningType;
  definition: string;
  academic_guidance: string;
  school_appropriateness: string;
  standard_score: number;
  created_at: string;
  updated_at: string;
}

export interface TermExampleRow {
  id: string;
  term_id: string;
  meaning_id?: string;
  context_title: string;
  dialogue: Array<{ id: string; sender: string; isMe: boolean; text: string; time: string }>;
  notes?: string;
  audio_url?: string;
  created_at: string;
}

export interface TermSourceRow {
  id: string;
  term_id: string;
  platform: SourcePlatform;
  source_url?: string;
  surveyor_id?: string;
  surveyor_name: string;
  surveyed_date: string;
  cultural_context: string;
  created_at: string;
}

export interface TermRevisionRow {
  id: string;
  term_id: string;
  editor_id?: string;
  editor_name: string;
  revision_summary: string;
  previous_snapshot: Record<string, any>;
  updated_snapshot: Record<string, any>;
  created_at: string;
}

export interface SubmissionRow {
  id: string;
  submitted_by?: string;
  submitter_name: string;
  submitter_school: string;
  submitter_email?: string;
  word: string;
  normalized_word: string;
  category: string;
  proposed_meaning: string;
  origin?: string;
  example_context: string;
  evidence_url_or_proof?: string;
  school_appropriateness: string;
  status: 'pending' | 'approved' | 'rejected' | 'needs_revision';
  created_at: string;
  updated_at: string;
}

export interface ReviewRow {
  id: string;
  submission_id: string;
  term_id?: string;
  reviewer_id?: string;
  reviewer_name: string;
  reviewer_role: 'editor' | 'teacher_admin';
  decision: 'approved' | 'rejected' | 'needs_revision';
  pedagogical_feedback: string;
  points_awarded: number;
  created_at: string;
}

export interface FavoriteRow {
  id: string;
  user_id: string;
  term_id: string;
  created_at: string;
}

export interface QuizQuestionRow {
  id: string;
  title: string;
  scenario?: string;
  category: 'context_awareness' | 'slang_meaning' | 'linguistic_purity';
  question: string;
  options: string[];
  correct_index: number;
  explanation: string;
  points: number;
  unit_lesson: string;
  is_active: boolean;
  created_at: string;
}

export interface QuizAttemptRow {
  id: string;
  user_id: string;
  score: number;
  total_questions: number;
  details: any[];
  created_at: string;
}

export interface ActivityLogRow {
  id: string;
  user_id?: string;
  action: string;
  entity_type: string;
  entity_id?: string;
  metadata: Record<string, any>;
  created_at: string;
}

export interface ReportRow {
  id: string;
  term_id: string;
  reported_by?: string;
  reporter_name?: string;
  reason: 'offensive_content' | 'inaccurate_meaning' | 'inappropriate_for_school' | 'duplicate_term' | 'other';
  details: string;
  status: 'open' | 'investigating' | 'resolved' | 'dismissed';
  resolution_note?: string;
  resolved_by?: string;
  created_at: string;
  updated_at: string;
}

/**
 * Hàm chuẩn hóa từ phía frontend tương đương hàm normalize_term trên PostgreSQL
 */
export function normalizeTermClient(term: string): string {
  if (!term) return '';
  return term
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/\s+/g, ' ')
    .trim();
}
