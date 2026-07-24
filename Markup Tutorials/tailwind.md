# Tóm tắt Kiến thức & Chức năng Bootstrap (Bootstrap Summary)

Tài liệu này hệ thống lại các khái niệm cơ bản, hệ thống lưới (Grid System), cách thiết lập bố cục (Layout), định dạng nội dung (Contents), các thành phần giao diện nâng cao (Components) và các hiệu ứng động bằng JavaScript Plugins của framework Bootstrap 4 theo lộ trình học tập tiêu chuẩn.

---

## 1. Introduction to Bootstrap 4

### 1.1. Definitions (Định nghĩa)
- **Bootstrap** là một mã nguồn mở và là một framework hoàn toàn miễn phí dùng để xây dựng trang web và các ứng dụng web.
- Đây là framework HTML, CSS và JavaScript phổ biến nhất hiện nay để phát triển các dự án web có giao diện thích ứng (**responsive**) và ưu tiên thiết bị di động (**mobile-first**).
- **Triết lý:** *"One Framework, Every Device"* (Một Framework, Mọi Thiết Bị) - Giao diện tự động tối ưu hiển thị mượt mà trên tất cả các dòng thiết bị từ điện thoại di động, máy tính bảng cho đến máy tính để bàn.

### 1.2. Why Use Bootstrap? (Tại sao nên sử dụng Bootstrap?)
- **Dễ sử dụng (Easy to use):** Bất kỳ ai chỉ cần có kiến thức cơ bản về HTML và CSS đều có thể nhanh chóng làm quen và bắt đầu xây dựng giao diện với Bootstrap.
- **Tính năng thích ứng vượt trội (Responsive features):** Hệ thống CSS responsive tích hợp sẵn tự động co giãn kích thước linh hoạt theo thiết bị của người dùng.
- **Tiếp cận ưu tiên di động (Mobile-first approach):** Các lớp thiết kế mặc định tối ưu hóa cho màn hình di động trước tiên, sau đó mới mở rộng ra các màn hình lớn hơn.
- **Tương thích trình duyệt rộng rãi (Browser compatibility):** Hỗ trợ hoạt động ổn định trên tất cả các trình duyệt hiện đại phổ biến bao gồm Chrome, Firefox, Internet Explorer (từ bản 10 trở lên), Safari, và Opera.

### 1.3. Bootstrap 3 vs. Bootstrap 4 (So sánh phiên bản)
- **Bootstrap 4** mang lại nhiều cải tiến vượt bậc so với phiên bản Bootstrap 3 tiền nhiệm:
  - Cung cấp các thành phần giao diện mới (Components), biểu mẫu định kiểu nhanh hơn, nhẹ hơn và hỗ trợ responsive mượt mà hơn.
  - Chuyển đổi từ hệ thống định vị phao nổi (Float) sang công nghệ Flexbox hiện đại để chia bố cục.
- **Hỗ trợ trình duyệt:** Bootstrap 4 hỗ trợ các phiên bản phát hành ổn định mới nhất của tất cả trình duyệt và nền tảng lớn. 
- *Lưu ý:* Kể từ phiên bản Bootstrap 4 trở đi, trình duyệt **Internet Explorer 9 trở xuống sẽ không còn được hỗ trợ**.

---

## 2. Bootstrap 4 Grid System

Hệ thống lưới (Grid System) là xương sống của Bootstrap giúp chia và sắp xếp bố cục trang web thành các hàng và cột linh hoạt.

### 2.1. Khái quát về hệ thống lưới (Grid Overview)
1. **Quy tắc 12 cột:** Hệ thống lưới của Bootstrap cho phép chia chiều rộng của trang web tối đa thành **12 cột** chạy dọc màn hình.
2. **Khả năng thích ứng (Responsive):** Lưới của Bootstrap có tính năng thích ứng cao, các cột dữ liệu sẽ tự động sắp xếp lại hoặc xếp chồng lên nhau tùy thuộc vào kích thước màn hình thiết bị của người dùng.
3. **Gộp cột linh hoạt:** Nếu bạn không muốn sử dụng 12 cột đơn lẻ riêng biệt, bạn có thể gộp nhiều cột lại với nhau để tạo ra các cột lớn hơn có chiều rộng mong muốn:
   - Gộp đều nhau: 3 cột lớn có độ rộng bằng 4 cột đơn (`span 4` + `span 4` + `span 4` = 12).
   - Gộp bất đối xứng: 1 cột nhỏ độ rộng 4 cột đơn và 1 cột lớn độ rộng 8 cột đơn (`span 4` + `span 8` = 12).
   - Chia đôi: 2 cột lớn có độ rộng bằng 6 cột đơn (`span 6` + `span 6` = 12).

---

### 2.2. Grid Classes (Các lớp phân loại lưới)
Hệ thống lưới của Bootstrap 4 sử dụng **5 lớp tiền tố (class prefixes)** đại diện cho 5 kích thước màn hình thiết bị khác nhau:
- **`.col-`**: Dành cho thiết bị cực nhỏ (Extra small devices - chiều rộng màn hình **dưới 576px** như điện thoại màn hình dọc).
- **`.col-sm-`**: Dành cho thiết bị nhỏ (Small devices - chiều rộng màn hình **từ 576px trở lên** như điện thoại màn hình ngang).
- **`.col-md-`**: Dành cho thiết bị trung bình (Medium devices - chiều rộng màn hình **từ 768px trở lên** như máy tính bảng).
- **`.col-lg-`**: Dành cho thiết bị lớn (Large devices - chiều rộng màn hình **từ 992px trở lên** như máy tính xách tay).
- **`.col-xl-`**: Dành cho thiết bị cực lớn (Extra large devices - chiều rộng màn hình **từ 1200px trở lên** như máy tính để bàn).

> [!TIP]
> Bạn có thể kết hợp linh hoạt nhiều lớp tiền tố trên cùng một phần tử (Ví dụ: `class="col-12 col-md-6 col-lg-4"`) để tạo ra các bố cục co giãn thích ứng động cực kỳ linh hoạt trên từng loại thiết bị.

---

### 2.3. Grid System Rules (Các nguyên tắc của hệ thống lưới)
Để hệ thống lưới hoạt động chính xác và không bị lỗi hiển thị, lập trình viên cần tuân thủ các quy tắc cốt lõi sau:
- **Container bắt buộc:** Các hàng (`.row`) phải được đặt bên trong một lớp `.container` (độ rộng cố định theo từng breakpoint) hoặc `.container-fluid` (độ rộng 100% toàn màn hình) để được căn lề và đệm khoảng cách (padding) chính xác.
- **Tạo hàng:** Sử dụng các thẻ chứa lớp `.row` để tạo ra các hàng ngang nhóm các cột lại với nhau.
- **Vị trí của cột:** Nội dung của trang web bắt buộc phải đặt trong các cột, và **chỉ các cột mới được là con trực tiếp** của hàng (`.row`).
- **Lớp định sẵn:** Các lớp dựng sẵn như `.row` và `.col-sm-4` giúp bạn nhanh chóng thiết lập bố cục lưới mà không cần viết code CSS tùy chỉnh.
- **Rãnh phân tách (Gutters):** Các cột tạo ra các khoảng trống ranh giới (gutters) thông qua thuộc tính đệm `padding`. Khoảng đệm này được bù trừ (offset) ở cột đầu tiên và cột cuối cùng trong hàng nhờ vào thuộc tính lề âm (`negative margin`) trên lớp `.row`.
- **Thiết lập cột:** Độ rộng của cột được xác định bằng cách khai báo số lượng cột đơn (trong tổng số 12 cột khả dụng) mà cột đó chiếm dụng. Ví dụ: Để tạo 3 cột bằng nhau trên màn hình nhỏ, ta sử dụng ba phần tử chứa lớp `.col-sm-4`.
- **Đơn vị phần trăm:** Chiều rộng của cột được tính theo tỷ lệ phần trăm (%), vì vậy chúng luôn co giãn linh hoạt và có kích thước tương đối so với phần tử cha trực tiếp của chúng.

---

### 2.4. Basic Grid Structure (Cấu trúc lưới cơ bản)
Dưới đây là ví dụ minh họa về cách phân chia tỷ lệ hàng cột và cách các cột tự động xếp chồng (stack) lên nhau khi thu nhỏ màn hình xuống dưới breakpoint chỉ định (dưới 576px):

```html
<div class="container">
  <!-- Hàng 1: Chia đôi (50% / 50%) -->
  <div class="row">
    <div class="col-sm-6">50%</div>
    <div class="col-sm-6">50%</div>
  </div>

  <!-- Hàng 2: Chia ba (33.33% / 33.33% / 33.33%) -->
  <div class="row">
    <div class="col-sm-4">33.33%</div>
    <div class="col-sm-4">33.33%</div>
    <div class="col-sm-4">33.33%</div>
  </div>

  <!-- Hàng 3: Chia tư (25% / 25% / 25% / 25%) -->
  <div class="row">
    <div class="col-sm-3">25%</div>
    <div class="col-sm-3">25%</div>
    <div class="col-sm-3">25%</div>
    <div class="col-sm-3">25%</div>
  </div>
</div>
```

---

### 2.5. Grid Sizes Summary (Bảng thông số chi tiết hệ thống lưới)

| Đặc trưng | Extra small (`<576px`) | Small (`>=576px`) | Medium (`>=768px`) | Large (`>=992px`) | Extra Large (`>=1200px`) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Tiền tố Class** | `.col-` | `.col-sm-` | `.col-md-` | `.col-lg-` | `.col-xl-` |
| **Độ rộng Container** | Tự động (`auto`) | `540px` | `720px` | `960px` | `1140px` |
| **Thiết bị phù hợp** | Điện thoại đứng | Điện thoại nằm ngang | Máy tính bảng | Máy tính xách tay | Máy tính để bàn |
| **Số lượng cột** | 12 cột | 12 cột | 12 cột | 12 cột | 12 cột |
| **Độ rộng rãnh (Gutter)** | 30px (15px mỗi bên) | 30px (15px mỗi bên) | 30px (15px mỗi bên) | 30px (15px mỗi bên) | 30px (15px mỗi bên) |
| **Khả năng lồng nhau** | Có hỗ trợ | Có hỗ trợ | Có hỗ trợ | Có hỗ trợ | Có hỗ trợ |
| **Cột bù (Offsets)** | Có hỗ trợ | Có hỗ trợ | Có hỗ trợ | Có hỗ trợ | Có hỗ trợ |
| **Thứ tự cột** | Có hỗ trợ | Có hỗ trợ | Có hỗ trợ | Có hỗ trợ | Có hỗ trợ |

---

## 3. Bootstrap Component

### 3.1. What are Components? (Thành phần giao diện dựng sẵn)
- **Khái niệm:** Bootstrap cung cấp hàng chục thành phần giao diện (components) được thiết kế và lập trình sẵn, có khả năng tái sử dụng cực kỳ cao.
- **Vai trò:** Giúp lập trình viên nhanh chóng lắp ghép giao diện trang web hoàn chỉnh mà không cần mất công viết lại các thành phần tương tác phức tạp từ đầu.
- **Các thành phần tiêu biểu:**
  - **Dropdowns**: Menu thả xuống.
  - **Button groups / Button dropdowns**: Các nhóm nút bấm và nút kèm menu thả xuống.
  - **Navs / Navbar**: Thanh điều hướng và menu đầu trang thích ứng.
  - **Breadcrumbs**: Thanh điều hướng phân cấp (đường dẫn liên kết thư mục).
  - **Pagination**: Phân trang dữ liệu.
  - **Labels and Badges**: Nhãn dán và huy hiệu thông tin.
  - **Typography**: Căn chỉnh font chữ và văn bản.
  - **Alerts**: Hộp cảnh báo, thông báo.
  - **Progress bars**: Thanh trạng thái tiến trình.

---

## 4. Add Bootstrap to project

### 4.1. Where to Get Bootstrap? (Cách tích hợp Bootstrap)
Có 2 phương pháp chính để tích hợp và bắt đầu sử dụng Bootstrap 4 trên trang web của bạn:
1. **Download Bootstrap 4:** Tải các file nguồn của Bootstrap 4 trực tiếp từ trang chủ [getbootstrap.com](https://getbootstrap.com) và lưu trữ cục bộ (self-host) trên máy chủ của dự án.
2. **Include Bootstrap 4 from a CDN:** Tích hợp trực tiếp các liên kết Bootstrap 4 từ mạng phân phối nội dung (CDN) trực tuyến.

---

### 4.2. Downloading Bootstrap 4 (Tải trực tiếp)
- Nếu bạn muốn tải và lưu trữ trực tiếp các file CSS, JS của Bootstrap trong dự án của mình:
  1. Truy cập trang chủ [getbootstrap.com](https://getbootstrap.com).
  2. Click chọn nút **Download** để tải gói nén.
  3. Giải nén và liên kết các file `bootstrap.min.css` và `bootstrap.min.js` vào tài liệu HTML của bạn theo đúng hướng dẫn trên trang tài liệu.

---

### 4.3. Bootstrap 4 CDN (Sử dụng liên kết trực tuyến)
Nếu không muốn tải trực tiếp mã nguồn về dự án, bạn có thể nhúng Bootstrap 4 thông qua các đường dẫn CDN (Content Delivery Network). Mạng phân phối MaxCDN sẽ hỗ trợ truyền tải trực tiếp tệp CSS và JavaScript của Bootstrap đến trình duyệt người dùng với tốc độ tối ưu nhất.

> [!IMPORTANT]
> Khi sử dụng JavaScript của Bootstrap, bạn bắt buộc phải nhúng thêm thư viện **jQuery** và **Popper.js** trước khi nhúng file JS của Bootstrap để các thành phần tương tác động (như dropdowns, modals, popovers...) hoạt động chính xác.

- **Các liên kết nhúng CDN đầy đủ:**
  ```html
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">

  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

  <!-- Popper JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/cloudflare/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>

  <!-- Latest compiled JavaScript -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
  ```

---

## 5. First Project with Bootstrap

### 5.1. Steps for project with Bootstrap 4 (Các bước thiết lập dự án)
Quy trình xây dựng một dự án sử dụng Bootstrap 4 cục bộ bao gồm 5 bước cơ bản sau:
1. **Create a project in IDE:** Tạo một thư mục dự án mới trong môi trường phát triển (IDE) của bạn (ví dụ như Dreamweaver, VS Code, NetBeans...).
2. **Download Bootstrap 4:** Truy cập vào trang chủ [getbootstrap.com](https://getbootstrap.com) và tải gói nén chứa các file CSS, JS đã được biên dịch sẵn.
3. **Unzip file zip:** Tiến hành giải nén file zip vừa tải về máy tính.
4. **Copy directory:** Sao chép thư mục Bootstrap 4 đã giải nén vào thư mục gốc của trang web (root website directory).
5. **Create First Web Page With Bootstrap 4:** Tạo tệp tin HTML đầu tiên và liên kết các file CSS, JS để bắt đầu lập trình.

---

### 5.2. Create First Web Page (Dựng trang web Bootstrap 4 đầu tiên)
Bootstrap 4 yêu cầu một phần tử bao bọc bên ngoài (container) để định vị toàn bộ nội dung. Bạn có hai sự lựa chọn tùy theo mục đích thiết kế:

#### A. Cách 1: Thiết lập trang với Hộp nội dung cố định thích ứng (`.container`)
- **Đặc trưng:** Lớp `.container` tạo ra một hộp nội dung có chiều rộng cố định thích ứng (responsive fixed width container), tự động căn giữa trang và co giãn chiều rộng theo từng thiết bị (breakpoint).
- **Mã nguồn mẫu:**
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Bootstrap 4 Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cloudflare/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
  </head>
  <body>

    <!-- Sử dụng lớp .container để tạo hộp nội dung căn giữa thích ứng -->
    <div class="container">
      <h1>My First Bootstrap Page</h1>
      <p>This is some text.</p>
    </div>

  </body>
  </html>
  ```

---

#### B. Cách 2: Thiết lập trang với Hộp nội dung phủ toàn bộ màn hình (`.container-fluid`)
- **Đặc trưng:** Lớp `.container-fluid` tạo ra một hộp nội dung có chiều rộng tối đa (full width container), luôn luôn kéo giãn 100% chiều rộng của màn hình trình duyệt ở mọi kích thước thiết bị.
- **Mã nguồn mẫu:**
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <title>Bootstrap 4 Example</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/cloudflare/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
  </head>
  <body>

    <!-- Sử dụng lớp .container-fluid để nội dung kéo giãn 100% màn hình -->
    <div class="container-fluid">
      <h1>My First Bootstrap Page</h1>
      <p>This is some text.</p>
    </div>

  </body>
  </html>
  ```

---

## 6. Working with Layout

Chương này tập trung vào các kỹ thuật xây dựng và kiểm soát bố cục trang web (Layout) bằng cách kết hợp container, hàng (rows) và cột (columns) trong Bootstrap.

### 6.1. Working with containers (Làm việc với hộp chứa)

#### 6.1.1. Hai loại hộp chứa chính trong Bootstrap
Để thiết lập bố cục trang web, bạn bắt buộc phải sử dụng một lớp hộp chứa bao bọc bên ngoài. Có hai loại container bạn có thể lựa chọn:
- Lớp **`.container-fluid`**: Hộp chứa có độ rộng tràn viền (100% màn hình).
- Lớp **`.container`**: Hộp chứa có độ rộng cố định thích ứng (fixed-width) co giãn theo từng kích thước màn hình.

---

#### 6.1.2. Fixed Container class (Hộp chứa có độ rộng cố định)
Lớp `.container` cơ bản sẽ tự động thiết lập một chiều rộng cố định thích ứng (fixed width) dựa trên kích thước khung nhìn (`viewport`) của thiết bị. 

Bootstrap hỗ trợ **5 kích thước chiều rộng cố định** tương ứng với các khoảng màn hình của thiết bị:
- **Extra small (Cực nhỏ):** Kích thước màn hình `<544px`.
- **Small (Nhỏ):** Kích thước màn hình `>544px`.
- **Medium (Trung bình):** Kích thước màn hình `>768px`.
- **Large (Lớn):** Kích thước màn hình `>992px`.
- **Extra large (Cực lớn):** Kích thước màn hình `>1140px`.

---

#### 6.1.3. Fluid Container (Hộp chứa tràn màn hình)
Lớp `.container-fluid` tạo ra một hộp chứa có độ rộng kéo giãn hoàn toàn 100% chiều ngang của cửa sổ trình duyệt (full-width box).
- **Đặc trưng:** Bootstrap tự động thêm một khoảng đệm nhỏ ở hai bên trái và phải (`left and right padding`) để ngăn nội dung hiển thị bị dính sát vào mép viền của màn hình trình duyệt.
- **Mã nguồn mẫu:**
  ```html
  <div class="container-fluid">
    <!-- Nội dung hiển thị tràn viền ở đây -->
  </div>
  ```

---

### 6.2. Inserting rows into your layout (Chèn hàng vào bố cục)

#### 6.2.1. Cấu trúc lồng hàng cơ bản (Single Row Example)
Để thiết lập cấu trúc bố cục lưới, bạn phải khai báo hàng (`.row`) bên trong hộp chứa (`.container` hoặc `.container-fluid`) trước khi chèn các cột vào trong.
- **Mã nguồn mẫu:**
  ```html
  <div class="container">
    <div class="row">
      <!-- chèn code khai báo cột vào đây (insert column code here) -->
    </div>
  </div>
  ```

#### 6.2.2. Cấu trúc nhiều hàng (Many rows within a container)

Một hộp chứa đơn lẻ có thể bao bọc nhiều hàng (`.row`) xếp chồng lên nhau theo chiều dọc màn hình để tạo nên các khối nội dung phân tầng.
- **Mã nguồn mẫu:**
  ```html
  <div class="container">
    <div class="row">
      <!-- chèn code khai báo cột cho hàng 1 // -->
    </div>
    <div class="row">
      <!-- chèn code khai báo cột cho hàng 2 // -->
    </div>
    <div class="row">
      <!-- chèn code khai báo cột cho hàng 3 // -->
    </div>
    <div class="row">
      <!-- chèn code khai báo cột cho hàng 4 // -->
    </div>
    <div class="row">
      <!-- chèn code khai báo cột cho hàng 5 // -->
    </div>
  </div>
  ```

---

### 6.3. Adding columns to your layout (Thêm cột vào bố cục)

#### 6.3.1. Column class widths (Độ rộng của lớp cột)
Để xác định độ rộng cột trên các thiết bị, bạn sử dụng ký hiệu đặt tên theo cấu trúc: `.[prefix]-[độ_rộng_cột]`, trong đó độ rộng cột chạy từ `1` đến `12`.
- **Extra small (Thiết bị cực nhỏ):** Sử dụng tiền tố `.col-xs-#` (trong Bootstrap 3) hoặc `.col-#` (trong Bootstrap 4) với `#` chạy từ 1 đến 12.
- **Small (Thiết bị nhỏ):** Sử dụng cú pháp `.col-sm-#`.
- **Medium (Thiết bị trung bình):** Sử dụng cú pháp `.col-md-#`.
- **Large (Thiết bị lớn):** Sử dụng cú pháp `.col-lg-#`.
- **Extra large (Thiết bị cực lớn):** Sử dụng cú pháp `.col-xl-#`.

---

#### 6.3.2. Choosing a column class (Lựa chọn lớp cột phù hợp)
Việc lựa chọn lớp tiền tố nào phụ thuộc hoàn toàn vào đối tượng người dùng mục tiêu và thiết bị truy cập chính của ứng dụng web:
- **Ứng dụng di động (Mobile App):** Nên tập trung sử dụng các lớp cột dành cho thiết bị cực nhỏ (`extra small`) hoặc nhỏ (`small`).
- **Máy tính bảng (Tablets):** Thường sử dụng các lớp cột trung bình (`medium`).
- **Máy tính để bàn (Desktops / Laptops):** Sử dụng các lớp cột lớn (`large`) hoặc cực lớn (`extra large`).

---

### 6.4. Creating a simple three-column layout (Tạo bố cục 3 cột đơn giản)
Giả định chúng ta cần xây dựng một bố cục thích ứng đơn giản chia đều giao diện thành 3 cột bằng nhau trên màn hình máy tính bảng trở lên (mỗi cột chiếm 4 phần trong tổng số 12 phần):

- **Mã nguồn mẫu:**
  ```html
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <!-- Nội dung cột 1 (column 1) -->
      </div>
      <div class="col-md-4">
        <!-- Nội dung cột 2 (column 2) -->
      </div>
      <div class="col-md-4">
        <!-- Nội dung cột 3 (column 3) -->
      </div>
    </div>
  </div>
  ```

---

### 6.5. Mixing column classes for different devices (Kết hợp các lớp cột cho nhiều loại thiết bị)
Bằng cách gán thêm nhiều lớp cột khác nhau trên cùng một thẻ div, bạn có thể thay đổi cách bố cục phân chia trên từng loại thiết bị màn hình.

- **Bài toán thực tế:** Thiết lập bố cục 3 cột sao cho:
  - Trên màn hình lớn, 2 cột đầu tiên chiếm 50% mỗi cột (độ rộng 6), cột thứ ba chiếm 100% độ rộng (độ rộng 12) và tự động rớt xuống dưới.
- **Mã nguồn mẫu:**
  ```html
  <div class="container">
    <div class="row">
      <!-- Cột 1 và 2 chiếm 50% độ rộng của hàng -->
      <div class="col-sm-6">
        <!-- Cột 1 -->
      </div>
      <div class="col-sm-6">
        <!-- Cột 2 -->
      </div>
      <!-- Cột 3 chiếm 100% độ rộng của hàng và đẩy xuống dưới -->
      <div class="col-sm-12">
        <!-- Cột 3 -->
      </div>
    </div>
  </div>
  ```

---

### 6.6. Using responsive utility classes (Sử dụng các lớp tiện ích thích ứng)
Bootstrap 4 cung cấp các lớp tiện ích giúp ẩn/hiển thị linh hoạt các phần tử trên từng kích thước màn hình cụ thể:
- **Tiện ích hiển thị (`display`):** Sử dụng cấu trúc `.d-[value]` cho tất cả màn hình, hoặc `.d-[breakpoint]-[value]` cho từng màn hình cụ thể (Ví dụ: `d-none` để ẩn, `d-sm-block` để hiển thị dạng block từ màn hình nhỏ trở lên).
- **Mục đích:** Giúp tinh chỉnh nội dung hiển thị tinh gọn trên điện thoại di động nhưng hiển thị đầy đủ trên màn hình lớn.

---

### 6.7. Color and text align (Màu sắc và Căn lề văn bản)

#### 6.7.1. Text color (Màu chữ ngữ cảnh)
Bootstrap 4 cung cấp các lớp màu chữ theo ngữ cảnh (contextual classes) để truyền tải ý nghĩa thông qua màu sắc:
- `.text-muted`: Chữ màu xám nhạt (dùng cho chú thích).
- `.text-primary`: Chữ màu xanh dương (thông tin chính, quan trọng).
- `.text-success`: Chữ màu xanh lá (biểu thị thành công).
- `.text-info`: Chữ màu xanh ngọc (biểu thị thông tin bổ sung).
- `.text-warning`: Chữ màu vàng (cảnh báo).
- `.text-danger`: Chữ màu đỏ (cảnh báo nguy hiểm, lỗi).
- `.text-secondary`: Chữ màu xám phụ.
- `.text-white`: Chữ màu trắng.
- `.text-dark`: Chữ màu xám tối.
- `.text-light`: Chữ màu xám cực sáng.

---

#### 6.7.2. Background Color (Màu nền ngữ cảnh)
Tương tự màu chữ, các lớp màu nền ngữ cảnh giúp làm nổi bật một khối nội dung:
- `.bg-primary`: Nền màu xanh dương.
- `.bg-success`: Nền màu xanh lá.
- `.bg-info`: Nền màu xanh ngọc.
- `.bg-warning`: Nền màu vàng.
- `.bg-danger`: Nền màu đỏ.
- `.bg-secondary`: Nền màu xám phụ.
- `.bg-dark`: Nền màu xám tối.
- `.bg-light`: Nền màu xám sáng.

---

#### 6.7.3. Text Alignment (Căn lề văn bản thích ứng)
Bootstrap 4 hỗ trợ căn lề văn bản tĩnh hoặc thay đổi thích ứng theo chiều rộng viewport:
- **Căn lề tĩnh (áp dụng cho mọi kích thước màn hình):**
  ```html
  <p class="text-left">Căn lề trái trên mọi màn hình.</p>
  <p class="text-center">Căn lề giữa trên mọi màn hình.</p>
  <p class="text-right">Căn lề phải trên mọi màn hình.</p>
  ```
- **Căn lề thích ứng (Responsive Text Alignment):** Căn lề chỉ có hiệu lực từ kích thước breakpoint chỉ định trở lên:
  ```html
  <p class="text-sm-left">Căn lề trái từ màn hình SM trở lên.</p>
  <p class="text-md-left">Căn lề trái từ màn hình MD trở lên.</p>
  <p class="text-lg-left">Căn lề trái từ màn hình LG trở lên.</p>
  <p class="text-xl-left">Căn lề trái từ màn hình XL trở lên.</p>
  ```

---

### 6.8. Coding the blog home page (Xây dựng bố cục trang chủ Blog)
Để dựng một trang chủ Blog hoàn chỉnh sử dụng hệ thống lưới của Bootstrap 4 (như ảnh minh họa trong slide), ta chia bố cục thành các phần chính:
1. **Navbar (Thanh điều hướng tiêu đề):** Cố định ở đầu trang, chứa logo và liên kết điều hướng.
2. **Main Layout Container (`.container`):** Chứa hai cột lớn chính:
   - **Cột nội dung chính (Main Content - 8 cột: `.col-md-8`):** Chứa tiêu đề trang, danh sách bài viết kèm hình ảnh minh họa bài viết, nội dung tóm tắt và nút "Read More".
   - **Cột bên (Sidebar - 4 cột: `.col-md-4`):** Chứa các hộp tiện ích (Widgets) như:
     - *Search Widget*: Hộp tìm kiếm bài viết.
     - *Categories Widget*: Danh mục các bài viết khác nhau.
     - *Side Widget*: Hộp giới thiệu thông tin bổ sung.

- **Cơ cấu mã nguồn khung:**
  ```html
  <!-- Navigation Header -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      <!-- Navigation Links... -->
    </div>
  </nav>

  <!-- Page Content Container -->
  <div class="container mt-4">
    <div class="row">
      <!-- Blog Entries Column (8 cols) -->
      <div class="col-md-8">
        <h1 class="my-4">Page Heading <small>Secondary Text</small></h1>
        
        <!-- Blog Post Card -->
        <div class="card mb-4">
          <img class="card-img-top" src="image_750x300.jpg" alt="Card image cap">
          <div class="card-body">
            <h2 class="card-title">Post Title</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <a href="#" class="btn btn-primary">Read More →</a>
          </div>
        </div>
      </div>

      <!-- Sidebar Widgets Column (4 cols) -->
      <div class="col-md-4">
        <!-- Search Widget -->
        <div class="card my-4">
          <h5 class="card-header">Search</h5>
          <div class="card-body">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for...">
              <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>

        <!-- Categories Widget -->
        <div class="card my-4">
          <h5 class="card-header">Categories</h5>
          <!-- Category List... -->
        </div>

        <!-- Side Widget -->
        <div class="card my-4">
          <h5 class="card-header">Side Widget</h5>
          <div class="card-body">
            You can put anything you want inside of these side widgets!
          </div>
        </div>
      </div>
    </div>
  </div>
  ```

---

## 7. Working with Contents

Chương này tập trung vào các thiết lập mặc định và phương pháp định dạng nội dung (văn bản, hình ảnh, danh sách, bảng biểu) bằng Bootstrap 4.

### 7.1. Reboot defaults and basics (Thiết lập mặc định & Khởi tạo Reboot)
Bootstrap 4 sử dụng **Reboot** (dựa trên Normalize.css) để chuẩn hóa và thiết lập phong cách mặc định thống nhất trên mọi trình duyệt:
- **Đơn vị rem:** Một trong những thay đổi lớn nhất về cấu phần nội dung trong Bootstrap 4 là chuyển từ đơn vị `em` sang `rem` (Root em). Khác với `em` (phụ thuộc kích thước chữ của phần tử cha), đơn vị `rem` hoàn toàn độc lập và chỉ tính tương đối so với phần tử gốc `<html>`.
- **Mô hình hộp:** Thuộc tính `box-sizing` được thiết lập toàn cục là `border-box` trên mọi phần tử.
- **Cỡ chữ nền tảng:** Cỡ chữ cơ bản mặc định là **16px** khai báo trên thẻ `<html>`. Trên thẻ `<body>`, cỡ chữ được thiết lập là `1rem` để dễ dàng thích ứng co giãn (`responsive type-scaling`) khi kết hợp với Media Queries.
- **Tính nhất quán:** Các giá trị toàn cục về font chữ (`font-family`) và chiều cao dòng (`line-height`) được định nghĩa trực tiếp trên thẻ `<body>`. Màu nền mặc định của `<body>` được đặt là màu trắng (`#fff`).
- **Lề ngoài (Margins):** Tất cả thẻ tiêu đề (`<h1>` - `<h6>`) đều được loại bỏ lề trên (`top-margin`) và có lề dưới (`margin-bottom`) là `0.5rem`. Các đoạn văn (`<p>`) có lề dưới là `1rem`.
- **Danh sách (Lists):** Có 3 dạng danh sách mặc định là `<ul>`, `<ol>`, và `<dl>`. Cả 3 loại đều được loại bỏ lề trên và có lề dưới là `1rem`.
- **Bảng biểu (Tables):** Được điều chỉnh nhẹ để đảm bảo việc căn lề văn bản nhất quán trong tất cả các ô. Thẻ mô tả bảng `<caption>` cũng được tối ưu hóa để tăng khả năng đọc.
- **Biểu mẫu (Forms):** Biểu mẫu trong Bootstrap 4 được tinh giản tối đa. Hầu hết định dạng mặc định phức tạp đã bị loại bỏ giúp nhà phát triển dễ dàng tùy biến giao diện riêng.

---

### 7.2. Learning to use typography (Thiết kế kiểu chữ & Văn bản)
- **Thẻ tiêu đề thông thường:** Các thẻ tiêu đề chuẩn (`<h1>` đến `<h6>`) giúp tạo tính phân cấp nội dung mạch lạc cho bài viết.
- **Lớp định dạng tiêu đề:** Bootstrap 4 hỗ trợ các lớp tương ứng từ `.h1` đến `.h6` cho phép hiển thị một đoạn văn bản nội dòng (inline text) có kiểu dáng giống hệt các thẻ tiêu đề tương ứng mà không làm thay đổi ngữ nghĩa thẻ HTML gốc.
- **Display headings (Tiêu đề hiển thị nổi bật):** Được thiết kế để có cỡ chữ lớn và nét mảnh hơn tiêu đề thông thường nhằm tạo điểm nhấn mạnh mẽ. Có 4 cấp độ từ lớn đến nhỏ:
  - Lớp `.display-1` (lớn nhất)
  - Lớp `.display-2`
  - Lớp `.display-3`
  - Lớp `.display-4` (nhỏ nhất)

---

### 7.3. Working with lists (Làm việc với danh sách)

#### 7.3.1. Basic List Groups (Nhóm danh sách cơ bản)
Để tạo một nhóm danh sách tiêu chuẩn, ta áp dụng lớp `.list-group` cho thẻ `<ul>` và lớp `.list-group-item` cho các thẻ `<li>` con bên trong.
- **Mã nguồn mẫu:**
  ```html
  <ul class="list-group">
    <li class="list-group-item">Coffee</li>
    <li class="list-group-item">Tea</li>
    <li class="list-group-item">Milk</li>
  </ul>
  ```

#### 7.3.2. Trạng thái phần tử danh sách (Active & Disabled States)
- **Trạng thái kích hoạt:** Thêm lớp `.active` vào phần tử mục để tô sáng mục đó.
- **Trạng thái vô hiệu hóa:** Thêm lớp `.disabled` để làm mờ và chặn tương tác trên mục đó.
- **Mã nguồn mẫu:**
  ```html
  <ul class="list-group">
    <li class="list-group-item active">Coffee (Đang chọn)</li>
    <li class="list-group-item">Tea</li>
    <li class="list-group-item disabled">Milk (Vô hiệu hóa)</li>
  </ul>
  ```

#### 7.3.3. Màu sắc danh sách theo ngữ cảnh (Contextual Classes)
Có thể tô màu nền cho các mục danh sách để thể hiện trạng thái thông tin thông qua các lớp ngữ cảnh sau:
- `.list-group-item-success`: Màu xanh lá (Thành công).
- `.list-group-item-info`: Màu xanh ngọc (Thông tin).
- `.list-group-item-warning`: Màu vàng (Cảnh báo).
- `.list-group-item-danger`: Màu đỏ (Lỗi, Nguy hiểm).
- `.list-group-item-secondary`: Màu xám phụ.
- `.list-group-item-dark`: Màu xám tối.
- `.list-group-item-light`: Màu xám cực sáng.

---

### 7.4. How to style images (Thiết lập kiểu dáng hình ảnh)

#### 7.4.1. Responsive Images (Hình ảnh tự động thích ứng)
- **Giải pháp:** Bootstrap 4 hỗ trợ lớp `.img-fluid` cực kỳ hữu dụng.
- **Cơ chế:** Khi áp dụng lớp `.img-fluid` cho thẻ `<img>`, hình ảnh sẽ tự động được gán thuộc tính `max-width: 100%` và `height: auto` giúp hình ảnh tự co giãn vừa vặn trong phần tử cha chứa nó mà không bị vỡ tỷ lệ ảnh.
- **Mã nguồn mẫu:**
  ```html
  <img src="myimage.jpg" class="img-fluid" alt="Responsive Image">
  ```

#### 7.4.2. Image Shapes (Bo khung hình ảnh)
Bootstrap cung cấp 3 lớp tiện ích để định hình nhanh kiểu dáng hiển thị cho hình ảnh:
- `.rounded`: Bo tròn nhẹ 4 góc ảnh.
- `.rounded-circle`: Bo tròn hoàn toàn ảnh (tạo hình tròn/oval).
- `.img-thumbnail`: Tạo viền khung viền bao quanh ảnh kèm góc bo nhẹ (dạng ảnh thu nhỏ xem trước).

- **Mã nguồn mẫu:**
  ```html
  <img src="myimage.jpg" class="rounded" alt="Bo góc">
  <img src="myimage.jpg" class="rounded-circle" alt="Hình tròn">
  <img src="myimage.jpg" class="img-thumbnail" alt="Ảnh thu nhỏ thumbnail">
  ```

---

### 7.5. Coding tables (Xây dựng bảng dữ liệu)

#### 7.5.1. Basic Table (Thiết lập bảng cơ bản)
Một bảng cơ bản trong Bootstrap tận dụng đầy đủ các thẻ HTML tiêu chuẩn của bảng như `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, và `<td>` với khoảng đệm padding nhẹ nhàng và đường kẻ phân cách tinh tế.
- **Cú pháp nền tảng:**
  ```html
  <table class="table">
    <!-- Nội dung bảng... -->
  </table>
  ```

#### 7.5.2. Inverse Table (Bảng màu đảo ngược)
- **Đặc trưng:** Lớp `.table-inverse` (hoặc `.table-dark` trong bản chính thức) giúp đảo ngược hoàn toàn tông màu của bảng sang nền màu tối và chữ màu sáng.
- **Mã nguồn mẫu:**
  ```html
  <table class="table table-inverse">
    <!-- Bảng nền tối chữ sáng -->
  </table>
  ```

#### 7.5.3. Inverse Table Header (Đảo ngược màu tiêu đề bảng)
- **Đặc trưng:** Nếu chỉ muốn đảo ngược tông màu của riêng hàng tiêu đề trên cùng, bạn có thể áp dụng lớp `.thead-inverse` (hoặc `.thead-dark`) trực tiếp trên thẻ `<thead>`.
- **Mã nguồn mẫu:**
  ```html
  <table class="table">
    <thead class="thead-inverse">
      <!-- Tiêu đề nền tối chữ sáng, thân bảng nền trắng chữ tối -->
    </thead>
  </table>
  ```

#### 7.5.4. Striped Rows (Bảng sọc ngựa vằn)
- **Đặc trưng:** Lớp `.table-striped` tự động áp dụng dải sọc xám nhạt (zebra-striping) xen kẽ lên các hàng có số thứ tự lẻ (`odd`) trong phần thân bảng (`<tbody>`).
- **Mã nguồn mẫu:**
  ```html
  <table class="table table-striped">
    <!-- Các hàng xen kẽ màu nền -->
  </table>
  ```

#### 7.5.5. Hover State on Rows (Hiệu ứng di chuột trên hàng)
- **Đặc trưng:** Lớp `.table-hover` tự động tạo hiệu ứng đổi màu nền sáng lên khi người dùng di con trỏ chuột qua các hàng của bảng.
- **Mã nguồn mẫu:**
  ```html
  <table class="table table-hover">
    <!-- Hiệu ứng hover nổi bật -->
  </table>
  ```

#### 7.5.6. Contextual Classes for Rows (Tô màu hàng/ô theo ngữ cảnh)
Bạn có thể thiết lập màu nền cho từng hàng (`<tr>`) hoặc từng ô cụ thể (`<td>`, `<th>`) bằng các lớp ngữ cảnh:
- `.table-primary`: Màu xanh dương.
- `.table-success`: Màu xanh lá.
- `.table-info`: Màu xanh ngọc.
- `.table-warning`: Màu vàng.
- `.table-danger`: Màu đỏ.

- **Mã nguồn mẫu:**
  ```html
  <tr class="table-success">
    <td>Dữ liệu thành công</td>
  </tr>
  ```

#### 7.5.7. Responsive Tables (Bảng thích ứng màn hình di động)
- **Đặc trưng:** Việc thiết lập bảng responsive rất đơn giản trong Bootstrap 4 bằng cách bao bọc thẻ `<table>` bên trong một thẻ `<div>` chứa lớp `.table-responsive`.
- **Cơ chế:** Khi xem bảng trên các màn hình thiết bị có chiều rộng **nhỏ hơn 768px**, bảng sẽ tự động xuất hiện thanh cuộn ngang để người dùng kéo xem đầy đủ dữ liệu mà không làm bể bố cục trang web.
- **Mã nguồn mẫu:**
  ```html
  <div class="table-responsive">
    <table class="table">
      <!-- Toàn bộ nội dung bảng -->
    </table>
  </div>
  ```

---

## 8. Playing with components

Chương này đi sâu vào tìm hiểu các thành phần giao diện (components) tương tác nâng cao của Bootstrap 4, bắt đầu bằng các nút bấm (Buttons) và nhóm nút (Button groups).

### 8.1. Using the button component (Làm việc với nút bấm)
Nút bấm là một trong những thành phần được sử dụng nhiều nhất trên trang web. Bootstrap 4 mang tới các lựa chọn đa dạng bao gồm nút bấm viền ngoài (`outline`), nút bấm giữ trạng thái (`toggle state`), và các nhóm nút (`button groups`).

#### 8.1.1. Basic button examples (Các ví dụ nút bấm cơ bản)
Bootstrap 4 cung cấp sẵn 6 tùy chọn màu sắc ngữ cảnh cho nút bấm:
- **Primary:** Nút bấm hành động chính trên trang web, mặc định là màu xanh dương.
- **Secondary:** Nút bấm phụ hoặc thay thế, mặc định là màu trắng/xám phụ.
- **Success:** Dành cho các hành động mang tính tích cực (như đồng ý, lưu...), mặc định là màu xanh lá.
- **Info:** Dành cho các nút cung cấp thông tin chung, mặc định là màu xanh ngọc.
- **Warning:** Dành cho các cảnh báo, mặc định là màu vàng.
- **Danger:** Dành cho các hành động nguy hiểm hoặc báo lỗi (như xóa dữ liệu...), mặc định là màu đỏ.

- **Mã nguồn mẫu:**
  ```html
  <button type="button" class="btn btn-primary">Primary</button>
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>
  <button type="button" class="btn btn-info">Info</button>
  <button type="button" class="btn btn-warning">Warning</button>
  <button type="button" class="btn btn-danger">Danger</button>
  <button type="button" class="btn btn-link">Link</button>
  ```

---

#### 8.1.2. Creating outlined buttons (Nút bấm dạng viền)
Để tạo nút bấm dạng chỉ có viền ngoài và đổi màu nền khi di chuột qua, bạn chỉ cần thay đổi tên lớp nút cơ bản bằng cách thêm hậu tố `-outline`:
- *Cú pháp theo slide gốc:* `.btn-[color]-outline` (Ví dụ: `btn-primary-outline`).

> [!NOTE]
> Trong các phiên bản Bootstrap 4 thử nghiệm ban đầu (Beta), cú pháp đặt tên là `.btn-[color]-outline`. Tuy nhiên, trong phiên bản phát hành chính thức ổn định, cú pháp này đã được chuẩn hóa lại thành `.btn-outline-[color]` (Ví dụ: `.btn-outline-primary`, `.btn-outline-secondary`...).

- **Mã nguồn mẫu:**
  ```html
  <button type="button" class="btn btn-primary-outline">Primary</button>
  <button type="button" class="btn btn-secondary-outline">Secondary</button>
  <button type="button" class="btn btn-success-outline">Success</button>
  <button type="button" class="btn btn-info-outline">Info</button>
  <button type="button" class="btn btn-warning-outline">Warning</button>
  <button type="button" class="btn btn-danger-outline">Danger</button>
  ```

---

#### 8.1.3. Using button groups (Sử dụng nhóm nút ngang)
Nhóm nút (Button groups) cho phép kết hợp nhiều nút bấm đứng liền kề nhau theo chiều ngang hoặc chiều dọc để tạo thành một khối thành phần thống nhất.
- **Mã nguồn mẫu (Hàng ngang):**
  ```html
  <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
  </div>
  ```

---

#### 8.1.4. Creating vertical button groups (Tạo nhóm nút dọc)
Để xếp chồng các nút trong nhóm theo chiều dọc thay vì chiều ngang, bạn chỉ cần thay đổi lớp bọc `.btn-group` của thẻ `<div>` ngoài cùng thành `.btn-group-vertical` mà không cần sửa đổi bất kỳ code nào bên trong các thẻ `<button>` con.
- **Mã nguồn mẫu (Hàng dọc):**
  ```html
  <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button type="button" class="btn btn-secondary">Left</button>
    <button type="button" class="btn btn-secondary">Middle</button>
    <button type="button" class="btn btn-secondary">Right</button>
  </div>
  ```

---

#### 8.1.5. Coding a button dropdown (Nút bấm kèm Menu thả xuống)
Để tạo một nút bấm tích hợp trình đơn thả xuống (dropdown) khi click chọn, bạn kết hợp lớp `.dropdown-toggle` cùng thuộc tính dữ liệu `data-toggle="dropdown"`. Các đường liên kết con được bọc trong một container lớp `.dropdown-menu`.
- **Mã nguồn mẫu:**
  ```html
  <div class="btn-group">
    <!-- Nút kích hoạt Dropdown -->
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </button>
    <!-- Trình đơn hiển thị các liên kết -->
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Link</a>
      <a class="dropdown-item" href="#">Link Two</a>
      <a class="dropdown-item" href="#">Link Three</a>
      <!-- Đường phân tách giữa các nhóm link -->
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Link Four</a>
    </div>
  </div>
  ```

---

#### 8.1.6. Creating a pop-up menu (Nút bấm Menu đẩy lên trên - Dropup)
Trong nhiều tình huống giao diện, bạn muốn trình đơn bật lên phía trên nút bấm thay vì rớt xuống dưới. Để làm điều này, bạn chỉ cần gán thêm lớp `.dropup` vào thẻ bao ngoài cùng `.btn-group`.
- **Mã nguồn mẫu:**
  ```html
  <div class="btn-group dropup">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Link</a>
      <a class="dropdown-item" href="#">Link Two</a>
      <a class="dropdown-item" href="#">Link Three</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Link Four</a>
    </div>
  </div>
  ```

---

### 8.2. Coding forms in Bootstrap 4 (Thiết lập biểu mẫu Form)

#### 8.2.1. Setting up a form (Thiết lập Form cơ bản)
Một form cơ bản trong Bootstrap 4 sử dụng cấu trúc nhóm bằng thẻ `<fieldset>` (hoặc thẻ `<div>`) kết hợp lớp `.form-group` nhằm tạo khoảng cách hợp lý giữa các dòng. Các phần tử nhập liệu (`<input>`) được gán lớp `.form-control` để tự động kéo giãn 100% chiều ngang và bo góc nhẹ nhàng.
- **Mã nguồn mẫu:**
  ```html
  <form>
    <fieldset class="form-group">
      <label>Text Label</label>
      <input type="text" class="form-control" placeholder="Enter Text">
      <!-- Văn bản hướng dẫn nhỏ dưới input -->
      <small class="text-muted">This is some help text.</small>
    </fieldset>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  ```

---

#### 8.2.2. Adding a select dropdown (Thêm menu chọn thả xuống)
Để chèn danh sách lựa chọn thả xuống bên trong form, bạn áp dụng lớp `.form-control` trực tiếp lên thẻ `<select>` tiêu chuẩn của HTML.
- **Mã nguồn mẫu:**
  ```html
  <form>
    <!-- Các input khác... -->
    
    <fieldset class="form-group">
      <label>Select dropdown</label>
      <select class="form-control">
        <option>one</option>
        <option>two</option>
        <option>three</option>
        <option>four</option>
        <option>five</option>
      </select>
    </fieldset>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  ```

---

#### 8.2.3. Inserting a textarea tag into your form (Thêm vùng nhập văn bản đa dòng)
Để chèn một khung nhập văn bản dài nhiều dòng (textarea), bạn chỉ cần gán lớp `.form-control` cho thẻ `<textarea>` tương ứng và thiết lập thuộc tính số dòng hiển thị thông qua `rows`.
- **Mã nguồn mẫu:**
  ```html
  <form>
    <!-- Các input khác... -->
    
    <fieldset class="form-group">
      <label>Textarea</label>
      <textarea class="form-control" rows="3"></textarea>
    </fieldset>
    
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  ```

---

#### 8.2.4. Adding a file input form field (Trường tải tệp tin)
Để tạo một trường tải tệp tin lên máy chủ, bạn áp dụng lớp `.form-control-file` trực tiếp cho thẻ `<input type="file">`.
- **Mã nguồn mẫu:**
  ```html
  <fieldset class="form-group">
    <label>File input</label>
    <input type="file" class="form-control-file">
    <small class="text-muted">This is some help text. Supported file types are: .png</small>
  </fieldset>
  ```

---

#### 8.2.5. Inserting radio buttons and checkboxes to a form (Nút chọn duy nhất và Nút tích chọn)
Để hiển thị radio buttons hoặc checkboxes theo bố cục chuẩn của Bootstrap 4, bạn bọc thẻ nhập liệu cùng thẻ `<label>` bên trong một thẻ `<div>` có lớp `.radio` hoặc `.checkbox`.
- **Mã nguồn mẫu:**
  ```html
  <!-- Lựa chọn Radio 1 -->
  <div class="radio">
    <label>
      <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
      Option 1
    </label>
  </div>
  <!-- Lựa chọn Radio 2 -->
  <div class="radio">
    <label>
      <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
      Option 2
    </label>
  </div>
  <!-- Hộp tích chọn Checkbox -->
  <div class="checkbox">
    <label>
      <input type="checkbox"> Checkbox
    </label>
  </div>
  ```

---

#### 8.2.6. Creating an inline form (Dựng biểu mẫu hàng ngang)
Khi cần thiết lập form hiển thị trên một hàng ngang (thường dùng cho thanh tìm kiếm đầu trang hoặc form đăng nhập nhỏ gọn), bạn bổ sung lớp `.form-inline` trực tiếp vào thẻ `<form>`. Các nhóm phần tử con `.form-group` sẽ tự động hiển thị hàng ngang sát nhau.
- **Mã nguồn mẫu:**
  ```html
  <form class="form-inline">
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control" placeholder="Mike Smith">
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" placeholder="mike@gmail.com">
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
  ```

---

#### 8.2.7. Hiding the labels in an inline form (Ẩn nhãn trong form hàng ngang)
Trong thiết kế form hàng ngang, việc giữ lại thẻ `<label>` đôi khi gây vỡ bố cục hoặc thừa thông tin. Tuy nhiên, ta không nên xóa bỏ hoàn toàn thẻ này khỏi code HTML vì lý do hỗ trợ các thiết bị hỗ trợ đọc màn hình (Accessibility/Screen Readers). Thay vào đó, bạn ẩn thẻ này trực quan trên màn hình bằng cách gán lớp `.sr-only`.
- **Mã nguồn mẫu:**
  ```html
  <label class="sr-only">Name</label>
  ```

---

#### 8.2.8. Adding inline checkboxes and radio buttons (Tích chọn và Chọn một hàng ngang)
Để chèn checkbox hoặc radio button xếp chồng hàng ngang bên trong inline form thay vì xếp dòng thẳng đứng, bạn chỉ cần gán lớp `.checkbox-inline` hoặc `.radio-inline` trực tiếp cho thẻ `<label>` bọc bên ngoài.
- **Mã nguồn mẫu Checkbox:**
  ```html
  <label class="checkbox-inline">
    <input type="checkbox" value="option1"> Remember me?
  </label>
  ```
- **Mã nguồn mẫu Radio:**
  ```html
  <label class="radio-inline">
    <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> Yes
  </label>
  <label class="radio-inline">
    <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> No
  </label>
  ```

---

#### 8.2.9. Changing the size of inputs (Thay đổi kích thước trường nhập)
Bootstrap 4 cung cấp các lớp tiện ích kích thước giúp bạn co giãn chiều cao của các trường nhập liệu lớn hơn hoặc nhỏ hơn so với cỡ mặc định:
- Lớp `.form-control-lg`: Dành cho các trường nhập liệu kích thước lớn.
- Lớp `.form-control-sm`: Dành cho các trường nhập liệu kích thước nhỏ.
- Mặc định (Default): Không cần gắn thêm lớp kích thước.

- **Mã nguồn mẫu:**
  ```html
  <!-- Khung nhập lớn -->
  <input class="form-control form-control-lg" type="text" placeholder="form-control-lg">
  <!-- Khung nhập mặc định -->
  <input class="form-control" type="text" placeholder="Default input, No class required">
  <!-- Khung nhập nhỏ -->
  <input class="form-control form-control-sm" type="text" placeholder="form-control-sm">
  ```

---

#### 8.2.10. Controlling the width of form fields (Kiểm soát chiều rộng trường nhập bằng Grid)
Mặc định, các thẻ đầu vào chứa lớp `.form-control` sẽ kéo giãn hết 100% chiều ngang phần tử chứa nó. Bạn có thể dễ dàng kiểm soát độ rộng mong muốn bằng cách bọc chúng trong hệ thống lưới Grid (`.col-*`):
- **Mã nguồn mẫu:**
  ```html
  <div class="row">
    <!-- Khung nhập chiếm 100% độ rộng của hàng -->
    <div class="col-md-12">
      <input type="text" class="form-control" placeholder="full width">
    </div>
    <!-- Khung nhập chiếm 50% độ rộng của hàng trên màn hình trung bình trở lên -->
    <div class="col-md-6 mt-3">
      <input type="text" class="form-control" placeholder="half width">
    </div>
  </div>
  ```

---

#### 8.2.11. Adding validation to inputs (Trạng thái xác thực dữ liệu)
Bootstrap 4 hỗ trợ các kiểu dáng xác thực trực quan rất mạnh mẽ giúp thông báo trạng thái dữ liệu (thành công, cảnh báo, lỗi) ngay khi người dùng thao tác nhập liệu:
- **Nguyên lý:**
  - Ở lớp bọc nhóm `.form-group`, bạn gán các trạng thái màu sắc viền/chữ: `.has-success` (xanh lá), `.has-warning` (vàng), hoặc `.has-danger` (đỏ).
  - Ở thẻ `<label>`, bạn gán lớp `.form-control-label`.
  - Ở thẻ `<input>`, bạn gán kèm các lớp trạng thái: `.form-control-success`, `.form-control-warning`, hoặc `.form-control-danger`.
- **Mã nguồn mẫu:**
  ```html
  <!-- Trạng thái Thành công (Success) -->
  <div class="form-group has-success">
    <label class="form-control-label">Input with success</label>
    <input type="text" class="form-control form-control-success">
  </div>

  <!-- Trạng thái Cảnh báo (Warning) -->
  <div class="form-group has-warning">
    <label class="form-control-label">Input with warning</label>
    <input type="text" class="form-control form-control-warning">
  </div>

  <!-- Trạng thái Lỗi / Nguy hiểm (Danger / Error) -->
  <div class="form-group has-danger">
    <label class="form-control-label">Input with danger</label>
    <input type="text" class="form-control form-control-danger">
  </div>
  ```

---

### 8.3. Using the Jumbotron component (Thành phần Jumbotron nổi bật)
Jumbotron là thành phần được sử dụng để làm nổi bật một khối nội dung tiêu điểm của trang web (thường đặt ở đầu trang chủ, ngay dưới thanh điều hướng). 

#### 8.3.1. Standard Jumbotron (Jumbotron tiêu chuẩn)
- **Đặc trưng:** Tạo ra một khối màu xám nhạt bo tròn nhẹ ở 4 góc để thu hút sự chú ý.
- **Mã nguồn mẫu:**
  ```html
  <div class="jumbotron">
    <h1 class="display-3">Feature title</h1>
    <p class="lead">This is a basic jumbotron call to action</p>
    <hr class="m-y-2">
    <p>This is some further description text for your main feature</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  ```

---

#### 8.3.2. Fluid Jumbotron (Jumbotron tràn viền)
- **Đặc trưng:** Khi bạn muốn Jumbotron kéo dài tràn viền sang hai bên mép màn hình trình duyệt trình duyệt mà không có góc bo tròn, bạn sử dụng lớp kết hợp `.jumbotron-fluid` và nhúng thẻ `.container` (hoặc `.container-fluid`) vào bên trong để căn giữa nội dung văn bản.
- **Mã nguồn mẫu:**
  ```html
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-3">Feature title</h1>
      <p class="lead">This is a basic jumbotron call to action</p>
    </div>
  </div>
  ```

---

### 8.4. Using Cards for layout (Sử dụng thẻ thông tin Card)
Thành phần **Card** (Thẻ thông tin) là một trong những sự bổ sung chất lượng nhất trên Bootstrap 4 (lấy cảm hứng từ phong cách Google Material Design). Card hoạt động rất tốt trên giao diện điện thoại di động, máy tính bảng và máy tính để bàn.

#### 8.4.1. Basic Card Structure (Cấu trúc Card cơ bản)
- **Đặc trưng:** Một thẻ Card chuẩn bao gồm một đường viền bo quanh mỏng, phần hình ảnh đỉnh thẻ (`.card-img-top`) và phần nội dung thân thẻ bọc trong lớp `.card-block` (trong phiên bản chính thức được đổi tên thành `.card-body`).
- **Mã nguồn mẫu:**
  ```html
  <div class="card">
    <!-- Hình ảnh đại diện cho Card -->
    <img class="card-img-top img-fluid" src="path/to/your/image.jpg" alt="Card image cap">
    <!-- Thân thẻ chứa nội dung chính -->
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some basic description text for your card should appear in this section.</p>
      <a href="#" class="btn btn-primary">Button</a>
    </div>
  </div>
  ```

---

#### 8.4.2. Moving the Card title (Thay đổi vị trí của tiêu đề Card)
- **Giải pháp:** Bạn hoàn toàn có thể di chuyển khối tiêu đề `.card-title` hiển thị lên phía trên hình ảnh thay vì nằm dưới hình ảnh bằng cách tách và mở một khối `.card-block` độc lập ở ngay đầu Card.
- **Mã nguồn mẫu:**
  ```html
  <div class="card">
    <!-- Tiêu đề hiển thị ở đầu thẻ Card -->
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
    </div>
    <img class="card-img-top img-fluid" src="path/to/your/image.jpg" alt="Card image cap">
    <!-- Nội dung mô tả phía dưới ảnh -->
    <div class="card-block">
      <p class="card-text">Some basic description text for your card should appear in this section.</p>
      <a href="#" class="btn btn-primary">Button</a>
    </div>
  </div>
  ```

---

#### 8.4.3. Changing text alignment in cards (Căn lề văn bản trong Card)
- **Giải pháp:** Bạn có thể căn lề trái, phải hoặc căn giữa cho toàn bộ nội dung văn bản bên trong Card cực kỳ nhanh chóng bằng cách bổ sung thêm các lớp căn lề như `.text-xs-center` (hoặc `.text-center`), `.text-xs-right` (hoặc `.text-right`) trực tiếp trên thẻ `.card-block`.
- **Mã nguồn mẫu:**
  ```html
  <div class="card">
    <!-- Căn giữa toàn bộ nội dung bên trong Card -->
    <div class="card-block text-xs-center">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some basic description text for your card should appear in this section.</p>
      <a href="#" class="btn btn-primary">Button</a>
    </div>
  </div>
  ```

---

#### 8.4.4. Adding a header, a footer to a Card (Thêm đầu thẻ và chân thẻ cho Card)
Để phân chia bố cục Card rõ ràng hơn nữa, bạn có thể bổ sung thêm các phần tiêu đề trên cùng `.card-header` và phần chân đế dưới cùng `.card-footer`.
- **Mã nguồn mẫu:**
  ```html
  <div class="card">
    <!-- Đầu thẻ Card -->
    <div class="card-header">
      Header
    </div>
    <!-- Thân thẻ Card -->
    <div class="card-block">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Some basic description text for your card should appear in this section.</p>
      <a href="#" class="btn btn-primary">Button</a>
    </div>
    <!-- Chân thẻ Card -->
    <div class="card-footer">
      footer
    </div>
  </div>
  ```

---

### 8.5. How to use the Navs component (Thành phần điều hướng Navs)
Thành phần Navs trong Bootstrap cung cấp các cách hiển thị danh sách liên kết điều hướng khác nhau, từ danh sách phẳng cơ bản đến dạng tab hay viên thuốc thích ứng.

#### 8.5.1. Default Nav component (Thành phần Nav cơ bản)
- **Đặc trưng:** Phiên bản mặc định của Nav chỉ hiển thị một danh sách liên kết phẳng hàng ngang đơn giản, không chứa phong cách cầu kỳ. Sử dụng lớp `.nav` ở thẻ cha `<ul>`, `.nav-item` trên thẻ `<li>`, và `.nav-link` trên các liên kết `<a>`.
- **Mã nguồn mẫu:**
  ```html
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link3</a>
    </li>
    <li class="nav-item">
      <!-- Liên kết bị vô hiệu hóa -->
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
  ```

---

#### 8.5.2. Creating tabs with the Nav component (Tạo thanh điều hướng dạng Tab)
- **Đặc trưng:** Chuyển đổi menu điều hướng phẳng mặc định thành các tab điều hướng trực quan bằng việc bổ sung lớp `.nav-tabs` ở thẻ `<ul>`. Kết hợp lớp `.active` trên thẻ liên kết đang được hiển thị.
- **Mã nguồn mẫu:**
  ```html
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
  ```

---

#### 8.5.3. Creating a pill navigation (Tạo thanh điều hướng dạng Viên thuốc - Pills)
- **Đặc trưng:** Định dạng các liên kết điều hướng có dạng khối bo tròn viền xung quanh như hình viên thuốc (pills) bằng cách bổ sung thêm lớp `.nav-pills` ở thẻ `<ul>`.
- **Mã nguồn mẫu:**
  ```html
  <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
  ```

---

#### 8.5.4. Making the Navbar responsive (Thanh điều hướng chính hỗ trợ responsive)
Navbar là thanh điều hướng lớn mặc định đầu trang. Bootstrap 4 hỗ trợ dựng Navbar tự động thu gọn thành một nút bấm menu hamburger (`.navbar-toggler`) trên các màn hình di động nhỏ dưới breakpoint chỉ định (ví dụ màn hình MD bằng cách gán `.navbar-expand-md`).
- **Mã nguồn mẫu:**
  ```html
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <!-- Tên thương hiệu/Logo -->
    <a class="navbar-brand" href="#">Navbar</a>
    
    <!-- Nút bấm Toggle (Hamburger Menu) hiển thị trên màn hình nhỏ -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <!-- Danh sách liên kết điều hướng tự động thu gọn -->
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div>
  </nav>
  ```

---

#### 8.5.5. Responsive menu with multiple tier (Menu đa cấp trong Navbar)
Để chèn một trình đơn thả xuống (dropdown) nhiều cấp vào thanh Navbar, bạn lồng một phần tử danh sách chứa lớp `.dropdown` bên trong `.navbar-nav`, sử dụng `.dropdown-toggle` để làm nút bấm kích hoạt và định dạng menu con bằng `.dropdown-menu`.
- **Mã nguồn mẫu:**
  ```html
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <!-- Thêm Dropdown vào Navbar -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
  </ul>
  ```

---

## 9. Extending Bootstrap with JavaScript Plugins

Chương này hướng dẫn sử dụng các thành phần JavaScript Plugins tích hợp sẵn trong Bootstrap 4 để tạo các hiệu ứng tương tác động nâng cao như hộp thoại Modal, Tooltips, Popovers và Carousel.

### 9.1. Coding a Modal dialog (Hộp thoại Modal)
Modal (còn gọi là dialog, pop-up, overlay hay alert) là một hộp thoại nổi lên trên cùng của trang web, buộc người dùng tương tác trước khi quay lại nội dung chính. Một Modal cơ bản yêu cầu hai thành phần chính: **Nút bấm kích hoạt** và **Khung nội dung Modal**.

- **Nút bấm kích hoạt Modal:** Sử dụng thuộc tính `data-toggle="modal"` và trỏ thuộc tính `data-target` tới ID của khung Modal tương ứng.
- **Mã nguồn mẫu nút bấm:**
  ```html
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#firstModal">
    Open Modal
  </button>
  ```

---

### 9.2. Coding Tooltips (Chú thích Tooltips)
Tooltip là một bong bóng chú thích nhỏ xuất hiện khi người dùng di chuột qua một liên kết hoặc một nút bấm.

> [!IMPORTANT]
> Trong các phiên bản thử nghiệm đầu tiên của Bootstrap 4, Tooltip yêu cầu tích hợp thư viện bổ trợ **Tether** (`tether.min.js`) để hỗ trợ định vị vị trí hiển thị. Trong phiên bản Bootstrap 4 chính thức phát hành sau đó, Tether đã được thay thế bằng thư viện **Popper.js** nhẹ và mạnh mẽ hơn.

#### 9.2.1. Thiết lập thư viện Tether (Theo slide gốc)
1. Truy cập và tải thư viện Tether từ địa chỉ: [http://github.hubspot.com/tether/](http://github.hubspot.com/tether/).
2. Giải nén thư mục tải về để tìm file `tether.min.js`.
3. Sao chép file `tether.min.js` vào thư mục lưu trữ mã nguồn `/js` của dự án để nhúng vào trang web.

---

#### 9.2.2. Định vị vị trí hiển thị Tooltips (Positioning Tooltips)
Sử dụng thuộc tính `data-placement` để thiết lập vị trí xuất hiện của bong bóng chú thích ở trên, dưới, trái, hoặc phải so với văn bản gốc:
- **Mã nguồn mẫu:**
  ```html
  <p><a href="#" data-toggle="tooltip" data-placement="top" title="Chú thích trên">Tooltip ở trên</a></p>
  <p><a href="#" data-toggle="tooltip" data-placement="bottom" title="Chú thích dưới">Tooltip ở dưới</a></p>
  <p><a href="#" data-toggle="tooltip" data-placement="right" title="Chú thích phải">Tooltip bên phải</a></p>
  <p><a href="#" data-toggle="tooltip" data-placement="left" title="Chú thích trái">Tooltip bên trái</a></p>
  ```

---

#### 9.2.3. Adding Tooltips to buttons (Thêm Tooltips vào nút bấm và Khởi tạo bằng jQuery)
Để Tooltip hoạt động trên trang web, bạn bắt buộc phải viết một đoạn script jQuery ngắn để kích hoạt hiệu ứng hiển thị này.
- **Mã nguồn mẫu HTML & Script:**
  ```html
  <!-- Khai báo Tooltip trên nút bấm -->
  <button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="This is a button tooltip!">
    This is a button tooltip!
  </button>

  <!-- Script khởi chạy hiệu ứng bằng jQuery -->
  <script>
    $(document).ready(function(){
      // Kích hoạt Tooltip trên tất cả các thẻ liên kết và nút bấm
      $("a").tooltip();
      $("button").tooltip();
    });
  </script>
  ```

---

### 9.3. Using Popover components (Thành phần hiển thị thông tin Popover)
Popover tương tự như Tooltip nhưng cho phép chứa khối nội dung mô tả dài hơn và nhiều cấu trúc HTML phong phú hơn. Popover xuất hiện khi người dùng click chọn vào liên kết/nút bấm.

#### 9.3.1. Popover basic (Popover cơ bản)
Để tạo một Popover cơ bản trên thẻ liên kết, bạn sử dụng thuộc tính `data-toggle="popover"` và cung cấp nội dung hiển thị trong thuộc tính `data-content`.
- **Mã nguồn mẫu HTML & Script kích hoạt:**
  ```html
  <p>
    <a id="popover-link" data-toggle="popover" title="My Popover" data-content="This is the content of my popover which can be longer than a tooltip">
      This is a popover
    </a>.
  </p>

  <!-- Script khởi chạy hiệu ứng bằng jQuery -->
  <script>
    $(document).ready(function(){
      // Kích hoạt cụ thể cho ID của popover
      $("#popover-link").popover();
    });
  </script>
  ```

---

#### 9.3.2. Positioning Popover (Định vị vị trí hiển thị Popovers)
Tương tự Tooltip, bạn kiểm soát hướng hiển thị của khung nội dung Popover thông qua thuộc tính `data-placement` (`top`, `bottom`, `right`, `left`):
- **Mã nguồn mẫu:**
  ```html
  <p><a id="popover-link" data-placement="top" data-toggle="popover" data-content="Nội dung Popover trên">Popover trên</a></p>
  <p><a id="popover-link" data-placement="bottom" data-toggle="popover" data-content="Nội dung Popover dưới">Popover dưới</a></p>
  <p><a id="popover-link" data-placement="right" data-toggle="popover" data-content="Nội dung Popover phải">Popover phải</a></p>
  <p><a id="popover-link" data-placement="left" data-toggle="popover" data-content="Nội dung Popover trái">Popover trái</a></p>
  ```

---

#### 9.3.3. Adding Popover to a button (Thêm Popover vào nút bấm)
- **Giải pháp:** Bạn có thể tích hợp Popover trực tiếp lên thẻ nút bấm `<button>` bằng cách gán ID tương ứng, thêm `data-toggle="popover"`, `data-content` và thuộc tính tiêu đề `title`.
- **Mã nguồn mẫu HTML & Script kích hoạt:**
  ```html
  <p>
    <button type="button" id="popover-button" class="btn btn-primary" data-toggle="popover" title="Popover Title" data-content="This is a button popover example">
      Popover Button
    </button>
  </p>

  <!-- Script kích hoạt đồng thời -->
  <script>
    $(document).ready(function(){
      $("#popover-button").popover();
    });
  </script>
  ```

---

### 9.4. Using the Collapse component (Thành phần thu gọn/mở rộng nội dung)
Collapse giúp ẩn/hiển thị nhanh chóng các khối nội dung lớn bằng cách nhấn nút bấm hoặc thẻ liên kết, rất thích hợp khi xây dựng các trang hỏi đáp (FAQs) hoặc menu xếp chồng (Accordion).

#### 9.4.1. Collapse Overview (Tổng quan về Collapse)
Để tạo hiệu ứng đóng/mở nội dung, bạn cần:
- Thêm thuộc tính `data-toggle="collapse"` vào nút bấm hoặc thẻ liên kết.
- Trỏ liên kết điều khiển (qua thuộc tính `href` hoặc `data-target`) tới ID của khối nội dung cần thu gọn.
- Gán lớp `.collapse` cho khối nội dung để ẩn nó theo mặc định.

---

#### 9.4.2. Using Link/Button to Collapse (Sử dụng liên kết hoặc nút bấm để ẩn/hiển thị nội dung)
Bạn có thể sử dụng thẻ liên kết `<a>` (định vị qua thuộc tính `href`) hoặc thẻ nút bấm `<button>` (định vị qua thuộc tính `data-target`) để thực hiện thao tác đóng/mở khối nội dung.
- **Mã nguồn mẫu sử dụng liên kết `<a>`:**
  ```html
  <p>
    <a data-toggle="collapse" href="#footwear" aria-expanded="false" aria-controls="footwear">
      Footwear (Dùng Link)
    </a>
  </p>
  <div class="collapse" id="footwear">
    <p>
      Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.
    </p>
  </div>
  ```
- **Mã nguồn mẫu sử dụng nút bấm `<button>`:**
  ```html
  <p>
    <button class="btn btn-info" type="button" data-toggle="collapse" data-target="#footwear" aria-expanded="false" aria-controls="footwear">
      Footwear (Dùng Button)
    </button>
  </p>
  <div class="collapse" id="footwear">
    <p>
      Footwear refers to garments worn on the feet, which originally serves to purpose of protection against adversities of the environment, usually regarding ground textures and temperature.
    </p>
  </div>
  ```

---

### 9.5. Coding a Bootstrap Carousel (Trình chiếu ảnh Carousel)
Carousel là một cấu phần phổ biến giúp trình chiếu slide hình ảnh/nội dung tự động chạy hoặc chuyển động khi click chọn.

#### 9.5.1. Khởi tạo cấu trúc Carousel cơ bản
Mỗi Carousel bắt đầu bằng một thẻ `<div>` bao ngoài cùng với các thuộc tính bắt buộc sau:
- Khai báo ID duy nhất cho mỗi Carousel (ví dụ: `id="carouselOne"`).
- Khai báo các lớp phong cách: `.carousel` và `.slide`.
- Thêm thuộc tính kích hoạt tự động chạy: `data-ride="carousel"`.

---

#### 9.5.2. Adding the Carousel bullet navigation (Thêm thanh chấm chỉ số trang)
Thanh chấm chỉ số trang (indicators) hiển thị dạng danh sách có thứ tự dưới cùng slide cho biết số lượng slide và slide nào đang kích hoạt.
- **Mã nguồn mẫu:**
  ```html
  <ol class="carousel-indicators">
    <!-- Thuộc tính data-slide-to trỏ đến vị trí trang chỉ mục bắt đầu từ số 0 -->
    <li data-target="#carouselOne" data-slide-to="0" class="active"></li>
    <li data-target="#carouselOne" data-slide-to="1"></li>
    <li data-target="#carouselOne" data-slide-to="2"></li>
  </ol>
  ```

---

#### 9.5.3. Including Carousel slides (Thêm các slide hình ảnh)
Các slide ảnh đơn lẻ được bọc trong một container lớn chứa lớp `.carousel-inner` với thuộc tính `role="listbox"`. Mỗi trang slide là một thẻ `<div>` chứa lớp `.carousel-item` (đặt thêm lớp `.active` cho slide đầu tiên hiển thị).
- **Mã nguồn mẫu:**
  ```html
  <div class="carousel-inner" role="listbox">
    <!-- Slide thứ nhất (Hiển thị đầu tiên) -->
    <div class="carousel-item active">
      <img src="slide1.jpg" alt="First slide">
    </div>
    <!-- Slide thứ hai -->
    <div class="carousel-item">
      <img src="slide2.jpg" alt="Second slide">
    </div>
    <!-- Slide thứ ba -->
    <div class="carousel-item">
      <img src="slide3.jpg" alt="Third slide">
    </div>
  </div>
  ```

---

#### 9.5.4. Adding Carousel arrow navigation (Thêm nút điều hướng mũi tên)
Mũi tên điều hướng trái/phải đặt ở hai bên viền Carousel giúp người dùng chuyển đổi thủ công slide ảnh trước đó (`prev`) hoặc tiếp theo (`next`).

> [!NOTE]
> Trong các phiên bản thử nghiệm Alpha/Beta của Bootstrap 4, lớp điều khiển mũi tên là `.left.carousel-control` / `.right.carousel-control` đi kèm các icon lớp `.icon-prev` / `.icon-next`. 
> Ở phiên bản Bootstrap 4 ổn định chính thức, các lớp này đã được chuẩn hóa thành `.carousel-control-prev` / `.carousel-control-next` đi kèm icon `.carousel-control-prev-icon` / `.carousel-control-next-icon`.

- **Mã nguồn mẫu:**
  ```html
  <!-- Mũi tên quay lại slide trước (Previous) -->
  <a class="left carousel-control" href="#carouselOne" role="button" data-slide="prev">
    <span class="icon-prev" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  
  <!-- Mũi tên chuyển slide tiếp theo (Next) -->
  <a class="right carousel-control" href="#carouselOne" role="button" data-slide="next">
    <span class="icon-next" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  ```









