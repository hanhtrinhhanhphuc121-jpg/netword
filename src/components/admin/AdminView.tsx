import React, { useState, useEffect } from 'react';
import { WordEntry, ActiveTab, WordCategory, SchoolAppropriateness, SchoolIssuedAccount, UserRole } from '../../types';
import { CATEGORY_LABELS, APPROPRIATENESS_LABELS } from '../../data/initialWords';
import {
  dictionaryService,
  getSupabaseConfig,
  saveSupabaseConfig,
  clearSupabaseConfig,
} from '../../services/supabaseClient';
import {
  MIGRATION_SQL,
  SEED_SQL,
  VERIFY_INTEGRITY_SQL,
  ERD_MARKDOWN,
  SUPABASE_TABLES_INFO,
} from '../../data/sqlExports';
import { normalizeTermClient } from '../../services/supabaseSchema';
import { rbacService, ROLE_DEFINITIONS } from '../../services/rbacService';
import { useAuth } from '../../services/authContext';
import { userService, UserDataRequest } from '../../services/userService';
import {
  adminAuditService,
  DashboardMetrics,
  TimeFilter,
  ClassFilter,
  AuditCheckItem,
  AdminAuditLog,
} from '../../services/adminAuditService';
import { Card } from '../ui/Card';
import {
  Settings,
  Database,
  Cloud,
  PlusCircle,
  Copy,
  Check,
  Download,
  RotateCcw,
  Sparkles,
  Server,
  Key,
  FileCode,
  ShieldCheck,
  Layers,
  Search,
  AlertTriangle,
  Users,
  BarChart3,
  Lock,
  Unlock,
  RefreshCw,
  Info,
  FileSpreadsheet,
  CheckCircle2,
  XCircle,
  FileText,
  ClipboardList,
  Filter,
  Calendar,
  History,
  TrendingUp,
  AlertCircle,
  ArrowUpRight,
  Play,
  Eye,
} from 'lucide-react';

interface AdminViewProps {
  words: WordEntry[];
  onRefreshWords: () => void;
  onNavigate: (tab: ActiveTab, wordId?: string) => void;
}

type AdminSection =
  | 'dashboard'
  | 'audit_suite'
  | 'words'
  | 'accounts'
  | 'audit_logs'
  | 'export_reports'
  | 'sql_migrations'
  | 'duplicate_sandbox'
  | 'database_config';

type SqlTab = 'migration' | 'seed' | 'verify' | 'erd';

export const AdminView: React.FC<AdminViewProps> = ({
  words,
  onRefreshWords,
  onNavigate,
}) => {
  const { adminSetUserRole } = useAuth();
  const [activeSection, setActiveSection] = useState<AdminSection>('dashboard');
  const [activeSqlTab, setActiveSqlTab] = useState<SqlTab>('migration');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  // DASHBOARD & AUDIT STATES (MỚI)
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('all');
  const [classFilter, setClassFilter] = useState<ClassFilter>('all');
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loadingMetrics, setLoadingMetrics] = useState(false);

  // Audit suite state
  const [auditRunning, setAuditRunning] = useState(false);
  const [auditResults, setAuditResults] = useState<AuditCheckItem[]>([]);
  const [auditOverall, setAuditOverall] = useState<'PASS' | 'FAIL' | null>(null);
  const [auditIssues, setAuditIssues] = useState<string[]>([]);
  const [auditPassedCount, setAuditPassedCount] = useState<number>(0);
  const [auditFailedCount, setAuditFailedCount] = useState<number>(0);
  const [auditWarningCount, setAuditWarningCount] = useState<number>(0);

  // Audit logs state
  const [auditLogs, setAuditLogs] = useState<AdminAuditLog[]>(() =>
    adminAuditService.getAuditLogs()
  );
  const [auditLogCategory, setAuditLogCategory] = useState<string>('all');

  // Student requests resolution state
  const [resolvingReqId, setResolvingReqId] = useState<string | null>(null);
  const [adminNoteInput, setAdminNoteInput] = useState('');

  // Tải chỉ số thực tế theo bộ lọc
  const loadDashboardMetrics = async () => {
    setLoadingMetrics(true);
    try {
      const data = await adminAuditService.getDashboardMetrics(words, timeFilter, classFilter);
      setMetrics(data);
    } catch (e) {
      console.error('Error loading dashboard metrics', e);
    } finally {
      setLoadingMetrics(false);
    }
  };

  useEffect(() => {
    loadDashboardMetrics();
  }, [words, timeFilter, classFilter]);

  // Tự động nạp bộ kiểm toán ban đầu
  useEffect(() => {
    adminAuditService.runFullPreDeploymentAudit(words).then((res) => {
      setAuditResults(res.results);
      setAuditOverall(res.overallStatus);
      setAuditIssues(res.remainingIssues);
      setAuditPassedCount(res.passedCount);
      setAuditFailedCount(res.failedCount);
      setAuditWarningCount(res.warningCount);
    });
  }, [words]);

  // Supabase Config State
  const [supabaseConfig, setSupabaseConfigState] = useState(getSupabaseConfig());
  const [urlInput, setUrlInput] = useState(supabaseConfig.url);
  const [keyInput, setKeyInput] = useState(supabaseConfig.anonKey);

  // School accounts state
  const [schoolAccounts, setSchoolAccounts] = useState<SchoolIssuedAccount[]>(() =>
    rbacService.getSchoolAccounts()
  );
  const [showSingleAccountForm, setShowSingleAccountForm] = useState(false);
  const [showBulkForm, setShowBulkForm] = useState(false);

  // Single account form state
  const [newAccFullName, setNewAccFullName] = useState('');
  const [newAccCode, setNewAccCode] = useState('');
  const [newAccGrade, setNewAccGrade] = useState('Lớp 11A1 (Chuyên đề 2)');
  const [newAccRole, setNewAccRole] = useState<'student' | 'editor'>('student');

  // Bulk accounts form state
  const [bulkGrade, setBulkGrade] = useState('Lớp 11A2');
  const [bulkRole, setBulkRole] = useState<'student' | 'editor'>('student');
  const [bulkNamesText, setBulkNamesText] = useState(
    'Nguyễn Gia Hân\nTrần Minh Khang\nVõ Hoàng Yến\nĐặng Quốc Bảo\nLý Thanh Thảo'
  );

  // Duplicate test sandbox state
  const [testInput, setTestInput] = useState('flex');
  const [testResult, setTestResult] = useState<{
    tested: string;
    normalized: string;
    isDuplicate: boolean;
    existingWord?: string;
    existingMeaning?: string;
  } | null>(null);

  // Form add new word directly
  const [showAddWordForm, setShowAddWordForm] = useState(false);
  const [newWord, setNewWord] = useState('');
  const [newPronunciation, setNewPronunciation] = useState('');
  const [newCategory, setNewCategory] = useState<WordCategory>('slang');
  const [newNetMeaning, setNewNetMeaning] = useState('');
  const [newLiteralMeaning, setNewLiteralMeaning] = useState('');
  const [newOrigin, setNewOrigin] = useState('');
  const [newAcademicGuidance, setNewAcademicGuidance] = useState('');
  const [newAppropriateness, setNewAppropriateness] = useState<SchoolAppropriateness>('acceptable_casual');
  const [newStandardScore, setNewStandardScore] = useState<number>(3);
  const [newTags, setNewTags] = useState('Chuyên đề 2, Ngữ văn 11');

  const handleSaveSupabaseConfig = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = saveSupabaseConfig({ url: urlInput, anonKey: keyInput });
    if (ok) {
      setSupabaseConfigState(getSupabaseConfig());
      setNotice('Đã cập nhật thông tin cấu hình Supabase Cloud thành công!');
      setTimeout(() => setNotice(null), 4000);
    }
  };

  const handleClearSupabaseConfig = () => {
    clearSupabaseConfig();
    setUrlInput('');
    setKeyInput('');
    setSupabaseConfigState(getSupabaseConfig());
    setNotice('Đã chuyển hoàn toàn về Chế độ Dùng thử Ngoại tuyến (Demo Mode) với LocalStorage.');
    setTimeout(() => setNotice(null), 4000);
  };

  const handleCopyText = (text: string, key: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleDownloadFile = (content: string, filename: string, mime = 'text/plain') => {
    const blob = new Blob([content], { type: `${mime};charset=utf-8` });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(words, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `netword_dictionary_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleResetDefault = () => {
    if (confirm('Thầy có chắc chắn muốn khôi phục dữ liệu từ điển về mặc định chuẩn mực của Chuyên đề 2 không?')) {
      dictionaryService.resetToDefault();
      onRefreshWords();
      setNotice('Đã khôi phục dữ liệu từ điển về bộ tiêu chuẩn ban đầu.');
      setTimeout(() => setNotice(null), 4000);
    }
  };

  const handleDeleteWord = async (id: string, wordText: string) => {
    if (confirm(`Thầy có chắc chắn muốn xóa mục từ "${wordText}" khỏi từ điển không?`)) {
      await dictionaryService.deleteWord(id);
      onRefreshWords();
      setNotice(`Đã xóa mục từ "${wordText}".`);
      setTimeout(() => setNotice(null), 3000);
    }
  };

  const handleRunDuplicateTest = async () => {
    if (!testInput.trim()) return;
    const normalized = normalizeTermClient(testInput);
    const check = await dictionaryService.checkDuplicate(testInput.trim());
    setTestResult({
      tested: testInput,
      normalized,
      isDuplicate: check.isDuplicate,
      existingWord: check.existingWord?.word,
      existingMeaning: check.existingWord?.netMeaning,
    });
  };

  const handleCreateWord = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWord.trim() || !newNetMeaning.trim()) {
      alert('Vui lòng nhập tên từ và nghĩa mạng!');
      return;
    }

    const dupCheck = await dictionaryService.checkDuplicate(newWord.trim());
    if (dupCheck.isDuplicate) {
      if (!confirm(`Cảnh báo trùng lặp: Từ điển đã có từ "${dupCheck.existingWord?.word}". Thầy có vẫn muốn thêm mục từ này không?`)) {
        return;
      }
    }

    const wordEntry: WordEntry = {
      id: `nw-${Date.now()}`,
      word: newWord.trim(),
      pronunciation: newPronunciation.trim() || undefined,
      category: newCategory,
      literalMeaning: newLiteralMeaning.trim() || 'Nghĩa gốc đang được nghiên cứu bổ sung.',
      netMeaning: newNetMeaning.trim(),
      origin: newOrigin.trim() || 'Xuất hiện trong ngôn ngữ đời sống mạng xã hội hiện đại.',
      dialogueExample: [
        {
          id: 'dex1',
          sender: 'Học sinh Long Hiệp',
          isMe: false,
          text: `Đang trò chuyện cùng từ ${newWord.trim()} nè!`,
          time: 'Vừa xong',
        },
      ],
      academicGuidance:
        newAcademicGuidance.trim() ||
        'Học sinh cần lưu ý phân biệt hoàn cảnh giao tiếp thân mật và văn bản trang trọng.',
      schoolAppropriateness: newAppropriateness,
      standardScore: newStandardScore,
      tags: newTags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      likesCount: 0,
      viewsCount: 1,
      status: 'approved',
      author: 'Thầy Trầm Thanh Tuấn (GV Ngữ văn)',
      createdAt: new Date().toISOString().split('T')[0],
    };

    await dictionaryService.saveWord(wordEntry);
    onRefreshWords();
    setNotice(`Đã thêm thành công mục từ "${newWord.trim()}" vào từ điển!`);
    setShowAddWordForm(false);
    setNewWord('');
    setNewPronunciation('');
    setNewNetMeaning('');
    setNewLiteralMeaning('');
    setNewOrigin('');
    setNewAcademicGuidance('');
    setTimeout(() => setNotice(null), 4000);
  };

  // SCHOOL ACCOUNTS ACTIONS
  const handleResetStudentPassword = (code: string) => {
    const res = rbacService.resetPasswordForStudent(code);
    if (res.success) {
      setSchoolAccounts(rbacService.getSchoolAccounts());
      setNotice(`${res.message} Mật khẩu mới: ${res.newPassword}`);
    } else {
      alert(res.message);
    }
  };

  const handleToggleSuspendAccount = (id: string) => {
    rbacService.toggleAccountStatus(id);
    setSchoolAccounts(rbacService.getSchoolAccounts());
    setNotice('Đã cập nhật trạng thái hoạt động của tài khoản.');
    setTimeout(() => setNotice(null), 3000);
  };

  const handleToggleEditorRole = (account: SchoolIssuedAccount) => {
    const newRole = account.role === 'editor' ? 'student' : 'editor';
    const list = rbacService.getSchoolAccounts();
    const idx = list.findIndex((a) => a.id === account.id);
    if (idx !== -1) {
      list[idx].role = newRole;
      localStorage.setItem('netword_school_issued_accounts_v1', JSON.stringify(list));
      setSchoolAccounts(list);
      adminSetUserRole(account.id, newRole);
      setNotice(`Đã chuyển vai trò của ${account.fullName} thành: ${ROLE_DEFINITIONS[newRole].label}`);
      setTimeout(() => setNotice(null), 3500);
    }
  };

  const handleCreateSingleAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAccFullName.trim()) return;

    const studentCode = newAccCode.trim() || `LH2026-${Date.now().toString().slice(-4)}`;
    const email = `${studentCode.toLowerCase()}@longhiep.edu.vn`;
    const initialPassword = `LongHiep@${Math.floor(1000 + Math.random() * 9000)}`;

    const created = rbacService.issueAccount({
      studentCode,
      fullName: newAccFullName.trim(),
      email,
      initialPassword,
      role: newAccRole,
      grade: newAccGrade.trim(),
      school: 'Trường THCS và THPT Long Hiệp',
    });

    setSchoolAccounts(rbacService.getSchoolAccounts());
    setNotice(`Đã cấp tài khoản thành công cho học sinh ${created.fullName} (${created.studentCode})!`);
    setShowSingleAccountForm(false);
    setNewAccFullName('');
    setNewAccCode('');
    setTimeout(() => setNotice(null), 4000);
  };

  const handleCreateBulkAccounts = (e: React.FormEvent) => {
    e.preventDefault();
    const names = bulkNamesText
      .split('\n')
      .map((n) => n.trim())
      .filter(Boolean);

    if (names.length === 0) {
      alert('Vui lòng nhập ít nhất một tên học sinh!');
      return;
    }

    const created = rbacService.issueBulkForClass(bulkGrade, names, bulkRole);
    setSchoolAccounts(rbacService.getSchoolAccounts());
    setNotice(`Đã cấp phát thành công ${created.length} tài khoản cho học sinh ${bulkGrade}!`);
    setShowBulkForm(false);
    setTimeout(() => setNotice(null), 4000);
  };

  const handleExportAccountsSlips = () => {
    const textLines = [
      '==============================================================================',
      'DANH SÁCH TÀI KHOẢN HỌC ĐƯỜNG NETWORD - TRƯỜNG THCS VÀ THPT LONG HIỆP',
      'Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11',
      `Ngày xuất: ${new Date().toLocaleDateString('vi-VN')}`,
      '==============================================================================\n',
    ];

    schoolAccounts.forEach((acc, i) => {
      textLines.push(
        `[#${i + 1}] HỌ VÀ TÊN: ${acc.fullName}`,
        `    Mã học sinh: ${acc.studentCode}`,
        `    Email trường cấp: ${acc.email}`,
        `    Mật khẩu khởi tạo: ${acc.initialPassword}`,
        `    Lớp: ${acc.grade}`,
        `    Vai trò: ${acc.role === 'editor' ? 'Ban Biên tập' : 'Học sinh'}`,
        `    Trạng thái: ${acc.status === 'active' ? 'Đang hoạt động' : 'Tạm khóa'}`,
        '------------------------------------------------------------------------------'
      );
    });

    handleDownloadFile(
      textLines.join('\n'),
      `phieu_tai_khoan_hoc_sinh_long_hiep_${new Date().toISOString().split('T')[0]}.txt`
    );
  };

  const getSqlContent = () => {
    switch (activeSqlTab) {
      case 'migration':
        return MIGRATION_SQL;
      case 'seed':
        return SEED_SQL;
      case 'verify':
        return VERIFY_INTEGRITY_SQL;
      case 'erd':
        return ERD_MARKDOWN;
    }
  };

  const getFilename = () => {
    switch (activeSqlTab) {
      case 'migration':
        return '20261031_000001_create_netword_schema.sql';
      case 'seed':
        return 'seed.sql';
      case 'verify':
        return 'verify_integrity.sql';
      case 'erd':
        return 'schema_erd.md';
    }
  };

  const handleRunAudit = async () => {
    setAuditRunning(true);
    setNotice('Đang tiến hành rà soát tự động 12 tiêu chí tiền triển khai...');
    try {
      const res = await adminAuditService.runFullPreDeploymentAudit(words);
      setAuditResults(res.results);
      setAuditOverall(res.overallStatus);
      setAuditIssues(res.remainingIssues);
      setAuditPassedCount(res.passedCount);
      setAuditFailedCount(res.failedCount);
      setAuditWarningCount(res.warningCount);
      setAuditLogs(adminAuditService.getAuditLogs());
      setNotice(`Kiểm toán hoàn tất: Kết quả ${res.overallStatus} (${res.passedCount}/12 tiêu chí ĐẠT).`);
    } finally {
      setAuditRunning(false);
      setTimeout(() => setNotice(null), 4000);
    }
  };

  const handleExportCSV = () => {
    if (!metrics) return;
    const csvContent = adminAuditService.exportAggregateCSV(metrics, timeFilter, classFilter);
    handleDownloadFile(
      csvContent,
      `netword_thong_ke_quan_tri_${timeFilter}_${classFilter}_${new Date().toISOString().split('T')[0]}.csv`,
      'text/csv'
    );
    adminAuditService.recordAuditAction(
      'XUẤT BÁO CÁO CSV',
      'report',
      'Số liệu quản trị tổng hợp',
      `Xuất file CSV ẩn danh hóa (Thời gian: ${timeFilter}, Lớp: ${classFilter})`
    );
    setAuditLogs(adminAuditService.getAuditLogs());
    setNotice('Đã xuất thành công file CSV thống kê tổng hợp (tuân thủ bảo mật PII)!');
    setTimeout(() => setNotice(null), 4000);
  };

  const handleExportPedagogicalReport = () => {
    if (!metrics) return;
    const reportText = adminAuditService.generatePedagogicalReport(metrics, timeFilter, classFilter);
    handleDownloadFile(
      reportText,
      `bao_cao_su_pham_chuyen_de_2_ngu_van_11_${new Date().toISOString().split('T')[0]}.txt`,
      'text/plain'
    );
    adminAuditService.recordAuditAction(
      'XUẤT BÁO CÁO SƯ PHẠM',
      'report',
      'Báo cáo tổng kết Chuyên đề 2',
      `Xuất văn bản báo cáo cho Thầy Trầm Thanh Tuấn nộp tổ chuyên môn`
    );
    setAuditLogs(adminAuditService.getAuditLogs());
    setNotice('Đã xuất báo cáo sư phạm văn bản thành công!');
    setTimeout(() => setNotice(null), 4000);
  };

  const handleExportAuditReport = () => {
    const lines = [
      '==============================================================================',
      'NETWORD - BÁO CÁO KIỂM ĐỊNH TOÀN DIỆN 12 TIÊU CHÍ TIỀN TRIỂN KHAI',
      'Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11',
      'Đơn vị: Trường THCS và THPT Long Hiệp - GV: Thầy Trầm Thanh Tuấn',
      `Thời điểm kiểm định: ${new Date().toLocaleString('vi-VN')}`,
      `KẾT QUẢ TỔNG THỂ: ${auditOverall || 'PASS'} (${auditPassedCount}/12 TIÊU CHÍ ĐẠT)`,
      '==============================================================================\n',
    ];

    auditResults.forEach((item) => {
      lines.push(
        `[#${item.id}] [${item.status.toUpperCase()}] ${item.title}`,
        `    Mã kiểm thử: ${item.code}`,
        `    Phân loại: ${item.category}`,
        `    Mô tả kiểm định: ${item.verificationDetails}`,
        `    Bằng chứng kỹ thuật: ${item.evidence}`,
        item.recommendation ? `    Khuyến nghị: ${item.recommendation}` : '',
        '------------------------------------------------------------------------------'
      );
    });

    if (auditIssues.length > 0) {
      lines.push('\nDANH SÁCH LỖI / VẤN ĐỀ CẦN LƯU Ý:');
      auditIssues.forEach((issue, idx) => lines.push(`  ${idx + 1}. ${issue}`));
    } else {
      lines.push('\nKHÔNG CÓ LỖI NGHIÊM TRỌNG TỒN ĐỌNG. HỆ THỐNG ĐỦ ĐIỀU KIỆN VẬN HÀNH.');
    }

    handleDownloadFile(
      lines.filter(Boolean).join('\n'),
      `bao_cao_kiem_toan_12_tieu_chi_netword_${new Date().toISOString().split('T')[0]}.txt`
    );
    setNotice('Đã tải xuống Báo cáo kiểm định 12 tiêu chí!');
    setTimeout(() => setNotice(null), 3000);
  };

  const handleResolveDataRequest = (id: string, status: 'approved' | 'rejected') => {
    if (!adminNoteInput.trim()) {
      alert('Vui lòng nhập ý kiến / ghi chú xử lý của Thầy Tuấn!');
      return;
    }
    const ok = userService.updateDataRequestStatus(id, status, adminNoteInput.trim());
    if (ok) {
      adminAuditService.recordAuditAction(
        status === 'approved' ? 'CHẤP THUẬN YÊU CẦU DỮ LIỆU' : 'TỪ CHỐI YÊU CẦU DỮ LIỆU',
        'requests',
        `Yêu cầu mã #${id}`,
        `Thầy Tuấn đã xử lý: ${adminNoteInput.trim()}`
      );
      setResolvingReqId(null);
      setAdminNoteInput('');
      setAuditLogs(adminAuditService.getAuditLogs());
      loadDashboardMetrics();
      setNotice(`Đã xử lý xong yêu cầu #${id}!`);
      setTimeout(() => setNotice(null), 4000);
    }
  };

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-bold mb-1 border border-rose-200 dark:border-rose-800">
          <Settings className="w-3.5 h-3.5" />
          Bảng điều khiển Quản trị Tối cao (Thầy Trầm Thanh Tuấn)
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Hệ thống Quản trị & Giám sát Chuyên đề 2
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Duyệt xuất bản, thống kê thực tế, quản lý tài khoản trường cấp, rà soát 12 tiêu chí bảo mật và xuất báo cáo sư phạm.
        </p>

        {/* Section Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mt-4 pt-2">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSection === 'dashboard'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Bảng điều khiển</span>
          </button>

          <button
            onClick={() => setActiveSection('audit_suite')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSection === 'audit_suite'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Rà soát 12 tiêu chí</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-100 font-mono font-bold">
              {auditPassedCount}/12
            </span>
          </button>

          <button
            onClick={() => setActiveSection('words')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSection === 'words'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>Mục từ ({words.length})</span>
          </button>

          <button
            onClick={() => setActiveSection('accounts')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSection === 'accounts'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Tài khoản trường cấp ({schoolAccounts.length})</span>
          </button>

          <button
            onClick={() => setActiveSection('audit_logs')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSection === 'audit_logs'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Sổ ghi vết thao tác ({auditLogs.length})</span>
          </button>

          <button
            onClick={() => setActiveSection('export_reports')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSection === 'export_reports'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Xuất báo cáo & CSV</span>
          </button>

          <button
            onClick={() => setActiveSection('sql_migrations')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSection === 'sql_migrations'
                ? 'bg-slate-900 text-white shadow-sm dark:bg-slate-100 dark:text-slate-900'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>13 Bảng & SQL</span>
          </button>

          <button
            onClick={() => setActiveSection('duplicate_sandbox')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSection === 'duplicate_sandbox'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Chống trùng từ</span>
          </button>

          <button
            onClick={() => setActiveSection('database_config')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeSection === 'database_config'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>Cấu hình Cloud</span>
          </button>
        </div>
      </div>

      {notice && (
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm font-semibold flex items-center gap-2">
          <Check className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{notice}</span>
        </div>
      )}

      {/* SECTION 1: WORDS MANAGEMENT */}
      {activeSection === 'words' && (
        <Card className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Quản lý danh sách mục từ ({words.length} từ)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Thầy Trầm Thanh Tuấn có toàn quyền thêm mới, chỉnh sửa và loại bỏ từ ngữ
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={handleExportJson}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Xuất JSON</span>
              </button>

              <button
                onClick={handleResetDefault}
                className="px-3 py-2 rounded-xl border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold hover:bg-rose-50 dark:hover:bg-rose-950/50 transition flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Khôi phục gốc</span>
              </button>

              <button
                onClick={() => setShowAddWordForm(!showAddWordForm)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold hover:opacity-95 transition flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>{showAddWordForm ? 'Đóng biểu mẫu' : 'Thêm mục từ'}</span>
              </button>
            </div>
          </div>

          {/* Add word form */}
          {showAddWordForm && (
            <form
              onSubmit={handleCreateWord}
              className="bg-indigo-50/50 dark:bg-indigo-950/30 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800 space-y-4 animate-in fade-in"
            >
              <h3 className="font-bold text-sm text-indigo-950 dark:text-indigo-200 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                Thêm trực tiếp mục từ vào Từ điển NETWORD
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Thuật ngữ</label>
                  <input
                    type="text"
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    placeholder="Ví dụ: Red flag..."
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phiên âm / Cách đọc</label>
                  <input
                    type="text"
                    value={newPronunciation}
                    onChange={(e) => setNewPronunciation(e.target.value)}
                    placeholder="/.../"
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phân loại</label>
                  <select
                    aria-label="Phân loại mục từ"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as WordCategory)}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  >
                    {(Object.keys(CATEGORY_LABELS) as WordCategory[]).map((key) => (
                      <option key={key} value={key} className="dark:bg-slate-900">
                        {CATEGORY_LABELS[key].label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Nghĩa mạng xã hội</label>
                  <input
                    type="text"
                    value={newNetMeaning}
                    onChange={(e) => setNewNetMeaning(e.target.value)}
                    placeholder="Giải nghĩa rõ ràng..."
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Nghĩa đen / Nghĩa gốc</label>
                  <input
                    type="text"
                    value={newLiteralMeaning}
                    onChange={(e) => setNewLiteralMeaning(e.target.value)}
                    placeholder="Nghĩa ban đầu..."
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Nhận định sư phạm của Thầy Trầm Thanh Tuấn (Ngữ văn 11)
                </label>
                <textarea
                  rows={2}
                  value={newAcademicGuidance}
                  onChange={(e) => setNewAcademicGuidance(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Đánh giá mức độ</label>
                  <select
                    aria-label="Đánh giá mức độ phù hợp"
                    value={newAppropriateness}
                    onChange={(e) => setNewAppropriateness(e.target.value as SchoolAppropriateness)}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  >
                    {(Object.keys(APPROPRIATENESS_LABELS) as SchoolAppropriateness[]).map((key) => (
                      <option key={key} value={key} className="dark:bg-slate-900">
                        {APPROPRIATENESS_LABELS[key].label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Thẻ gắn</label>
                  <input
                    type="text"
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddWordForm(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-400"
                >
                  Hủy bỏ
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 cursor-pointer shadow-xs"
                >
                  Lưu và phát hành mục từ
                </button>
              </div>
            </form>
          )}

          {/* Word Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-2.5 px-3">Thuật ngữ</th>
                  <th className="py-2.5 px-3">Danh mục</th>
                  <th className="py-2.5 px-3">Giải nghĩa mạng</th>
                  <th className="py-2.5 px-3">Chuẩn mực</th>
                  <th className="py-2.5 px-3 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {words.map((item) => {
                  const cat = CATEGORY_LABELS[item.category] || CATEGORY_LABELS.slang;
                  const app = APPROPRIATENESS_LABELS[item.schoolAppropriateness] || APPROPRIATENESS_LABELS.acceptable_casual;

                  return (
                    <tr key={item.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition">
                      <td className="py-3 px-3 font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                        {item.word}
                      </td>
                      <td className="py-3 px-3">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${cat.color}`}>
                          {cat.label}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-600 dark:text-slate-400 max-w-xs truncate">
                        {item.netMeaning}
                      </td>
                      <td className="py-3 px-3">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border ${app.color}`}>
                          {app.badge}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right whitespace-nowrap space-x-1">
                        <button
                          onClick={() => onNavigate('detail', item.id)}
                          className="px-2.5 py-1 text-xs rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 font-bold"
                        >
                          Xem
                        </button>
                        <button
                          onClick={() => handleDeleteWord(item.id, item.word)}
                          className="px-2.5 py-1 text-xs rounded-lg text-rose-600 dark:text-rose-400 hover:bg-rose-50 font-bold"
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* SECTION 2: SCHOOL-ISSUED ACCOUNTS & RECOVERY (MỚI) */}
      {activeSection === 'accounts' && (
        <Card className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Quản lý Tài khoản Cấp phát & Khôi phục (Trường Long Hiệp)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Thầy Trầm Thanh Tuấn quản lý danh sách học sinh, cấp tài khoản khối 11 và khôi phục mật khẩu học đường
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={handleExportAccountsSlips}
                className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center gap-1.5 cursor-pointer"
                title="Xuất phiếu thông tin tài khoản cho học sinh"
              >
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                <span>Xuất phiếu in</span>
              </button>

              <button
                onClick={() => {
                  setShowBulkForm(!showBulkForm);
                  setShowSingleAccountForm(false);
                }}
                className="px-3 py-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-xs font-bold hover:bg-purple-100 transition flex items-center gap-1.5 cursor-pointer"
              >
                <Users className="w-3.5 h-3.5" />
                <span>Cấp cả lớp</span>
              </button>

              <button
                onClick={() => {
                  setShowSingleAccountForm(!showSingleAccountForm);
                  setShowBulkForm(false);
                }}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Cấp lẻ</span>
              </button>
            </div>
          </div>

          {/* Demo Mode Notice for Accounts */}
          <div className="p-3.5 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Lưu ý Chế độ Dùng thử Cục bộ (Chưa có CSDL tập trung):</strong> Danh sách tài khoản học đường dưới đây hiện được lưu tại bộ nhớ trình duyệt máy của Thầy (LocalStorage) để thử nghiệm phân quyền, cấp mã, đặt lại mật khẩu và xuất phiếu in. Cần kết nối cơ sở dữ liệu thật (Supabase/PostgreSQL) để tài khoản có hiệu lực đăng nhập trên thiết bị của từng học sinh.
            </div>
          </div>

          {/* Form Cấp lẻ */}
          {showSingleAccountForm && (
            <form
              onSubmit={handleCreateSingleAccount}
              className="p-5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 space-y-4 animate-in fade-in"
            >
              <h3 className="font-bold text-xs text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                <PlusCircle className="w-4 h-4 text-purple-600" />
                Cấp tài khoản mới cho học sinh / thành viên biên tập
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Họ và tên học sinh</label>
                  <input
                    type="text"
                    value={newAccFullName}
                    onChange={(e) => setNewAccFullName(e.target.value)}
                    placeholder="Ví dụ: Đỗ Gia Hân"
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Mã học sinh (Tùy chọn)</label>
                  <input
                    type="text"
                    value={newAccCode}
                    onChange={(e) => setNewAccCode(e.target.value)}
                    placeholder="LH2026-11A1-099"
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phân vai trò ban đầu</label>
                  <select
                    aria-label="Phân vai trò ban đầu"
                    value={newAccRole}
                    onChange={(e) => setNewAccRole(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  >
                    <option value="student">🎓 Học sinh THPT</option>
                    <option value="editor">✍️ Ban Biên tập</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowSingleAccountForm(false)}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-300 text-xs font-semibold"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-purple-600 text-white text-xs font-bold shadow-xs hover:bg-purple-700"
                >
                  Cấp tài khoản
                </button>
              </div>
            </form>
          )}

          {/* Form Cấp cả lớp */}
          {showBulkForm && (
            <form
              onSubmit={handleCreateBulkAccounts}
              className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-4 animate-in fade-in"
            >
              <h3 className="font-bold text-xs text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-indigo-600" />
                Cấp phát tài khoản hàng loạt theo danh sách lớp
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Lớp học sinh</label>
                  <input
                    type="text"
                    value={bulkGrade}
                    onChange={(e) => setBulkGrade(e.target.value)}
                    placeholder="Lớp 11A1, 11A2..."
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Vai trò khởi tạo</label>
                  <select
                    aria-label="Vai trò khởi tạo hàng loạt"
                    value={bulkRole}
                    onChange={(e) => setBulkRole(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100"
                  >
                    <option value="student">🎓 Học sinh THPT</option>
                    <option value="editor">✍️ Ban Biên tập</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Danh sách họ tên học sinh (Mỗi dòng một tên):
                </label>
                <textarea
                  rows={4}
                  value={bulkNamesText}
                  onChange={(e) => setBulkNamesText(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-900 dark:text-slate-100 leading-relaxed"
                />
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setShowBulkForm(false)}
                  className="px-3.5 py-1.5 rounded-xl border border-slate-300 text-xs font-semibold"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-xs hover:bg-indigo-700"
                >
                  Tạo danh sách tài khoản
                </button>
              </div>
            </form>
          )}

          {/* School Accounts Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-2.5 px-3">Học sinh / Mã</th>
                  <th className="py-2.5 px-3">Email trường cấp</th>
                  <th className="py-2.5 px-3">Mật khẩu khởi tạo</th>
                  <th className="py-2.5 px-3">Vai trò</th>
                  <th className="py-2.5 px-3">Trạng thái</th>
                  <th className="py-2.5 px-3 text-right">Thao tác Thầy Tuấn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {schoolAccounts.map((acc) => (
                  <tr key={acc.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition">
                    <td className="py-3 px-3 whitespace-nowrap">
                      <div className="font-bold text-slate-900 dark:text-slate-100">{acc.fullName}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{acc.studentCode} • {acc.grade}</div>
                    </td>

                    <td className="py-3 px-3 font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
                      {acc.email}
                    </td>

                    <td className="py-3 px-3">
                      <code className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-[11px] font-bold text-slate-700 dark:text-slate-300">
                        {acc.initialPassword}
                      </code>
                    </td>

                    <td className="py-3 px-3">
                      <button
                        onClick={() => handleToggleEditorRole(acc)}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded border transition cursor-pointer ${
                          acc.role === 'editor'
                            ? 'bg-purple-100 text-purple-700 border-purple-300'
                            : 'bg-blue-100 text-blue-700 border-blue-300'
                        }`}
                        title="Bấm để đổi vai trò Học sinh <-> Biên tập"
                      >
                        {acc.role === 'editor' ? '✍️ Ban Biên tập' : '🎓 Học sinh'}
                      </button>
                    </td>

                    <td className="py-3 px-3">
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                          acc.status === 'active'
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                            : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                        }`}
                      >
                        {acc.status === 'active' ? 'Đang hoạt động' : 'Tạm khóa'}
                      </span>
                    </td>

                    <td className="py-3 px-3 text-right whitespace-nowrap space-x-1">
                      <button
                        onClick={() => handleResetStudentPassword(acc.studentCode)}
                        className="px-2 py-1 text-[11px] font-bold rounded-lg text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950/60"
                        title="Cấp lại mật khẩu mới cho học sinh"
                      >
                        Cấp lại MK
                      </button>

                      <button
                        onClick={() => handleToggleSuspendAccount(acc.id)}
                        className="px-2 py-1 text-[11px] font-bold rounded-lg text-slate-600 hover:bg-slate-100 dark:text-slate-400"
                        title={acc.status === 'active' ? 'Khóa tài khoản' : 'Mở khóa'}
                      >
                        {acc.status === 'active' ? 'Khóa' : 'Mở'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* SECTION 1: BẢNG ĐIỀU KHIỂN QUẢN TRỊ TỔNG QUAN (REAL METRICS & FILTERS) */}
      {activeSection === 'dashboard' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Demo Mode Notice for Admin Dashboard */}
          <div className="p-4 rounded-2xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-bold">Chế độ Dùng thử Ngoại tuyến (Demo Cục bộ - LocalStorage):</span>{' '}
              Các chỉ số thống kê, lượt tra cứu, tỷ lệ hoàn thành thử thách và danh sách tài khoản dưới đây được tổng hợp từ dữ liệu mẫu và bộ nhớ trình duyệt máy này để phục vụ kiểm thử giao diện & quy trình sư phạm của Thầy Trầm Thanh Tuấn. Ứng dụng chưa kết nối cơ sở dữ liệu đám mây tập trung, không đồng bộ dữ liệu giữa nhiều tài khoản hay nhiều thiết bị.
            </div>
          </div>

          {/* Filter Bar */}
          <Card className="p-4 bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Bộ lọc Dữ liệu Thực tế:
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                {/* Time Filter */}
                <div className="flex items-center gap-1 bg-white dark:bg-slate-800 rounded-xl p-1 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 ml-1.5" />
                  <button
                    onClick={() => setTimeFilter('today')}
                    className={`px-2.5 py-1 rounded-lg transition ${
                      timeFilter === 'today'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    Hôm nay
                  </button>
                  <button
                    onClick={() => setTimeFilter('7d')}
                    className={`px-2.5 py-1 rounded-lg transition ${
                      timeFilter === '7d'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    7 ngày
                  </button>
                  <button
                    onClick={() => setTimeFilter('30d')}
                    className={`px-2.5 py-1 rounded-lg transition ${
                      timeFilter === '30d'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    30 ngày
                  </button>
                  <button
                    onClick={() => setTimeFilter('all')}
                    className={`px-2.5 py-1 rounded-lg transition ${
                      timeFilter === 'all'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    Tất cả
                  </button>
                </div>

                {/* Class Filter */}
                <div className="flex items-center gap-1 bg-white dark:bg-slate-800 rounded-xl px-2.5 py-1 border border-slate-200 dark:border-slate-700 text-xs">
                  <Users className="w-3.5 h-3.5 text-purple-600 mr-1" />
                  <span className="text-slate-500 font-semibold mr-1">Nhóm:</span>
                  <select
                    aria-label="Lọc theo nhóm học sinh"
                    value={classFilter}
                    onChange={(e) => setClassFilter(e.target.value as ClassFilter)}
                    className="bg-transparent font-bold text-slate-800 dark:text-slate-200 border-none outline-none cursor-pointer text-xs"
                  >
                    <option value="all">Toàn khối 11</option>
                    <option value="11A1">Lớp 11A1 (Chuyên đề 2)</option>
                    <option value="11A2">Lớp 11A2</option>
                    <option value="11A3">Lớp 11A3</option>
                    <option value="11A4">Lớp 11A4</option>
                  </select>
                </div>

                {/* Refresh */}
                <button
                  onClick={loadDashboardMetrics}
                  className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  title="Cập nhật lại số liệu"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingMetrics ? 'animate-spin text-blue-600' : ''}`} />
                </button>
              </div>
            </div>
          </Card>

          {/* 4 Main Real Metric KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <Card className="p-4 sm:p-5 border-l-4 border-l-blue-600 space-y-1">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-[11px] font-bold uppercase tracking-wider">Mục từ đã phê duyệt</span>
                <Database className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tabular-nums">
                {metrics?.approvedTermsCount ?? words.length}
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Xuất bản chính thức</span>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 border-l-4 border-l-amber-500 space-y-1">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-[11px] font-bold uppercase tracking-wider">Đang chờ xử lý</span>
                <AlertCircle className="w-4 h-4 text-amber-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tabular-nums">
                {metrics?.pendingTermsCount ?? 0}
              </div>
              <div className="text-[11px] text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
                <span>Chờ Ban Biên tập thẩm định</span>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 border-l-4 border-l-purple-600 space-y-1">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-[11px] font-bold uppercase tracking-wider">Học sinh tham gia</span>
                <Users className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tabular-nums">
                {metrics?.activeStudentsCount ?? schoolAccounts.length}
              </div>
              <div className="text-[11px] text-purple-600 dark:text-purple-400 font-semibold">
                <span>Tài khoản trường cấp hoạt động</span>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 border-l-4 border-l-emerald-600 space-y-1">
              <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                <span className="text-[11px] font-bold uppercase tracking-wider">Lượt tra cứu</span>
                <TrendingUp className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tabular-nums">
                {metrics?.totalLookupsCount ?? 0}
              </div>
              <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <span>Khảo sát Chuyên đề 2</span>
              </div>
            </Card>
          </div>

          {/* Row 1: Submissions Stages & Daily Lookups Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Tiến độ thẩm định đề xuất */}
            <Card className="p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-indigo-600" />
                  Tiến độ thẩm định đề xuất từ mới của học sinh
                </h3>
                <span className="text-[10px] font-mono text-slate-400 font-semibold">
                  Tổng: {metrics ? Object.values(metrics.submissionsByStage).reduce((a, b) => a + b, 0) : 0} đề xuất
                </span>
              </div>

              <div className="space-y-3">
                {/* Pending */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                      Chờ Ban Biên tập xử lý (Pending)
                    </span>
                    <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                      {metrics?.submissionsByStage.pending ?? 0}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full transition-all duration-500"
                      style={{
                        width: `${
                          metrics && Object.values(metrics.submissionsByStage).reduce((a, b) => a + b, 0) > 0
                            ? Math.round(
                                (metrics.submissionsByStage.pending /
                                  Object.values(metrics.submissionsByStage).reduce((a, b) => a + b, 0)) *
                                  100
                              )
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>

                {/* Approved */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Đã duyệt xuất bản vào từ điển (Approved)
                    </span>
                    <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                      {metrics?.submissionsByStage.approved ?? 0}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                      style={{
                        width: `${
                          metrics && Object.values(metrics.submissionsByStage).reduce((a, b) => a + b, 0) > 0
                            ? Math.round(
                                (metrics.submissionsByStage.approved /
                                  Object.values(metrics.submissionsByStage).reduce((a, b) => a + b, 0)) *
                                  100
                              )
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>

                {/* Needs Revision */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Yêu cầu khảo sát bổ sung nguồn (Needs Revision)
                    </span>
                    <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                      {metrics?.submissionsByStage.needs_revision ?? 0}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-500"
                      style={{
                        width: `${
                          metrics && Object.values(metrics.submissionsByStage).reduce((a, b) => a + b, 0) > 0
                            ? Math.round(
                                (metrics.submissionsByStage.needs_revision /
                                  Object.values(metrics.submissionsByStage).reduce((a, b) => a + b, 0)) *
                                  100
                              )
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>

                {/* Rejected */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      Từ chối (Vi phạm bạo lực ngôn từ/Xúc phạm)
                    </span>
                    <span className="font-mono font-bold text-slate-700 dark:text-slate-300">
                      {metrics?.submissionsByStage.rejected ?? 0}
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-rose-500 rounded-full transition-all duration-500"
                      style={{
                        width: `${
                          metrics && Object.values(metrics.submissionsByStage).reduce((a, b) => a + b, 0) > 0
                            ? Math.round(
                                (metrics.submissionsByStage.rejected /
                                  Object.values(metrics.submissionsByStage).reduce((a, b) => a + b, 0)) *
                                  100
                              )
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Dòng thời gian lượt tra cứu theo ngày */}
            <Card className="p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  Lượt tra cứu từ ngữ theo dòng thời gian
                </h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Thời gian: {timeFilter.toUpperCase()}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-end justify-between gap-1 sm:gap-2 h-36 pt-6 px-1">
                  {metrics?.lookupsTimeline.map((item) => {
                    const maxVal = Math.max(...(metrics?.lookupsTimeline.map((t) => t.count) || [1]), 20);
                    const heightPct = Math.max(15, Math.round((item.count / maxVal) * 100));
                    return (
                      <div key={item.dateKey} className="flex-1 flex flex-col items-center gap-1 group">
                        <span className="text-[10px] font-mono text-slate-500 group-hover:text-blue-600 font-bold">
                          {item.count}
                        </span>
                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-md h-full flex items-end overflow-hidden">
                          <div
                            className="w-full bg-gradient-to-t from-blue-600 to-indigo-500 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all rounded-t-md"
                            style={{ height: `${heightPct}%` }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                          {item.displayDate}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p className="text-[11px] text-slate-400 text-center italic">
                  * Số liệu thống kê tổng hợp từ các phiên học tập Chuyên đề 2 môn Ngữ văn 11.
                </p>
              </div>
            </Card>
          </div>

          {/* Row 2: Aggregate Challenge Results & Top Searched Terms */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Kết quả Thử thách tổng hợp (Không PII) */}
            <Card className="p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-purple-600" />
                    Kết quả Thử thách Ngôn ngữ (Dữ liệu Tổng hợp)
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Bảo mật học đường: Không công khai danh tính hay điểm số cá nhân học sinh
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-purple-600 bg-purple-50 dark:bg-purple-950 px-2 py-0.5 rounded border border-purple-200 dark:border-purple-800">
                  {metrics?.challengeSummary.totalAttempts ?? 0} lượt làm
                </span>
              </div>

              {/* KPI Thử thách */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800">
                  <div className="text-xl font-black text-purple-700 dark:text-purple-300">
                    {metrics?.challengeSummary.avgScore ?? 0}/100
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Điểm trung bình toàn khối</div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800">
                  <div className="text-xl font-black text-emerald-700 dark:text-emerald-300">
                    {metrics?.challengeSummary.passRate ?? 0}%
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">Tỷ lệ đạt chuẩn nhận thức</div>
                </div>
              </div>

              {/* Theo lớp */}
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Thống kê theo từng lớp khối 11:
                </div>
                <div className="space-y-1.5">
                  {metrics?.challengeSummary.byClass.map((c) => (
                    <div
                      key={c.grade}
                      className="flex items-center justify-between p-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-xs border border-slate-100 dark:border-slate-800"
                    >
                      <span className="font-bold text-slate-800 dark:text-slate-200">{c.grade}</span>
                      <div className="flex items-center gap-3 font-mono text-[11px]">
                        <span className="text-slate-500">{c.attemptsCount} lượt</span>
                        <span className="text-purple-600 font-bold">{c.avgScore} đ</span>
                        <span className="text-emerald-600 font-bold">{c.passRate}% đạt</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Top từ được tra cứu nhiều nhất */}
            <Card className="p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Search className="w-4 h-4 text-blue-600" />
                  Mục từ được tra cứu & quan tâm nhiều nhất
                </h3>
                <span className="text-[10px] text-slate-400 font-semibold">Theo lượt xem & tương tác</span>
              </div>

              <div className="space-y-2">
                {metrics?.topSearchedTerms.map((term, idx) => {
                  const cat = CATEGORY_LABELS[term.category as WordCategory] || CATEGORY_LABELS.slang;
                  const app =
                    APPROPRIATENESS_LABELS[term.schoolAppropriateness as SchoolAppropriateness] ||
                    APPROPRIATENESS_LABELS.acceptable_casual;

                  return (
                    <div
                      key={term.id}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 border border-slate-100 dark:border-slate-800 transition"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 font-mono text-[11px] font-bold flex items-center justify-center text-slate-500 shrink-0">
                          {idx + 1}
                        </span>
                        <div className="min-w-0">
                          <button
                            onClick={() => onNavigate('detail', term.id)}
                            className="font-bold text-xs text-slate-900 dark:text-slate-100 hover:text-blue-600 truncate text-left block"
                          >
                            {term.word}
                          </button>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${cat.color}`}>
                              {cat.label}
                            </span>
                            <span className={`text-[9px] font-medium px-1.5 py-0.2 rounded border ${app.color}`}>
                              {app.badge}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-[11px] font-mono shrink-0">
                        <span className="text-slate-500 flex items-center gap-1">
                          <Eye className="w-3 h-3 text-slate-400" />
                          {term.viewsCount}
                        </span>
                        <span className="text-rose-600 font-bold flex items-center gap-1">
                          ❤️ {term.likesCount}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Row 3: Pending Feedback & Privacy Data Requests */}
          <Card className="p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Phản ánh & Yêu cầu dữ liệu cá nhân học sinh ({metrics?.pendingDataRequests.length ?? 0} đang chờ)
                </h3>
                <p className="text-[11px] text-slate-400">
                  Thầy Trầm Thanh Tuấn xử lý yêu cầu chỉnh sửa/xóa dữ liệu cá nhân học sinh (Right to be Forgotten)
                </p>
              </div>
              <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-950 px-2.5 py-1 rounded-lg border border-amber-200 dark:border-amber-800">
                {metrics?.pendingDataRequests.length ?? 0} yêu cầu mới
              </span>
            </div>

            {(!metrics?.pendingDataRequests || metrics.pendingDataRequests.length === 0) ? (
              <div className="p-6 text-center text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-dashed border-slate-200 dark:border-slate-800">
                <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2 opacity-80" />
                <p className="font-bold text-slate-700 dark:text-slate-300">Không có phản ánh hay khiếu nại nào đang tồn đọng.</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Tất cả dữ liệu và quyền riêng tư của học sinh THPT Long Hiệp được xử lý kịp thời.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {metrics.pendingDataRequests.map((req) => (
                  <div
                    key={req.id}
                    className="p-4 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 space-y-2.5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-slate-100">{req.userName}</span>
                        <span className="text-slate-400 ml-2 font-mono">({req.studentCode || req.userEmail})</span>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                        {req.type === 'edit_request' ? '✏️ Yêu cầu sửa dữ liệu' : '🗑️ Yêu cầu xóa dữ liệu (Right to be Forgotten)'}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 dark:text-slate-300 bg-white/70 dark:bg-slate-900/70 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                      <strong>Lý do học sinh nêu:</strong> "{req.reason}"
                      {req.proposedValue && (
                        <span className="block mt-1 text-[11px] text-indigo-600 dark:text-indigo-400">
                          Giá trị đề xuất thay đổi: <strong>{req.proposedValue}</strong>
                        </span>
                      )}
                    </p>

                    {resolvingReqId === req.id ? (
                      <div className="space-y-2 pt-2 border-t border-amber-200 dark:border-amber-900/60 animate-in fade-in">
                        <input
                          type="text"
                          value={adminNoteInput}
                          onChange={(e) => setAdminNoteInput(e.target.value)}
                          placeholder="Nhập ý kiến phê duyệt của Thầy Tuấn (ví dụ: Đã xác nhận từ GVCN)..."
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-slate-100"
                        />
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setResolvingReqId(null)}
                            className="px-3 py-1 text-xs rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 cursor-pointer"
                          >
                            Hủy
                          </button>
                          <button
                            onClick={() => handleResolveDataRequest(req.id, 'rejected')}
                            className="px-3 py-1 text-xs rounded-lg bg-rose-600 text-white font-bold hover:bg-rose-700 cursor-pointer"
                          >
                            Từ chối
                          </button>
                          <button
                            onClick={() => handleResolveDataRequest(req.id, 'approved')}
                            className="px-3.5 py-1 text-xs rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 cursor-pointer"
                          >
                            Duyệt yêu cầu
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-end pt-1">
                        <button
                          onClick={() => {
                            setResolvingReqId(req.id);
                            setAdminNoteInput('Thầy Tuấn đã xác nhận và chấp thuận.');
                          }}
                          className="px-3 py-1 text-xs rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition cursor-pointer"
                        >
                          Xử lý yêu cầu này
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      )}

      {/* SECTION 2: RÀ SOÁT TOÀN DIỆN 12 TIÊU CHÍ (PRE-DEPLOYMENT AUDIT SUITE) */}
      {activeSection === 'audit_suite' && (
        <div className="space-y-6 animate-in fade-in">
          {/* Header Card with Overall Status & Runner */}
          <Card className="p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-1 border border-emerald-200 dark:border-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Quy trình Đảm bảo Chất lượng Tiền Triển khai
                </div>
                <h2 className="text-lg font-black text-slate-900 dark:text-slate-100">
                  Rà soát Kỹ thuật 12 Tiêu chí Toàn diện
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Kiểm thử tự động các luồng quan trọng: bảo mật RLS, chống rò rỉ PII, chống gian lận điểm, cách ly từ chờ duyệt và phân quyền 3 tầng.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleExportAuditReport}
                  className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Xuất báo cáo (.txt)</span>
                </button>

                <button
                  onClick={handleRunAudit}
                  disabled={auditRunning}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs disabled:opacity-50"
                >
                  <Play className={`w-3.5 h-3.5 ${auditRunning ? 'animate-spin' : ''}`} />
                  <span>{auditRunning ? 'Đang chạy kiểm thử...' : 'Chạy kiểm toán ngay'}</span>
                </button>
              </div>
            </div>

            {/* Overall Verdict Banner */}
            <div
              className={`p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 border ${
                auditOverall === 'PASS'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800'
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    auditOverall === 'PASS'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-600 text-white'
                  }`}
                >
                  {auditOverall === 'PASS' ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <XCircle className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    KẾT LUẬN KIỂM ĐỊNH TỔNG THỂ
                  </div>
                  <div
                    className={`text-base font-black ${
                      auditOverall === 'PASS'
                        ? 'text-emerald-800 dark:text-emerald-300'
                        : 'text-rose-800 dark:text-rose-300'
                    }`}
                  >
                    {auditOverall === 'PASS'
                      ? 'PASS – HỆ THỐNG ĐẠT 100% TIÊU CHÍ AN TOÀN SẴN SÀNG TRIỂN KHAI'
                      : 'FAIL – PHÁT HIỆN LỖI NGHIÊM TRỌNG CẦN KHẮC PHỤC TRƯỚC KHI VẬN HÀNH'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono font-bold">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                  {auditPassedCount} ĐẠT
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200">
                  {auditFailedCount} LỖI
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                  {auditWarningCount} LƯU Ý
                </span>
              </div>
            </div>
          </Card>

          {/* 12 Checklist Items */}
          <div className="space-y-3">
            {auditResults.map((item) => (
              <Card
                key={item.id}
                className="p-4 transition hover:border-slate-300 dark:hover:border-slate-700 space-y-2.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                        item.status === 'passed'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                      }`}
                    >
                      {item.id}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-slate-400">{item.code}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase border flex items-center gap-1 ${
                        item.status === 'passed'
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
                          : 'bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300 border-rose-300 dark:border-rose-800'
                      }`}
                    >
                      {item.status === 'passed' ? (
                        <>
                          <Check className="w-3 h-3" />
                          PASS
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3 h-3" />
                          FAIL
                        </>
                      )}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.verificationDetails}
                </p>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-[11px] font-mono text-slate-600 dark:text-slate-300 flex items-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Bằng chứng kỹ thuật:</strong> {item.evidence}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: SỔ GHI VẾT THAO TÁC ADMIN (AUDIT LOGS) */}
      {activeSection === 'audit_logs' && (
        <Card className="space-y-5 animate-in fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <History className="w-5 h-5 text-amber-600" />
                Sổ ghi vết thao tác Quản trị (Admin Audit Log)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Ghi nhận lịch sử các hành động trọng yếu: duyệt từ, đổi vai trò, khôi phục mật khẩu, xử lý khiếu nại và xuất báo cáo.
              </p>
            </div>

            <button
              onClick={() => {
                const text = JSON.stringify(auditLogs, null, 2);
                handleDownloadFile(text, `audit_logs_${new Date().toISOString().split('T')[0]}.json`, 'application/json');
              }}
              className="px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải nhật ký (.json)</span>
            </button>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 text-xs">
            {['all', 'terms', 'accounts', 'security', 'report', 'requests'].map((cat) => (
              <button
                key={cat}
                onClick={() => setAuditLogCategory(cat)}
                className={`px-3 py-1 rounded-lg font-bold transition capitalize cursor-pointer ${
                  auditLogCategory === cat
                    ? 'bg-amber-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat === 'all'
                  ? 'Tất cả'
                  : cat === 'terms'
                  ? 'Mục từ'
                  : cat === 'accounts'
                  ? 'Tài khoản'
                  : cat === 'security'
                  ? 'Bảo mật'
                  : cat === 'report'
                  ? 'Báo cáo'
                  : 'Yêu cầu'}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-2.5 px-3">Thời gian</th>
                  <th className="py-2.5 px-3">Hành động</th>
                  <th className="py-2.5 px-3">Đối tượng</th>
                  <th className="py-2.5 px-3">Người thực hiện</th>
                  <th className="py-2.5 px-3">Chi tiết</th>
                  <th className="py-2.5 px-3 text-right">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {auditLogs
                  .filter((log) => auditLogCategory === 'all' || log.category === auditLogCategory)
                  .map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition">
                      <td className="py-3 px-3 font-mono text-[11px] text-slate-500 whitespace-nowrap">
                        {log.timestamp}
                      </td>
                      <td className="py-3 px-3 font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                        {log.action}
                      </td>
                      <td className="py-3 px-3 text-slate-700 dark:text-slate-300 max-w-xs truncate">
                        {log.target}
                      </td>
                      <td className="py-3 px-3 text-indigo-600 dark:text-indigo-400 font-semibold whitespace-nowrap">
                        {log.performedBy}
                      </td>
                      <td className="py-3 px-3 text-slate-600 dark:text-slate-400 max-w-sm truncate">
                        {log.details}
                      </td>
                      <td className="py-3 px-3 text-right">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            log.status === 'success'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                              : log.status === 'warning'
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                              : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                          }`}
                        >
                          {log.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* SECTION 4: XUẤT BÁO CÁO CSV & TỔNG KẾT SƯ PHẠM */}
      {activeSection === 'export_reports' && (
        <div className="space-y-6 animate-in fade-in">
          <Card className="p-5 space-y-4">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-teal-600" />
                Trung tâm Xuất Báo cáo & Dữ liệu Nghiên cứu Chuyên đề 2
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Xuất file CSV/Excel bảng số liệu tổng hợp không chứa dữ liệu cá nhân (PII) và báo cáo sư phạm chính thức cho giáo viên.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Card 1: CSV / Excel Export */}
              <div className="p-4 rounded-2xl border border-teal-200 dark:border-teal-800 bg-teal-50/40 dark:bg-teal-950/20 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold">
                    <FileSpreadsheet className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                      Bảng Số liệu Thống kê CSV / Excel
                    </h3>
                    <p className="text-[11px] text-slate-500">Ẩn danh hóa 100% – Phù hợp phân tích dữ liệu</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Gồm 4 phần số liệu: Chỉ số hoạt động chung, tiến độ duyệt đề xuất, tổng hợp thử thách theo từng lớp khối 11 và top thuật ngữ mạng được quan tâm.
                </p>

                <div className="text-[11px] text-slate-500">
                  Áp dụng bộ lọc hiện tại: <strong>Thời gian [{timeFilter}]</strong> | <strong>Nhóm [{classFilter}]</strong>
                </div>

                <button
                  onClick={handleExportCSV}
                  className="w-full py-2 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải tệp CSV Thống kê</span>
                </button>
              </div>

              {/* Card 2: Pedagogical Text Report */}
              <div className="p-4 rounded-2xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/40 dark:bg-indigo-950/20 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                      Báo cáo Sư phạm Tổng kết Chuyên đề 2
                    </h3>
                    <p className="text-[11px] text-slate-500">Đầy đủ phần đánh giá, đề xuất & chữ ký giáo viên</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Văn bản mẫu chuẩn mực nộp cho Tổ bộ môn Ngữ văn và Ban Giám hiệu trường THCS & THPT Long Hiệp tổng kết hiệu quả Chuyên đề 2.
                </p>

                <div className="text-[11px] text-slate-500">
                  GV phụ trách: <strong>Thầy Trầm Thanh Tuấn</strong> (Trường Long Hiệp)
                </div>

                <button
                  onClick={handleExportPedagogicalReport}
                  className="w-full py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải Báo cáo Sư phạm (.txt)</span>
                </button>
              </div>

              {/* Card 3: Dictionary Backup JSON */}
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                      Sao lưu Dữ liệu Từ điển (JSON)
                    </h3>
                    <p className="text-[11px] text-slate-500">Toàn bộ {words.length} mục từ đã chuẩn hóa</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Xuất toàn bộ cấu trúc từ ngữ, nghĩa mạng, nghĩa gốc, ví dụ hội thoại học đường và hướng dẫn chuẩn mực học tập.
                </p>

                <button
                  onClick={handleExportJson}
                  className="w-full py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-blue-600" />
                  <span>Tải bản sao lưu JSON</span>
                </button>
              </div>

              {/* Card 4: Accounts Printable Slips */}
              <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                      Phiếu in Tài khoản Học sinh
                    </h3>
                    <p className="text-[11px] text-slate-500">Cấp phát cho từng lớp khảo sát thực địa</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Xuất danh sách mã học sinh, email trường cấp và mật khẩu khởi tạo để giáo viên phát cho học sinh lớp 11A1-11A4.
                </p>

                <button
                  onClick={handleExportAccountsSlips}
                  className="w-full py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-purple-600" />
                  <span>Tải phiếu in tài khoản</span>
                </button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* SECTION 4: 13 TABLES & SQL MIGRATION */}
      {activeSection === 'sql_migrations' && (
        <div className="space-y-6">
          <Card className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Kiến trúc 13 Bảng Dữ liệu Quan hệ (Relational Schema)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Chuẩn hóa toàn diện theo yêu cầu Chuyên đề 2: một từ nhiều nghĩa, nhiều ví dụ, khảo sát thực địa và phân quyền RLS.
                </p>
              </div>
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 rounded-full text-xs font-bold border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                RLS Kích hoạt 100%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {SUPABASE_TABLES_INFO.map((tbl, idx) => (
                <div
                  key={tbl.name}
                  className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-xs text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">
                      {idx + 1}. {tbl.name}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">UUID PK</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-800 dark:text-slate-200">
                    {tbl.vietnameseName}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">
                    {tbl.purpose}
                  </p>
                  <div className="pt-1 border-t border-slate-200/60 dark:border-slate-800/60 text-[10px] text-slate-500 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">RLS:</span> {tbl.rlsPolicy}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* SQL Viewer & Downloader */}
          <Card className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setActiveSqlTab('migration')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    activeSqlTab === 'migration'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  1. Migration chính (13 bảng)
                </button>
                <button
                  onClick={() => setActiveSqlTab('seed')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    activeSqlTab === 'seed'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  2. Dữ liệu mẫu (Seed an toàn)
                </button>
                <button
                  onClick={() => setActiveSqlTab('verify')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    activeSqlTab === 'verify'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  3. Kiểm tra tính toàn vẹn
                </button>
                <button
                  onClick={() => setActiveSqlTab('erd')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                    activeSqlTab === 'erd'
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  4. Sơ đồ thực thể ERD
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyText(getSqlContent(), activeSqlTab)}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedKey === activeSqlTab ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === activeSqlTab ? 'Đã sao chép!' : 'Sao chép nội dung'}</span>
                </button>

                <button
                  onClick={() => handleDownloadFile(getSqlContent(), getFilename(), activeSqlTab === 'erd' ? 'text/markdown' : 'application/sql')}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải {getFilename()}</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <pre className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto max-h-[440px] leading-relaxed select-all">
                {getSqlContent()}
              </pre>
            </div>
          </Card>
        </div>
      )}

      {/* SECTION 5: DUPLICATE TERM DETECTION SANDBOX */}
      {activeSection === 'duplicate_sandbox' && (
        <Card className="space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Search className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Công cụ Thử nghiệm Phát hiện Mục từ Trùng lặp
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Chuẩn hóa kép trên cả PostgreSQL và Client: <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-amber-600 font-mono">regexp_replace(lower(trim(unaccent(term))), '\\s+', ' ', 'g')</code>
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleRunDuplicateTest()}
                placeholder="Nhập từ cần thử (Ví dụ: Flex,   FLEX   , Flèx, Cột sống, Chữa lành...)"
                className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                onClick={handleRunDuplicateTest}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition cursor-pointer shadow-xs"
              >
                Kiểm tra trùng lặp
              </button>
            </div>

            {testResult && (
              <div
                className={`p-4 rounded-2xl border transition animate-in fade-in ${
                  testResult.isDuplicate
                    ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200'
                    : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  {testResult.isDuplicate ? (
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1.5 flex-1">
                    <div className="font-bold text-sm">
                      {testResult.isDuplicate
                        ? `PHÁT HIỆN TRÙNG LẶP: Đã tồn tại mục từ "${testResult.existingWord}" trong từ điển!`
                        : `MỤC TỪ HỢP LỆ: Chưa tồn tại trong từ điển, có thể xuất bản.`}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                      <div>
                        <span className="font-semibold text-slate-600">Chuỗi nhập:</span>{' '}
                        <code className="font-mono font-bold bg-white/70 px-1.5 py-0.5 rounded">"{testResult.tested}"</code>
                      </div>
                      <div>
                        <span className="font-semibold text-slate-600">Chuỗi sau chuẩn hóa:</span>{' '}
                        <code className="font-mono font-bold bg-white/70 px-1.5 py-0.5 rounded">"{testResult.normalized}"</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      )}

      {/* SECTION 6: SUPABASE CLOUD CONFIG */}
      {activeSection === 'database_config' && (
        <Card className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Cơ sở dữ liệu & Triển khai Đám mây (Tùy chọn)
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Trạng thái:{' '}
                  {supabaseConfig.connected ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      Đã kết nối Cloud ({supabaseConfig.url})
                    </span>
                  ) : (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      Đang chạy Chế độ Dùng thử Ngoại tuyến (Demo Mode - Sẵn sàng 100%)
                    </span>
                  )}
                </p>
              </div>
            </div>

            <button
              onClick={() => handleCopyText(MIGRATION_SQL, 'supabase_sql')}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 text-xs font-bold transition cursor-pointer self-start sm:self-auto"
            >
              {copiedKey === 'supabase_sql' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedKey === 'supabase_sql' ? 'Đã sao chép SQL!' : 'Sao chép mã SQL'}</span>
            </button>
          </div>

          {/* Demo Mode Reassurance Notice */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs space-y-2">
            <div className="font-bold flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-emerald-600" />
              Chế độ Dùng thử Ngoại tuyến (Offline Demo Mode) đang hoạt động:
            </div>
            <p className="leading-relaxed">
              Thầy Trầm Thanh Tuấn và học sinh <strong>KHÔNG CẦN</strong> nhập bất kỳ API Key hay URL nào để xem giao diện, tra cứu từ điển, làm thử thách tình huống hay kiểm thử phân quyền. Dữ liệu mẫu chuẩn mực của <strong>Chuyên đề 2 (Ngữ văn 11)</strong> đã được nạp sẵn cục bộ.
            </p>
            <p className="text-[11px] text-slate-600 dark:text-slate-400">
              * Biểu mẫu bên dưới chỉ sử dụng khi nhà trường sẵn sàng kết nối cơ sở dữ liệu đám mây chính thức để đồng bộ nhiều thiết bị.
            </p>
          </div>

          <form onSubmit={handleSaveSupabaseConfig} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <Server className="w-3.5 h-3.5 text-indigo-600" />
                  Supabase Project URL
                </label>
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="https://your-project.supabase.co"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 text-xs sm:text-sm font-mono text-slate-900 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                  <Key className="w-3.5 h-3.5 text-indigo-600" />
                  Supabase Anon Public API Key (Không lưu secret key!)
                </label>
                <input
                  type="password"
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 text-xs sm:text-sm font-mono text-slate-900 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-[11px] text-slate-500 leading-relaxed max-w-lg">
                * Chỉ lưu khóa công khai <code className="font-mono text-indigo-600 font-bold">anon key</code> trên frontend. Mọi phân quyền và giới hạn được kiểm soát tự động bởi chính sách RLS tại database.
              </p>
              <div className="flex items-center gap-2">
                {supabaseConfig.connected && (
                  <button
                    type="button"
                    onClick={handleClearSupabaseConfig}
                    className="px-4 py-2.5 rounded-xl border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-xs font-bold transition cursor-pointer"
                  >
                    Ngắt kết nối Cloud
                  </button>
                )}
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs transition cursor-pointer shadow-xs active:scale-95"
                >
                  Lưu cấu hình kết nối
                </button>
              </div>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
};
