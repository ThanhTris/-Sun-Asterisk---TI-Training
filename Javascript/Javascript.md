
## 1. An Introduction To JavaScript

### 1.1. What is JavaScript? (JavaScript là gì?)
- **Định nghĩa:** ban đầu được tạo ra để giúp các trang web trở nên "sống động" hơn (tương tác trực quan).
- **Kịch bản (Scripts):** Các chương trình được viết bằng JavaScript được gọi là các script. Chúng có thể được nhúng trực tiếp vào trong trang HTML và tự động thực thi khi trình duyệt tải trang.
- **Thực thi trực tiếp:** Các script được phân phối và thực thi dưới dạng văn bản thuần (plain text). Chúng không cần chuẩn bị đặc biệt hay phải biên dịch trước (compilation) để chạy.
- **Môi trường chạy đa dạng:** Ngày nay, JavaScript không chỉ thực thi được trong trình duyệt (Browser), mà còn chạy trên máy chủ (Server - như Node.js) hoặc trên bất kỳ thiết bị nào tích hợp chương trình đặc biệt gọi là **JavaScript Engine** (Trình động cơ JavaScript - ví dụ như V8 trên Chrome/Node.js, SpiderMonkey trên Firefox).

---

### 1.2. What can in-browser JavaScript do? (Trình duyệt JavaScript có thể làm gì?)
Khả năng của JavaScript phụ thuộc lớn vào môi trường chạy của nó (ví dụ: Node.js hỗ trợ đọc/ghi file tùy ý, gửi yêu cầu mạng...). Đối với JavaScript chạy trong trình duyệt, nó có thể thao tác với trang web, tương tác với người dùng và giao tiếp với máy chủ web:
- **Thao tác nội dung HTML/CSS:** Thêm mã HTML mới vào trang, chỉnh sửa nội dung văn bản hiện có, sửa đổi phong cách CSS (styles).
- **Lắng nghe và Phản hồi sự kiện:** Phản hồi các hành động của người dùng như click chuột, di chuyển con trỏ chuột, gõ phím.
- **Truyền tải dữ liệu mạng:** Gửi yêu cầu qua mạng đến máy chủ từ xa, tải xuống và tải lên tệp tin (thông qua công nghệ AJAX và COMET).
- **Thao tác Cookies:** Đọc và thiết lập cookies, hiển thị hộp thoại thông báo hoặc hỏi ý kiến khách truy cập.
- **Lưu trữ dữ liệu phía Client:** Lưu nhớ dữ liệu trực tiếp ở phía trình duyệt người dùng thông qua bộ nhớ cục bộ (`localStorage` và `sessionStorage`).

---

### 1.3. What CAN'T in-browser JavaScript do? (Trình duyệt JavaScript KHÔNG THỂ làm gì?)
Để bảo vệ an toàn cho người dùng, khả năng của JavaScript trong trình duyệt bị giới hạn nghiêm ngặt nhằm tránh việc các trang web độc hại truy cập thông tin riêng tư hoặc gây hại cho dữ liệu hệ thống:
- **Không truy cập trực tiếp hệ điều hành:** JavaScript trên trang web không được phép đọc/ghi các file tùy ý trên ổ cứng, sao chép file hoặc tự ý thực thi các chương trình khác. Nó hoàn toàn không có quyền truy cập trực tiếp vào các hàm của hệ điều hành (OS functions).
- **Bảo mật giữa các tab/cửa sổ:** Các tab và cửa sổ trình duyệt khác nhau thường không thể biết thông tin hoặc đọc dữ liệu của nhau (ngoại trừ khi chúng mở lẫn nhau và cùng chung một nguồn gốc - Same-Origin Policy).
- **Hạn chế giao tiếp chéo miền (Cross-domain limits):** JavaScript có thể dễ dàng kết nối mạng đến máy chủ nguồn của trang hiện tại. Tuy nhiên, khả năng nhận dữ liệu từ các trang web/tên miền khác bị hạn chế rất chặt chẽ vì lý do bảo mật.

---

### 1.4. What makes JavaScript unique? (Điều gì làm JavaScript trở nên độc nhất?)
JavaScript sở hữu 3 ưu điểm vượt trội giúp nó thống trị thế giới Front-end:
1. **Tích hợp toàn diện:** Khả năng kết nối và đồng bộ hoàn hảo với HTML và CSS.
2. **Đơn giản hóa lập trình:** Những tác vụ cơ bản, đơn giản được giải quyết và thực hiện một cách cực kỳ đơn giản.
3. **Hỗ trợ mặc định:** Được hỗ trợ mặc định trên tất cả các trình duyệt phổ biến hiện nay và được bật sẵn mà không cần cài đặt thêm.

---

## 2. Variables

### 2.1. What is variable? (Biến số là gì?)
- **Khái niệm:** Biến số (variable) đóng vai trò như một "hộp lưu trữ có tên" (named storage) chứa dữ liệu phục vụ cho chương trình.
- **Mục đích:** Sử dụng để lưu trữ các giá trị thông tin như thông tin người dùng, trạng thái ứng dụng, và các kiểu dữ liệu khác.

---

### 2.2. JavaScript Variables (var, let, const)

#### A. Let (Khai báo biến động)
- Sử dụng từ khóa `let` để khai báo các biến có giá trị có thể thay đổi trong quá trình chạy chương trình.
- **Mã nguồn mẫu:**
  ```javascript
  let message;
  message = 'Hello'; // Lưu chuỗi văn bản 'Hello' vào biến có tên là message
  ```

#### B. Var (Khai báo biến truyền thống)
- Cách khai báo biến truyền thống, về cơ bản hoạt động tương tự `let`.
  ```javascript
  var message = 'Hello';
  ```
- **Sự khác biệt cốt lõi so với `let`:**
  - **Không có phạm vi khối (No block scope):** Biến khai báo bằng `var` có phạm vi toàn cục hoặc phạm vi hàm (function scope), không bị giới hạn trong khối mã nhọn `{}` (như cấu trúc `if`, `for`).
  - **Chấp nhận khai báo lại (Tolerates redeclarations):** Cho phép khai báo lại cùng một biến nhiều lần mà không gặp lỗi.
  - **Cơ chế Hoisting:** Các biến `var` có thể được gọi và sử dụng trước khi dòng code khai báo chúng được thực thi (được kéo lên đầu phạm vi).

#### C. Const (Khai báo hằng số)
- Sử dụng từ khóa `const` để khai báo một hằng số.
- **Đặc trưng:** Biến khai báo qua `const` không thể gán lại giá trị mới (reassigned) sau khi đã khởi tạo lần đầu.
- **Quy tắc đặt tên:** Các hằng số mang tính chất cấu hình cố định toàn hệ thống thường được đặt tên bằng **chữ in hoa và phân cách bởi dấu gạch dưới** (`capital letters and underscores`).
- **Mã nguồn mẫu:**
  ```javascript
  const COLOR_RED = "#F00";
  const COLOR_GREEN = "#0F0";
  const COLOR_BLUE = "#00F";
  const COLOR_ORANGE = "#FF7F00";
  ```

---

### 2.3. Variable naming (Quy tắc đặt tên biến)
Để đặt tên biến hợp lệ trong JavaScript, bạn cần tuân thủ hai quy tắc bắt buộc sau:
1. Tên biến chỉ được phép chứa **các chữ cái (letters), chữ số (digits), hoặc các biểu tượng `$` và `_`**.
2. Kí tự đầu tiên của tên biến **không được phép là chữ số**.

> [!TIP]
> Khi tên biến chứa nhiều từ ghép lại, quy chuẩn đặt tên dạng lạc đà **`camelCase`** là phương pháp phổ biến nhất được các lập trình viên khuyên dùng (ví dụ: `userName`, `test123`).

---

## 3. Data Types

Chương này tìm hiểu về các kiểu dữ liệu cơ bản trong JavaScript, đặc điểm của ngôn ngữ định kiểu động và chi tiết các nhóm kiểu dữ liệu thông dụng.

### 3.1. Introduction to Data Types (Giới thiệu chung)
- **Định nghĩa:** Một giá trị trong JavaScript luôn thuộc về một kiểu dữ liệu nhất định.
- **Số lượng:** Có **8 kiểu dữ liệu cơ bản** trong JavaScript.
- **Định kiểu động (Dynamically Typed):** JavaScript là một ngôn ngữ định kiểu động. Điều này có nghĩa là bạn có thể gán bất kỳ kiểu dữ liệu nào cho một biến. Một biến tại một thời điểm có thể là kiểu chuỗi và sau đó lưu trữ một số mà không gặp lỗi:
  - **Mã nguồn mẫu:**
    ```javascript
    let message = "hello"; // message là kiểu String
    message = 123456;      // message chuyển sang kiểu Number (không lỗi)
    ```

---

### 3.2. Number (Kiểu số)
Kiểu dữ liệu `Number` đại diện cho cả số nguyên (integer) và số thập phân (floating point numbers).
- **Mã nguồn mẫu:**
  ```javascript
  let n = 123;
  n = 12.345;
  ```
- **Các giá trị số đặc biệt (Special numeric values):** Ngoài các số thông thường, kiểu dữ liệu này còn chứa 3 giá trị đặc biệt sau:
  - **`Infinity`:** Đại diện cho vô cực toán học (\(\infty\)). Đây là một giá trị đặc biệt lớn hơn bất kỳ số nào khác.
  - **`-Infinity`:** Vô cực âm.
  - **`NaN` (Not a Number):** Đại diện cho một lỗi tính toán. Đây là kết quả của một phép toán không hợp lệ hoặc không xác định (ví dụ: chia một chuỗi cho một số).

---

### 3.3. BigInt (Kiểu số nguyên lớn)
- **Mục đích:** Trong JavaScript, kiểu `Number` thông thường chỉ biểu diễn an toàn số nguyên trong khoảng \(\pm(2^{53}-1)\). Khi cần lưu trữ hoặc tính toán các số nguyên cực kỳ lớn (ví dụ: trong mã hóa mật mã học hoặc nhãn thời gian có độ chính xác micro giây), ta sử dụng `BigInt`.
- **Cú pháp:** Một giá trị `BigInt` được tạo ra bằng cách thêm ký tự **`n`** vào sau cùng của một số nguyên.
- **Mã nguồn mẫu:**
  ```javascript
  // Ký tự "n" ở cuối xác định đây là một BigInt
  const bigInt = 1234567890123456789012345678901234567890n;
  ```

---

### 3.4. String (Kiểu chuỗi văn bản)
- **Đặc trưng:** Một chuỗi văn bản trong JavaScript bắt buộc phải được bao quanh bởi các dấu ngoặc kép hoặc ngoặc đơn.
- **Phân loại dấu ngoặc:** JavaScript hỗ trợ **3 loại dấu ngoặc** để khai báo chuỗi:
  1. **Ngoặc kép (Double quotes):** `"Hello"`
  2. **Ngoặc đơn (Single quotes):** `'Hello'`
  3. **Ngoặc ngược (Backticks):** `` `Hello` ``
- **Tính năng mở rộng của Backticks (Template Strings):** Dấu ngoặc ngược cho phép nhúng trực tiếp các biến và biểu thức vào trong chuỗi thông qua cú pháp **`${...}`**. Biểu thức nằm trong `${...}` sẽ được tính toán và kết quả trả về sẽ tự động trở thành một phần của chuỗi văn bản. Bạn có thể nhúng biến, phép toán hoặc các biểu thức phức tạp khác.
- **Mã nguồn mẫu:**
  ```javascript
  let name = "John";
  
  // Nhúng biến vào chuỗi bằng backticks
  let greeting = `Hello, ${name}!`; // Kết quả: "Hello, John!"
  
  // Nhúng biểu thức toán học
  let sum = `1 + 2 = ${1 + 2}`;     // Kết quả: "1 + 2 = 3"
  ```

---

### 3.5. Boolean (Kiểu logic)
Kiểu dữ liệu Boolean chỉ chứa hai giá trị duy nhất đại diện cho tính đúng sai: **`true`** (đúng) và **`false`** (sai).
- **Ứng dụng:** Thường là kết quả của các phép toán so sánh dữ liệu.
- **Mã nguồn mẫu:**
  ```javascript
  let isGreater = 4 > 1; // Phép so sánh trả về true
  alert(isGreater);      // Hiển thị hộp thoại chứa giá trị true
  ```

---

### 3.6. The "null" value (Giá trị rỗng / Không tồn tại)
- **Đặc trưng:** Giá trị đặc biệt `null` không thuộc về bất kỳ kiểu dữ liệu nào đã được mô tả ở trên. Nó tạo thành một kiểu riêng biệt chỉ chứa duy nhất giá trị `null`.
- **Ý nghĩa:** Trong JavaScript, `null` không phải là một "tham chiếu đến một đối tượng không tồn tại" hay một "con trỏ null" như ở một số ngôn ngữ lập trình khác. Nó chỉ đơn thuần là một giá trị đặc biệt đại diện cho **"không có gì" (nothing), "rỗng" (empty), hoặc "giá trị chưa xác định" (value unknown)**.
- **Mã nguồn mẫu:**
  ```javascript
  let age = null; // Giá trị tuổi chưa được xác định/rỗng
  ```

---

### 3.7. The "undefined" value (Giá trị chưa xác định)
- **Đặc trưng:** Tương tự như `null`, giá trị đặc biệt `undefined` tạo thành một kiểu riêng biệt độc lập.
- **Ý nghĩa:** `undefined` mang ý nghĩa là **"giá trị chưa được gán" (value is not assigned)**.
- **Cơ chế:** Nếu một biến được khai báo nhưng chưa được gán giá trị cụ thể, giá trị mặc định của biến đó sẽ là `undefined`.
- **Mã nguồn mẫu:**
  ```javascript
  let age;
  alert(age); // Hiển thị hộp thoại chứa giá trị "undefined"
  ```

---

### 3.8. Objects and Symbols (Đối tượng và Ký hiệu duy nhất)
Hai kiểu dữ liệu này đại diện cho các thực thể dữ liệu phức tạp trong JavaScript:
- **Object (Kiểu đối tượng):** Là kiểu dữ liệu đặc biệt. Tất cả các kiểu dữ liệu khác được gọi là "dữ liệu nguyên thủy" (primitive types) vì giá trị của chúng chỉ chứa một thứ duy nhất (chỉ một chuỗi, một số...). Ngược lại, **Object** được sử dụng để lưu trữ các bộ sưu tập dữ liệu (collections of data) và các thực thể phức tạp hơn.
- **Symbol (Kiểu ký hiệu):** Được sử dụng để tạo ra các mã nhận diện duy nhất (unique identifiers) cho các đối tượng.

---

### 3.9. The typeof operator (Toán tử kiểm tra kiểu dữ liệu typeof)
- **Mục đích:** Toán tử `typeof` trả về kiểu dữ liệu của toán hạng dưới dạng một chuỗi văn bản. Nó rất hữu dụng khi ta muốn xử lý các giá trị thuộc các kiểu dữ liệu khác nhau theo các cách khác nhau hoặc đơn giản là muốn kiểm tra nhanh kiểu của biến.
- **Mã nguồn mẫu kết quả của typeof:**
  ```javascript
  typeof undefined // Kết quả trả về: "undefined"
  typeof 0         // Kết quả trả về: "number"
  typeof 10n       // Kết quả trả về: "bigint"
  typeof true      // Kết quả trả về: "boolean"
  typeof "foo"     // Kết quả trả về: "string"
  typeof Symbol("id") // Kết quả trả về: "symbol"
  ```

> [!NOTE]
> Trong JavaScript thực tế, phép gọi `typeof null` sẽ trả về chuỗi `"object"`. Đây là một lỗi được thừa nhận trong đặc tả kỹ thuật của ngôn ngữ JavaScript (cho mục đích tương thích ngược), chứ thực tế `null` không phải là một đối tượng.

---

## 4. Type Conversions

Hầu hết thời gian, các toán tử và hàm trong JavaScript tự động chuyển đổi các giá trị được truyền cho chúng về đúng kiểu dữ liệu mong muốn (được gọi là chuyển đổi ngầm định). Tuy nhiên, cũng có nhiều trường hợp chúng ta cần chuyển đổi kiểu dữ liệu một cách hiển minh (explicit).

### 4.1. Introduction to Type Conversions (Giới thiệu chung)
- **Chuyển đổi tự động:** Ví dụ, hàm `alert` tự động chuyển đổi bất kỳ giá trị nào nhận được sang dạng chuỗi (String) để hiển thị trực quan. Các phép tính toán toán học tự động chuyển đổi các toán hạng sang dạng số (Number).
- **Chuyển đổi tường minh:** Cần thiết khi logic chương trình yêu cầu kiểu dữ liệu chính xác trước khi xử lý (ví dụ: chuyển chuỗi số nhận từ người dùng thành số thực sự để tính toán).

---

### 4.2. String Conversion (Chuyển đổi sang kiểu Chuỗi)
- **Trường hợp xảy ra:** Xuất hiện khi cần định dạng chuỗi văn bản của một giá trị.
- **Cách chuyển đổi tường minh:** Sử dụng hàm **`String(value)`**.
- **Mã nguồn mẫu:**
  ```javascript
  let value = true;
  alert(typeof value); // Kết quả: "boolean"
  
  value = String(value); // value chuyển thành chuỗi "true"
  alert(typeof value); // Kết quả: "string"
  ```

---

### 4.3. Numeric Conversion (Chuyển đổi sang kiểu Số)
- **Trường hợp xảy ra:** Tự động xảy ra trong các hàm toán học và các biểu thức tính toán.
- **Cách chuyển đổi tường minh:** Sử dụng hàm **`Number(value)`**.
- **Quy tắc chuyển đổi cụ thể:**
  
  | Giá trị ban đầu | Kết quả sau khi chuyển sang Số |
  | :--- | :--- |
  | `undefined` | `NaN` |
  | `null` | `0` |
  | `true` và `false` | `1` và `0` |
  | `string` | Bỏ các khoảng trắng (bao gồm dấu cách, tab `\t`, dòng mới `\n`...) ở đầu và cuối chuỗi. <br> - Nếu chuỗi còn lại rỗng: kết quả là `0`. <br> - Ngược lại: "đọc" số từ chuỗi. <br> - Nếu chuỗi chứa ký tự không hợp lệ: kết quả là `NaN`. |

---

### 4.4. Boolean Conversion (Chuyển đổi sang kiểu Logic)
- **Trường hợp xảy ra:** Tự động diễn ra trong các biểu thức logic (như điều kiện so sánh trong `if`, `while`).
- **Cách chuyển đổi tường minh:** Sử dụng hàm **`Boolean(value)`**.
- **Quy tắc chuyển đổi cụ thể:**
  - Các giá trị mang tính chất **"rỗng" (falsy)** sẽ chuyển thành **`false`**, bao gồm: `0`, chuỗi rỗng `""`, `null`, `undefined`, và `NaN`.
  - Tất cả các giá trị khác (truthy) đều chuyển thành **`true`** (bao gồm cả chuỗi chứa ký tự trắng `" "`, mảng rỗng `[]`, đối tượng rỗng `{}`).
- **Mã nguồn mẫu:**
  ```javascript
  alert(Boolean(1)); // Kết quả: true
  alert(Boolean(0)); // Kết quả: false
  ```

---

## 5. Iterators and Loops

Vòng lặp giúp thực thi một đoạn mã nhiều lần mà không cần viết lại mã nguồn. Mỗi lần đoạn mã bên trong vòng lặp chạy được gọi là một **vòng lặp** hoặc **bước lặp (iteration)**.

### 5.1. The "while" loop (Vòng lặp while)
Vòng lặp `while` thực thi khối lệnh chừng nào điều kiện kiểm tra còn mang giá trị đúng (truthy).
- **Cú pháp:**
  ```javascript
  while (condition) {
    // code - thường gọi là "loop body" (thân vòng lặp)
  }
  ```
- **Mã nguồn mẫu:**
  ```javascript
  let i = 0;
  while (i < 3) { // hiển thị 0, sau đó 1, sau đó 2
    alert(i);
    i++;
  }
  ```

---

### 5.2. The "do..while" loop (Vòng lặp do..while)
Khác với `while`, kiểm tra điều kiện được đưa xuống dưới thân vòng lặp. Điều này đảm bảo thân vòng lặp luôn được **thực thi ít nhất một lần** bất kể điều kiện kiểm tra ban đầu có đúng hay không.
- **Cú pháp:**
  ```javascript
  do {
    // loop body (thân vòng lặp)
  } while (condition);
  ```
- **Mã nguồn mẫu:**
  ```javascript
  let i = 0;
  do {
    alert(i);
    i++;
  } while (i < 3);
  ```
---

### 5.3. The "for" loop (Vòng lặp for)
Vòng lặp `for` có cấu trúc phức tạp hơn nhưng lại là vòng lặp phổ biến và được sử dụng rộng rãi nhất trong lập trình JavaScript.
- **Cú pháp:**
  ```javascript
  for (begin; condition; step) {
    // ... loop body (thân vòng lặp) ...
  }
  ```
- **Ý nghĩa các thành phần:**
  - `begin`: Thực thi một lần duy nhất khi bắt đầu vào vòng lặp (thường dùng để khởi tạo biến đếm).
  - `condition`: Kiểm tra trước mỗi bước lặp. Nếu đúng (`truthy`), vòng lặp tiếp tục; nếu sai (`falsy`), vòng lặp dừng lại.
  - `step`: Thực thi sau mỗi lần chạy xong thân vòng lặp (thường dùng để tăng/giảm biến đếm).

---

### 5.4. Skipping parts (Bỏ qua các thành phần trong vòng lặp for)
Bất kỳ thành phần nào trong ba phần khai báo của `for` (`begin`, `condition`, `step`) đều có thể được lược bỏ và giữ lại dấu chấm phẩy `;`.

- **Bỏ qua phần khởi đầu (begin):** Nếu biến đếm đã được khai báo và gán giá trị trước đó.
  ```javascript
  let i = 0;
  for (; i < 3; i++) { // Khuyết phần khởi đầu "begin"
    alert(i); // Hiển thị: 0, 1, 2
  }
  ```
- **Bỏ qua phần bước nhảy (step):** Ta có thể tăng/giảm biến đếm ngay bên trong thân vòng lặp.
  ```javascript
  let i = 0;
  for (; i < 3;) { // Khuyết cả "begin" và "step"
    alert(i++); // Hiển thị: 0, 1, 2
  }
  ```
- **Bỏ qua toàn bộ thành phần (Tạo vòng lặp vô hạn):**
  ```javascript
  for (;;) {
    // Lặp liên tục vô hạn không có điểm dừng mặc định
  }
  ```

---

### 5.5. Breaking the loop (Thoát vòng lặp khẩn cấp với break)
Thông thường, một vòng lặp sẽ kết thúc khi điều kiện kiểm tra trả về giá trị sai (`falsy`). Tuy nhiên, chúng ta có thể cưỡng chế thoát khỏi vòng lặp ngay lập tức tại bất kỳ thời điểm nào bằng cách sử dụng từ khóa chỉ thị **`break`**.
- **Mã nguồn mẫu:**
  ```javascript
  let sum = 0;
  while (true) {
    // Nhận dữ liệu từ người dùng, dấu "+" để chuyển đổi chuỗi nhập thành Số
    let value = +prompt("Enter a number", '');
    
    // Nếu người dùng nhập rỗng, hủy bỏ hoặc nhập số 0 -> Thoát vòng lặp ngay lập tức
    if (!value) break;
    
    sum += value;
  }
  alert('Sum: ' + sum);
  ```

---

### 5.6. Continue to the next iteration (Bỏ qua bước lặp hiện tại với continue)
Chỉ thị **`continue`** là một phiên bản "nhẹ hơn" của `break`. Nó không dừng lại toàn bộ vòng lặp mà chỉ dừng ngay lập tức bước lặp (iteration) hiện tại của thân vòng lặp và chuyển sang bước lặp mới (nếu điều kiện kiểm tra vẫn thỏa mãn).
- **Mục đích:** Thích hợp khi muốn bỏ qua các tác vụ bên dưới đối với một số điều kiện đặc biệt để chuyển nhanh sang phần tử tiếp theo.
- **Mã nguồn mẫu:**
  ```javascript
  for (let i = 0; i < 10; i++) {
    // Nếu i là số chẵn, bỏ qua phần mã lệnh bên dưới và chuyển sang bước lặp i tiếp theo
    if (i % 2 == 0) continue;
    
    alert(i); // Chỉ hiển thị các số lẻ: 1, 3, 5, 7, 9
  }
  ```

---

## 6. Conditionals

Cấu trúc điều kiện giúp chương trình đưa ra quyết định thực thi các đoạn mã khác nhau dựa trên các kết quả kiểm tra khác nhau.

### 6.1. The "if" statement (Câu lệnh if)
Câu lệnh `if(...)` đánh giá điều kiện bên trong dấu ngoặc đơn và nếu kết quả trả về là `true` (đúng), nó sẽ thực thi khối mã lệnh nằm trong cặp ngoặc nhọn `{}`.
- **Mã nguồn mẫu:**
  ```javascript
  if (year == 2015) {
    alert("That's correct!");
    alert("You're so smart!");
  }
  ```

---

### 6.2. Boolean conversion (Chuyển đổi kiểu logic tự động)
Biểu thức kiểm tra bên trong dấu ngoặc đơn của `if (...)` luôn được tự động chuyển đổi kiểu dữ liệu sang kiểu logic (Boolean).
- **Quy tắc chuyển đổi:**
  - Các giá trị gồm số `0`, chuỗi rỗng `""`, `null`, `undefined`, và `NaN` được chuyển thành **`false`** (gọi là giá trị **falsy**). Đoạn mã bên dưới các điều kiện này sẽ không bao giờ chạy.
  - Tất cả các giá trị khác được chuyển thành **`true`** (gọi là giá trị **truthy**).
- **Mã nguồn mẫu so sánh:**
  ```javascript
  if (0) {
    // Mã lệnh ở đây KHÔNG BAO GIỜ thực thi vì 0 là falsy
  }

  if (1) {
    // Mã lệnh ở đây LUÔN LUÔN thực thi vì 1 là truthy
  }
  ```

---

### 6.3. The "else" clause (Mệnh đề else)
Câu lệnh `if` có thể chứa một mệnh đề `else` (không bắt buộc). Khối mã bên trong `else` sẽ được kích hoạt khi điều kiện kiểm tra của `if` trả về kết quả sai (`falsy`).
- **Mã nguồn mẫu:**
  ```javascript
  let year = prompt('In which year was the ECMAScript-2015 specification published?');
  if (year == 2015) {
    alert('You guessed it right!');
  } else {
    alert('How can you be so wrong?'); // Chạy khi nhập bất kỳ giá trị nào khác 2015
  }
  ```

---

### 6.4. Several conditions: "else if" (Nhiều điều kiện lồng nhau với else if)
Khi cần kiểm tra và phân loại nhiều trường hợp kết quả khác nhau của một điều kiện, ta sử dụng liên tiếp các mệnh đề `else if`.
- **Mã nguồn mẫu:**
  ```javascript
  let year = prompt('In which year was the ECMAScript-2015 specification published?');
  if (year < 2015) {
    alert('Too early...');
  } else if (year > 2015) {
    alert('Too late');
  } else {
    alert('Exactly!'); // Chạy khi year đúng bằng 2015
  }
  ```

---

### 6.5. The "switch" statement (Câu lệnh điều kiện rẽ nhánh switch)
Câu lệnh `switch` được dùng để thay thế cấu trúc kiểm tra phức tạp chứa quá nhiều nhánh `if ... else if`. Nó giúp mã nguồn tường minh và dễ đọc hơn khi so sánh một giá trị đơn lẻ với nhiều trường hợp so khớp cụ thể.

#### 6.5.1. Khái niệm & Cú pháp
Một câu lệnh `switch` gồm một hoặc nhiều khối `case` để so khớp trực tiếp giá trị và một khối `default` tùy chọn (thực thi khi không khớp với bất kỳ case nào).
- **Cú pháp:**
  ```javascript
  switch(x) {
    case 'value1': // Tương đương với kiểm tra nghiêm ngặt: if (x === 'value1')
      // Mã xử lý cho case 'value1'
      [break]
      
    case 'value2':
      // Mã xử lý cho case 'value2'
      [break]
      
    default:
      // Mã xử lý mặc định khi không có case nào khớp
      [break]
  }
  ```

> [!IMPORTANT]
> Cần đặc biệt chú ý từ khóa **`break`** ở cuối mỗi case. Nếu bạn quên hoặc bỏ qua không viết `break`, chương trình sẽ tự động trôi tuột xuống (`fall-through`) để thực thi tiếp các case bên dưới mà không thực hiện bất kỳ bước kiểm tra điều kiện nào nữa.

#### 6.5.2. Ví dụ thực tế
- **Mã nguồn mẫu:**
  ```javascript
  let a = 2 + 2;
  
  switch (a) {
    case 3:
      alert('Too small');
      break;
    case 4:
      alert('Exactly!'); // a = 4 khớp với case này và dừng lại nhờ có break
      break;
    case 5:
      alert('Too big');
      break;
    default:
      alert("I don't know such values");
  }
  ```

