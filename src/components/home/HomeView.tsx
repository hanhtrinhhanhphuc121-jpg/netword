import React, { useState } from 'react';
import { WordEntry, ActiveTab, WordCategory } from '../../types';
import { CATEGORY_LABELS } from '../../data/initialWords';
import { SearchBar } from '../ui/SearchBar';
import { Card } from '../ui/Card';
import {
  Sparkles,
  BookOpen,
  Trophy,
  PlusCircle,
  GraduationCap,
  TrendingUp,
  MessageSquare,
  ShieldAlert,
  ArrowRight,
  Flame,
  Award,
  QrCode,
  Smartphone,
  CheckCircle2,
  HelpCircle,
  ArrowRightLeft,
  Quote,
  Layers,
  Search,
} from 'lucide-react';

interface HomeViewProps {
  words: WordEntry[];
  onNavigate: (tab: ActiveTab, wordId?: string) => void;
  onSelectCategory: (category: WordCategory) => void;
  onSearch: (query: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  words,
  onNavigate,
  onSelectCategory,
  onSearch,
}) => {
  const [searchInput, setSearchInput] = useState('');

  // Selected spotlight word (Flex, or fallback to first word)
  const wordOfTheDay =
    words.find((w) => w.word.toLowerCase() === 'flex') ||
    words.find((w) => w.word.toLowerCase() === 'check var') ||
    words[0];

  const handleSearchSubmit = () => {
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
      onNavigate('dictionary');
    }
  };

  const trendingWords = words.slice(0, 6);

  // Practical context examples for Chuyen de 2 comparison
  const contextComparisons = [
    {
      slang: 'Em cook môn Văn rồi thầy ơi!',
      formal: 'Thưa thầy, kết quả bài thi môn Văn của em chưa tốt, em sẽ cố gắng ôn luyện thêm ạ.',
      context: 'Giao tiếp với thầy cô giáo',
      rating: 'Cần chuyển đổi sang chuẩn mực',
    },
    {
      slang: 'Vụ này phải check var lại thông tin đã!',
      formal: 'Sự việc này cần được đối chiếu, kiểm chứng nguồn tin chính xác trước khi kết luận.',
      context: 'Bài thuyết trình / Tranh luận học thuật',
      rating: 'Nên dùng từ chuẩn xác',
    },
    {
      slang: 'Nhóm mình làm bài xong mãi mận nha!',
      formal: 'Rất cảm ơn các bạn đã phối hợp xuất sắc để hoàn thành bài tập nhóm đúng hạn!',
      context: 'Thông báo chính thức của lớp học',
      rating: 'Giữ tác phong chỉn chu',
    },
  ];

  return (
    <div className="space-y-12 pb-16 animate-in fade-in duration-300">
      {/* ============================================================ */}
      {/* 1. HERO LEXICON STAGE: Prestigious Educational Hero           */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 shadow-2xl">
        {/* Fine background geometric mesh & subtle ambient lights */}
        <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 p-6 sm:p-10 lg:p-12">
          {/* Top brow: Academic Badge & Slogan */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80 mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-300">
              <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Chuyên đề học tập 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại · Ngữ văn 11</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold">
              <Quote className="w-3 h-3 text-amber-400" />
              <span>“Hiểu đúng ngôn từ – Giao tiếp văn minh”</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left 7 Columns: Grand Editorial Headline & Search */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs uppercase font-bold tracking-widest text-cyan-400">
                  Từ điển ngữ dụng học đường
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                  NETWORD
                </h1>
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                  Từ điển ngôn ngữ không gian mạng cho học sinh THPT
                </p>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Công cụ tra cứu chuyên khảo giúp học sinh nhận diện đúng sắc thái biểu cảm, hiểu rõ cơ chế biến đổi ngôn ngữ trong thời đại số và rèn luyện kỹ năng phân biệt hoàn cảnh giao tiếp, bảo đảm giữ gìn sự trong sáng của Tiếng Việt.
              </p>

              {/* Research authorship attribution */}
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                <span>Nghiên cứu & Biên soạn:</span>
                <span className="font-semibold text-white">Thầy Trầm Thanh Tuấn</span>
                <span>·</span>
                <span>Trường THCS và THPT Long Hiệp</span>
              </div>

              {/* Prominent High-Contrast Search Bar */}
              <div className="pt-2 max-w-xl">
                <SearchBar
                  value={searchInput}
                  onChange={setSearchInput}
                  onSubmit={handleSearchSubmit}
                  placeholder="Tra nhanh: Flex, Check var, Cột sống, Cook, Mãi mận... (Phím /)"
                  size="large"
                />
              </div>

              {/* Quick Trending Keywords */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
                <span className="flex items-center gap-1 font-semibold text-amber-400 mr-1">
                  <Flame className="w-3.5 h-3.5" /> Xu hướng:
                </span>
                {trendingWords.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigate('detail', item.id)}
                    className="px-2.5 py-1 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 transition cursor-pointer border border-slate-700/80 text-slate-200 hover:text-white hover:border-indigo-400/60 font-medium text-xs active:scale-95"
                  >
                    {item.word}
                  </button>
                ))}
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('dictionary')}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs sm:text-sm hover:opacity-95 shadow-lg shadow-indigo-950 transition flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Tra cứu toàn bộ {words.length} mục từ</span>
                </button>

                <button
                  onClick={() => onNavigate('expression')}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/90 text-indigo-200 hover:text-white border border-slate-700 font-semibold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
                >
                  <ArrowRightLeft className="w-4 h-4 text-cyan-400" />
                  <span>Trợ lý Diễn đạt phù hợp</span>
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Prestigious Lexicon Word Spotlight */}
            {wordOfTheDay && (
              <div className="lg:col-span-5">
                <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl border border-slate-700 p-6 shadow-xl space-y-4 relative overflow-hidden">
                  {/* Subtle corner badge */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                        Mục từ tiêu biểu trong ngày
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      NETWORD #01
                    </span>
                  </div>

                  {/* Word title & Phonetic */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-3">
                      <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {wordOfTheDay.word}
                      </h2>
                      {wordOfTheDay.pronunciation && (
                        <span className="text-sm font-mono text-cyan-300">
                          {wordOfTheDay.pronunciation}
                        </span>
                      )}
                    </div>
                    {/* Zero-Pill unboxed metadata */}
                    <div className="text-xs text-indigo-300 flex items-center gap-1.5 font-medium">
                      <span>{CATEGORY_LABELS[wordOfTheDay.category]?.label || 'Tiếng lóng giới trẻ'}</span>
                      <span>·</span>
                      <span className="text-amber-300">Khẩu ngữ thân mật</span>
                    </div>
                  </div>

                  {/* Meaning definitions */}
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                        Nghĩa mạng:
                      </span>
                      <p className="text-slate-100 font-medium leading-relaxed">
                        {wordOfTheDay.netMeaning}
                      </p>
                    </div>

                    {wordOfTheDay.literalMeaning && (
                      <div className="text-xs text-slate-300 pl-1">
                        <span className="text-slate-400 font-normal">Nghĩa gốc/ngữ nguyên: </span>
                        {wordOfTheDay.literalMeaning}
                      </div>
                    )}
                  </div>

                  {/* Interactive Micro Dialogue Preview */}
                  {wordOfTheDay.dialogueExample && wordOfTheDay.dialogueExample.length > 0 && (
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 text-cyan-400" />
                        <span>Ngữ cảnh hội thoại:</span>
                      </div>
                      <div className="text-xs space-y-1.5">
                        {wordOfTheDay.dialogueExample.slice(0, 2).map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex gap-2 ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                          >
                            <div
                              className={`max-w-[90%] px-3 py-1.5 rounded-xl ${
                                msg.isMe
                                  ? 'bg-indigo-600 text-white rounded-tr-none'
                                  : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                              }`}
                            >
                              <div className="font-bold text-[10px] opacity-75">{msg.sender}</div>
                              <div>{msg.text}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pedagogical Guidance */}
                  <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/60 text-xs text-indigo-200 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-indigo-300 text-[11px]">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Định hướng sư phạm (Ngữ văn 11):</span>
                    </div>
                    <p className="line-clamp-2 text-slate-300 leading-relaxed text-[11px]">
                      {wordOfTheDay.academicGuidance}
                    </p>
                  </div>

                  {/* View Details Action */}
                  <button
                    onClick={() => onNavigate('detail', wordOfTheDay.id)}
                    className="w-full py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <span>Xem phân tích chi tiết mục từ</span>
                    <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. STATISTICAL RIBBON: Clean Typography & Key Metrics         */}
      {/* ============================================================ */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="flex items-center gap-4 py-4 px-5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xl shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tabular-nums">
              {words.length}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Mục từ chuẩn hóa
            </div>
          </div>
        </Card>

        <Card className="flex items-center gap-4 py-4 px-5">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xl shrink-0">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tabular-nums">
              8.6K+
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Lượt học sinh tra cứu
            </div>
          </div>
        </Card>

        <Card className="flex items-center gap-4 py-4 px-5">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xl shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tabular-nums">
              5 dạng
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Thử thách Chuyên đề 2
            </div>
          </div>
        </Card>

        <Card className="flex items-center gap-4 py-4 px-5">
          <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xl shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 truncate">
              Long Hiệp
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              THCS & THPT Long Hiệp
            </div>
          </div>
        </Card>
      </section>

      {/* ============================================================ */}
      {/* 3. CORE TAXONOMY PILLARS: 4 Chuyen de 2 Linguistic Categories */}
      {/* ============================================================ */}
      <section className="space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 mb-1">
              <Layers className="w-3.5 h-3.5" />
              Hệ thống phân loại ngôn ngữ học
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              4 Trụ cột Ngôn ngữ mạng (Chuyên đề 2)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Phân định rõ nguồn gốc hình thành và phạm vi sử dụng của các lớp từ ngữ mới
            </p>
          </div>

          <button
            onClick={() => onNavigate('dictionary')}
            className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer shrink-0"
          >
            Xem bảng đối chiếu đầy đủ <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(Object.keys(CATEGORY_LABELS) as WordCategory[]).map((catKey) => {
            const cat = CATEGORY_LABELS[catKey];
            const catWords = words.filter((w) => w.category === catKey);
            const count = catWords.length;
            const samples = catWords.slice(0, 3).map((w) => w.word);

            return (
              <Card
                key={catKey}
                interactive
                onClick={() => {
                  onSelectCategory(catKey);
                  onNavigate('dictionary');
                }}
                className="group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                      {cat.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      {count} từ
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed min-h-[3rem]">
                    {cat.desc}
                  </p>

                  {/* Sample words unboxed */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Mục từ tiêu biểu: </span>
                    {samples.join(', ')}...
                  </div>
                </div>

                <div className="pt-3 mt-3 flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition">
                  <span>Tra cứu danh mục</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. CONTEXT COMPARISON SHOWCASE: Slang vs. Polite Formal      */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/60 dark:from-slate-900 dark:via-indigo-950/20 dark:to-purple-950/20 p-6 sm:p-8 rounded-3xl border border-indigo-100 dark:border-indigo-900/60 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider">
              <ArrowRightLeft className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              Kỹ năng thực hành Ngữ văn 11
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              Phân biệt Hoàn cảnh giao tiếp: Từ mạng vs. Văn phong chuẩn mực
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Học sinh văn minh không bài xích tiếng lóng trong giao lưu bạn bè vui vẻ, nhưng tuyệt đối không nhầm lẫn khi giao tiếp với thầy cô, viết bài kiểm tra hoặc văn bản học thuật.
            </p>
          </div>

          <button
            onClick={() => onNavigate('expression')}
            className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition flex items-center gap-2 cursor-pointer shrink-0 self-start sm:self-auto active:scale-95 shadow-sm"
          >
            <span>Mở Trợ lý Diễn đạt</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contextComparisons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/90 dark:border-slate-800 space-y-3 shadow-xs"
            >
              <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider flex items-center justify-between">
                <span>{item.context}</span>
                <span className="text-amber-600 dark:text-amber-400">● Lưu ý</span>
              </div>

              {/* Informal net slang utterance */}
              <div className="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/70 dark:border-rose-900/40 text-xs text-rose-900 dark:text-rose-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400 block">
                  Khi nói với bạn bè / Mạng xã hội:
                </span>
                <p className="font-semibold italic">"{item.slang}"</p>
              </div>

              {/* Polite formal conversion */}
              <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-900/40 text-xs text-emerald-950 dark:text-emerald-200 space-y-1">
                <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Diễn đạt chuẩn mực trong học đường:
                </span>
                <p className="font-medium leading-relaxed">"{item.formal}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. 4 GOLDEN RULES: Ethical & Civil Communication             */}
      {/* ============================================================ */}
      <section className="bg-slate-900 dark:bg-slate-950 text-white rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6 border border-slate-800">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            Văn hóa giao tiếp học đường
          </div>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            4 Nguyên tắc vàng khi sử dụng ngôn ngữ mạng
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
            Khẩu hiệu xuyên suốt: <strong>“Hiểu đúng ngôn từ – Giao tiếp văn minh”</strong> do Thầy Trầm Thanh Tuấn đúc kết từ thực tiễn giảng dạy Chuyên đề 2 tại Trường THCS & THPT Long Hiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/70 p-5 rounded-2xl border border-slate-700/80 space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-cyan-300 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h4 className="font-bold text-sm text-white">Đúng nơi - Đúng lúc</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ngôn ngữ mạng mang tính thân mật, giải trí; chỉ nên dùng khi trò chuyện giải lao cùng bạn bè đồng trang lứa.
            </p>
          </div>

          <div className="bg-slate-800/70 p-5 rounded-2xl border border-slate-700/80 space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h4 className="font-bold text-sm text-white">Tách bạch văn bản</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tuyệt đối không đưa tiếng lóng, từ viết tắt teencode vào bài kiểm tra, bài thi văn học, đơn từ gửi thầy cô hay văn bản hành chính.
            </p>
          </div>

          <div className="bg-slate-800/70 p-5 rounded-2xl border border-slate-700/80 space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h4 className="font-bold text-sm text-white">Tôn trọng & Lịch sự</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tránh xa những từ ngữ mang sắc thái miệt thị, bạo lực ngôn từ, công kích cá nhân hay biến tướng thành công cụ bắt nạt trên mạng.
            </p>
          </div>

          <div className="bg-slate-800/70 p-5 rounded-2xl border border-slate-700/80 space-y-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h4 className="font-bold text-sm text-white">Giữ gìn sự trong sáng</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Chủ động học hỏi, trau dồi vốn từ thuần Việt giàu đẹp để diễn đạt chính xác, sâu sắc các tầng ý tưởng văn học và tư duy khoa học.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-800">
          <p className="text-xs text-slate-400">
            Hãy kiểm tra xem em đã phân biệt chính xác hoàn cảnh giao tiếp chưa qua bộ câu hỏi trắc nghiệm!
          </p>
          <button
            onClick={() => onNavigate('challenges')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 text-white font-bold text-xs hover:opacity-95 transition cursor-pointer active:scale-95 shadow-md"
          >
            <Trophy className="w-3.5 h-3.5 text-amber-300" />
            <span>Thực hành trắc nghiệm Ngữ văn 11</span>
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. CALL TO ACTION: Contribute & Research Hub                  */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-100 dark:shadow-none">
        <div className="space-y-2 max-w-xl text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
            <PlusCircle className="w-3.5 h-3.5" />
            Góc nghiên cứu học sinh
          </div>
          <h3 className="text-2xl font-black">
            Phát hiện từ ngữ mới xuất hiện trên mạng xã hội?
          </h3>
          <p className="text-xs text-indigo-100 leading-relaxed">
            Học sinh có thể gửi đề xuất từ mới kèm ngữ cảnh thực tế để Thầy Trầm Thanh Tuấn và Ban Biên tập thẩm định, phân tích ngữ nghĩa và bổ sung vào từ điển NETWORD.
          </p>
        </div>

        <button
          onClick={() => onNavigate('suggest')}
          className="px-6 py-3.5 rounded-2xl bg-white text-indigo-800 font-extrabold text-sm shadow-lg hover:bg-slate-100 transition active:scale-95 cursor-pointer shrink-0"
        >
          Gửi đề xuất từ mới
        </button>
      </section>
    </div>
  );
};
