/**
 * NETWORD - Danh sách Học sinh Lớp 11 (Chuyên đề 2 Ngữ văn 11)
 * Trường THCS và THPT Long Hiệp - Huyện Trà Cú, Tỉnh Trà Vinh
 * Giáo viên phụ trách: Thầy Trầm Thanh Tuấn
 */

import React, { useState, useMemo } from 'react';
import {
  STUDENTS_LIST,
  ACTIVE_STUDENTS,
  TRANSFERRED_STUDENTS,
  EDITORS_STUDENTS,
  CLASS_INFO,
  StudentRecord,
} from '../../data/studentsList';
import { useAuth } from '../../services/authContext';
import { ActiveTab } from '../../types';
import {
  Users,
  Search,
  CheckCircle2,
  AlertCircle,
  GraduationCap,
  Sparkles,
  Download,
  Printer,
  ShieldCheck,
  Award,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Filter,
  UserCheck,
  Eye,
  FileSpreadsheet,
  Check,
} from 'lucide-react';

interface StudentsViewProps {
  onNavigate: (tab: ActiveTab, wordId?: string) => void;
}

type FilterStatus = 'all' | 'active' | 'transferred' | 'editor';
type SortOrder = 'stt_asc' | 'name_asc' | 'points_desc';

export const StudentsView: React.FC<StudentsViewProps> = ({ onNavigate }) => {
  const { currentUser, loginAsStudent } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
  const [sortOrder, setSortOrder] = useState<SortOrder>('stt_asc');
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null);
  const [showOriginalDoc, setShowOriginalDoc] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  // Filtered và Sorted student list
  const filteredStudents = useMemo(() => {
    let result = [...STUDENTS_LIST];

    // Filter by status/role
    if (filterStatus === 'active') {
      result = result.filter((s) => s.status === 'active');
    } else if (filterStatus === 'transferred') {
      result = result.filter((s) => s.status === 'transferred');
    } else if (filterStatus === 'editor') {
      result = result.filter((s) => s.role === 'editor');
    }

    // Filter by search query
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase().trim();
      result = result.filter(
        (s) =>
          s.fullName.toLowerCase().includes(q) ||
          s.firstName.toLowerCase().includes(q) ||
          s.lastName.toLowerCase().includes(q) ||
          s.studentCode.toLowerCase().includes(q) ||
          s.email.toLowerCase().includes(q)
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortOrder === 'stt_asc') return a.stt - b.stt;
      if (sortOrder === 'name_asc') return a.firstName.localeCompare(b.firstName, 'vi');
      if (sortOrder === 'points_desc') return b.points - a.points;
      return 0;
    });

    return result;
  }, [searchTerm, filterStatus, sortOrder]);

  const handleSelectStudentProfile = (student: StudentRecord) => {
    if (student.status === 'transferred') {
      setActionNotice(
        `Học sinh ${student.fullName} đã chuyển trường, hồ sơ ở trạng thái lưu trữ bảo lưu.`
      );
      setTimeout(() => setActionNotice(null), 3500);
      return;
    }
    const success = loginAsStudent(student.id);
    if (success) {
      setActionNotice(`Đã chuyển phiên hoạt động sang học sinh: ${student.fullName} (${student.studentCode})`);
      setTimeout(() => setActionNotice(null), 3000);
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const exportCSV = () => {
    const headers = ['STT', 'Mã Học Sinh', 'Họ và chữ đệm', 'Tên', 'Họ và tên', 'Trạng thái', 'Vai trò', 'Lớp', 'Điểm tích lũy', 'Email trường'];
    const rows = STUDENTS_LIST.map((s) => [
      s.stt,
      s.studentCode,
      `"${s.lastName}"`,
      `"${s.firstName}"`,
      `"${s.fullName}"`,
      s.status === 'active' ? 'Đang học' : 'Đã chuyển trường',
      s.role === 'editor' ? 'Ban Biên tập' : 'Học sinh',
      `"${s.className}"`,
      s.points,
      s.email,
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Danh_sach_hoc_sinh_Lop_11_Long_Hiep_Chuyen_de_2.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 py-6 pb-20">
      {/* Toast notice */}
      {actionNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-indigo-900 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-indigo-700 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-xs sm:text-sm font-semibold">{actionNotice}</span>
        </div>
      )}

      {/* TOP HERO BANNER */}
      <div className="relative rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white p-6 sm:p-10 overflow-hidden border border-indigo-900/40 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Sổ bộ Học sinh Lớp 11
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                Chuyên đề 2: Ngôn ngữ xã hội hiện đại
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              Danh sách Học sinh Lớp 11
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Trường THCS và THPT Long Hiệp · Huyện Trà Cú, Tỉnh Trà Vinh.
              <br />
              <span className="text-indigo-300 font-medium">
                Giáo viên hướng dẫn Chuyên đề: Thầy Trầm Thanh Tuấn
              </span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              onClick={() => setShowOriginalDoc(!showOriginalDoc)}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer border border-white/10 backdrop-blur-xs"
            >
              <Eye className="w-4 h-4 text-indigo-300" />
              <span>{showOriginalDoc ? 'Ẩn ảnh gốc sổ bộ' : 'Xem ảnh gốc sổ bộ'}</span>
            </button>

            <button
              onClick={exportCSV}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Xuất Excel / CSV</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition cursor-pointer border border-slate-700"
              title="In danh sách lớp"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* METRICS STRIP */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-slate-400 font-medium">Tổng số danh sách</div>
            <div className="text-2xl font-black text-white mt-1">42</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Học sinh theo sổ theo dõi</div>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-emerald-400 font-medium">Đang học tập</div>
            <div className="text-2xl font-black text-emerald-300 mt-1">38</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Tham gia Chuyên đề 2</div>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-amber-400 font-medium">Đã chuyển trường</div>
            <div className="text-2xl font-black text-amber-300 mt-1">4</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Bảo lưu hồ sơ học tập</div>
          </div>

          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs text-purple-400 font-medium">Ban Biên tập lớp</div>
            <div className="text-2xl font-black text-purple-300 mt-1">3</div>
            <div className="text-[11px] text-slate-400 mt-0.5">Thẩm định đề xuất từ ngữ</div>
          </div>
        </div>
      </div>

      {/* ORIGINAL ROSTER DOCUMENT VIEWER (COLLAPSIBLE) */}
      {showOriginalDoc && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                Hình ảnh đối chiếu: Sổ theo dõi học sinh Lớp 11 (Bản gốc)
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              Trường THCS và THPT Long Hiệp · 42 Học sinh
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="w-full md:w-64 max-h-96 overflow-y-auto rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shrink-0 shadow-inner">
              <img
                src="/assets/aistudio/image_295edbcc.png"
                alt="Danh sách học sinh bản gốc"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p className="font-semibold text-slate-800 dark:text-slate-200">
                Ghi chú đối soát của GV Trầm Thanh Tuấn:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                <li>
                  Hệ thống NETWORD đã chuẩn hóa đầy đủ 42 học sinh theo hai cột{' '}
                  <strong>[Họ và chữ đệm]</strong> và <strong>[Tên]</strong>.
                </li>
                <li>
                  Bốn học sinh có dấu gạch ngang mờ trong danh sách sổ bộ gồm:{' '}
                  <span className="text-rose-500 font-semibold line-through">
                    Phan Ngọc Duyên (STT 8)
                  </span>
                  ,{' '}
                  <span className="text-rose-500 font-semibold line-through">
                    Huỳnh Ngọc Như (STT 26)
                  </span>
                  ,{' '}
                  <span className="text-rose-500 font-semibold line-through">
                    Kiên Ngọc Thành Phú (STT 29)
                  </span>
                  , và{' '}
                  <span className="text-rose-500 font-semibold line-through">
                    Châu Thị Minh Thư (STT 35)
                  </span>{' '}
                  được đánh dấu trạng thái <strong>Đã chuyển trường</strong>.
                </li>
                <li>
                  Học sinh có thể bấm <strong>"Chọn học sinh này"</strong> để làm bài thử thách trắc nghiệm, lưu từ điển cá nhân và gửi đề xuất từ mới dưới đúng danh tính của mình.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* FILTER và SEARCH BAR */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tên học sinh (ví dụ: Wane, Dinh, Bích, LH-11-001)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition shadow-xs"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Xóa
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              filterStatus === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            Tất cả ({STUDENTS_LIST.length})
          </button>

          <button
            onClick={() => setFilterStatus('active')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              filterStatus === 'active'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            Đang học ({ACTIVE_STUDENTS.length})
          </button>

          <button
            onClick={() => setFilterStatus('transferred')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              filterStatus === 'transferred'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            Đã chuyển ({TRANSFERRED_STUDENTS.length})
          </button>

          <button
            onClick={() => setFilterStatus('editor')}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${
              filterStatus === 'editor'
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
            }`}
          >
            Ban Biên tập ({EDITORS_STUDENTS.length})
          </button>

          {/* Sort dropdown */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 outline-none cursor-pointer"
          >
            <option value="stt_asc">STT (1 → 42)</option>
            <option value="name_asc">Tên (A → Z)</option>
            <option value="points_desc">Điểm rèn luyện cao nhất</option>
          </select>
        </div>
      </div>

      {/* STUDENT TABLE / ROSTER */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                <th className="py-3.5 px-4 text-center w-14">STT</th>
                <th className="py-3.5 px-4 w-28">Mã HS</th>
                <th className="py-3.5 px-4">Họ và chữ đệm</th>
                <th className="py-3.5 px-4 font-black text-slate-800 dark:text-slate-200">Tên</th>
                <th className="py-3.5 px-4">Trạng thái</th>
                <th className="py-3.5 px-4">Vai trò</th>
                <th className="py-3.5 px-4 text-center">Điểm rèn luyện</th>
                <th className="py-3.5 px-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-slate-400">
                    Không tìm thấy học sinh phù hợp với từ khóa "{searchTerm}".
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => {
                  const isCurrentActive = currentUser.name === student.fullName;
                  const isTransferred = student.status === 'transferred';

                  return (
                    <tr
                      key={student.id}
                      className={`transition-colors ${
                        isCurrentActive
                          ? 'bg-indigo-50/70 dark:bg-indigo-950/40 font-medium'
                          : isTransferred
                          ? 'bg-slate-50/50 dark:bg-slate-950/40 opacity-60'
                          : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/40'
                      }`}
                    >
                      {/* STT */}
                      <td className="py-3 px-4 text-center font-bold text-slate-400 dark:text-slate-500">
                        {student.stt}
                      </td>

                      {/* Mã HS */}
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-500 dark:text-slate-400 whitespace-nowrap">
                        <button
                          onClick={() => handleCopyCode(student.studentCode)}
                          className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 cursor-pointer"
                          title="Sao chép mã học sinh"
                        >
                          <span>{student.studentCode}</span>
                          {copiedCode === student.studentCode ? (
                            <Check className="w-3 h-3 text-emerald-500" />
                          ) : null}
                        </button>
                      </td>

                      {/* Họ và chữ đệm */}
                      <td
                        className={`py-3 px-4 text-slate-700 dark:text-slate-300 ${
                          isTransferred ? 'line-through text-slate-400' : ''
                        }`}
                      >
                        {student.lastName}
                      </td>

                      {/* Tên */}
                      <td
                        className={`py-3 px-4 font-bold text-slate-900 dark:text-slate-100 ${
                          isTransferred ? 'line-through text-slate-400' : ''
                        }`}
                      >
                        {student.firstName}
                      </td>

                      {/* Trạng thái */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        {isTransferred ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                            Chuyển trường
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-900">
                            <CheckCircle2 className="w-3 h-3" />
                            Đang học
                          </span>
                        )}
                      </td>

                      {/* Vai trò */}
                      <td className="py-3 px-4 whitespace-nowrap">
                        {student.role === 'editor' ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-200 dark:border-purple-800">
                            <ShieldCheck className="w-3 h-3 text-purple-600" />
                            Ban Biên tập
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-600 dark:text-slate-400">
                            Học sinh Lớp 11
                          </span>
                        )}
                      </td>

                      {/* Điểm rèn luyện */}
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        {isTransferred ? (
                          <span className="text-slate-400 text-xs">—</span>
                        ) : (
                          <span className="font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-full text-xs">
                            {student.points} đ
                          </span>
                        )}
                      </td>

                      {/* Thao tác */}
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => setSelectedStudent(student)}
                            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                            title="Xem chi tiết học sinh"
                          >
                            <Eye className="w-4 h-4" />
                          </button>

                          {!isTransferred && (
                            <button
                              onClick={() => handleSelectStudentProfile(student)}
                              className={`px-2.5 py-1 rounded-xl text-xs font-bold transition flex items-center gap-1 cursor-pointer ${
                                isCurrentActive
                                  ? 'bg-emerald-600 text-white cursor-default'
                                  : 'bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white border border-indigo-200 dark:border-indigo-800'
                              }`}
                              title="Chuyển phiên làm việc dưới danh nghĩa học sinh này"
                            >
                              {isCurrentActive ? (
                                <>
                                  <UserCheck className="w-3.5 h-3.5" />
                                  <span>Đang chọn</span>
                                </>
                              ) : (
                                <>
                                  <span>Chọn HS</span>
                                  <ArrowRight className="w-3 h-3" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            Hiển thị <strong>{filteredStudents.length}</strong> / {STUDENTS_LIST.length} học sinh
          </div>
          <div>
            Hệ thống phân quyền chuẩn mực · Trường THCS và THPT Long Hiệp
          </div>
        </div>
      </div>

      {/* STUDENT DETAIL MODAL */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-transparent flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black text-lg shadow-md">
                  {selectedStudent.firstName.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100">
                      {selectedStudent.fullName}
                    </h3>
                    {selectedStudent.role === 'editor' && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                        Ban Biên tập
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    STT {selectedStudent.stt} · {selectedStudent.studentCode} · {CLASS_INFO.name}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedStudent(null)}
                className="p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5 text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                  <span className="text-[11px] text-slate-400 block font-medium">Trường học</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5 block">
                    {CLASS_INFO.school}
                  </span>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
                  <span className="text-[11px] text-slate-400 block font-medium">Chuyên đề học tập</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 mt-0.5 block">
                    Chuyên đề 2 (Ngữ văn 11)
                  </span>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-1.5">
                <span className="text-[11px] text-slate-400 block font-medium">Email trường học</span>
                <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-semibold select-all">
                  {selectedStudent.email}
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Tài khoản học đường chính thống do Thầy Trầm Thanh Tuấn quản trị.
                </p>
              </div>

              {selectedStudent.status === 'transferred' ? (
                <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <strong>Học sinh đã chuyển trường:</strong>
                    <p className="text-[11px] text-amber-800 dark:text-amber-300">
                      Hồ sơ học tập được bảo lưu trong danh sách theo dõi chuyên đề của nhà trường.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/50 border border-indigo-200/80 dark:border-indigo-900">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100">
                          {selectedStudent.points} Điểm rèn luyện
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">
                          Đã hoàn thành {selectedStudent.solvedCount} thử thách ngữ cảnh
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        handleSelectStudentProfile(selectedStudent);
                        setSelectedStudent(null);
                      }}
                      className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs cursor-pointer shadow-xs"
                    >
                      Đăng nhập học sinh này
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-end">
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700 transition"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
