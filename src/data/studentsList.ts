/**
 * NETWORD - Danh sách Học sinh Lớp 11 (Chuyên đề 2 Ngữ văn 11)
 * Trường THCS và THPT Long Hiệp - Xã Long Hiệp, Huyện Trà Cú, Tỉnh Trà Vinh
 * Giáo viên hướng dẫn: Thầy Trầm Thanh Tuấn
 * 
 * Nguồn: Danh sách học sinh chính thức theo hồ sơ lớp chuyên đề
 * Tổng số: 42 học sinh (38 đang học, 4 đã chuyển trường)
 */

export interface StudentRecord {
  stt: number;
  id: string;
  studentCode: string;
  lastName: string;       // Họ và chữ đệm
  firstName: string;      // Tên
  fullName: string;       // Họ và tên
  status: 'active' | 'transferred';
  transferNote?: string;
  role: 'student' | 'editor';
  className: string;
  school: string;
  email: string;
  initialPassword: string;
  points: number;
  badges: string[];
  solvedCount: number;
  suggestedCount: number;
}

export const CLASS_INFO = {
  name: 'Lớp 11 (Chuyên đề 2)',
  grade: 'Khối 11',
  subject: 'Ngữ văn 11 - Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại',
  school: 'Trường THCS và THPT Long Hiệp',
  district: 'Huyện Trà Cú, Tỉnh Trà Vinh',
  teacher: 'Thầy Trầm Thanh Tuấn',
  academicYear: '2025 - 2026',
  totalEnrolled: 42,
  activeCount: 38,
  transferredCount: 4,
};

export const RAW_STUDENTS_LIST: Omit<StudentRecord, 'id' | 'studentCode' | 'fullName' | 'email' | 'initialPassword' | 'className' | 'school' | 'points' | 'badges' | 'solvedCount' | 'suggestedCount'>[] = [
  { stt: 1, lastName: 'Thạch Minh', firstName: 'An', status: 'active', role: 'student' },
  { stt: 2, lastName: 'Lư Thị Trúc', firstName: 'Anh', status: 'active', role: 'student' },
  { stt: 3, lastName: 'Kim Thị Ngọc', firstName: 'Bích', status: 'active', role: 'student' },
  { stt: 4, lastName: 'Thạch Chí', firstName: 'Cường', status: 'active', role: 'student' },
  { stt: 5, lastName: 'Thạch Minh', firstName: 'Dàn', status: 'active', role: 'student' },
  { stt: 6, lastName: 'Thạch', firstName: 'Dinh', status: 'active', role: 'student' },
  { stt: 7, lastName: 'Thạch', firstName: 'Dinh', status: 'active', role: 'student' },
  { stt: 8, lastName: 'Phan Ngọc', firstName: 'Duyên', status: 'transferred', transferNote: 'Chuyển trường', role: 'student' },
  { stt: 9, lastName: 'Kim Ngọc', firstName: 'Dư', status: 'active', role: 'student' },
  { stt: 10, lastName: 'Lâm Sơn Khánh', firstName: 'Đông', status: 'active', role: 'editor' }, // Ban Biên tập
  { stt: 11, lastName: 'Thạch Thị Ngọc', firstName: 'Giàu', status: 'active', role: 'editor' }, // Ban Biên tập
  { stt: 12, lastName: 'Kim Thị Diễm', firstName: 'Hằng', status: 'active', role: 'student' },
  { stt: 13, lastName: 'Thạch Thị Diễm', firstName: 'Hằng', status: 'active', role: 'student' },
  { stt: 14, lastName: 'Thạch Hoàng', firstName: 'Hiếu', status: 'active', role: 'student' },
  { stt: 15, lastName: 'Nguyễn Phi', firstName: 'Hùng', status: 'active', role: 'student' },
  { stt: 16, lastName: 'Kim Nhật', firstName: 'Huy', status: 'active', role: 'student' },
  { stt: 17, lastName: 'Thạch Thị', firstName: 'Ka', status: 'active', role: 'student' },
  { stt: 18, lastName: 'Thạch Thị Trúc', firstName: 'Lan', status: 'active', role: 'student' },
  { stt: 19, lastName: 'Thạch Thiên', firstName: 'Lâm', status: 'active', role: 'student' },
  { stt: 20, lastName: 'Phạm Thị Thùy', firstName: 'Linh', status: 'active', role: 'student' },
  { stt: 21, lastName: 'Kiên Văn', firstName: 'Lợi', status: 'active', role: 'student' },
  { stt: 22, lastName: 'Thạch Thị Huỳnh', firstName: 'Mai', status: 'active', role: 'student' },
  { stt: 23, lastName: 'Kim Chăm', firstName: 'Nanl', status: 'active', role: 'student' },
  { stt: 24, lastName: 'Thạch Thị', firstName: 'Nga', status: 'active', role: 'student' },
  { stt: 25, lastName: 'Thạch Thị', firstName: 'Nhi', status: 'active', role: 'student' },
  { stt: 26, lastName: 'Huỳnh Ngọc', firstName: 'Như', status: 'transferred', transferNote: 'Chuyển trường', role: 'student' },
  { stt: 27, lastName: 'Kim Thị Tú', firstName: 'Như', status: 'active', role: 'student' },
  { stt: 28, lastName: 'Nguyễn Mai Nhựt', firstName: 'Phong', status: 'active', role: 'student' },
  { stt: 29, lastName: 'Kiên Ngọc Thành', firstName: 'Phú', status: 'transferred', transferNote: 'Chuyển trường', role: 'student' },
  { stt: 30, lastName: 'Kim Minh', firstName: 'Phương', status: 'active', role: 'student' }, // Sổ viết Kim Minh Phươn
  { stt: 31, lastName: 'Thạch Minh', firstName: 'Quý', status: 'active', role: 'student' },
  { stt: 32, lastName: 'Thạch Thị Thia', firstName: 'Ri', status: 'active', role: 'student' },
  { stt: 33, lastName: 'Thạch Ngọc', firstName: 'Thanh', status: 'active', role: 'student' },
  { stt: 34, lastName: 'Thạch Thị Thanh', firstName: 'Thảo', status: 'active', role: 'student' },
  { stt: 35, lastName: 'Châu Thị Minh', firstName: 'Thư', status: 'transferred', transferNote: 'Chuyển trường', role: 'student' },
  { stt: 36, lastName: 'Thạch Thị Anh', firstName: 'Thư', status: 'active', role: 'student' },
  { stt: 37, lastName: 'Thạch Thị Ngọc', firstName: 'Trân', status: 'active', role: 'student' },
  { stt: 38, lastName: 'Thạch Khánh', firstName: 'Vinh', status: 'active', role: 'student' },
  { stt: 39, lastName: 'Nguyễn Thị Tường', firstName: 'Vy', status: 'active', role: 'student' },
  { stt: 40, lastName: 'Thạch Kim Sa', firstName: 'Wane', status: 'active', role: 'editor' }, // Ban Biên tập
  { stt: 41, lastName: 'Kim Thị Như', firstName: 'Ý', status: 'active', role: 'student' },
  { stt: 42, lastName: 'Thạch Thị Ngọc', firstName: 'Yến', status: 'active', role: 'student' },
];

function removeVietnameseTones(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

export const STUDENTS_LIST: StudentRecord[] = RAW_STUDENTS_LIST.map((s) => {
  const codeNumber = String(s.stt).padStart(3, '0');
  const studentCode = `LH-11-${codeNumber}`;
  const fullName = `${s.lastName} ${s.firstName}`.trim();
  const cleanFirstName = removeVietnameseTones(s.firstName);
  const email = `${cleanFirstName}.lh11${codeNumber}@longhiep.edu.vn`;
  const initialPassword = `LongHiep@11${cleanFirstName.charAt(0).toUpperCase() + cleanFirstName.slice(1)}`;

  // Điểm tích lũy mẫu phù hợp theo vai trò và quá trình tham gia
  let points = 80 + ((s.stt * 7) % 150);
  let solvedCount = 2 + (s.stt % 5);
  let suggestedCount = s.stt % 3;
  if (s.role === 'editor') {
    points += 150;
    suggestedCount += 2;
  }
  if (s.status === 'transferred') {
    points = 0;
    solvedCount = 0;
    suggestedCount = 0;
  }

  const badges: string[] = ['Học viên Chuyên đề 2'];
  if (points >= 150) badges.push('Sứ giả Ngôn ngữ Văn minh');
  if (s.role === 'editor') badges.push('Ban Biên tập Lớp 11');
  if (s.status === 'transferred') badges.length = 0;

  return {
    ...s,
    id: `student-lh-11-${codeNumber}`,
    studentCode,
    fullName,
    className: CLASS_INFO.name,
    school: CLASS_INFO.school,
    email,
    initialPassword,
    points,
    badges,
    solvedCount,
    suggestedCount,
  };
});

export const ACTIVE_STUDENTS = STUDENTS_LIST.filter((s) => s.status === 'active');
export const TRANSFERRED_STUDENTS = STUDENTS_LIST.filter((s) => s.status === 'transferred');
export const EDITORS_STUDENTS = STUDENTS_LIST.filter((s) => s.role === 'editor' && s.status === 'active');
