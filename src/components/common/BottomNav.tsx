import React from 'react';
import { ActiveTab } from '../../types';
import { useAuth } from '../../services/authContext';
import {
  Compass,
  BookOpen,
  PlusCircle,
  Trophy,
  User,
  ShieldCheck,
  Settings,
  LogIn,
  Sparkles,
} from 'lucide-react';

interface BottomNavProps {
  activeTab: ActiveTab;
  onNavigate: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onNavigate }) => {
  const { currentUser, openAuthModal } = useAuth();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200/90 dark:border-slate-800 shadow-lg px-2 py-1 safe-area-bottom transition-colors">
      <div className="flex items-center justify-around">
        <button
          onClick={() => onNavigate('home')}
          className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition cursor-pointer ${
            activeTab === 'home'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Compass className={`w-5 h-5 ${activeTab === 'home' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          <span className="text-[11px] mt-0.5">Trang chủ</span>
        </button>

        <button
          onClick={() => onNavigate('dictionary')}
          className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition cursor-pointer ${
            activeTab === 'dictionary' || activeTab === 'detail'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <BookOpen
            className={`w-5 h-5 ${
              activeTab === 'dictionary' || activeTab === 'detail' ? 'stroke-[2.5]' : 'stroke-[1.8]'
            }`}
          />
          <span className="text-[11px] mt-0.5">Từ điển</span>
        </button>

        <button
          onClick={() => onNavigate('expression')}
          className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition cursor-pointer relative ${
            activeTab === 'expression'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-md shadow-indigo-300 dark:shadow-none -mt-3">
            <Sparkles className="w-4 h-4 text-amber-300 stroke-[2.4]" />
          </div>
          <span className="text-[11px] mt-0.5 font-bold">Diễn đạt</span>
        </button>

        <button
          onClick={() => onNavigate('challenges')}
          className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition cursor-pointer ${
            activeTab === 'challenges'
              ? 'text-indigo-600 dark:text-indigo-400 font-bold'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Trophy
            className={`w-5 h-5 ${activeTab === 'challenges' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`}
          />
          <span className="text-[11px] mt-0.5">Thử thách</span>
        </button>

        {/* 5th slot depends on role */}
        {currentUser.role === 'admin' ? (
          <button
            onClick={() => onNavigate('admin')}
            className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition cursor-pointer ${
              activeTab === 'admin'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Settings className="w-5 h-5 stroke-[1.8]" />
            <span className="text-[11px] mt-0.5">Quản trị</span>
          </button>
        ) : currentUser.role === 'editor' ? (
          <button
            onClick={() => onNavigate('editor')}
            className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition cursor-pointer ${
              activeTab === 'editor'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-5 h-5 stroke-[1.8]" />
            <span className="text-[11px] mt-0.5">Biên tập</span>
          </button>
        ) : currentUser.role === 'student' ? (
          <button
            onClick={() => onNavigate('profile')}
            className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition cursor-pointer ${
              activeTab === 'profile'
                ? 'text-indigo-600 dark:text-indigo-400 font-bold'
                : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <User className={`w-5 h-5 ${activeTab === 'profile' ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
            <span className="text-[11px] mt-0.5">Cá nhân</span>
          </button>
        ) : (
          <button
            onClick={() => openAuthModal('login')}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition cursor-pointer text-indigo-600 dark:text-indigo-400 font-semibold"
          >
            <LogIn className="w-5 h-5 stroke-[2]" />
            <span className="text-[11px] mt-0.5">Đăng nhập</span>
          </button>
        )}
      </div>
    </div>
  );
};
