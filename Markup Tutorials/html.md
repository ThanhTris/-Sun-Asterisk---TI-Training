
## 1. Introducing HTML

### 1.1. What is HTML? (HTML là gì?)
- **Định nghĩa:** HTML là viết tắt của **Hyper Text Markup Language** (Ngôn ngữ đánh dấu siêu văn bản).
- **Mục đích:** Là ngôn ngữ đánh dấu tiêu chuẩn được sử dụng rộng rãi để xây dựng cấu trúc của các trang web hiển thị trên Internet.
- **Vai trò:**
  - Định hình khung cấu trúc và nội dung hiển thị của một trang web.
  - Được cấu thành bởi một chuỗi các phần tử (Elements) khác nhau xếp chồng lên nhau.
  - Các phần tử HTML này đóng vai trò chỉ dẫn cho trình duyệt Web (như Chrome, Firefox, Safari) cách hiển thị nội dung trực quan đến người dùng.

### 1.2. HTML history (Lịch sử phát triển)
Trải qua nhiều năm phát triển, HTML đã được cập nhật nhiều phiên bản lớn để đáp ứng nhu cầu ngày càng cao của môi trường Internet:
- **1990:** Earliest HTML in Use (Phiên bản HTML sơ khai đầu tiên do Tim Berners-Lee sáng tạo).
- **1995:** HTML 2.0 (Bổ sung thêm các tính năng biểu mẫu và bảng cơ bản).
- **1997:** HTML 3.2 (Được tổ chức W3C chuẩn hóa chính thức).
- **1999:** HTML 4.01 (Hỗ trợ tốt hơn cho CSS và các định dạng đa phương tiện).
- **2000:** XHTML 1.0 (Phát triển dựa trên XML, quy chuẩn cú pháp viết code nghiêm ngặt hơn).
- **2001:** XHTML 1.1 (Cải tiến nhỏ và module hóa cấu trúc).
- **20XX (2014 trở đi):** HTML 5.0 (Phiên bản hiện tại, mang đến cuộc cách mạng với các thẻ ngữ nghĩa Semantic Web, hỗ trợ Audio/Video trực tiếp, vẽ đồ họa Canvas, và cải thiện hiệu năng ứng dụng web mà không cần cài thêm plugin ngoài).

### 1.3. HTML structure (Cấu trúc của trang HTML)
Một trang tài liệu HTML chuẩn mực luôn tuân thủ cấu trúc phân cấp hình cây như sau:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

* **`<!DOCTYPE html>`:** Khai báo bắt buộc ở dòng đầu tiên của file, thông báo cho trình duyệt biết đây là tài liệu chuẩn **HTML5** để dựng trang chính xác.
* **`<html>`:** Phần tử gốc (Root element) bao bọc toàn bộ mã nguồn của trang web.
* **`<head>`:** Vùng chứa các thông tin mô tả (Meta information) của trang web như bảng mã ký tự hiển thị (charset), liên kết file CSS, Javascript, cấu hình Responsive và tiêu đề trang. Các thông tin trong này sẽ không hiển thị trực tiếp trên giao diện trang web.
* **`<title>`:** Tiêu đề của trang web, hiển thị trên tab của trình duyệt hoặc trong kết quả tìm kiếm.
* **`<body>`:** Vùng chứa toàn bộ các nội dung hiển thị trực quan đến người dùng (như văn bản, hình ảnh, liên kết, bảng biểu, danh sách, video, v.v.).
* **`<h1>`:** Thẻ định nghĩa một tiêu đề lớn (Heading cấp 1), thường dùng cho tiêu đề quan trọng nhất của bài viết.
* **`<p>`:** Thẻ định nghĩa một đoạn văn bản (Paragraph).

### 1.4. Development tool (Công cụ phát triển)
Mã nguồn HTML về bản chất là văn bản thuần túy (Plain text), vì vậy bạn có thể dễ dàng viết và chỉnh sửa nó bằng bất kỳ công cụ soạn thảo văn bản nào.

#### A. Các công cụ soạn thảo khuyến nghị
- **Mới bắt đầu:** Có thể sử dụng các công cụ văn bản cơ bản mặc định của hệ điều hành như **Notepad** (Windows) hoặc **TextEdit** (macOS).
- **Lập trình chuyên nghiệp:** Nên sử dụng các trình soạn thảo code chuyên nghiệp hỗ trợ gợi ý cú pháp, tự động đóng thẻ và tích hợp sẵn terminal như **VS Code (Visual Studio Code)** (phổ biến nhất), **Sublime Text** (nhẹ và nhanh), hoặc **Notepad++**.

#### B. Quy trình 4 bước tạo trang web đầu tiên
- **Bước 1: Open editor (Mở trình soạn thảo):** Khởi chạy một trình soạn thảo văn bản bất kỳ (ví dụ: Notepad hoặc VS Code).
- **Bước 2: Write Some HTML (Viết mã HTML):** Nhập mã nguồn cấu trúc HTML cơ bản vào file.
- **Bước 3: Save the HTML Page (Lưu trang):** Tiến hành lưu tệp tin lại trên máy tính. Tên file phải kết thúc bằng đuôi mở rộng là `.html` hoặc `.htm` (Ví dụ: `index.html`). Chọn mã hóa ký tự là **UTF-8** để hiển thị được tiếng Việt có dấu.
- **Bước 4: View the HTML Page in Your Browser (Xem kết quả):** Click đúp vào file `.html` vừa lưu, trình duyệt mặc định trên máy sẽ tự động biên dịch và hiển thị trang web của bạn.

---

## 2. HTML Elements

Phần này tóm tắt về các thẻ HTML cơ bản, cách sử dụng các thẻ tiêu đề, đoạn văn và định dạng văn bản chuẩn hóa.

### 2.1. What is an HTML Tag (Thẻ HTML là gì?)
- **Khái niệm:** Thẻ HTML (HTML tag) là một đoạn ngôn ngữ đánh dấu dùng để xác định điểm bắt đầu và điểm kết thúc của một phần tử HTML trong tài liệu.
- **Vai trò:** Giúp trình duyệt web chuyển đổi mã nguồn HTML thô thành các trang giao diện trực quan cho người dùng xem.
- **Đặc trưng:**
  - Phần lớn các thẻ (nhưng không phải tất cả) sử dụng thẻ mở (opening tag) và thẻ đóng (closing tag) để bao bọc nội dung cần định dạng.
    *Ví dụ:* `<p>Nội dung đoạn văn</p>` (Thẻ mở `<p>`, thẻ đóng `</p>`).
  - Một số thẻ đặc biệt là thẻ tự đóng (self-closing/empty tag) không cần thẻ đóng vì không bao bọc văn bản thô bên trong (Ví dụ: thẻ nhúng ảnh `<img>`, thẻ xuống dòng `<br>`).
  - Các thẻ HTML chỉ đóng vai trò cấu trúc và định hướng hiển thị, chúng hoàn toàn ẩn và **không hiển thị** trực tiếp trên màn hình trình duyệt.

### 2.2. HTML Headings (Thẻ tiêu đề)
- **Khái niệm:** Thẻ tiêu đề trong HTML được sử dụng để hiển thị các tiêu đề chính hoặc tiêu đề phụ trên trang web nhằm tạo tính phân cấp thông tin rõ ràng.
- **Phân loại:** Được định nghĩa từ thẻ `<h1>` đến `<h6>` với mức độ quan trọng giảm dần và cỡ chữ nhỏ dần.
  ```html
  <h1>Heading 1</h1> <!-- Tiêu đề chính quan trọng nhất -->
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6> <!-- Tiêu đề phụ nhỏ nhất -->
  ```
- **Quy tắc sử dụng:** Nên dùng thẻ `<h1>` cho tiêu đề chính duy nhất của toàn bài viết, theo sau bởi các tiêu đề phụ `<h2>`, sau đó là các tiêu đề nhỏ hơn `<h3>`, `<h4>` tùy thuộc cấu trúc bài viết để tối ưu hóa SEO.

### 2.3. HTML Paragraphs (Đoạn văn bản)
- **Khái niệm:** Một đoạn văn bản trong HTML luôn bắt đầu trên một dòng mới và trình duyệt sẽ tự động thêm một khoảng trống lề (margin) nhỏ trước và sau đoạn văn đó.
- **Thực thi:** Sử dụng phần tử `<p>` để định nghĩa một đoạn văn.
  ```html
  <p>This is a paragraph.</p>
  <p>This is another paragraph.</p>
  ```

### 2.4. HTML Text Formatting (Định dạng văn bản)
HTML cung cấp các phần tử định dạng đặc biệt giúp hiển thị văn bản với các kiểu dáng và ngữ nghĩa trực quan khác nhau:

| Thẻ | Chức năng định dạng | Ví dụ |
| :--- | :--- | :--- |
| **`<b>`** | **Bold text**: Chỉ làm đậm chữ (không mang ý nghĩa nhấn mạnh). | `<b>chữ đậm</b>` |
| **`<strong>`** | **Important text**: Làm đậm chữ và mang ý nghĩa cực kỳ quan trọng đối với cấu trúc dữ liệu. | `<strong>quan trọng!</strong>` |
| **`<i>`** | *Italic text*: Chỉ làm in nghiêng chữ (phục vụ thẩm mỹ hiển thị). | `<i>chữ nghiêng</i>` |
| **`<em>`** | *Emphasized text*: In nghiêng chữ và mang tính chất nhấn mạnh ý nghĩa câu từ. | `<em>nhấn mạnh</em>` |
| **`<mark>`** | <mark>Marked text</mark>: Tô sáng văn bản (như dùng bút dạ quang). | `<mark>tô sáng</mark>` |
| **`<small>`** | Smaller text: Hiển thị chữ nhỏ hơn bình thường (thường dùng cho chú thích bản quyền). | `<small>chữ nhỏ</small>` |
| **`<del>`** | <del>Deleted text</del>: Hiển thị đường gạch ngang chữ để biểu thị nội dung đã bị xóa. | `<del>code cũ</del>` |
| **`<ins>`** | <ins>Inserted text</ins>: Hiển thị đường gạch chân chữ để biểu thị nội dung mới được thêm vào. | `<ins>code mới</ins>` |
| **`<sub>`** | Subscript text: Hiển thị chữ nhỏ thụt xuống bên dưới (ví dụ viết H<sub>2</sub>O). | `H<sub>2</sub>O` |
| **`<sup>`** | Superscript text: Hiển thị chữ nhỏ nâng lên phía trên (ví dụ viết E = mc<sup>2</sup>). | `mc<sup>2</sup>` |

---

### 2.5. HTML Links (Liên kết)
- **Khái niệm:** Đường liên kết trong HTML là các siêu liên kết (hyperlinks). Khi bạn click vào liên kết, trình duyệt sẽ chuyển hướng sang một tài liệu hoặc trang web khác.
- **Hiệu ứng con trỏ:** Khi người dùng di chuyển con trỏ chuột qua một liên kết, biểu tượng con trỏ sẽ tự động chuyển thành hình bàn tay nhỏ.
- **Cú pháp:**
  ```html
  <a href="url">link text</a>
  ```
- **Giải thích chi tiết:**
  - Phần tử `<a>` (Anchor) đại diện cho liên kết.
  - Thuộc tính quan trọng nhất là `href` (hypertext reference), dùng để chỉ định URL đích mà liên kết sẽ dẫn tới.
  - Văn bản nằm giữa thẻ mở và đóng (`link text`) là nội dung hiển thị để người dùng click vào.

---

### 2.6. HTML Images (Hình ảnh)
- **Khái niệm:** Việc sử dụng hình ảnh giúp tăng tính thẩm mỹ và cải thiện thiết kế tổng quan của trang web.
- **Cơ chế nhúng:** Sử dụng thẻ `<img>` để nhúng ảnh vào trang HTML.
- **Tính chất thẻ:** Thẻ `<img>` là thẻ tự đóng (empty tag), chỉ chứa các thuộc tính và không có thẻ đóng `</img>`.
- **Cú pháp:**
  ```html
  <img src="url" alt="alternatetext">
  ```
- **Giải thích chi tiết:**
  - Thuộc tính `src` (source) chỉ định đường dẫn hoặc URL của hình ảnh cần hiển thị.
  - Thuộc tính `alt` (alternate text) cung cấp văn bản thay thế cho hình ảnh trong trường hợp ảnh bị lỗi không tải được, hoặc để các công cụ hỗ trợ người khiếm thị đọc nội dung.

---

### 2.7. HTML Tables (Bảng biểu)
- **Khái niệm:** Bảng trong HTML cho phép lập trình viên sắp xếp và hiển thị dữ liệu một cách trực quan dưới dạng các hàng (rows) và cột (columns).
- **Cơ chế hoạt động:** Mỗi ô dữ liệu trong bảng được định nghĩa bằng cặp thẻ `<td>` và `</td>`.
- **Đặc điểm:** Các ô dữ liệu `<td>` đóng vai trò là vùng chứa nội dung của bảng. Chúng có thể chứa bất kỳ phần tử HTML nào khác như văn bản thuần túy, hình ảnh, danh sách, hoặc thậm chí là một bảng con khác.
- **Cấu trúc chuẩn:**
  ```html
  <table>
    <thead>
      <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </tbody>
  </table>
  ```
  - `<table>`: Khai báo bắt đầu bảng.
  - `<thead>` / `<tbody>`: Phân chia phần đầu trang (header) và phần thân (body) của bảng.
  - `<tr>` (table row): Định nghĩa một hàng trong bảng.
  - `<th>` (table header): Định nghĩa ô tiêu đề cột (chữ sẽ tự động được in đậm và căn giữa).
  - `<td>` (table data): Định nghĩa ô chứa dữ liệu thông thường.

---

### 2.8. HTML Lists (Danh sách)
- **Khái niệm:** Danh sách trong HTML giúp nhóm một tập hợp các mục tin có liên quan lại với nhau để dễ theo dõi. Có hai loại danh sách chính:

#### A. Unordered List (Danh sách không thứ tự)
- Hiển thị dưới dạng các mục có dấu chấm tròn (bullet points) ở đầu dòng.
- Bắt đầu bằng thẻ `<ul>` (unordered list), mỗi mục con bên trong bắt đầu bằng thẻ `<li>` (list item).
- **Ví dụ:**
  ```html
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
  ```

#### B. Ordered List (Danh sách có thứ tự)
- Hiển thị dưới dạng các mục được đánh số thứ tự tăng dần (1, 2, 3...).
- Bắt đầu bằng thẻ `<ol>` (ordered list), mỗi mục con bên trong bắt đầu bằng thẻ `<li>`.
- **Ví dụ:**
  ```html
  <ol>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ol>
  ```

---

### 2.9. HTML Forms (Biểu mẫu)
- **Khái niệm:** Biểu mẫu được dùng để thu thập thông tin/dữ liệu nhập vào từ người dùng (user input). Dữ liệu này sau đó thường được gửi lên máy chủ (server) để xử lý.
- **Cấu trúc cơ bản:** Sử dụng phần tử `<form>` để định nghĩa một biểu mẫu thu thập thông tin.
  ```html
  <form>
    <!-- Các phần tử form (input, textarea, button...) đặt tại đây -->
    form elements
  </form>
  ```

#### 2.9.1. The `<input>` element (Phần tử nhập liệu)
Phần tử `<input>` là phần tử được sử dụng phổ biến nhất trong biểu mẫu. Cách hiển thị và hành vi của `<input>` phụ thuộc hoàn toàn vào thuộc tính `type`.

| Giá trị thuộc tính `type` | Chức năng hiển thị | Mô tả |
| :--- | :--- | :--- |
| **`type="text"`** | Single-line text input | Trường nhập văn bản một dòng. |
| **`type="radio"`** | Radio button | Nút chọn một (chỉ cho phép chọn duy nhất 1 mục trong nhóm). |
| **`type="checkbox"`** | Checkbox | Ô đánh dấu (cho phép chọn không, một hoặc nhiều mục). |
| **`type="submit"`** | Submit button | Nút gửi dữ liệu của form lên máy chủ xử lý. |
| **`type="button"`** | Clickable button | Nút bấm thông thường (thường kết hợp xử lý Javascript). |

---

##### A. Text Input (Trường nhập văn bản một dòng)
Định nghĩa một trường nhập văn bản một dòng để người dùng nhập thông tin như Tên, Tài khoản...
- **Mã nguồn mẫu:**
  ```html
  <form>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname">
  </form>
  ```
- **Giải thích:**
  - Thẻ `<label>` dùng để gắn nhãn mô tả cho ô nhập liệu. Thuộc tính `for` của `<label>` phải trùng với thuộc tính `id` của `<input>` để liên kết chúng với nhau (khi người dùng click vào nhãn, ô input sẽ tự động được chọn).
  - Thuộc tính `name` là tên của tham số dữ liệu sẽ được gửi lên máy chủ.

---

##### B. Radio Buttons (Nút chọn duy nhất)
Cho phép người dùng chọn một giá trị duy nhất trong số các lựa chọn được đưa ra.
- **Mã nguồn mẫu:**
  ```html
  <p>Choose your favorite Web language:</p>
  <form>
    <input type="radio" id="html" name="fav_language" value="HTML">
    <label for="html">HTML</label><br>
    <input type="radio" id="css" name="fav_language" value="CSS">
    <label for="css">CSS</label><br>
    <input type="radio" id="javascript" name="fav_language" value="JavaScript">
    <label for="javascript">JavaScript</label>
  </form>
  ```
- **Giải thích:**
  - Để nhóm các nút radio lại với nhau (chỉ cho phép chọn 1 trong số đó), tất cả các thẻ `<input type="radio">` trong nhóm đó phải có **cùng giá trị thuộc tính `name`** (ở ví dụ trên là `name="fav_language"`).
  - Thuộc tính `value` xác định giá trị thực tế sẽ được gửi đi khi biểu mẫu được submit.

---

##### C. Checkboxes (Hộp chọn nhiều mục)
Cho phép người dùng chọn không, một hoặc nhiều tùy chọn trong số các lựa chọn.
- **Mã nguồn mẫu:**
  ```html
  <form>
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    <label for="vehicle1"> I have a bike</label><br>
    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
    <label for="vehicle2"> I have a car</label><br>
    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
    <label for="vehicle3"> I have a boat</label>
  </form>
  ```
- **Giải thích:**
  - Khác với radio button, các checkbox hoạt động độc lập nên thuộc tính `name` của mỗi ô checkbox thường đặt khác nhau để nhận được đầy đủ các lựa chọn của người dùng.

---

##### D. Submit Button (Nút gửi biểu mẫu)
Định nghĩa một nút bấm để gửi toàn bộ dữ liệu người dùng đã nhập trong form tới trang xử lý (form-handler) được cấu hình ở thuộc tính `action` của thẻ `<form>`.
- **Mã nguồn mẫu:**
  ```html
  <form action="/action_page.php">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </form>
  ```
- **Giải thích:**
  - Thuộc tính `action="/action_page.php"` trên thẻ `<form>` chỉ định địa chỉ của máy chủ sẽ tiếp nhận và xử lý dữ liệu biểu mẫu.
  - Thuộc tính `value="Submit"` trên `<input type="submit">` thiết lập văn bản hiển thị trên mặt nút bấm.

---

### 2.10. Inline Element vs Block Element (Phần tử nội dòng và Phần tử khối)
Mọi phần tử HTML đều có một giá trị hiển thị mặc định (default display value) tùy thuộc vào loại phần tử đó. Có hai giá trị hiển thị chính là **block** (khối) và **inline** (nội dòng).

#### A. Block Element (Phần tử khối)
- **Đặc điểm:**
  - Luôn luôn bắt đầu trên một dòng mới.
  - Trình duyệt sẽ tự động thêm một khoảng trống lề (margin) trước và sau phần tử đó.
  - Luôn luôn chiếm toàn bộ chiều rộng khả dụng của phần tử chứa nó (kéo dài sang trái và phải hết mức có thể).
- **Các phần tử khối phổ biến:** `<p>`, `<div>`, `<h1>` - `<h6>`, `<ul>`, `<ol>`, `<li>`, `<hr>`.
- **Mã nguồn mẫu:**
  ```html
  <p>Hello World</p>
  <div>Hello World</div>
  ```

#### B. Inline Element (Phần tử nội dòng)
- **Đặc điểm:**
  - Không bắt đầu trên một dòng mới.
  - Chỉ chiếm khoảng chiều rộng vừa đủ để chứa nội dung của chính nó.
- **Các phần tử nội dòng phổ biến:** `<span>`, `<a>`, `<b>`, `<strong>`, `<i>`, `<em>`, `<img>`.
- **Mã nguồn mẫu:**
  ```html
  <span>Hello World</span>
  <a href="url">link text</a>
  ```

---

## 3. HTML Semantics

Các phần tử ngữ nghĩa (Semantic Elements) giúp cấu trúc trang web trở nên rõ ràng, giúp cả lập trình viên và các công cụ tìm kiếm (như Google) hiểu được ý nghĩa của các vùng dữ liệu trên trang.

### 3.1. What are Semantic Elements (Phần tử ngữ nghĩa là gì?)
- **Định nghĩa:** Phần tử ngữ nghĩa (Semantic elements) là những phần tử tự bản thân tên gọi của nó đã mang một ý nghĩa rõ ràng, mô tả chính xác nội dung chứa bên trong nó.
- **Phân biệt:**
  - **Non-semantic elements (Không mang ý nghĩa ngữ nghĩa):** Không cho biết bất kỳ thông tin nào về nội dung bên trong của nó. (Ví dụ tiêu biểu: `<div>` và `<span>`).
  - **Semantic elements (Mang ý nghĩa ngữ nghĩa):** Mô tả rõ ràng nội dung bên trong nó cho cả trình duyệt và nhà phát triển. (Ví dụ tiêu biểu: `<form>`, `<table>`, và `<article>`).

---

### 3.2. section element (Phần tử vùng - `<section>`)
- **Mô tả:** Thẻ `<section>` định nghĩa một phân đoạn/vùng nội dung cụ thể trong tài liệu.
- **Ứng dụng:** Thường dùng để gom nhóm các nội dung có cùng chủ đề như các chương sách, phần giới thiệu, danh sách tin tức, hoặc thông tin liên hệ.
- **Mã nguồn mẫu:**
  ```html
  <section>
    <h2>Giới thiệu Sun*</h2>
    <p>Là một Digital Creative Studio, Sun* luôn đề cao tinh thần làm chủ sản phẩm, tư duy sáng tạo trong mỗi dự án để mang đến những trải nghiệm "Awesome" nhất cho end-user.</p>
  </section>
  <section>
    <h2>Sứ mệnh của Sun*</h2>
    <p>Với lý tưởng chung tay xây dựng nên một tương lai tốt đẹp và tươi sáng, sứ mệnh của Framgia là luôn cố gắng tạo ra những trải nghiệm thú vị khiến người ta phải thốt lên rằng “Awesome!” (Thật tuyệt vời), hoặc “Wow” hay “Crazy” (Thật không thể tin được)</p>
  </section>
  ```

---

### 3.3. article element (Phần tử bài viết - `<article>`)
- **Mô tả:** Thẻ `<article>` dùng để chứa một khối nội dung độc lập, tự chủ và có thể tồn tại riêng biệt mà vẫn giữ nguyên ý nghĩa (ngay cả khi tách rời khỏi toàn bộ website).
- **Ứng dụng:** Thường dùng cho các bài đăng diễn đàn, bài viết blog, bình luận của người dùng, thẻ sản phẩm (product cards), hoặc các bài báo tin tức.
- **Mã nguồn mẫu:**
  ```html
  <article>
    <h2>Google Chrome</h2>
    <p>Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!</p>
  </article>
  
  <article>
    <h2>Mozilla Firefox</h2>
    <p>Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018.</p>
  </article>
  ```

---

### 3.4. header element (Phần tử đầu trang - `<header>`)
- **Mô tả:** Thẻ `<header>` đại diện cho vùng chứa nội dung giới thiệu ban đầu hoặc tập hợp các liên kết điều hướng (navigation).
- **Cấu trúc:** Một thẻ `<header>` thường chứa các thẻ tiêu đề từ `<h1>` đến `<h6>`, logo, biểu tượng hình ảnh, hoặc thông tin tác giả của bài viết.
- **Mã nguồn mẫu:**
  ```html
  <article>
    <header>
      <h1>What Does WWF Do?</h1>
      <p>WWF's mission:</p>
    </header>
    <p>WWF's mission is to stop the degradation of our planet's natural environment, and build a future in which humans live in harmony with nature.</p>
  </article>
  ```

---

### 3.5. footer element (Phần tử cuối trang - `<footer>`)
- **Mô tả:** Thẻ `<footer>` định nghĩa phần chân trang (footer) cho một tài liệu hoặc cho một vùng dữ liệu cụ thể (section).
- **Cơ chế hoạt động:**
  - Một tài liệu đơn lẻ có thể chứa nhiều phần tử `<footer>` khác nhau ở các phần vùng riêng biệt.
  - Thường bao gồm thông tin tác giả, thông tin bản quyền, thông tin liên hệ, sơ đồ trang web (sitemap)...
- **Mã nguồn mẫu:**
  ```html
  <footer>
    <p>Author: Hege Refsnes</p>
    <p><a href="mailto:hege@example.com">hege@example.com</a></p>
  </footer>
  ```

---

### 3.6. Why you should use Semantic elements (Tại sao nên sử dụng thẻ ngữ nghĩa?)
Sử dụng các thẻ ngữ nghĩa mang lại nhiều lợi ích to lớn đối với cả chất lượng mã nguồn lẫn hiệu suất của trang web:
- **Tối ưu tìm kiếm:** Các bộ máy tìm kiếm (Search engines) sẽ coi nội dung bên trong thẻ ngữ nghĩa là các từ khóa quan trọng để đánh giá thứ hạng tìm kiếm của trang web (SEO).
- **Hỗ trợ tiếp cận:** Các công cụ đọc màn hình (Screen readers) có thể sử dụng các thẻ ngữ nghĩa như các mốc định hướng giúp người dùng khiếm thị dễ dàng điều hướng và duyệt qua trang web.
- **Dễ đọc & bảo trì:** Việc tìm kiếm và hiểu các khối code có ý nghĩa rõ ràng sẽ dễ dàng hơn rất nhiều so với việc phải tìm kiếm giữa hàng loạt thẻ `<div>` lồng nhau vô tận (dù có hoặc không có class đặt tên).
- **Đồng bộ hóa thành phần:** Tên gọi ngữ nghĩa giúp phản ánh chuẩn xác cấu trúc đặt tên cho các thành phần hoặc phần tử tùy chỉnh (Custom elements/Components) trong lập trình hiện đại.

---

## 4. HTML Attributes

Thuộc tính HTML (Attributes) cung cấp thêm các thông tin cấu hình bổ sung cho các phần tử HTML để kiểm soát hành vi hoặc định dạng hiển thị của chúng.

### 4.1. What is an HTML Attribute (Thuộc tính HTML là gì?)
- **Đặc trưng:**
  - Thuộc tính HTML cung cấp thêm thông tin chi tiết hoặc cấu hình bổ sung cho các phần tử HTML.
  - Tất cả mọi phần tử HTML đều có thể sở hữu các thuộc tính.
  - Thuộc tính luôn luôn được khai báo bên trong **thẻ mở** (start tag) của phần tử.
  - Thuộc tính thường đi kèm dưới dạng cặp tên/giá trị: `name="value"`.

---

### 4.2. href attribute (Thuộc tính liên kết)
- **Mô tả:** Thẻ `<a>` định nghĩa một siêu liên kết. Thuộc tính `href` chỉ định địa chỉ URL của trang web mà liên kết sẽ dẫn đến khi người dùng click vào.
- **Mã nguồn mẫu:**
  ```html
  <a href="https://sun-asterisk.vn/">Visit Sun-asterisk</a>
  ```

---

### 4.3. src attribute (Thuộc tính nguồn ảnh)
- **Mô tả:** Thẻ `<img>` dùng để nhúng hình ảnh. Thuộc tính `src` (source) chỉ định đường dẫn hiển thị của hình ảnh đó.
- **Mã nguồn mẫu:**
  ```html
  <img src="sun_asterisk.jpg">
  ```
- **Có hai phương pháp khai báo đường dẫn URL trong thuộc tính `src`:**
  - **Absolute URL (Đường dẫn tuyệt đối):** Liên kết trực tiếp tới một hình ảnh bên ngoài được lưu trữ trên một website khác.
    *Ví dụ:* `src="https://sun-asterisk.vn/wp-content/uploads/2020/11/intro-business.png"`.
  - **Relative URL (Đường dẫn tương đối):** Liên kết tới hình ảnh nội bộ được lưu trữ ngay trong thư mục dự án của website.
    *Ví dụ:* `src="/images/sun_asterisk.jpg"`.

> [!TIP]
> Bạn nên ưu tiên sử dụng đường dẫn tương đối (Relative URL). Chúng sẽ không bị lỗi liên kết hình ảnh nếu bạn thay đổi tên miền (domain) của website.

---

### 4.4. alt attribute (Thuộc tính văn bản thay thế)
- **Mô tả:** Thuộc tính bắt buộc đối với thẻ `<img>`, chỉ định đoạn văn bản thay thế sẽ hiển thị thay thế cho hình ảnh trong một số trường hợp đặc biệt.
- **Các trường hợp cần thiết:**
  - Khi đường truyền kết nối mạng quá chậm không tải được ảnh.
  - Khi có lỗi xảy ra ở đường dẫn trong thuộc tính `src`.
  - Hỗ trợ các công cụ đọc màn hình (screen readers) mô tả hình ảnh cho người khiếm thị.
- **Mã nguồn mẫu:**
  ```html
  <img src="img_girl.jpg" alt="Girl with a jacket">
  ```

---

### 4.5. class attribute (Thuộc tính lớp)
- **Mô tả:** Thuộc tính `class` được sử dụng để chỉ định một lớp (class) cho một phần tử HTML.
- **Đặc trưng:**
  - Nhiều phần tử HTML khác nhau có thể sử dụng chung một lớp.
  - Thuộc tính `class` có thể được sử dụng trên **bất kỳ** phần tử HTML nào.
- **Vai trò:**
  - Thường được sử dụng để trỏ đến tên lớp trong trang định kiểu (style sheet/CSS) để áp dụng giao diện.
  - Được sử dụng bởi JavaScript để truy cập và thao tác trên các phần tử có tên lớp cụ thể đó.
- **Mã nguồn mẫu:**
  ```html
  <h1>My <span class="note">Important</span> Heading</h1>
  ```

---

### 4.6. id attribute (Thuộc tính định danh)
- **Mô tả:** Thuộc tính `id` được sử dụng để thiết lập một định danh duy nhất (unique id) cho một phần tử HTML.
- **Quy tắc đặt tên:**
  - Bạn **không được phép** có nhiều hơn một phần tử sử dụng cùng một giá trị `id` trong cùng một tài liệu HTML.
  - Tên định danh `id` phải chứa ít nhất một ký tự, không được bắt đầu bằng số và không được chứa khoảng trắng (dấu cách, tab...).
- **Mã nguồn mẫu:**
  ```html
  <h1 id="myHeader">My Cities</h1>
  ```


