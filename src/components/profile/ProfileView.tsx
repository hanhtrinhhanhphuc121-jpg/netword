/**
 * NETWORD – Trang Cá nhân Học sinh & Quản lý Quyền Riêng tư
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 * 
 * NGUYÊN TẮC BẢO MẬT HỌC ĐƯỜNG:
 * 1. Không dùng hồ sơ học sinh làm trang công khai nếu chưa có cơ sở và sự đồng ý phù hợp.
 * 2. Mỗi học sinh chỉ xem và sửa được dữ liệu cá nhân của mình theo quyền được cấp.
 * 3. Có chức năng yêu cầu chỉnh sửa hoặc xóa dữ liệu cá nhân theo chính sách áp dụng.
 */

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../services/authContext';
import { WordEntry, ActiveTab, WordSuggestion } from '../../types';
import { ChallengeAttempt, LearningBadge } from '../../types/challenges';
import {
  userService,
  UserPrivacySettings,
  UserDataRequest,
} from '../../services/userService';
import { challengeService } from '../../services/challengeService';
import { dictionaryService } from '../../services/supabaseClient';
import { CATEGORY_LABELS } from '../../data/initialWords';
import { Card } from '../ui/Card';
import {
  User,
  Award,
  Bookmark,
  ShieldCheck,
  Edit3,
  ArrowRight,
  Trash2,
  Sparkles,
  Lock,
  Bell,
  EyeOff,
  History,
  Send,
  PlusCircle,
  CheckCircle2,
  Clock,
  AlertCircle,
  FileText,
  Search,
  Check,
  RotateCcw,
  ShieldAlert,
  GraduationCap,
} from 'lucide-react';

interface ProfileViewProps {
  words: WordEntry[];
  onNavigate: (tab: ActiveTab, wordId?: string) => void;
}

type ProfileTab = 'saved' | 'contributions' | 'challenges' | 'badges' | 'privacy' | 'roles';

export const ProfileView: React.FC<ProfileViewProps> = ({ words, onNavigate }) => {
  const { currentUser, switchRole, updateProfile, bookmarks, toggleBookmark, openAuthModal } = useAuth();

  const [activeTab, setActiveTab] = useState<ProfileTab>('saved');

  // Chỉnh sửa hồ sơ thông thường
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [grade, setGrade] = useState(currentUser.grade);
  const [school, setSchool] = useState(currentUser.school);

  // Danh sách từ yêu thích & Tìm kiếm
  const [savedSearchQuery, setSavedSearchQuery] = useState('');

  // Đóng góp từ mới & Trạng thái đề xuất
  const [userSuggestions, setUserSuggestions] = useState<WordSuggestion[]>([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(true);

  // Lịch sử thử thách & Huy hiệu
  const [userAttempts, setUserAttempts] = useState<ChallengeAttempt[]>([]);
  const [badges, setBadges] = useState<LearningBadge[]>([]);

  // Quyền riêng tư & Cài đặt
  const [privacySettings, setPrivacySettings] = useState<UserPrivacySettings>(
    userService.getPrivacySettings(currentUser.id)
  );
  const [privacySavedToast, setPrivacySavedToast] = useState(false);

  // Yêu cầu chỉnh sửa / Xóa dữ liệu cá nhân
  const [dataRequests, setDataRequests] = useState<UserDataRequest[]>([]);
  const [showEditRequestModal, setShowEditRequestModal] = useState(false);
  const [showDeleteRequestModal, setShowDeleteRequestModal] = useState(false);

  // Form yêu cầu sửa dữ liệu
  const [reqField, setReqField] = useState('grade');
  const [reqProposedValue, setReqProposedValue] = useState('');
  const [reqReason, setReqReason] = useState('');

  // Form yêu cầu xóa dữ liệu
  const [deleteReason, setDeleteReason] = useState('');
  const [confirmDeleteText, setConfirmDeleteText] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setGrade(currentUser.grade);
    setSchool(currentUser.school);
    setPrivacySettings(userService.getPrivacySettings(currentUser.id));
    loadUserData();
  }, [currentUser]);

  const loadUserData = async () => {
    // 1. Tải đóng góp từ mới của học sinh
    setLoadingSuggestions(true);
    try {
      const allSug = await dictionaryService.getSuggestions();
      // Lọc các đề xuất do chính học sinh này gửi hoặc gán mẫu cho tài khoản test
      const userSug = allSug.filter(
        (s) =>
          s.submittedBy.toLowerCase().includes(currentUser.name.toLowerCase()) ||
          (currentUser.role === 'student' && s.submitterSchool.includes('11A')) ||
          (s.submitterEmail && s.submitterEmail.toLowerCase() === currentUser.email.toLowerCase())
      );
      setUserSuggestions(userSug.length > 0 ? userSug : allSug.slice(0, 2));
    } catch (err) {
      console.error('Failed to load user suggestions', err);
    } finally {
      setLoadingSuggestions(false);
    }

    // 2. Tải lịch sử thử thách
    setUserAttempts(challengeService.getAttempts(currentUser.id));

    // 3. Tải huy hiệu
    setBadges(challengeService.getBadges());

    // 4. Tải các yêu cầu dữ liệu cá nhân
    setDataRequests(userService.getUserDataRequests(currentUser.id));
  };

  // Cập nhật thông tin cơ bản
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, grade, school });
    setIsEditing(false);
  };

  // Lưu cài đặt quyền riêng tư
  const handleSavePrivacy = () => {
    userService.savePrivacySettings(currentUser.id, privacySettings);
    setPrivacySavedToast(true);
    setTimeout(() => setPrivacySavedToast(false), 2500);
  };

  // Gửi yêu cầu chỉnh sửa dữ liệu lên Thầy Trầm Thanh Tuấn
  const handleSubmitEditRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reqProposedValue.trim() || !reqReason.trim()) {
      alert('Vui lòng điền đầy đủ thông tin đề xuất và lý do.');
      return;
    }

    const currentVal =
      reqField === 'grade'
        ? currentUser.grade
        : reqField === 'name'
        ? currentUser.name
        : currentUser.school;

    const newReq = userService.submitDataRequest({
      userId: currentUser.id,
      userName: currentUser.name,
      userEmail: currentUser.email,
      studentCode: currentUser.studentCode,
      type: 'edit_request',
      requestField: reqField,
      currentValue: currentVal,
      proposedValue: reqProposedValue.trim(),
      reason: reqReason.trim(),
    });

    setDataRequests([newReq, ...dataRequests]);
    setShowEditRequestModal(false);
    setReqProposedValue('');
    setReqReason('');
    alert('Đã gửi yêu cầu chỉnh sửa thành công! Thầy Trầm Thanh Tuấn sẽ xem xét và phê duyệt.');
  };

  // Gửi yêu cầu xóa dữ liệu cá nhân (Quyền được lãng quên)
  const handleSubmitDeleteRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmDeleteText !== 'XÓA DỮ LIỆU') {
      alert('Vui lòng nhập chính xác cụm từ "XÓA DỮ LIỆU" để xác nhận.');
      return;
    }

    const newReq = userService.submitDataRequest({
      userId: currentUser.id,
      userName: currentUser.name,
      userEmail: currentUser.email,
      studentCode: currentUser.studentCode,
      type: 'delete_data_request',
      reason: deleteReason.trim() || 'Học sinh yêu cầu xóa dữ liệu cá nhân theo chính sách bảo mật.',
    });

    // Thực thi dọn dẹp dữ liệu cục bộ an toàn
    userService.executeLocalDataPurge(currentUser.id);
    setUserAttempts([]);

    setDataRequests([newReq, ...dataRequests]);
    setShowDeleteRequestModal(false);
    setDeleteReason('');
    setConfirmDeleteText('');
    alert('Yêu cầu xóa dữ liệu đã được ghi nhận. Dữ liệu thử thách cục bộ đã được xóa an toàn khỏi trình duyệt.');
  };

  // Danh sách từ yêu thích đã lọc
  const bookmarkedWords = words.filter((w) => bookmarks.includes(w.id));
  const filteredBookmarks = bookmarkedWords.filter((w) => {
    if (!savedSearchQuery.trim()) return true;
    const q = savedSearchQuery.toLowerCase();
    return (
      w.word.toLowerCase().includes(q) ||
      w.netMeaning.toLowerCase().includes(q) ||
      w.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  // Nếu là tài khoản Khách vãng lai
  if (currentUser.role === 'guest') {
    return (
      <div className="space-y-8 pb-16 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-800 text-center space-y-5 shadow-sm">
          <div className="w-20 h-20 rounded-3xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
            <Lock className="w-10 h-10" />
          </div>

          <div className="max-w-md mx-auto space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Hồ sơ Cá nhân dành cho Học sinh & Giáo viên
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Bạn đang ở chế độ <strong>Khách vãng lai (Guest)</strong>. Vui lòng đăng nhập bằng tài khoản do Trường THCS và THPT Long Hiệp cấp để quản lý danh sách từ đã lưu, theo dõi tiến độ thử thách và xem trạng thái đóng góp từ mới.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openAuthModal('login')}
              className="px-6 py-3 rounded-2xl bg-indigo-600 text-white font-bold text-sm shadow-md hover:bg-indigo-700 transition cursor-pointer"
            >
              Đăng nhập tài khoản nhà trường
            </button>
            <button
              onClick={() => switchRole('student')}
              className="px-5 py-3 rounded-2xl border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 font-bold text-sm hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition cursor-pointer"
            >
              Trải nghiệm tài khoản Học sinh mẫu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-20 max-w-5xl mx-auto">
      {/* ============================================================ */}
      {/* 1. THẺ HỒ SƠ CHÍNH (HEADER PROFILE CARD) */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden border border-indigo-500/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 text-white flex items-center justify-center font-black text-2xl sm:text-3xl shadow-lg shrink-0">
              {currentUser.name.charAt(0)}
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black">{currentUser.name}</h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/20 text-indigo-200 border border-white/20">
                  {currentUser.role === 'admin'
                    ? '👨‍🏫 Quản trị viên (Thầy Tuấn)'
                    : currentUser.role === 'editor'
                    ? '✍️ Ban Biên tập'
                    : '🎓 Học sinh THPT'}
                </span>
                {currentUser.isSchoolIssued && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/30 text-emerald-200 border border-emerald-400/30 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-300" />
                    Tài khoản chuẩn hóa
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-indigo-200">
                {currentUser.studentCode && (
                  <span>
                    <strong>Mã số:</strong> {currentUser.studentCode}
                  </span>
                )}
                <span>
                  <strong>Lớp:</strong> {currentUser.grade}
                </span>
                <span>• {currentUser.school}</span>
              </div>

              <div className="flex items-center gap-2 pt-0.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  <span>{currentUser.title}</span>
                </div>
                <div className="inline-flex items-center gap-1 text-[11px] text-indigo-300 bg-white/10 px-2 py-0.5 rounded-md">
                  <EyeOff className="w-3 h-3 text-indigo-200" />
                  <span>Hồ sơ bảo mật nội bộ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Điểm cống hiến & Nút chỉnh sửa */}
          <div className="flex items-center gap-3 self-end md:self-center">
            <div className="bg-white/10 dark:bg-slate-900/40 p-3.5 rounded-2xl border border-white/15 text-center min-w-[100px]">
              <div className="text-2xl font-black text-cyan-300 tabular-nums">{currentUser.points}</div>
              <div className="text-[10px] uppercase font-bold text-slate-300">Điểm cống hiến</div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/15 transition cursor-pointer text-white flex items-center gap-1.5 text-xs font-semibold"
              title="Cập nhật tên hiển thị"
            >
              <Edit3 className="w-4 h-4" />
              <span className="hidden sm:inline">Chỉnh sửa</span>
            </button>
          </div>
        </div>

        {/* Thông báo cam kết bảo vệ dữ liệu học sinh & Chế độ dùng thử */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-indigo-200/90 relative z-10">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>
              <strong>Bảo mật & Lưu trữ:</strong> Dữ liệu hồ sơ, điểm cống hiến và từ lưu được lưu trữ cục bộ trên trình duyệt thiết bị này (LocalStorage).
            </span>
          </div>
          <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/10 text-cyan-200 border border-white/15 self-start sm:self-auto font-medium">
            Chế độ dùng thử (Demo)
          </span>
        </div>

        {/* Ambient glows */}
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Form chỉnh sửa tên hiển thị */}
      {isEditing && (
        <form
          onSubmit={handleSaveProfile}
          className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 animate-in fade-in"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Edit3 className="w-4 h-4 text-indigo-600" />
              Cập nhật tên hiển thị học tập
            </h3>
            {currentUser.isSchoolIssued && (
              <span className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                * Tài khoản trường cấp: thông tin chuẩn cần gửi yêu cầu để Thầy Tuấn duyệt
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                Tên hiển thị
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                Lớp / Chi đoàn
              </label>
              <input
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                disabled={currentUser.isSchoolIssued}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 disabled:opacity-60"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
                Trường học
              </label>
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                disabled={currentUser.isSchoolIssued}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 disabled:opacity-60"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            {currentUser.isSchoolIssued ? (
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setShowEditRequestModal(true);
                }}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                Gửi yêu cầu chỉnh sửa thông tin trường cấp lên Thầy Tuấn
              </button>
            ) : <div />}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition"
              >
                Lưu tên hiển thị
              </button>
            </div>
          </div>
        </form>
      )}

      {/* ============================================================ */}
      {/* 2. THANH ĐIỀU HƯỚNG CÁC PHÂN MỤC TRANG CÁ NHÂN */}
      {/* ============================================================ */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2 sm:gap-4 text-xs sm:text-sm font-bold overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab('saved')}
          className={`pb-3 transition border-b-2 cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'saved'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>Từ yêu thích ({bookmarkedWords.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('contributions')}
          className={`pb-3 transition border-b-2 cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'contributions'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          <Send className="w-4 h-4" />
          <span>Từ đã đóng góp ({userSuggestions.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('challenges')}
          className={`pb-3 transition border-b-2 cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'challenges'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          <History className="w-4 h-4" />
          <span>Kết quả thử thách ({userAttempts.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('badges')}
          className={`pb-3 transition border-b-2 cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'badges'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Huy hiệu học tập ({badges.filter((b) => b.isUnlocked).length}/{badges.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('privacy')}
          className={`pb-3 transition border-b-2 cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'privacy'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>Quyền riêng tư & Dữ liệu</span>
        </button>

        <button
          onClick={() => setActiveTab('roles')}
          className={`pb-3 transition border-b-2 cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'roles'
              ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Đổi vai trò</span>
        </button>
      </div>

      {/* ============================================================ */}
      {/* SUB-TAB 1: DANH SÁCH TỪ YÊU THÍCH (BOOKMARKS) */}
      {/* ============================================================ */}
      {activeTab === 'saved' && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-indigo-600" />
              Danh mục từ ngữ đã lưu để tra cứu nhanh ({bookmarkedWords.length})
            </h3>

            {bookmarkedWords.length > 0 && (
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  value={savedSearchQuery}
                  onChange={(e) => setSavedSearchQuery(e.target.value)}
                  placeholder="Lọc từ trong danh sách..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
              </div>
            )}
          </div>

          {bookmarkedWords.length === 0 ? (
            <Card className="p-10 text-center space-y-3">
              <Bookmark className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Chưa có mục từ nào được lưu
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Khi tra cứu từ điển, hãy nhấn vào biểu tượng dấu trang để lưu lại các từ ngữ em muốn ôn tập trong Chuyên đề 2.
              </p>
              <button
                onClick={() => onNavigate('dictionary')}
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-md hover:bg-indigo-700 transition cursor-pointer"
              >
                Khám phá Từ điển ngay
              </button>
            </Card>
          ) : filteredBookmarks.length === 0 ? (
            <div className="p-8 text-center text-slate-400 text-xs">
              Không tìm thấy từ ngữ nào khớp với từ khóa "{savedSearchQuery}".
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredBookmarks.map((item) => {
                const cat = CATEGORY_LABELS[item.category] || CATEGORY_LABELS.slang;
                return (
                  <Card key={item.id} className="space-y-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <h4
                          onClick={() => onNavigate('detail', item.id)}
                          className="font-black text-lg text-slate-900 dark:text-slate-100 hover:text-indigo-600 transition cursor-pointer"
                        >
                          {item.word}
                        </h4>
                        <button
                          onClick={() => toggleBookmark(item.id)}
                          className="text-slate-400 hover:text-rose-600 transition p-1.5 cursor-pointer rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40"
                          title="Bỏ lưu khỏi danh sách"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${cat.color}`}>
                          {cat.label}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Thang chuẩn mực: {item.standardScore}/5
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                        {item.netMeaning}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate('detail', item.id)}
                      className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 pt-2 border-t border-slate-100 dark:border-slate-800"
                    >
                      <span>Xem chi tiết & cách diễn đạt chuẩn</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* SUB-TAB 2: NHỮNG TỪ ĐÃ ĐÓNG GÓP & TRẠNG THÁI ĐỀ XUẤT */}
      {/* ============================================================ */}
      {activeTab === 'contributions' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Send className="w-4 h-4 text-indigo-600" />
                Các đề xuất từ mới em đã gửi ({userSuggestions.length})
              </h3>
              <p className="text-xs text-slate-500">
                Theo dõi tiến trình thẩm định của Ban Biên tập và Thầy Trầm Thanh Tuấn.
              </p>
            </div>

            <button
              onClick={() => onNavigate('suggest')}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-sm hover:bg-indigo-700 transition flex items-center gap-1.5 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              Gửi đề xuất mới
            </button>
          </div>

          {loadingSuggestions ? (
            <div className="p-8 text-center text-xs text-slate-400">Đang tải danh sách đề xuất...</div>
          ) : userSuggestions.length === 0 ? (
            <Card className="p-8 text-center space-y-3">
              <Send className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Em chưa gửi đề xuất từ mới nào
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Khi phát hiện một từ ngữ mạng hay một cách diễn đạt mới của giới trẻ, em hãy đóng góp để làm giàu kho từ điển Chuyên đề 2 của trường nhé!
              </p>
              <button
                onClick={() => onNavigate('suggest')}
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold"
              >
                Đóng góp từ mới đầu tiên
              </button>
            </Card>
          ) : (
            <div className="space-y-3">
              {userSuggestions.map((sug) => {
                let statusBadge = (
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Đang chờ duyệt
                  </span>
                );
                if (sug.status === 'approved') {
                  statusBadge = (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Đã xuất bản vào Từ điển
                    </span>
                  );
                } else if (sug.status === 'rejected') {
                  statusBadge = (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 border border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Chưa đạt tiêu chí
                    </span>
                  );
                } else if (sug.status === 'needs_revision') {
                  statusBadge = (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-orange-50 text-orange-700 border border-orange-200 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800 flex items-center gap-1">
                      <RotateCcw className="w-3.5 h-3.5" /> Cần bổ sung minh chứng
                    </span>
                  );
                }

                return (
                  <Card key={sug.id} className="space-y-3 p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-base text-slate-900 dark:text-slate-100">
                          {sug.word}
                        </h4>
                        <span className="text-xs text-slate-400">
                          (Ngày gửi: {sug.submittedAt})
                        </span>
                      </div>
                      {statusBadge}
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      <p>
                        <strong>Nghĩa mạng đề xuất:</strong> {sug.netMeaning}
                      </p>
                      {sug.exampleContext && (
                        <p className="italic text-slate-500 dark:text-slate-400">
                          <strong>Bối cảnh minh họa:</strong> "{sug.exampleContext}"
                        </p>
                      )}
                    </div>

                    {/* Phản hồi sư phạm từ người duyệt */}
                    {sug.moderatorFeedback && (
                      <div className="p-3 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 text-xs space-y-1">
                        <div className="flex items-center gap-1.5 font-bold text-indigo-900 dark:text-indigo-200">
                          <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                          <span>Nhận xét của Giáo viên ({sug.reviewedBy || 'Thầy Trầm Thanh Tuấn'}):</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">{sug.moderatorFeedback}</p>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* SUB-TAB 3: KẾT QUẢ THỬ THÁCH CỦA CHÍNH HỌC SINH */}
      {/* ============================================================ */}
      {activeTab === 'challenges' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <History className="w-4 h-4 text-indigo-600" />
                Kết quả các bài thử thách ngôn ngữ đã làm ({userAttempts.length})
              </h3>
              <p className="text-xs text-slate-500">
                Toàn bộ dữ liệu điểm số được bảo mật riêng tư, không công khai xếp hạng.
              </p>
            </div>

            <button
              onClick={() => onNavigate('challenges')}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-sm hover:bg-indigo-700 transition flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              Làm thử thách mới
            </button>
          </div>

          {userAttempts.length === 0 ? (
            <Card className="p-8 text-center space-y-3">
              <History className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
              <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Chưa có kết quả thử thách nào
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Em hãy làm các bài Thử thách Tuần hoặc luyện tập 5 dạng câu hỏi để củng cố kiến thức và ghi danh lịch sử học tập.
              </p>
              <button
                onClick={() => onNavigate('challenges')}
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold"
              >
                Vào làm bài Thử thách
              </button>
            </Card>
          ) : (
            <div className="space-y-3">
              {userAttempts.map((att) => (
                <Card key={att.id} className="p-4 sm:p-5 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        {att.mode === 'weekly' ? 'Thử thách Tuần' : 'Luyện tập tổng hợp'}
                      </span>
                      <span className="text-xs text-slate-400">
                        {att.completedAt} ({att.timeSpentSeconds} giây)
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-base font-black text-indigo-600 dark:text-indigo-400">
                        {att.totalScore} / {att.maxScore} đ
                      </span>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-md font-bold ${
                          att.percentage >= 80
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                        }`}
                      >
                        {att.correctCount}/{att.totalQuestions} đúng ({att.percentage}%)
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 italic border-l-2 border-indigo-500 pl-3 leading-relaxed">
                    "{att.pedagogicalFeedback}"
                  </p>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* SUB-TAB 4: HUY HIỆU VÀ TIẾN ĐỘ HỌC TẬP */}
      {/* ============================================================ */}
      {activeTab === 'badges' && (
        <div className="space-y-5">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  Tiến độ mở khóa Huy hiệu Văn minh Mạng
                </h3>
                <p className="text-xs text-slate-500">
                  Ghi nhận sự tiến bộ trong tư duy ngôn ngữ và thái độ ứng xử chuẩn mực của học sinh.
                </p>
              </div>

              <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">
                {badges.filter((b) => b.isUnlocked).length} / {badges.length} Huy hiệu
              </span>
            </div>

            {/* Thanh tiến trình huy hiệu */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-amber-400 via-indigo-500 to-purple-600 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(badges.filter((b) => b.isUnlocked).length / Math.max(1, badges.length)) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {badges.map((b) => (
              <Card
                key={b.id}
                className={`p-5 flex items-start gap-4 transition ${
                  b.isUnlocked
                    ? 'border-amber-200 bg-gradient-to-br from-amber-50/40 via-white to-indigo-50/20 dark:from-slate-900 dark:to-slate-800'
                    : 'opacity-60 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl shrink-0 ${
                    b.isUnlocked
                      ? 'bg-amber-500 text-white shadow-md shadow-amber-200 dark:shadow-none'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                  }`}
                >
                  {b.isUnlocked ? '🏅' : '🔒'}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{b.name}</h4>
                    {b.isUnlocked ? (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        Đã mở khóa
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400">Chưa đạt</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {b.description}
                  </p>
                  <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold pt-1">
                    Yêu cầu: {b.requirement}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUB-TAB 5: TÙY CHỌN THÔNG BÁO, QUYỀN RIÊNG TƯ & QUYỀN DỮ LIỆU */}
      {/* ============================================================ */}
      {activeTab === 'privacy' && (
        <div className="space-y-6">
          {/* Cài đặt Quyền riêng tư & Thông báo */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-indigo-600" />
                  Chính sách Quyền riêng tư & Thông báo
                </h3>
                <p className="text-xs text-slate-500">
                  Thiết lập chế độ bảo vệ thông tin học sinh theo quy chế nhà trường.
                </p>
              </div>

              {privacySavedToast && (
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Đã lưu cài đặt!
                </span>
              )}
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              {/* Option 1: Không công khai hồ sơ học sinh */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <EyeOff className="w-4 h-4 text-indigo-600" />
                    <span>Không công khai hồ sơ học sinh ra bên ngoài (Mặc định bắt buộc)</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Hồ sơ, tiến trình học tập và điểm số chỉ hiển thị riêng cho em và Thầy Trầm Thanh Tuấn. Không công khai trang web học sinh ra công chúng khi chưa có sự đồng ý của phụ huynh và nhà trường.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={!privacySettings.isProfilePublic}
                  onChange={(e) =>
                    setPrivacySettings({
                      ...privacySettings,
                      isProfilePublic: !e.target.checked,
                    })
                  }
                  className="w-5 h-5 rounded text-indigo-600 mt-1 cursor-pointer"
                />
              </div>

              {/* Option 2: Cho phép tính vào thống kê ẩn danh */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Đóng góp điểm số vào bảng thống kê ẩn danh của trường</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Điểm số của em được gộp vào báo cáo học tập chung của lớp (ví dụ: "Lớp 11A1 đạt điểm trung bình 82/100") mà hoàn toàn không lộ danh tính cá nhân.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={privacySettings.allowAnonymousStats}
                  onChange={(e) =>
                    setPrivacySettings({
                      ...privacySettings,
                      allowAnonymousStats: e.target.checked,
                    })
                  }
                  className="w-5 h-5 rounded text-indigo-600 mt-1 cursor-pointer"
                />
              </div>

              {/* Option 3: Thông báo khi đề xuất được duyệt */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <Bell className="w-4 h-4 text-purple-600" />
                    <span>Nhận thông báo khi từ ngữ đề xuất được phê duyệt</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Hệ thống sẽ gửi thông báo chúc mừng khi mục từ em đóng góp được Thầy Tuấn duyệt xuất bản vào Từ điển NETWORD.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={privacySettings.notifyOnWordReview}
                  onChange={(e) =>
                    setPrivacySettings({
                      ...privacySettings,
                      notifyOnWordReview: e.target.checked,
                    })
                  }
                  className="w-5 h-5 rounded text-indigo-600 mt-1 cursor-pointer"
                />
              </div>

              {/* Option 4: Thông báo thử thách tuần mới */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/60">
                <div className="space-y-1">
                  <div className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Thông báo khi có bộ Thử thách Tuần mới</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Nhắc nhở tham gia làm bài chuyên đề định kỳ hàng tuần của tổ Ngữ văn Trường THCS & THPT Long Hiệp.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={privacySettings.notifyOnWeeklyChallenge}
                  onChange={(e) =>
                    setPrivacySettings({
                      ...privacySettings,
                      notifyOnWeeklyChallenge: e.target.checked,
                    })
                  }
                  className="w-5 h-5 rounded text-indigo-600 mt-1 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={handleSavePrivacy}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition cursor-pointer"
              >
                Lưu tùy chọn bảo mật
              </button>
            </div>
          </div>

          {/* QUYỀN DỮ LIỆU CÁ NHÂN: YÊU CẦU SỬA HOẶC XÓA DỮ LIỆU */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                Quyền Chỉnh sửa & Xóa dữ liệu cá nhân (Right to be Forgotten)
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Học sinh có quyền gửi yêu cầu đính chính sai sót hoặc yêu cầu xóa bỏ toàn bộ dữ liệu làm bài và tương tác của mình theo chính sách bảo vệ dữ liệu học đường.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/30 space-y-2">
                <h4 className="font-bold text-xs text-indigo-950 dark:text-indigo-200 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  Yêu cầu chỉnh sửa thông tin trường cấp
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Gửi yêu cầu điều chỉnh lại họ tên, lớp học, mã số học sinh do nhập nhầm khi trường cấp tài khoản.
                </p>
                <button
                  onClick={() => setShowEditRequestModal(true)}
                  className="mt-1 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-xs hover:bg-indigo-700 transition cursor-pointer"
                >
                  Gửi yêu cầu sửa thông tin
                </button>
              </div>

              <div className="p-4 rounded-2xl border border-rose-100 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/30 space-y-2">
                <h4 className="font-bold text-xs text-rose-950 dark:text-rose-200 flex items-center gap-1.5">
                  <Trash2 className="w-4 h-4 text-rose-600" />
                  Yêu cầu xóa toàn bộ dữ liệu cá nhân
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Xóa sạch lịch sử làm bài thử thách, xóa danh sách từ đã lưu và ẩn danh hóa các đóng góp từ ngữ.
                </p>
                <button
                  onClick={() => setShowDeleteRequestModal(true)}
                  className="mt-1 px-4 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs shadow-xs hover:bg-rose-700 transition cursor-pointer"
                >
                  Yêu cầu xóa dữ liệu
                </button>
              </div>
            </div>

            {/* Danh sách yêu cầu đã gửi */}
            {dataRequests.length > 0 && (
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                  Nhật ký yêu cầu dữ liệu đã gửi:
                </span>
                <div className="space-y-2">
                  {dataRequests.map((req) => (
                    <div
                      key={req.id}
                      className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 text-xs flex flex-wrap items-center justify-between gap-2"
                    >
                      <div className="space-y-0.5">
                        <div className="font-semibold text-slate-900 dark:text-slate-100">
                          {req.type === 'edit_request'
                            ? `Yêu cầu sửa mục [${req.requestField}] thành "${req.proposedValue}"`
                            : 'Yêu cầu xóa dữ liệu cá nhân (Right to be Forgotten)'}
                        </div>
                        <p className="text-[11px] text-slate-500">
                          Lý do: {req.reason} • Ngày gửi: {req.submittedAt}
                        </p>
                        {req.adminNote && (
                          <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
                            Ghi chú của Thầy Tuấn: {req.adminNote}
                          </p>
                        )}
                      </div>

                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${
                          req.status === 'approved'
                            ? 'bg-emerald-100 text-emerald-800'
                            : req.status === 'rejected'
                            ? 'bg-rose-100 text-rose-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {req.status === 'approved'
                          ? 'Đã duyệt'
                          : req.status === 'rejected'
                          ? 'Từ chối'
                          : 'Đang xử lý'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* SUB-TAB 6: CHUYỂN ĐỔI VAI TRÒ TRẢI NGHIỆM */}
      {/* ============================================================ */}
      {activeTab === 'roles' && (
        <Card className="p-6 space-y-4">
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              Chuyển đổi vai trò trải nghiệm trong Chế độ Dùng thử (Demo)
            </h3>
            <p className="text-xs text-slate-500">
              Thầy Trầm Thanh Tuấn có thể chuyển đổi nhanh giữa 4 vai trò để kiểm tra phân quyền và giao diện tương ứng.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              {
                role: 'guest' as const,
                title: 'Khách vãng lai (Guest)',
                desc: 'Chỉ xem từ điển và trải nghiệm thử thách, không lưu điểm.',
                icon: '👤',
              },
              {
                role: 'student' as const,
                title: 'Học sinh THPT (Student)',
                desc: 'Tra cứu, lưu từ yêu thích, lưu điểm thử thách, gửi đề xuất từ.',
                icon: '🎓',
              },
              {
                role: 'editor' as const,
                title: 'Ban Biên tập (Editor)',
                desc: 'Thẩm định đề xuất từ mới, quản lý bộ câu hỏi thử thách.',
                icon: '✍️',
              },
              {
                role: 'admin' as const,
                title: 'Quản trị viên (Thầy Trầm Thanh Tuấn)',
                desc: 'Toàn quyền duyệt xuất bản, cấp tài khoản trường, cấu hình hệ thống.',
                icon: '👑',
              },
            ].map((r) => (
              <button
                key={r.role}
                onClick={() => switchRole(r.role)}
                className={`p-4 rounded-2xl border text-left transition cursor-pointer flex items-start gap-3 ${
                  currentUser.role === r.role
                    ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/60 ring-2 ring-indigo-500/20'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <span className="text-2xl p-2 rounded-xl bg-white dark:bg-slate-800 shadow-xs shrink-0">
                  {r.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 truncate">
                      {r.title}
                    </h4>
                    {currentUser.role === r.role && (
                      <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{r.desc}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => onNavigate('role_tests')}
              className="text-xs text-indigo-600 dark:text-indigo-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Xem bộ kiểm thử tự động 4 vai trò (RBAC Test Suite)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </Card>
      )}

      {/* ============================================================ */}
      {/* MODAL 1: GỬI YÊU CẦU CHỈNH SỬA DỮ LIỆU */}
      {/* ============================================================ */}
      {showEditRequestModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" />
                Yêu cầu chỉnh sửa thông tin trường cấp
              </h3>
              <button
                onClick={() => setShowEditRequestModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕ Đóng
              </button>
            </div>

            <form onSubmit={handleSubmitEditRequest} className="space-y-3.5 text-xs sm:text-sm">
              <div>
                <label className="font-bold block mb-1">Mục cần chỉnh sửa:</label>
                <select
                  value={reqField}
                  onChange={(e) => setReqField(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                >
                  <option value="grade">Lớp học / Chi đoàn (Hiện tại: {currentUser.grade})</option>
                  <option value="name">Họ và tên học sinh (Hiện tại: {currentUser.name})</option>
                  <option value="school">Trường học (Hiện tại: {currentUser.school})</option>
                </select>
              </div>

              <div>
                <label className="font-bold block mb-1">Thông tin đề xuất thay đổi:</label>
                <input
                  type="text"
                  value={reqProposedValue}
                  onChange={(e) => setReqProposedValue(e.target.value)}
                  placeholder="Nhập thông tin đúng..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                  required
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Lý do điều chỉnh (gửi Thầy Trầm Thanh Tuấn):</label>
                <textarea
                  value={reqReason}
                  onChange={(e) => setReqReason(e.target.value)}
                  rows={3}
                  placeholder="Giải thích lý do cần sửa (ví dụ: chuyển lớp, sai chính tả tên khai sinh...)"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowEditRequestModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-500 font-semibold text-xs"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition"
                >
                  Gửi yêu cầu lên Thầy Tuấn
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* MODAL 2: YÊU CẦU XÓA TOÀN BỘ DỮ LIỆU CÁ NHÂN */}
      {/* ============================================================ */}
      {showDeleteRequestModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-base text-rose-600 flex items-center gap-2">
                <Trash2 className="w-5 h-5 text-rose-600" />
                Xác nhận yêu cầu xóa dữ liệu cá nhân
              </h3>
              <button
                onClick={() => setShowDeleteRequestModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕ Đóng
              </button>
            </div>

            <form onSubmit={handleSubmitDeleteRequest} className="space-y-3.5 text-xs sm:text-sm">
              <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-800 dark:text-rose-200 leading-relaxed">
                <strong>Cảnh báo:</strong> Thao tác này sẽ xóa sạch kết quả thử thách, danh sách từ đã lưu của em và gửi yêu cầu ẩn danh hóa toàn bộ các đề xuất từ ngữ đã đóng góp.
              </div>

              <div>
                <label className="font-bold block mb-1">Lý do yêu cầu xóa dữ liệu:</label>
                <textarea
                  value={deleteReason}
                  onChange={(e) => setDeleteReason(e.target.value)}
                  rows={2}
                  placeholder="Ví dụ: Em đã hoàn thành môn học và muốn xóa dữ liệu lịch sử..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                />
              </div>

              <div>
                <label className="font-bold block mb-1 text-slate-700 dark:text-slate-300">
                  Nhập chính xác cụm từ <span className="text-rose-600 font-black">XÓA DỮ LIỆU</span> để xác nhận:
                </label>
                <input
                  type="text"
                  value={confirmDeleteText}
                  onChange={(e) => setConfirmDeleteText(e.target.value)}
                  placeholder="XÓA DỮ LIỆU"
                  className="w-full px-3 py-2 rounded-xl border border-rose-200 dark:border-rose-800 bg-slate-50 dark:bg-slate-800 text-xs font-bold text-rose-600"
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowDeleteRequestModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-500 font-semibold text-xs"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  disabled={confirmDeleteText !== 'XÓA DỮ LIỆU'}
                  className="px-5 py-2 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition disabled:opacity-40"
                >
                  Xác nhận xóa dữ liệu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
