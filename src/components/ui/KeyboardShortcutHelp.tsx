import React, { useState, useEffect } from 'react';
import { Keyboard, X } from 'lucide-react';

export const KeyboardShortcutHelp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle help with '?' (Shift + /)
      if (
        e.key === '?' &&
        !(
          document.activeElement instanceof HTMLInputElement ||
          document.activeElement instanceof HTMLTextAreaElement
        )
      ) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const shortcuts = [
    { key: '/', desc: 'Tập trung vào thanh tìm kiếm từ' },
    { key: 'Esc', desc: 'Xóa tìm kiếm / Đóng cửa sổ' },
    { key: '?', desc: 'Bật / Tắt bảng phím tắt này' },
    { key: '1 - 5', desc: 'Chuyển tab nhanh (Trang chủ, Từ điển...)' },
    { key: 'A - D', desc: 'Chọn nhanh phương án trong Thử thách' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        title="Phím tắt bàn phím (?)"
        className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 text-xs font-semibold transition cursor-pointer"
      >
        <Keyboard className="w-3.5 h-3.5 text-indigo-500" />
        <span className="text-[11px]">Phím tắt</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Phím tắt ứng dụng NETWORD
                </h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 text-xs">
              {shortcuts.map((sc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800"
                >
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{sc.desc}</span>
                  <kbd className="px-2 py-0.5 font-mono font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md text-indigo-600 dark:text-indigo-400 text-[11px]">
                    {sc.key}
                  </kbd>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-400 italic text-center">
              Tối ưu cho học sinh THPT học tập và thao tác nhanh trên máy tính và tablet.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
