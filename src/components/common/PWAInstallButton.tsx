import React, { useState } from 'react';
import { usePWAInstall } from '../../hooks/usePWAInstall';
import { Download, Smartphone, X, Check } from 'lucide-react';

export const PWAInstallButton: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installedNotice, setInstalledNotice] = useState(false);

  if (isInstalled) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
        <Check className="w-3.5 h-3.5" />
        Đã cài đặt PWA
      </span>
    );
  }

  const handleInstallClick = async () => {
    const success = await install();
    if (success) {
      setInstalledNotice(true);
      setTimeout(() => setInstalledNotice(false), 4000);
    }
  };

  return (
    <>
      {isInstallable && (
        <button
          onClick={handleInstallClick}
          className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium shadow-md shadow-indigo-200 hover:from-indigo-700 hover:to-blue-700 transition active:scale-95 cursor-pointer ${
            compact ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
          }`}
          title="Cài đặt NETWORD vào màn hình chính"
        >
          <Download className="w-4 h-4 animate-bounce" />
          <span>Cài ứng dụng</span>
        </button>
      )}

      {isIOS && !isInstallable && (
        <button
          onClick={() => setShowIOSGuide(true)}
          className={`inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/80 text-indigo-700 font-medium hover:bg-indigo-100 transition cursor-pointer ${
            compact ? 'px-3 py-1.5 text-xs' : 'px-3.5 py-2 text-xs'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Cài trên iPhone/iPad</span>
        </button>
      )}

      {/* Fallback button if running in standard desktop browser without prompt event */}
      {!isInstallable && !isIOS && (
        <button
          onClick={() => {
            alert('Để cài đặt NETWORD thành ứng dụng (PWA): Nhấp vào biểu tượng Cài đặt (Install) trên thanh địa chỉ của trình duyệt Chrome/Edge!');
          }}
          className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-xs font-medium hover:bg-slate-50 transition cursor-pointer"
        >
          <Download className="w-3.5 h-3.5 text-indigo-600" />
          <span>Cài đặt PWA</span>
        </button>
      )}

      {/* iOS Safari Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                  NW
                </div>
                <h3 className="text-base font-bold text-slate-900">Cài đặt trên iOS (iPhone/iPad)</h3>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <p>
                  Nhấn vào nút <strong>Chia sẻ (Share)</strong> <span className="inline-block px-1.5 py-0.5 bg-slate-100 rounded text-xs">⎋</span> ở thanh công cụ dưới cùng của trình duyệt Safari.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <p>
                  Cuộn xuống và chọn mục <strong>"Thêm vào Màn hình chính" (Add to Home Screen)</strong>.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <p>
                  Nhấn <strong>"Thêm" (Add)</strong> ở góc trên bên phải. Ứng dụng NETWORD sẽ xuất hiện như một ứng dụng độc lập trên điện thoại của em!
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-6 w-full rounded-xl bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 hover:bg-indigo-700 transition"
            >
              Đã hiểu
            </button>
          </div>
        </div>
      )}
    </>
  );
};
