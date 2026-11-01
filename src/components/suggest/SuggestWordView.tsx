import React, { useState, useEffect } from 'react';
import { WordCategory, SchoolAppropriateness, WordSuggestion, ActiveTab } from '../../types';
import { CATEGORY_LABELS, APPROPRIATENESS_LABELS } from '../../data/initialWords';
import { useAuth } from '../../services/authContext';
import { dictionaryService } from '../../services/supabaseClient';
import { Card } from '../ui/Card';
import {
  PlusCircle,
  Clock,
  GraduationCap,
  Sparkles,
  Send,
  Check,
  AlertCircle,
  Info,
} from 'lucide-react';

interface SuggestWordViewProps {
  onNavigate: (tab: ActiveTab, wordId?: string) => void;
}

export const SuggestWordView: React.FC<SuggestWordViewProps> = ({ onNavigate }) => {
  const { currentUser, addPoints, openAuthModal, hasPerm } = useAuth();

  const [word, setWord] = useState('');
  const [category, setCategory] = useState<WordCategory>('slang');
  const [netMeaning, setNetMeaning] = useState('');
  const [origin, setOrigin] = useState('');
  const [exampleContext, setExampleContext] = useState('');
  const [schoolAppropriateness, setSchoolAppropriateness] = useState<SchoolAppropriateness>('acceptable_casual');
  const [evidenceUrl, setEvidenceUrl] = useState('');

  const [suggestions, setSuggestions] = useState<WordSuggestion[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [duplicateWarning, setDuplicateWarning] = useState<string | null>(null);

  useEffect(() => {
    loadSuggestions();
  }, []);

  // Live duplicate detection
  useEffect(() => {
    if (!word.trim() || word.trim().length < 2) {
      setDuplicateWarning(null);
      return;
    }

    const timer = setTimeout(async () => {
      const res = await dictionaryService.checkDuplicate(word.trim());
      if (res.isDuplicate && res.matches.length > 0) {
        const exact = res.matches.find((m) => m.similarity_type === 'exact_match');
        if (exact) {
          setDuplicateWarning(`Từ "${exact.term_name}" đã tồn tại trong từ điển (Trạng thái: ${exact.status}). Em nên kiểm tra trước khi đề xuất trùng.`);
        } else {
          const names = res.matches.map((m) => m.term_name).slice(0, 3).join(', ');
          setDuplicateWarning(`Hệ thống phát hiện có các từ gần giống: ${names}.`);
        }
      } else {
        setDuplicateWarning(null);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [word]);

  const loadSuggestions = async () => {
    const list = await dictionaryService.getSuggestions();
    setSuggestions(list);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasPerm('submit_new_word')) {
      openAuthModal('login');
      return;
    }

    if (!word.trim() || !netMeaning.trim() || !exampleContext.trim()) {
      setErrorMessage('Vui lòng điền đầy đủ các thông tin: Từ ngữ, Giải nghĩa mạng và Ví dụ sử dụng.');
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    try {
      await dictionaryService.addSuggestion({
        word: word.trim(),
        category,
        netMeaning: netMeaning.trim(),
        origin: origin.trim(),
        exampleContext: exampleContext.trim(),
        schoolAppropriateness,
        evidenceUrlOrProof: evidenceUrl.trim(),
        submittedBy: currentUser.name,
        submitterEmail: currentUser.email,
        submitterSchool: `${currentUser.school} (${currentUser.grade})`,
      });

      addPoints(30, 'Đóng góp đề xuất mục từ mới cho từ điển');

      setSuccessMessage(`Đã gửi thành công đề xuất từ "${word.trim()}"! Em được cộng +30 điểm cống hiến.`);
      setWord('');
      setNetMeaning('');
      setOrigin('');
      setExampleContext('');
      setEvidenceUrl('');

      await loadSuggestions();
    } catch (err: any) {
      setErrorMessage('Có lỗi xảy ra khi gửi đề xuất. Vui lòng thử lại!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-10 pb-16 animate-in fade-in duration-300 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-1 border border-indigo-200 dark:border-indigo-800">
          <GraduationCap className="w-3.5 h-3.5" />
          Nghiên cứu học sinh Ngữ văn 11
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Đề xuất từ ngữ mạng mới
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Cùng Thầy Trầm Thanh Tuấn và các bạn học sinh trường Long Hiệp khảo sát, phân tích sự phát triển của ngôn ngữ số
        </p>
      </div>

      {/* 3-Step Educational Workflow Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl border border-indigo-500/20">
        <h2 className="text-base sm:text-lg font-bold flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-300" />
          Quy trình thẩm định học thuật (3 bước)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="bg-white/10 dark:bg-slate-900/40 p-4 rounded-2xl border border-white/10 space-y-1.5">
            <div className="w-7 h-7 rounded-xl bg-blue-500 text-white flex items-center justify-center font-bold text-xs">
              1
            </div>
            <h3 className="font-bold text-sm text-blue-200">Học sinh gửi khảo sát</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Điền các thông tin về từ mới, ngữ cảnh xuất hiện thực tế trên Facebook, TikTok hay trường học.
            </p>
          </div>

          <div className="bg-white/10 dark:bg-slate-900/40 p-4 rounded-2xl border border-white/10 space-y-1.5">
            <div className="w-7 h-7 rounded-xl bg-purple-500 text-white flex items-center justify-center font-bold text-xs">
              2
            </div>
            <h3 className="font-bold text-sm text-purple-200">Ban biên tập thẩm định</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tổ Ngữ văn và ban biên tập học sinh rà soát nghĩa, đánh giá tính chuẩn mực và mức độ phù hợp sư phạm.
            </p>
          </div>

          <div className="bg-white/10 dark:bg-slate-900/40 p-4 rounded-2xl border border-white/10 space-y-1.5">
            <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
              3
            </div>
            <h3 className="font-bold text-sm text-emerald-200">Đưa vào từ điển</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mục từ được phê duyệt sẽ hiển thị công khai trên NETWORD kèm tên người đóng góp và điểm thưởng.
            </p>
          </div>
        </div>
      </div>

      {currentUser.role === 'guest' && (
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>
              <strong>Chế độ Khách vãng lai:</strong> Em cần đăng nhập tài khoản học sinh (hoặc tài khoản trường cấp) để gửi đề xuất từ mới và tích lũy điểm cống hiến.
            </span>
          </div>
          <button
            onClick={() => openAuthModal('login')}
            className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition cursor-pointer self-start sm:self-auto shrink-0 shadow-xs"
          >
            Đăng nhập ngay
          </button>
        </div>
      )}

      {/* Suggestion Form */}
      <Card className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Biểu mẫu đề xuất từ mới
          </h2>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            Người gửi: <strong className="text-slate-700 dark:text-slate-300">{currentUser.name}</strong> ({currentUser.grade})
          </span>
        </div>

        {/* Local Demo Mode Disclaimer */}
        <div className="p-3.5 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 text-xs text-indigo-950 dark:text-indigo-200 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong>Chế độ Dùng thử (Lưu trữ cục bộ - LocalStorage):</strong> Đề xuất của em sẽ được lưu trữ an toàn trên trình duyệt máy này để trải nghiệm quy trình và chuyển thẳng sang tab <strong>"Biên tập"</strong> để thẩm định. Dữ liệu chưa đồng bộ lên cơ sở dữ liệu dùng chung do chưa kết nối máy chủ đám mây.
          </div>
        </div>

        {/* Feedback alert */}
        {successMessage && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm font-semibold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{successMessage}</span>
            </div>
            <button
              onClick={() => setSuccessMessage(null)}
              className="text-xs text-emerald-700 dark:text-emerald-300 underline cursor-pointer"
            >
              Đóng
            </button>
          </div>
        )}

        {errorMessage && (
          <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200 text-xs sm:text-sm font-semibold flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Từ ngữ / Cụm từ <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Ví dụ: Overthinking, Red flag, Xịt keo, Cà khịa..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900"
                required
              />
              {duplicateWarning && (
                <div className="mt-1.5 p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-300 font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <span>{duplicateWarning}</span>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Phân loại ngôn ngữ <span className="text-rose-500">*</span>
              </label>
              <select
                aria-label="Phân loại ngôn ngữ"
                value={category}
                onChange={(e) => setCategory(e.target.value as WordCategory)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900 cursor-pointer"
              >
                {(Object.keys(CATEGORY_LABELS) as WordCategory[]).map((key) => (
                  <option key={key} value={key} className="dark:bg-slate-900">
                    {CATEGORY_LABELS[key].label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Nghĩa trên không gian mạng <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              value={netMeaning}
              onChange={(e) => setNetMeaning(e.target.value)}
              placeholder="Giải thích rõ từ này được học sinh, giới trẻ dùng với nghĩa gì trên mạng xã hội..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Nguồn gốc / Hoàn cảnh xuất hiện (nếu biết)
            </label>
            <input
              type="text"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Ví dụ: Xuất phát từ bài hát Rap Việt, trào lưu TikTok, một bộ phim..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Ví dụ đoạn hội thoại hoặc câu nói thực tế <span className="text-rose-500">*</span>
            </label>
            <textarea
              rows={2}
              value={exampleContext}
              onChange={(e) => setExampleContext(e.target.value)}
              placeholder="Ví dụ: 'Hôm nay làm bài kiểm tra xong mà xịt keo luôn á tụi mày ơi!'"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Đánh giá mức độ chuẩn mực
              </label>
              <select
                aria-label="Đánh giá mức độ chuẩn mực"
                value={schoolAppropriateness}
                onChange={(e) => setSchoolAppropriateness(e.target.value as SchoolAppropriateness)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900 cursor-pointer"
              >
                {(Object.keys(APPROPRIATENESS_LABELS) as SchoolAppropriateness[]).map((key) => (
                  <option key={key} value={key} className="dark:bg-slate-900">
                    {APPROPRIATENESS_LABELS[key].label} ({APPROPRIATENESS_LABELS[key].badge})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Link minh chứng hoặc nguồn tham khảo
              </label>
              <input
                type="text"
                value={evidenceUrl}
                onChange={(e) => setEvidenceUrl(e.target.value)}
                placeholder="Link bài viết Facebook, video TikTok..."
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm shadow-md shadow-indigo-200 dark:shadow-none hover:opacity-95 transition cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>{submitting ? 'Đang gửi...' : 'Gửi đề xuất (+30 điểm)'}</span>
            </button>
          </div>
        </form>
      </Card>

      {/* Recent Submissions List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Các đề xuất gần đây của học sinh ({suggestions.length})
          </h2>
          <span className="text-xs text-slate-400 dark:text-slate-500">Cập nhật liên tục</span>
        </div>

        {suggestions.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center text-xs text-slate-400">
            Chưa có đề xuất nào được gửi.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestions.map((sug) => {
              const cat = CATEGORY_LABELS[sug.category] || CATEGORY_LABELS.slang;
              const statusBadges = {
                pending: { label: 'Đang thẩm định', color: 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800' },
                approved: { label: 'Đã phê duyệt', color: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' },
                rejected: { label: 'Từ chối (chưa đạt)', color: 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800' },
                needs_revision: { label: 'Cần bổ sung', color: 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800' },
              };
              const currentStatus = statusBadges[sug.status] || statusBadges.pending;

              return (
                <Card key={sug.id} className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-extrabold text-lg text-slate-900 dark:text-slate-100">{sug.word}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${cat.color}`}>
                        {cat.label}
                      </span>
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${currentStatus.color}`}>
                      {currentStatus.label}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                    <span className="text-slate-400 dark:text-slate-500">Nghĩa đề xuất: </span>
                    {sug.netMeaning}
                  </p>

                  <div className="text-[11px] bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 italic">
                    "{sug.exampleContext}"
                  </div>

                  {sug.moderatorFeedback && (
                    <div className="text-[11px] bg-indigo-50/80 dark:bg-indigo-950/50 p-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-200">
                      <strong>Nhận xét của GV ({sug.reviewedBy || 'Thầy Trầm Thanh Tuấn'}): </strong>
                      {sug.moderatorFeedback}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-800">
                    <span>Đóng góp bởi: <strong className="text-slate-600 dark:text-slate-400">{sug.submittedBy}</strong></span>
                    <span className="tabular-nums">{sug.submittedAt}</span>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
