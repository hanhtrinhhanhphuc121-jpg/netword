/**
 * NETWORD – Phân hệ "Thử thách ngôn ngữ"
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển và Thẩm định: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 */

import React, { useState, useEffect } from 'react';
import {
  ChallengeQuestionItem,
  ChallengeQuestionType,
  ChallengeDifficulty,
  ChallengeAttempt,
  LearningBadge,
  ChallengeUserAnswer,
  MatchingPair,
} from '../../types/challenges';
import { ActiveTab } from '../../types';
import {
  challengeService,
  shuffleArray,
  shuffleQuestionOptions,
} from '../../services/challengeService';
import { QUESTION_TYPE_LABELS } from '../../data/challengeQuestions';
import { useAuth } from '../../services/authContext';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Award,
  CheckCircle2,
  XCircle,
  RefreshCw,
  ArrowRight,
  ShieldCheck,
  Layers,
  SearchCheck,
  Sparkles,
  HelpCircle,
  Lock,
  History,
  Settings,
  PlusCircle,
  Trash2,
  Star,
  Shuffle,
  ChevronRight,
  BookOpen,
  Filter,
  Check,
} from 'lucide-react';

interface ChallengesViewProps {
  onNavigate: (tab: ActiveTab) => void;
}

type ViewMode = 'quiz' | 'result' | 'badges' | 'history' | 'manage';

export const ChallengesView: React.FC<ChallengesViewProps> = ({ onNavigate }) => {
  const { currentUser, recordSolvedChallenge, openAuthModal } = useAuth();

  // Tab con trong phân hệ Thử thách
  const [viewMode, setViewMode] = useState<ViewMode>('quiz');

  // Cấu hình bài thử thách
  const [selectedTypeFilter, setSelectedTypeFilter] = useState<'all' | 'weekly' | ChallengeQuestionType>('weekly');
  const [shuffleEnabled, setShuffleEnabled] = useState<boolean>(true);

  // Bộ câu hỏi của phiên làm bài hiện tại
  const [activeQuestions, setActiveQuestions] = useState<ChallengeQuestionItem[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  // Trạng thái câu trả lời trắc nghiệm thông thường
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState<boolean>(false);

  // Trạng thái dạng Ghép từ với nghĩa (word_matching)
  const [selectedTermId, setSelectedTermId] = useState<string | null>(null);
  const [currentMatches, setCurrentMatches] = useState<Record<string, string>>({}); // termId -> meaningId

  // Lưu lại đáp án của học sinh qua từng câu
  const [sessionAnswers, setSessionAnswers] = useState<ChallengeUserAnswer[]>([]);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [latestAttempt, setLatestAttempt] = useState<ChallengeAttempt | null>(null);

  // Danh sách huy hiệu và lịch sử
  const [badges, setBadges] = useState<LearningBadge[]>([]);
  const [attempts, setAttempts] = useState<ChallengeAttempt[]>([]);

  // Dành cho giáo viên: quản lý câu hỏi
  const [managedQuestions, setManagedQuestions] = useState<ChallengeQuestionItem[]>([]);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // Form thêm câu hỏi mới
  const [newQType, setNewQType] = useState<ChallengeQuestionType>('slang_meaning');
  const [newQDifficulty, setNewQDifficulty] = useState<ChallengeDifficulty>('medium');
  const [newQTitle, setNewQTitle] = useState('');
  const [newQScenario, setNewQScenario] = useState('');
  const [newQQuestion, setNewQQuestion] = useState('');
  const [newQOptions, setNewQOptions] = useState<string[]>(['', '', '', '']);
  const [newQCorrectIdx, setNewQCorrectIdx] = useState<number>(0);
  const [newQExplanation, setNewQExplanation] = useState('');
  const [newQPoints, setNewQPoints] = useState<number>(20);
  const [newQUnit, setNewQUnit] = useState('Ngữ văn 11 - Chuyên đề 2: Ngôn ngữ trong đời sống hiện đại');
  const [newQIsWeekly, setNewQIsWeekly] = useState<boolean>(false);

  // Khởi tạo bài thi ban đầu
  useEffect(() => {
    loadQuestionsForSession(selectedTypeFilter);
    setBadges(challengeService.getBadges());
    if (currentUser.role !== 'guest') {
      setAttempts(challengeService.getAttempts(currentUser.id));
    }
    setManagedQuestions(challengeService.getQuestions());
  }, [currentUser]);

  // Nạp câu hỏi theo bộ lọc và áp dụng xáo trộn
  const loadQuestionsForSession = (filter: 'all' | 'weekly' | ChallengeQuestionType) => {
    let pool: ChallengeQuestionItem[] = [];
    if (filter === 'weekly') {
      pool = challengeService.getWeeklyChallengeQuestions();
    } else if (filter === 'all') {
      pool = challengeService.getQuestions();
    } else {
      pool = challengeService.getQuestionsByType(filter);
    }

    if (pool.length === 0) {
      pool = challengeService.getQuestions();
    }

    let processed: ChallengeQuestionItem[] = [...pool];
    if (shuffleEnabled) {
      processed = shuffleArray(processed).map((q) => {
        if (q.type !== 'word_matching' && q.options) {
          const { question } = shuffleQuestionOptions(q);
          return question;
        }
        return q;
      });
    }

    setActiveQuestions(processed);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsQuestionAnswered(false);
    setCurrentMatches({});
    setSelectedTermId(null);
    setSessionAnswers([]);
    setStartTime(Date.now());
  };

  const currentQ = activeQuestions[currentIdx];

  // Xử lý chọn đáp án trắc nghiệm thông thường
  const handleSelectOption = (idx: number) => {
    if (isQuestionAnswered || !currentQ || currentQ.type === 'word_matching') return;
    setSelectedOption(idx);
    setIsQuestionAnswered(true);

    const isCorrect = idx === currentQ.correctIndex;
    if (isCorrect) {
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    }

    const answerRecord: ChallengeUserAnswer = {
      questionId: currentQ.id,
      questionTitle: currentQ.title,
      type: currentQ.type,
      userAnswerIndex: idx,
      correctIndex: currentQ.correctIndex,
      isCorrect,
      explanation: currentQ.explanation,
      pointsAwarded: isCorrect ? currentQ.points : 0,
    };

    setSessionAnswers((prev) => [...prev, answerRecord]);
  };

  // Xử lý dạng Ghép từ với nghĩa (word_matching)
  const handleTermClick = (pairId: string) => {
    if (isQuestionAnswered) return;
    setSelectedTermId(pairId);
  };

  const handleMeaningClick = (meaningId: string) => {
    if (isQuestionAnswered || !selectedTermId) return;
    setCurrentMatches((prev) => ({
      ...prev,
      [selectedTermId]: meaningId,
    }));
    setSelectedTermId(null);
  };

  const handleResetMatching = () => {
    if (isQuestionAnswered) return;
    setCurrentMatches({});
    setSelectedTermId(null);
  };

  const handleSubmitMatching = () => {
    if (!currentQ || !currentQ.matchingPairs || isQuestionAnswered) return;

    // Kiểm tra xem tất cả các cặp có trùng ID không (vì id của term và meaning khớp nhau theo cấu trúc dữ liệu)
    const pairs = currentQ.matchingPairs;
    const isAllMatched = pairs.every((p) => currentMatches[p.id] !== undefined);
    if (!isAllMatched) {
      alert('Em hãy ghép nối đầy đủ tất cả các cặp từ với nghĩa trước khi nộp nhé!');
      return;
    }

    const isAllCorrect = pairs.every((p) => currentMatches[p.id] === p.id);
    setIsQuestionAnswered(true);

    if (isAllCorrect) {
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
    }

    const answerRecord: ChallengeUserAnswer = {
      questionId: currentQ.id,
      questionTitle: currentQ.title,
      type: currentQ.type,
      isCorrect: isAllCorrect,
      userMatching: { ...currentMatches },
      explanation: currentQ.explanation,
      pointsAwarded: isAllCorrect ? currentQ.points : 0,
    };

    setSessionAnswers((prev) => [...prev, answerRecord]);
  };

  // Chuyển sang câu tiếp theo hoặc nộp bài hoàn tất
  const handleNext = () => {
    if (currentIdx + 1 < activeQuestions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
      setIsQuestionAnswered(false);
      setCurrentMatches({});
      setSelectedTermId(null);
    } else {
      finishQuiz();
    }
  };

  // Hoàn tất và tính điểm bài thử thách
  const finishQuiz = () => {
    const timeSpent = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    const totalScore = sessionAnswers.reduce((sum, a) => sum + a.pointsAwarded, 0);
    const maxScore = activeQuestions.reduce((sum, q) => sum + q.points, 0);
    const correctCount = sessionAnswers.filter((a) => a.isCorrect).length;
    const percentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;
    const feedback = challengeService.generatePedagogicalFeedback(percentage, selectedTypeFilter);

    const attempt: ChallengeAttempt = {
      id: `att-${Date.now()}`,
      userId: currentUser.id,
      userName: currentUser.name,
      userRole: currentUser.role,
      mode: selectedTypeFilter,
      totalQuestions: activeQuestions.length,
      correctCount,
      totalScore,
      maxScore,
      percentage,
      pedagogicalFeedback: feedback,
      completedAt: new Date().toLocaleString('vi-VN'),
      timeSpentSeconds: timeSpent,
      answers: sessionAnswers,
    };

    setLatestAttempt(attempt);
    setViewMode('result');

    // Lưu điểm và lịch sử nếu người dùng đã có tài khoản
    if (currentUser.role !== 'guest') {
      challengeService.saveAttempt(attempt);
      recordSolvedChallenge(attempt.id, totalScore);
      setAttempts(challengeService.getAttempts(currentUser.id));
      setBadges(challengeService.getBadges());
    }

    if (percentage >= 70) {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
      });
    }
  };

  // Bắt sự kiện bàn phím phím tắt (A, B, C, D hoặc 1, 2, 3, 4; Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement instanceof HTMLInputElement ||
        document.activeElement instanceof HTMLTextAreaElement ||
        viewMode !== 'quiz'
      ) {
        return;
      }

      if (!isQuestionAnswered && currentQ && currentQ.type !== 'word_matching') {
        const key = e.key.toUpperCase();
        if (key === 'A' || key === '1') handleSelectOption(0);
        else if (key === 'B' || key === '2') handleSelectOption(1);
        else if (key === 'C' || key === '3') handleSelectOption(2);
        else if (key === 'D' || key === '4') handleSelectOption(3);
      } else if (isQuestionAnswered) {
        if (e.key === 'Enter') {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isQuestionAnswered, currentIdx, currentQ, viewMode]);

  // Xử lý tạo câu hỏi mới cho giáo viên
  const handleCreateQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQTitle.trim() || !newQQuestion.trim() || !newQExplanation.trim()) {
      alert('Vui lòng điền đầy đủ tiêu đề, câu hỏi và giải thích sư phạm!');
      return;
    }

    challengeService.addQuestion({
      title: newQTitle.trim(),
      type: newQType,
      difficulty: newQDifficulty,
      scenario: newQScenario.trim(),
      question: newQQuestion.trim(),
      options: newQType !== 'word_matching' ? newQOptions.filter((o) => o.trim()) : undefined,
      correctIndex: newQType !== 'word_matching' ? newQCorrectIdx : undefined,
      explanation: newQExplanation.trim(),
      points: Number(newQPoints) || 20,
      unitLesson: newQUnit.trim(),
      isWeeklyChallenge: newQIsWeekly,
      createdBy: `${currentUser.name} (${currentUser.role === 'admin' ? 'Thầy Tuấn' : 'Biên tập viên'})`,
    });

    setManagedQuestions(challengeService.getQuestions());
    setShowAddModal(false);
    // Reset form
    setNewQTitle('');
    setNewQScenario('');
    setNewQQuestion('');
    setNewQExplanation('');
    alert('Đã thêm câu hỏi mới thành công vào kho Thử thách ngôn ngữ!');
  };

  const difficultyBadgeColor: Record<ChallengeDifficulty, string> = {
    easy: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
    medium: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
    hard: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800',
  };

  const difficultyLabel: Record<ChallengeDifficulty, string> = {
    easy: 'Độ khó: Dễ',
    medium: 'Độ khó: Trung bình',
    hard: 'Độ khó: Thử thách',
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              Thử thách Chuyên đề 2 – Ngữ văn 11
            </span>
            <span className="text-xs bg-indigo-900/60 text-indigo-100 px-2.5 py-1 rounded-full border border-indigo-400/30 font-medium">
              Thầy Trầm Thanh Tuấn – THCS và THPT Long Hiệp
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Thử thách Ngôn ngữ Không gian mạng
          </h1>

          <p className="text-sm sm:text-base text-indigo-100 leading-relaxed">
            Rèn luyện 5 năng lực ngôn ngữ: <strong>Nghĩa của từ, Ghép từ ngữ, Ngữ cảnh thích hợp, Thẩm định tin cậy và Phòng chống bạo lực mạng</strong>.
          </p>

          {/* Cam kết bảo mật quyền riêng tư học đường và Lưu trữ cục bộ */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-200 bg-black/20 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 max-w-2xl">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-300 shrink-0" />
              <span>
                <strong>Bảo mật riêng tư và Lưu trữ cục bộ:</strong> Điểm số và huy hiệu được lưu trên trình duyệt thiết bị này (LocalStorage). Không công khai bảng xếp hạng ra ngoài.
              </span>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/20 text-white font-mono self-start sm:self-auto shrink-0">
              Chế độ Demo
            </span>
          </div>
        </div>

        {/* Ambient background glows */}
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-24 bottom-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Thanh điều hướng các chế độ của phân hệ Thử thách */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          <button
            onClick={() => setViewMode('quiz')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer shrink-0 ${
              viewMode === 'quiz' || viewMode === 'result'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <Trophy className="w-4 h-4" />
            Làm bài thử thách
          </button>

          <button
            onClick={() => setViewMode('badges')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer shrink-0 ${
              viewMode === 'badges'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <Award className="w-4 h-4 text-amber-500" />
            Huy hiệu học tập ({badges.filter((b) => b.isUnlocked).length}/{badges.length})
          </button>

          <button
            onClick={() => setViewMode('history')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer shrink-0 ${
              viewMode === 'history'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300'
            }`}
          >
            <History className="w-4 h-4" />
            Lịch sử làm bài
          </button>

          {/* Dành cho giáo viên / biên tập viên */}
          {(currentUser.role === 'admin' || currentUser.role === 'editor') && (
            <button
              onClick={() => setViewMode('manage')}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition flex items-center gap-2 cursor-pointer shrink-0 ${
                viewMode === 'manage'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 hover:border-purple-300'
              }`}
            >
              <Settings className="w-4 h-4" />
              Quản lý bộ câu hỏi (GV)
            </button>
          )}
        </div>

        {/* Nút bật/tắt Đảo câu hỏi và Phương án */}
        {viewMode === 'quiz' && (
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
            <Shuffle className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Đảo câu hỏi và đáp án:</span>
            <button
              onClick={() => {
                const nextVal = !shuffleEnabled;
                setShuffleEnabled(nextVal);
                loadQuestionsForSession(selectedTypeFilter);
              }}
              className={`px-2 py-0.5 rounded-md font-bold transition cursor-pointer ${
                shuffleEnabled
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                  : 'bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
              }`}
            >
              {shuffleEnabled ? 'Đang bật' : 'Tắt'}
            </button>
          </div>
        )}
      </div>

      {/* ============================================================ */}
      {/* VIEW 1: LÀM BÀI THỬ THÁCH (QUIZ PLAYER) */}
      {/* ============================================================ */}
      {viewMode === 'quiz' && (
        <div className="space-y-6">
          {/* Bộ lọc chọn chế độ thử thách */}
          <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-semibold">
            <span className="px-2 text-slate-400 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Chế độ:
            </span>

            <button
              onClick={() => {
                setSelectedTypeFilter('weekly');
                loadQuestionsForSession('weekly');
              }}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer flex items-center gap-1 ${
                selectedTypeFilter === 'weekly'
                  ? 'bg-amber-500 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Star className="w-3.5 h-3.5 text-amber-200 fill-amber-200" />
              Thử thách Tuần 8 (Khuyên làm)
            </button>

            <button
              onClick={() => {
                setSelectedTypeFilter('all');
                loadQuestionsForSession('all');
              }}
              className={`px-3 py-1.5 rounded-xl transition cursor-pointer ${
                selectedTypeFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Tất cả 5 dạng tổng hợp
            </button>

            {Object.keys(QUESTION_TYPE_LABELS).map((typeKey) => {
              const info = QUESTION_TYPE_LABELS[typeKey];
              const isSelected = selectedTypeFilter === typeKey;
              return (
                <button
                  key={typeKey}
                  onClick={() => {
                    setSelectedTypeFilter(typeKey as ChallengeQuestionType);
                    loadQuestionsForSession(typeKey as ChallengeQuestionType);
                  }}
                  className={`px-3 py-1.5 rounded-xl transition cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-xs font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {info.label}
                </button>
              );
            })}
          </div>

          {/* Thanh tiến trình và Điểm số phiên hiện tại */}
          {activeQuestions.length > 0 && currentQ && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    Câu hỏi {currentIdx + 1} / {activeQuestions.length}
                  </span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${difficultyBadgeColor[currentQ.difficulty]}`}>
                    {difficultyLabel[currentQ.difficulty]}
                  </span>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                    {QUESTION_TYPE_LABELS[currentQ.type]?.label || currentQ.type}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-bold">
                  <span className="text-slate-500">
                    Điểm câu: <strong className="text-indigo-600 dark:text-indigo-400">+{currentQ.points}</strong>
                  </span>
                  <span className="text-slate-500">
                    Đã tích lũy: <strong className="text-emerald-600 dark:text-emerald-400">{sessionAnswers.reduce((sum, a) => sum + a.pointsAwarded, 0)} đ</strong>
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentIdx + 1) / activeQuestions.length) * 100}%` }}
                />
              </div>

              {/* Scenario Context */}
              {currentQ.scenario && (
                <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed space-y-1">
                  <span className="font-bold text-indigo-700 dark:text-indigo-300 block text-xs uppercase tracking-wider">
                    Tình huống thực tiễn học đường:
                  </span>
                  <p>{currentQ.scenario}</p>
                </div>
              )}

              {/* Question Text */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                {currentQ.question}
              </h3>

              {/* ======================================================= */}
              {/* PHÂN DẠNG: DẠNG GHÉP TỪ VỚI NGHĨA (word_matching) */}
              {/* ======================================================= */}
              {currentQ.type === 'word_matching' && currentQ.matchingPairs && (
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Nhấn chọn 1 Từ ở cột trái rồi nhấn chọn Nghĩa tương ứng ở cột phải:</span>
                    <button
                      onClick={handleResetMatching}
                      disabled={isQuestionAnswered || Object.keys(currentMatches).length === 0}
                      className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline disabled:opacity-40 cursor-pointer"
                    >
                      Ghép lại từ đầu
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Cột trái: Danh sách Thuật ngữ */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Cột Từ ngữ mạng:
                      </span>
                      {currentQ.matchingPairs.map((pair) => {
                        const isSelected = selectedTermId === pair.id;
                        const isMatched = currentMatches[pair.id] !== undefined;
                        return (
                          <div
                            key={pair.id}
                            onClick={() => handleTermClick(pair.id)}
                            className={`p-3.5 rounded-2xl border text-sm font-bold transition cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 dark:border-indigo-400 ring-2 ring-indigo-500/20 text-indigo-700 dark:text-indigo-300'
                                : isMatched
                                ? 'border-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/40 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300'
                                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-slate-300'
                            }`}
                          >
                            <span>{pair.term}</span>
                            {isMatched && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                          </div>
                        );
                      })}
                    </div>

                    {/* Cột phải: Danh sách Ý nghĩa */}
                    <div className="space-y-2">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                        Cột Ý nghĩa tương ứng:
                      </span>
                      {currentQ.matchingPairs.map((pair) => {
                        const isTargeted = Object.values(currentMatches).includes(pair.id);
                        return (
                          <div
                            key={pair.id}
                            onClick={() => handleMeaningClick(pair.id)}
                            className={`p-3.5 rounded-2xl border text-xs sm:text-sm transition cursor-pointer flex items-center justify-between ${
                              isTargeted
                                ? 'border-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/40 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-medium'
                                : selectedTermId
                                ? 'border-dashed border-indigo-300 dark:border-indigo-700 bg-indigo-50/30 dark:bg-indigo-950/20 hover:bg-indigo-50'
                                : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-slate-300 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            <span>{pair.meaning}</span>
                            {isTargeted && <Check className="w-4 h-4 text-emerald-600" />}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {!isQuestionAnswered && (
                    <div className="pt-2">
                      <button
                        onClick={handleSubmitMatching}
                        className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition cursor-pointer"
                      >
                        Xác nhận nộp các cặp ghép ({Object.keys(currentMatches).length}/{currentQ.matchingPairs.length})
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* ======================================================= */}
              {/* PHÂN DẠNG: CÁC DẠNG TRẮC NGHIỆM THÔNG THƯỜNG */}
              {/* ======================================================= */}
              {currentQ.type !== 'word_matching' && currentQ.options && (
                <div className="space-y-2.5 pt-1">
                  {currentQ.options.map((option, idx) => {
                    const isSelected = selectedOption === idx;
                    const isCorrect = idx === currentQ.correctIndex;

                    let optionStyle =
                      'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40 text-slate-800 dark:text-slate-200';

                    if (isQuestionAnswered) {
                      if (isCorrect) {
                        optionStyle =
                          'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-semibold ring-1 ring-emerald-500';
                      } else if (isSelected) {
                        optionStyle =
                          'border-rose-400 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200';
                      } else {
                        optionStyle = 'opacity-40 border-slate-200 dark:border-slate-800';
                      }
                    } else if (isSelected) {
                      optionStyle =
                        'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-200 font-semibold ring-2 ring-indigo-500/20';
                    }

                    const optionLetters = ['A', 'B', 'C', 'D', 'E'];

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isQuestionAnswered}
                        className={`w-full p-4 rounded-2xl border text-left transition flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${optionStyle}`}
                      >
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${
                            isQuestionAnswered && isCorrect
                              ? 'bg-emerald-600 text-white'
                              : isQuestionAnswered && isSelected && !isCorrect
                              ? 'bg-rose-600 text-white'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          {optionLetters[idx] || idx + 1}
                        </span>

                        <span className="flex-1 text-sm leading-relaxed">{option}</span>

                        {isQuestionAnswered && isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {isQuestionAnswered && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Giải thích sau khi trả lời */}
              {isQuestionAnswered && (
                <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900/60 space-y-3 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <h4 className="font-bold text-sm text-indigo-950 dark:text-indigo-200">
                      Lời giải thích và Nhận định sư phạm (Thầy Trầm Thanh Tuấn)
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>

                  <div className="flex items-center justify-between text-xs text-indigo-700 dark:text-indigo-300 pt-1 border-t border-indigo-100 dark:border-indigo-900/60">
                    <span>
                      <strong>Tham chiếu:</strong> {currentQ.unitLesson}
                    </span>
                    <button
                      onClick={handleNext}
                      className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition flex items-center gap-1.5 cursor-pointer shadow-xs"
                    >
                      <span>
                        {currentIdx + 1 < activeQuestions.length ? 'Câu tiếp theo' : 'Xem kết quả tổng kết'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeQuestions.length === 0 && (
            <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500 space-y-3">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
              <p className="font-bold">Không tìm thấy câu hỏi trong phân mục này.</p>
              <button
                onClick={() => {
                  setSelectedTypeFilter('weekly');
                  loadQuestionsForSession('weekly');
                }}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs"
              >
                Về Thử thách Tuần
              </button>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* VIEW 2: MÀN HÌNH TỔNG KẾT SAU KHI NỘP BÀI (RESULT) */}
      {/* ============================================================ */}
      {viewMode === 'result' && latestAttempt && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-md text-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-400 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-200 dark:shadow-none">
              <Trophy className="w-10 h-10" />
            </div>

            <div className="space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950">
                Kết quả bài thử thách Chuyên đề 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
                {latestAttempt.percentage >= 80 ? '🎉 Xuất sắc vượt qua thử thách!' : 'Hoàn thành bài thử thách'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Thời gian làm bài: {latestAttempt.timeSpentSeconds} giây • Ngày nộp: {latestAttempt.completedAt}
              </p>
            </div>

            {/* Score Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60">
                <span className="text-xs text-slate-400 font-semibold block">Tổng điểm đạt</span>
                <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                  {latestAttempt.totalScore} / {latestAttempt.maxScore}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60">
                <span className="text-xs text-slate-400 font-semibold block">Tỷ lệ chính xác</span>
                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {latestAttempt.percentage}%
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-900/60">
                <span className="text-xs text-slate-400 font-semibold block">Số câu đúng</span>
                <span className="text-2xl font-black text-purple-600 dark:text-purple-400">
                  {latestAttempt.correctCount} / {latestAttempt.totalQuestions}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/60">
                <span className="text-xs text-slate-400 font-semibold block">Huy hiệu mới</span>
                <span className="text-2xl font-black text-amber-600 dark:text-amber-400">
                  {badges.filter((b) => b.isUnlocked).length}
                </span>
              </div>
            </div>

            {/* Nhận xét sư phạm chi tiết */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto text-left space-y-2">
              <div className="flex items-center gap-2 font-bold text-sm text-slate-800 dark:text-slate-200">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                Nhận xét sư phạm từ Giáo viên (Thầy Trầm Thanh Tuấn):
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {latestAttempt.pedagogicalFeedback}
              </p>
            </div>

            {/* Thông báo quyền riêng tư */}
            <div className="max-w-2xl mx-auto p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/50 border border-amber-200/60 dark:border-amber-900/60 text-xs text-amber-800 dark:text-amber-300 flex items-center justify-center gap-2">
              <Lock className="w-4 h-4 shrink-0" />
              <span>
                Điểm số này đã được lưu riêng tư vào hồ sơ học tập của em, hoàn toàn không công khai bảng xếp hạng.
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setViewMode('quiz');
                  loadQuestionsForSession(selectedTypeFilter);
                }}
                className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                Làm đề thử thách khác (Xáo trộn mới)
              </button>

              <button
                onClick={() => setViewMode('history')}
                className="px-5 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <History className="w-4 h-4 text-slate-500" />
                Xem lịch sử và xem lại chi tiết
              </button>

              <button
                onClick={() => onNavigate('expression')}
                className="px-5 py-3 rounded-2xl border border-indigo-200 text-indigo-700 dark:border-indigo-800 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 font-bold text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                Rèn luyện Diễn đạt phù hợp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* VIEW 3: HUY HIỆU HỌC TẬP (LEARNING BADGES) */}
      {/* ============================================================ */}
      {viewMode === 'badges' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  Hệ thống Huy hiệu Học tập NETWORD
                </h3>
                <p className="text-xs text-slate-500">
                  Hoàn thành các thử thách chuyên sâu để mở khóa danh hiệu Văn minh ngôn ngữ thời đại số.
                </p>
              </div>
              <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                {badges.filter((b) => b.isUnlocked).length} / {badges.length} Đã mở khóa
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {badges.map((b) => (
                <div
                  key={b.id}
                  className={`p-5 rounded-3xl border transition relative overflow-hidden ${
                    b.isUnlocked
                      ? 'border-amber-300 bg-gradient-to-br from-amber-50/60 to-white dark:from-slate-900 dark:to-slate-800/80 shadow-xs'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 opacity-70'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-2xl shrink-0 ${
                        b.isUnlocked
                          ? 'bg-amber-500 text-white shadow-md shadow-amber-200 dark:shadow-none'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                      }`}
                    >
                      {b.isUnlocked ? '🏅' : '🔒'}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{b.name}</h4>
                        {b.isUnlocked ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                            Đã đạt được
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium text-slate-400">Chưa đạt</span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {b.description}
                      </p>
                      <div className="pt-1 text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
                        <strong>Điều kiện:</strong> {b.requirement}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* VIEW 4: LỊCH SỬ LÀM BÀI (ATTEMPT HISTORY) */}
      {/* ============================================================ */}
      {viewMode === 'history' && (
        <div className="space-y-6">
          {currentUser.role === 'guest' ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-center space-y-4 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                  Lưu trữ kết quả và Lịch sử học tập
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Hiện bạn đang ở chế độ <strong>Khách vãng lai (Guest)</strong>. Đăng nhập bằng tài khoản học sinh Long Hiệp để lưu lịch sử làm bài, tích lũy điểm và mở khóa các huy hiệu học tập.
                </p>
              </div>
              <button
                onClick={() => openAuthModal('login')}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md hover:bg-indigo-700 transition cursor-pointer"
              >
                Đăng nhập tài khoản trường
              </button>
            </div>
          ) : attempts.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border border-slate-200 dark:border-slate-800 text-center text-slate-400 space-y-3">
              <History className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold">Chưa có lượt làm bài nào được lưu.</p>
              <button
                onClick={() => setViewMode('quiz')}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
              >
                Bắt đầu làm bài thử thách ngay
              </button>
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Lịch sử thử thách cá nhân ({attempts.length} lượt)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Học sinh: {currentUser.name} • {currentUser.studentCode || 'THPT Long Hiệp'}
                  </p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold">
                  Riêng tư 100%
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {attempts.map((att) => (
                  <div
                    key={att.id}
                    className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                          {att.mode === 'weekly' ? 'Thử thách Tuần' : 'Luyện tập tổng hợp'}
                        </span>
                        <span className="text-xs text-slate-400">{att.completedAt}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-sm font-black text-indigo-600 dark:text-indigo-400">
                          {att.totalScore} / {att.maxScore} đ ({att.percentage}%)
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-md font-bold ${
                            att.percentage >= 80
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {att.correctCount}/{att.totalQuestions} đúng
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 italic border-l-2 border-indigo-400 pl-3">
                      "{att.pedagogicalFeedback}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ============================================================ */}
      {/* VIEW 5: QUẢN LÝ BỘ CÂU HỎI (DÀNH CHO GIÁO VIÊN và BIÊN TẬP VIÊN) */}
      {/* ============================================================ */}
      {viewMode === 'manage' && (currentUser.role === 'admin' || currentUser.role === 'editor') && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-purple-600" />
                  Bảng quản lý bộ câu hỏi Thử thách (Giáo viên)
                </h3>
                <p className="text-xs text-slate-500">
                  Thầy Trầm Thanh Tuấn có quyền thêm mới, chỉnh sửa, chọn câu hỏi thử thách tuần hoặc xóa câu hỏi.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => challengeService.resetToDefaultQuestions()}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  Khôi phục bộ chuẩn của trường
                </button>

                <button
                  onClick={() => setShowAddModal(true)}
                  className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold shadow-sm hover:bg-purple-700 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  Thêm câu hỏi mới
                </button>
              </div>
            </div>

            {/* Danh sách câu hỏi */}
            <div className="space-y-3 pt-2">
              {managedQuestions.map((q, idx) => (
                <div
                  key={q.id}
                  className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{q.title}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        {QUESTION_TYPE_LABELS[q.type]?.label || q.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          challengeService.toggleWeeklyChallenge(q.id);
                          setManagedQuestions([...challengeService.getQuestions()]);
                        }}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition cursor-pointer flex items-center gap-1 ${
                          q.isWeeklyChallenge
                            ? 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-300'
                            : 'bg-white dark:bg-slate-800 text-slate-500 border-slate-200'
                        }`}
                        title="Đặt làm câu hỏi trong Thử thách tuần"
                      >
                        <Star className={`w-3 h-3 ${q.isWeeklyChallenge ? 'fill-amber-500 text-amber-500' : ''}`} />
                        <span>{q.isWeeklyChallenge ? 'Thử thách Tuần' : 'Luyện tập'}</span>
                      </button>

                      <button
                        onClick={() => {
                          if (confirm(`Thầy/Cô có chắc chắn muốn xóa câu hỏi "${q.title}" không?`)) {
                            challengeService.deleteQuestion(q.id);
                            setManagedQuestions([...challengeService.getQuestions()]);
                          }
                        }}
                        className="text-slate-400 hover:text-rose-600 transition p-1 cursor-pointer"
                        title="Xóa câu hỏi"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {q.question}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-200/60 dark:border-slate-700/60">
                    <span>
                      Điểm: <strong>{q.points}</strong> • {difficultyLabel[q.difficulty]}
                    </span>
                    <span>Tác giả: {q.createdBy}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Thêm câu hỏi mới */}
          {showAddModal && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl my-8 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <PlusCircle className="w-5 h-5 text-purple-600" />
                    Thêm câu hỏi Thử thách mới (Ngữ văn 11)
                  </h3>
                  <button
                    onClick={() => setShowAddModal(false)}
                    className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                  >
                    ✕ Đóng
                  </button>
                </div>

                <form onSubmit={handleCreateQuestion} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="font-bold block mb-1">Dạng câu hỏi:</label>
                      <select
                        value={newQType}
                        onChange={(e) => setNewQType(e.target.value as ChallengeQuestionType)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                      >
                        <option value="slang_meaning">1. Chọn đúng ý nghĩa của từ</option>
                        <option value="context_appropriate">2. Chọn cách diễn đạt phù hợp tình huống</option>
                        <option value="reliable_info">3. Phân biệt thông tin đáng tin cậy</option>
                        <option value="harm_recognition">4. Nhận diện ngôn từ gây tổn thương</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold block mb-1">Mức độ khó:</label>
                      <select
                        value={newQDifficulty}
                        onChange={(e) => setNewQDifficulty(e.target.value as ChallengeDifficulty)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                      >
                        <option value="easy">Dễ (20 điểm)</option>
                        <option value="medium">Trung bình (25 điểm)</option>
                        <option value="hard">Thử thách (30 điểm)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-bold block mb-1">Tiêu đề câu hỏi:</label>
                    <input
                      type="text"
                      value={newQTitle}
                      onChange={(e) => setNewQTitle(e.target.value)}
                      placeholder="Ví dụ: Phân biệt giữa phản biện sắc bén và bạo lực mạng..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="font-bold block mb-1">Bối cảnh / Tình huống thực tế:</label>
                    <textarea
                      value={newQScenario}
                      onChange={(e) => setNewQScenario(e.target.value)}
                      rows={2}
                      placeholder="Mô tả tình huống trong đoạn chat, sân trường hoặc bài đăng mạng..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                    />
                  </div>

                  <div>
                    <label className="font-bold block mb-1">Nội dung câu hỏi:</label>
                    <input
                      type="text"
                      value={newQQuestion}
                      onChange={(e) => setNewQQuestion(e.target.value)}
                      placeholder="Câu hỏi đặt ra cho học sinh..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                      required
                    />
                  </div>

                  {/* 4 Phương án lựa chọn */}
                  <div className="space-y-2">
                    <label className="font-bold block">4 Phương án trả lời (chọn nút tròn cho đáp án đúng):</label>
                    {newQOptions.map((opt, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="correctOption"
                          checked={newQCorrectIdx === idx}
                          onChange={() => setNewQCorrectIdx(idx)}
                          className="w-4 h-4 text-purple-600"
                        />
                        <span className="font-bold text-xs w-4">{String.fromCharCode(65 + idx)}</span>
                        <input
                          type="text"
                          value={opt}
                          onChange={(e) => {
                            const updated = [...newQOptions];
                            updated[idx] = e.target.value;
                            setNewQOptions(updated);
                          }}
                          placeholder={`Nội dung phương án ${String.fromCharCode(65 + idx)}...`}
                          className="flex-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                          required
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="font-bold block mb-1">Lời giải thích và Nhận định sư phạm:</label>
                    <textarea
                      value={newQExplanation}
                      onChange={(e) => setNewQExplanation(e.target.value)}
                      rows={3}
                      placeholder="Giải thích vì sao đáp án đúng và liên hệ chuẩn mực Chuyên đề 2..."
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs"
                      required
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold">
                      <input
                        type="checkbox"
                        checked={newQIsWeekly}
                        onChange={(e) => setNewQIsWeekly(e.target.checked)}
                        className="w-4 h-4 rounded text-purple-600"
                      />
                      <span>Đưa ngay vào bộ "Thử thách Tuần này"</span>
                    </label>
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <button
                      type="button"
                      onClick={() => setShowAddModal(false)}
                      className="px-4 py-2 rounded-xl text-slate-500 text-xs font-semibold"
                    >
                      Hủy bỏ
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition"
                    >
                      Lưu và xuất bản câu hỏi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
