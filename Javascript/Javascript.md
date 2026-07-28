
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

---

## 7. Function basic

Hàm (Functions) là những "khối xây dựng" chính (building blocks) của chương trình. Chúng cho phép thực thi một đoạn mã nguồn nhiều lần tại các vị trí khác nhau mà không cần lặp lại mã nguồn.

### 7.1. Introduction to Functions (Giới thiệu chung)
- **Hàm tích hợp sẵn (Built-in functions):** JavaScript cung cấp sẵn nhiều hàm như `alert(message)`, `prompt(message, default)` và `confirm(question)`.
- **Hàm tự định nghĩa:** Ngoài các hàm có sẵn, chúng ta có thể tự tạo ra các hàm riêng của mình để xử lý các logic nghiệp vụ cụ thể.

---

### 7.2. Function Declaration (Khai báo hàm)
Để tạo một hàm mới, ta sử dụng cú pháp khai báo hàm (`Function Declaration`).
- **Cấu trúc:** Từ khóa `function` đi trước, tiếp theo là tên hàm, danh sách các tham số (parameters) đặt trong dấu ngoặc đơn `()` (phân cách bởi dấu phẩy, có thể để trống), và cuối cùng là phần mã lệnh của hàm đặt trong cặp ngoặc nhọn `{}`.
- **Mã nguồn mẫu:**
  ```javascript
  // Khai báo hàm
  function showMessage() {
    alert('Hello everyone!');
  }

  // Gọi hàm chạy thực thi bằng tên hàm kèm cặp ngoặc tròn
  showMessage();
  ```

---

### 7.3. Local variables (Biến cục bộ)
Một biến được khai báo bên trong một hàm chỉ có thể được nhìn thấy và sử dụng bên trong chính hàm đó. Biến này gọi là **biến cục bộ**.
- **Mã nguồn mẫu:**
  ```javascript
  function showMessage() {
    let message = "Hello, I'm JavaScript!"; // Biến cục bộ
    alert(message);
  }

  showMessage(); // Hiển thị: "Hello, I'm JavaScript!"
  
  // Gọi biến bên ngoài phạm vi hàm sẽ gây ra lỗi lập trình
  alert(message); // Lỗi! Biến message chỉ tồn tại cục bộ bên trong hàm
  ```

---

### 7.4. Outer variables (Biến bên ngoài / Biến toàn cục)
Một hàm hoàn toàn có quyền truy cập và chỉnh sửa giá trị của các biến được khai báo bên ngoài hàm (outer variables / global variables).
- **Mã nguồn mẫu:**
  ```javascript
  let userName = 'John'; // Biến bên ngoài hàm

  function showMessage() {
    let message = 'Hello, ' + userName; // Truy cập biến bên ngoài
    alert(message);
  }

  showMessage(); // Hiển thị: "Hello, John"
  ```

---

### 7.5. Returning a value (Trả về giá trị từ hàm)
Một hàm có thể trả một giá trị kết quả ngược lại cho đoạn mã gọi nó thông qua chỉ thị **`return`**.
- **Mã nguồn mẫu:**
  ```javascript
  function sum(a, b) {
    return a + b; // Trả về tổng hai số
  }

  let result = sum(1, 2);
  alert(result); // Hiển thị: 3
  ```
- **Cơ chế hoạt động:**
  - Chỉ thị `return` có thể được đặt ở bất kỳ vị trí nào bên trong hàm. Khi chương trình thực thi chạm tới từ khóa `return`, hàm sẽ **dừng lại ngay lập tức** và trả giá trị đi kèm về cho mã gọi hàm.
  - Một hàm chứa từ khóa `return` trống (không kèm giá trị) hoặc một hàm hoàn toàn không chứa từ khóa `return` sẽ mặc định trả về giá trị **`undefined`**.

---

### 7.6. Arrow functions (Hàm mũi tên)
Hàm mũi tên (`Arrow functions`) cung cấp một cú pháp viết tắt cực kỳ ngắn gọn và trực quan để tạo hàm trong JavaScript.

- **Cú pháp cơ bản (Một dòng):**
  ```javascript
  let func = (arg1, arg2, ..., argN) => expression;
  ```

- **Hàm mũi tên nhiều dòng (Multiline arrow functions):**
  Chúng ta có thể bao quanh thân hàm mũi tên bằng cặp ngoặc nhọn `{}` giống hàm thông thường. Điểm khác biệt cốt lõi là **ngoặc nhọn yêu cầu phải có từ khóa `return` tường minh** nếu muốn trả về một giá trị.
  - **Mã nguồn mẫu:**
    ```javascript
    let sum = (a, b) => { // Dấu ngoặc nhọn mở đầu một hàm nhiều dòng
      let result = a + b;
      return result; // Bắt buộc phải viết return khi sử dụng ngoặc nhọn
    };
    alert(sum(1, 2)); // Hiển thị: 3
    ```

- **Đặc trưng nâng cao của Hàm mũi tên:**
  1. **Không có ngữ cảnh `this` riêng (No `this`):** Hàm mũi tên không tự định nghĩa từ khóa `this` của riêng nó. Nếu `this` được truy cập bên trong hàm mũi tên, giá trị của nó sẽ được lấy trực tiếp từ phạm vi bên ngoài (outer context).
     - **Mã nguồn mẫu:**
       ```javascript
       let group = {
         title: "Our Group",
         students: ["John", "Pete", "Alice"],
         showList() {
           // this ở dòng dưới trỏ tới đối tượng group nhờ hàm mũi tên
           this.students.forEach(
             student => alert(this.title + ': ' + student)
           );
         }
       };
       group.showList();
       ```
  2. **Không có biến đối số `arguments` (No `arguments`):** Hàm mũi tên không hỗ trợ biến cục bộ ẩn `arguments` vốn chứa danh sách các đối số truyền vào hàm giống như hàm thông thường.

---

### 7.7. Naming a function (Quy tắc đặt tên hàm)
Hàm đại diện cho các hành động thực thi, vì thế tên hàm thông thường **nên bắt đầu bằng một động từ**.
- **Yêu cầu:** Tên hàm cần ngắn gọn, mô tả chính xác nhất có thể nhiệm vụ mà hàm thực hiện, giúp người đọc code hiểu được ngay chức năng của hàm đó.
- **Các tiền tố đặt tên hàm phổ biến (Function starting with...):**
  - **`get...`** : Trả về một giá trị (Ví dụ: `getFullName`, `getAge`).
  - **`calc...`** : Tính toán một giá trị nào đó (Ví dụ: `calcTax`, `calcSum`).
  - **`create...`** : Tạo mới một đối tượng/thành phần (Ví dụ: `createForm`, `createElement`).
  - **`check...`** : Kiểm tra một điều kiện và trả về giá trị kiểu logic Boolean (Ví dụ: `checkPermission`, `checkEmail`).

---

## 8. Function expressions

Trong JavaScript, cú pháp khai báo hàm truyền thống không phải là cách duy nhất để tạo ra một hàm. Ta có thể sử dụng biểu thức hàm (`Function Expressions`).

### 8.1. Function is a value (Bản chất Hàm là một giá trị)
Một hàm trong JavaScript bản chất **là một giá trị**. Nó giống như các kiểu dữ liệu khác như chuỗi hay số, nhưng là một "giá trị có thể thực thi".
- **Lưu trữ và in mã nguồn:** Bạn có thể lưu trữ một hàm vào một biến số. Nếu in biến đó ra trình duyệt mà không kèm cặp dấu ngoặc tròn `()`, trình duyệt sẽ hiển thị toàn bộ mã nguồn của hàm đó.
  ```javascript
  function sayHi() {
    alert("Hello");
  }

  alert(sayHi); // Hiển thị mã nguồn của hàm sayHi thay vì thực thi hàm
  ```
- **Sao chép hàm sang một biến khác:** Vì hàm là một giá trị, bạn hoàn toàn có thể gán biến chứa hàm đó cho một biến mới (sao chép tham chiếu của hàm).
  ```javascript
  function sayHi() { // (1) Tạo hàm
    alert("Hello");
  }

  let func = sayHi; // (2) Sao chép hàm sang biến mới (chú ý KHÔNG viết dấu ngoặc tròn ở sayHi)

  func();  // (3) Thực thi hàm sao chép thành công! (Hiển thị "Hello")
  sayHi(); // Hàm gốc vẫn hoạt động bình thường! (Hiển thị "Hello")
  ```

---

### 8.2. Callback functions (Hàm gọi lại - Callbacks)
Một hàm gọi lại (callback function) là một hàm được truyền vào một hàm khác như một **đối số** (argument), sau đó hàm callback này sẽ được kích hoạt/gọi chạy bên trong hàm nhận để hoàn thành một nhiệm vụ nào đó.
- **Mã nguồn mẫu:**
  ```javascript
  // Hàm callback
  function greeting(name) {
    alert(`Hello, ${name}`);
  }

  // Hàm nhận callback làm tham số
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name); // Kích hoạt chạy hàm callback bên trong
  }

  // Truyền greeting như một đối số cho processUserInput
  processUserInput(greeting);
  ```

---

### 8.3. Function Expression vs Function Declaration (So sánh Biểu thức hàm và Khai báo hàm)

Chúng ta có hai cách chính để định nghĩa một hàm trong JavaScript thông thường:

| Tiêu chí | Function Declaration (Khai báo hàm) | Function Expression (Biểu thức hàm) |
| :--- | :--- | :--- |
| **Cú pháp** | Định nghĩa độc lập như một câu lệnh riêng biệt trong luồng code chính. <br>`function sum(a, b) { return a + b; }` | Định nghĩa bên trong một biểu thức hoặc bên phải của một phép gán `=`. <br>`let sum = function(a, b) { return a + b; };` |
| **Thời điểm khởi tạo** | Được khởi tạo **trước khi** bất kỳ khối mã nào trong phạm vi đó được thực thi (nhờ cơ chế Hoisting của JS). | Chỉ được tạo ra khi luồng thực thi của chương trình chạy chạm tới dòng mã khai báo biểu thức đó. |
| **Khả năng gọi trước** | **Có thể được gọi trước** khi dòng code định nghĩa hàm được viết. | **Không thể gọi trước**, chỉ sử dụng được từ thời điểm dòng khai báo được thực thi trở đi. |

---

## 9. Objects

Trong JavaScript, hầu hết các kiểu dữ liệu đều là "dữ liệu nguyên thủy" (primitive) vì chúng chỉ chứa một giá trị duy nhất đơn giản. Ngược lại, **Object (Đối tượng)** là kiểu dữ liệu đặc biệt được sử dụng để lưu trữ các bộ sưu tập dữ liệu có cấu trúc phức tạp dưới dạng các cặp khóa-giá trị.

### 9.1. Introduction to Objects (Giới thiệu chung)
- **Đặc trưng:** Object đại diện cho các thực thể đời thực hoặc các luồng dữ liệu phức tạp.
- **Cấu trúc:** Một Object được tạo thành bởi cặp dấu ngoặc nhọn `{...}` chứa danh sách các thuộc tính (properties) tùy chọn. 
- **Cặp thuộc tính (Key-Value):** Mỗi thuộc tính là một cặp `"khóa: giá trị"`, trong đó:
  - **Khóa (Key):** Là một chuỗi văn bản đại diện cho tên của thuộc tính (property name).
  - **Giá trị (Value):** Có thể nhận bất kỳ kiểu dữ liệu nào (chuỗi, số, boolean, hàm, hoặc một object khác).

---

### 9.2. Literals and properties (Cú pháp khởi tạo và các thuộc tính)
- **Cú pháp khởi tạo trực tiếp (Object Literal):**
  ```javascript
  let user = {
    name: "John", // Thuộc tính "name" chứa chuỗi "John"
    age: 30       // Thuộc tính "age" chứa số 30
  };
  ```
  *Hình tượng hóa:* Bạn có thể tưởng tượng đối tượng `user` giống như một chiếc tủ tài liệu có hai ngăn được đánh nhãn tên là `"name"` và `"age"`.
- **Thao tác thuộc tính:** Bạn có thể thêm, xóa, hoặc đọc giá trị từ tủ tài liệu này bất kỳ lúc nào.
- **Tên thuộc tính chứa nhiều từ (Multiword property names):** Đối với các tên thuộc tính có khoảng trắng (chứa nhiều từ ghép lại), bắt buộc phải đặt tên thuộc tính đó trong dấu ngoặc kép:
  ```javascript
  let user = {
    name: "John",
    age: 30,
    "likes birds": true // Tên thuộc tính chứa khoảng trắng bắt buộc phải bọc dấu ngoặc kép
  };
  ```

---

### 9.3. Property value shorthand (Cách viết rút gọn thuộc tính)
Trong lập trình thực tế, chúng ta thường xuyên sử dụng giá trị của các biến có sẵn để gán làm giá trị cho các thuộc tính trùng tên trong Object.
- **Cách viết thông thường:**
  ```javascript
  function makeUser(name, age) {
    return {
      name: name,
      age: age
      // ... các thuộc tính khác
    };
  }
  let user = makeUser("John", 30);
  alert(user.name); // Hiển thị: John
  ```
- **Sử dụng cú pháp rút gọn thuộc tính (Property Value Shorthand):** Để mã nguồn ngắn gọn hơn, khi tên thuộc tính và tên biến chứa giá trị trùng nhau hoàn toàn, ta chỉ cần viết tên thuộc tính một lần duy nhất:
  ```javascript
  function makeUser(name, age) {
    // Viết rút gọn thay thế cho name: name và age: age
    return {
      name,
      age
      // ...
    };
  }
  ```

---

### 9.4. The "for..in" loop (Vòng lặp duyệt đối tượng for..in)
Để duyệt qua tất cả các thuộc tính (khóa - keys) của một đối tượng, JavaScript cung cấp cấu trúc vòng lặp chuyên dụng **`for..in`**. Lưu ý đây là cấu trúc hoàn toàn độc lập và khác biệt với vòng lặp `for(;;)` thông thường.
- **Cú pháp:**
  ```javascript
  for (key in object) {
    // Khối mã này sẽ chạy lặp qua từng thuộc tính "key" bên trong "object"
  }
  ```
- **Mã nguồn mẫu thực tế:**
  ```javascript
  let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };

  for (let key in user) {
    // In ra tên khóa (key) và giá trị tương ứng của khóa đó (user[key])
    alert(key);       // Hiển thị lần lượt: name, age, isAdmin
    alert(user[key]); // Hiển thị lần lượt: "John", 30, true
  }
  ```

---

## 10. Object references and copying

Sự khác biệt căn bản nhất giữa Object và các kiểu dữ liệu nguyên thủy nằm ở cách chúng được lưu trữ và sao chép trong bộ nhớ.

### 10.1. Introduction to References (Khái niệm về Tham chiếu)
- **Cơ chế lưu trữ:** Một biến được gán cho một đối tượng (object) không trực tiếp lưu trữ toàn bộ bản thân đối tượng đó, mà chỉ lưu trữ **"địa chỉ vùng nhớ"** (address in memory) của nó – hay nói cách khác là một **tham chiếu** (reference) trỏ tới đối tượng trong bộ nhớ.
- **Cơ chế sao chép:** Khi một biến đối tượng được sao chép sang biến khác, chỉ có **địa chỉ tham chiếu** được sao chép, đối tượng thực tế trong bộ nhớ không hề được nhân bản. Cả hai biến lúc này cùng trỏ chung vào một đối tượng duy nhất.
- **Mã nguồn mẫu:**
  ```javascript
  let user = { name: 'John' };
  let admin = user; // Sao chép địa chỉ tham chiếu
  
  admin.name = 'Pete'; // Thay đổi dữ liệu thông qua tham chiếu "admin"
  
  alert(user.name); // Hiển thị: 'Pete' (sự thay đổi phản ánh lên cả biến "user")
  ```

---

### 10.2. Comparison by reference (So sánh bằng tham chiếu)
Hai đối tượng trong JavaScript chỉ được coi là bằng nhau (`==` hoặc `===`) khi và chỉ khi chúng **cùng là một đối tượng duy nhất** trong bộ nhớ (chung tham chiếu).
- **Mã nguồn mẫu:**
  ```javascript
  // Trường hợp 1: Chung tham chiếu
  let a = {};
  let b = a; // Sao chép tham chiếu
  alert(a == b);  // Kết quả: true
  alert(a === b); // Kết quả: true

  // Trường hợp 2: Hai đối tượng độc lập hoàn toàn (dù thuộc tính rỗng giống nhau)
  let c = {};
  let d = {}; 
  alert(c == d);  // Kết quả: false (hai vùng nhớ khác nhau)
  ```

---

### 10.3. Const objects can be modified (Chỉnh sửa thuộc tính đối tượng hằng số)
- **Đặc trưng:** Một đối tượng được khai báo với từ khóa `const` vẫn **hoàn toàn có thể chỉnh sửa** các giá trị thuộc tính bên trong nó.
- **Lý do:** Từ khóa `const` chỉ bảo vệ biến không bị gán lại sang một địa chỉ/đối tượng khác (`const user = ...`), chứ không khóa các giá trị thuộc tính bên trong đối tượng mà nó trỏ tới.
- **Mã nguồn mẫu:**
  ```javascript
  const user = { name: "John" };
  user.name = "Pete"; // Thực thi thành công không có lỗi!
  
  // user = { name: "Bob" }; // LỖI! Không thể gán lại biến const sang đối tượng mới
  ```

---

### 10.4. Cloning and merging (Nhân bản thủ công bằng vòng lặp)
Để thực sự nhân bản một đối tượng thành một bản sao hoàn toàn độc lập (thay vì chỉ sao chép tham chiếu), ta có thể tạo một đối tượng rỗng mới và lặp qua tất cả thuộc tính của đối tượng cũ để gán sang.
- **Mã nguồn mẫu:**
  ```javascript
  let user = {
    name: "John",
    age: 30
  };

  let clone = {}; // Tạo đối tượng trống mới

  // Lặp duyệt qua các thuộc tính và sao chép giá trị nguyên thủy
  for (let key in user) {
    clone[key] = user[key];
  }

  clone.name = "Pete"; // Thay đổi thuộc tính trên bản clone
  
  alert(user.name); // Vẫn hiển thị: "John" (không bị ảnh hưởng)
  ```

---

### 10.5. Object.assign (Sao chép và gộp đối tượng bằng Object.assign)
Phương thức tích hợp sẵn **`Object.assign()`** cho phép sao chép tất cả các thuộc tính từ một hoặc nhiều đối tượng nguồn (sources) vào một đối tượng đích (destination/target).
- **Cú pháp:**
  ```javascript
  Object.assign(dest, ...sources)
  ```
  - `dest`: Đối tượng đích nhận thuộc tính.
  - `sources`: Danh sách một hoặc nhiều đối tượng nguồn cần sao chép sang.
  - *Giá trị trả về:* Trả về đối tượng đích `dest` sau khi đã được chỉnh sửa.
- **Mã nguồn mẫu:**
  ```javascript
  let user = { name: "John" };
  let permissions1 = { canView: true };
  let permissions2 = { canEdit: true };

  // Gộp thuộc tính từ permissions1 và permissions2 vào đối tượng user
  Object.assign(user, permissions1, permissions2);

  // Lúc này đối tượng user có cấu trúc:
  // user = { name: "John", canView: true, canEdit: true }
  alert(user.canView); // Hiển thị: true
  ```

---

### 10.6. Nested cloning (Nhân bản lồng nhau bằng structuredClone)
Khi một đối tượng chứa các thuộc tính có kiểu dữ liệu là đối tượng khác (đối tượng lồng nhau - nested objects), việc sao chép bằng vòng lặp cạn hay `Object.assign()` chỉ sao chép tham chiếu của các đối tượng con đó (sao chép nông - shallow copy). Để thực hiện sao chép sâu (deep clone) hoàn toàn:

- **Giải pháp:** Sử dụng phương thức tích hợp sẵn **`structuredClone(object)`** để nhân bản đối tượng cùng toàn bộ tất cả các thuộc tính lồng nhau của nó.
- **Khả năng:** Phương thức `structuredClone` có thể sao chép sâu hầu hết các kiểu dữ liệu phổ biến bao gồm các đối tượng (objects), mảng (arrays), và các giá trị nguyên thủy (primitive values).
- **Hỗ trợ tham chiếu vòng (Circular references):** `structuredClone` hỗ trợ nhân bản cấu trúc tham chiếu vòng (khi một thuộc tính của đối tượng trỏ ngược lại chính bản thân đối tượng đó trực tiếp hoặc gián tiếp qua một chuỗi các liên kết).
- **Mã nguồn mẫu:**
  ```javascript
  let user = {};
  
  // Tạo một tham chiếu vòng (user.me trỏ tới chính đối tượng user)
  user.me = user;

  // Tiến hành nhân bản sâu đối tượng
  let clone = structuredClone(user);
  
  alert(clone.me === clone); // Kết quả trả về: true
  ```

---

## 11. Arrays

Mặc dù `Object` rất thích hợp để lưu trữ tập hợp dữ liệu theo nhãn, nhưng trong thực tế chúng ta thường xuyên cần các tập hợp dữ liệu có thứ tự tuần tự (phần tử thứ nhất, thứ hai, thứ ba...). Để đáp ứng nhu cầu này, JavaScript cung cấp cấu trúc dữ liệu chuyên dụng gọi là **Array (Mảng)**.

### 11.1. Introduction to Arrays (Giới thiệu chung về Mảng)
- **Hạn chế của Object:** Object không cung cấp các phương thức tích hợp sẵn để quản lý và duy trì thứ tự tuần tự của các phần tử. Bạn không thể chèn một thuộc tính mới vào "giữa" các thuộc tính đang có.
- **Array (Mảng):** Là cấu trúc dữ liệu lưu trữ các danh sách có thứ tự (như danh sách người dùng, hàng hóa, thẻ HTML...).
- **Chỉ số mảng (Index):** Các phần tử trong mảng được đánh số chỉ mục có thứ tự bắt đầu từ số **`0`**.

---

### 11.2. Declaration (Khai báo mảng)
Có hai cú pháp chính để khởi tạo một mảng rỗng trong JavaScript:
1. **Sử dụng cú pháp Constructor:**
   ```javascript
   let arr = new Array();
   ```
2. **Sử dụng cặp ngoặc vuông (Khuyên dùng phổ biến):**
   ```javascript
   let arr = [];
   ```
- **Khai báo mảng chứa giá trị ban đầu:**
  ```javascript
  let fruits = ["Apple", "Orange", "Plum"];
  ```

---

### 11.3. Methods pop/push, shift/unshift (Các phương thức tương tác phần tử mảng)
Trong khoa học máy tính, mảng trong JavaScript hoạt động cực kỳ linh hoạt như một cấu trúc dữ liệu **Deque** (Double-Ended Queue - Hàng đợi hai đầu). Nó cho phép hoạt động đồng thời như một **hàng đợi (Queue - FIFO)** hoặc một **ngăn xếp (Stack - LIFO)** nhờ hỗ trợ thêm/xóa phần tử ở cả đầu và cuối mảng.

---

#### A. pop (Xóa phần tử cuối cùng)
- **Chức năng:** Trích xuất phần tử cuối cùng ra khỏi mảng, trả về giá trị của phần tử đó và đồng thời rút ngắn mảng đi 1 phần tử.
- **Mã nguồn mẫu:**
  ```javascript
  let fruits = ["Apple", "Orange", "Pear"];
  alert(fruits.pop()); // Loại bỏ "Pear" và hiển thị nó
  alert(fruits);        // Lúc này mảng chỉ còn: "Apple", "Orange"
  ```
- *So sánh:* Cả `fruits.pop()` và `fruits.at(-1)` đều trả về giá trị của phần tử cuối cùng trong mảng, nhưng điểm khác biệt là `fruits.pop()` thực hiện xóa và thay đổi mảng gốc còn `fruits.at(-1)` chỉ đọc giá trị mà không làm thay đổi mảng.

---

#### B. push (Thêm phần tử vào cuối)
- **Chức năng:** Thêm một hoặc nhiều phần tử vào vị trí cuối cùng của mảng.
- **Mã nguồn mẫu:**
  ```javascript
  let fruits = ["Apple", "Orange"];
  fruits.push("Pear"); // Thêm "Pear" vào cuối mảng
  alert(fruits);       // Kết quả: "Apple", "Orange", "Pear"
  ```
- *Cơ chế:* Hành động `fruits.push(item)` tương đương với việc thực hiện gán thủ công vào chỉ mục cuối mảng: `fruits[fruits.length] = item`.

---

#### C. shift (Xóa phần tử đầu tiên)
- **Chức năng:** Trích xuất phần tử đầu tiên (vị trí số 0) ra khỏi mảng, trả về giá trị của nó và dịch chuyển các phần tử tiếp theo lên trước.
- **Mã nguồn mẫu:**
  ```javascript
  let fruits = ["Apple", "Orange", "Pear"];
  alert(fruits.shift()); // Loại bỏ "Apple" ở đầu và hiển thị nó
  alert(fruits);         // Lúc này mảng dịch chuyển còn: "Orange", "Pear"
  ```

---

#### D. unshift (Thêm phần tử vào đầu)
- **Chức năng:** Thêm một hoặc nhiều phần tử vào vị trí đầu tiên của mảng và đẩy các phần tử hiện có lùi về sau.
- **Mã nguồn mẫu:**
  ```javascript
  let fruits = ["Orange", "Pear"];
  fruits.unshift('Apple'); // Thêm 'Apple' vào đầu mảng
  alert(fruits);           // Kết quả: "Apple", "Orange", "Pear"
  ```

---

### 11.4. Loops over arrays (Các phương thức duyệt mảng bằng vòng lặp)
Để duyệt qua tất cả các phần tử có trong một mảng, chúng ta có hai cách phổ biến sau:

- **Cách 1: Sử dụng vòng lặp `for` truyền thống qua chỉ số (for loop over indexes):**
  Đây là một trong những cách lâu đời và cơ bản nhất. Ta lặp biến đếm chạy từ `0` cho đến khi nhỏ hơn độ dài của mảng (`arr.length`).
  ```javascript
  let arr = ["Apple", "Orange", "Pear"];
  
  for (let i = 0; i < arr.length; i++) {
    alert(arr[i]); // Truy cập và hiển thị phần tử thông qua chỉ số i
  }
  ```
- **Cách 2: Sử dụng vòng lặp `for..of` hiện đại (Duyệt trực tiếp phần tử):**
  Đối với mảng, JavaScript cung cấp cú pháp `for..of` ngắn gọn hơn. Vòng lặp này duyệt trực tiếp qua các giá trị phần tử của mảng mà không cần sử dụng biến đếm chỉ số.
  ```javascript
  let fruits = ["Apple", "Orange", "Plum"];
  
  // Duyệt trực tiếp qua từng phần tử fruit trong mảng fruits
  for (let fruit of fruits) {
    alert(fruit); // Hiển thị trực tiếp giá trị của phần tử
  }
  ```






