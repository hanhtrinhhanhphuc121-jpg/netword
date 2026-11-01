import React, { useState, useEffect } from 'react';
import { WordEntry, ActiveTab, WordComment } from '../../types';
import { CATEGORY_LABELS, APPROPRIATENESS_LABELS } from '../../data/initialWords';
import { useAuth } from '../../services/authContext';
import { dictionaryService } from '../../services/supabaseClient';
import { Card } from '../ui/Card';
import {
  ArrowLeft,
  Bookmark,
  Heart,
  Share2,
  GraduationCap,
  MessageSquare,
  Sparkles,
  BookOpen,
  Send,
  Check,
  Lightbulb,
  ShieldCheck,
  Tag,
  Star,
  CheckCircle2,
} from 'lucide-react';

interface WordDetailViewProps {
  wordId: string | null;
  words: WordEntry[];
  onNavigate: (tab: ActiveTab, wordId?: string) => void;
  onToggleLike: (id: string) => void;
}

export const WordDetailView: React.FC<WordDetailViewProps> = ({
  wordId,
  words,
  onNavigate,
  onToggleLike,
}) => {
  const { currentUser, isBookmarked, toggleBookmark, addPoints } = useAuth();
  const [word, setWord] = useState<WordEntry | null>(null);
  const [comments, setComments] = useState<WordComment[]>([]);
  const [newCommentText, setNewCommentText] = useState('');
  const [copied, setCopied] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    if (!wordId) return;
    const found = words.find((w) => w.id === wordId);
    if (found) {
      setWord(found);
      setLoadingComments(true);
      dictionaryService.getComments(wordId).then((res) => {
        setComments(res);
        setLoadingComments(false);
      });
    }
  }, [wordId, words]);

  // Keyboard shortcut: Esc to return to dictionary
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === 'Escape' &&
        !(
          document.activeElement instanceof HTMLInputElement ||
          document.activeElement instanceof HTMLTextAreaElement
        )
      ) {
        onNavigate('dictionary');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNavigate]);

  if (!word) {
    return (
      <div className="bg-white dark:bg-slate-900 p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-4 max-w-lg mx-auto my-12">
        <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">Không tìm thấy mục từ</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Mục từ này có thể chưa được duyệt hoặc đã thay đổi.</p>
        <button
          onClick={() => onNavigate('dictionary')}
          className="px-5 py-2.5 rounded-2xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition"
        >
          Trở về Từ điển
        </button>
      </div>
    );
  }

  const cat = CATEGORY_LABELS[word.category] || CATEGORY_LABELS.slang;
  const app = APPROPRIATENESS_LABELS[word.schoolAppropriateness] || APPROPRIATENESS_LABELS.acceptable_casual;
  const bookmarked = isBookmarked(word.id);

  const relatedWords = words
    .filter((w) => w.id !== word.id && w.category === word.category)
    .slice(0, 3);

  const handleCopyShare = () => {
    const shareUrl = `${window.location.origin}/#detail/${word.id}`;
    const textToCopy = `NETWORD – “Hiểu đúng ngôn từ – Giao tiếp văn minh”\nTra cứu từ: ${word.word}\nNghĩa mạng: ${word.netMeaning}\nLời dặn Thầy Trầm Thanh Tuấn (THCS & THPT Long Hiệp): ${word.academicGuidance}\nĐường dẫn: ${shareUrl}`;
    navigator.clipboard?.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const added = await dictionaryService.addComment({
      wordId: word.id,
      authorName: currentUser.name,
      authorRole: currentUser.role === 'admin' ? 'teacher' : currentUser.role === 'editor' ? 'editor' : 'student',
      authorSchool: currentUser.school,
      content: newCommentText.trim(),
    });

    setComments((prev) => [...prev, added]);
    setNewCommentText('');
    addPoints(10, 'Đóng góp thảo luận ngôn ngữ học đường');
  };

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300 max-w-4xl mx-auto">
      {/* Top Back bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('dictionary')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại Từ điển (Esc)</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Share button */}
          <button
            onClick={handleCopyShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer active:scale-95 shadow-xs"
            title="Sao chép nội dung chia sẻ"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Đã sao chép!' : 'Chia sẻ'}</span>
          </button>

          {/* Bookmark button */}
          <button
            onClick={() => toggleBookmark(word.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition cursor-pointer active:scale-95 shadow-xs ${
              bookmarked
                ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-300 dark:border-amber-800 text-amber-700 dark:text-amber-300'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>{bookmarked ? 'Đã lưu' : 'Lưu từ'}</span>
          </button>
        </div>
      </div>

      {/* Main Term Header Card */}
      <Card className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
              <span className="font-bold text-indigo-600 dark:text-indigo-400">
                {cat.label}
              </span>
              <span>·</span>
              <span
                className={
                  word.schoolAppropriateness === 'forbidden_in_formal'
                    ? 'text-rose-600 dark:text-rose-400 font-bold'
                    : word.schoolAppropriateness === 'caution_required'
                    ? 'text-amber-600 dark:text-amber-400 font-bold'
                    : word.schoolAppropriateness === 'strictly_informal'
                    ? 'text-purple-600 dark:text-purple-400 font-bold'
                    : 'text-indigo-600 dark:text-indigo-400 font-bold'
                }
              >
                {app.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
              {word.word}
            </h1>
            {word.pronunciation && (
              <p className="text-sm font-mono text-slate-400 dark:text-slate-500 mt-1">
                Phiên âm / Cách đọc:{' '}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{word.pronunciation}</span>
              </p>
            )}
          </div>

          <button
            onClick={() => onToggleLike(word.id)}
            className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-900/60 text-xs font-bold hover:bg-rose-100 dark:hover:bg-rose-900/60 transition cursor-pointer active:scale-95"
          >
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            <span className="tabular-nums">{word.likesCount || 0} lượt thích</span>
          </button>
        </div>

        {/* Comparative Meaning: Nghĩa mạng vs Nghĩa đen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50/70 dark:bg-indigo-950/40 p-5 rounded-2xl border border-indigo-100 dark:border-indigo-900/60 space-y-2">
            <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-200 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Nghĩa trên không gian mạng
            </div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
              {word.netMeaning}
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-slate-500" />
              Nghĩa đen / Nghĩa gốc
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {word.literalMeaning}
            </p>
          </div>
        </div>

        {/* Origin / Etymology */}
        <div className="space-y-2 pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            Nguồn gốc & Hoàn cảnh nảy sinh
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
            {word.origin}
          </p>
        </div>

        {/* Chat / Dialogue Simulation */}
        {word.dialogueExample && word.dialogueExample.length > 0 && (
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              Mô phỏng hội thoại học đường thực tế
            </h3>
            <div className="bg-slate-100/80 dark:bg-slate-800/60 p-4 sm:p-6 rounded-2xl border border-slate-200/90 dark:border-slate-700 space-y-3 max-w-lg mx-auto">
              {word.dialogueExample.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl shadow-xs text-xs sm:text-sm ${
                      msg.isMe
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-br-none'
                        : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-bl-none border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 text-[10px] opacity-75 font-semibold mb-1">
                      <span>{msg.sender}</span>
                      <span>{msg.time}</span>
                    </div>
                    <div className="font-medium leading-relaxed">{msg.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Academic Evaluation by Teacher Trầm Thanh Tuấn */}
        <div className="bg-gradient-to-br from-amber-50/80 via-white to-purple-50/40 dark:from-slate-900 dark:via-amber-950/20 dark:to-purple-950/20 p-5 sm:p-6 rounded-2xl border border-amber-200 dark:border-amber-900/60 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-100 dark:border-amber-900/60 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-xs">
                GV
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Nhận định sư phạm của Thầy Trầm Thanh Tuấn
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Tổ Ngữ văn • Trường THCS và THPT Long Hiệp
                </p>
              </div>
            </div>

            {/* Standard score rating */}
            <div className="flex items-center gap-1 bg-white dark:bg-slate-900 px-3 py-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
              <span className="font-semibold text-slate-600 dark:text-slate-400 mr-1">Thang chuẩn mực:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3.5 h-3.5 ${
                    star <= (word.standardScore || 3)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-slate-200 dark:text-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
            "{word.academicGuidance}"
          </p>

          <div className="flex items-center gap-2 text-[11px] text-amber-800 dark:text-amber-300 bg-amber-100/70 dark:bg-amber-950/60 px-3 py-2 rounded-xl">
            <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
            <span>
              <strong>Khuyến cáo:</strong> {app.label}. Tuyệt đối không dùng trong bài kiểm tra, bài thi tốt nghiệp THPT hay đơn từ hành chính.
            </span>
          </div>

          {/* Cách diễn đạt chuẩn mực thay thế */}
          <div className="bg-white/80 dark:bg-slate-900/80 p-3.5 rounded-xl border border-amber-200/80 dark:border-amber-900/60 space-y-1.5">
            <h5 className="text-[11px] font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Cách diễn đạt chuẩn mực thay thế trong bài làm văn (Ngữ văn 11):
            </h5>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Khi làm bài nghị luận xã hội hoặc văn bản chính thức, học sinh nên diễn đạt trang trọng:
              <span className="font-semibold text-indigo-700 dark:text-indigo-300">
                {word.category === 'borrowed'
                  ? ' “khoe thành tích một cách văn minh”, “xác minh nguồn tin”, “đối chiếu sự thật”'
                  : word.category === 'meme_trend'
                  ? ' “tín hiệu kêu cứu”, “bày tỏ lo âu hài hước”, “tìm kiếm sự trợ giúp”'
                  : ' “áp lực cuộc sống”, “cân bằng tinh thần”, “chăm sóc sức khỏe tâm lý”'}
              </span>.
            </p>
          </div>

          {/* Verified by teacher badge */}
          <div className="flex items-center justify-between text-[11px] text-slate-500 border-t border-amber-200/60 dark:border-amber-900/60 pt-2.5">
            <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Chỉ công khai mục từ đã được Thầy Trầm Thanh Tuấn phê duyệt chính thức
            </span>
            <span className="font-mono text-[10px] text-slate-400">Trạng thái: Đã thẩm định</span>
          </div>
        </div>

        {/* Tags */}
        {word.tags && word.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-2">
            <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1 mr-1">
              <Tag className="w-3.5 h-3.5" /> Thẻ:
            </span>
            {word.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </Card>

      {/* Discussion & Comments Section */}
      <Card className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Góc thảo luận học sinh & giáo viên ({comments.length})
            </h3>
          </div>
          <span className="text-xs text-slate-400 dark:text-slate-500">Giao tiếp văn minh</span>
        </div>

        <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
          * Chế độ dùng thử: Bình luận của em được lưu trữ cục bộ trên trình duyệt thiết bị này (LocalStorage).
        </p>

        {/* Comment input form */}
        <form onSubmit={handleAddComment} className="flex gap-2">
          <input
            type="text"
            value={newCommentText}
            onChange={(e) => setNewCommentText(e.target.value)}
            placeholder={`Bình luận dưới tên ${currentUser.name} (${currentUser.school})...`}
            className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-slate-900"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs hover:opacity-95 transition flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Gửi</span>
          </button>
        </form>

        {/* Comments list */}
        {loadingComments ? (
          <div className="text-xs text-slate-400 py-4 text-center">Đang tải bình luận...</div>
        ) : comments.length === 0 ? (
          <div className="text-xs text-slate-400 dark:text-slate-500 py-6 text-center italic bg-slate-50 dark:bg-slate-800/40 rounded-2xl">
            Chưa có bình luận nào cho từ này. Hãy là người đầu tiên chia sẻ góc nhìn hoặc ví dụ của em!
          </div>
        ) : (
          <div className="space-y-3">
            {comments.map((c) => (
              <div
                key={c.id}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs text-slate-900 dark:text-slate-100">{c.authorName}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.2 rounded-md ${
                        c.authorRole === 'teacher'
                          ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300'
                          : c.authorRole === 'editor'
                          ? 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {c.authorRole === 'teacher'
                        ? '👨‍🏫 Giáo viên'
                        : c.authorRole === 'editor'
                        ? '✍️ Biên tập'
                        : '🎓 Học sinh'}
                    </span>
                    <span className="text-[11px] text-slate-400 dark:text-slate-500">• {c.authorSchool}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 tabular-nums">{c.createdAt}</span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">{c.content}</p>
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* Related Terms in same category */}
      {relatedWords.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            Các từ cùng danh mục "{cat.label}"
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedWords.map((rw) => (
              <Card
                key={rw.id}
                interactive
                onClick={() => onNavigate('detail', rw.id)}
                className="space-y-1 p-4"
              >
                <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400">
                  {rw.word}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{rw.netMeaning}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
