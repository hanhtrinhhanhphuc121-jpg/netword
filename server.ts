/**
 * NETWORD - Backend Server & Server-side Gemini AI Integration
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 */

import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Khởi tạo Gemini SDK theo chuẩn hệ thống
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Bộ lọc an toàn học đường phía máy chủ
const BANNED_PATTERNS = [
  /\bđù má\b/i,
  /\bđm\b/i,
  /\bvcl\b/i,
  /\bđcm\b/i,
  /\bcon đĩ\b/i,
  /\bthằng chó\b/i,
  /\bbạo lực\b/i,
  /\bđánh nhau\b/i,
];

function checkContentSafety(text: string): { safe: boolean; reason?: string } {
  for (const pattern of BANNED_PATTERNS) {
    if (pattern.test(text)) {
      return {
        safe: false,
        reason: 'Nội dung chứa từ ngữ không chuẩn mực học đường hoặc xúc phạm.',
      };
    }
  }
  return { safe: true };
}

// Endpoint: Diễn đạt phù hợp với AI (Server-side Gemini 3.8 Flash)
app.post('/api/expression/analyze', async (req, res) => {
  try {
    const { sentence, context } = req.body;

    if (!sentence || typeof sentence !== 'string') {
      return res.status(400).json({ error: 'Thiếu câu cần phân tích' });
    }

    // 1. Kiểm duyệt an toàn nội dung
    const safety = checkContentSafety(sentence);
    if (!safety.safe) {
      return res.status(400).json({
        error: safety.reason,
        safetyCheck: { passed: false, moderationNote: safety.reason },
      });
    }

    // 2. Nếu chưa có API Key, phản hồi mã 503 để client rơi về Quy tắc từ điển đã duyệt
    if (!ai || !process.env.GEMINI_API_KEY) {
      return res.status(503).json({
        error: 'Gemini API Key chưa được cấu hình. Sử dụng Quy tắc từ điển đã duyệt.',
      });
    }

    // 3. Xây dựng System Instruction tuân thủ nguyên tắc sư phạm của Thầy Trầm Thanh Tuấn
    const systemPrompt = `Bạn là Trợ lý Chuyên gia Sư phạm Ngữ văn 11 của Trường THCS và THPT Long Hiệp (Giáo viên phát triển: Thầy Trầm Thanh Tuấn).
Nhiệm vụ của bạn là hỗ trợ học sinh thực hiện Chuyên đề 2: "Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại".

NGUYÊN TẮC CỐT LÕI (BẮT BUỘC TUÂN THỦ):
1. Không khẳng định mọi tiếng lóng đều sai: Tiếng lóng trong giao tiếp bạn bè là hiện tượng ngôn ngữ tự nhiên lành mạnh; cần hướng dẫn cách dùng đúng lúc, đúng chỗ, đúng đối tượng (tính thích hợp của ngôn cảnh).
2. Không tự ý thay đổi ý nghĩa câu gốc: Phải giữ nguyên mục đích phát ngôn và tình cảm biểu đạt của người nói.
3. Nếu thiếu dữ liệu hoặc gặp từ ngữ lạ chưa kiểm chứng/chưa đủ căn cứ khoa học, PHẢI đặt "hasInsufficientData": true và giải thích rõ chưa đủ căn cứ.
4. Đầu ra phải là định dạng JSON hợp lệ theo cấu trúc sau:
{
  "suggestedExpression": "Câu diễn đạt gợi ý phù hợp với ngữ cảnh yêu cầu",
  "detectedTerms": [{"rawTerm": "từ lóng phát hiện", "replacement": "từ ngữ thay thế", "pedagogicalNuance": "sắc thái biểu cảm"}],
  "differenceExplanation": "Giải thích chi tiết sự khác biệt về phong cách ngôn ngữ, thanh điệu, ngữ vực và mức độ trang trọng",
  "pedagogicalNotes": ["Lưu ý sư phạm 1", "Lưu ý sư phạm 2"],
  "isAppropriateAsIs": false,
  "hasInsufficientData": false,
  "insufficientDataReason": ""
}`;

    const contextDescMap: Record<string, string> = {
      friend_chat: 'Trò chuyện với bạn bè (thân mật, tự nhiên, chấp nhận tiếng lóng vui tươi, không coi là sai)',
      social_comment: 'Bình luận mạng xã hội (văn minh, lịch sự, tôn trọng người đọc, có chừng mực)',
      teacher_exchange: 'Trao đổi với thầy cô (kính cẩn, lễ phép, dùng từ toàn dân chuẩn mực, tuyệt đối không chêm tiếng lóng)',
      class_announcement: 'Thông báo của lớp (rõ ràng, mạch lạc, tinh thần đoàn kết tập thể, tránh teencode)',
      academic_writing: 'Bài viết học tập / Văn nghị luận Ngữ văn 11 (học thuật, chuẩn xác, tiếng lóng chỉ xuất hiện trong ngoặc kép làm dẫn chứng khảo sát)',
    };

    const targetDesc = contextDescMap[context] || 'Giao tiếp chuẩn mực học đường';

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Ngữ cảnh mục tiêu: ${targetDesc}
Câu của học sinh: "${sentence}"
Hãy phân tích và đưa ra gợi ý cách diễn đạt phù hợp nhất.`,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: 'application/json',
      },
    });

    const responseText = response.text || '{}';
    let parsedData: any = {};
    try {
      parsedData = JSON.parse(responseText);
    } catch {
      parsedData = {
        suggestedExpression: sentence,
        differenceExplanation: 'Không thể phân tích định dạng phản hồi AI.',
        pedagogicalNotes: ['Đã có lỗi phân tích.'],
        hasInsufficientData: true,
      };
    }

    return res.json({
      id: `ai-${Date.now()}`,
      originalSentence: sentence,
      context,
      suggestedExpression: parsedData.suggestedExpression || sentence,
      detectedTerms: parsedData.detectedTerms || [],
      differenceExplanation: parsedData.differenceExplanation || '',
      pedagogicalNotes: parsedData.pedagogicalNotes || [],
      isAppropriateAsIs: !!parsedData.isAppropriateAsIs,
      hasInsufficientData: !!parsedData.hasInsufficientData,
      insufficientDataReason: parsedData.insufficientDataReason || '',
      sourceType: 'ai_generated',
      aiLabel: 'Gợi ý tự động từ AI (Đã qua bộ lọc kiểm soát nội dung học đường)',
      safetyCheck: { passed: true },
      analyzedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error('Gemini expression API error:', error);
    return res.status(500).json({
      error: 'Lỗi khi xử lý phản hồi từ AI.',
      details: error?.message,
    });
  }
});

// Khởi chạy Vite middleware trong môi trường dev hoặc phục vụ file tĩnh trong prod
async function start() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`NETWORD Server running on port ${PORT}`);
  });
}

start();
