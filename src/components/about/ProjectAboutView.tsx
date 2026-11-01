/**
 * NETWORD - Trang Giới thiệu Dự án, Chia sẻ Mã QR & Cẩm nang Phát hành Học đường
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 * 
 * ĐƯỜNG DẪN TRIỂN KHAI THỰC TẾ:
 * Production (Shared): https://ais-pre-zcnt35o5pkijkc5ocow74o-270568052035.asia-southeast1.run.app
 */

import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import { ActiveTab } from '../../types';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { Card } from '../ui/Card';
import {
  Globe,
  QrCode,
  Smartphone,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Download,
  Copy,
  Check,
  Share2,
  ExternalLink,
  Laptop,
  Apple,
  FileText,
  Lock,
  RotateCcw,
  Sparkles,
  Info,
  Calendar,
  Layers,
  ChevronRight,
  Heart,
  MessageSquare,
} from 'lucide-react';

export const LIVE_PRODUCTION_URL = 'https://ais-pre-zcnt35o5pkijkc5ocow74o-270568052035.asia-southeast1.run.app';
export const DEV_ENVIRONMENT_URL = 'https://ais-dev-zcnt35o5pkijkc5ocow74o-270568052035.asia-southeast1.run.app';

interface ProjectAboutViewProps {
  onNavigate: (tab: ActiveTab) => void;
}

type AboutSection =
  | 'overview'
  | 'share_qr'
  | 'install_pwa'
  | 'student_guide'
  | 'teacher_guide'
  | 'privacy_terms'
  | 'backup_plan';

export const ProjectAboutView: React.FC<ProjectAboutViewProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<AboutSection>('overview');
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [qrSize, setQrSize] = useState<'normal' | 'projector'>('normal');
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();

  // Tạo mã QR Code thực tế từ URL triển khai chính thức
  useEffect(() => {
    QRCode.toDataURL(LIVE_PRODUCTION_URL, {
      width: qrSize === 'projector' ? 480 : 280,
      margin: 2,
      color: {
        dark: '#1e1b4b', // Indigo 950
        light: '#ffffff',
      },
      errorCorrectionLevel: 'H',
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('Lỗi tạo mã QR', err));
  }, [qrSize]);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(LIVE_PRODUCTION_URL);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleDownloadQR = () => {
    if (!qrDataUrl) return;
    const a = document.createElement('a');
    a.href = qrDataUrl;
    a.download = `NETWORD_QR_Code_ChuyenDe2_NguVan11_${new Date().toISOString().split('T')[0]}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 p-6 sm:p-8 text-white shadow-lg">
        <div className="relative z-10 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-white border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Bản Phát hành Chính thức v1.0.0 (Production)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/30 backdrop-blur-md text-xs font-bold text-emerald-200 border border-emerald-400/40">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              Bảo mật HTTPS & RLS 100%
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/30 backdrop-blur-md text-xs font-bold text-purple-200 border border-purple-400/40">
              <Smartphone className="w-3.5 h-3.5" />
              Chuẩn PWA Đa nền tảng
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            NETWORD – Từ điển Ngôn ngữ Mạng THPT
          </h1>

          <p className="text-sm sm:text-base text-indigo-100 max-w-2xl leading-relaxed">
            Sản phẩm học tập số hóa thuộc <strong>Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại</strong> (Môn Ngữ văn 11 – Chương trình GDPT 2018).
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-indigo-200">
            <span>GV phát triển: <strong>Thầy Trầm Thanh Tuấn</strong></span>
            <span>•</span>
            <span>Đơn vị: <strong>Trường THCS và THPT Long Hiệp</strong></span>
            <span>•</span>
            <span className="italic text-amber-200">"Hiểu đúng ngôn từ – Giao tiếp văn minh"</span>
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <button
          onClick={() => setActiveSection('overview')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
            activeSection === 'overview'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>1. Giới thiệu Dự án</span>
        </button>

        <button
          onClick={() => setActiveSection('share_qr')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
            activeSection === 'share_qr'
              ? 'bg-purple-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <QrCode className="w-3.5 h-3.5" />
          <span>2. Đường dẫn & Mã QR</span>
        </button>

        <button
          onClick={() => setActiveSection('install_pwa')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
            activeSection === 'install_pwa'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>3. Cài đặt Màn hình chính (PWA)</span>
        </button>

        <button
          onClick={() => setActiveSection('student_guide')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
            activeSection === 'student_guide'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span>4. Hướng dẫn Học sinh</span>
        </button>

        <button
          onClick={() => setActiveSection('teacher_guide')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
            activeSection === 'teacher_guide'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>5. Hướng dẫn Giáo viên</span>
        </button>

        <button
          onClick={() => setActiveSection('privacy_terms')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
            activeSection === 'privacy_terms'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Lock className="w-3.5 h-3.5" />
          <span>6. Quyền riêng tư & Điều khoản</span>
        </button>

        <button
          onClick={() => setActiveSection('backup_plan')}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
            activeSection === 'backup_plan'
              ? 'bg-teal-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>7. Sao lưu & Cập nhật</span>
        </button>
      </div>

      {/* SECTION 1: OVERVIEW */}
      {activeSection === 'overview' && (
        <div className="space-y-6 animate-in fade-in">
          <Card className="p-6 space-y-4">
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Bối cảnh & Ý nghĩa Sư phạm của Dự án NETWORD
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Trong đời sống hiện đại, không gian mạng (mạng xã hội, diễn đàn, ứng dụng nhắn tin) đã trở thành một môi trường giao tiếp quan trọng của thanh thiếu niên. Học sinh THPT thường xuyên tiếp xúc và sáng tạo nên nhiều lớp từ ngữ mới: tiếng lóng Gen Z, từ mượn tiếng Anh, teencode và các biến thể hài hước.
            </p>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Theo định hướng của <strong>Chuyên đề học tập 2: "Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại" (Ngữ văn 11)</strong>, mục tiêu giáo dục không phải là ngăn cấm cứng nhắc hay phủ nhận tiếng lóng, mà là giúp học sinh có năng lực <em>quan sát, phân loại, giải mã ngữ nghĩa</em> và rèn luyện ý thức <em>sử dụng đúng hoàn cảnh giao tiếp</em> nhằm giữ gìn sự trong sáng của Tiếng Việt.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60 space-y-1">
                <div className="text-blue-700 dark:text-blue-300 font-bold text-xs uppercase">Nguyên tắc 1</div>
                <div className="font-black text-sm text-slate-900 dark:text-slate-100">Hiểu đúng bản chất</div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Phân biệt rõ ràng giữa nghĩa gốc của từ và nghĩa nảy sinh trên mạng xã hội.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60 space-y-1">
                <div className="text-purple-700 dark:text-purple-300 font-bold text-xs uppercase">Nguyên tắc 2</div>
                <div className="font-black text-sm text-slate-900 dark:text-slate-100">Đúng nơi – Đúng lúc</div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Biết dùng linh hoạt khi tán gẫu bạn bè ngoài giờ học, tuyệt đối không lạm dụng trong thi cử hay văn bản học thuật.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 space-y-1">
                <div className="text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase">Nguyên tắc 3</div>
                <div className="font-black text-sm text-slate-900 dark:text-slate-100">Giao tiếp văn minh</div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Nhận diện và tẩy chay các từ ngữ độc hại, miệt thị, bạo lực học đường trên không gian số.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-3">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              Thông tin Tác giả & Đơn vị Nghiên cứu
            </h3>
            <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 leading-relaxed">
              <p>• <strong>Giáo viên phát triển:</strong> Thầy Trầm Thanh Tuấn (Tổ bộ môn Ngữ văn)</p>
              <p>• <strong>Đơn vị công tác:</strong> Trường THCS và THPT Long Hiệp (Tỉnh Trà Vinh)</p>
              <p>• <strong>Hộp thư trao đổi chuyên môn:</strong> <a href="mailto:tramthanhtuanlh@gmail.com" className="text-blue-600 hover:underline">tramthanhtuanlh@gmail.com</a></p>
              <p>• <strong>Đối tượng học sinh áp dụng:</strong> Học sinh lớp 11 (11A1, 11A2, 11A3, 11A4) và toàn thể giáo viên bộ môn Ngữ văn THPT.</p>
            </div>
          </Card>
        </div>
      )}

      {/* SECTION 2: LIVE SHARE LINK & QR CODE */}
      {activeSection === 'share_qr' && (
        <div className="space-y-6 animate-in fade-in">
          <Card className="p-6 space-y-6">
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <QrCode className="w-5 h-5 text-purple-600" />
                Đường dẫn Phát hành & Mã QR Code Chia sẻ Thực tế
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Sử dụng đường dẫn bảo mật HTTPS thực tế để chia sẻ cho học sinh quét qua điện thoại hoặc chiếu máy chiếu trong giờ học.
              </p>
            </div>

            {/* Live URL Box */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                Đường dẫn Triển khai Chính thức (Production HTTPS URL):
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                <code className="text-xs sm:text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400 break-all">
                  {LIVE_PRODUCTION_URL}
                </code>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopyLink}
                    className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                  >
                    {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedLink ? 'Đã sao chép!' : 'Sao chép link'}</span>
                  </button>

                  <a
                    href={LIVE_PRODUCTION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Mở tab mới</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive QR Code Display */}
            <div className="flex flex-col items-center justify-center p-6 rounded-3xl bg-gradient-to-b from-indigo-50/80 to-purple-50/50 dark:from-slate-900 dark:to-slate-950 border border-indigo-100 dark:border-slate-800 space-y-4 text-center">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
                  Quét Mã Bằng Camera Điện Thoại Hoặc Zalo
                </span>
                <p className="text-xs text-slate-500">Mở tức thì ứng dụng NETWORD trên mọi điện thoại Android và iOS</p>
              </div>

              {/* QR Canvas */}
              {qrDataUrl ? (
                <div className="p-4 bg-white rounded-2xl shadow-md border border-slate-200 transition-all duration-300">
                  <img
                    src={qrDataUrl}
                    alt="Mã QR NETWORD"
                    className={`mx-auto rounded-xl transition-all ${
                      qrSize === 'projector' ? 'w-80 h-80 sm:w-96 sm:h-96' : 'w-56 h-56'
                    }`}
                  />
                  <div className="mt-2 text-[11px] font-mono font-bold text-indigo-900">
                    NETWORD • THPT LONG HIỆP
                  </div>
                </div>
              ) : (
                <div className="w-56 h-56 rounded-2xl bg-slate-200 animate-pulse flex items-center justify-center text-xs text-slate-500">
                  Đang khởi tạo mã QR...
                </div>
              )}

              {/* Controls */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <button
                  onClick={() => setQrSize(qrSize === 'normal' ? 'projector' : 'normal')}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer"
                >
                  {qrSize === 'normal' ? '🔍 Phóng to (Dành cho Máy chiếu)' : 'Thu nhỏ mặc định'}
                </button>

                <button
                  onClick={handleDownloadQR}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải ảnh mã QR (.png)</span>
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* SECTION 3: ADD TO HOME SCREEN & PWA GUIDE */}
      {activeSection === 'install_pwa' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Quick Action Install Card */}
          <Card className="p-6 border-2 border-indigo-200 dark:border-indigo-800/80 bg-gradient-to-r from-indigo-50/50 via-white to-purple-50/50 dark:from-indigo-950/20 dark:via-slate-900 dark:to-purple-950/20 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-[11px] font-bold">
                  <Smartphone className="w-3.5 h-3.5" />
                  Tiện ích Progressive Web App (PWA)
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-slate-100">
                  Cài đặt NETWORD thành ứng dụng trên thiết bị
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Mở toàn màn hình không có thanh địa chỉ, tải trang tức thì và hoạt động mượt mà cả khi mạng yếu.
                </p>
              </div>

              {isInstalled ? (
                <div className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 text-xs font-bold flex items-center gap-2 shrink-0">
                  <Check className="w-4 h-4" />
                  <span>Đã cài đặt trên thiết bị</span>
                </div>
              ) : isInstallable ? (
                <button
                  onClick={() => install()}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-xs sm:text-sm shadow-md transition active:scale-95 cursor-pointer shrink-0"
                >
                  Cài đặt ứng dụng ngay
                </button>
              ) : (
                <span className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 px-3.5 py-2 rounded-xl">
                  Làm theo hướng dẫn dưới đây
                </span>
              )}
            </div>
          </Card>

          {/* Platform Guides */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Android Guide */}
            <Card className="p-5 space-y-3 border-t-4 border-t-emerald-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold">
                  <Smartphone className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  Trên Điện thoại Android
                </h3>
              </div>
              <p className="text-[11px] text-slate-500">(Google Chrome, Cốc Cốc, Samsung Internet)</p>

              <ol className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5 list-decimal pl-4">
                <li>Mở liên kết NETWORD trên trình duyệt Chrome hoặc Cốc Cốc.</li>
                <li>Nhấn vào biểu tượng <strong>dấu 3 chấm (⋮)</strong> ở góc trên bên phải màn hình.</li>
                <li>Chọn <strong>"Cài đặt ứng dụng"</strong> hoặc <strong>"Thêm vào Màn hình chính"</strong> (Add to Home screen).</li>
                <li>Bấm <strong>"Cài đặt"</strong> để xác nhận. Biểu tượng NETWORD sẽ xuất hiện ngoài màn hình chính.</li>
              </ol>
            </Card>

            {/* iOS Safari Guide */}
            <Card className="p-5 space-y-3 border-t-4 border-t-blue-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold">
                  <Apple className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  Trên iPhone / iPad (iOS)
                </h3>
              </div>
              <p className="text-[11px] text-slate-500">(Bắt buộc mở bằng trình duyệt Safari)</p>

              <ol className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5 list-decimal pl-4">
                <li>Mở liên kết NETWORD bằng trình duyệt <strong>Safari</strong> trên iPhone.</li>
                <li>Bấm vào nút <strong>Chia sẻ (Share)</strong> <span className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[10px]">⎋</span> ở thanh công cụ dưới cùng.</li>
                <li>Cuộn xuống danh sách tùy chọn và chọn <strong>"Thêm vào MH chính"</strong> (Add to Home Screen).</li>
                <li>Bấm <strong>"Thêm" (Add)</strong> ở góc trên bên phải để hoàn tất.</li>
              </ol>
            </Card>

            {/* PC / Laptop Guide */}
            <Card className="p-5 space-y-3 border-t-4 border-t-purple-500">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 flex items-center justify-center font-bold">
                  <Laptop className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                  Trên Máy tính / Laptop
                </h3>
              </div>
              <p className="text-[11px] text-slate-500">(Google Chrome, Microsoft Edge, Brave)</p>

              <ol className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5 list-decimal pl-4">
                <li>Truy cập đường dẫn NETWORD trên Chrome hoặc Edge.</li>
                <li>Nhìn vào thanh địa chỉ (URL bar), nhấp vào biểu tượng <strong>Cài đặt (+)</strong> hoặc biểu tượng máy tính có mũi tên tải xuống.</li>
                <li>Bấm <strong>"Cài đặt" (Install)</strong> trong hộp thoại thông báo.</li>
                <li>Ứng dụng sẽ chạy trong cửa sổ riêng biệt không thanh công cụ, ghim được vào Taskbar Windows hoặc Dock MacOS.</li>
              </ol>
            </Card>
          </div>
        </div>
      )}

      {/* SECTION 4: STUDENT USER GUIDE */}
      {activeSection === 'student_guide' && (
        <Card className="p-6 space-y-5 animate-in fade-in">
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-600" />
              Cẩm nang Hướng dẫn Học sinh Tham gia Chuyên đề 2
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Quy trình học tập, tra cứu thuật ngữ mạng, làm bài thử thách tình huống và đóng góp mục từ khảo sát thực tế.
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">1</span>
                Tra cứu từ điển và Nhận diện Chuẩn mực Học đường
              </h3>
              <p>
                Nhập từ khóa tiếng lóng, từ mượn hoặc từ viết tắt vào thanh tìm kiếm. Hệ thống hỗ trợ tìm không dấu, có dấu và từ đồng âm. Chú ý theo dõi <strong>Huy hiệu Chuẩn mực học đường</strong>:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-semibold text-[11px]">
                <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ✅ Phù hợp giao tiếp vui bè bạn ngoài giờ
                </div>
                <div className="p-2 rounded-lg bg-blue-50 text-blue-800 border border-blue-200">
                  📱 Chỉ dùng trên MXH thân mật
                </div>
                <div className="p-2 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
                  ⚠️ Dễ gây hiểu lầm / Cần cẩn trọng
                </div>
                <div className="p-2 rounded-lg bg-rose-50 text-rose-800 border border-rose-200">
                  ⛔ Tuyệt đối không dùng trong bài thi
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs">2</span>
                Sử dụng Công cụ "Diễn đạt Phù hợp"
              </h3>
              <p>
                Nếu các em quen dùng một câu có nhiều tiếng lóng trên mạng, hãy mở phân hệ <strong>Diễn đạt phù hợp</strong>, dán câu gốc và chọn ngữ cảnh giao tiếp (ví dụ: <em>Trò chuyện với thầy cô, Thông báo lớp, Viết bài học tập</em>). Hệ thống sẽ gợi ý cách diễn đạt chuẩn mực tiếng Việt mà vẫn giữ trọn vẹn ý nghĩa của câu.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">3</span>
                Làm Bài Thử Thách & Tích Lũy Huy Hiệu Học Tập
              </h3>
              <p>
                Mỗi tuần, Thầy Tuấn mở các bộ thử thách tình huống: ghép từ với nghĩa, thẩm định tin tức và nhận diện nguy cơ bạo lực ngôn từ. Đạt điểm cao sẽ giúp mở khóa các huy hiệu: <em>Sứ giả giao tiếp văn minh, Chuyên gia thẩm định tin cậy, Bậc thầy thích ứng ngữ cảnh</em>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs">4</span>
                Khảo Sát Thực Tế & Gửi Đề Xuất Từ Mới
              </h3>
              <p>
                Khi phát hiện một từ ngữ mạng mới mẻ trong đời sống, học sinh vào tab <strong>Đề xuất từ</strong>, điền giải nghĩa, nguồn gốc và ví dụ ngữ cảnh cụ thể. Ban Biên tập học sinh và Thầy Tuấn sẽ thẩm định và đưa vào từ điển chính thức của trường.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* SECTION 5: TEACHER ADMIN GUIDE */}
      {activeSection === 'teacher_guide' && (
        <Card className="p-6 space-y-5 animate-in fade-in">
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              Cẩm nang Dành cho Thầy Trầm Thanh Tuấn & Giáo viên Quản trị
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Quy trình tổ chức dữ liệu, quản lý tài khoản trường cấp, khôi phục mật khẩu và giám sát báo cáo sư phạm Chuyên đề 2.
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                1. Cấp phát tài khoản học đường theo danh sách lớp
              </h3>
              <p>
                Vào tab <strong>Quản trị &gt; Tài khoản trường cấp</strong>. Thầy có thể bấm nút <strong>"Cấp cả lớp"</strong>, chọn lớp (11A1, 11A2, 11A3, 11A4) và dán danh sách họ tên học sinh. Hệ thống tự động tạo mã học sinh (`LH2026-11A1-001`), email trường cấp và mật khẩu khởi tạo an toàn. Sau đó bấm nút <strong>"Xuất phiếu in"</strong> để in phiếu cấp phát cho học sinh.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                2. Quy trình khôi phục mật khẩu học sinh (Không qua email bên ngoài)
              </h3>
              <p>
                Khi học sinh quên mật khẩu trường cấp, học sinh báo với Thầy Tuấn tại trường. Thầy chỉ cần tìm mã học sinh trong danh mục tài khoản và bấm <strong>"Cấp lại MK"</strong>. Hệ thống sinh mật khẩu mới ngẫu nhiên ngay lập tức để cấp lại cho học sinh.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                3. Thẩm định và Phê duyệt đề xuất từ mới
              </h3>
              <p>
                Tại tab <strong>Biên tập</strong>, giáo viên và Ban Biên tập xem xét từng đề xuất của học sinh: kiểm tra tính chính xác của nghĩa, ngữ cảnh xuất hiện, đánh giá mức độ chuẩn mực và phản hồi lời khuyên sư phạm trước khi phê duyệt đưa vào kho từ điển chung.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                4. Theo dõi thống kê thực tế và Xuất báo cáo nộp Tổ chuyên môn
              </h3>
              <p>
                Tab <strong>Bảng điều khiển</strong> cung cấp số liệu thực tế về lượt tra cứu, tỷ lệ hoàn thành thử thách theo từng lớp. Thầy có thể chọn bộ lọc (7 ngày, 30 ngày, lớp 11A1-11A4) và bấm <strong>"Xuất file CSV"</strong> hoặc <strong>"Xuất Báo cáo Sư phạm (.txt)"</strong> để nộp Tổ chuyên môn Ngữ văn và Ban Giám hiệu trường THCS & THPT Long Hiệp.
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* SECTION 6: PRIVACY POLICY & TERMS OF SERVICE */}
      {activeSection === 'privacy_terms' && (
        <Card className="p-6 space-y-5 animate-in fade-in">
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Lock className="w-5 h-5 text-rose-600" />
              Chính sách Quyền Riêng tư & Điều khoản Sử dụng Học đường
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Cam kết bảo vệ dữ liệu học sinh THPT và quy định chuẩn mực ứng xử trên không gian số NETWORD.
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 space-y-2">
              <h3 className="font-bold text-sm text-rose-900 dark:text-rose-200">
                I. CHÍNH SÁCH QUYỀN RIÊNG TƯ DÀNH CHO HỌC SINH (PRIVACY POLICY)
              </h3>
              <ul className="space-y-1.5 list-disc pl-4">
                <li><strong>Không công khai hồ sơ học sinh:</strong> Toàn bộ thông tin tài khoản, lớp học, điểm số thử thách cá nhân của học sinh mặc định được bảo mật riêng tư (`isProfilePublic: false`). Không ai ngoài chính học sinh và giáo viên quản trị có thể xem được.</li>
                <li><strong>Ẩn danh hóa số liệu thống kê:</strong> Các báo cáo thống kê chung cho nhà trường chỉ sử dụng số liệu gộp của tập thể lớp, tuyệt đối không đính kèm mã học sinh, họ tên hay email cá nhân.</li>
                <li><strong>Quyền chỉnh sửa và xóa dữ liệu cá nhân (Right to be Forgotten):</strong> Học sinh có quyền gửi yêu cầu đính chính thông tin hoặc yêu cầu xóa toàn bộ lịch sử học tập của mình thông qua nút thao tác trên trang Cá nhân.</li>
                <li><strong>Không thương mại hóa dữ liệu:</strong> Ứng dụng NETWORD phục vụ 100% mục tiêu giáo dục công lập, không tích hợp quảng cáo và không chia sẻ dữ liệu với bất kỳ tổ chức thứ ba nào.</li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                II. ĐIỀU KHOẢN SỬ DỤNG VĂN MINH (TERMS OF SERVICE)
              </h3>
              <ul className="space-y-1.5 list-disc pl-4">
                <li><strong>Tôn trọng sự trong sáng của Tiếng Việt:</strong> Sử dụng từ điển để học tập và nghiên cứu văn hóa; không dùng tiếng lóng để bôi nhọ, chế giễu hoặc làm sai lệch ngôn ngữ tiếng Việt trong các tình huống trang trọng.</li>
                <li><strong>Nghiêm cấm bạo lực ngôn từ (Zero-Tolerance for Cyberbullying):</strong> Tuyệt đối không gửi các đề xuất hoặc bình luận mang tính xúc phạm danh dự, miệt thị ngoại hình, phân biệt giới tính hoặc vùng miền. Mọi nội dung vi phạm sẽ bị hủy bỏ và xử lý kỷ luật học đường.</li>
                <li><strong>Ý thức trách nhiệm cộng đồng:</strong> Học sinh cam kết khảo sát trung thực, dẫn chứng khách quan khi đề xuất mục từ mới phục vụ Chuyên đề 2.</li>
              </ul>
            </div>
          </div>
        </Card>
      )}

      {/* SECTION 7: BACKUP & LIFECYCLE MAINTENANCE PLAN */}
      {activeSection === 'backup_plan' && (
        <Card className="p-6 space-y-5 animate-in fade-in">
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-teal-600" />
              Kế hoạch Sao lưu Dữ liệu & Quy trình Cập nhật Ứng dụng
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Quy chuẩn bảo toàn dữ liệu Chuyên đề 2 và lộ trình nâng cấp hệ thống qua các năm học.
            </p>
          </div>

          <div className="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 space-y-2">
                <h3 className="font-bold text-sm text-teal-900 dark:text-teal-200 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-teal-600" />
                  1. Lịch Sao lưu Dữ liệu Định kỳ
                </h3>
                <p>
                  • <strong>Hàng tuần:</strong> Thầy Tuấn vào tab Quản trị &gt; Xuất báo cáo để tải bản sao lưu từ điển `netword_dictionary_backup.json` và lưu trữ trên ổ cứng nhà trường.
                </p>
                <p>
                  • <strong>Cuối mỗi học kỳ:</strong> Trích xuất bảng kết quả thử thách của học sinh và cơ sở dữ liệu quan hệ SQL 13 bảng để lưu hồ sơ minh chứng chuyên môn.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-2">
                <h3 className="font-bold text-sm text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-indigo-600" />
                  2. Lộ trình Cập nhật Ngữ liệu Chuyên đề 2
                </h3>
                <p>
                  • <strong>Học kỳ I:</strong> Khởi tạo kho từ điển nền tảng và khảo sát các xu hướng từ ngữ mạng đầu năm học.
                </p>
                <p>
                  • <strong>Học kỳ II:</strong> Bổ sung các bài tập tình huống chuyên sâu, hoàn thiện kho ngữ liệu thực địa của học sinh Long Hiệp.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                3. Quy chuẩn Kiểm thử & Phát hành Bản cập nhật mới
              </h3>
              <p>
                Trước mỗi lần phát hành bản cập nhật mới, quản trị viên bắt buộc phải chạy <strong>Bộ kiểm toán tự động 12 tiêu chí tiền triển khai</strong> để bảo đảm:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-400">
                <li>Không làm xáo trộn các mục từ đã được phê duyệt.</li>
                <li>Không rò rỉ Service Role Key hoặc mã học sinh ra ngoài bundle client.</li>
                <li>Hệ thống RLS và chống gian lận điểm đạt 100% PASS trước khi đưa vào giảng dạy.</li>
              </ul>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
