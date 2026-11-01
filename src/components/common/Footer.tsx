import React from 'react';
import { BookOpen, GraduationCap, MapPin, Mail, Sparkles, Heart, QrCode, ShieldCheck, Lock, ExternalLink } from 'lucide-react';
import { ActiveTab } from '../../types';

interface FooterProps {
  onNavigate?: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300 pt-12 pb-24 lg:pb-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: Project Info và Slogan */}
          <div className="space-y-3 md:col-span-1">
            <div
              onClick={() => onNavigate?.('about')}
              className="flex items-center gap-2 cursor-pointer group select-none"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-black text-white text-sm group-hover:scale-105 transition">
                NW
              </div>
              <span className="font-extrabold text-lg text-white tracking-wide group-hover:text-indigo-400 transition">
                NETWORD
              </span>
            </div>
            <div className="text-xs font-bold text-indigo-400 bg-indigo-950/60 border border-indigo-900/80 px-3 py-1.5 rounded-xl inline-block">
              “Hiểu đúng ngôn từ – Giao tiếp văn minh”
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Từ điển ngôn ngữ trên không gian mạng dành cho học sinh THPT. Sản phẩm học tập thuộc <strong>Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại (Ngữ văn 11)</strong>.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              Công nghệ PWA và HTTPS Production
            </div>
          </div>

          {/* Col 2: Educational Developer */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              Giáo viên phát triển
            </h4>
            <div className="bg-slate-800/50 p-3.5 rounded-2xl border border-slate-800 space-y-1.5 text-xs">
              <p className="font-semibold text-white text-sm">Thầy Trầm Thanh Tuấn</p>
              <p className="text-slate-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                Trường THCS và THPT Long Hiệp
              </p>
              <p className="text-slate-400 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                tramthanhtuanlh@gmail.com
              </p>
            </div>
            <p className="text-[11px] text-slate-400 italic">
              Định hướng học sinh tiếp cận ngôn ngữ mạng cởi mở, khách quan, đồng thời kiên định bảo vệ sự trong sáng của Tiếng Việt.
            </p>
          </div>

          {/* Col 3: Principles và Pedagogical Note */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              Nguyên tắc Chuyên đề 2
            </h4>
            <ul className="text-xs text-slate-400 space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span>Hiểu từ lóng để giải mã văn hóa số và giao tiếp thân mật bè bạn ngoài giờ.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>Không sử dụng tiếng lóng trong bài thi, bài kiểm tra hay văn bản hành chính.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                <span>Chung tay xây dựng môi trường mạng lành mạnh, văn minh và tôn trọng.</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links for Release và Guide */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Cẩm nang và Phát hành
            </h4>
            <ul className="text-xs space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate?.('about')}
                  className="hover:text-white transition flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <QrCode className="w-3.5 h-3.5 text-purple-400" />
                  <span>Đường dẫn HTTPS và Mã QR chia sẻ</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('about')}
                  className="hover:text-white transition flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Cài đặt Màn hình chính (PWA)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('about')}
                  className="hover:text-white transition flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <Lock className="w-3.5 h-3.5 text-rose-400" />
                  <span>Chính sách quyền riêng tư học sinh</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('role_tests')}
                  className="hover:text-white transition flex items-center gap-1.5 cursor-pointer text-left"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Kiểm thử bảo mật 4 vai trò (RBAC)</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2024 - 2026 NETWORD • Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn)</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate?.('about')}
              className="hover:text-slate-300 transition cursor-pointer"
            >
              Điều khoản học đường
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigate?.('about')}
              className="hover:text-slate-300 transition cursor-pointer"
            >
              Quyền riêng tư
            </button>
            <span>•</span>
            <p className="flex items-center gap-1">
              Phát triển với tình yêu <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> sự trong sáng của Tiếng Việt
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
