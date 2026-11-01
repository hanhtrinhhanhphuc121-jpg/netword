import React from 'react';
import { ActiveTab, UserRole } from '../../types';
import { useAuth } from '../../services/authContext';
import { ROLE_DEFINITIONS } from '../../services/rbacService';
import { PWAInstallButton } from './PWAInstallButton';
import { ThemeToggle } from '../ui/ThemeToggle';
import { KeyboardShortcutHelp } from '../ui/KeyboardShortcutHelp';
import {
  BookOpen,
  Compass,
  PlusCircle,
  Trophy,
  User,
  ShieldCheck,
  Settings,
  LogIn,
  LogOut,
  Sparkles,
  QrCode,
  ShieldAlert,
} from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onNavigate }) => {
  const { currentUser, switchRole, openAuthModal, signOut } = useAuth();

  const navItems: { tab: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { tab: 'home', label: 'Trang chủ', icon: <Compass className="w-3.5 h-3.5" /> },
    { tab: 'dictionary', label: 'Từ điển', icon: <BookOpen className="w-3.5 h-3.5" /> },
    { tab: 'expression', label: 'Diễn đạt phù hợp', icon: <Sparkles className="w-3.5 h-3.5 text-amber-500" /> },
    { tab: 'challenges', label: 'Thử thách', icon: <Trophy className="w-3.5 h-3.5" /> },
    { tab: 'suggest', label: 'Đề xuất', icon: <PlusCircle className="w-3.5 h-3.5" /> },
    { tab: 'about', label: 'Giới thiệu & QR', icon: <QrCode className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" /> },
    { tab: 'role_tests', label: 'Kiểm thử RBAC', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
  ];

  if (currentUser.role === 'editor' || currentUser.role === 'admin') {
    navItems.push({
      tab: 'editor',
      label: 'Biên tập',
      icon: <ShieldCheck className="w-3.5 h-3.5" />,
    });
  }

  if (currentUser.role === 'admin') {
    navItems.push({
      tab: 'admin',
      label: 'Quản trị',
      icon: <Settings className="w-3.5 h-3.5" />,
    });
  }

  if (currentUser.role !== 'guest') {
    navItems.push({ tab: 'profile', label: 'Cá nhân', icon: <User className="w-3.5 h-3.5" /> });
  }

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* ZONE 1: BRAND WORDMARK (Single text element with clean editorial title) */}
          <div
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none shrink-0 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-sm tracking-wider">NW</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-lg tracking-tight text-slate-900 dark:text-slate-100">
                  NETWORD
                </span>
                <span className="hidden lg:inline text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                  · Chuyên đề 2 Ngữ văn 11
                </span>
              </div>
              <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide">
                Hiểu đúng ngôn từ – Giao tiếp văn minh
              </span>
            </div>
          </div>

          {/* ZONE 2: PRIMARY NAVIGATION LINKS (Single-line, text links with clean active underline) */}
          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => onNavigate(item.tab)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer relative ${
                    isActive
                      ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50/80 dark:bg-indigo-950/60 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* ZONE 3: ACTIONS (Role Switcher, ThemeToggle, User login) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            <KeyboardShortcutHelp />
            <ThemeToggle />

            {/* Role Quick Switcher for Teacher & Testers */}
            <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-xl border border-slate-200/80 dark:border-slate-700 text-xs">
              <select
                aria-label="Chọn vai trò người dùng"
                value={currentUser.role}
                onChange={(e) => switchRole(e.target.value as UserRole)}
                className="bg-transparent font-semibold text-slate-700 dark:text-slate-300 outline-none cursor-pointer text-xs"
              >
                <option value="guest" className="dark:bg-slate-900">👤 Khách</option>
                <option value="student" className="dark:bg-slate-900">🎓 Học sinh</option>
                <option value="editor" className="dark:bg-slate-900">✍️ Ban Biên tập</option>
                <option value="admin" className="dark:bg-slate-900">👨‍🏫 Thầy Tuấn (Admin)</option>
              </select>
            </div>

            {/* Auth Button or User profile */}
            {currentUser.role === 'guest' ? (
              <button
                onClick={() => openAuthModal('login')}
                className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Đăng nhập</span>
              </button>
            ) : (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => onNavigate('profile')}
                  className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 transition cursor-pointer"
                  title="Xem hồ sơ cá nhân"
                >
                  <span className="max-w-[110px] truncate">{currentUser.name.split(' ').pop()}</span>
                </button>
                <button
                  onClick={() => signOut()}
                  className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer"
                  title="Đăng xuất về chế độ Khách"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <PWAInstallButton compact />
          </div>
        </div>
      </div>
    </header>
  );
};

