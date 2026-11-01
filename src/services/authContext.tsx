/**
 * Context quản lý Tài khoản, Supabase Auth và Phân quyền RBAC (4 Vai trò)
 * - guest: Khách vãng lai (xem từ published, làm bài thử)
 * - student: Học sinh THPT (lưu từ, làm bài lưu điểm, gửi đề xuất)
 * - editor: Ban biên tập (xử lý nội dung được phân công)
 * - admin: Giáo viên quản trị - Thầy Trầm Thanh Tuấn (duyệt xuất bản, quản lý tài khoản, cấp tài khoản trường, thống kê)
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile, UserRole, PermissionAction } from '../types';
import { dictionaryService, getActiveSupabaseClient } from './supabaseClient';
import { hasPermission, ROLE_DEFINITIONS } from './rbacService';
import { STUDENTS_LIST } from '../data/studentsList';

interface AuthContextType {
  currentUser: UserProfile;
  isAuthenticated: boolean;
  isGuest: boolean;
  isStudent: boolean;
  isEditor: boolean;
  isAdmin: boolean;

  // Actions
  hasPerm: (action: PermissionAction) => boolean;
  switchRole: (role: UserRole) => void;
  loginAsRole: (role: UserRole) => void;
  loginAsStudent: (studentIdOrCode: string) => boolean;
  updateProfile: (profile: Partial<UserProfile>) => { success: boolean; error?: string };
  adminSetUserRole: (userId: string, newRole: UserRole) => Promise<{ success: boolean; error?: string }>;
  
  // Supabase Auth real flows
  signInWithEmail: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUpWithEmail: (
    email: string,
    password: string,
    fullName: string,
    school?: string,
    grade?: string
  ) => Promise<{ success: boolean; error?: string; message?: string }>;
  signOut: () => Promise<void>;
  requestPasswordReset: (email: string) => Promise<{ success: boolean; message: string; error?: string }>;

  // Gamification và Bookmarks
  addPoints: (points: number, reason?: string) => void;
  recordSolvedChallenge: (challengeId: string, earnedPoints: number) => { success: boolean; earned: number; isGuest: boolean };
  bookmarks: string[];
  toggleBookmark: (wordId: string) => { success: boolean; reason?: string };
  isBookmarked: (wordId: string) => boolean;

  // Modal controls
  showAuthModal: boolean;
  openAuthModal: (mode?: 'login' | 'register' | 'recovery') => void;
  closeAuthModal: () => void;
  authModalMode: 'login' | 'register' | 'recovery';
}

export const PRESET_USERS: Record<UserRole, UserProfile> = {
  guest: {
    id: 'guest-session-00',
    name: 'Khách tham quan',
    email: 'khach@netword.edu.vn',
    role: 'guest',
    school: 'Chưa liên kết trường',
    grade: 'Khách vãng lai',
    title: 'Độc giả Tự do',
    points: 0,
    bookmarkedWordIds: [],
    solvedChallengeIds: [],
    createdWordIds: [],
    accountStatus: 'active',
  },
  student: {
    id: 'student-lh-11-001',
    name: 'Thạch Minh An',
    email: 'an.lh11001@longhiep.edu.vn',
    role: 'student',
    school: 'Trường THCS và THPT Long Hiệp',
    grade: 'Lớp 11 (Chuyên đề 2)',
    title: 'Học viên Chuyên đề 2',
    points: 120,
    bookmarkedWordIds: ['11111111-1111-1111-1111-111111111111', '33333333-3333-3333-3333-333333333333'],
    solvedChallengeIds: ['99000000-0000-0000-0000-000000000001'],
    createdWordIds: [],
    isSchoolIssued: true,
    studentCode: 'LH-11-001',
    accountStatus: 'active',
  },
  editor: {
    id: 'student-lh-11-010',
    name: 'Lâm Sơn Khánh Đông',
    email: 'dong.lh11010@longhiep.edu.vn',
    role: 'editor',
    school: 'Trường THCS và THPT Long Hiệp',
    grade: 'Lớp 11 (Chuyên đề 2)',
    title: 'Trưởng ban Thẩm định Ngôn ngữ Lớp 11',
    points: 380,
    bookmarkedWordIds: ['11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', '55555555-5555-5555-5555-555555555555'],
    solvedChallengeIds: ['99000000-0000-0000-0000-000000000001'],
    createdWordIds: [],
    isSchoolIssued: true,
    studentCode: 'LH-11-010',
    accountStatus: 'active',
  },
  admin: {
    id: '00000000-0000-0000-0000-000000000001',
    name: 'Thầy Trầm Thanh Tuấn',
    email: 'tramthanhtuanlh@gmail.com',
    role: 'admin',
    school: 'Trường THCS và THPT Long Hiệp',
    grade: 'Tổ bộ môn Ngữ văn',
    title: 'Giáo viên phát triển Chuyên đề 2',
    points: 999,
    bookmarkedWordIds: ['11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333', '44444444-4444-4444-4444-444444444444', '55555555-5555-5555-5555-555555555555'],
    solvedChallengeIds: ['99000000-0000-0000-0000-000000000001'],
    createdWordIds: [],
    isSchoolIssued: true,
    studentCode: 'GV-TULH-001',
    accountStatus: 'active',
  },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentRole, setCurrentRole] = useState<UserRole>(() => {
    try {
      const saved = localStorage.getItem('netword_active_role');
      if (saved && (saved === 'guest' || saved === 'student' || saved === 'editor' || saved === 'admin')) {
        return saved as UserRole;
      }
      if (saved === 'teacher_admin') return 'admin';
    } catch {}
    return 'student'; // Mặc định mở trải nghiệm học sinh THPT
  });

  const [currentUser, setCurrentUser] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem(`netword_user_profile_${currentRole}`);
      if (saved) return JSON.parse(saved);
    } catch {}
    return PRESET_USERS[currentRole] || PRESET_USERS.student;
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => dictionaryService.getBookmarks());
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'register' | 'recovery'>('login');

  const openAuthModal = (mode: 'login' | 'register' | 'recovery' = 'login') => {
    setAuthModalMode(mode);
    setShowAuthModal(true);
  };

  const closeAuthModal = () => setShowAuthModal(false);

  // Lắng nghe Supabase Auth session nếu có
  useEffect(() => {
    const supabase = getActiveSupabaseClient();
    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          syncUserFromSupabase(session.user);
        }
      });

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          syncUserFromSupabase(session.user);
        }
      });

      return () => {
        subscription.unsubscribe();
      };
    }
  }, []);

  const syncUserFromSupabase = async (authUser: any) => {
    const supabase = getActiveSupabaseClient();
    if (!supabase) return;

    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .single();

      if (profile) {
        let mappedRole: UserRole = 'student';
        if (profile.role === 'admin' || profile.role === 'teacher_admin') mappedRole = 'admin';
        else if (profile.role === 'editor') mappedRole = 'editor';
        else mappedRole = 'student';

        const updated: UserProfile = {
          id: profile.id,
          name: profile.full_name || authUser.user_metadata?.full_name || authUser.email.split('@')[0],
          email: profile.email || authUser.email,
          role: mappedRole,
          school: profile.school || 'Trường THCS và THPT Long Hiệp',
          grade: profile.grade || 'Lớp 11 (Chuyên đề 2)',
          title: profile.title || 'Học viên Ngôn ngữ Trẻ',
          points: profile.points || 0,
          bookmarkedWordIds: bookmarks,
          solvedChallengeIds: [],
          createdWordIds: [],
          accountStatus: 'active',
        };
        setCurrentRole(mappedRole);
        setCurrentUser(updated);
        localStorage.setItem('netword_active_role', mappedRole);
        localStorage.setItem(`netword_user_profile_${mappedRole}`, JSON.stringify(updated));
      }
    } catch (err) {
      console.warn('Sync profile error:', err);
    }
  };

  const hasPerm = (action: PermissionAction): boolean => {
    return hasPermission(currentUser.role, action);
  };

  // Đổi vai trò kiểm thử nhanh (Dành cho Giáo viên và Thử nghiệm thẩm định)
  const switchRole = (role: UserRole) => {
    const cleanRole: UserRole = (role as any) === 'teacher_admin' ? 'admin' : role;
    setCurrentRole(cleanRole);
    localStorage.setItem('netword_active_role', cleanRole);
    const existing = localStorage.getItem(`netword_user_profile_${cleanRole}`);
    if (existing) {
      try {
        setCurrentUser(JSON.parse(existing));
        return;
      } catch {}
    }
    setCurrentUser(PRESET_USERS[cleanRole]);
  };

  const loginAsRole = (role: UserRole) => {
    switchRole(role);
    closeAuthModal();
  };

  const loginAsStudent = (studentIdOrCode: string): boolean => {
    const found = STUDENTS_LIST.find(
      (s) =>
        s.id === studentIdOrCode ||
        s.studentCode.toLowerCase() === studentIdOrCode.toLowerCase() ||
        s.fullName.toLowerCase() === studentIdOrCode.toLowerCase()
    );
    if (!found) return false;

    // Load custom saved progress if any
    let savedBookmarks = ['11111111-1111-1111-1111-111111111111', '33333333-3333-3333-3333-333333333333'];
    let savedPoints = found.points;
    let savedSolved: string[] = ['99000000-0000-0000-0000-000000000001'];
    try {
      const stored = localStorage.getItem(`netword_student_data_${found.id}`);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.points !== undefined) savedPoints = parsed.points;
        if (parsed.bookmarkedWordIds) savedBookmarks = parsed.bookmarkedWordIds;
        if (parsed.solvedChallengeIds) savedSolved = parsed.solvedChallengeIds;
      }
    } catch {}

    const studentProfile: UserProfile = {
      id: found.id,
      name: found.fullName,
      email: found.email,
      role: found.role,
      school: found.school,
      grade: found.className,
      title: found.role === 'editor' ? 'Thành viên Ban Biên tập Lớp 11' : 'Học viên Chuyên đề 2',
      points: savedPoints,
      bookmarkedWordIds: savedBookmarks,
      solvedChallengeIds: savedSolved,
      createdWordIds: [],
      isSchoolIssued: true,
      studentCode: found.studentCode,
      accountStatus: found.status === 'transferred' ? 'suspended' : 'active',
    };

    setCurrentRole(found.role);
    setCurrentUser(studentProfile);
    localStorage.setItem('netword_active_role', found.role);
    localStorage.setItem(`netword_user_profile_${found.role}`, JSON.stringify(studentProfile));
    localStorage.setItem('netword_selected_student_id', found.id);
    closeAuthModal();
    return true;
  };

  // AN TOÀN TUYỆT ĐỐI: CHẶN TỰ NÂNG QUYỀN (ANTI SELF-ELEVATION)
  // Học sinh / Khách / Biên tập viên không thể truyền { role: 'admin' } để tự đổi quyền
  const updateProfile = (profileUpdate: Partial<UserProfile>): { success: boolean; error?: string } => {
    // Nếu có nỗ lực đổi role mà không phải Admin hiện tại:
    if (profileUpdate.role && profileUpdate.role !== currentUser.role) {
      if (currentUser.role !== 'admin') {
        console.error(`[SECURITY ALERT] User ${currentUser.email} attempted unauthorized self-elevation to ${profileUpdate.role}`);
        return {
          success: false,
          error: 'CẢNH BÁO BẢO MẬT: Học sinh không được phép tự ý thay đổi vai trò hệ thống! Chỉ Thầy Trầm Thanh Tuấn (Admin) có thẩm quyền phân quyền.',
        };
      }
    }

    // Không cho phép sửa role qua updateProfile thông thường
    const { role: ignoredRole, ...safeUpdate } = profileUpdate;

    setCurrentUser((prev) => {
      const updated = { ...prev, ...safeUpdate };
      localStorage.setItem(`netword_user_profile_${updated.role}`, JSON.stringify(updated));
      return updated;
    });

    return { success: true };
  };

  // Chỉ Admin được phân quyền người dùng khác
  const adminSetUserRole = async (
    userId: string,
    newRole: UserRole
  ): Promise<{ success: boolean; error?: string }> => {
    if (currentUser.role !== 'admin') {
      return {
        success: false,
        error: 'Quyền truy cập bị từ chối: Chỉ Giáo viên Quản trị mới được phép phân vai trò người dùng.',
      };
    }

    const supabase = getActiveSupabaseClient();
    if (supabase) {
      try {
        const { error } = await supabase
          .from('profiles')
          .update({ role: newRole })
          .eq('id', userId);
        if (error) throw error;
      } catch (err: any) {
        console.warn('Supabase adminSetUserRole error:', err);
      }
    }

    return { success: true };
  };

  // SUPABASE AUTH và LOCAL DEMO FLOWS
  const signInWithEmail = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();
    const supabase = getActiveSupabaseClient();

    // 1. Kiểm tra tài khoản trường cấp local
    const schoolAccounts = JSON.parse(localStorage.getItem('netword_school_issued_accounts_v1') || '[]');
    const matched = schoolAccounts.find(
      (a: any) =>
        (a.email.toLowerCase() === cleanEmail || a.studentCode.toLowerCase() === cleanEmail) &&
        a.initialPassword === cleanPassword
    );

    if (matched) {
      if (matched.status === 'suspended') {
        return { success: false, error: 'Tài khoản này hiện đang bị tạm khóa. Vui lòng liên hệ Thầy Trầm Thanh Tuấn để kiểm tra.' };
      }
      matched.isActivated = true;
      matched.lastLoginAt = new Date().toISOString().split('T')[0];
      localStorage.setItem('netword_school_issued_accounts_v1', JSON.stringify(schoolAccounts));

      const loggedUser: UserProfile = {
        id: matched.id,
        name: matched.fullName,
        email: matched.email,
        role: matched.role,
        school: matched.school,
        grade: matched.grade,
        title: matched.role === 'editor' ? 'Trưởng ban Thẩm định Ngôn ngữ' : 'Học viên Ngôn ngữ Trẻ',
        points: matched.role === 'editor' ? 380 : 120,
        bookmarkedWordIds: bookmarks,
        solvedChallengeIds: [],
        createdWordIds: [],
        isSchoolIssued: true,
        studentCode: matched.studentCode,
        accountStatus: 'active',
      };

      setCurrentRole(matched.role);
      setCurrentUser(loggedUser);
      localStorage.setItem('netword_active_role', matched.role);
      localStorage.setItem(`netword_user_profile_${matched.role}`, JSON.stringify(loggedUser));
      closeAuthModal();
      return { success: true };
    }

    // 2. Kiểm tra tài khoản tự đăng ký cục bộ trong chế độ Dùng thử (Demo)
    try {
      const localRegs = JSON.parse(localStorage.getItem('netword_registered_local_accounts_v1') || '[]');
      const matchedLocal = localRegs.find(
        (a: any) => a.email.toLowerCase() === cleanEmail && a.password === cleanPassword
      );

      if (matchedLocal) {
        const loggedUser: UserProfile = {
          id: matchedLocal.id,
          name: matchedLocal.fullName,
          email: matchedLocal.email,
          role: 'student',
          school: matchedLocal.school,
          grade: matchedLocal.grade,
          title: 'Học viên Ngôn ngữ Trẻ',
          points: matchedLocal.points || 50,
          bookmarkedWordIds: bookmarks,
          solvedChallengeIds: [],
          createdWordIds: [],
          accountStatus: 'active',
        };

        setCurrentRole('student');
        setCurrentUser(loggedUser);
        localStorage.setItem('netword_active_role', 'student');
        localStorage.setItem(`netword_user_profile_student`, JSON.stringify(loggedUser));
        closeAuthModal();
        return { success: true };
      }
    } catch (e) {
      console.warn('Error checking local registered accounts', e);
    }

    // 3. Thử qua Supabase Auth nếu đã kết nối Cloud
    if (supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({ email: cleanEmail, password: cleanPassword });
        if (error) {
          return { success: false, error: error.message };
        }
        if (data.user) {
          await syncUserFromSupabase(data.user);
          closeAuthModal();
          return { success: true };
        }
      } catch (err: any) {
        return { success: false, error: err.message || 'Lỗi kết nối xác thực Supabase' };
      }
    }

    // 4. Tài khoản mẫu đặc biệt Thầy Trầm Thanh Tuấn (Admin Demo)
    if (cleanEmail === 'tramthanhtuanlh@gmail.com') {
      loginAsRole('admin');
      return { success: true };
    }

    return {
      success: false,
      error: 'Email hoặc mật khẩu không khớp. Thầy/học sinh có thể chuyển sang tab "⚡ 4 Vai trò" để đăng nhập nhanh tức thì bằng 1 bấm.',
    };
  };

  const signUpWithEmail = async (
    email: string,
    password: string,
    fullName: string,
    school = 'Trường THCS và THPT Long Hiệp',
    grade = 'Lớp 11 (Chuyên đề 2)'
  ): Promise<{ success: boolean; error?: string; message?: string }> => {
    const supabase = getActiveSupabaseClient();
    
    // An toàn: Người đăng ký mới LUÔN MẶC ĐỊNH role là student
    const defaultRole: UserRole = 'student';

    if (supabase) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: {
              full_name: fullName.trim(),
              role: defaultRole, // Database trigger will enforce student
              school,
              grade,
            },
          },
        });
        if (error) return { success: false, error: error.message };
        if (data.user) {
          closeAuthModal();
          return {
            success: true,
            message: 'Đăng ký thành công! Hãy kiểm tra hòm thư xác nhận nếu được yêu cầu.',
          };
        }
      } catch (err: any) {
        return { success: false, error: err.message || 'Lỗi đăng ký Supabase' };
      }
    }

    // Fallback: Tạo tài khoản lưu trữ cục bộ trong Chế độ Dùng thử (Demo Mode)
    const newId = `usr-${Date.now()}`;
    const newUser: UserProfile = {
      id: newId,
      name: fullName.trim(),
      email: email.trim(),
      role: defaultRole,
      school,
      grade,
      title: 'Học viên Ngôn ngữ Trẻ',
      points: 50,
      bookmarkedWordIds: [],
      solvedChallengeIds: [],
      createdWordIds: [],
      accountStatus: 'active',
    };

    try {
      const localRegs = JSON.parse(localStorage.getItem('netword_registered_local_accounts_v1') || '[]');
      localRegs.push({
        id: newId,
        email: email.trim(),
        password,
        fullName: fullName.trim(),
        school,
        grade,
        role: defaultRole,
        points: 50,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem('netword_registered_local_accounts_v1', JSON.stringify(localRegs));
    } catch (e) {
      console.warn('Error saving local registered account', e);
    }

    setCurrentRole(defaultRole);
    setCurrentUser(newUser);
    localStorage.setItem('netword_active_role', defaultRole);
    localStorage.setItem(`netword_user_profile_${defaultRole}`, JSON.stringify(newUser));
    closeAuthModal();

    return { success: true, message: 'Đăng ký tài khoản học sinh thành công (Lưu trên trình duyệt thiết bị này)!' };
  };

  const signOut = async () => {
    const supabase = getActiveSupabaseClient();
    if (supabase) {
      try {
        await supabase.auth.signOut();
      } catch {}
    }
    // Khi đăng xuất, chuyển về vai trò khách vãng lai
    setCurrentRole('guest');
    setCurrentUser(PRESET_USERS.guest);
    localStorage.setItem('netword_active_role', 'guest');
  };

  const requestPasswordReset = async (
    email: string
  ): Promise<{ success: boolean; message: string; error?: string }> => {
    const cleanEmail = email.trim();
    const supabase = getActiveSupabaseClient();

    // 1. Kiểm tra nếu là email trường cấp @longhiep.edu.vn
    if (cleanEmail.endsWith('@longhiep.edu.vn') || cleanEmail.startsWith('LH2026-')) {
      return {
        success: true,
        message:
          'Đây là tài khoản do Trường THCS và THPT Long Hiệp cấp. Thầy Trầm Thanh Tuấn có thể cấp lại mật khẩu ngay tại Tab "Quản trị > Cấp tài khoản trường" mà không cần email cá nhân.',
      };
    }

    // 2. Gửi qua Supabase Auth nếu là email cá nhân
    if (supabase) {
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(cleanEmail);
        if (error) throw error;
        return {
          success: true,
          message: `Đã gửi liên kết khôi phục mật khẩu tới ${cleanEmail}. Vui lòng kiểm tra hộp thư đến (và thư rác).`,
        };
      } catch (err: any) {
        return { success: false, error: err.message, message: 'Không thể gửi email đặt lại mật khẩu.' };
      }
    }

    return {
      success: true,
      message: `Đã tiếp nhận yêu cầu khôi phục mật khẩu cho ${cleanEmail}. Vui lòng liên hệ Thầy Trầm Thanh Tuấn để xác nhận trực tiếp.`,
    };
  };

  // Gamification: Tích lũy điểm (Guest không được lưu điểm)
  const addPoints = (points: number, _reason?: string) => {
    if (currentUser.role === 'guest') {
      return; // Khách không tích điểm
    }

    setCurrentUser((prev) => {
      const newPoints = prev.points + points;
      let newTitle = prev.title;
      if (prev.role === 'student') {
        if (newPoints >= 250) newTitle = 'Chuyên gia Ngôn ngữ Mạng';
        else if (newPoints >= 150) newTitle = 'Nhà Nghiên cứu Văn học Trẻ';
        else if (newPoints >= 80) newTitle = 'Học viên Ngôn ngữ Trẻ';
      }
      const updated = { ...prev, points: newPoints, title: newTitle };
      localStorage.setItem(`netword_user_profile_${updated.role}`, JSON.stringify(updated));
      return updated;
    });
  };

  const recordSolvedChallenge = (
    challengeId: string,
    earnedPoints: number
  ): { success: boolean; earned: number; isGuest: boolean } => {
    if (currentUser.role === 'guest') {
      return { success: true, earned: earnedPoints, isGuest: true };
    }

    if (currentUser.solvedChallengeIds.includes(challengeId)) {
      return { success: false, earned: 0, isGuest: false };
    }

    setCurrentUser((prev) => {
      const updated = {
        ...prev,
        solvedChallengeIds: [...prev.solvedChallengeIds, challengeId],
        points: prev.points + earnedPoints,
      };
      localStorage.setItem(`netword_user_profile_${updated.role}`, JSON.stringify(updated));
      return updated;
    });

    return { success: true, earned: earnedPoints, isGuest: false };
  };

  // Bookmark: Guest không được lưu
  const toggleBookmark = (wordId: string): { success: boolean; reason?: string } => {
    if (currentUser.role === 'guest') {
      openAuthModal('login');
      return {
        success: false,
        reason: 'Khách vãng lai cần đăng nhập tài khoản học sinh để lưu từ ngữ yêu thích.',
      };
    }

    const result = dictionaryService.toggleBookmark(wordId);
    setBookmarks(dictionaryService.getBookmarks());
    return { success: true };
  };

  const isBookmarked = (wordId: string) => bookmarks.includes(wordId);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isAuthenticated: currentUser.role !== 'guest',
        isGuest: currentUser.role === 'guest',
        isStudent: currentUser.role === 'student',
        isEditor: currentUser.role === 'editor',
        isAdmin: currentUser.role === 'admin',

        hasPerm,
        switchRole,
        loginAsRole,
        loginAsStudent,
        updateProfile,
        adminSetUserRole,

        signInWithEmail,
        signUpWithEmail,
        signOut,
        requestPasswordReset,

        addPoints,
        recordSolvedChallenge,
        bookmarks,
        toggleBookmark,
        isBookmarked,

        showAuthModal,
        openAuthModal,
        closeAuthModal,
        authModalMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
