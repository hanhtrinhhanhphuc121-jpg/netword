/**
 * NETWORD - Supabase Client & Storage Engine
 * Hỗ trợ kết nối Supabase trực tiếp khi có URL + Anon Key,
 * hoặc tự động chuyển tiếp mượt mà sang Local Persistent Engine khi chưa kết nối cloud.
 */

import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { WordEntry, WordSuggestion, WordComment } from '../types';
import { INITIAL_WORDS } from '../data/initialWords';
import { normalizeTermClient } from './supabaseSchema';

const STORAGE_KEYS = {
  WORDS: 'netword_words_v1',
  SUGGESTIONS: 'netword_suggestions_v1',
  COMMENTS: 'netword_comments_v1',
  USER_PROFILE: 'netword_user_profile_v1',
  SUPABASE_CONFIG: 'netword_supabase_config_v1',
  BOOKMARKS: 'netword_bookmarks_v1',
};

export interface SupabaseConfig {
  url: string;
  anonKey: string;
  connected: boolean;
}

// Kiểm tra xem chuỗi cấu hình có phải là URL Supabase thật hay chỉ là placeholder mẫu
function isValidSupabaseConfig(url?: string, anonKey?: string): boolean {
  if (!url || !anonKey) return false;
  const trimmedUrl = url.trim();
  const trimmedKey = anonKey.trim();
  if (!trimmedUrl.startsWith('https://')) return false;
  if (trimmedUrl.includes('your-project') || trimmedKey.includes('your-anon')) return false;
  return trimmedKey.length > 20;
}

// Get saved or env Supabase config
export function getSupabaseConfig(): SupabaseConfig {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.SUPABASE_CONFIG);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (isValidSupabaseConfig(parsed.url, parsed.anonKey)) {
        return {
          url: parsed.url,
          anonKey: parsed.anonKey,
          connected: true,
        };
      }
    }
  } catch (e) {
    console.warn('Failed to parse saved Supabase config', e);
  }

  // Fallback to environment variables if present (không bắt buộc)
  const envUrl = ((import.meta as any).env?.VITE_SUPABASE_URL || '').trim();
  const envKey = ((import.meta as any).env?.VITE_SUPABASE_ANON_KEY || '').trim();

  const isConnected = isValidSupabaseConfig(envUrl, envKey);

  return {
    url: isConnected ? envUrl : '',
    anonKey: isConnected ? envKey : '',
    connected: isConnected,
  };
}

export function isDemoMode(): boolean {
  return !getSupabaseConfig().connected;
}

export function saveSupabaseConfig(config: { url: string; anonKey: string }): boolean {
  try {
    const isValid = isValidSupabaseConfig(config.url, config.anonKey);
    const finalConfig: SupabaseConfig = {
      url: config.url.trim(),
      anonKey: config.anonKey.trim(),
      connected: isValid,
    };
    localStorage.setItem(STORAGE_KEYS.SUPABASE_CONFIG, JSON.stringify(finalConfig));
    return true;
  } catch (e) {
    console.error('Error saving Supabase config', e);
    return false;
  }
}

export function clearSupabaseConfig(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.SUPABASE_CONFIG);
  } catch (e) {
    console.error('Error clearing Supabase config', e);
  }
}

// Create client instance if configured (ANON KEY ONLY - never service role key in frontend)
export function getActiveSupabaseClient(): SupabaseClient | null {
  const config = getSupabaseConfig();
  if (config.connected && config.url && config.anonKey) {
    try {
      return createClient(config.url, config.anonKey);
    } catch (e) {
      console.warn('Invalid Supabase configuration', e);
      return null;
    }
  }
  return null;
}

// Local Storage Helper
function getStoredWords(): WordEntry[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.WORDS);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading words from storage', e);
  }
  localStorage.setItem(STORAGE_KEYS.WORDS, JSON.stringify(INITIAL_WORDS));
  return INITIAL_WORDS;
}

function saveStoredWords(words: WordEntry[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.WORDS, JSON.stringify(words));
  } catch (e) {
    console.error('Error saving words to storage', e);
  }
}

function getStoredSuggestions(): WordSuggestion[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.SUGGESTIONS);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading suggestions', e);
  }
  const initialSuggestions: WordSuggestion[] = [
    {
      id: 'sug-1',
      word: 'Simp',
      category: 'borrowed',
      netMeaning: 'Mê muội, quá chiều chuộng hoặc cung phụng một người mà không được đáp lại tình cảm tương xứng.',
      origin: 'Bắt nguồn từ tiếng Anh lóng Internet (Sucka/Simpleton Idolizing Mediocre Pussy), trở thành từ cửa miệng trên MXH Việt Nam.',
      exampleContext: 'Nó thức nguyên đêm chép bài giùm crush luôn á, simp chúa rồi!',
      schoolAppropriateness: 'acceptable_casual',
      submittedBy: 'Nguyễn Văn An',
      submitterSchool: 'THCS và THPT Long Hiệp (11A2)',
      submittedAt: '2024-10-15',
      status: 'pending',
    },
    {
      id: 'sug-2',
      word: 'Trầm kẽm',
      category: 'slang',
      netMeaning: 'Nói trại từ "Trầm cảm", dùng để miêu tả tâm trạng chán chường, bế tắc hài hước trước khối lượng bài tập hoặc sự việc bất như ý.',
      origin: 'Kẽm là kim loại ký hiệu Zn trong Hóa học, học sinh chơi chữ đồng âm với Trầm cảm.',
      exampleContext: 'Nhìn cái đề Toán hình học không gian mà trầm kẽm thiệt sự luôn á.',
      schoolAppropriateness: 'strictly_informal',
      submittedBy: 'Lê Thị Thu Thảo',
      submitterSchool: 'THCS và THPT Long Hiệp (11A1)',
      submittedAt: '2024-10-18',
      status: 'pending',
    },
    {
      id: 'sug-3',
      word: 'Bật mode',
      category: 'borrowed',
      netMeaning: 'Kích hoạt một trạng thái tập trung cao độ hoặc phong thái cụ thể (ví dụ: bật mode học bài, bật mode nghiêm túc).',
      origin: 'Từ mượn tiếng Anh "mode" (chế độ máy tính/điện thoại).',
      exampleContext: 'Còn 3 ngày nữa thi học kỳ rồi, bật mode cày ngày cày đêm thôi!',
      schoolAppropriateness: 'acceptable_casual',
      submittedBy: 'Trần Hoàng Long',
      submitterSchool: 'THCS và THPT Long Hiệp (11A4)',
      submittedAt: '2024-10-20',
      status: 'approved',
      moderatorFeedback: 'Từ ngữ mang tính tích cực thúc đẩy tinh thần học tập. Đã được duyệt đưa vào từ điển.',
      reviewedBy: 'Trầm Thanh Tuấn (GV)',
      reviewedAt: '2024-10-21',
    }
  ];
  localStorage.setItem(STORAGE_KEYS.SUGGESTIONS, JSON.stringify(initialSuggestions));
  return initialSuggestions;
}

function saveStoredSuggestions(suggestions: WordSuggestion[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SUGGESTIONS, JSON.stringify(suggestions));
  } catch (e) {
    console.error('Error saving suggestions', e);
  }
}

function getStoredComments(): WordComment[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.COMMENTS);
    if (stored) return JSON.parse(stored);
  } catch (e) {
    console.error('Error reading comments', e);
  }
  const initialComments: WordComment[] = [
    {
      id: 'c1',
      wordId: 'nw-001',
      authorName: 'Thầy Trầm Thanh Tuấn',
      authorRole: 'teacher',
      authorSchool: 'THCS và THPT Long Hiệp',
      content: 'Các em lưu ý từ "flex" rất hay dùng vui trong giờ ra chơi nhưng khi viết bài văn nghị luận xã hội về đức tính khiêm tốn, ta phải dùng từ tiếng Việt chuẩn mực nhé!',
      createdAt: '2024-09-06'
    },
    {
      id: 'c2',
      wordId: 'nw-001',
      authorName: 'Trần Gia Hân',
      authorRole: 'student',
      authorSchool: 'Lớp 11A1',
      content: 'Dạ chúng em hiểu rồi ạ! Đọc ví dụ hội thoại thấy gần gũi với đời sống học trò tụi em lắm.',
      createdAt: '2024-09-07'
    }
  ];
  localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(initialComments));
  return initialComments;
}

// Data Service
export const dictionaryService = {
  // 1. Get words (từ Supabase hoặc Local storage fallback)
  async getWords(): Promise<WordEntry[]> {
    const client = getActiveSupabaseClient();
    if (client) {
      try {
        // Thử truy vấn bảng terms quan hệ mới
        const { data: termsData, error: termsError } = await client
          .from('terms')
          .select(`
            *,
            term_meanings (*),
            term_examples (*)
          `)
          .eq('status', 'published')
          .order('created_at', { ascending: false });

        if (!termsError && termsData && termsData.length > 0) {
          return termsData.map((t: any) => {
            const firstMeaning = t.term_meanings?.[0] || {};
            const firstExample = t.term_examples?.[0] || {};
            return {
              id: t.id,
              word: t.term,
              pronunciation: t.pronunciation,
              category: t.category,
              literalMeaning: t.term_meanings?.find((m: any) => m.meaning_type === 'literal_meaning')?.definition || 'Nghĩa gốc đang cập nhật.',
              netMeaning: firstMeaning.definition || 'Nghĩa mạng đang cập nhật.',
              origin: t.tags?.join(', ') || 'Nguồn gốc học đường.',
              dialogueExample: firstExample.dialogue || [],
              academicGuidance: firstMeaning.academic_guidance || 'Lưu ý sử dụng đúng nơi đúng lúc.',
              schoolAppropriateness: firstMeaning.school_appropriateness || 'acceptable_casual',
              standardScore: firstMeaning.standard_score || 3,
              tags: t.tags || [],
              likesCount: t.likes_count || 0,
              viewsCount: t.views_count || 0,
              status: t.status === 'published' ? 'approved' : 'pending',
              author: t.author_name || 'Tổ Ngữ văn',
              createdAt: t.created_at,
            };
          });
        }

        // Hoặc truy vấn bảng networds cũ nếu đã tạo trước đó
        const { data: legacyData, error: legacyError } = await client
          .from('networds')
          .select('*')
          .order('created_at', { ascending: false });

        if (!legacyError && legacyData && legacyData.length > 0) {
          return legacyData;
        }
      } catch (err) {
        console.warn('Supabase fetch failed, using local storage fallback', err);
      }
    }
    // Fallback to local storage
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getStoredWords());
      }, 150);
    });
  },

  // 2. Get word by ID
  async getWordById(id: string): Promise<WordEntry | null> {
    const words = await this.getWords();
    return words.find((w) => w.id === id) || null;
  },

  // 3. Add or update word
  async saveWord(word: WordEntry): Promise<boolean> {
    const client = getActiveSupabaseClient();
    if (client) {
      try {
        // Thử upsert vào bảng terms mới
        const { error } = await client.from('terms').upsert({
          id: word.id,
          term: word.word,
          pronunciation: word.pronunciation,
          category: word.category,
          status: 'published',
          author_name: word.author,
          tags: word.tags,
          likes_count: word.likesCount,
          views_count: word.viewsCount,
        });

        if (!error) {
          // Upsert meaning
          await client.from('term_meanings').upsert({
            term_id: word.id,
            meaning_order: 1,
            meaning_type: 'net_meaning',
            definition: word.netMeaning,
            academic_guidance: word.academicGuidance,
            school_appropriateness: word.schoolAppropriateness,
            standard_score: word.standardScore,
          });

          // Upsert example
          if (word.dialogueExample && word.dialogueExample.length > 0) {
            await client.from('term_examples').upsert({
              term_id: word.id,
              context_title: 'Hội thoại học đường',
              dialogue: word.dialogueExample,
            });
          }
          return true;
        }
      } catch (err) {
        console.warn('Supabase save failed, falling back to local storage', err);
      }
    }

    const words = getStoredWords();
    const index = words.findIndex((w) => w.id === word.id);
    if (index >= 0) {
      words[index] = { ...word, updatedAt: new Date().toISOString() };
    } else {
      words.unshift({ ...word, createdAt: new Date().toISOString() });
    }
    saveStoredWords(words);
    return true;
  },

  // 4. Delete word
  async deleteWord(id: string): Promise<boolean> {
    const client = getActiveSupabaseClient();
    if (client) {
      try {
        await client.from('terms').delete().eq('id', id);
        await client.from('networds').delete().eq('id', id);
      } catch (e) {
        console.warn('Supabase delete error', e);
      }
    }
    const words = getStoredWords().filter((w) => w.id !== id);
    saveStoredWords(words);
    return true;
  },

  // 5. Increment likes
  async toggleLike(id: string): Promise<number> {
    const words = getStoredWords();
    const word = words.find((w) => w.id === id);
    if (word) {
      word.likesCount = (word.likesCount || 0) + 1;
      saveStoredWords(words);

      const client = getActiveSupabaseClient();
      if (client) {
        client.from('terms').update({ likes_count: word.likesCount }).eq('id', id).then();
      }
      return word.likesCount;
    }
    return 0;
  },

  // 6. Suggestions
  async getSuggestions(): Promise<WordSuggestion[]> {
    const client = getActiveSupabaseClient();
    if (client) {
      try {
        const { data, error } = await client.from('submissions').select('*').order('created_at', { ascending: false });
        if (!error && data && data.length > 0) {
          return data.map((s: any) => ({
            id: s.id,
            word: s.word,
            category: s.category,
            netMeaning: s.proposed_meaning,
            origin: s.origin || '',
            exampleContext: s.example_context,
            evidenceUrlOrProof: s.evidence_url_or_proof,
            schoolAppropriateness: s.school_appropriateness,
            submittedBy: s.submitter_name,
            submitterEmail: s.submitter_email,
            submitterSchool: s.submitter_school,
            submittedAt: s.created_at?.split('T')[0] || '',
            status: s.status,
          }));
        }
      } catch (err) {
        console.warn('Supabase submissions fetch fallback', err);
      }
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getStoredSuggestions());
      }, 150);
    });
  },

  async addSuggestion(suggestion: Omit<WordSuggestion, 'id' | 'submittedAt' | 'status'>): Promise<WordSuggestion> {
    const client = getActiveSupabaseClient();
    const newSug: WordSuggestion = {
      ...suggestion,
      id: `sug-${Date.now()}`,
      submittedAt: new Date().toISOString().split('T')[0],
      status: 'pending',
    };

    if (client) {
      try {
        await client.from('submissions').insert({
          submitter_name: suggestion.submittedBy,
          submitter_school: suggestion.submitterSchool,
          submitter_email: suggestion.submitterEmail,
          word: suggestion.word,
          category: suggestion.category,
          proposed_meaning: suggestion.netMeaning,
          origin: suggestion.origin,
          example_context: suggestion.exampleContext,
          evidence_url_or_proof: suggestion.evidenceUrlOrProof,
          school_appropriateness: suggestion.schoolAppropriateness,
          status: 'pending',
        });
      } catch (err) {
        console.warn('Supabase add suggestion error', err);
      }
    }

    const suggestions = getStoredSuggestions();
    suggestions.unshift(newSug);
    saveStoredSuggestions(suggestions);
    return newSug;
  },

  async updateSuggestionStatus(
    id: string,
    status: WordSuggestion['status'],
    feedback?: string,
    reviewer?: string
  ): Promise<boolean> {
    const suggestions = getStoredSuggestions();
    const target = suggestions.find((s) => s.id === id);
    if (!target) return false;

    target.status = status;
    if (feedback) target.moderatorFeedback = feedback;
    if (reviewer) target.reviewedBy = reviewer;
    target.reviewedAt = new Date().toISOString().split('T')[0];

    saveStoredSuggestions(suggestions);

    const client = getActiveSupabaseClient();
    if (client) {
      try {
        await client.from('submissions').update({ status }).eq('id', id);
        if (feedback && reviewer) {
          await client.from('reviews').insert({
            submission_id: id,
            reviewer_name: reviewer,
            decision: status === 'approved' ? 'approved' : 'rejected',
            pedagogical_feedback: feedback,
            points_awarded: status === 'approved' ? 30 : 0,
          });
        }
      } catch (e) {
        console.warn('Supabase update submission error', e);
      }
    }

    // If approved, create entry into dictionary
    if (status === 'approved') {
      const words = getStoredWords();
      const existing = words.find((w) => w.word.toLowerCase() === target.word.toLowerCase());
      if (!existing) {
        const newWord: WordEntry = {
          id: `nw-${Date.now()}`,
          word: target.word,
          category: target.category,
          literalMeaning: 'Từ lóng mới được học sinh khảo sát và bổ sung.',
          netMeaning: target.netMeaning,
          origin: target.origin || 'Đóng góp bởi học sinh THPT.',
          dialogueExample: [
            {
              id: 'd-new',
              sender: target.submittedBy,
              isMe: false,
              text: target.exampleContext,
              time: 'Vừa xong'
            }
          ],
          academicGuidance: target.moderatorFeedback || 'Mục từ đã được Ban biên tập kiểm duyệt và bổ sung vào từ điển.',
          schoolAppropriateness: target.schoolAppropriateness,
          standardScore: 3,
          tags: ['Mới duyệt', 'Học sinh đề xuất'],
          likesCount: 1,
          viewsCount: 10,
          status: 'approved',
          author: `${target.submittedBy} (${target.submitterSchool})`,
          createdAt: new Date().toISOString().split('T')[0]
        };
        words.unshift(newWord);
        saveStoredWords(words);
      }
    }
    return true;
  },

  // 7. Duplicate Check Mechanism (Kiểm tra từ trùng phía Client & RPC)
  async checkDuplicate(termText: string): Promise<{
    isDuplicate: boolean;
    matches: any[];
    existingWord?: { word: string; netMeaning?: string; category?: string; status?: string };
  }> {
    const norm = normalizeTermClient(termText);
    if (!norm) return { isDuplicate: false, matches: [] };

    const client = getActiveSupabaseClient();
    if (client) {
      try {
        const { data, error } = await client.rpc('check_duplicate_term', { p_term: termText });
        if (!error && data && data.length > 0) {
          const first = data[0];
          return {
            isDuplicate: true,
            matches: data,
            existingWord: {
              word: first.term_name || first.term || termText,
              netMeaning: 'Mục từ đã có trong cơ sở dữ liệu Supabase.',
              category: first.category,
              status: first.status,
            },
          };
        }
      } catch (err) {
        console.warn('RPC check_duplicate_term fallback', err);
      }
    }

    // Fallback: check in local words
    const words = getStoredWords();
    const localMatches = words.filter((w) => {
      const wNorm = normalizeTermClient(w.word);
      return wNorm === norm || wNorm.includes(norm) || norm.includes(wNorm);
    });

    const primaryMatch = localMatches.find((w) => normalizeTermClient(w.word) === norm) || localMatches[0];

    return {
      isDuplicate: localMatches.length > 0,
      matches: localMatches.map((w) => ({
        term_name: w.word,
        status: w.status,
        category: w.category,
        similarity_type: normalizeTermClient(w.word) === norm ? 'exact_match' : 'partial_match',
      })),
      existingWord: primaryMatch ? {
        word: primaryMatch.word,
        netMeaning: primaryMatch.netMeaning,
        category: primaryMatch.category,
        status: primaryMatch.status,
      } : undefined,
    };
  },

  // 8. Comments
  async getComments(wordId: string): Promise<WordComment[]> {
    const comments = getStoredComments();
    return comments.filter((c) => c.wordId === wordId);
  },

  async addComment(comment: Omit<WordComment, 'id' | 'createdAt'>): Promise<WordComment> {
    const comments = getStoredComments();
    const newComment: WordComment = {
      ...comment,
      id: `comm-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
    };
    comments.push(newComment);
    try {
      localStorage.setItem(STORAGE_KEYS.COMMENTS, JSON.stringify(comments));
    } catch (e) {
      console.error(e);
    }
    return newComment;
  },

  // 9. Bookmarks
  getBookmarks(): string[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
      return saved ? JSON.parse(saved) : ['nw-001', 'nw-003'];
    } catch {
      return ['nw-001', 'nw-003'];
    }
  },

  toggleBookmark(wordId: string): boolean {
    const bookmarks = this.getBookmarks();
    const exists = bookmarks.includes(wordId);
    let updated: string[];
    if (exists) {
      updated = bookmarks.filter((id) => id !== wordId);
    } else {
      updated = [...bookmarks, wordId];
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
    return !exists;
  },

  // 10. Reset to initial data
  resetToDefault(): void {
    localStorage.removeItem(STORAGE_KEYS.WORDS);
    localStorage.removeItem(STORAGE_KEYS.SUGGESTIONS);
    localStorage.removeItem(STORAGE_KEYS.COMMENTS);
  },

  // 11. Migration & SQL Exporters
  getMigrationFilePath(): string {
    return '/supabase/migrations/20261031_000001_create_netword_schema.sql';
  },

  getSeedFilePath(): string {
    return '/supabase/seed.sql';
  },

  getVerificationFilePath(): string {
    return '/supabase/verify_integrity.sql';
  },

  getERDFilePath(): string {
    return '/supabase/schema_erd.md';
  }
};
