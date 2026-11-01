import React from 'react';
import { useOnlineStatus } from '../../hooks/usePWAInstall';
import { WifiOff } from 'lucide-react';

export const OfflineBanner: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-16 md:bottom-6 left-4 right-4 md:left-auto md:right-6 z-50 flex items-center gap-2.5 rounded-xl bg-amber-600 px-4 py-2.5 text-xs md:text-sm font-medium text-white shadow-xl animate-in slide-in-from-bottom duration-300 max-w-md">
      <WifiOff className="w-4 h-4 shrink-0 animate-pulse text-amber-200" />
      <span>
        <strong>Chế độ ngoại tuyến:</strong> Đang sử dụng dữ liệu từ điển đã lưu trong bộ nhớ máy. Em vẫn có thể tra cứu bình thường!
      </span>
    </div>
  );
};
