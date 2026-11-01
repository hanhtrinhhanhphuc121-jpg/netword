import React, { useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onSubmit?: (e: React.FormEvent) => void;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
  size?: 'default' | 'large';
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'Tra cứu từ ngữ, phiên âm, hoặc nghĩa...',
  autoFocus = false,
  className = '',
  size = 'default',
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Global hotkey: press '/' to focus search input unless already typing in another input/textarea
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement !== inputRef.current &&
        !(
          document.activeElement instanceof HTMLInputElement ||
          document.activeElement instanceof HTMLTextAreaElement
        )
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        if (value) {
          onChange('');
        } else {
          inputRef.current?.blur();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [value, onChange]);

  const isLarge = size === 'large';

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(e);
      }}
      className={`relative flex items-center w-full transition-all group ${className}`}
    >
      <div className="absolute left-4 text-indigo-500 dark:text-indigo-400 pointer-events-none transition-transform group-focus-within:scale-110">
        <Search className={isLarge ? 'w-5 h-5' : 'w-4 h-4'} />
      </div>

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={`w-full rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 font-medium transition-all border border-indigo-200 dark:border-indigo-900/60 shadow-lg shadow-indigo-100/50 dark:shadow-none focus:outline-none focus:ring-4 focus:ring-indigo-500/20 dark:focus:ring-indigo-500/30 focus:border-indigo-600 dark:focus:border-indigo-500 ${
          isLarge
            ? 'pl-12 pr-28 py-4 text-base'
            : 'pl-11 pr-24 py-3 text-sm'
        }`}
      />

      <div className="absolute right-3 flex items-center gap-1.5">
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange('');
              inputRef.current?.focus();
            }}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            title="Xóa tìm kiếm (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700">
          /
        </kbd>

        {onSubmit && (
          <button
            type="submit"
            className="px-3.5 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer active:scale-95"
          >
            Tra từ
          </button>
        )}
      </div>
    </form>
  );
};
