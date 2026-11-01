import React, { useState, useMemo } from 'react';
import { WordEntry, ActiveTab, WordCategory, SchoolAppropriateness } from '../../types';
import { CATEGORY_LABELS, APPROPRIATENESS_LABELS, NETWORD_TOPIC_THEMES } from '../../data/initialWords';
import { useAuth } from '../../services/authContext';
import { SearchBar } from '../ui/SearchBar';
import { Card } from '../ui/Card';
import {
  Bookmark,
  Heart,
  Eye,
  SlidersHorizontal,
  GraduationCap,
  ArrowRight,
  PlusCircle,
  RefreshCw,
  AlertCircle,
  HelpCircle,
  Sparkles,
  BookOpen,
  Layers,
} from 'lucide-react';

interface DictionaryViewProps {
  words: WordEntry[];
  loading: boolean;
  error: string | null;
  onRefresh: () => void;
  onNavigate: (tab: ActiveTab, wordId?: string) => void;
  initialCategory?: WordCategory | null;
  initialSearch?: string;
  onToggleLike: (id: string) => void;
}

export const DictionaryView: React.FC<DictionaryViewProps> = ({
  words,
  loading,
  error,
  onRefresh,
  onNavigate,
  initialCategory = null,
  initialSearch = '',
  onToggleLike,
}) => {
  const { isBookmarked, toggleBookmark } = useAuth();
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [selectedCurriculumSection, setSelectedCurriculumSection] = useState<string | null>(null);
  const [selectedTopicTheme, setSelectedTopicTheme] = useState<string>('all');
  const [selectedAppropriateness, setSelectedAppropriateness] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'alpha' | 'code'>('code');
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);

  // Helper chuan hoa khong dau va chu thuong
  const normalize = (text: string) => {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[đĐ]/g, 'd')
      .replace(/\s+/g, ' ')
      .trim();
  };

  // Filter and sort words
  const filteredWords = useMemo(() => {
    let result = [...words];

    if (searchTerm.trim()) {
      const rawQuery = searchTerm.toLowerCase().trim();
      const normQuery = normalize(searchTerm);

      result = result.filter((w) => {
        // Tim truc tiep
        const rawMatch =
          w.word.toLowerCase().includes(rawQuery) ||
          (w.officialCode && w.officialCode.toLowerCase().includes(rawQuery)) ||
          (w.topicTheme && w.topicTheme.toLowerCase().includes(rawQuery)) ||
          w.netMeaning.toLowerCase().includes(rawQuery) ||
          w.literalMeaning.toLowerCase().includes(rawQuery) ||
          (w.pronunciation && w.pronunciation.toLowerCase().includes(rawQuery)) ||
          (w.origin && w.origin.toLowerCase().includes(rawQuery)) ||
          (w.academicGuidance && w.academicGuidance.toLowerCase().includes(rawQuery)) ||
          (w.tags && w.tags.some((t) => t.toLowerCase().includes(rawQuery)));

        if (rawMatch) return true;

        // Tim khong dau
        const normMatch =
          normalize(w.word).includes(normQuery) ||
          (w.officialCode && normalize(w.officialCode).includes(normQuery)) ||
          (w.topicTheme && normalize(w.topicTheme).includes(normQuery)) ||
          normalize(w.netMeaning).includes(normQuery) ||
          normalize(w.literalMeaning).includes(normQuery) ||
          (w.origin && normalize(w.origin).includes(normQuery)) ||
          (w.academicGuidance && normalize(w.academicGuidance).includes(normQuery)) ||
          (w.tags && w.tags.some((t) => normalize(t).includes(normQuery)));

        return normMatch;
      });
    }

    if (selectedCategory !== 'all') {
      result = result.filter((w) => w.category === selectedCategory);
    }

    if (selectedTopicTheme !== 'all') {
      result = result.filter((w) => w.topicTheme === selectedTopicTheme);
    }

    if (selectedCurriculumSection) {
      if (selectedCurriculumSection === 'slang_common') {
        result = result.filter((w) => w.tags && w.tags.includes('Tiếng lóng phổ biến'));
      } else if (selectedCurriculumSection === 'abbreviations') {
        result = result.filter((w) => w.tags && w.tags.includes('Từ viết tắt'));
      } else if (selectedCurriculumSection === 'genz_slang') {
        result = result.filter((w) => w.tags && w.tags.includes('Tiếng lóng Gen Z'));
      }
    }

    if (selectedAppropriateness !== 'all') {
      result = result.filter((w) => w.schoolAppropriateness === selectedAppropriateness);
    }

    if (onlyBookmarks) {
      result = result.filter((w) => isBookmarked(w.id));
    }

    if (sortBy === 'code') {
      result.sort((a, b) => (a.stt || 0) - (b.stt || 0));
    } else if (sortBy === 'popular') {
      result.sort((a, b) => (b.likesCount || 0) - (a.likesCount || 0));
    } else if (sortBy === 'latest') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sortBy === 'alpha') {
      result.sort((a, b) => a.word.localeCompare(b.word, 'vi'));
    }

    return result;
  }, [words, searchTerm, selectedCategory, selectedTopicTheme, selectedCurriculumSection, selectedAppropriateness, sortBy, onlyBookmarks, isBookmarked]);

  // Goi y tu gan dung khi khong co ket qua
  const suggestedWords = useMemo(() => {
    if (filteredWords.length > 0 || !searchTerm.trim()) return [];
    const normQuery = normalize(searchTerm);
    if (normQuery.length < 2) return [];

    return words
      .filter((w) => {
        const normW = normalize(w.word);
        return (
          normW.slice(0, 2) === normQuery.slice(0, 2) ||
          normW.includes(normQuery.slice(0, 3)) ||
          normQuery.includes(normW.slice(0, 3))
        );
      })
      .slice(0, 4);
  }, [words, filteredWords, searchTerm]);

  return (
    <div className="space-y-6 pb-16 animate-in fade-in duration-300">
      {/* ============================================================ */}
      {/* 1. VIEW HEADER và ACTION                                      */}
      {/* ============================================================ */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            <GraduationCap className="w-4 h-4" />
            <span>Chuyên đề 2: Ngữ văn 11 · Trường THCS và THPT Long Hiệp</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Từ điển ngôn ngữ không gian mạng
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Tra cứu toàn bộ mục từ, nguồn gốc ngữ nghĩa, đối chiếu ngữ cảnh và định hướng sư phạm
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => onNavigate('curriculum')}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 font-bold text-xs border border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition cursor-pointer active:scale-95 shadow-xs"
          >
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>4 Nhóm Ngữ liệu CĐ2</span>
          </button>

          <button
            onClick={() => onNavigate('suggest')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-md shadow-indigo-100 dark:shadow-none hover:from-blue-700 hover:to-indigo-700 transition cursor-pointer active:scale-95"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Đề xuất từ mới</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. SEARCH và CONTROL TOOLBAR                                  */}
      {/* ============================================================ */}
      <Card className="space-y-4 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Tra cứu từ ngữ, phiên âm, nghĩa mạng, nghĩa gốc (Phím / để tra)..."
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <select
              aria-label="Sắp xếp theo tiêu chí"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold px-3 py-2.5 rounded-xl text-slate-700 dark:text-slate-300 outline-none hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer"
            >
              <option value="code" className="dark:bg-slate-900">📋 STT (NW-0001 → NW-0300)</option>
              <option value="popular" className="dark:bg-slate-900">🔥 Phổ biến nhất</option>
              <option value="latest" className="dark:bg-slate-900">✨ Mới cập nhật</option>
              <option value="alpha" className="dark:bg-slate-900">🔤 Thứ tự A - Z</option>
            </select>

            <button
              onClick={() => setOnlyBookmarks(!onlyBookmarks)}
              className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                onlyBookmarks
                  ? 'bg-amber-500 text-white border-amber-600'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title="Chỉ hiển thị các từ em đã đánh dấu lưu"
            >
              <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarks ? 'fill-white' : ''}`} />
              <span className="hidden sm:inline">Đã lưu</span>
            </button>

            <button
              onClick={() => setShowFiltersMobile(!showFiltersMobile)}
              className={`sm:hidden flex items-center gap-1 px-3 py-2.5 rounded-xl border text-xs font-bold ${
                showFiltersMobile
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Lọc ({filteredWords.length})</span>
            </button>
          </div>
        </div>

        {/* Filter Toolbar (Segmented Controls) */}
        <div
          className={`${
            showFiltersMobile ? 'block' : 'hidden'
          } sm:block space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800`}
        >
          {/* Quick Curriculum 4-Sections Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-900/60 text-xs">
            <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300 mr-1 uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              Chuyên đề 2:
            </span>
            <button
              onClick={() => setSelectedCurriculumSection(null)}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                selectedCurriculumSection === null
                  ? 'bg-purple-700 text-white font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-purple-100 dark:hover:bg-purple-950'
              }`}
            >
              Tất cả từ điển
            </button>
            <button
              onClick={() => setSelectedCurriculumSection('slang_common')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                selectedCurriculumSection === 'slang_common'
                  ? 'bg-indigo-600 text-white font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-slate-700'
              }`}
            >
              📌 1. Tiếng lóng (20)
            </button>
            <button
              onClick={() => setSelectedCurriculumSection('abbreviations')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                selectedCurriculumSection === 'abbreviations'
                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-slate-700'
              }`}
            >
              ⚡ 2. Viết tắt (16)
            </button>
            <button
              onClick={() => setSelectedCurriculumSection('genz_slang')}
              className={`px-2.5 py-1 rounded-lg font-medium transition cursor-pointer ${
                selectedCurriculumSection === 'genz_slang'
                  ? 'bg-purple-600 text-white font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-slate-700'
              }`}
            >
              🔥 3. Lóng Gen Z (20)
            </button>
            <button
              onClick={() => onNavigate('curriculum')}
              className="px-2.5 py-1 rounded-lg font-bold transition cursor-pointer bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center gap-1 shadow-xs ml-auto"
            >
              💬 4. Câu MXH và Chi tiết <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 12 Nhóm Chủ Đề Chuyên Đề 2 (300 từ) */}
          <div className="flex flex-wrap items-center gap-2 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-xs">
            <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1 shrink-0">
              <Layers className="w-3.5 h-3.5 text-indigo-500" />
              12 Nhóm chủ đề:
            </span>
            <select
              value={selectedTopicTheme}
              onChange={(e) => setSelectedTopicTheme(e.target.value)}
              className="flex-1 min-w-[200px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg text-slate-800 dark:text-slate-200 outline-none hover:border-indigo-400 transition cursor-pointer"
            >
              <option value="all">Tất cả 12 nhóm chủ đề (300 từ)</option>
              {NETWORD_TOPIC_THEMES.map((theme, idx) => {
                const count = words.filter((w) => w.topicTheme === theme).length;
                return (
                  <option key={theme} value={theme}>
                    {idx + 1}. {theme} ({count} từ)
                  </option>
                );
              })}
            </select>
            {selectedTopicTheme !== 'all' && (
              <button
                onClick={() => setSelectedTopicTheme('all')}
                className="text-xs text-rose-600 dark:text-rose-400 font-bold hover:underline cursor-pointer px-1 shrink-0"
              >
                ✕ Đặt lại
              </button>
            )}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 mr-1 uppercase tracking-wider">
              Danh mục:
            </span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Tất cả ({words.length})
            </button>
            {(Object.keys(CATEGORY_LABELS) as WordCategory[]).map((catKey) => {
              const count = words.filter((w) => w.category === catKey).length;
              const isSelected = selectedCategory === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setSelectedCategory(catKey)}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {CATEGORY_LABELS[catKey].label} ({count})
                </button>
              );
            })}
          </div>

          {/* Appropriateness level filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 mr-1 uppercase tracking-wider">
              Chuẩn mực:
            </span>
            <button
              onClick={() => setSelectedAppropriateness('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${
                selectedAppropriateness === 'all'
                  ? 'bg-indigo-600 text-white font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Mọi mức độ
            </button>
            {(Object.keys(APPROPRIATENESS_LABELS) as SchoolAppropriateness[]).map((appKey) => {
              const isSelected = selectedAppropriateness === appKey;
              return (
                <button
                  key={appKey}
                  onClick={() => setSelectedAppropriateness(appKey)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer border ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 font-bold'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {APPROPRIATENESS_LABELS[appKey].badge}
                </button>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Result Count Status Line */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <div>
          Đang hiển thị{' '}
          <span className="font-bold text-slate-900 dark:text-slate-100 tabular-nums">
            {filteredWords.length}
          </span>{' '}
          / {words.length} mục từ
          {searchTerm && (
            <span>
              {' '}
              phù hợp với từ khóa "<strong>{searchTerm}</strong>"
            </span>
          )}
        </div>
        {(searchTerm || selectedCategory !== 'all' || selectedAppropriateness !== 'all' || onlyBookmarks) && (
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedAppropriateness('all');
              setOnlyBookmarks(false);
            }}
            className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
          >
            Xóa mọi bộ lọc
          </button>
        )}
      </div>

      {/* ============================================================ */}
      {/* 3. LOADING STATE                                             */}
      {/* ============================================================ */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs animate-pulse space-y-3"
            >
              <div className="flex justify-between items-center">
                <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-1/3" />
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-1/4" />
              </div>
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-full" />
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded-lg w-4/5" />
              <div className="h-10 bg-slate-100 dark:bg-slate-800/60 rounded-xl w-full mt-3" />
            </div>
          ))}
        </div>
      )}

      {/* ============================================================ */}
      {/* 4. ERROR STATE                                               */}
      {/* ============================================================ */}
      {!loading && error && (
        <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 p-6 rounded-3xl text-center space-y-3">
          <AlertCircle className="w-8 h-8 text-rose-500 mx-auto" />
          <h3 className="text-base font-bold text-rose-900 dark:text-rose-200">
            Không thể tải dữ liệu từ điển
          </h3>
          <p className="text-xs text-rose-700 dark:text-rose-300 max-w-md mx-auto">{error}</p>
          <button
            onClick={onRefresh}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-600 text-white text-xs font-bold rounded-xl hover:bg-rose-700 transition cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Thử lại</span>
          </button>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5. EMPTY SEARCH STATE                                        */}
      {/* ============================================================ */}
      {!loading && !error && filteredWords.length === 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-10 text-center space-y-4 max-w-lg mx-auto shadow-xs">
          <div className="w-16 h-16 rounded-3xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
            <HelpCircle className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Chưa tìm thấy từ ngữ phù hợp
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Từ khóa "<strong>{searchTerm}</strong>" chưa có trong dữ liệu hiện tại của trường Long Hiệp.
            </p>

            {suggestedWords.length > 0 && (
              <div className="pt-3">
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mb-2">
                  Gợi ý từ ngữ có liên quan:
                </span>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {suggestedWords.map((sw) => (
                    <button
                      key={sw.id}
                      onClick={() => setSearchTerm(sw.word)}
                      className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-bold hover:bg-indigo-100 transition cursor-pointer"
                    >
                      {sw.word}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedTopicTheme('all');
                setSelectedCurriculumSection(null);
                setSelectedAppropriateness('all');
                setOnlyBookmarks(false);
              }}
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
            >
              Xóa bộ lọc
            </button>
            <button
              onClick={() => onNavigate('suggest')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold hover:opacity-95 transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Gửi đề xuất từ này ngay</span>
            </button>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 6. WORD CARDS GRID (Zero-Pill Metadata Constitution)         */}
      {/* ============================================================ */}
      {!loading && !error && filteredWords.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredWords.map((item) => {
            const cat = CATEGORY_LABELS[item.category] || CATEGORY_LABELS.slang;
            const app = APPROPRIATENESS_LABELS[item.schoolAppropriateness] || APPROPRIATENESS_LABELS.acceptable_casual;
            const bookmarked = isBookmarked(item.id);

            // Appropriateness semantic color formatting without boxed pills
            const appTextColor =
              item.schoolAppropriateness === 'forbidden_in_formal'
                ? 'text-rose-600 dark:text-rose-400 font-semibold'
                : item.schoolAppropriateness === 'caution_required'
                ? 'text-amber-600 dark:text-amber-400 font-semibold'
                : item.schoolAppropriateness === 'strictly_informal'
                ? 'text-purple-600 dark:text-purple-400 font-semibold'
                : 'text-indigo-600 dark:text-indigo-400 font-semibold';

            return (
              <Card
                key={item.id}
                className="flex flex-col justify-between hover:border-indigo-400 dark:hover:border-indigo-500 group transition-all"
              >
                <div className="space-y-3.5">
                  {/* Top: Word, Pronunciation, Unboxed Metadata, Bookmark */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        {item.officialCode && (
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">
                            {item.officialCode}
                          </span>
                        )}
                        <h3
                          onClick={() => onNavigate('detail', item.id)}
                          className="text-2xl font-black text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition cursor-pointer tracking-tight"
                        >
                          {item.word}
                        </h3>
                        {item.pronunciation && (
                          <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                            {item.pronunciation}
                          </span>
                        )}
                      </div>

                      {/* ZERO-PILL METADATA: Clean typography separated by bullet dot */}
                      <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        {item.topicTheme && (
                          <>
                            <span className="font-semibold text-purple-700 dark:text-purple-300">
                              {item.topicTheme}
                            </span>
                            <span>·</span>
                          </>
                        )}
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          {cat.label}
                        </span>
                        <span>·</span>
                        <span className={appTextColor}>
                          {app.badge}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`p-2 rounded-xl transition cursor-pointer ${
                        bookmarked
                          ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-500'
                          : 'text-slate-300 dark:text-slate-600 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      title={bookmarked ? 'Bỏ lưu' : 'Lưu vào mục yêu thích'}
                    >
                      <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-500' : ''}`} />
                    </button>
                  </div>

                  {/* Net meaning */}
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed line-clamp-2">
                      <span className="text-slate-400 dark:text-slate-500 font-normal">Nghĩa mạng: </span>
                      {item.netMeaning}
                    </p>

                    {item.literalMeaning && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        <span className="text-slate-400 dark:text-slate-500">Nghĩa gốc: </span>
                        {item.literalMeaning}
                      </p>
                    )}
                  </div>

                  {/* Pedagogical Note Box */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                    <GraduationCap className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2 leading-relaxed">{item.academicGuidance}</span>
                  </div>
                </div>

                {/* Bottom Card Bar: Stats và Detail Link */}
                <div className="flex items-center justify-between pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-3 text-slate-400 dark:text-slate-500">
                    <button
                      onClick={() => onToggleLike(item.id)}
                      className="flex items-center gap-1 hover:text-rose-600 transition cursor-pointer group/like"
                    >
                      <Heart className="w-3.5 h-3.5 group-hover/like:fill-rose-500 text-rose-500" />
                      <span className="font-semibold text-slate-600 dark:text-slate-300 tabular-nums">
                        {item.likesCount || 0}
                      </span>
                    </button>

                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span className="tabular-nums">{item.viewsCount || 0}</span>
                    </span>
                  </div>

                  <button
                    onClick={() => onNavigate('detail', item.id)}
                    className="inline-flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition cursor-pointer"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};
