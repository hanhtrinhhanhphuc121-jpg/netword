/**
 * NETWORD – Chức năng "Diễn đạt phù hợp"
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 */

import React, { useState } from 'react';
import {
  ExpressionContext,
  ExpressionAnalysisResult,
  SampleExpressionPrompt,
} from '../../types/expression';
import {
  CONTEXT_DEFINITIONS,
  SAMPLE_PROMPTS,
  analyzeAppropriateExpression,
  requestAIAssistedExpression,
} from '../../services/expressionAdvisorService';
import { ActiveTab } from '../../types';
import {
  Sparkles,
  Users,
  MessageSquare,
  GraduationCap,
  Megaphone,
  BookMarked,
  Copy,
  Check,
  AlertTriangle,
  Info,
  ShieldCheck,
  Bot,
  Lightbulb,
  ArrowRight,
  RotateCcw,
  BookOpen,
  PlusCircle,
} from 'lucide-react';

interface AppropriateExpressionViewProps {
  onNavigate: (tab: ActiveTab, wordId?: string) => void;
}

export const AppropriateExpressionView: React.FC<AppropriateExpressionViewProps> = ({ onNavigate }) => {
  const [inputText, setInputText] = useState<string>(
    'Hôm nay em xin phép cô cho em cook sớm vì cột sống em bất ổn quá ạ.'
  );
  const [selectedContext, setSelectedContext] = useState<ExpressionContext>('teacher_exchange');
  const [analysisResult, setAnalysisResult] = useState<ExpressionAnalysisResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [analysisMode, setAnalysisMode] = useState<'rules' | 'ai'>('rules');

  const contextIcons: Record<ExpressionContext, React.ReactNode> = {
    friend_chat: <Users className="w-5 h-5" />,
    social_comment: <MessageSquare className="w-5 h-5" />,
    teacher_exchange: <GraduationCap className="w-5 h-5" />,
    class_announcement: <Megaphone className="w-5 h-5" />,
    academic_writing: <BookMarked className="w-5 h-5" />,
  };

  const handleSelectSample = (sample: SampleExpressionPrompt) => {
    setInputText(sample.sentence);
    setSelectedContext(sample.suggestedContext);
    setAnalysisResult(null);
  };

  const handleSampleUncataloged = () => {
    setInputText('Cả lớp hôm nay làm bài thi trông rất skibidi và rizz luôn á!');
    setSelectedContext('class_announcement');
    setAnalysisResult(null);
  };

  const handleAnalyze = async (mode: 'rules' | 'ai' = 'rules') => {
    if (!inputText.trim()) return;

    setLoading(true);
    setAnalysisMode(mode);
    try {
      if (mode === 'ai') {
        const res = await requestAIAssistedExpression(inputText, selectedContext);
        setAnalysisResult(res);
      } else {
        // Mô phỏng độ trễ nhẹ tạo cảm giác xử lý mượt mà
        await new Promise((r) => setTimeout(r, 200));
        const res = analyzeAppropriateExpression(inputText, selectedContext);
        setAnalysisResult(res);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const currentContextDef = CONTEXT_DEFINITIONS[selectedContext];

  return (
    <div className="space-y-8 pb-20">
      {/* Banner Giới thiệu Chức năng Sư phạm */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Chuyên đề 2 – Ngữ văn 11
            </span>
            <span className="text-xs bg-indigo-900/60 text-indigo-100 px-2.5 py-1 rounded-full border border-indigo-400/30 font-medium">
              GV: Thầy Trầm Thanh Tuấn – THCS & THPT Long Hiệp
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Diễn đạt phù hợp theo ngữ cảnh
          </h1>

          <p className="text-sm sm:text-base text-indigo-100 leading-relaxed">
            Chuyển hóa câu có từ ngữ mạng sang cách diễn đạt chuẩn mực theo 5 hoàn cảnh giao tiếp học đường.
            <strong className="text-white block mt-1 font-semibold">
              "Không khẳng định mọi tiếng lóng đều sai – Ngôn ngữ là công cụ sống động, cốt lõi là sử dụng đúng lúc, đúng chỗ và đúng đối tượng."
            </strong>
          </p>

          <div className="pt-2 flex flex-wrap gap-2 text-xs text-indigo-200">
            <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg">
              <Check className="w-3.5 h-3.5 text-emerald-300" /> Giữ nguyên ý nghĩa câu gốc
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg">
              <Check className="w-3.5 h-3.5 text-emerald-300" /> Căn cứ từ điển & quy tắc đã duyệt
            </span>
            <span className="flex items-center gap-1 bg-white/10 px-2.5 py-1 rounded-lg">
              <Check className="w-3.5 h-3.5 text-emerald-300" /> Gắn nhãn AI & kiểm soát nội dung
            </span>
          </div>
        </div>

        {/* Decorative background glows */}
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-24 bottom-0 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Cột trái: Khối nhập liệu & Chọn ngữ cảnh (7 cột) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Bước 1: Nhập câu */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-black">
                  1
                </span>
                Nhập câu có từ ngữ mạng / tiếng lóng:
              </label>
              <span className="text-xs text-slate-400">
                {inputText.length} ký tự
              </span>
            </div>

            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows={3}
                placeholder="Ví dụ: Hôm nay em xin phép cô cho em cook sớm vì cột sống em bất ổn quá..."
                className="w-full px-4 py-3 text-sm sm:text-base rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 focus:bg-white dark:focus:bg-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-slate-100 transition resize-none placeholder:text-slate-400"
              />
              {inputText && (
                <button
                  onClick={() => setInputText('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs px-2 py-1 rounded-md bg-slate-200/60 dark:bg-slate-700/60 transition"
                  title="Xóa nội dung"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Các câu mẫu gợi ý để học sinh thử nhanh */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                  Câu mẫu khảo sát học sinh (chọn để thử ngay):
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_PROMPTS.map((sp) => (
                  <button
                    key={sp.id}
                    onClick={() => handleSelectSample(sp)}
                    className="text-xs px-3 py-1.5 rounded-xl border border-indigo-100 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 hover:border-indigo-300 transition text-left cursor-pointer"
                  >
                    <span className="font-semibold block">{sp.description}</span>
                    <span className="text-[11px] opacity-75 truncate max-w-[240px] block">
                      "{sp.sentence}"
                    </span>
                  </button>
                ))}
                {/* Nút thử từ lạ để kiểm chứng tính năng: "Nếu thiếu dữ liệu, báo rõ chưa đủ căn cứ" */}
                <button
                  onClick={handleSampleUncataloged}
                  className="text-xs px-3 py-1.5 rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition text-left cursor-pointer"
                >
                  <span className="font-semibold block">⚠️ Thử nghiệm từ chưa duyệt</span>
                  <span className="text-[11px] opacity-75 truncate max-w-[240px] block">
                    "skibidi, rizz..." (Kiểm tra báo thiếu căn cứ)
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Bước 2: Chọn 1 trong 5 ngữ cảnh giao tiếp */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <label className="text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xs font-black">
                2
              </span>
              Chọn ngữ cảnh giao tiếp mục tiêu:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(Object.keys(CONTEXT_DEFINITIONS) as ExpressionContext[]).map((ctxKey) => {
                const def = CONTEXT_DEFINITIONS[ctxKey];
                const isSelected = selectedContext === ctxKey;

                return (
                  <div
                    key={ctxKey}
                    onClick={() => {
                      setSelectedContext(ctxKey);
                      setAnalysisResult(null);
                    }}
                    className={`p-3.5 rounded-2xl border transition cursor-pointer text-left relative ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/80 dark:bg-indigo-950/60 dark:border-indigo-500 shadow-sm ring-2 ring-indigo-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-indigo-600 text-white shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        {contextIcons[ctxKey]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100 truncate">
                            {def.label}
                          </h4>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {def.shortDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Thông tin ngữ cảnh đang chọn */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-indigo-700 dark:text-indigo-300 font-semibold">
                <Info className="w-3.5 h-3.5 shrink-0" />
                <span>Yêu cầu phong cách: {currentContextDef.tone}</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                <strong>Đối tượng tiếp nhận:</strong> {currentContextDef.targetAudience}
              </p>
            </div>
          </div>

          {/* Các nút bấm hành động */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => handleAnalyze('rules')}
              disabled={loading || !inputText.trim()}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-bold text-sm shadow-md shadow-indigo-300/40 dark:shadow-none transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loading && analysisMode === 'rules' ? (
                <RotateCcw className="w-4 h-4 animate-spin" />
              ) : (
                <ShieldCheck className="w-4 h-4" />
              )}
              Gợi ý theo Quy tắc biên tập đã duyệt
            </button>

            <button
              onClick={() => handleAnalyze('ai')}
              disabled={loading || !inputText.trim()}
              className="w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-purple-600 hover:bg-purple-700 active:scale-[0.99] text-white font-bold text-sm shadow-md shadow-purple-300/40 dark:shadow-none transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              title="Sử dụng mô hình AI (Gemini 3.8 Flash) kết hợp kiểm duyệt nội dung học đường"
            >
              {loading && analysisMode === 'ai' ? (
                <RotateCcw className="w-4 h-4 animate-spin" />
              ) : (
                <Bot className="w-4 h-4 text-purple-200" />
              )}
              <span>Gợi ý bằng AI (Gemini)</span>
            </button>
          </div>
        </div>

        {/* Cột phải: Khối Kết Quả Hiển Thị 4 Nội Dung Bắt Buộc (5 cột) */}
        <div className="lg:col-span-5 space-y-6">
          {!analysisResult && !loading && (
            <div className="h-full min-h-[380px] bg-white dark:bg-slate-900 rounded-3xl p-8 border border-dashed border-slate-300 dark:border-slate-800 flex flex-col items-center justify-center text-center text-slate-400 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="max-w-xs space-y-1">
                <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
                  Sẵn sàng gợi ý diễn đạt
                </h3>
                <p className="text-xs text-slate-500">
                  Nhập câu hoặc chọn một câu mẫu ở bên trái rồi nhấn nút gợi ý để xem phân tích ngữ cảnh chi tiết.
                </p>
              </div>
            </div>
          )}

          {loading && (
            <div className="h-full min-h-[380px] bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
              <div className="space-y-1">
                <p className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                  Đang đối chiếu kho từ điển và quy tắc sư phạm...
                </p>
                <p className="text-xs text-slate-500">
                  {analysisMode === 'ai'
                    ? 'Đang gửi qua bộ lọc an toàn và mô hình AI học đường...'
                    : 'Đang áp dụng tiêu chuẩn Chuyên đề 2 (Thầy Trầm Thanh Tuấn)...'}
                </p>
              </div>
            </div>
          )}

          {analysisResult && !loading && (
            <div className="space-y-4">
              {/* Thẻ kiểm tra an toàn nếu thất bại */}
              {!analysisResult.safetyCheck.passed && (
                <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-200 text-sm space-y-1">
                  <div className="flex items-center gap-2 font-bold">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    Cảnh báo kiểm soát nội dung học đường
                  </div>
                  <p className="text-xs">{analysisResult.safetyCheck.moderationNote}</p>
                </div>
              )}

              {/* Thẻ Báo rõ Chưa đủ căn cứ từ điển (Yêu cầu nghiệp vụ) */}
              {analysisResult.hasInsufficientData && (
                <div className="p-5 rounded-3xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200 space-y-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-bold text-sm">
                        Chưa đủ căn cứ từ điển đã duyệt
                      </h4>
                      <p className="text-xs leading-relaxed">
                        {analysisResult.differenceExplanation}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-amber-200/60 dark:border-amber-900/60 flex items-center justify-between">
                    <span className="text-[11px] text-amber-700 dark:text-amber-300 font-medium">
                      Bảo đảm chuẩn xác khoa học học đường
                    </span>
                    <button
                      onClick={() => onNavigate('suggest')}
                      className="text-xs px-3 py-1.5 rounded-xl bg-amber-600 text-white font-bold hover:bg-amber-700 transition flex items-center gap-1 cursor-pointer"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      Gửi đề xuất từ mới
                    </button>
                  </div>
                </div>
              )}

              {/* KHỐI KẾT QUẢ CHÍNH THEO 4 YÊU CẦU: CÂU GỐC, GỢI Ý, KHÁC BIỆT, LƯU Ý */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-md space-y-5">
                {/* Header nhãn nguồn gốc phân tích */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    {analysisResult.sourceType === 'ai_generated' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                        <Bot className="w-3 h-3" />
                        Gợi ý tự động từ AI (Đã kiểm duyệt)
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        Quy tắc sư phạm đã duyệt (Thầy Tuấn)
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Ngữ cảnh: {currentContextDef.label}
                  </span>
                </div>

                {/* YÊU CẦU 1: CÂU GỐC */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-400" />
                    1. Câu gốc:
                  </span>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 text-sm text-slate-800 dark:text-slate-200 font-medium">
                    "{analysisResult.originalSentence}"
                  </div>

                  {/* Nhãn từ ngữ mạng đã phát hiện */}
                  {analysisResult.detectedTerms.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      <span className="text-[11px] text-slate-400">Từ mạng phát hiện:</span>
                      {analysisResult.detectedTerms.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-xs font-bold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
                        >
                          {t.rawTerm}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* YÊU CẦU 2: CÁCH DIỄN ĐẠT GỢI Ý */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-600" />
                      2. Cách diễn đạt gợi ý:
                    </span>
                    <button
                      onClick={() => handleCopy(analysisResult.suggestedExpression)}
                      className="text-xs flex items-center gap-1 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition cursor-pointer"
                      title="Sao chép câu gợi ý"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Đã chép!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50/40 to-blue-50 dark:from-indigo-950/60 dark:via-purple-950/30 dark:to-slate-800 border border-indigo-200 dark:border-indigo-800 text-sm sm:text-base font-semibold text-indigo-950 dark:text-indigo-100 shadow-xs relative">
                    "{analysisResult.suggestedExpression}"
                  </div>

                  {analysisResult.isAppropriateAsIs && (
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-1.5 font-medium border border-emerald-200 dark:border-emerald-800">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>
                        Câu gốc của bạn đã hoàn toàn phù hợp và tự nhiên trong giao tiếp bạn bè!
                      </span>
                    </div>
                  )}
                </div>

                {/* YÊU CẦU 3: GIẢI THÍCH SỰ KHÁC BIỆT */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    3. Giải thích sự khác biệt:
                  </span>
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {analysisResult.differenceExplanation}
                  </div>
                </div>

                {/* YÊU CẦU 4: NHỮNG ĐIỂM CẦN LƯU Ý (SƯ PHẠM NGỮ VĂN 11) */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    4. Những điểm cần lưu ý:
                  </span>
                  <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-900/60 space-y-2">
                    {analysisResult.pedagogicalNotes.map((note, nIdx) => (
                      <div key={nIdx} className="flex items-start gap-2 text-xs text-purple-950 dark:text-purple-200">
                        <ArrowRight className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{note}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phím tắt liên kết nhanh vào từ điển */}
                <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onNavigate('dictionary')}
                    className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Tra cứu thêm mục từ trong Từ điển
                  </button>
                  <button
                    onClick={() => onNavigate('suggest')}
                    className="text-slate-500 dark:text-slate-400 hover:text-indigo-600 flex items-center gap-1 cursor-pointer"
                  >
                    <PlusCircle className="w-3.5 h-3.5" />
                    Đóng góp từ mới
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
