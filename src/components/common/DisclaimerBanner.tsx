import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      aria-label="Lưu ý sư phạm Ngữ văn 11"
      className="bg-amber-50/90 dark:bg-amber-950/50 border-b border-amber-200/80 dark:border-amber-900/60 text-amber-900 dark:text-amber-200 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <span className="font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                Lưu ý sư phạm:
              </span>{' '}
              <span>
                Dữ liệu trong ứng dụng phục vụ nghiên cứu học tập{' '}
                <strong>Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại (Ngữ văn 11)</strong>.
              </span>
              {!collapsed && (
                <span className="block sm:inline mt-1 sm:mt-0 sm:ml-1 text-amber-800/90 dark:text-amber-300/90">
                  Đây <strong>KHÔNG PHẢI</strong> là dữ liệu quy chuẩn của Tiếng Việt toàn dân. Học sinh cần giữ gìn sự trong sáng của Tiếng Việt, sử dụng đúng nơi, đúng lúc và tuyệt đối không tùy tiện đưa tiếng lóng vào bài kiểm tra, thi cử hay văn bản trang trọng!
                </span>
              )}
            </div>
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 p-1 shrink-0 rounded hover:bg-amber-100/60 dark:hover:bg-amber-900/40 transition cursor-pointer text-xs flex items-center gap-1 font-medium"
            title={collapsed ? 'Mở rộng lưu ý' : 'Thu gọn'}
          >
            <span className="hidden sm:inline">{collapsed ? 'Chi tiết' : 'Thu gọn'}</span>
            {collapsed ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </aside>
  );
};
