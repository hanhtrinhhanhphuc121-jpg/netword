/**
 * NETWORD - Giao diện Khảo sát 4 Nhóm Ngữ liệu Chuyên đề 2 (Ngữ văn 11)
 * "Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại"
 * GV phát triển: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 */

import React, { useState, useMemo } from 'react';
import {
  CURRICULUM_SECTIONS_META,
  SECTION_1_COMMON_SLANG,
  SECTION_2_ABBREVIATIONS,
  SECTION_3_GEN_Z_SLANG,
  SECTION_4_SOCIAL_SENTENCES,
  CurriculumTermItem,
  CurriculumSocialSentence,
} from '../../data/curriculumSections';
import { ActiveTab } from '../../types';
import {
  BookOpen,
  Sparkles,
  Search,
  MessageSquare,
  Zap,
  Flame,
  ArrowRight,
  Copy,
  Check,
  ShieldCheck,
  AlertTriangle,
  Send,
  ExternalLink,
  GraduationCap,
  Users,
  Lightbulb,
  Printer,
  Share2,
} from 'lucide-react';

interface CurriculumSectionsViewProps {
  onNavigate: (tab: ActiveTab, wordId?: string) => void;
  onSelectSentenceForExpression?: (sentence: string) => void;
}

export const CurriculumSectionsView: React.FC<CurriculumSectionsViewProps> = ({
  onNavigate,
}) => {
  const [selectedSection, setSelectedSection] = useState<number>(0); // 0 = Tất cả, 1 = Slang, 2 = Viết tắt, 3 = Gen Z, 4 = Câu giao tiếp
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleTestExpression = (sentence: string) => {
    // Lưu câu vào sessionStorage để AppropriateExpressionView đọc được khi chuyển trang
    try {
      sessionStorage.setItem('netword_prefill_expression', sentence);
    } catch (e) {
      console.error(e);
    }
    onNavigate('expression');
  };

  // Lọc dữ liệu theo tìm kiếm
  const filteredSlang = useMemo(() => {
    if (!searchQuery.trim()) return SECTION_1_COMMON_SLANG;
    const q = searchQuery.toLowerCase().trim();
    return SECTION_1_COMMON_SLANG.filter(
      (item) =>
        item.term.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.standardEquivalent.toLowerCase().includes(q) ||
        item.exampleSentence.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredAbbreviations = useMemo(() => {
    if (!searchQuery.trim()) return SECTION_2_ABBREVIATIONS;
    const q = searchQuery.toLowerCase().trim();
    return SECTION_2_ABBREVIATIONS.filter(
      (item) =>
        item.term.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.standardEquivalent.toLowerCase().includes(q) ||
        item.exampleSentence.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredGenZ = useMemo(() => {
    if (!searchQuery.trim()) return SECTION_3_GEN_Z_SLANG;
    const q = searchQuery.toLowerCase().trim();
    return SECTION_3_GEN_Z_SLANG.filter(
      (item) =>
        item.term.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.standardEquivalent.toLowerCase().includes(q) ||
        item.exampleSentence.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const filteredSentences = useMemo(() => {
    if (!searchQuery.trim()) return SECTION_4_SOCIAL_SENTENCES;
    const q = searchQuery.toLowerCase().trim();
    return SECTION_4_SOCIAL_SENTENCES.filter(
      (item) =>
        item.sentence.toLowerCase().includes(q) ||
        item.meaning.toLowerCase().includes(q) ||
        item.standardFormal.toLowerCase().includes(q) ||
        item.speakerIntent.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const totalResults =
    (selectedSection === 0 || selectedSection === 1 ? filteredSlang.length : 0) +
    (selectedSection === 0 || selectedSection === 2 ? filteredAbbreviations.length : 0) +
    (selectedSection === 0 || selectedSection === 3 ? filteredGenZ.length : 0) +
    (selectedSection === 0 || selectedSection === 4 ? filteredSentences.length : 0);

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300">
      {/* 1. HERO HEADER BANNER */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-850 to-purple-900 text-white p-6 sm:p-8 shadow-xl border border-indigo-700/50">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/30 text-indigo-200 border border-indigo-400/30 backdrop-blur-sm">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-300" />
                Chuyên đề 2: Ngữ văn 11
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-500/30 text-purple-200 border border-purple-400/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-purple-300" />
                4 Nhóm Ngữ Liệu Khảo Sát
              </span>
              <span className="text-xs text-indigo-300 font-medium">
                THCS và THPT Long Hiệp
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Khảo Sát Ngôn Ngữ Trên Không Gian Mạng
            </h1>

            <p className="text-sm sm:text-base text-indigo-100/90 leading-relaxed">
              Hệ thống 56 mục từ và 10 câu giao tiếp thực tế thuộc 4 nhóm ngữ liệu trọng tâm trong đời sống học sinh THPT: nhận diện cơ chế chuyển nghĩa, đối chiếu từ ngữ chuẩn tắc và giữ gìn sự trong sáng của Tiếng Việt.
            </p>
          </div>

          {/* Teacher Badge và Quick CTA */}
          <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-xs space-y-1.5">
              <div className="font-semibold text-indigo-200 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-amber-300" />
                Người hướng dẫn và Biên soạn:
              </div>
              <div className="font-bold text-white text-sm">
                Thầy Trầm Thanh Tuấn
              </div>
              <div className="text-indigo-200 text-[11px]">
                Giáo viên Ngữ văn – Trường THCS và THPT Long Hiệp
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('expression')}
                className="flex-1 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                Luyện Diễn Đạt Phù Hợp
              </button>
              <button
                onClick={() => window.print()}
                className="px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition border border-white/20 flex items-center justify-center cursor-pointer"
                title="In tài liệu học tập"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Nhóm Thống kê Mini */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-indigo-700/50">
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="text-xs text-indigo-200 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              Nhóm 1: Tiếng lóng
            </div>
            <div className="text-xl font-black text-white mt-0.5">20 từ</div>
            <div className="text-[10px] text-indigo-300">Từ mượn và Internet</div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="text-xs text-emerald-200 flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              Nhóm 2: Từ viết tắt
            </div>
            <div className="text-xl font-black text-white mt-0.5">16 từ</div>
            <div className="text-[10px] text-emerald-300">Viết tắt giao tiếp nhanh</div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="text-xs text-purple-200 flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-purple-400" />
              Nhóm 3: Lóng Gen Z
            </div>
            <div className="text-xl font-black text-white mt-0.5">20 từ</div>
            <div className="text-[10px] text-purple-300">Hình ảnh và Cảm xúc</div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <div className="text-xs text-amber-200 flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              Nhóm 4: Mẫu câu MXH
            </div>
            <div className="text-xl font-black text-white mt-0.5">10 câu</div>
            <div className="text-[10px] text-amber-300">Giao tiếp tình huống</div>
          </div>
        </div>
      </div>

      {/* 2. SEARCH và SECTION TABS CONTROLLER */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm nhanh trong 4 nhóm ngữ liệu (từ lóng, từ viết tắt, câu giao tiếp, nghĩa tương đương)..."
            className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-100 placeholder-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-1.5 py-0.5 rounded"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Tab Selection Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setSelectedSection(0)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              selectedSection === 0
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Tất cả 4 nhóm ({totalResults})
          </button>

          <button
            onClick={() => setSelectedSection(1)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              selectedSection === 1
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-indigo-500" />
            1. Tiếng lóng phổ biến (20)
          </button>

          <button
            onClick={() => setSelectedSection(2)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              selectedSection === 2
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
            2. Từ viết tắt (16)
          </button>

          <button
            onClick={() => setSelectedSection(3)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              selectedSection === 3
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-purple-500" />
            3. Tiếng lóng Gen Z (20)
          </button>

          <button
            onClick={() => setSelectedSection(4)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              selectedSection === 4
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-500" />
            4. Câu giao tiếp MXH (10)
          </button>
        </div>
      </div>

      {/* 3. SECTION 1: NHỮNG TIẾNG LÓNG PHỔ BIẾN (20 TỪ) */}
      {(selectedSection === 0 || selectedSection === 1) && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-black text-sm flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
                  1
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Những tiếng lóng phổ biến
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-semibold">
                  {filteredSlang.length} mục từ
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Các từ mượn và khẩu ngữ thịnh hành trong đời sống học sinh và mạng xã hội.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSlang.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition shadow-sm hover:shadow-md flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-black text-indigo-600 dark:text-indigo-400">
                        {item.term}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-md font-medium bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        Tiếng lóng
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(item.term, item.id)}
                      className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 p-1 rounded-lg transition"
                      title="Sao chép từ"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Meaning và Standard Equivalent */}
                  <div className="space-y-1.5 text-xs">
                    <div>
                      <span className="font-semibold text-slate-500 dark:text-slate-400">Ý nghĩa: </span>
                      <span className="font-medium text-slate-900 dark:text-slate-100">
                        {item.meaning}
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">Tương đương chuẩn tắc: </span>
                      <span>{item.standardEquivalent}</span>
                    </div>

                    {item.exampleSentence && (
                      <div className="italic text-slate-600 dark:text-slate-400 bg-indigo-50/50 dark:bg-indigo-950/30 p-2 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
                        <span className="font-semibold text-indigo-700 dark:text-indigo-300 not-italic">Ví dụ: </span>
                        "{item.exampleSentence}"
                      </div>
                    )}
                  </div>

                  {/* Teacher's pedagogical note */}
                  <div className="text-[11px] text-purple-900 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/40 p-2.5 rounded-xl border border-purple-200 dark:border-purple-900 flex items-start gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span><strong>Lời khuyên GV:</strong> {item.pedagogicalNote}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Dùng vui bạn bè ngoài giờ
                  </span>
                  <button
                    onClick={() => onNavigate('dictionary')}
                    className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Xem từ điển <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. SECTION 2: NHỮNG TỪ VIẾT TẮT THƯỜNG GẶP (16 TỪ) */}
      {(selectedSection === 0 || selectedSection === 2) && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-black text-sm flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
                  2
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Những từ viết tắt thường gặp
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-semibold">
                  {filteredAbbreviations.length} từ viết tắt
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ký hiệu viết tắt tiếng Anh và tiếng Việt được dùng để nhắn tin nhanh trong không gian số.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {filteredAbbreviations.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/90 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition shadow-sm space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-emerald-700 dark:text-emerald-400 font-mono">
                      {item.term}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      Viết tắt
                    </span>
                  </div>

                  <div className="text-xs space-y-1">
                    <div className="font-semibold text-slate-900 dark:text-slate-100">
                      {item.meaning}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">
                      Chuẩn: <strong className="text-slate-700 dark:text-slate-300">{item.standardEquivalent}</strong>
                    </div>
                  </div>

                  {item.exampleSentence && (
                    <div className="text-[11px] italic text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl">
                      "{item.exampleSentence}"
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px]">
                  {item.schoolAppropriateness === 'forbidden_in_formal' ? (
                    <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Tuyệt đối cấm trong bài thi!
                    </span>
                  ) : (
                    <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-emerald-600" />
                      Chỉ dùng nhắn tin nhanh
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. SECTION 3: TIẾNG LÓNG MANG MÀU SẮC GEN Z (20 TỪ) */}
      {(selectedSection === 0 || selectedSection === 3) && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 font-black text-sm flex items-center justify-center border border-purple-200 dark:border-purple-800">
                  3
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Tiếng lóng mang màu sắc Gen Z
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-semibold">
                  {filteredGenZ.length} cách nói
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Những cách nói giàu hình ảnh, chơi chữ, nói quá và thán từ thể hiện cảm xúc đặc trưng của học sinh thế hệ số.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGenZ.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 transition shadow-sm hover:shadow-md flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-black text-purple-700 dark:text-purple-400">
                        {item.term}
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded-md font-medium bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                        Lóng Gen Z
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopy(item.term, item.id)}
                      className="text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 p-1 rounded-lg transition"
                      title="Sao chép từ"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div>
                      <span className="font-semibold text-slate-500 dark:text-slate-400">Ý nghĩa: </span>
                      <span className="font-medium text-slate-900 dark:text-slate-100">
                        {item.meaning}
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/50 text-slate-700 dark:text-slate-300">
                      <span className="font-semibold text-purple-700 dark:text-purple-300">Diễn đạt chuẩn: </span>
                      <span>{item.standardEquivalent}</span>
                    </div>

                    {item.exampleSentence && (
                      <div className="italic text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-xl">
                        <span className="font-semibold not-italic text-slate-700 dark:text-slate-300">Hội thoại: </span>
                        "{item.exampleSentence}"
                      </div>
                    )}
                  </div>

                  <div className="text-[11px] text-indigo-900 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/40 p-2.5 rounded-xl border border-indigo-200 dark:border-indigo-900 flex items-start gap-1.5">
                    <Lightbulb className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span><strong>Nhận định Ngữ văn 11:</strong> {item.pedagogicalNote}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-purple-700 dark:text-purple-300 font-medium">
                    {item.originDetail ? 'Giàu biểu cảm tu từ' : 'Sáng tạo ngôn ngữ'}
                  </span>
                  <button
                    onClick={() => handleTestExpression(item.exampleSentence || item.term)}
                    className="text-purple-600 dark:text-purple-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Thử đổi ngữ cảnh <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. SECTION 4: MỘT SỐ CÂU GIAO TIẾP TRÊN MẠNG XÃ HỘI (10 CÂU) */}
      {(selectedSection === 0 || selectedSection === 4) && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-black text-sm flex items-center justify-center border border-amber-200 dark:border-amber-800">
                  4
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Một số câu giao tiếp trên mạng xã hội
                </h2>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 font-semibold">
                  10 mẫu câu điển hình
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                10 phát ngôn mạng hoàn chỉnh thường gặp và phương pháp chuyển đổi sang ngôn ngữ văn minh, chuẩn mực theo 5 ngữ cảnh.
              </p>
            </div>
          </div>

          <div className="space-y-3.5">
            {filteredSentences.map((item, idx) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 hover:border-amber-300 dark:hover:border-amber-700 transition shadow-sm space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-serif">
                      "{item.sentence}"
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(item.sentence, item.id)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition flex items-center gap-1 cursor-pointer"
                    >
                      {copiedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleTestExpression(item.sentence)}
                      className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition flex items-center gap-1 cursor-pointer shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Phân tích 5 ngữ cảnh
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                    <div className="font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-indigo-500" />
                      Cách hiểu trên mạng xã hội:
                    </div>
                    <div className="text-slate-900 dark:text-slate-100 font-medium">
                      {item.meaning}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                      <em>Mục đích nói:</em> {item.speakerIntent}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-900/60 space-y-1">
                    <div className="font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Cách diễn đạt chuẩn mực (Thầy cô và Văn bản):
                    </div>
                    <div className="text-emerald-950 dark:text-emerald-100 font-medium">
                      "{item.standardFormal}"
                    </div>
                  </div>
                </div>

                {/* Pedagogical Guidance */}
                <div className="text-xs text-purple-950 dark:text-purple-200 bg-purple-50/60 dark:bg-purple-950/30 p-3 rounded-xl border border-purple-200/70 dark:border-purple-900/50 flex items-start gap-2">
                  <GraduationCap className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong>Định hướng sư phạm (Thầy Tuấn): </strong>
                    {item.pedagogicalGuidance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 7. BOTTOM BANNER - CALL TO ACTION FOR CHALLENGES và ESSAY */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-950/40 dark:to-slate-900 border border-indigo-200/70 dark:border-indigo-800/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Vận Dụng Ngữ Liệu Vào Bài Thi và Thử Thách
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
            Làm bài thử thách trắc nghiệm nhận diện sắc thái ngữ nghĩa hoặc đóng góp thêm các từ ngữ mới khảo sát tại trường THCS và THPT Long Hiệp.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => onNavigate('challenges')}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow-sm cursor-pointer"
          >
            Làm Thử Thách Ngữ Văn
          </button>
          <button
            onClick={() => onNavigate('suggest')}
            className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            Đề Xuất Từ Mới
          </button>
        </div>
      </div>
    </div>
  );
};
