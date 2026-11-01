import React from 'react';
import { ActiveTab, UserRole } from '../../types';
import { useAuth } from '../../services/authContext';
import { ROLE_DEFINITIONS } from '../../services/rbacService';
import { ShieldAlert, ArrowLeft, LogIn, Lock, CheckCircle2 } from 'lucide-react';

interface AccessDeniedViewProps {
  attemptedTab: ActiveTab;
  requiredRoles: UserRole[];
  onNavigate: (tab: ActiveTab) => void;
}

export const AccessDeniedView: React.FC<AccessDeniedViewProps> = ({
  attemptedTab,
  requiredRoles,
  onNavigate,
}) => {
  const { currentUser, openAuthModal, loginAsRole } = useAuth();
  const currentRoleInfo = ROLE_DEFINITIONS[currentUser.role];

  const getTabLabel = (tab: ActiveTab) => {
    switch (tab) {
      case 'editor':
        return 'Bàn làm việc Ban Biên tập (Hội đồng Thẩm định)';
      case 'admin':
        return 'Hệ thống Quản trị & Cơ sở dữ liệu (Thầy Tuấn)';
      default:
        return 'Khu vực giới hạn';
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 animate-in fade-in zoom-in-95 duration-300">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-rose-200 dark:border-rose-900/60 shadow-xl text-center space-y-6 relative overflow-hidden">
        {/* Top glow decoration */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-500 via-amber-500 to-indigo-500" />

        {/* Shield Icon */}
        <div className="w-16 h-16 mx-auto rounded-3xl bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 flex items-center justify-center shadow-lg">
          <ShieldAlert className="w-8 h-8 stroke-[2.2]" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-bold border border-rose-300 dark:border-rose-800">
            <Lock className="w-3.5 h-3.5" />
            Lỗi 403: Quyền truy cập bị từ chối (Access Denied)
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
            Bạn không có thẩm quyền truy cập màn hình này
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            Màn hình <strong>"{getTabLabel(attemptedTab)}"</strong> yêu cầu thẩm quyền đặc biệt theo quy định của Chuyên đề 2 (Ngữ văn 11).
          </p>
        </div>

        {/* Current status vs Required */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2.5 max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 dark:text-slate-400 font-semibold">Vai trò hiện tại của bạn:</span>
            <span className={`px-2.5 py-0.5 rounded-md font-bold text-[11px] border ${currentRoleInfo.badgeBg}`}>
              {currentRoleInfo.label}
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-700/80 pt-2">
            <span className="text-slate-500 dark:text-slate-400 font-semibold">Vai trò được phép truy cập:</span>
            <div className="flex gap-1.5 flex-wrap justify-end">
              {requiredRoles.map((r) => (
                <span
                  key={r}
                  className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold text-[11px] border border-emerald-200 dark:border-emerald-800"
                >
                  {ROLE_DEFINITIONS[r].badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay về Trang chủ</span>
          </button>

          <button
            onClick={() => openAuthModal('login')}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
          >
            <LogIn className="w-4 h-4" />
            <span>Đăng nhập tài khoản có quyền</span>
          </button>
        </div>

        {/* Quick Testing Switchers for Teachers & Evaluators */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 space-y-2">
          <p className="font-semibold text-slate-500 dark:text-slate-400">
            Dành cho Thầy Trầm Thanh Tuấn & Hội đồng khảo nghiệm (Chuyển nhanh tài khoản):
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            {requiredRoles.map((r) => (
              <button
                key={r}
                onClick={() => loginAsRole(r)}
                className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 font-bold text-xs hover:bg-indigo-100 transition cursor-pointer"
              >
                Chuyển thành {ROLE_DEFINITIONS[r].label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
