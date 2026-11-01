const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const THEMES = [
  'Cảm xúc và tâm trạng',
  'Đánh giá và thái độ',
  'Tình yêu và quan hệ',
  'Bản sắc và lối sống',
  'Học tập và công việc',
  'Tương tác mạng xã hội',
  'Giải trí, game và fandom',
  'Tiêu dùng và phong cách',
  'Sức khỏe tinh thần và đời sống',
  'Meme và hài hước',
  'Biến thể chữ viết và viết tắt',
  'Xung đột và chuẩn mực mạng'
];

const STUDENTS = [
  'Thạch Minh An (11A1)',
  'Lư Thị Trúc Anh (11A1)',
  'Kim Thị Ngọc Bích (11A2)',
  'Thạch Chí Cường (11A2)',
  'Thạch Minh Dàn',
  'Lâm Sơn Khánh Đông (Ban Biên tập)',
  'Thạch Thị Ngọc Giàu (Ban Biên tập)',
  'Kim Thị Diễm Hằng',
  'Thạch Thị Diễm Hằng',
  'Thạch Hoàng Hiếu',
  'Nguyễn Phi Hùng',
  'Kim Nhật Huy',
  'Thạch Thị Ka',
  'Thạch Thị Trúc Lan',
  'Thạch Thiên Lâm',
  'Phạm Thị Thùy Linh',
  'Kiên Văn Lợi',
  'Thạch Thị Huỳnh Mai',
  'Kim Chăm Nanl',
  'Thạch Thị Nga',
  'Thạch Thị Nhi',
  'Kim Thị Tú Như',
  'Nguyễn Mai Nhựt Phong',
  'Kim Minh Phương',
  'Thạch Minh Quý',
  'Thạch Thị Thia Ri',
  'Thạch Ngọc Thanh',
  'Thạch Thị Thanh Thảo',
  'Thạch Thị Anh Thư',
  'Thạch Thị Ngọc Trân',
  'Thạch Khánh Vinh',
  'Nguyễn Thị Tường Vy',
  'Thạch Kim Sa Wane (Ban Biên tập)',
  'Kim Thị Như Ý',
  'Thạch Thị Ngọc Yến'
];

function normalizeWord(w) {
  return w.toLowerCase().replace(/[\s\-_]/g, '').trim();
}

// Simple extractor for existing initial words
function extractExistingWords() {
  const filePath = path.join(__dirname, '../src/data/initialWords.ts');
  const content = fs.readFileSync(filePath, 'utf8');
  const existingMap = new Map();

  // Find object blocks
  const regex = /\{\s*id:\s*['"](nw-[^'"]+)['"],\s*word:\s*['"]([^'"]+)['"][\s\S]*?(?=\n\s*\{\s*id:|\n\s*\];)/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const rawBlock = match[0];
    const word = match[2];
    
    // Extract fields
    const getField = (fieldName) => {
      const fMatch = rawBlock.match(new RegExp(`${fieldName}:\\s*['"]([^'"]*)['"]`));
      return fMatch ? fMatch[1] : undefined;
    };

    const pronunciation = getField('pronunciation');
    const category = getField('category');
    const literalMeaning = getField('literalMeaning');
    const origin = getField('origin');
    const academicGuidance = getField('academicGuidance');
    const schoolAppropriateness = getField('schoolAppropriateness');

    // Extract dialogueExample
    let dialogueExample = undefined;
    const dMatch = rawBlock.match(/dialogueExample:\s*(\[[\s\S]*?\]),\s*academicGuidance:/);
    if (dMatch) {
      try {
        // Safe evaluation of JSON-like array
        const jsonText = dMatch[1]
          .replace(/id:/g, '"id":')
          .replace(/sender:/g, '"sender":')
          .replace(/isMe:/g, '"isMe":')
          .replace(/text:/g, '"text":')
          .replace(/time:/g, '"time":')
          .replace(/avatar:/g, '"avatar":')
          .replace(/'/g, '"');
        dialogueExample = JSON.parse(jsonText);
      } catch (e) {
        // Skip parse error
      }
    }

    existingMap.set(normalizeWord(word), {
      word,
      pronunciation,
      category,
      literalMeaning,
      origin,
      academicGuidance,
      schoolAppropriateness,
      dialogueExample
    });
  }

  return existingMap;
}

async function main() {
  const pdfPath = path.join(__dirname, '../public/assets/aistudio/Tu_dien_300_tu_ngu_gioi_tre_NETWORD_d3fc30a3.pdf');
  const buf = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: new Uint8Array(buf) });
  const result = await parser.getText();

  const terms = [];
  for (let p = 0; p < 7; p++) {
    const lines = result.pages[p].text.split('\n').map(l => l.trim()).filter(Boolean);
    const startIdx = (p === 0) ? 1 : 0;
    for (let i = startIdx; i < lines.length; i++) {
      const match = lines[i].match(/^(\d+)\s+(NW-\d{4})\s+(.+)$/);
      if (match) {
        terms.push({ stt: parseInt(match[1]), code: match[2], word: match[3].trim() });
      }
    }
  }

  const meanings = [];
  for (let p = 7; p < 14; p++) {
    const lines = result.pages[p].text.split('\n').map(l => l.trim()).filter(Boolean);
    const startIdx = (p === 7) ? 1 : 0;
    for (let i = startIdx; i < lines.length; i++) {
      meanings.push(lines[i]);
    }
  }

  const examples = [];
  for (let p = 14; p < 21; p++) {
    const lines = result.pages[p].text.split('\n').map(l => l.trim()).filter(Boolean);
    const startIdx = (p === 14) ? 1 : 0;
    for (let i = startIdx; i < lines.length; i++) {
      const line = lines[i];
      let matchedTheme = null;
      let example = line;
      for (const t of THEMES) {
        if (line.endsWith(t)) {
          matchedTheme = t;
          example = line.substring(0, line.length - t.length).trim();
          break;
        }
      }
      examples.push({ example, theme: matchedTheme || 'Khác' });
    }
  }

  const metas = [];
  for (let p = 21; p < 28; p++) {
    const lines = result.pages[p].text.split('\n').map(l => l.trim()).filter(Boolean);
    const startIdx = (p === 21) ? 1 : 0;
    for (let i = startIdx; i < lines.length; i++) {
      metas.push(lines[i]);
    }
  }

  console.log(`Extracted terms: ${terms.length}, meanings: ${meanings.length}, examples: ${examples.length}, metas: ${metas.length}`);

  const existingMap = extractExistingWords();
  console.log(`Found ${existingMap.size} existing words in initialWords.ts for rich data merging.`);

  const entries = [];

  for (let i = 0; i < 300; i++) {
    const t = terms[i];
    const meaning = meanings[i];
    const { example, theme } = examples[i];
    const rawMeta = metas[i];
    const existing = existingMap.get(normalizeWord(t.word));

    let unitType = 'Từ / thuật ngữ';
    let sourceUrl = undefined;
    if (rawMeta.startsWith('Cụm từ')) {
      unitType = 'Cụm từ';
    } else if (rawMeta.startsWith('Mẫu câu')) {
      unitType = 'Mẫu câu / cụm cố định';
    } else if (rawMeta.startsWith('Từ viết tắt') || rawMeta.startsWith('Viết tắt')) {
      unitType = 'Từ viết tắt';
    }

    const urlMatch = rawMeta.match(/https?:\/\/[^\s]+/);
    if (urlMatch) {
      sourceUrl = urlMatch[0];
    }

    // Determine category
    let category = existing?.category || 'slang';
    if (!existing?.category) {
      if (theme === 'Biến thể chữ viết và viết tắt') {
        category = 'teencode';
      } else if (theme === 'Meme và hài hước' || theme === 'Tương tác mạng xã hội') {
        category = 'meme_trend';
      } else if (theme === 'Giải trí, game và fandom') {
        category = 'game_stream';
      } else if (theme === 'Học tập và công việc') {
        category = 'school';
      } else if (/^[A-Za-z\s]+$/.test(t.word) || ['Flex', 'Slay', 'Cringe', 'Red flag', 'Green flag', 'POV', 'Viral', 'Trend', 'Flop', 'Lowkey', 'Highkey', 'Toxic', 'Chill', 'Mood', 'Vibe', 'Healing', 'Ghosting', 'Simp', 'Stan', 'Flexing', 'Deal hời', 'Voucher', 'Stalk', 'Tag', 'Follow', 'Unfollow', 'Block', 'Spam', 'Doxxing', 'Body shaming', 'Shadowban'].includes(t.word)) {
        category = 'borrowed';
      }
    }

    // Determine school appropriateness
    let appropriateness = existing?.schoolAppropriateness || 'acceptable_casual';
    let standardScore = 3;
    let guidance = existing?.academicGuidance || '';

    if (!existing?.schoolAppropriateness) {
      if (theme === 'Xung đột và chuẩn mực mạng' || ['Toxic', 'Doxxing', 'Body shaming', 'Bóc phốt', 'Phốt', 'Ném đá', 'Report', 'Shadowban', 'Cyberbullying', 'Seeding bẩn', 'War', 'Flame war', 'Cà khịa'].some(k => t.word.toLowerCase().includes(k.toLowerCase()))) {
        appropriateness = 'forbidden_in_formal';
        standardScore = 1;
        guidance = 'Thuộc nhóm ngôn ngữ xung đột mạng hoặc hành vi tiêu cực. Tuyệt đối không sử dụng trong môi trường học đường chính quy, bài tập làm văn và thi cử; học sinh cần nhận diện để phòng tránh bạo lực mạng.';
      } else if (theme === 'Biến thể chữ viết và viết tắt') {
        appropriateness = 'strictly_informal';
        standardScore = 2;
        guidance = 'Dạng ký tự viết tắt hoặc biến âm tiện lợi khi gõ phím nhanh trên tin nhắn mạng. Tuyệt đối không dùng trong bài kiểm tra, bài thi, đơn từ chính thức.';
      } else if (theme === 'Học tập và công việc') {
        appropriateness = 'acceptable_casual';
        standardScore = 4;
        guidance = 'Thuật ngữ phản ánh sinh hoạt học tập, làm việc nhóm của học sinh hiện đại. Có thể trao đổi thân mật giữa bạn bè, nhưng cần diễn đạt chuẩn xác trong bài học.';
      } else if (theme === 'Đánh giá và thái độ' || theme === 'Meme và hài hước') {
        appropriateness = 'strictly_informal';
        standardScore = 2;
        guidance = 'Ngôn ngữ biểu cảm sinh động, hài hước trên mạng xã hội. Thích hợp trò chuyện giải trí ngoài giờ học; tránh lạm dụng làm loãng vốn từ tiếng Việt toàn dân.';
      } else {
        appropriateness = 'acceptable_casual';
        standardScore = 3;
        guidance = 'Từ ngữ phản ánh đời sống tâm lý, tình cảm phong phú của giới trẻ trên không gian số. Cần phân biệt rõ ngữ cảnh thân mật và ngữ cảnh trang trọng.';
      }
    }

    const s1 = STUDENTS[i % STUDENTS.length];
    const s2 = STUDENTS[(i + 7) % STUDENTS.length];

    const dialogue = existing?.dialogueExample && existing.dialogueExample.length >= 2
      ? existing.dialogueExample
      : [
          {
            id: `d-${t.code}-1`,
            sender: s1,
            isMe: false,
            text: example,
            time: `${14 + (i % 8)}:${String(10 + (i % 45)).padStart(2, '0')}`
          },
          {
            id: `d-${t.code}-2`,
            sender: s2,
            isMe: true,
            text: `Chuẩn luôn bạn ơi, từ "${t.word}" này phản ánh chính xác ngữ cảnh giới trẻ tụi mình!`,
            time: `${14 + (i % 8)}:${String(12 + (i % 45)).padStart(2, '0')}`
          }
        ];

    const id = `nw-${String(t.stt).padStart(4, '0')}`;
    const tags = ['Chuyên đề 2', theme, unitType];
    if (category === 'borrowed') tags.push('Từ mượn');
    if (category === 'teencode') tags.push('Từ viết tắt');
    if (category === 'meme_trend') tags.push('Meme & Xu hướng');
    if (t.word.includes('🚩')) tags.push('Biểu tượng cảm xúc');

    entries.push({
      id,
      officialCode: t.code,
      stt: t.stt,
      word: t.word,
      pronunciation: existing?.pronunciation || undefined,
      category,
      topicTheme: theme,
      unitType,
      sourceUrl,
      literalMeaning: existing?.literalMeaning || `Mục từ số ${t.stt} thuộc nhóm chủ đề: "${theme}" trong Chuyên đề 2 Ngữ văn 11.`,
      netMeaning: meaning,
      origin: existing?.origin || `Tài liệu khảo sát Chuyên đề 2 Ngữ văn 11 - Trường THCS và THPT Long Hiệp (Thầy Trầm Thanh Tuấn).`,
      dialogueExample: dialogue,
      academicGuidance: guidance,
      schoolAppropriateness: appropriateness,
      standardScore,
      tags,
      likesCount: 25 + ((i * 17) % 180),
      viewsCount: 150 + ((i * 47) % 1200),
      status: 'approved',
      author: 'Trầm Thanh Tuấn (GV Ngữ văn)',
      createdAt: '2025-02-15'
    });
  }

  const outPath = path.join(__dirname, '../src/data/netword300Entries.ts');
  const fileContent = `/**
 * NETWORD - Danh mục 300 mục từ chính thức từ Chuyên đề 2 Ngữ văn 11
 * Trường THCS và THPT Long Hiệp - Huyện Trà Cú, Trà Vinh
 * Giáo viên hướng dẫn & thẩm định: Thầy Trầm Thanh Tuấn
 * Trích xuất từ tài liệu chuẩn: Tu_dien_300_tu_ngu_gioi_tre_NETWORD.pdf
 * Đầy đủ 300 mã mục từ NW-0001 -> NW-0300 qua 12 Nhóm chủ đề (25 từ / nhóm).
 */

import type { WordEntry } from '../types';

export const NETWORD_TOPIC_THEMES = ${JSON.stringify(THEMES, null, 2)} as const;

export const NETWORD_300_ENTRIES: WordEntry[] = ${JSON.stringify(entries, null, 2)};
`;

  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully generated ${outPath} with ${entries.length} items!`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
