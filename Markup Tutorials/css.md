
## 1. Introducing CSS

### 1.1. What is CSS? (CSS là gì?)
- **Định nghĩa:** CSS là viết tắt của **Cascading Style Sheets** (Bảng kiểu mẫu xếp chồng).
- **Vai trò:** Ngôn ngữ định dạng dùng để thiết lập cách hiển thị trực quan (màu sắc, bố cục, font chữ...) cho các phần tử trên trang web được dựng bằng HTML.
- **Cơ chế:** Tách biệt hoàn toàn phần nội dung/cấu trúc (HTML) khỏi phần giao diện/trình bày (CSS).

### 1.2. Why use CSS? (Tại sao nên sử dụng CSS?)
- **Tối ưu hóa thời gian:** Định dạng kiểu dáng đồng bộ cho hàng loạt trang web chỉ thông qua một tệp CSS duy nhất.
- **Dễ dàng bảo trì:** Khi cần thay đổi giao diện toàn hệ thống, chỉ cần chỉnh sửa code tại một nơi duy nhất.
- **Tách biệt mã nguồn:** Giúp mã HTML sạch sẽ, dễ đọc và tập trung hoàn toàn vào cấu trúc dữ liệu.
- **Thiết kế phản hồi (Responsive):** Cung cấp các công cụ mạnh mẽ để giao diện tự động tương thích với mọi kích thước màn hình thiết bị.

### 1.3. CSS syntax (Cú pháp CSS)
Một quy tắc CSS (CSS Rule) bao gồm một bộ chọn (Selector) và một khối khai báo (Declaration block):

```css
selector {
  property: value;
}
```
* **Selector (Bộ chọn):** Xác định phần tử HTML nào sẽ được áp dụng định dạng.
* **Property (Thuộc tính):** Yếu tố thẩm mỹ cần thay đổi (ví dụ: `color`, `font-size`, `margin`).
* **Value (Giá trị):** Mức độ thay đổi áp dụng cho thuộc tính (ví dụ: `blue`, `16px`, `20px`).
* *Lưu ý:* Các khai báo luôn nằm trong cặp dấu ngoặc nhọn `{}` và kết thúc bằng dấu chấm phẩy `;`.

---

### 1.4. How to add CSS (Các phương pháp nhúng CSS)
Có 3 cách chính để đưa CSS vào tài liệu HTML:

#### A. External CSS (CSS ngoài)
Viết toàn bộ mã CSS trong một file có đuôi `.css` riêng biệt và liên kết nó vào thẻ `<head>` của trang HTML. Đây là phương pháp tối ưu nhất được khuyên dùng trong thực tế.
```html
<link rel="stylesheet" href="style.css">
```

#### B. Internal CSS (CSS trong)
Định nghĩa các quy tắc CSS trực tiếp bên trong thẻ `<style>` đặt tại phần `<head>` của tài liệu HTML. Thích hợp khi trang web đó có phong cách thiết kế độc lập, duy nhất.
```html
<style>
  body {
    background-color: linen;
  }
  h1 {
    color: maroon;
  }
</style>
```

#### C. Inline CSS (CSS trực tiếp)
Viết mã định dạng trực tiếp vào thuộc tính `style` của thẻ mở HTML cụ thể. Cách này có độ ưu tiên cao nhất nhưng làm mã nguồn bị rối và khó bảo trì, chỉ nên dùng khi cần ghi đè khẩn cấp một phần tử đơn lẻ.
```html
<h1 style="color: blue; text-align: center;">Hello World</h1>
```

---

## 2. CSS Selector

Bộ chọn CSS được sử dụng để tìm kiếm và khoanh vùng chính xác các phần tử HTML mà bạn muốn áp dụng phong cách thiết kế.

### 2.1. Nhóm bộ chọn cơ bản (Basic Selectors)
- **Element Selector (Bộ chọn thẻ):** Chọn các phần tử dựa trên tên thẻ HTML.
  ```css
  p {
    color: red; /* Áp dụng cho tất cả thẻ <p> trên trang */
  }
  ```
- **Id Selector (Bộ chọn ID):** Chọn một phần tử duy nhất có thuộc tính `id` tương ứng. Ký hiệu bắt đầu bằng dấu thăng `#`.
  ```css
  #main-header {
    background-color: black; /* Chỉ áp dụng cho phần tử có id="main-header" */
  }
  ```
- **Class Selector (Bộ chọn Class):** Chọn các phần tử có thuộc tính `class` chỉ định. Ký hiệu bắt đầu bằng dấu chấm `.`. Một Class có thể áp dụng cho nhiều phần tử khác nhau.
  ```css
  .btn-submit {
    color: white; /* Áp dụng cho mọi phần tử chứa class="btn-submit" */
  }
  ```

---

### 2.2. CSS Combinators (Bộ chọn kết hợp)
Khi cần định dạng các phần tử dựa trên mối quan hệ phân cấp cấu trúc giữa chúng trong cây DOM, chúng ta sử dụng bộ chọn kết hợp. Có 4 loại kết hợp tiêu chuẩn:

#### A. Descendant selector (space) (Bộ chọn con cháu)
Chọn tất cả các phần tử nằm bên trong phần tử cha chỉ định, không phân biệt cấp độ sâu (con, cháu, chắt...).
```css
div p {
  color: red; /* Chọn tất cả thẻ <p> nằm bên trong bất kỳ thẻ <div> nào */
}
```

#### B. Child selector (`>`) (Bộ chọn con trực tiếp)
Chỉ chọn các phần tử là con trực tiếp (cấp 1) của phần tử cha, bỏ qua các cấp sâu hơn (cháu, chắt).
```css
div > p {
  color: green; /* Chỉ chọn thẻ <p> nằm trực tiếp ngay dưới thẻ <div> */
}
```

#### C. Adjacent sibling selector (`+`) (Bộ chọn anh em liền kề)
Chọn phần tử cùng cấp nằm ngay sau và sát cạnh phần tử đầu tiên được chỉ định.
```css
div + p {
  color: blue; /* Chỉ chọn thẻ <p> đầu tiên xuất hiện liền kề ngay sau thẻ <div> */
}
```

#### D. General sibling selector (`~`) (Bộ chọn anh em chung)
Chọn tất cả các phần tử cùng cấp nằm phía sau phần tử đầu tiên được chỉ định.
```css
div ~ p {
  color: orange; /* Chọn tất cả các thẻ <p> đồng cấp nằm sau thẻ <div> */
}
```

---

## 3. CSS Properties

Các thuộc tính nền tảng dùng để xây dựng bố cục (Layout), căn chỉnh khoảng cách và thiết kế giao diện thẩm mỹ cho trang web:

### 3.1. CSS colors (Màu sắc)
- Sử dụng thuộc tính `color` (cho chữ) và `background-color` (cho màu nền).
- **Hỗ trợ đa dạng hệ màu:**
  - *Tên màu cơ bản (Color names):* `red`, `blue`, `tomato`.
  - *Mã màu Hex:* `#ff0000` (Đỏ), `#333333` (Xám tối).
  - *RGB & RGBA (Alpha):* `rgba(0, 0, 255, 0.5)` (Màu xanh dương có độ mờ opacity 50%).
  - *HSL & HSLA:* `hsla(120, 100%, 50%, 0.3)` (Độ bão hòa, độ sáng và kênh trong suốt).

### 3.2. CSS height, width (Kích thước)
- Thiết lập kích thước thông qua các thuộc tính: `width`, `height`, `min-width`, `max-width`, `min-height`, `max-height`.
- Đơn vị sử dụng linh hoạt bao gồm cả đơn vị tuyệt đối (`px`) lẫn các đơn vị tương đối (`%`, `vh`, `vw`, `auto`).

### 3.3. CSS backgrounds (Hình nền & Màu nền)
- `background-color`: Màu nền cho phần tử.
- `background-image`: Đặt ảnh nền thông qua đường dẫn `url('path/to/image.jpg')`.
- `background-repeat`: Kiểm soát lặp ảnh (`repeat`, `no-repeat` - không lặp, `repeat-x`, `repeat-y`).
- `background-position`: Định vị vị trí hiển thị ảnh nền (`center`, `top right`, `bottom left`).
- `background-size`: Điều chỉnh kích thước ảnh nền hiển thị (`cover` - phủ kín, `contain` - vừa vặn).

### 3.4. CSS border (Đường viền)
- Thiết lập đường viền bao quanh phần tử.
- *Cú pháp viết tắt:* `border: <độ_dày> <kiểu_viền> <màu_sắc>;` (Ví dụ: `border: 2px solid red;`).
- *Bo tròn góc:* Sử dụng thuộc tính `border-radius` (Ví dụ: `border-radius: 8px;`, `border-radius: 50%` để tạo hình tròn).

### 3.5. CSS position (Định vị vị trí)
Xác định phương pháp định vị tọa độ hiển thị của phần tử trên màn hình:
- `static`: Mặc định. Hiển thị theo luồng tự nhiên của trang web.
- `relative`: Định vị tương đối, dịch chuyển dựa theo vị trí ban đầu của chính nó thông qua các thuộc tính `top`, `bottom`, `left`, `right`.
- `fixed`: Định vị cố định so với cửa sổ trình duyệt (viewport), phần tử luôn đứng yên khi cuộn trang.
- `absolute`: Định vị tuyệt đối dựa theo phần tử cha gần nhất có thuộc tính position khác `static`.
- `sticky`: Cơ chế thông minh, phần tử cuộn tự nhiên theo trang nhưng sẽ ghim cố định lại khi chạm mốc chỉ định (thường dùng cho thanh Menu tiêu đề).

### 3.6. CSS text (Định dạng văn bản)
- `text-align`: Căn lề văn bản (`left`, `right`, `center`, `justify`).
- `text-decoration`: Tạo đường gạch trang trí (`none` - xóa gạch chân mặc định của thẻ `<a>`, `underline` - gạch chân).
- `text-transform`: Định dạng chữ hoa/thường (`uppercase`, `lowercase`, `capitalize`).
- `line-height`: Khoảng cách dòng giúp văn bản thoáng và dễ đọc hơn.
- `letter-spacing`: Điều chỉnh khoảng cách giữa các ký tự.

### 3.7. CSS Pseudo-classes (Lớp giả)
Định dạng phần tử dựa trên các trạng thái đặc biệt khi có tương tác của người dùng:
- `:hover`: Áp dụng kiểu dáng khi người dùng di chuột qua phần tử.
- `:focus`: Áp dụng khi phần tử nhận tiêu điểm (ví dụ click vào ô nhập liệu input).
- `:active`: Trạng thái khi người dùng nhấn giữ chuột vào phần tử.
- `:visited`: Trạng thái liên kết (`<a>`) đã từng được người dùng truy cập.
- `:first-child`, `:last-child`: Chọn phần tử con đầu tiên hoặc cuối cùng của cha.

### 3.8. CSS margin, padding (Khoảng cách lề)
Khái niệm nền tảng trong Box Model (Mô hình hộp):
- `margin` (Lề ngoài): Tạo khoảng trống bên ngoài đường viền của phần tử để đẩy các phần tử khác ra xa.
- `padding` (Lề trong): Tạo khoảng trống giữa phần nội dung (content) và đường viền (border) của chính phần tử đó.
- *Cú pháp viết tắt (theo chiều kim đồng hồ):*
  - `margin: 10px 20px 30px 40px;` (Trên - Phải - Dưới - Trái).
  - `margin: 10px 20px;` (Trên/Dưới là 10px, Trái/Phải là 20px).
  - `margin: 15px;` (Áp dụng đều cả 4 hướng).

### 3.9. CSS Responsive (Thiết kế thích ứng màn hình)
- Giúp bố cục giao diện tự động co giãn và sắp xếp lại để tối ưu hóa hiển thị trên mọi thiết bị di động, tablet, và desktop.
- Công cụ cốt lõi là **Media Queries** (`@media`):
  ```css
  /* Thiết lập mặc định cho màn hình desktop lớn */
  body {
    font-size: 16px;
  }

  /* Định dạng lại giao diện khi màn hình có chiều rộng từ 768px trở xuống (Mobile/Tablet) */
  @media screen and (max-width: 768px) {
    body {
      font-size: 14px;
      background-color: lightgray;
    }
  }
  ```

---

## 4. CSS Units

Đơn vị đo lường xác định kích thước cho các thuộc tính kích thước, khoảng cách và cỡ chữ trong CSS:

### 4.1. Absolute lengths (Độ dài tuyệt đối)
Các đơn vị có kích thước vật lý cố định, không thay đổi dựa trên thiết bị hay phần tử cha.
- `px` (Pixels): Đơn vị mặc định phổ biến nhất trong thiết kế màn hình kỹ thuật số.
- `cm` (Centimeters), `mm` (Millimeters), `in` (Inches).
- `pt` (Points - thường dùng trong in ấn, 1pt = 1/72 inch).
- `pc` (Picas, 1pc = 12pt).

> [!WARNING]
> Không nên sử dụng độ dài tuyệt đối cho các thuộc tính bố cục layout vì chúng làm mất tính phản hồi (responsive) của website trên các thiết bị nhỏ.

### 4.2. Relative lengths (Độ dài tương đối)
Các đơn vị có kích thước co giãn linh hoạt dựa trên một giá trị tham chiếu khác.

#### A. Đơn vị tương đối theo Font chữ
- `em`: Tính toán dựa trên kích thước font chữ (`font-size`) của phần tử hiện tại (hoặc phần tử cha gần nhất).
- `rem` (Root em): Tính toán dựa trên kích thước font chữ của **phần tử gốc** (`<html>`, mặc định là 16px). Đây là đơn vị khuyên dùng để làm cỡ chữ responsive.
- `ch`, `ex`: Tương đối dựa trên chiều rộng ký tự '0' hoặc chiều cao ký tự 'x' của font chữ hiện tại.

#### B. Đơn vị tương đối theo Viewport (Kích thước màn hình trình duyệt)
- `vw` (Viewport Width): 1vw = 1% chiều rộng của cửa sổ hiển thị trình duyệt.
- `vh` (Viewport Height): 1vh = 1% chiều cao của cửa sổ hiển thị trình duyệt.
- `vmin`: 1% kích thước của chiều nhỏ hơn giữa chiều rộng và chiều cao viewport.
- `vmax`: 1% kích thước của chiều lớn hơn giữa chiều rộng và chiều cao viewport.
- `%` (Percent): Kích thước tương đối theo phần trăm của phần tử cha trực tiếp.

---

## 5. CSS3

CSS3 là bước đột phá lớn mang lại khả năng thiết kế giao diện hiện đại, chuyên nghiệp trực tiếp bằng mã code thay vì phải cắt ghép hình ảnh từ Photoshop như các phiên bản cũ.

### 5.1. What is CSS3? (CSS3 là gì?)
- **Đặc điểm:** Là phiên bản nâng cấp của tiêu chuẩn CSS.
- **Cấu trúc:** Thay vì định nghĩa dưới dạng một khối đặc tả lớn, CSS3 được module hóa (Modules) thành nhiều tài liệu độc lập giúp các trình duyệt dễ dàng cập nhật và tối ưu từng phần tính năng mới.

### 5.2. New features of CSS3 (Các tính năng mới nổi bật)

#### A. CSS Selectors (Bộ chọn thuộc tính nâng cao)
- `[attribute^="value"]`: Chọn phần tử có giá trị thuộc tính **bắt đầu bằng** chuỗi chỉ định.
- `[attribute$="value"]`: Chọn phần tử có giá trị thuộc tính **kết thúc bằng** chuỗi chỉ định.
- `[attribute*="value"]`: Chọn phần tử có giá trị thuộc tính **chứa** chuỗi chỉ định tại bất kỳ vị trí nào.

#### B. Pseudo-classes (Lớp giả nâng cao)
- `:nth-child(n)`: Chọn phần tử con thứ `n` của cha (Ví dụ: `:nth-child(2n)` chọn các phần tử chẵn, `:nth-child(odd)` chọn phần tử lẻ).
- `:not(selector)`: Chọn tất cả các phần tử ngoại trừ phần tử khớp với `selector` chỉ định.
- `:last-child`, `:only-child`, `:empty` (chọn phần tử không chứa nội dung hay thẻ con bên trong).

#### C. CSS3 Colors (Màu sắc nâng cấp)
- Hỗ trợ thêm hệ màu `RGBA` và `HSLA` tích hợp kênh **Alpha** để tinh chỉnh trực tiếp độ trong suốt (opacity) của màu sắc từ `0.0` (trong suốt hoàn toàn) đến `1.0` (đục hoàn toàn).
  ```css
  background-color: rgba(255, 0, 0, 0.3); /* Màu đỏ mờ 30% */
  ```
- Thuộc tính `opacity` để làm mờ toàn bộ phần tử (kèm nội dung bên trong).

#### D. Drop Shadows, Text Shadow (Hiệu ứng bóng đổ)
Tạo chiều sâu và độ nổi bật cho thiết kế giao diện phẳng:
- **`text-shadow` (Bóng đổ chữ):**
  ```css
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* lệch_ngang lệch_dọc độ_nhòe màu_sắc */
  ```
- **`box-shadow` (Bóng đổ hộp phần tử):**
  ```css
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  ```

#### E. Linear Gradients, Radial Gradients (Màu chuyển sắc)
- **Linear Gradients (Chuyển sắc tuyến tính):** Màu sắc chuyển đổi mượt mà dọc theo một hướng chỉ định.
  ```css
  background-image: linear-gradient(to right, red, yellow);
  ```
- **Radial Gradients (Chuyển sắc hình tròn):** Màu sắc lan tỏa tròn từ tâm ra các hướng xung quanh.
  ```css
  background-image: radial-gradient(circle, red, yellow, green);
  ```

#### F. Multiple Background Images (Đa ảnh nền)
- Cho phép xếp chồng nhiều hình ảnh nền lên nhau cho một phần tử duy nhất thông qua phân cách dấu phẩy, giúp giảm thiểu việc lồng ghép nhiều thẻ div phụ.
  ```css
  background-image: url(logo.png), url(background-pattern.jpg);
  background-position: center center, left top;
  background-repeat: no-repeat, repeat;
  ```
