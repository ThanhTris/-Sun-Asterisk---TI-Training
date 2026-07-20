# Tóm tắt Kiến thức & Chức năng Git 

## 1. Git Introduction 

### Tại sao chọn Git?
- **Save different versions of project source code:** Lưu trữ toàn bộ lịch sử và các phiên bản khác nhau của mã nguồn dự án qua từng thời kỳ.
- **Restore source code from any version:** Dễ dàng khôi phục mã nguồn về bất kỳ thời điểm nào trong lịch sử khi cần thiết.
- **Easily compare between versions:** So sánh trực quan sự khác biệt về nội dung giữa các phiên bản hoặc các commit khác nhau.
- **Detect who has fixed which part and caused the error:** Truy xuất chính xác ai đã chỉnh sửa dòng code nào, vào lúc nào để tìm ra nguyên nhân gây lỗi.
- **Recover lost files:** Đề phòng rủi ro mất mát dữ liệu nhờ khả năng khôi phục các tệp tin đã bị xóa ngoài thư mục làm việc.
- **Easy to test, extend project features without affecting main version:** Phát triển độc lập các tính năng mới trên các nhánh phụ mà không ảnh hưởng tới sự ổn định của phiên bản chính trên nhánh `main`/`master`.
- **Help restore and execute projects in teams efficiently:** Tối ưu hóa hiệu suất làm việc nhóm, giúp đồng bộ mã nguồn giữa các thành viên một cách trơn tru.

### 1.1. GIT - Hệ thống quản lý phiên bản phân tán (DVCSs)
- **Cơ chế hoạt động:** 
  - Trái ngược với hệ thống quản lý phiên bản tập trung (CVCS) chỉ lưu dữ liệu trên một máy chủ duy nhất, hệ thống **DVCS (như Git)** cho phép mỗi lập trình viên sở hữu một bản sao lưu toàn vẹn của kho chứa (bao gồm cả cơ sở dữ liệu lịch sử - Version Database) ngay tại máy local.
  - Lập trình viên có thể làm việc, sửa đổi và `commit` (ghi nhận thay đổi) cục bộ mà không cần kết nối internet.
  - Sau đó, mọi người sẽ đồng bộ hóa công việc với kho chứa trung tâm (`Central Repository`) thông qua cơ chế `push` (đẩy code lên) và `pull` (kéo code về).

### 1.2. Git & GitHub
- **Git:** Là công cụ quản lý phiên bản mã nguồn hoạt động cục bộ (dưới dạng dòng lệnh) trên máy tính của cá nhân.
- **GitHub:** Là một dịch vụ lưu trữ kho chứa Git trên đám mây (Cloud). GitHub cung cấp giao diện trực quan và các công cụ quản lý giúp các lập trình viên dễ dàng chia sẻ mã nguồn, phân quyền, review code và cộng tác làm việc nhóm với nhau.

### 1.3. Cài đặt Git
- **Tải Git:** Tải bộ cài tương thích với hệ điều hành đang sử dụng tại [git-scm.com/download](https://git-scm.com/download).
- **Cài đặt nhanh trên hệ điều hành Ubuntu/Debian:**
  ```bash
  sudo apt-get update
  sudo apt-get install git
  ```
- **Cấu hình thông tin tài khoản ban đầu (Git config):** Đây là bước bắt buộc để Git định danh tác giả của mỗi commit.
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "you@example.com"
  ```

### 1.4. Tra cứu tài liệu hướng dẫn
- Bạn có thể nhanh chóng tra cứu cách sử dụng của bất kỳ lệnh Git nào bằng cú pháp trợ giúp:
  ```bash
  git help <tên_lệnh>
  ```
- *Ví dụ:* Tra cứu chi tiết cách cấu hình lệnh `config`:
  ```bash
  git help config
  ```

---

## 2. Git Basic 

### Kiến trúc 3 vùng làm việc (Three-Tree Architecture)
1. **Working Directory (Thư mục làm việc):** Nơi hiển thị trực tiếp các tệp tin vật lý bạn đang thao tác trên ổ đĩa.
2. **Staging Area (Vùng chuẩn bị):** Nơi chọn lọc và đánh dấu những thay đổi sẵn sàng được đưa vào commit tiếp theo.
3. **Local Repository (Kho chứa cục bộ):** Nơi lưu trữ chính thức toàn bộ lịch sử các commit trong thư mục ẩn `.git`.
4. **Remote Repository (Kho chứa từ xa):** Kho lưu trữ trực tuyến giúp đồng bộ hóa mã nguồn giữa các thành viên.

### Các câu lệnh cơ bản thường dùng
- `git init`: Khởi tạo một Git Repository mới ngay tại thư mục hiện hành.
- `git clone <url>`: Sao chép một dự án có sẵn từ máy chủ từ xa về máy cá nhân.
- `git status`: Kiểm tra trạng thái hiện tại của các tệp tin (chưa được theo dõi, đã sửa đổi, hay đã đưa vào vùng chuẩn bị).
- `git add <tên_file>` (hoặc `git add .` để thêm tất cả): Chuyển các thay đổi từ thư mục làm việc vào vùng chuẩn bị (Staging Area).
- `git commit -m "Thông điệp mô tả"`: Đóng gói và lưu vĩnh viễn các thay đổi từ Staging Area vào kho chứa cục bộ kèm theo ghi chú chi tiết.
- `git log`: Hiển thị danh sách lịch sử các commit đã thực hiện theo trình tự thời gian ngược.

---

## 3. Branching 

Phân nhánh là tính năng cốt lõi giúp bạn tự do thử nghiệm, phát triển các tính năng độc lập mà không lo sợ làm hỏng mã nguồn đang hoạt động ổn định trên nhánh chính (`main`/`master`).

- `git branch`: Liệt kê tất cả các nhánh hiện có ở máy cục bộ. Nhánh đang kích hoạt sẽ được đánh dấu bằng ký tự `*`.
- `git branch <tên_nhánh>`: Khởi tạo một nhánh mới từ vị trí commit hiện tại.
- `git checkout <tên_nhánh>` (hoặc `git switch <tên_nhánh>`): Chuyển đổi không gian làm việc sang nhánh được chỉ định.
- `git checkout -b <tên_nhánh>` (hoặc `git switch -c <tên_nhánh>`): Phím tắt giúp tạo nhánh mới và lập tức chuyển sang nhánh đó.
- `git branch -d <tên_nhánh>`: Xóa một nhánh ở local sau khi đã gộp (merge) thay đổi của nó vào nhánh chính.
- `git branch -D <tên_nhánh>`: Ép buộc xóa nhánh kể cả khi chưa gộp code (thường dùng để loại bỏ các nhánh thử nghiệm thất bại).

---

## 4. Git Merge & Git Rebase 

Khi muốn gộp các thay đổi từ nhánh phụ (ví dụ: phát triển tính năng) vào nhánh chính, bạn có thể lựa chọn một trong hai phương pháp sau:

### Git Merge
- **Cơ chế:** Hợp nhất lịch sử của hai nhánh. Git sẽ tự động tìm kiếm commit chung gần nhất và tạo ra một **Merge Commit** mới đại diện cho điểm hợp nhất đó.
- **Ưu điểm:** Bảo tồn nguyên vẹn lịch sử phát triển thực tế theo thứ tự thời gian của cả hai nhánh.
- **Nhược điểm:** Làm biểu đồ nhánh lịch sử trở nên phức tạp và chằng chịt nếu dự án có nhiều nhánh nhỏ.
- **Cách dùng:**
  ```bash
  git checkout main
  git merge feature-branch
  ```

### Git Rebase
- **Cơ chế:** Thiết lập lại gốc của nhánh hiện tại. Git sẽ tạm thời cất đi các commit trên nhánh phụ của bạn, cập nhật nhánh phụ lên vị trí mới nhất của nhánh chính, sau đó áp dụng tuần tự các commit đã cất trở lại.
- **Ưu điểm:** Tạo ra một lịch sử commit dạng đường thẳng (tuyến tính) cực kỳ sạch sẽ và dễ theo dõi.
- **Nhược điểm:** Viết lại lịch sử commit của dự án. **Nguyên tắc cốt lõi:** Tuyệt đối không sử dụng rebase trên các nhánh dùng chung (nhánh public) đã được đẩy lên Remote Repository.
- **Cách dùng:**
  ```bash
  git checkout feature-branch
  git rebase main
  ```

---

## 5. Git Pull & Git Fetch 

Đồng bộ hóa mã nguồn giữa máy local của bạn và máy chủ từ xa (Remote) khi làm việc trong dự án chung.

- **Git Fetch:**
  - Tải về toàn bộ thông tin thay đổi mới nhất từ remote (commit mới, nhánh mới) nhưng **không** can thiệp hay tự động gộp vào mã nguồn bạn đang viết ở local.
  - Phù hợp khi bạn muốn kiểm tra trạng thái công việc của đồng nghiệp trước khi đưa ra quyết định tích hợp.
  ```bash
  git fetch origin
  ```

- **Git Pull:**
  - Tải về và tự động gộp ngay lập tức các thay đổi từ remote vào nhánh hiện tại ở local.
  - Thực chất: `git pull` = `git fetch` + `git merge`.
  - Có thể xảy ra xung đột (conflict) nếu code local và code remote sửa đổi trên cùng một vùng dữ liệu.
  ```bash
  git pull origin main
  ```

---
