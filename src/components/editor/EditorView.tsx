import React, { useState, useEffect } from 'react';
import { WordSuggestion, ActiveTab } from '../../types';
import { CATEGORY_LABELS, APPROPRIATENESS_LABELS } from '../../data/initialWords';
import { dictionaryService } from '../../services/supabaseClient';
import { useAuth } from '../../services/authContext';
import { Card } from '../ui/Card';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  GraduationCap,
  Edit,
  Clock,
  Check,
  Info,
} from 'lucide-react';

interface EditorViewProps {
  onNavigate: (tab: ActiveTab, wordId?: string) => void;
  onRefreshWords: () => void;
}

export const EditorView: React.FC<EditorViewProps> = ({ onNavigate, onRefreshWords }) => {
  const { currentUser } = useAuth();
  const [suggestions, setSuggestions] = useState<WordSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

  const [editingSug, setEditingSug] = useState<WordSuggestion | null>(null);
  const [reviewNote, setReviewNote] = useState('');
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const list = await dictionaryService.getSuggestions();
    setSuggestions(list);
    setLoading(false);
  };

  const handleApprove = async (sug: WordSuggestion) => {
    await dictionaryService.updateSuggestionStatus(
      sug.id,
      'approved',
      reviewNote || 'Mục từ có giá trị khảo sát tốt, đã được ban biên tập thẩm định và phê duyệt.',
      currentUser.name
    );
    setActionSuccess(`Đã phê duyệt từ "${sug.word}" và bổ sung thành công vào Từ điển NETWORD!`);
    setEditingSug(null);
    setReviewNote('');
    onRefreshWords();
    await loadData();
    setTimeout(() => setActionSuccess(null), 4000);
  };

  const handleReject = async (sug: WordSuggestion) => {
    await dictionaryService.updateSuggestionStatus(
      sug.id,
      'rejected',
      reviewNote || 'Từ ngữ chưa đạt yêu cầu khảo sát học thuật hoặc mang tính chất phản cảm.',
      currentUser.name
    );
    setActionSuccess(`Đã từ chối từ "${sug.word}".`);
    setEditingSug(null);
    setReviewNote('');
    await loadData();
    setTimeout(() => setActionSuccess(null), 4000);
  };

  const filtered = suggestions.filter((s) => {
    if (activeFilter === 'all') return true;
    return s.status === activeFilter;
  });

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300 max-w-4xl mx-auto">
      {/* Title */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-1 border border-indigo-200 dark:border-indigo-800">
          <ShieldCheck className="w-3.5 h-3.5" />
          Hội đồng Thẩm định Ngôn ngữ
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Bàn làm việc Ban Biên tập & Tổ Ngữ văn
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          Kiểm duyệt đề xuất mục từ mới từ học sinh, viết nhận xét sư phạm và quyết định đưa vào từ điển
        </p>
      </div>

      {/* Local Demo Mode Notice for Editors */}
      <div className="p-3.5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong>Lưu ý Thẩm định (Chế độ Dùng thử Cục bộ):</strong> Danh sách đề xuất bên dưới được đọc từ bộ nhớ trình duyệt máy này (LocalStorage). Thầy cô và ban biên tập có thể phê duyệt hoặc từ chối để thử nghiệm trọn vẹn quy trình xuất bản. Để tiếp nhận và duyệt đề xuất trực tuyến từ học sinh toàn trường, hệ thống cần kết nối cơ sở dữ liệu đám mây.
        </div>
      </div>

      {actionSuccess && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm font-semibold flex items-center gap-2">
          <Check className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Filter tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 text-xs font-bold">
        <button
          onClick={() => setActiveFilter('pending')}
          className={`px-3.5 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
            activeFilter === 'pending'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Clock className="w-3.5 h-3.5" />
          <span>Chờ duyệt ({suggestions.filter((s) => s.status === 'pending').length})</span>
        </button>

        <button
          onClick={() => setActiveFilter('approved')}
          className={`px-3.5 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
            activeFilter === 'approved'
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Đã duyệt ({suggestions.filter((s) => s.status === 'approved').length})</span>
        </button>

        <button
          onClick={() => setActiveFilter('rejected')}
          className={`px-3.5 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5 ${
            activeFilter === 'rejected'
              ? 'bg-rose-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <XCircle className="w-3.5 h-3.5" />
          <span>Từ chối ({suggestions.filter((s) => s.status === 'rejected').length})</span>
        </button>

        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3.5 py-2 rounded-xl transition cursor-pointer ${
            activeFilter === 'all'
              ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          Tất cả ({suggestions.length})
        </button>
      </div>

      {/* Review Modal if editing */}
      {editingSug && (
        <Card className="border-2 border-indigo-500 shadow-xl space-y-5 animate-in fade-in">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Thẩm định mục từ: <span className="text-indigo-600 dark:text-indigo-400 text-xl font-black">{editingSug.word}</span>
            </h3>
            <button
              onClick={() => setEditingSug(null)}
              className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Đóng lại
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 dark:text-slate-500 font-bold block mb-1">Nghĩa đề xuất:</span>
              <p className="font-semibold text-slate-800 dark:text-slate-200">{editingSug.netMeaning}</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-700">
              <span className="text-slate-400 dark:text-slate-500 font-bold block mb-1">Ví dụ ngữ cảnh:</span>
              <p className="font-semibold text-slate-800 dark:text-slate-200 italic">"{editingSug.exampleContext}"</p>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase mb-1.5">
              Ý kiến nhận xét & Lời khuyên sư phạm của Giáo viên/Ban biên tập:
            </label>
            <textarea
              rows={3}
              value={reviewNote}
              onChange={(e) => setReviewNote(e.target.value)}
              placeholder="Nhập ghi chú định hướng: giá trị tu từ, lưu ý không dùng trong thi cử, phân loại mức độ học đường..."
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900"
            />
          </div>

          <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
            <button
              onClick={() => handleReject(editingSug)}
              className="px-5 py-2.5 rounded-xl border border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 text-xs font-bold hover:bg-rose-100 dark:hover:bg-rose-900/50 transition cursor-pointer flex items-center gap-1.5"
            >
              <XCircle className="w-4 h-4" />
              <span>Từ chối</span>
            </button>

            <button
              onClick={() => handleApprove(editingSug)}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold hover:opacity-95 transition cursor-pointer flex items-center gap-1.5 shadow-md shadow-indigo-100 dark:shadow-none"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Phê duyệt & Đưa vào Từ điển</span>
            </button>
          </div>
        </Card>
      )}

      {/* List of Suggestions */}
      {loading ? (
        <div className="text-xs text-slate-400 py-10 text-center">Đang tải danh sách biên tập...</div>
      ) : filtered.length === 0 ? (
        <Card className="p-10 text-center space-y-3">
          <Clock className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto" />
          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Không có đề xuất nào trong mục này</h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">Hiện tại mọi đề xuất đã được xử lý xong!</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {filtered.map((sug) => {
            const cat = CATEGORY_LABELS[sug.category] || CATEGORY_LABELS.slang;
            const app = APPROPRIATENESS_LABELS[sug.schoolAppropriateness] || APPROPRIATENESS_LABELS.acceptable_casual;

            return (
              <Card key={sug.id} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-xl font-black text-slate-900 dark:text-slate-100">{sug.word}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${cat.color}`}>
                      {cat.label}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${app.color}`}>
                      {app.badge}
                    </span>
                  </div>

                  <span className="text-[11px] text-slate-400 dark:text-slate-500">
                    Người gửi: <strong className="text-slate-600 dark:text-slate-300">{sug.submittedBy}</strong> ({sug.submitterSchool}) • {sug.submittedAt}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-400 dark:text-slate-500 block mb-0.5">Nghĩa mạng:</span>
                    <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">{sug.netMeaning}</p>
                  </div>
                  <div>
                    <span className="font-bold text-slate-400 dark:text-slate-500 block mb-0.5">Ví dụ đối thoại:</span>
                    <p className="text-slate-700 dark:text-slate-300 italic bg-slate-50 dark:bg-slate-800/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                      "{sug.exampleContext}"
                    </p>
                  </div>
                </div>

                {sug.moderatorFeedback && (
                  <div className="text-xs bg-indigo-50/70 dark:bg-indigo-950/40 p-3 rounded-xl border border-indigo-100 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-200">
                    <strong>Ghi chú sư phạm ({sug.reviewedBy || 'Ban biên tập'}): </strong>
                    {sug.moderatorFeedback}
                  </div>
                )}

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500">
                    Trạng thái: <span className="uppercase text-slate-700 dark:text-slate-300">{sug.status}</span>
                  </div>

                  {sug.status === 'pending' && (
                    <button
                      onClick={() => {
                        setEditingSug(sug);
                        setReviewNote(sug.moderatorFeedback || '');
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xs font-bold hover:opacity-95 transition flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                    >
                      <Edit className="w-3.5 h-3.5" />
                      <span>Thẩm định ngay</span>
                    </button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};
