# Học phần TypeScript: Tài liệu tóm tắt kiến thức

---

## Phần 1. JavaScript Fundamentals (ES6+)

### 1. Giới thiệu về JavaScript Fundamentals (ES6+)
*   **JavaScript (JS):** Là ngôn ngữ lập trình phía máy khách (client-side) phổ biến nhất trên thế giới, đóng vai trò cốt lõi trong phát triển ứng dụng Web.
*   **ES6 (ECMAScript 2015):** Là một bản cập nhật lớn mang tính bước ngoặt của JavaScript, giới thiệu hàng loạt cú pháp và tính năng hiện đại như: `let`, `const`, arrow functions (hàm mũi tên), class (lớp), modules (mô-đun), promise (đồng bộ/bất đồng bộ)... giúp việc viết mã trở nên ngắn gọn, minh bạch và an toàn hơn.

---

### 2. Biến và Kiểu dữ liệu (Variables and Data Types)

#### 2.1 Từ khóa khai báo biến: `var`, `let`, `const`
| Đặc tính | `var` | `let` | `const` |
| :--- | :--- | :--- | :--- |
| **Phạm vi (Scope)** | Function scope | Block scope `{...}` | Block scope `{...}` |
| **Gán lại giá trị** | Có thể gán lại | Có thể gán lại | **Không thể gán lại** |
| **Khai báo lại** | Có thể khai báo lại | Không thể khai báo lại | Không thể khai báo lại |

#### 2.2 Các kiểu dữ liệu cơ bản (Data types):
*   **String (Chuỗi):** Biểu diễn dữ liệu dạng chữ.
*   **Number (Số):** Biểu diễn số nguyên và số thực.
*   **Boolean:** Trạng thái đúng/sai (`true`/`false`).
*   **Null:** Đại diện cho một giá trị trống hoặc không tồn tại một cách cố ý.
*   **Undefined:** Giá trị mặc định của một biến đã khai báo nhưng chưa được khởi tạo giá trị.
*   **Object (Đối tượng):** Kiểu dữ liệu phức hợp dùng để lưu trữ các tập hợp dữ liệu dưới dạng cặp `key: value`.

**Ví dụ thực tế:**
```javascript
let name = "Alice"; // Biến let có thể gán lại giá trị sau này
const skills = ["JS", "HTML"]; // Khai báo mảng hằng số const, không thể gán lại tham chiếu mới
```

---

### 3. Toán tử và Biểu thức (Operators and Expressions)
*   **Toán tử số học (Arithmetic operators):**
    *   Cơ bản: `+` (cộng), `-` (trừ), `*` (nhân), `/` (chia), `%` (chia lấy dư).
    *   ES6 bổ sung: `**` (toán tử lũy thừa, ví dụ `2 ** 3 = 8`).
*   **Toán tử so sánh (Comparison):**
    *   `==` vs `===`: Toán tử so sánh tương đối `==` (chỉ so sánh giá trị sau khi ép kiểu tự động) và toán tử so sánh tuyệt đối `===` (so sánh cả giá trị và kiểu dữ liệu - **khuyên dùng**).
    *   `!=` vs `!==`: So sánh không bằng tương đối (`!=`) và so sánh không bằng tuyệt đối (`!==`).
*   **Toán tử logic (Logical):**
    *   `&&` (Phép VÀ logic - AND).
    *   `||` (Phép HOẶC logic - OR).
    *   `!` (Phép PHỦ ĐỊNH logic - NOT).

---

### 4. Cấu trúc điều khiển (Control Structures)
*   **Câu lệnh điều kiện (Conditional statements):** Sử dụng các cấu trúc `if`, `else if`, `else` hoặc cấu trúc chọn lựa `switch` để rẽ nhánh xử lý logic.
*   **Vòng lặp (Loops):**
    *   Vòng lặp cơ bản: `for`, `while`, `do...while`.
    *   Vòng lặp duyệt phần tử: 
        *   `for...of`: Dùng để lặp qua các phần tử của một Iterable Object (như Array, String, Map, Set...).
        *   `for...in`: Dùng để lặp qua các thuộc tính đếm được (enumerable properties) của một Object.

**Ví dụ thực tế:**
```javascript
let score = 95;

if (score >= 90) {
  console.log("A");
} else {
  console.log("B");
}
```

---

### 5. Hàm & Hàm mũi tên (Functions & Arrow Functions)
*   **Khai báo hàm thông thường (Function Declaration):** Có hỗ trợ hoisting (có thể gọi hàm trước khi khai báo).
    ```javascript
    function sum(a, b) {
      return a + b;
    }
    ```
*   **Biểu thức hàm (Function Expression):** Không hỗ trợ hoisting.
    ```javascript
    const sum = function(a, b) {
      return a + b;
    };
    ```
*   **Hàm mũi tên (Arrow Function):** Cú pháp ngắn gọn diper, không tự định nghĩa ngữ cảnh `this` riêng (lexical this scoping).
    *   Nếu hàm chỉ có 1 tham số, có thể bỏ dấu ngoặc đơn.
    *   Nếu hàm chỉ có 1 dòng return, có thể bỏ dấu ngoặc nhọn `{}` và từ khóa `return`.
*   **Hàm gọi lại (Callback):** Truyền hàm dưới dạng tham số vào hàm khác. Thường dùng duyệt mảng như `.forEach()`, `.map()`,...

**Ví dụ thực tế:**
```javascript
// Hàm mũi tên ngắn gọn nhận 1 đối số và tự động return chuỗi chào hỏi
const greet = name => `Hello ${name}`;

// Sử dụng callback map qua mảng để nhân đôi các phần tử
const doubled = [1, 2, 3].map(x => x * 2); // Kết quả: [2, 4, 6]
```

---

### 6. Đối tượng & Mảng (Objects & Arrays)
*   **Đối tượng (Object):** Lưu trữ thông tin dưới dạng thuộc tính và phương thức.
*   **Mảng (Array):** Cung cấp các phương thức tích hợp sẵn cực kỳ mạnh mẽ để thao tác dữ liệu:
    *   `.map()`: Biến đổi từng phần tử trong mảng và trả về mảng mới có cùng độ dài.
    *   `.filter()`: Lọc các phần tử thỏa mãn điều kiện và trả về mảng con mới.
    *   `.reduce()`: Tích lũy các phần tử mảng thành một giá trị duy nhất (số, chuỗi, đối tượng...).
    *   `.forEach()`: Duyệt qua từng phần tử để thực hiện hành động phụ (side effect), không trả về giá trị mới.

**Ví dụ thực tế:**
```javascript
// Khởi tạo một đối tượng Object
const person = { name: "John", age: 30 };

// Khởi tạo một mảng Array
const numbers = [1, 2, 3];

// Lọc các số lớn hơn 1
const filteredNumbers = numbers.filter(n => n > 1); // Kết quả: [2, 3]
```

---

### 7. Lớp trong ES6 (Classes in ES6)
ES6 giới thiệu cú pháp `class` như một lớp vỏ bọc cú pháp (syntactic sugar) cho mô hình kế thừa dạng nguyên mẫu (prototype-based inheritance) của JavaScript, giúp tiếp cận lập trình hướng đối tượng (OOP) trực quan hơn.
*   **`constructor`:** Hàm khởi tạo thuộc tính cho đối tượng khi dùng từ khóa `new`.
*   **Kế thừa và Phương thức:** Hỗ trợ cơ chế kế thừa thông qua từ khóa `extends` và lớp cha `super`.

**Ví dụ thực tế:**
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

const dog = new Animal("Buddy");
dog.speak(); // Output: "Buddy makes a sound"
```

---

### 8. Mô-đun (Modules - Import / Export)
Mô-đun trong ES6 (ES Modules - ESM) giúp chia nhỏ mã nguồn thành các file riêng biệt để dễ quản lý và tái sử dụng.
*   **`export`:** Xuất biến, hàm, hoặc lớp từ một file để file khác có thể sử dụng.
*   **`import`:** Nhập các thành phần được xuất từ file khác vào file hiện tại.

**Ví dụ thực tế:**
```javascript
// file: math.js
export const add = (a, b) => a + b;

// file: app.js
import { add } from './math.js';
console.log(add(2, 3)); // Output: 5
```

---

### 9. Promises & Async/Await (Xử lý bất đồng bộ)
*   **Promise:** Đại diện cho kết quả của một tác vụ bất đồng bộ sẽ hoàn thành trong tương lai. Có 3 trạng thái: *Pending* (đang chờ), *Fulfilled* (thành công), và *Rejected* (thất bại).
*   **Async/Await:** Cú pháp hiện đại được xây dựng trên nền tảng Promise, giúp viết và đọc mã bất đồng bộ tự nhiên giống như mã đồng bộ thông thường.
    *   Từ khóa `async` khai báo một hàm bất đồng bộ luôn trả về một Promise.
    *   Từ khóa `await` (chỉ dùng được trong hàm `async`) giúp tạm dừng thực thi cho đến khi Promise được giải quyết (resolved).

**Ví dụ thực tế:**
```javascript
// Tạo một hàm giả lập bất đồng bộ lấy dữ liệu sau 1 giây
const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done"), 1000);
  });
};

// Hàm async sử dụng await để chờ kết quả bất đồng bộ
async function load() {
  const data = await fetchData();
  console.log(data); // In ra "Done" sau 1 giây
}

load();
```

---

## Phần 2. JavaScript ES6+ Advance (JavaScript ES6+ nâng cao)

### 1. Classes & basic OOP (Lớp và Lập trình hướng đối tượng cơ bản)

#### 1.1 Khái niệm về Class và Instance:
*   **Class (Lớp):** Bản thiết kế tổng thể (blueprint) định nghĩa các thuộc tính (properties) và hành vi (behaviors) chung.
*   **Instance (Thực thể):** Đối tượng cụ thể (concrete object) được khởi tạo từ bản thiết kế của Class.
*   *Triết lý cốt lõi:* Khởi tạo định nghĩa một lần (**Create one**), tạo thực thể sử dụng nhiều lần (**Instantiate many times**).

```
+------------------------------------+
|               CLASS                |
|      (Bản thiết kế ngôi nhà)        |
+-----------------+------------------+
                  |
                  | new (Khởi tạo thực thể)
                  v
+-----------------+------------------+
|             INSTANCE               |
|      (Ngôi nhà thực tế xây ra)     |
+------------------------------------+
```

#### 1.2 Cú pháp cơ bản của Class (Basic syntax):
```javascript
class Animal {
  constructor(name, age) {
    this.name = name; // Thuộc tính (Property)
    this.age = age;   // Thuộc tính (Property)
  }

  eat() { // Phương thức (Method)
    console.log(`${this.name} is eating!`);
  }
}

// Khởi tạo một thực thể (Instance) từ lớp cha Animal
const myAnimal = new Animal("Lion", 5);
myAnimal.eat(); // Output: "Lion is eating!"
```

---

### 2. Kế thừa trong hướng đối tượng (Inheritance)
*   **Định nghĩa:** Là cơ chế cho phép một lớp mới (lớp con) kế thừa lại tất cả các thuộc tính và hành vi có sẵn từ một lớp đã tồn tại (lớp cha).
*   **Mục tiêu:** Tăng khả năng tái sử dụng mã nguồn và giữ code sạch đẹp, tuân thủ nguyên tắc **DRY (Don't Repeat Yourself)**.

$$\text{Animal} \ (\text{Act, Eat}) \xrightarrow{\text{Inherit}} \text{Mammal} \ (\text{Warm blooded, Hair}) \xrightarrow{\text{Inherit}} \begin{cases} \text{Cat (Good eyesight, Run)} \\ \text{Rabbit (Good hearing, Run)} \end{cases}$$

#### 2.1 Các từ khóa cốt lõi:
*   **`extends`:** Chỉ định lớp con kế thừa lại từ lớp cha.
*   **`super()`:** Hàm gọi lại constructor của lớp cha để khởi tạo các thuộc tính cha trước khi thêm các thuộc tính riêng của lớp con.

#### 2.2 Cú pháp kế thừa:
```javascript
class Pet extends Animal {
  constructor(name, age, owner) {
    super(name, age); // Gọi constructor của lớp cha Animal
    this.owner = owner; // Thuộc tính mới khai báo riêng của lớp con Pet
  }

  play() { // Phương thức mới của riêng lớp Pet
    console.log(`${this.name} is playing!`);
  }
}
```

---

### 3. Mô-đun trong phát triển phần mềm (Modules)
*   **Tại sao lại cần Modules?**
    *   *Trước khi dùng modules (BEFORE):* Mã nguồn chồng chất, lộn xộn giống như một căn phòng bừa bộn không được dọn dẹp, gây khó khăn cho việc quản lý và phát hiện lỗi.
    *   *Sau khi dùng modules (AFTER):* Mã nguồn được chia nhỏ và đóng gói cẩn thận vào từng ngăn hộp lưu trữ logic riêng biệt, giúp dự án ngăn nắp, dễ đọc và dễ bảo trì.
    *   *Giải pháp:* Modules giúp giải quyết triệt để bài toán **"Spaghetti Code"** (mọi thứ dồn hết vào một file lớn duy nhất) bằng cách chia nhỏ code thành các file nhỏ độc lập, có thể tái sử dụng.
*   **Lợi ích của Modules:**
    *   **Maintainability (Dễ bảo trì):** Sửa lỗi hay nâng cấp tính năng cục bộ trong một mô-đun mà không ảnh hưởng tới luồng chạy chính.
    *   **Namespacing (Quản lý không gian tên):** Tránh xung đột tên biến/tên hàm toàn cục giữa các phần khác nhau của hệ thống.
    *   **Reusability (Tái sử dụng):** Một mô-đun viết ra có thể được import sử dụng ở nhiều nơi khác nhau dễ dàng.

#### 3.1 Hai cơ chế Xuất/Nhập Modules: Named Export và Default Export
React và ES6 hỗ trợ 2 cách chính để xuất dữ liệu từ một Module:

| Đặc tính | Named Export (Xuất có tên) | Default Export (Xuất mặc định) |
| :--- | :--- | :--- |
| **Số lượng trong 1 file** | Không giới hạn (Multiple per file) | **Duy nhất một** (Only ONE per file) |
| **Cú pháp Xuất (Export)** | `export const name = ...` | `export default ...` |
| **Cú pháp Nhập (Import)** | `import { name } from '...'` (Phải khớp chính xác tên) | `import name from '...'` (Tùy chọn tên linh hoạt theo ý muốn) |

#### 3.2 Ví dụ minh họa kết hợp cả hai cơ chế:
```javascript
// file: mathUtils.js
export const PI = 3.14; // Named Export
export const e = 2.71;   // Named Export

export default function add(a, b) { // Default Export
  return a + b;
}

// file: app.js
import add, { PI, e } from './mathUtils'; // Nhập đồng thời cả Default và Named

console.log(add(PI, e)); // Output: 5.85
```

---

### 4. Promises và Async/Await (Xử lý bất đồng bộ chuyên sâu)

#### 4.1 So sánh cơ chế Đồng bộ (Synchronous) và Bất đồng bộ (Asynchronous):

```
Đồng bộ (Synchronous):
Process A ----------> Gọi Process B ---------> [Đợi phản hồi (UI bị đơ)] ---------> Nhận kết quả B
                                                                                   (Tiếp tục chạy)

Bất đồng bộ (Asynchronous):
Process A ----------> Gọi Process B ---------> [Vẫn tiếp tục làm việc khác] -------> Nhận kết quả B qua Event Loop
```

*   **Đồng bộ (Synchronous):** 
    *   JavaScript thực thi mã nguồn trực tiếp trên luồng giao diện chính (**Main UI Thread**).
    *   JS chỉ có duy nhất **MỘT Call Stack** (luồng đơn - single-threaded), nên nó chỉ làm duy nhất một việc tại một thời điểm, chạy tuần tự từng dòng code từ trên xuống dưới.
    *   *Rủi ro:* Nếu có một tác vụ tốn quá nhiều thời gian xử lý (như đọc file nặng, tính toán sâu), **toàn bộ giao diện người dùng (UI) sẽ bị đóng băng (frozen)** cho đến khi tác vụ đó hoàn thành.
*   **Bất đồng bộ (Asynchronous):**
    *   Ủy thác (delegate) các tác vụ nặng hoặc chậm chạp (như gọi API, hẹn giờ `setTimeout`) cho trình duyệt (Web APIs) hoặc hệ thống xử lý bên ngoài luồng chính.
    *   Luồng giao diện UI chính vẫn tiếp tục chạy mượt mà, không bị chặn hay gián đoạn.
    *   Khi tác vụ bất đồng bộ hoàn thành, kết quả của nó sẽ được đưa vào hàng đợi và gửi trả về luồng chính thông qua cơ chế **Event Loop** khi Call Stack rỗng.

*   Khi tác vụ bất đồng bộ hoàn thành, kết quả của nó sẽ được đưa vào hàng đợi và gửi trả về luồng chính thông qua cơ chế **Event Loop** khi Call Stack rỗng.

#### 4.2 Định nghĩa và 3 trạng thái của một Promise:
**Promise** là một đối tượng đại diện cho kết quả hoàn thành (hoặc thất bại) trong tương lai của một tác vụ bất đồng bộ.

Một Promise luôn có 3 trạng thái chính:
*   **Pending (Đang chờ):** Tác vụ đang được thực thi, chưa có kết quả (In progress...).
*   **Fulfilled (Thành công):** Tác vụ hoàn thành xuất sắc, trả về dữ liệu thành công. Sẽ kích hoạt hàm `.then(onFulfillment)`.
*   **Rejected (Thất bại):** Tác vụ thất bại do lỗi phần cứng, mạng,... Sẽ kích hoạt hàm `.catch(onRejection)`.

$$\text{Promise (Pending)} \begin{cases} \xrightarrow{\text{fulfill}} \text{.then(onFulfillment)} \longrightarrow \text{New Pending Promise...} \\ \xrightarrow{\text{reject}} \text{.catch(onRejection)} \longrightarrow \text{New Pending Promise...} \end{cases}$$

#### 4.3 Khởi tạo và Sử dụng Promise:

**Bước 1: Khai báo (Tạo) Promise:**
```javascript
const apiCall = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise State: PENDING...");
    
    // Giả lập cuộc gọi API bất đồng bộ sau 2 giây
    setTimeout(() => {
      const success = Math.random() > 0.5; // Ngẫu nhiên thành công hoặc thất bại
      
      if (success) {
        resolve("Data loaded successfully!"); // Trả dữ liệu thành công
      } else {
        reject("Network error!"); // Báo lỗi
      }
    }, 2000);
  });
};
```

**Bước 2: Tiêu thụ (Sử dụng) Promise:**
```javascript
apiCall()
  .then((result) => {
    console.log("Promise State: FULFILLED");
    console.log("Result:", result);
  })
  .catch((error) => {
    console.log("Promise State: REJECTED");
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Promise finished (either success or fail)"); // Luôn luôn chạy khi kết thúc
  });
```

---

### 5. Cú pháp Async / Await hiện đại

#### 5.1 Quy tắc sử dụng Async/Await (Rules):
Cú pháp **Async/Await** giúp bạn viết mã nguồn bất đồng bộ trông giống như mã đồng bộ thông thường, giúp cấu trúc code phẳng hơn và dễ đọc hơn.
*   **`async`:** Đặt ở phía trước khai báo hàm (Function). Hàm này sẽ luôn tự động trả về một Promise.
*   **`await`:** Đặt ở phía trước lệnh gọi Promise. Nó sẽ tạm dừng việc thực thi tiếp theo của hàm cho đến khi Promise trả về kết quả thành công/thất bại (nhưng không chặn luồng chính UI của trình duyệt).
*   **Xử lý lỗi:** Bắt buộc phải bọc cấu trúc `await` trong khối lệnh **`try...catch`** để quản lý các lỗi phát sinh.

#### 5.2 So sánh Promise Chain (Chuỗi Promise) và Async/Await:

Chúng ta cùng so sánh việc thực hiện 3 tác vụ tuần tự liên tiếp: Đăng nhập $\rightarrow$ Lấy thông tin cá nhân $\rightarrow$ Lấy danh sách đơn hàng.

##### Cách 1: Sử dụng chuỗi Promise Chain truyền thống
```javascript
login()
  .then((result) => {
    console.log(result);
    return getUserProfile(); // Trả tiếp một Promise khác
  })
  .then((profile) => {
    console.log(profile);
    return getOrders(); // Trả tiếp một Promise khác
  })
  .then((orders) => {
    console.log(orders);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

##### Cách 2: Sử dụng cú pháp Async / Await tối giản (Khuyên dùng)
```javascript
async function loadUserData() {
  try {
    const loginResult = await login();
    console.log(loginResult);

    const profile = await getUserProfile();
    console.log(profile);

    const orders = await getOrders();
    console.log(orders);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadUserData();
```

---

## Phần 3. Understanding Static Typing (Tìm hiểu về Kiểu dữ liệu tĩnh)

### 1. Định nghĩa và Tầm quan trọng của Static Typing
Kiểu dữ liệu tĩnh (Static Typing) là một khái niệm nền tảng trong phát triển phần mềm hiện đại, đóng vai trò như chiếc móng vững chắc giúp xây dựng các hệ thống phần mềm mạnh mẽ, tin cậy và dễ bảo trì.

---

### 2. Các lợi ích cốt lõi của Static Typing (Core Benefits)

#### 2.1 Lợi ích 1: Early Error Detection (Phát hiện lỗi sớm trước khi chạy)
*   **Bắt lỗi trước thời gian chạy (Pre-Runtime Bug Catch):** Quá trình biên dịch (Compile-time checks) chủ động quét và xác định chính xác các lỗi kiểu dữ liệu phổ biến như `TypeError` và `AttributeError` trước khi code được thực thi.
*   **Giảm thiểu thời gian gỡ lỗi (Reduced Debugging Time):** Dịch chuyển việc phát hiện lỗi về bên trái ("shift left") trong chu kỳ phát triển phần mềm, giúp giảm nỗ lực gỡ lỗi lên tới **30%**.
*   **An toàn khi triển khai (Deployment Safety):** Ngăn chặn các lỗi nghiêm trọng xuất hiện ở hệ thống Production, tránh tình trạng ứng dụng bị sập bất ngờ khi người dùng đang sử dụng.
*   *Ví dụ:* Bộ biên dịch sẽ lập tức báo lỗi type mismatch khi cố gắng cộng một chuỗi (`String`) với một số nguyên (`int`), tiết kiệm thời gian quý giá cho lập trình viên.

#### 2.2 Lợi ích 2: Enhanced Code Readability & Maintainability (Tăng độ đọc hiểu và bảo trì code)
*   **Mã nguồn tự ghi tài liệu (Self-Documenting Code):** Việc khai báo rõ ràng kiểu dữ liệu của các biến/props hoạt động như một tài liệu hướng dẫn tích hợp sẵn bên trong code.
*   **Cải thiện làm việc nhóm (Improved Team Collaboration):** Giúp các nhóm từ 5 lập trình viên trở lên dễ dàng hiểu và làm việc chung trên cùng một kho lưu trữ mã nguồn lớn.
*   **Hỗ trợ Onboarding dễ dàng (Simplified Onboarding):** Giúp thành viên mới gia nhập đội ngũ nhanh chóng nắm bắt cấu trúc code và luồng dữ liệu của dự án.
*   **Refactor code an sau (Safer Refactoring):** Hỗ trợ chỉnh sửa cấu trúc mã nguồn một cách tự tin, giảm thiểu tối đa rủi ro phát sinh tác dụng phụ (side effects) ngoài mong muốn.

#### 2.3 Lợi ích 3: Superior IDE Support & Developer Experience (Tăng trải nghiệm lập trình trên IDE)
*   **Gợi ý code thông minh (Intelligent Autocompletion):** Tự động gợi ý hoàn thành mã lệnh thông minh, giúp giảm thiểu lỗi cú pháp và tăng tốc độ viết code lên đến **20%**.
*   **Phản hồi thời gian thực (Real-time Feedback):** Bôi đỏ và đưa ra cảnh báo lỗi trực tiếp ngay trên màn hình biên tập code của IDE khi bạn vừa gõ sai.
*   **Công cụ tái cấu trúc mạnh mẽ (Robust Refactoring Tools):** Cho phép đổi tên các biến/lớp (`Rename Symbol`) trên toàn bộ dự án một cách chính xác tuyệt đối chỉ với 1 click.
*   **Điều hướng code tối ưu (Enhanced Code Navigation):** Giúp bạn di chuyển nhanh chóng trong dự án (ví dụ sử dụng lệnh *"Go to Definition"* để nhảy tới nơi khai báo hàm/biến gốc).

---

### 3. So sánh Kiểu dữ liệu Tĩnh (Static Typing) và Động (Dynamic Typing)

| Tiêu chí so sánh | Static Typing (Kiểu tĩnh) | Dynamic Typing (Kiểu động) |
| :--- | :--- | :--- |
| **Cơ chế kiểm tra kiểu** | Kiểm tra kiểu dữ liệu trong **quá trình biên dịch** (before the program runs). | Kiểm tra kiểu dữ liệu trong **quá trình chạy ứng dụng** (while the program runs). |
| **Tính nghiêm ngặt** | Bắt buộc khai báo kiểu dữ liệu chặt chẽ, phát hiện lỗi rất sớm. | Linh hoạt, mềm dẻo, viết code thử nghiệm nhanh. |
| **Ví dụ ngôn ngữ** | Java, C#, C++, Go, **TypeScript** | Python, **JavaScript**, Ruby, PHP |

---

### 4. Thực tế áp dụng hệ thống kiểu dữ liệu (Practice Examples)

#### 4.1 Ví dụ về Hệ thống Kiểu tĩnh (Static Typing in Practice):
*   **Java:** Yêu cầu khai báo kiểu dữ liệu rõ ràng cho tất cả các biến và tham số của hàm. Bộ biên dịch (compiler) sẽ kiểm tra tính tương thích của kiểu dữ liệu trong quá trình build dự án.
    ```java
    String name = "Alice";
    int age = 30;
    ```
*   **C#:** Áp dụng kiểm tra kiểu dữ liệu nghiêm ngặt trong các cấu trúc hướng đối tượng, hỗ trợ xây dựng phần mềm mạnh mẽ, ổn định.
    ```csharp
    List<string> names = new List<string>();
    ```
*   **TypeScript:** Bổ sung thêm một lớp kiểm tra kiểu dữ liệu tĩnh tùy chọn (optional static typing layer) lên trên JavaScript, làm cho nó trở nên lý tưởng để xây dựng các ứng dụng web lớn và phức tạp.
    ```typescript
    function greet(name: string): string {
      return `Hello, ${name}`;
    }
    ```

#### 4.2 Ví dụ về Hệ thống Kiểu động (Dynamic Typing in Practice):
*   **Python:** Kiểu dữ liệu của biến được xác định tại thời điểm gán giá trị và có thể thay đổi động trong suốt quá trình chạy. Các lỗi như `AttributeError` khi gọi phương thức không tồn tại sẽ chỉ xuất hiện khi ứng dụng đang chạy (runtime).
    ```python
    name = "Bob"
    age = 25
    ```
*   **JavaScript:** Cung cấp sự linh hoạt cực cao, cho phép một biến chứa nhiều kiểu dữ liệu khác nhau ở các thời điểm khác nhau. Tuy nhiên, sự linh hoạt này có thể dẫn đến các lỗi kiểu dữ liệu nghiêm trọng khó phát hiện ở runtime.
    ```javascript
    let value = "hello";
    value = 123;
    ```
*   **Ruby:** Nổi tiếng với triết lý **"Duck Typing"** (Kiểu con vịt): *"Nếu nó đi như một con vịt và kêu như một con vịt, thì nó chính là một con vịt"*. Có nghĩa là tính phù hợp của đối tượng được quyết định bởi các phương thức mà nó sở hữu, chứ không phải do định nghĩa kiểu tường minh của nó.
    ```ruby
    def add(a, b)
      a + b
    end
    ```

---

### 5. Kết luận: Lựa chọn Hệ thống Kiểu dữ liệu phù hợp (Conclusion)
Việc lựa chọn giữa kiểu dữ liệu tĩnh hay động phụ thuộc trực tiếp vào nhu cầu cụ thể của từng dự án:

*   **Ưu thế của Kiểu dữ liệu tĩnh (Static Typing):** Phát hiện lỗi sớm từ trứng nước, tăng khả năng bảo trì và đọc hiểu mã nguồn, hỗ trợ công cụ lập trình (IDE) vượt trội. Cực kỳ phù hợp cho các **dự án lớn, hệ thống phức tạp và phát triển lâu dài**.
*   **Ưu thế của Kiểu dữ liệu động (Dynamic Typing):** Cung cấp sự linh hoạt cao hơn, viết code nhanh hơn trong giai đoạn đầu, lý tưởng cho việc **làm thử nghiệm (prototyping) và các dự án quy mô nhỏ**.
*   **Các yếu tố cân nhắc chính:** Quy mô dự án, số lượng thành viên trong nhóm phát triển, và yêu cầu bảo trì dài hạn sẽ quyết định sự lựa chọn của bạn.
*   **Giải pháp lai (Hybrid Approach):** Các giải pháp như **TypeScript** mang lại sự kết hợp hoàn hảo của cả hai thế giới: tận dụng tối đa lợi ích của kiểu tĩnh cho các ứng dụng web phức tạp nhưng vẫn giữ được sự linh hoạt, mềm dẻo vốn có của JavaScript.

---

## Phần 4. TypeScript Introduction (Giới thiệu về TypeScript)

### 1. Sơ lược Lịch sử phát triển và Mối quan hệ với JavaScript
*   **Lịch sử phát triển:**
    *   Năm 1995: JavaScript được ra mắt bởi Brendan Eich.
    *   Năm 1996: Tiêu chuẩn hóa ECMAScript.
    *   Năm 2006: Thư viện jQuery ra đời giải quyết vấn đề tương thích trình duyệt.
    *   Năm 2009: NodeJS được Ryan Dahl giới thiệu, mang JS lên Server.
    *   Năm 2012 - 2013: **TypeScript** chính thức được công bố bởi Microsoft, đứng đầu là kiến trúc sư trưởng **Anders Hejlsberg** (cha đẻ của ngôn ngữ C# và Delphi).
*   **Mối quan hệ Superset (Tập mẹ):**
    *   TypeScript không phải là một ngôn ngữ viết lại hoàn toàn mới, mà nó là một **tập mẹ (Superset)** của JavaScript.
    *   *Triết lý:* $\text{JavaScript} \subset \text{TypeScript}$. Bất kỳ đoạn mã JavaScript hợp lệ nào cũng đều là mã TypeScript hợp lệ. TypeScript chỉ bao bọc bên ngoài và bổ sung thêm các tính năng kiểm soát kiểu dữ liệu mạnh mẽ.

---

### 2. Định nghĩa TypeScript là gì?
TypeScript là một ngôn ngữ lập trình mã nguồn mở được phát triển và duy trì bởi Microsoft với các đặc trưng nổi bật:
*   Là **Superset** (tập cha) của JavaScript.
*   Cung cấp tính năng kiểm tra kiểu dữ liệu tĩnh (**Static typing**).
*   Hỗ trợ lập trình hướng đối tượng dựa trên lớp vững chắc (**Class-based OOP**).
*   Mã nguồn mở (Open source).
*   Được biên dịch ngược về JavaScript tiêu chuẩn (ES5 hoặc ES6) bởi trình biên dịch TypeScript (tsc) để chạy được trên bất kỳ trình duyệt hay môi trường NodeJS nào.

---

### 3. Nguyên lý hoạt động của TypeScript (How it works)
Trình duyệt web và Node.js không thể trực tiếp hiểu và chạy file `.ts`. Vì vậy:

$$\text{Mã nguồn TypeScript (.ts)} \xrightarrow{\text{Trình biên dịch (tsc)}} \text{Mã nguồn JavaScript (.js)}$$

1.  Lập trình viên viết mã nguồn trong các file định dạng `.ts`.
2.  **TypeScript Compiler (tsc)** sẽ quét qua các file này, thực hiện kiểm tra kiểm lỗi kiểu dữ liệu nghiêm ngặt.
3.  Nếu không có lỗi, trình biên dịch sẽ chuyển đổi (transpile/compile) mã TypeScript thành mã JavaScript thông thường (`.js`) tương thích với các phiên bản ES5, ES6+ tùy cấu hình.
4.  Mã nguồn JavaScript đầu ra này sẽ được chạy bình thường trên browser hoặc server.

---

### 4. Tại sao TypeScript vượt trội hơn JavaScript? (Why TypeScript is better?)
*   **Hỗ trợ toàn bộ tính năng JS hiện đại nhất:** Tương thích hoàn toàn với tất cả cú pháp mới nhất của ECMAScript (bao gồm ES6, ES7...).
*   **Hỗ trợ hoàn hảo mọi thư viện JS:** Có thể tích hợp dễ dàng với tất cả các thư viện và tài liệu API của JavaScript hiện có như jQuery, BootstrapJS, React, Vue,... thông qua các file định nghĩa kiểu dữ liệu (`.d.ts`).
*   **Tái cấu trúc mã nguồn (Refactoring) cực kỳ dễ dàng:** Nhờ hệ thống kiểm tra kiểu tĩnh, việc chỉnh sửa hoặc tối ưu hóa code lớn trở nên an toàn hơn nhiều, đồng thời nâng cao kỹ năng lập trình hướng đối tượng (OOP).
*   **Dễ học và tiếp cận:** Lập trình viên đã biết JavaScript có thể học TypeScript rất nhanh nhờ cú pháp tương đồng.
*   **Phát triển ứng dụng lớn (Scale):** Cực kỳ phù hợp để xây dựng các ứng dụng lớn một cách nhanh chóng, dễ bảo trì, dễ mở rộng và có khả năng tái sử dụng cao.

---

### 5. So sánh trực tiếp: TypeScript vs JavaScript
Dưới đây là bảng so sánh làm rõ sự khác biệt bản chất giữa hai ngôn ngữ:

| Đặc tính so sánh | TypeScript (TS) | JavaScript (JS) |
| :--- | :--- | :--- |
| **Kiểm tra kiểu dữ liệu** | Kiểm soát kiểu dữ liệu mạnh mẽ (**Strong typing**): Cả tĩnh (Static) và động (Dynamic). | Chỉ hoạt động với hệ thống kiểu động (**Dynamic typing**). |
| **Nhà phát triển & Ra mắt** | Được phát triển bởi Microsoft (Anders Hejlsberg) vào năm 2012. | Được phát triển ban đầu bởi Netscape vào năm 1995. |
| **Đuôi mở rộng của file** | `.ts` | `.js` |
| **Khả năng chạy trên trình duyệt** | **Không thể chạy trực tiếp** trên trình duyệt (cần biên dịch sang JS). | **Chạy trực tiếp** trên tất cả các trình duyệt web. |
| **Thời điểm phát hiện lỗi** | Phát hiện và sửa lỗi ngay tại **thời điểm biên dịch** (Compile-time). | Lỗi chỉ được phát hiện khi ứng dụng **đang chạy** (Runtime). |
| **Hỗ trợ OOP nâng cao** | Hỗ trợ lập trình hướng đối tượng đầy đủ (Lớp, Interface, Kế thừa, Generics...). | Bản chất là ngôn ngữ kịch bản (Scripting), lập trình hướng đối tượng dựa trên Prototype. |
| **Cài đặt & Môi trường** | Cần cài đặt trình biên dịch thông qua công cụ quản lý thư viện **npm**. | Tích hợp sẵn trong trình duyệt, không cần cài đặt thêm trình biên dịch. |

---

### 6. Lựa chọn Môi trường phát triển tích hợp (IDE) cho TypeScript
Để lập trình TypeScript hiệu quả và tận dụng tối đa thế mạnh gợi ý code, bạn nên sử dụng các IDE hỗ trợ tốt sau:
*   **Visual Studio Family:**
    *   **Visual Studio Code (VS Code):** Lựa chọn phổ biến nhất, nhẹ, miễn phí và hỗ trợ cực tốt cho TypeScript.
    *   Visual Studio 2017 / 2019.
*   **Các trình soạn thảo & IDE khác:**
    *   **WebStorm:** IDE chuyên nghiệp, hỗ trợ TypeScript vượt trội từ hãng JetBrains.
    *   Sublime Text, Atom, Eclipse, Emacs.
    *   **Vim:** Dành cho lập trình viên ưa thích làm việc trên terminal.

---

### 7. Hướng dẫn cài đặt và thiết lập Môi trường

#### 7.1 Bước 1: Cài đặt Node.js
1.  Truy cập vào trang chủ Node.js: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2.  Tải về phiên bản **LTS (Long Term Support)** - Phiên bản ổn định được khuyến nghị cho hầu hết người dùng.
3.  Chọn bộ cài đặt phù hợp với hệ điều hành của bạn (Windows Installer `.msi`, macOS Installer `.pkg`, hoặc Linux Binary).
4.  Tiến hành cài đặt theo hướng dẫn mặc định của phần mềm.

#### 7.2 Bước 2: Cài đặt TypeScript Compiler toàn cục
Sau khi cài đặt xong Node.js, bạn mở Terminal/Command Prompt lên và chạy lệnh sau để cài đặt trình biên dịch TypeScript thông qua npm:

```bash
npm install -g typescript
```

Lệnh này giúp bạn có thể sử dụng lệnh biên dịch `tsc` ở bất kỳ thư mục nào trên hệ thống máy tính.

---

### 8. Các lệnh kiểm tra phiên bản (Verify versions)
Sau khi hoàn tất cài đặt, bạn có thể thực hiện kiểm tra phiên bản của các công cụ bằng các dòng lệnh tương ứng:

*   **Kiểm tra phiên bản Node.js:**
    ```bash
    node -v
    # hoặc
    node --version
    ```
*   **Kiểm tra phiên bản công cụ quản lý thư viện npm:**
    ```bash
    npm -v
    # hoặc
    npm --version
    ```
*   **Kiểm tra phiên bản trình biên dịch TypeScript (tsc):**
    ```bash
    tsc -v
    # hoặc
    tsc --version
    ```

> [!NOTE]
> Bạn có thể tìm hiểu thêm các tài liệu chính thức, hướng dẫn và công cụ trực tuyến (Playground) của TypeScript tại địa chỉ trang chủ: [https://www.typescriptlang.org](https://www.typescriptlang.org)

---

### 9. Biên dịch thử nghiệm file TypeScript đầu tiên (.ts -> .js)
Để biên dịch thủ công một file nguồn TypeScript sang JavaScript thông thường:

```bash
tsc helloworld.ts
```

*   **`tsc`:** Gọi trình biên dịch TypeScript (TypeScript compiler).
*   **`helloworld.ts`:** Tên file chứa mã nguồn TypeScript cần được biên dịch.
*   **Kết quả đầu ra:** Trình biên dịch sẽ tạo ra một file mới có tên là `helloworld.js` nằm cùng thư mục chứa mã JavaScript tương ứng để sẵn sàng chạy trên trình duyệt hoặc Node.js.

---

### 10. Luồng làm việc thực tế với File TypeScript (.ts)
Khi phát triển ứng dụng, luồng viết mã, biên dịch và chạy diễn ra như sau:

1.  **Viết mã nguồn:** Tạo file `HelloWorld.ts` trong IDE (ví dụ: VS Code) với nội dung:
    ```typescript
    console.log("Hello World");
    ```
2.  **Biên dịch sang JS:** Mở terminal tại thư mục dự án và chạy:
    ```bash
    tsc HelloWorld.ts
    ```
3.  **Thực thi chương trình:** Chạy file JS vừa sinh ra bằng Node.js:
    ```bash
    node HelloWorld.js
    # Kết quả in ra màn hình: Hello World
    ```

---

### 11. Cấu trúc một Dự án TypeScript Đơn giản (Simple Project Structure)
Một dự án Web sử dụng TypeScript cơ bản thường bao gồm các file sau:
*   `app.ts`: File chứa mã nguồn TypeScript do bạn viết.
*   `tsconfig.json`: File cấu hình cho trình biên dịch TypeScript.
*   `app.js`: File JavaScript được tự động sinh ra sau khi biên dịch `app.ts`.
*   `index.html`: File HTML hiển thị giao diện Web và nhúng file script.

```
SIMPLEPROJECT/
├── app.ts          (TypeScript nguồn)
├── app.js          (JavaScript biên dịch ra)
├── tsconfig.json   (File cấu hình compiler)
└── index.html      (Trang web hiển thị)
```

---

### 12. So sánh mã nguồn trước và sau khi biên dịch
Chúng ta có thể thấy rõ sự khác biệt của hệ thống kiểu dữ liệu tĩnh trong TypeScript và JavaScript đầu ra tương ứng:

*   **Mã nguồn TypeScript (`app.ts`):**
    ```typescript
    let str: string = "Welcome to this course";
    console.log(str);
    ```
*   **Mã JavaScript sau khi biên dịch (`app.js`):**
    ```javascript
    var str = "Welcome to this course";
    console.log(str);
    ```

> [!TIP]
> Bạn có thể biên dịch bằng cách chỉ định đường dẫn rõ ràng: `tsc app.ts` hoặc `tsc ./app.ts`.

---

### 13. File cấu hình `tsconfig.json`
`tsconfig.json` là file cấu hình quan trọng nhất của một dự án TypeScript, chỉ thị cho trình biên dịch (`tsc`) cách hoạt động và phiên bản JavaScript đầu ra mà bạn mong muốn.

**Ví dụ cấu hình cơ bản:**
```json
{
  "compilerOptions": {
    "target": "es5"
  }
}
```

*   **`compilerOptions`:** Tập hợp các tùy chọn cấu hình cho trình biên dịch.
*   **`target`:** Xác định phiên bản chuẩn của ECMAScript đầu ra sau khi biên dịch (như `ES3`, `ES5`, `ES6`...). Cấu hình `"target": "es5"` giúp mã nguồn chạy ổn định trên các trình duyệt cũ hơn vốn không hỗ trợ các tính năng hiện đại của ES6+.

---

### 14. Cách nhúng mã vào trang Web (`index.html`)
Do các trình duyệt Web hiện nay chỉ có thể đọc hiểu và thực thi mã JavaScript, bạn **phải nhúng file `.js` đã biên dịch**, hoàn toàn không nhúng file `.ts` trực tiếp.

**Ví dụ trang `index.html`:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Typescript course</title>
    <!-- Nhúng file app.js đã biên dịch từ app.ts -->
    <script src="app.js"></script>
  </head>
  <body>
    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

---

### 15. Kiểm tra kết quả thực thi trên Trình duyệt (Browser Validation)
Sau khi thiết lập file `index.html` và biên dịch mã nguồn thành công:
1.  Mở file `index.html` bằng bất kỳ trình duyệt nào (Chrome, Safari, Firefox, Edge...).
2.  Trang web hiển thị tiêu đề *"This is a heading"* và đoạn văn *"This is a paragraph."*.
3.  Nhấp chuột phải vào trang web, chọn **Inspect (Kiểm tra)** và chuyển sang tab **Console (Bảng điều khiển)**.
4.  Bạn sẽ thấy dòng thông điệp `Welcome to this course` được ghi nhận từ file `app.js:3` in ra trên màn hình console, chứng tỏ mã JavaScript được biên dịch từ TypeScript đã hoạt động chính xác.

```






```

