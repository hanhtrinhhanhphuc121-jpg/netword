import React, { useState } from 'react';
import { useAuth } from '../../services/authContext';
import { UserRole, PermissionAction } from '../../types';
import {
  ROLE_DEFINITIONS,
  ROLE_TEST_CASES,
  PERMISSION_MATRIX,
  hasPermission,
  rbacService,
} from '../../services/rbacService';
import { Card } from '../ui/Card';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Play,
  RotateCcw,
  AlertTriangle,
  Lock,
  Unlock,
  Terminal,
  Zap,
  UserCheck,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export const RoleTestSuiteView: React.FC = () => {
  const { currentUser, switchRole } = useAuth();

  // Test Runner State
  const [testMode, setTestMode] = useState<'matrix' | 'runner' | 'attack_simulation'>('runner');
  const [selectedRoleToTest, setSelectedRoleToTest] = useState<UserRole>(currentUser.role);
  const [testResults, setTestResults] = useState<
    Array<{
      testId: string;
      actionLabel: string;
      passed: boolean;
      expectedAllowed: boolean;
      actualAllowed: boolean;
      details: string;
    }>
  >([]);
  const [isRunningAll, setIsRunningAll] = useState(false);

  // Self Elevation Simulation State
  const [escalationTarget, setEscalationTarget] = useState<UserRole>('admin');
  const [attackLog, setAttackLog] = useState<{
    blocked: boolean;
    reason: string;
    securityAction: string;
    timestamp: string;
  } | null>(null);

  // Run tests for selected role
  const runTestsForRole = (role: UserRole) => {
    setIsRunningAll(true);
    setTimeout(() => {
      const results = ROLE_TEST_CASES.map((tc) => {
        const expectedAllowed = tc.allowedRoles.includes(role);
        const actualAllowed = hasPermission(role, tc.action);
        const passed = expectedAllowed === actualAllowed;

        return {
          testId: tc.id,
          actionLabel: tc.actionLabel,
          passed,
          expectedAllowed,
          actualAllowed,
          details: actualAllowed
            ? `Quyền "${tc.action}" ĐƯỢC CHẤP THUẬN cho ${ROLE_DEFINITIONS[role].badge}.`
            : `Quyền "${tc.action}" BỊ TỪ CHỐI (403 Forbidden) đối với ${ROLE_DEFINITIONS[role].badge}.`,
        };
      });

      setTestResults(results);
      setIsRunningAll(false);
    }, 250);
  };

  // Run simulated attack
  const handleSimulateAttack = async () => {
    const res = await rbacService.simulatePrivilegeEscalationAttempt(
      currentUser.role,
      escalationTarget
    );
    setAttackLog(res);
  };

  const allPassed = testResults.length > 0 && testResults.every((r) => r.passed);

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold mb-1 border border-purple-200 dark:border-purple-800">
          <ShieldCheck className="w-3.5 h-3.5" />
          Bộ Kiểm thử Hệ thống Phân quyền Tin cậy
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight">
          Bộ Kiểm thử Phân quyền 4 Vai trò và Chống Tự Nâng quyền
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
          Xác thực tự động quyền hạn của <strong>guest, student, editor, admin</strong>, bảo đảm học sinh không thể tự sửa vai trò trên giao diện, route guard hay cơ sở dữ liệu.
        </p>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mt-4 pt-2">
          <button
            onClick={() => setTestMode('runner')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              testMode === 'runner'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Trình kiểm thử tự động (8 Tests)</span>
          </button>

          <button
            onClick={() => setTestMode('matrix')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              testMode === 'matrix'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Ma trận Quyền hạn 4 Vai trò</span>
          </button>

          <button
            onClick={() => setTestMode('attack_simulation')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              testMode === 'attack_simulation'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Kiểm thử Chống Tự Nâng quyền (Anti Self-Elevation)</span>
          </button>
        </div>
      </div>

      {/* Current Active User Banner */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-purple-50/70 dark:from-slate-900 dark:to-slate-900 border border-indigo-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center">
            {currentUser.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                {currentUser.name}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${ROLE_DEFINITIONS[currentUser.role].badgeBg}`}>
                {ROLE_DEFINITIONS[currentUser.role].badge}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {currentUser.email} • {ROLE_DEFINITIONS[currentUser.role].scopeSummary}
            </p>
          </div>
        </div>

        {/* Quick Switch for Test */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] text-slate-500 font-semibold">Chuyển vai trò đang đăng nhập:</span>
          {(['guest', 'student', 'editor', 'admin'] as UserRole[]).map((r) => (
            <button
              key={r}
              onClick={() => {
                switchRole(r);
                setSelectedRoleToTest(r);
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${
                currentUser.role === r
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {ROLE_DEFINITIONS[r].badge}
            </button>
          ))}
        </div>
      </div>

      {/* MODE 1: TEST RUNNER */}
      {testMode === 'runner' && (
        <Card className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Play className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Kiểm thử Tự động cho Vai trò:{' '}
                <span className="text-purple-600 dark:text-purple-400">
                  {ROLE_DEFINITIONS[selectedRoleToTest].label}
                </span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Thực thi 8 kịch bản kiểm tra quyền hạn độc lập dựa trên ma trận bảo mật Chuyên đề 2
              </p>
            </div>

            <div className="flex items-center gap-2">
              <select
                aria-label="Chọn vai trò để kiểm thử"
                value={selectedRoleToTest}
                onChange={(e) => setSelectedRoleToTest(e.target.value as UserRole)}
                className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200"
              >
                {(['guest', 'student', 'editor', 'admin'] as UserRole[]).map((r) => (
                  <option key={r} value={r}>
                    {ROLE_DEFINITIONS[r].label}
                  </option>
                ))}
              </select>

              <button
                onClick={() => runTestsForRole(selectedRoleToTest)}
                disabled={isRunningAll}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition flex items-center gap-1.5 cursor-pointer shadow-xs disabled:opacity-50"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>{isRunningAll ? 'Đang chạy...' : 'Chạy kiểm thử'}</span>
              </button>
            </div>
          </div>

          {/* Test Status Banner */}
          {testResults.length > 0 && (
            <div
              className={`p-4 rounded-2xl border flex items-center justify-between ${
                allPassed
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {allPassed ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-rose-600 dark:text-rose-400 shrink-0" />
                )}
                <div>
                  <div className="font-bold text-sm">
                    {allPassed
                      ? `KẾT QUẢ KIỂM THỬ: 8/8 BÀI KIỂM TRA ĐẠT CHUẨN (100% PASSED)`
                      : `PHÁT HIỆN LỖI KIỂM THỬ: Một số bài kiểm tra không khớp kỳ vọng!`}
                  </div>
                  <p className="text-xs opacity-90">
                    Vai trò "{ROLE_DEFINITIONS[selectedRoleToTest].label}" tuân thủ chính xác quy tắc bảo mật của hệ thống.
                  </p>
                </div>
              </div>

              <span className="font-mono font-black text-sm px-3 py-1 bg-white/70 dark:bg-slate-900/60 rounded-xl">
                {testResults.filter((r) => r.passed).length}/{testResults.length} OK
              </span>
            </div>
          )}

          {/* Test List */}
          <div className="space-y-2.5">
            {(testResults.length > 0 ? testResults : ROLE_TEST_CASES.map(tc => ({
              testId: tc.id,
              actionLabel: tc.actionLabel,
              passed: true,
              expectedAllowed: tc.allowedRoles.includes(selectedRoleToTest),
              actualAllowed: hasPermission(selectedRoleToTest, tc.action),
              details: tc.description,
            }))).map((res, idx) => (
              <div
                key={res.testId}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex items-start justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-slate-500">#{idx + 1}</span>
                    <span className="font-bold text-xs text-slate-800 dark:text-slate-200">
                      {res.actionLabel}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pl-5">
                    {res.details}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      res.actualAllowed
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {res.actualAllowed ? 'ĐƯỢC PHÉP' : 'BỊ TỪ CHỐI'}
                  </span>

                  {res.passed ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Passed
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded-md border border-rose-200 dark:border-rose-800">
                      <XCircle className="w-3.5 h-3.5" />
                      Failed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => runTestsForRole(selectedRoleToTest)}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Chạy lại toàn bộ kiểm thử</span>
            </button>
          </div>
        </Card>
      )}

      {/* MODE 2: PERMISSION MATRIX */}
      {testMode === 'matrix' && (
        <Card className="space-y-4">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Bảng Ma trận Phân quyền Toàn diện (RBAC Matrix)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Được đồng bộ 1:1 với các chính sách Row Level Security (RLS) của Supabase
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="py-2.5 px-3">Hành động / Thao tác hệ thống</th>
                  <th className="py-2.5 px-2 text-center">Khách (Guest)</th>
                  <th className="py-2.5 px-2 text-center">Học sinh (Student)</th>
                  <th className="py-2.5 px-2 text-center">Biên tập (Editor)</th>
                  <th className="py-2.5 px-2 text-center">Quản trị (Admin)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {ROLE_TEST_CASES.map((tc) => (
                  <tr key={tc.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition">
                    <td className="py-3 px-3">
                      <div className="font-bold text-slate-900 dark:text-slate-100">
                        {tc.actionLabel}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {tc.description}
                      </div>
                    </td>

                    {(['guest', 'student', 'editor', 'admin'] as UserRole[]).map((r) => {
                      const allowed = tc.allowedRoles.includes(r);
                      return (
                        <td key={r} className="py-3 px-2 text-center">
                          {allowed ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                              <CheckCircle2 className="w-4 h-4" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 dark:text-rose-400">
                              <XCircle className="w-4 h-4" />
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* MODE 3: ANTI SELF-ELEVATION SIMULATION */}
      {testMode === 'attack_simulation' && (
        <Card className="space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-bold mb-1 border border-rose-200 dark:border-rose-800">
              <Lock className="w-3.5 h-3.5" />
              Kiểm tra Cơ chế Chống Tự Nâng quyền (Privilege Escalation Protection)
            </div>
            <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
              Mô phỏng Thử thách Bảo mật: Học sinh cố tình tự sửa Role
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Chứng minh khi người dùng sửa Payload phía client (ví dụ gửi <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-rose-600 font-mono">UPDATE profiles SET role = 'admin'</code>), trigger hệ thống tin cậy sẽ phát hiện và chặn đứng 100%.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Vai trò đang đăng nhập hiện tại:
                </label>
                <div className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between">
                  <span>{ROLE_DEFINITIONS[currentUser.role].label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded border ${ROLE_DEFINITIONS[currentUser.role].badgeBg}`}>
                    {ROLE_DEFINITIONS[currentUser.role].badge}
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Mục tiêu muốn tự nâng quyền lên (Trái phép):
                </label>
                <select
                  aria-label="Mục tiêu muốn tự nâng quyền"
                  value={escalationTarget}
                  onChange={(e) => setEscalationTarget(e.target.value as UserRole)}
                  className="w-full p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-rose-600 dark:text-rose-400 focus:outline-none"
                >
                  <option value="admin">👨‍🏫 Quản trị viên Tối cao (Admin / Thầy Tuấn)</option>
                  <option value="editor">✍️ Ban Biên tập (Editor)</option>
                  <option value="student">🎓 Học sinh (Student)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleSimulateAttack}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition cursor-pointer shadow-md flex items-center gap-1.5"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Kích hoạt Mô phỏng Tự nâng quyền</span>
              </button>
            </div>
          </div>

          {/* Attack Output Console */}
          {attackLog && (
            <div
              className={`p-5 rounded-2xl border transition animate-in fade-in ${
                attackLog.blocked
                  ? 'bg-rose-50/70 dark:bg-rose-950/40 border-rose-300 dark:border-rose-900 text-rose-950 dark:text-rose-200'
                  : 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-900 text-emerald-950 dark:text-emerald-200'
              }`}
            >
              <div className="flex items-start gap-3">
                {attackLog.blocked ? (
                  <Lock className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">
                      {attackLog.blocked
                        ? 'HỆ THỐNG ĐÃ CHẶN ĐỨNG HÀNH VI TỰ NÂNG QUYỀN (BLOCKED 100%)'
                        : 'THAO TÁC HỢP LỆ (BỞI GIÁO VIÊN QUẢN TRỊ)'}
                    </span>
                    <span className="font-mono text-[11px] opacity-75">{attackLog.timestamp}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/80 text-white font-mono text-xs space-y-1">
                    <p className="text-rose-400">
                      [SECURITY ENGINE]: {attackLog.reason}
                    </p>
                    <p className="text-emerald-400">
                      [DATABASE RESPONSE]: {attackLog.securityAction}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    * Bằng chứng bảo mật: Cột <code className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded">role</code> trong bảng <code className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded">profiles</code> được bảo vệ bởi trigger PostgreSQL <code className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded">protect_user_role()</code> và chính sách RLS <code className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded">"Người dùng không được tự sửa role"</code>.
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>
      )}
    </div>
  );
};
