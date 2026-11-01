import React, { useState } from 'react';
import { useAuth } from '../../services/authContext';
import { UserRole } from '../../types';
import { ROLE_DEFINITIONS } from '../../services/rbacService';
import {
  X,
  LogIn,
  UserPlus,
  KeyRound,
  Sparkles,
  School,
  AlertCircle,
  CheckCircle2,
  Mail,
  Lock,
  User,
  GraduationCap,
  Info,
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const {
    showAuthModal,
    closeAuthModal,
    authModalMode,
    signInWithEmail,
    signUpWithEmail,
    requestPasswordReset,
    loginAsRole,
  } = useAuth();

  const [mode, setMode] = useState<'login' | 'register' | 'recovery' | 'quick_test'>(
    authModalMode || 'login'
  );

  // Form states
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [fullNameInput, setFullNameInput] = useState('');
  const [schoolInput, setSchoolInput] = useState('Trường THCS và THPT Long Hiệp');
  const [gradeInput, setGradeInput] = useState('Lớp 11A1 (Chuyên đề 2)');

  // Status
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!showAuthModal) return null;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    const res = await signInWithEmail(emailInput, passwordInput);
    setLoading(false);
    if (!res.success) {
      setErrorMessage(res.error || 'Đăng nhập không thành công.');
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    const res = await signUpWithEmail(emailInput, passwordInput, fullNameInput, schoolInput, gradeInput);
    setLoading(false);
    if (!res.success) {
      setErrorMessage(res.error || 'Đăng ký không thành công.');
    } else {
      setSuccessMessage(res.message || 'Đăng ký thành công!');
    }
  };

  const handleRecovery = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    const res = await requestPasswordReset(emailInput);
    setLoading(false);
    if (!res.success) {
      setErrorMessage(res.error || 'Không thể khôi phục mật khẩu.');
    } else {
      setSuccessMessage(res.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-blue-50/50 via-indigo-50/30 to-purple-50/50 dark:from-slate-900 dark:to-slate-900">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-md">
              NW
            </div>
            <div>
              <h3 className="font-black text-base text-slate-900 dark:text-slate-100">
                Xác thực & Tài khoản NETWORD
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Chuyên đề 2 Ngữ văn 11 • THCS và THPT Long Hiệp
              </p>
            </div>
          </div>

          <button
            onClick={closeAuthModal}
            className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="grid grid-cols-4 p-1.5 bg-slate-100 dark:bg-slate-800/80 text-[11px] font-bold border-b border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
          <button
            onClick={() => {
              setMode('login');
              setErrorMessage(null);
              setSuccessMessage(null);
            }}
            className={`py-1.5 rounded-lg transition cursor-pointer ${
              mode === 'login'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            Đăng nhập
          </button>
          <button
            onClick={() => {
              setMode('register');
              setErrorMessage(null);
              setSuccessMessage(null);
            }}
            className={`py-1.5 rounded-lg transition cursor-pointer ${
              mode === 'register'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            Đăng ký
          </button>
          <button
            onClick={() => {
              setMode('recovery');
              setErrorMessage(null);
              setSuccessMessage(null);
            }}
            className={`py-1.5 rounded-lg transition cursor-pointer ${
              mode === 'recovery'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            Khôi phục
          </button>
          <button
            onClick={() => {
              setMode('quick_test');
              setErrorMessage(null);
              setSuccessMessage(null);
            }}
            className={`py-1.5 rounded-lg transition cursor-pointer ${
              mode === 'quick_test'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-indigo-600 dark:text-indigo-400 hover:text-indigo-700'
            }`}
          >
            ⚡ 4 Vai trò
          </button>
        </div>

        {/* Demo Mode Notice */}
        <div className="mx-6 mt-4 p-3 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-[11px] text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <span className="font-bold">Chế độ Dùng thử (Lưu trữ cục bộ):</span>{' '}
            Hệ thống chưa kết nối cơ sở dữ liệu đám mây tập trung. Tài khoản đăng ký được lưu trên trình duyệt máy này. Thầy/học sinh có thể chọn tab <strong>"⚡ 4 Vai trò"</strong> để chuyển đổi nhanh tức thì mà không cần mật khẩu.
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 pt-3 space-y-4">
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-200 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* TAB 1: LOGIN */}
          {mode === 'login' && (
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  Email hoặc Mã học sinh trường cấp
                </label>
                <input
                  type="text"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="vanminh11a1@longhiep.edu.vn hoặc LH2026-11A1-001"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  Mật khẩu
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Nhập mật khẩu của bạn..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                <span>* Học sinh dùng mật khẩu trường cấp ban đầu</span>
                <button
                  type="button"
                  onClick={() => setMode('recovery')}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline font-bold cursor-pointer"
                >
                  Quên mật khẩu?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs transition cursor-pointer shadow-md disabled:opacity-50"
              >
                {loading ? 'Đang xác thực...' : 'Đăng nhập vào NETWORD'}
              </button>

              <div className="pt-2 text-center text-xs text-slate-500 dark:text-slate-400">
                Chưa có tài khoản?{' '}
                <button
                  type="button"
                  onClick={() => setMode('register')}
                  className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline cursor-pointer"
                >
                  Đăng ký tài khoản học sinh
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: REGISTER */}
          {mode === 'register' && (
            <form onSubmit={handleSignUp} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  Họ và tên học sinh
                </label>
                <input
                  type="text"
                  value={fullNameInput}
                  onChange={(e) => setFullNameInput(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Văn Minh"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  Email đăng ký
                </label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="hocsinh@gmail.com"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  Mật khẩu (tối thiểu 6 ký tự)
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  minLength={6}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Trường học</label>
                  <input
                    type="text"
                    value={schoolInput}
                    onChange={(e) => setSchoolInput(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Lớp / Chi đoàn</label>
                  <input
                    type="text"
                    value={gradeInput}
                    onChange={(e) => setGradeInput(e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-[11px] text-amber-900 dark:text-amber-200 leading-relaxed">
                <strong>Quy định bảo mật:</strong> Mọi tài khoản tự đăng ký đều được khởi tạo với vai trò <strong>Học sinh (Student)</strong>. Học sinh không thể tự nâng cấp vai trò. Ban Biên tập do Thầy Trầm Thanh Tuấn chỉ định.
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition cursor-pointer shadow-md disabled:opacity-50"
              >
                {loading ? 'Đang tạo tài khoản...' : 'Hoàn tất Đăng ký'}
              </button>
            </form>
          )}

          {/* TAB 3: RECOVERY */}
          {mode === 'recovery' && (
            <form onSubmit={handleRecovery} className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 text-xs space-y-2 text-indigo-950 dark:text-indigo-200">
                <div className="font-bold flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-600" />
                  Quy trình Khôi phục Mật khẩu Học đường:
                </div>
                <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
                  <li>
                    <strong>Tài khoản do trường cấp (@longhiep.edu.vn):</strong> Thầy Trầm Thanh Tuấn có thể cấp lại mật khẩu khởi tạo trực tiếp tại lớp mà không cần email cá nhân.
                  </li>
                  <li>
                    <strong>Tài khoản tự đăng ký:</strong> Nhập email bên dưới để nhận liên kết đặt lại mật khẩu từ Supabase Auth.
                  </li>
                </ul>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  Email hoặc Mã học sinh cần khôi phục
                </label>
                <input
                  type="text"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="nhập email hoặc LH2026-11A1-001..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition cursor-pointer shadow-md disabled:opacity-50"
              >
                {loading ? 'Đang gửi yêu cầu...' : 'Gửi yêu cầu khôi phục mật khẩu'}
              </button>
            </form>
          )}

          {/* TAB 4: QUICK TEST 4 ROLES */}
          {mode === 'quick_test' && (
            <div className="space-y-3">
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Dành cho <strong>Thầy Trầm Thanh Tuấn</strong>, hội đồng thẩm định và học sinh trải nghiệm nhanh sự khác biệt giữa 4 vai trò:
              </p>

              {(['guest', 'student', 'editor', 'admin'] as UserRole[]).map((role) => {
                const info = ROLE_DEFINITIONS[role];
                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() => loginAsRole(role)}
                    className="w-full text-left p-3 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-400 dark:hover:border-indigo-600 hover:bg-indigo-50/40 dark:hover:bg-slate-800/80 transition flex items-center justify-between group cursor-pointer"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${info.badgeBg}`}>
                          {info.badge}
                        </span>
                        <span className="font-bold text-xs text-slate-900 dark:text-slate-100">
                          {info.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {info.scopeSummary}
                      </p>
                    </div>

                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition whitespace-nowrap pl-2">
                      Chọn vai trò →
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
