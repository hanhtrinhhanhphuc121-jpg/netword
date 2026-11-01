/**
 * NETWORD - Quản lý Dữ liệu Cá nhân & Quyền Riêng tư Học sinh
 * Chuyên đề 2: Tìm hiểu ngôn ngữ trong đời sống xã hội hiện đại - Ngữ văn 11
 * GV phát triển: Thầy Trầm Thanh Tuấn - Trường THCS và THPT Long Hiệp
 * 
 * NGUYÊN TẮC BẢO MẬT HỌC ĐƯỜNG:
 * 1. Không dùng hồ sơ học sinh làm trang công khai nếu chưa có cơ sở và sự đồng ý phù hợp.
 * 2. Mỗi học sinh chỉ xem hoặc sửa được dữ liệu cá nhân của mình theo quyền được cấp.
 * 3. Có chức năng yêu cầu chỉnh sửa hoặc xóa dữ liệu cá nhân (Right to be Forgotten).
 */

export interface UserPrivacySettings {
  isProfilePublic: boolean;        // Mặc định false: Tuyệt đối không công khai hồ sơ học sinh
  allowAnonymousStats: boolean;    // Cho phép tính vào thống kê ẩn danh chung của trường
  notifyOnWordReview: boolean;     // Nhận thông báo khi đề xuất từ mới được phê duyệt
  notifyOnWeeklyChallenge: boolean;// Nhận thông báo khi có thử thách tuần mới
}

export interface UserDataRequest {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  studentCode?: string;
  type: 'edit_request' | 'delete_data_request';
  requestField?: string;
  currentValue?: string;
  proposedValue?: string;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  resolvedAt?: string;
  adminNote?: string;
}

const STORAGE_KEY_PRIVACY = 'netword_user_privacy_settings';
const STORAGE_KEY_DATA_REQUESTS = 'netword_user_data_requests';

class UserService {
  // 1. Tải cài đặt quyền riêng tư của người dùng
  public getPrivacySettings(userId: string): UserPrivacySettings {
    const defaultSettings: UserPrivacySettings = {
      isProfilePublic: false,        // Mặc định KHÔNG công khai hồ sơ
      allowAnonymousStats: true,     // Đóng góp vào thống kê chung ẩn danh
      notifyOnWordReview: true,      // Nhận tin duyệt từ mới
      notifyOnWeeklyChallenge: true, // Nhận tin thử thách tuần
    };

    if (!userId) return defaultSettings;

    try {
      const saved = localStorage.getItem(`${STORAGE_KEY_PRIVACY}_${userId}`);
      if (saved) {
        return { ...defaultSettings, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Error reading privacy settings', e);
    }

    return defaultSettings;
  }

  // 2. Lưu cài đặt quyền riêng tư
  public savePrivacySettings(userId: string, settings: UserPrivacySettings): boolean {
    if (!userId) return false;
    try {
      localStorage.setItem(`${STORAGE_KEY_PRIVACY}_${userId}`, JSON.stringify(settings));
      return true;
    } catch (e) {
      console.error('Error saving privacy settings', e);
      return false;
    }
  }

  // 3. Gửi yêu cầu chỉnh sửa hoặc xóa dữ liệu cá nhân
  public submitDataRequest(
    request: Omit<UserDataRequest, 'id' | 'status' | 'submittedAt'>
  ): UserDataRequest {
    const newReq: UserDataRequest = {
      ...request,
      id: `req-${Date.now()}`,
      status: 'pending',
      submittedAt: new Date().toISOString().split('T')[0],
    };

    const allRequests = this.getAllDataRequests();
    allRequests.unshift(newReq);
    localStorage.setItem(STORAGE_KEY_DATA_REQUESTS, JSON.stringify(allRequests));
    return newReq;
  }

  // 4. Lấy danh sách yêu cầu của một học sinh
  public getUserDataRequests(userId: string): UserDataRequest[] {
    const all = this.getAllDataRequests();
    return all.filter((r) => r.userId === userId);
  }

  // 5. Lấy toàn bộ yêu cầu (dành cho Giáo viên / Admin)
  public getAllDataRequests(): UserDataRequest[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DATA_REQUESTS);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error reading data requests', e);
    }
    return [
      {
        id: 'req-init-1',
        userId: 'user-std-01',
        userName: 'Nguyễn Văn Minh',
        userEmail: 'vanminh11a1@longhiep.edu.vn',
        studentCode: 'LH2026-11A1-001',
        type: 'edit_request',
        requestField: 'grade',
        currentValue: 'Lớp 11A1 (Chuyên đề 2)',
        proposedValue: 'Lớp 11A1 (Tổ trưởng Tổ 1)',
        reason: 'Em mới được bầu làm Tổ trưởng Tổ 1 môn Ngữ văn',
        status: 'approved',
        submittedAt: '2024-10-25',
        resolvedAt: '2024-10-26',
        adminNote: 'Đã xác nhận phân công tổ trưởng từ giáo viên chủ nhiệm. Thầy Tuấn duyệt.',
      },
    ];
  }

  // 6. Giáo viên / Admin cập nhật trạng thái yêu cầu dữ liệu của học sinh
  public updateDataRequestStatus(
    requestId: string,
    status: 'approved' | 'rejected',
    adminNote: string
  ): boolean {
    try {
      const all = this.getAllDataRequests();
      const target = all.find((r) => r.id === requestId);
      if (!target) return false;
      target.status = status;
      target.adminNote = adminNote;
      target.resolvedAt = new Date().toISOString().split('T')[0];
      localStorage.setItem(STORAGE_KEY_DATA_REQUESTS, JSON.stringify(all));
      return true;
    } catch (e) {
      console.error('Error updating data request', e);
      return false;
    }
  }

  // 7. Thực hiện xóa dữ liệu cục bộ của học sinh (Quyền được lãng quên)
  public executeLocalDataPurge(userId: string): boolean {
    if (!userId || userId.startsWith('guest')) return false;

    try {
      // Xóa lịch sử làm bài thử thách
      localStorage.removeItem(`netword_challenge_attempts_v2_${userId}`);
      // Xóa quyền riêng tư đã lưu
      localStorage.removeItem(`${STORAGE_KEY_PRIVACY}_${userId}`);
      return true;
    } catch (e) {
      console.error('Error purging user data', e);
      return false;
    }
  }
}

export const userService = new UserService();
