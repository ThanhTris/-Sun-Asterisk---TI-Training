
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

---

## 12. Array methods

JavaScript cung cấp nhiều phương thức mạnh mẽ để tương tác, tìm kiếm và thao tác với mảng một cách nhanh chóng và tối ưu.

### 12.1. Add/remove items (Các phương thức thêm hoặc xóa phần tử)

---

#### A. Splice (Thêm, xóa hoặc thay thế phần tử trực tiếp)
Phương thức `splice()` cực kỳ đa năng. Nó cho phép bạn xóa phần tử, chèn phần tử mới, hoặc thay thế các phần tử hiện tại và **thay đổi trực tiếp mảng gốc**.
- **Cú pháp tổng quát:**
  ```javascript
  arr.splice(start[, deleteCount, elem1, ..., elemN])
  ```
  - `start`: Chỉ số bắt đầu thực hiện thao tác (có thể nhận giá trị âm tính từ cuối mảng).
  - `deleteCount`: Số lượng phần tử cần xóa kể từ vị trí `start` (nếu đặt là `0`, không có phần tử nào bị xóa).
  - `elem1, ..., elemN`: Danh sách các phần tử mới cần chèn vào vị trí đó.
- **Mã nguồn mẫu (Chèn thêm phần tử không cần xóa):**
  ```javascript
  let arr = ["I", "study", "JavaScript"];
  
  // Từ chỉ số 2 (vị trí "JavaScript")
  // Xóa 0 phần tử
  // Sau đó chèn thêm hai chuỗi "complex" và "language"
  arr.splice(2, 0, "complex", "language");
  
  alert(arr); // Kết quả: "I", "study", "complex", "language", "JavaScript"
  ```

---

#### B. Slice (Cắt một mảng con)
Phương thức `slice()` dùng để sao chép một phần của mảng sang một mảng mới hoàn toàn và **không làm thay đổi mảng gốc** (shallow copy).
- **Cú pháp:**
  ```javascript
  arr.slice([start], [end])
  ```
  - `start`: Chỉ số bắt đầu sao chép (nếu là số âm sẽ tính vị trí từ cuối mảng lùi lại).
  - `end`: Chỉ số kết thúc sao chép (không bao gồm phần tử tại vị trí `end` này). Nếu bỏ qua, mảng con sẽ sao chép từ `start` cho tới cuối mảng.
- **Mã nguồn mẫu:**
  ```javascript
  let arr = ["t", "e", "s", "t"];
  
  alert(arr.slice(1, 3)); // Kết quả: "e", "s" (sao chép từ chỉ số 1 đến chỉ số 3, không gồm 3)
  alert(arr.slice(-2));   // Kết quả: "s", "t" (sao chép từ vị trí -2 cho đến hết mảng)
  ```

---

#### C. Concat (Gộp các mảng với nhau)
Phương thức `concat()` dùng để gộp hai hoặc nhiều mảng (hoặc các giá trị đơn lẻ) với nhau để tạo thành một mảng mới. Phương thức này **không làm thay đổi các mảng hiện có**.
- **Cú pháp:**
  ```javascript
  arr.concat(arg1, arg2, ...)
  ```
  - Chấp nhận số lượng đối số tùy ý, đối số truyền vào có thể là các mảng hoặc các giá trị đơn lẻ.
- **Mã nguồn mẫu:**
  ```javascript
  let arr = [1, 2];
  
  // Gộp arr với mảng [3, 4]
  alert(arr.concat([3, 4])); // Kết quả: 1, 2, 3, 4
  
  // Gộp arr với nhiều mảng [3, 4] và [5, 6]
  alert(arr.concat([3, 4], [5, 6])); // Kết quả: 1, 2, 3, 4, 5, 6
  
  // Gộp arr với mảng [3, 4], và các giá trị đơn lẻ 5, 6
  alert(arr.concat([3, 4], 5, 6)); // Kết quả: 1, 2, 3, 4, 5, 6
  ```

---

### 12.2. Iterate: forEach (Duyệt mảng với forEach)
Phương thức `arr.forEach()` cho phép thực thi một hàm xử lý (callback function) lặp qua lần lượt mọi phần tử có trong mảng.

- **Cú pháp:**
  ```javascript
  arr.forEach(function(item, index, array) {
    // ... thực hiện hành động nào đó với item
  });
  ```
  - `item`: Giá trị của phần tử hiện tại đang được duyệt.
  - `index`: Chỉ số của phần tử hiện tại.
  - `array`: Bản thân mảng đang được duyệt qua.
- **Mã nguồn mẫu:**
  ```javascript
  ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });
  ```

---

### 12.3. Searching in array (Tìm kiếm trong mảng)

---

#### 12.3.1. indexOf / lastIndexOf / includes (Tìm vị trí và kiểm tra tồn tại)
Các phương thức này có cú pháp và cách hoạt động tương đồng với phiên bản xử lý chuỗi văn bản, nhưng áp dụng đối với các phần tử trong mảng:

1. **`arr.indexOf(item, from)`**: Tìm kiếm phần tử `item` bắt đầu từ chỉ mục `from`. Trả về chỉ số vị trí tìm thấy đầu tiên, nếu không tìm thấy trả về **`-1`**.
2. **`arr.includes(item, from)`**: Tìm kiếm phần tử `item` bắt đầu từ chỉ mục `from`. Trả về **`true`** nếu tìm thấy và **`false`** nếu không tìm thấy.
3. **`arr.lastIndexOf(item, from)`**: Hoạt động giống hệt `indexOf` nhưng tìm kiếm ngược chiều từ **phải sang trái**.

- **Mã nguồn mẫu:**
  ```javascript
  let arr = [1, 0, false];
  
  alert(arr.indexOf(0));     // Kết quả: 1 (số 0 ở chỉ số 1)
  alert(arr.indexOf(false)); // Kết quả: 2 (false ở chỉ số 2)
  alert(arr.indexOf(null));  // Kết quả: -1 (không tồn tại null trong mảng)
  
  alert(arr.includes(1));    // Kết quả: true (số 1 có tồn tại trong mảng)
  ```

---

#### 12.3.2. find / findIndex (Tìm kiếm phần tử theo hàm kiểm tra điều kiện)
Đối với mảng chứa các đối tượng phức tạp, việc dùng `indexOf` hay `includes` để tìm kiếm là rất khó khăn. Khi đó ta dùng phương thức `find()`.

- **Chức năng:** Phương thức `find()` trả về **giá trị của phần tử đầu tiên** trong mảng thỏa mãn điều kiện logic của hàm kiểm tra được cung cấp. Nếu không có phần tử nào khớp, phương thức trả về **`undefined`**.
- **Cú pháp:**
  ```javascript
  let result = arr.find(function(item, index, array) {
    // Nếu hàm kiểm tra trả về true, phần tử item được tìm thấy và vòng lặp dừng lại
    // Nếu không có phần tử nào trả về true, kết quả là undefined
  });
  ```
- **Mã nguồn mẫu:**
  ```javascript
  let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
  ];

  // Tìm đối tượng user đầu tiên có thuộc tính id bằng 1
  let user = users.find(item => item.id == 1);
  
  alert(user.name); // Kết quả: John
  ```

---

#### 12.3.3. findIndex / findLastIndex (Tìm kiếm chỉ số của phần tử)
Các phương thức này có cấu trúc giống hệt `find`, nhưng thay vì trả về chính phần tử đó, chúng trả về **chỉ số (index)** nơi phần tử được tìm thấy.
- **`arr.findIndex()`**: Tìm kiếm chỉ số của phần tử đầu tiên thỏa mãn điều kiện từ trái sang phải. Nếu không tìm thấy, trả về **`-1`**.
- **`arr.findLastIndex()`**: Hoạt động giống `findIndex` nhưng tìm kiếm ngược từ phải sang trái.
- **Mã nguồn mẫu:**
  ```javascript
  let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
  ];

  // Tìm chỉ số của John đầu tiên
  alert(users.findIndex(user => user.name == 'John')); // Kết quả: 0

  // Tìm chỉ số của John cuối cùng
  alert(users.findLastIndex(user => user.name == 'John')); // Kết quả: 3
  ```

---

#### 12.3.4. filter (Lọc danh sách các phần tử thỏa mãn điều kiện)
Nếu như `find()` chỉ tìm kiếm một phần tử đầu tiên khớp điều kiện, phương thức `filter()` giúp lọc ra **tất cả** các phần tử thỏa mãn điều kiện và trả về một mảng mới (bản sao nông - shallow copy).
- **Cú pháp:**
  ```javascript
  let results = arr.filter(function(item, index, array) {
    // Nếu trả về true, phần tử item sẽ được đẩy vào mảng kết quả results
    // Trả về mảng rỗng [] nếu không có phần tử nào thỏa mãn
  });
  ```
- **Mã nguồn mẫu:**
  ```javascript
  let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
  ];

  // Lọc ra các user có id nhỏ hơn 3
  let someUsers = users.filter(item => item.id < 3);

  alert(someUsers.length); // Kết quả: 2 (gồm John và Pete)
  ```

---

### 12.4. Transform an array (Các phương thức biến đổi mảng)

---

#### 12.4.1. map (Ánh xạ biến đổi mảng)
Phương thức `arr.map()` duyệt qua từng phần tử của mảng, gọi một hàm callback để biến đổi giá trị của phần tử đó và trả về **một mảng mới chứa các kết quả đã được biến đổi**.
- **Cú pháp:**
  ```javascript
  let result = arr.map(function(item, index, array) {
    // Trả về giá trị mới thay thế cho giá trị cũ của phần tử
  });
  ```
- **Mã nguồn mẫu:**
  ```javascript
  let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
  alert(lengths); // Kết quả: 5, 7, 6 (Độ dài các chuỗi ban đầu)
  ```

---

#### 12.4.2. sort(fn) (Sắp xếp mảng trực tiếp)
Phương thức `arr.sort()` thực hiện sắp xếp trực tiếp các phần tử của mảng ngay **tại chỗ (in-place)**, làm thay đổi trật tự sắp xếp của mảng gốc.
- **Quy tắc sắp xếp mặc định:** Mặc định nếu không truyền hàm so sánh, phương thức `sort()` sẽ coi tất cả phần tử là **chuỗi ký tự (strings)** để so sánh thứ tự bảng chữ cái. Điều này có thể dẫn tới kết quả sắp xếp số không như mong muốn:
  ```javascript
  let arr = [ 1, 2, 15 ];
  arr.sort();
  alert(arr); // Kết quả: 1, 15, 2 (Vì "15" được coi là chuỗi và xếp trước "2")
  ```
- **Sắp xếp theo hàm so sánh tự định nghĩa (Generic sorting):** Để sắp xếp chính xác (ví dụ sắp xếp số), ta cần truyền vào `sort()` một hàm so sánh `fn(a, b)`:
  - Nếu hàm so sánh trả về số âm: `a` đứng trước `b`.
  - Nếu hàm so sánh trả về số dương: `b` đứng trước `a`.
  - Nếu trả về `0`: Giữ nguyên vị trí tương đối.
- **Mã nguồn mẫu:**
  ```javascript
  let arr = [ 1, 2, 15 ];
  
  // Truyền hàm so sánh số tăng dần
  arr.sort(function(a, b) { 
    return a - b; 
  });
  
  alert(arr); // Kết quả: 1, 2, 15 (Đã sắp xếp đúng)
  ```

---

#### 12.4.3. reduce (Tính toán giá trị thu gọn từ mảng)
Phương thức `arr.reduce()` được sử dụng để duyệt qua mảng và tính toán trả về **một giá trị đơn nhất** (ví dụ tính tổng, tích hoặc dồn kết quả) dựa trên việc tích lũy qua từng phần tử.

- **Cơ chế hoạt động:** Hàm xử lý (callback) được gọi liên tục trên từng phần tử và "mang theo" (carry-over) kết quả tích lũy của lần gọi trước đó để làm tham số đầu vào cho lần gọi tiếp theo.
- **Cú pháp:**
  ```javascript
  let value = arr.reduce(function(accumulator, item, index, array) {
    // ... thực hiện tính toán tích lũy
  }, [initial]);
  ```
  - **Tham số:**
    - `accumulator`: Biến tích lũy, lưu giữ kết quả tính toán của lần gọi trước đó. Ở lần chạy đầu tiên, nó sẽ nhận giá trị của `initial` (nếu có cung cấp).
    - `item`: Phần tử hiện tại của mảng đang được duyệt.
    - `index`: Chỉ mục vị trí của phần tử hiện tại.
    - `array`: Bản thân mảng đang xử lý.
    - `initial` (tùy chọn): Giá trị khởi tạo ban đầu cho biến `accumulator`.
- **Mã nguồn mẫu (Tính tổng mảng):**
  ```javascript
  let arr = [1, 2, 3, 4, 5];

  // Tính tổng tích lũy từ giá trị khởi tạo ban đầu là 0
  let total = arr.reduce((sum, current) => sum + current, 0);

  alert(total); // Kết quả: 15
  ```

---

### 12.5. Array.isArray (Kiểm tra kiểu dữ liệu mảng)
Trong JavaScript, mảng (`Array`) không phải là một kiểu dữ liệu độc lập riêng biệt ở mức ngôn ngữ. Về mặt kỹ thuật, mảng được xây dựng dựa trên nguyên mẫu Đối tượng (`Object`).

- **Hạn chế của toán tử `typeof`:** Vì mảng kế thừa từ đối tượng, toán tử `typeof` không thể giúp chúng ta phân biệt một đối tượng thông thường với một mảng:
  ```javascript
  alert(typeof {}); // Kết quả: "object"
  alert(typeof []); // Kết quả: "object" (giống hệt nhau)
  ```
- **Giải pháp `Array.isArray(value)`:** Để giải quyết vấn đề này, JavaScript cung cấp phương thức chuyên dụng `Array.isArray(value)` để kiểm tra chính xác giá trị truyền vào có phải là mảng hay không. Trả về `true` nếu là mảng và `false` cho các trường hợp còn lại.
- **Mã nguồn mẫu:**
  ```javascript
  alert(Array.isArray({})); // Kết quả: false (đối tượng thông thường)
  alert(Array.isArray([])); // Kết quả: true (mảng dữ liệu)
  ```

---

## 13. Error handling (Xử lý lỗi)

Dù lập trình viên có giỏi đến đâu, lỗi vẫn có thể xảy ra trong chương trình do nhập liệu sai của người dùng, phản hồi lỗi từ máy chủ, hoặc lỗi logic tính toán.

### 13.1. Introduction to Error handling (Giới thiệu chung)
- **Hành vi mặc định:** Thông thường, khi gặp một lỗi nghiêm trọng, một kịch bản JavaScript sẽ "chết" (dừng hoạt động ngay lập tức) và hiển thị thông tin lỗi lên bảng điều khiển (console) của trình duyệt.
- **Giải pháp:** JavaScript cung cấp cấu trúc cú pháp **`try...catch`** cho phép chúng ta "bắt" (catch) các lỗi này để xử lý một cách chủ động và hợp lý hơn, giúp ứng dụng không bị dừng đột ngột.

---

### 13.2. The "try...catch" syntax (Cú pháp try...catch)
Cấu trúc `try...catch` bao gồm hai khối mã chính liên tiếp nhau:

- **Cú pháp cơ bản:**
  ```javascript
  try {
    // Khối mã chạy thử nghiệm (code...)
  } catch (err) {
    // Khối mã xử lý khi xảy ra lỗi (error handling)
  }
  ```
- **Quy tắc thực thi:** 
  1. Các câu lệnh bên trong khối `try` sẽ được chạy trước.
  2. Nếu không có lỗi nào xảy ra, khối mã `catch` sẽ hoàn toàn bị bỏ qua.
  3. Nếu có lỗi phát sinh tại bất kỳ dòng nào trong khối `try`, luồng thực thi trong `try` sẽ dừng lại ngay lập tức và chuyển quyền điều khiển sang cho khối `catch(err)`.
- **Yêu cầu đối với mã nguồn:** Mã nguồn bên trong khối `try` phải là mã JavaScript hợp lệ (không chứa lỗi cú pháp như thiếu ngoặc, gõ sai từ khóa hệ thống). `try...catch` không thể bắt được lỗi cú pháp (parsing-time errors) mà chỉ bắt được lỗi xảy ra lúc chạy (runtime errors).
- **Xử lý lỗi bất đồng bộ (Asynchronous errors):** Nếu lỗi xảy ra bên trong một hàm được lập lịch chạy sau (như `setTimeout`), khối `try...catch` bọc bên ngoài sẽ không bắt được lỗi đó vì khối `try` đã thực thi xong trước khi hàm lập lịch chạy.
  - **Sai cách:**
    ```javascript
    try {
      setTimeout(() => {
        noSuchVariable; // Lỗi ReferenceError xảy ra ở đây sau 1 giây, nhưng try...catch bên ngoài không bắt được!
      }, 1000);
    } catch (e) {
      alert("Không bắt được lỗi này!");
    }
    ```
  - **Đúng cách:** Để bắt lỗi của các hàm bất đồng bộ, cấu trúc `try...catch` bắt buộc phải đặt **bên trong** hàm callback đó:
    ```javascript
    setTimeout(function() {
      try {
        noSuchVariable; // try...catch bắt lỗi thành công
      } catch (err) {
        alert("Đã bắt được lỗi tại đây!");
      }
    }, 1000);
    ```

---

### 13.3. Error object (Đối tượng lỗi)
Khi có lỗi xảy ra bên trong khối `try`, JavaScript sẽ tự động khởi tạo một đối tượng đặc biệt chứa thông tin chi tiết về lỗi đó và truyền nó làm đối số cho khối `catch`:

```javascript
try {
  // ...
} catch (err) { // "err" đại diện cho đối tượng lỗi (có thể đặt tên biến tùy ý)
  // ... xử lý lỗi
}
```

Đối với tất cả các lỗi được định nghĩa sẵn trong JavaScript, đối tượng lỗi này thường sở hữu 3 thuộc tính chính:
1. **`name`**: Tên định danh của loại lỗi. Ví dụ: Nếu truy cập một biến chưa khai báo, tên lỗi sẽ là `"ReferenceError"`.
2. **`message`**: Thông điệp mô tả chi tiết bằng văn bản về nội dung lỗi xảy ra.
3. **`stack`**: Ngăn xếp cuộc gọi (call stack) tại thời điểm xảy ra lỗi. Đây là chuỗi thông tin cực kỳ hữu ích cho việc gỡ lỗi (debugging) vì nó hiển thị chi tiết chuỗi các hàm lồng nhau dẫn đến dòng code phát sinh lỗi.

---

### 13.4. try...catch...finally
Cấu trúc xử lý lỗi `try...catch` có thể được mở rộng bằng cách bổ sung thêm một khối lệnh thứ ba là **`finally`**.

- **Quy tắc thực thi:** Nếu khối `finally` tồn tại, các câu lệnh bên trong nó **bắt buộc phải chạy trong mọi trường hợp**:
  - Chạy sau khối `try` nếu chương trình diễn ra suôn sẻ và không có lỗi nào phát sinh.
  - Chạy sau khối `catch` nếu chương trình phát sinh lỗi và nhảy vào khối `catch`.
- **Cú pháp:**
  ```javascript
  try {
     // ... Thử nghiệm chạy khối mã ...
  } catch (err) {
     // ... Xử lý khi có lỗi xảy ra ...
  } finally {
     // ... Luôn luôn thực thi sau cùng bất kể thành công hay thất bại ...
  }
  ```
- **Xử lý các lệnh thoát đặc biệt:** Khối `finally` vẫn sẽ được đảm bảo chạy bình thường ngay cả khi bên trong khối `try` hoặc `catch` chứa câu lệnh nhảy thoát ra ngoài như `return` hay `break`.
- **Sử dụng cấu trúc rút gọn `try...finally`:** 
  - Đôi khi chúng ta không muốn bắt lỗi ngay tại vị trí hiện tại (để lỗi phát tán tự do - fall through ra ngoài), nhưng vẫn muốn chắc chắn rằng các tiến trình tài nguyên được khởi chạy (ví dụ: mở file, kết nối DB, animation...) sẽ luôn được giải phóng/đóng lại thành công. Khi đó ta dùng cấu trúc rút gọn bỏ khối `catch`:
  ```javascript
  try {
     // Thực thi công việc cần dọn dẹp sau đó
  } finally {
     // Luôn luôn thực thi để giải phóng tài nguyên
  }
  ```

---

## 14. Promises (Lời hứa)

Để xử lý các tác vụ bất đồng bộ (như tải dữ liệu từ máy chủ, đọc file, lập lịch) một cách hiệu quả và tránh rơi vào tình trạng "Callback Hell" (quá nhiều hàm lồng nhau), JavaScript cung cấp đối tượng **`Promise`**.

### 14.1. Introduction to Promises (Giới thiệu chung)
- **Định nghĩa:** Đối tượng `Promise` đại diện cho kết quả hoàn thành (hoặc thất bại) trong tương lai của một tác vụ bất đồng bộ và giá trị tương ứng trả về từ tác vụ đó.
- **Cú pháp hàm dựng (Constructor Syntax):**
  ```javascript
  let promise = new Promise(function(resolve, reject) {
    // Executor: Mã nguồn thực thi tác vụ bất đồng bộ (nơi sản xuất kết quả)
  });
  ```
  - Hàm truyền vào `new Promise` được gọi là **`executor`**. Nó sẽ tự động chạy ngay lập tức khi đối tượng Promise được khởi tạo.
  - `resolve` và `reject` là hai tham số dạng hàm được cung cấp sẵn bởi JavaScript Engine:
    - **`resolve(value)`**: Được gọi khi tác vụ thực thi thành công, trả về kết quả `value`.
    - **`reject(error)`**: Được gọi khi tác vụ thất bại, trả về đối tượng lỗi `error`.
- **Ba trạng thái (States) của một Promise:**
  - **`pending`**: Trạng thái ban đầu, đang chờ xử lý (chưa thành công cũng chưa thất bại).
  - **`fulfilled`**: Trạng thái tác vụ đã hoàn thành thành công.
  - **`rejected`**: Trạng thái tác vụ thất bại.

---

### 14.2. Consumers: then, catch (Hàm tiêu thụ kết quả)
Một đối tượng Promise đóng vai trò là cầu nối liên kết giữa hàm thực thi (`executor`) và các hàm tiêu thụ kết quả (nhận giá trị thành công hoặc thông tin lỗi). Các hàm tiêu thụ này được đăng ký thông qua hai phương thức `.then` và `.catch`.

#### 14.2.1. Cú pháp và cách dùng `.then`
Phương thức `.then` nhận vào tối đa hai tham số dạng hàm:

- **Cú pháp:**
  ```javascript
  promise.then(
    function(result) { /* Xử lý khi kết quả thành công (resolved) */ },
    function(error)  { /* Xử lý khi xảy ra lỗi thất bại (rejected) */ }
  );
  ```
  - Tham số thứ nhất: Hàm chạy khi Promise đạt trạng thái thành công (`fulfilled`), nhận giá trị kết quả `result`.
  - Tham số thứ nhất (tùy chọn): Hàm chạy khi Promise đạt trạng thái thất bại (`rejected`), nhận thông tin lỗi `error`.
- **Mã nguồn mẫu:**
  ```javascript
  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000); // Giả lập tác vụ hoàn thành sau 1 giây
  });

  promise.then(
    result => alert(result), // Hiển thị "done!" sau 1 giây
    error => alert(error)    // Không chạy vì tác vụ thành công
  );
  ```

#### 14.2.2. Cú pháp và cách dùng `.catch`
Nếu bạn chỉ quan tâm đến việc bắt lỗi khi Promise thất bại (không cần xử lý kết quả thành công):

- **Giải pháp:** Bạn có thể truyền giá trị `null` làm tham số đầu tiên của `.then`: `.then(null, errorHandlingFunction)`. Tuy nhiên, cách viết ngắn gọn và chuẩn mực nhất là sử dụng phương thức chuyên dụng **`.catch(errorHandlingFunction)`**.
- **Mã nguồn mẫu:**
  ```javascript
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Whoops!")), 1000); // Giả lập lỗi sau 1 giây
  });

  // promise.catch(f) hoạt động hoàn toàn giống hệt promise.then(null, f)
  promise.catch(alert); // Hiển thị thông điệp "Error: Whoops!" sau 1 giây
  ```

---

### 14.3. Promises chaining (Chuỗi liên kết các Promise)
Ý tưởng cốt lõi của Promise là cho phép liên kết chuỗi các tác vụ bất đồng bộ liên tiếp nhau thông qua việc móc xích các phương thức `.then()`.

- **Cơ chế truyền giá trị đơn thuần:** Khi một hàm xử lý trong `.then` trả về một giá trị thường, giá trị đó sẽ tự động được bọc lại trong một Promise đã hoàn thành (`fulfilled`) để chuyển tiếp trực tiếp kết quả làm tham số đầu vào cho `.then` tiếp theo:
  ```javascript
  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // Khởi tạo giá trị ban đầu là 1
  }).then(function(result) {
    alert(result); // Hiển thị: 1
    return result * 2; // Trả về 2
  }).then(function(result) {
    alert(result); // Hiển thị: 2
    return result * 2; // Trả về 4
  }).then(function(result) {
    alert(result); // Hiển thị: 4
  });
  ```
- **Cơ chế trả về một Promise khác (Returning promises):** Một hàm xử lý bên trong `.then` hoàn toàn có thể chủ động khởi tạo và trả về một Promise khác. Trong tình huống này, các khối `.then` tiếp theo phía dưới chuỗi sẽ **tạm thời dừng lại để đợi** cho đến khi Promise con đó hoàn thành (`settled`) mới nhận giá trị kết quả và chạy tiếp:
  ```javascript
  new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
  }).then(function(result) {
    alert(result); // Hiển thị: 1
    // Trả về một Promise con xử lý bất đồng bộ trong 1 giây tiếp theo
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  }).then(function(result) {
    alert(result); // Hiển thị: 2 (Sau 2 giây tổng cộng)
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  }).then(function(result) {
    alert(result); // Hiển thị: 4 (Sau 3 giây tổng cộng)
  });
  ```

---

### 14.4. Error handling with promises (Xử lý lỗi trong Promise)
Cơ chế xử lý lỗi trong chuỗi Promise hoạt động cực kỳ linh hoạt và tự động lan truyền lỗi xuống trình xử lý lỗi gần nhất.

---

#### 14.4.1. Implicit try...catch (Khối try...catch ẩn)
Xung quanh hàm thực thi `executor` và các hàm xử lý trong `.then` luôn được JavaScript bao bọc một khối lệnh **`try...catch` ẩn (tự động)**. Nếu có bất kỳ ngoại lệ (exception) nào xảy ra hoặc có lệnh `throw` thủ công, Promise sẽ tự động coi đó là lỗi và chuyển trạng thái sang `rejected` để `.catch` bắt được:
```javascript
new Promise((resolve, reject) => {
  throw new Error("Whoops!"); // Ném lỗi trực tiếp
}).catch(alert); // Bắt lỗi thành công hiển thị: "Error: Whoops!"
```

---

#### 14.4.2. Rethrowing (Ném lại lỗi và chuyển tiếp xử lý)
Khối `.catch(fn)` hoạt động tương tự như khối lệnh `catch` trong cấu trúc `try...catch` thông thường. Chúng ta hoàn toàn có thể phân tích lỗi và ném lại lỗi để chuyển tiếp xử lý sang khối tiếp theo:
- Nếu chúng ta xử lý lỗi thành công và kết thúc hàm một cách bình thường (không ném lỗi tiếp), luồng xử lý sẽ tiếp tục nhảy sang khối `.then` thành công gần nhất phía dưới.
- Nếu chúng ta chủ động `throw` lỗi bên trong `.catch`, quyền kiểm soát luồng sẽ chuyển sang khối `.catch` kế tiếp.
```javascript
new Promise((resolve, reject) => {
  throw new Error("Whoops!");
}).catch(function(error) {
  if (error instanceof URIError) {
    // Xử lý lỗi nếu là URIError
  } else {
    alert("Không thể xử lý lỗi này tại đây!");
    throw error; // Ném lại lỗi để chuyển tiếp xuống catch phía dưới
  }
}).then(function() {
  // Khối này KHÔNG chạy vì catch trên đã ném lại lỗi
}).catch(error => {
  alert(`Đã bắt được lỗi chưa xác định: ${error}`);
});
```

---

#### 14.4.3. Unhandled rejections (Thất bại không được xử lý)
Nếu một lỗi xảy ra trong Promise mà chuỗi xử lý không có bất kỳ khối `.catch` nào ở cuối để hứng lỗi, lỗi này sẽ trở thành **Unhandled Rejection (Thất bại không được xử lý)**.
- Trình duyệt sẽ phát hiện và ghi nhận lỗi này, làm ứng dụng có khả năng bị treo và thông báo lỗi hiển thị màu đỏ trên console.
- Trong môi trường trình duyệt, chúng ta có thể lắng nghe sự kiện toàn cục **`unhandledrejection`** trên đối tượng `window` để phát hiện và ghi nhận các lỗi Promise bị bỏ quên này:
```javascript
window.addEventListener('unhandledrejection', function(event) {
  alert(event.promise); // Đối tượng Promise phát sinh lỗi
  alert(event.reason);  // Nội dung lỗi chi tiết (Ví dụ: Error: Whoops!)
});

new Promise(function() {
  throw new Error("Whoops!"); // Lỗi ném ra nhưng không có khối .catch xử lý
});
```

---

### 14.5. Promise API
Lớp `Promise` cung cấp 5 phương thức tĩnh (APIs) để xử lý đồng thời nhiều Promise cùng lúc. Dưới đây là 3 phương thức phổ biến nhất:

---

#### 14.5.1. Promise.all
Phương thức `Promise.all` nhận vào một danh sách các Promise (thường là một mảng) và trả về một Promise mới.
- **Cơ chế hoạt động:** 
  - Trả về kết quả thành công khi **tất cả** các Promise truyền vào đều thành công. Kết quả trả về là một mảng chứa kết quả của từng Promise con theo đúng thứ tự truyền vào ban đầu.
  - **Cơ chế thất bại nhanh (Fail-fast):** Nếu có bất kỳ một Promise con nào thất bại (`rejected`), Promise tổng của `Promise.all` sẽ lập tức bị thất bại và ném ra lỗi của Promise con đó ngay lập tức (bỏ qua kết quả của các Promise thành công còn lại).
- **Cú pháp:**
  ```javascript
  let promise = Promise.all(iterable);
  ```
- **Mã nguồn mẫu:**
  ```javascript
  Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // Trả về 1 sau 3 giây
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // Trả về 2 sau 2 giây
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // Trả về 3 sau 1 giây
  ]).then(alert); // Hiển thị mảng kết quả: 1, 2, 3 sau khi tất cả đã hoàn thành xong
  ```

---

#### 14.5.2. Promise.allSettled
Phương thức `Promise.allSettled` nhận vào một danh sách các Promise và đợi cho đến khi **tất cả** các Promise con này đều được giải quyết xong (bất kể thành công hay thất bại).
- **Kết quả trả về:** Trả về một mảng chứa các đối tượng mô tả trạng thái của từng Promise con:
  - Định dạng thành công: `{ status: "fulfilled", value: result }`
  - Định dạng thất bại: `{ status: "rejected", reason: error }`
- **Mã nguồn mẫu:**
  ```javascript
  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];

  Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => {
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          alert(`${urls[num]}: ${result.value.status}`); // Yêu cầu thành công
        }
        if (result.status == "rejected") {
          alert(`${urls[num]}: ${result.reason}`);        // Yêu cầu thất bại
        }
      });
    });
  ```

---

#### 14.5.3. Promise.race
Phương thức `Promise.race` nhận vào một danh sách các Promise và **chỉ đợi Promise nào hoàn thành sớm nhất** (bất kể là thành công hay thất bại) để lấy giá trị kết quả hoặc lỗi của Promise đó làm kết quả chung cuộc.
- **Cú pháp:**
  ```javascript
  let promise = Promise.race(iterable);
  ```
- **Mã nguồn mẫu:**
  ```javascript
  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)), // Sớm nhất (1 giây)
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).then(alert); // Chỉ hiển thị: 1 (vì Promise thứ nhất về đích sớm nhất)
  ```

---

#### 14.5.4. Promise.any
Phương thức `Promise.any` nhận vào một danh sách các Promise và đợi cho đến khi **có một Promise con đầu tiên thành công (`fulfilled`)** để lấy kết quả của Promise đó.
- **Cơ chế hoạt động:** 
  - Khác với `Promise.race` (chấp nhận cả thành công và thất bại miễn là sớm nhất), `Promise.any` chỉ quan tâm tới Promise **thành công sớm nhất**.
  - **Trường hợp tất cả thất bại:** Nếu tất cả các Promise truyền vào đều thất bại (`rejected`), Promise tổng sẽ bị thất bại với đối tượng lỗi đặc biệt **`AggregateError`** – lưu trữ tất cả các lỗi chi tiết của từng Promise con trong thuộc tính `.errors`.
- **Cú pháp:**
  ```javascript
  let promise = Promise.any(iterable);
  ```
- **Mã nguồn mẫu:**
  ```javascript
  Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ouch!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000))
  ]).catch(error => {
    console.log(error.constructor.name); // Kết quả: AggregateError
    console.log(error.errors[0]);         // Kết quả: Error: Ouch!
    console.log(error.errors[1]);         // Kết quả: Error: Error!
  });
  ```

---

#### 14.5.5. Promise.resolve / Promise.reject
Đây là hai phương thức tiện ích giúp tạo nhanh một Promise ở trạng thái hoàn thành hoặc thất bại mà không cần sử dụng cú pháp `new Promise` truyền thống.

1. **`Promise.resolve(value)`**: Tạo nhanh một Promise đã thành công (`fulfilled`) với kết quả là `value`.
   - *Tương đương cú pháp:*
     ```javascript
     let promise = new Promise(resolve => resolve(value));
     ```
   - *Ứng dụng:* Dùng để tương thích dữ liệu khi một hàm yêu cầu bắt buộc phải trả về kiểu dữ liệu Promise (ví dụ khi lập trình chức năng bộ nhớ đệm cache).
   - *Mã nguồn mẫu (Bộ nhớ đệm Cache):*
     ```javascript
     let cache = new Map();

     function loadCached(url) {
       if (cache.has(url)) {
         // Trả về ngay một Promise thành công chứa kết quả trong cache
         return Promise.resolve(cache.get(url));
       }

       return fetch(url)
         .then(response => response.text())
         .then(text => {
           cache.set(url, text);
           return text;
         });
     }
     ```

2. **`Promise.reject(error)`**: Tạo nhanh một Promise đã thất bại (`rejected`) với đối tượng lỗi là `error`.
   - *Tương đương cú pháp:*
     ```javascript
     let promise = new Promise((resolve, reject) => reject(error));
     ```

---

## 15. Async/await

Cú pháp đặc biệt **`async/await`** trong JavaScript giúp lập trình viên làm việc và thao tác với các đối tượng Promise một cách dễ dàng, trực quan và có phong cách viết mã đồng bộ (đồng dạng cấu trúc tuần tự từ trên xuống dưới).

### 15.1. Introduction to Async/await (Giới thiệu chung)
- **Đặc trưng:** Cú pháp này vô cùng đơn giản, dễ tiếp cận và thực tế đã thay thế hầu hết cách viết chuỗi `.then()` dài dòng trước đây.
- **Thành phần:** Gồm hai từ khóa bổ trợ chính: `async` (đặt trước khai báo hàm) và `await` (đặt trước các lệnh gọi Promise bên trong hàm).

---

### 15.2. Async functions (Hàm bất đồng bộ)
Để viết mã bất đồng bộ, chúng ta bắt đầu bằng việc đặt từ khóa **`async`** ngay trước khai báo hàm:

- **Cú pháp:**
  ```javascript
  async function f() {
    return 1;
  }
  ```
- **Ý nghĩa:** Từ khóa `async` khai báo rằng hàm này **luôn luôn trả về một đối tượng Promise**. 
  - Nếu hàm trả về một giá trị thường (như số `1` ở trên), JavaScript Engine sẽ tự động bọc giá trị đó lại trong một Promise đã hoàn thành (`fulfilled`) trước khi trả về.
  - Chúng ta có thể kiểm thử bằng cách gọi: `f().then(alert);` // Hiển thị: 1.

---

### 15.3. Await (Đợi kết quả)
Từ khóa **`await`** chỉ có thể hoạt động và được viết **bên trong các hàm có khai báo `async`**.

- **Cú pháp:**
  ```javascript
  let value = await promise; // Chờ cho đến khi promise được giải quyết
  ```
- **Ý nghĩa:** Từ khóa `await` yêu cầu JavaScript Engine tạm dừng thực thi hàm đó cho đến khi đối tượng `promise` được giải quyết xong (`settled`) và trả về kết quả tương ứng.
- **Hiệu năng:** Việc tạm dừng này **không hề gây tốn tài nguyên CPU**, vì trong thời gian tạm dừng đó, JavaScript Engine có thể đi thực thi các tác vụ, kịch bản khác hoặc xử lý các sự kiện của trình duyệt.
- **Đợi đồng thời nhiều Promise (Multiple promises):** Nếu muốn đợi nhiều tác vụ chạy song song để tối ưu tốc độ, chúng ta có thể kết hợp bọc chúng trong `Promise.all` rồi sử dụng `await`:
  ```javascript
  // Chờ đợi mảng kết quả của nhiều yêu cầu tải dữ liệu fetch cùng lúc
  let results = await Promise.all([
    fetch(url1),
    fetch(url2)
  ]);
  ```

---

### 15.4. Error handling with Async/await (Xử lý lỗi)
Khi một Promise hoàn thành suôn sẻ, lệnh `await promise` trả về giá trị kết quả. Tuy nhiên, nếu Promise đó bị lỗi (`rejected`), nó sẽ **tự động ném (throw) ra lỗi** ngay tại dòng code chứa từ khóa `await` đó.

- **Sự tương đương:**
  ```javascript
  async function f() {
    await Promise.reject(new Error("Whoops!"));
  }
  ```
  Hoạt động hoàn toàn tương đương với việc ném lỗi thủ công:
  ```javascript
  async function f() {
    throw new Error("Whoops!");
  }
  ```
- **Xử lý lỗi bằng `try...catch`:** Trong thực tế, các Promise có thể mất một thời gian trễ trước khi bị lỗi. Chúng ta có thể dùng cấu trúc `try...catch` thông thường để bắt các lỗi ném ra từ `await` này một cách đồng bộ:
  ```javascript
  async function f() {
    try {
      // Giả lập gửi một yêu cầu HTTP tới địa chỉ không tồn tại
      let response = await fetch('http://no-such-url');
    } catch (err) {
      alert(err); // Kết quả hiển thị lỗi: TypeError: failed to fetch
    }
  }
  
  f();
  ```
- **Xử lý lỗi bằng cách móc nối `.catch()`:** Nếu không sử dụng cấu trúc `try...catch` bên trong thân hàm, bản thân hàm `async` khi gặp lỗi không được xử lý sẽ trả về một Promise ở trạng thái bị từ chối (`rejected`). Để xử lý lỗi, chúng ta có thể gọi phương thức `.catch()` trực tiếp khi kích hoạt chạy hàm:
  ```javascript
  async function f() {
    let response = await fetch('http://no-such-url');
  }

  // f() trả về một rejected promise do không bắt lỗi bằng try...catch bên trong
  // Chúng ta có thể dùng .catch để xử lý lỗi của nó bên ngoài
  f().catch(alert); // Kết quả hiển thị lỗi: TypeError: failed to fetch
  ```

---

## 16. Modules (Mô-đun)

Khi ứng dụng web phát triển ngày càng lớn, chúng ta cần chia nhỏ mã nguồn thành nhiều tệp tin độc lập gọi là các **Modules (Mô-đun)** để dễ dàng quản lý và tái sử dụng.

### 16.1. Introduction to Modules (Giới thiệu chung)
- **Định nghĩa:** Một Module đơn giản là một tệp kịch bản JavaScript duy nhất (một file script là một module).
- **Cơ chế:** Các Module có thể tải lẫn nhau và trao đổi các chức năng thông qua hai chỉ thị từ khóa đặc biệt:
  - **`export`**: Đánh dấu các biến, hàm, hoặc lớp đối tượng có thể được truy cập và sử dụng từ bên ngoài mô-đun hiện tại.
  - **`import`**: Nhập và sử dụng các tính năng đã được xuất từ mô-đun khác vào mô-đun hiện tại.

---

### 16.2. Export (Xuất chức năng từ Module)
JavaScript cung cấp nhiều cách để xuất các thành phần từ một tệp tin:

- **Cách 1: Đặt từ khóa `export` trực tiếp trước khai báo (Export inline declarations):**
  Chúng ta có thể xuất bất kỳ khai báo nào (biến, hằng số, hàm, hoặc lớp đối tượng) bằng cách đặt từ khóa `export` ngay trước nó.
  ```javascript
  // Xuất một mảng dữ liệu
  export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Xuất một hằng số
  export const MODULES_BECAME_STANDARD_YEAR = 2015;

  // Xuất một lớp đối tượng (class)
  export class User {
    constructor(name) {
      this.name = name;
    }
  }
  ```
- **Cách 2: Khai báo trước, xuất ra sau dưới dạng danh sách (Export separately):**
  Chúng ta có thể định nghĩa các hàm trước, sau đó gom nhóm chúng lại để xuất ra một lượt ở cuối tệp.
  ```javascript
  // say.js
  function sayHi(user) {
    alert(`Hello, ${user}!`);
  }

  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }

  // Xuất danh sách các hàm
  export { sayHi, sayBye };
  ```
- **Cách 3: Xuất kèm theo bí danh đổi tên (Export with alias `as`):**
  Sử dụng từ khóa `as` để xuất một thành phần dưới một cái tên khác khi hiển thị ra bên ngoài.
  ```javascript
  // say.js
  export { sayHi as hi, sayBye as bye };
  ```

---

### 16.3. Import (Nhập chức năng vào Module)
Để sử dụng các tính năng đã được xuất từ một module khác:

- **Cách 1: Nhập danh sách các tính năng bằng ngoặc nhọn:**
  ```javascript
  // main.js
  import { sayHi, sayBye } from './say.js';

  sayHi('John');  // Hiển thị: Hello, John!
  sayBye('John'); // Hiển thị: Bye, John!
  ```
- **Cách 2: Nhập các tính năng kèm bí danh đổi tên (Import with alias `as`):**
  Nếu muốn tránh trùng tên biến hoặc muốn tên gọi ngắn gọn hơn, ta đổi tên thành phần được nhập bằng từ khóa `as`:
  ```javascript
  // main.js
  import { sayHi as hi, sayBye as bye } from './say.js';

  hi('John');  // Hiển thị: Hello, John!
  bye('John'); // Hiển thị: Bye, John!
  ```

---

### 16.4. Export default (Xuất mặc định)
Bên cạnh việc xuất các tính năng có đặt tên định danh cụ thể (named export), JavaScript Module còn hỗ trợ cú pháp xuất mặc định **`export default`** nhằm tối ưu hóa phong cách lập trình "mỗi file chứa một chức năng chính" (one thing per module).

- **Đặc trưng:** Mỗi tệp tin (file module) **chỉ được phép chứa tối đa duy nhất một lệnh `export default`**.
- **Cú pháp xuất:** Đặt từ khóa `export default` ngay trước thực thể cần xuất (thường là một lớp đối tượng hoặc một hàm chính).
  ```javascript
  // user.js
  export default class User { // Đặt "default" trước định nghĩa class
    constructor(name) {
      this.name = name;
    }
  }
  ```
- **Cú pháp nhập (Import default):** Khi nhập một thành phần mặc định, chúng ta **không sử dụng cặp dấu ngoặc nhọn `{}`** bao quanh và có thể đặt tên biến tùy ý đại diện cho thành phần đó:
  ```javascript
  // main.js
  import User from './user.js'; // Nhập trực tiếp User không cần ngoặc nhọn {}
  
  let user = new User('John');
  ```

---

### 16.5. Re-export (Tái xuất khẩu chức năng)
Cú pháp tái xuất khẩu **`export ... from ...`** cho phép một mô-đun trung gian nhập nhanh các tính năng từ một mô-đun khác và ngay lập tức xuất chúng ra bên ngoài (có thể đổi tên nếu cần) mà không cần phải viết thủ công hai khối lệnh `import` và `export` riêng biệt.

- **Cú pháp:**
  ```javascript
  // Tái xuất một tính năng có tên cụ thể
  export { sayHi } from './say.js'; // Nhập sayHi và tái xuất ngay lập tức
  
  // Tái xuất một tính năng mặc định (default export) kèm theo đổi tên
  export { default as User } from './user.js'; // Tái xuất default dưới tên User
  ```





















