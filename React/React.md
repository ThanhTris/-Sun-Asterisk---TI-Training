
## Phần 1. Getting Started with ReactJS

### 1. Introducing ReactJS
ReactJS là một thư viện Javascript được phát triển bởi Facebook và Instagram. React sử dụng khái niệm **Virtual DOM** để tự động cập nhật và render lại các nhánh node (subtree) một cách chọn lọc dựa trên sự thay đổi của trạng thái (state).

Mặc dù chỉ là thư viện Javascript, nhiều nhà phát triển coi ReactJS là phần **V (View)** trong mô hình kiến trúc MVC (Model-View-Controller). Với ReactJS, chúng ta xây dựng các ứng dụng trang đơn - **Single Page Application (SPA)**.

#### 1.1 Virtual DOM (Document Object Model)
Trong React, tương ứng với mỗi đối tượng DOM thực tế sẽ có một **"đối tượng Virtual DOM"** tương ứng. Đối tượng Virtual DOM là một bản đại diện (representation) nhẹ nhàng, như một bản sao rút gọn của DOM thật. Thay vì cập nhật trực tiếp lên DOM thực tế (vốn rất chậm và tốn tài nguyên), React sẽ cập nhật trên Virtual DOM trước, sau đó tính toán sự khác biệt (diffing) và chỉ cập nhật những phần thay đổi lên DOM thực tế.

#### 1.2 MVC (Model-View-Controller)
Mô hình MVC phân chia ứng dụng thành 3 thành phần chính:
*   **Model (M):** Quản lý dữ liệu, logic nghiệp vụ và các quy tắc của ứng dụng. Nhận tham số thực thi (Execution Parameters) từ Controller và trả về mảng dữ liệu kết quả (Resulting Data Arrays).
*   **View (V):** Chịu trách nhiệm hiển thị giao diện người dùng (GUI). Nhận dữ liệu từ Controller và kết xuất nội dung giao diện (GUI Content) hiển thị trên Trình duyệt (Browser).
*   **Controller (C):** Đóng vai trò trung gian điều phối. Nhận các yêu cầu HTTP (HTTP Request) từ Trình duyệt (Browser), gửi tham số thực thi đến Model, nhận lại dữ liệu từ Model để truyền cho View hiển thị, đồng thời gửi phản hồi HTTP (HTTP Response) về lại Trình duyệt.

#### 1.3 Single Page Application (SPA)
*   **Single Page App (SPA):** Chỉ tải một trang HTML duy nhất ban đầu. Khi người dùng tương tác hoặc chuyển trang, React sẽ chỉ cập nhật động các thành phần/khu vực cần thiết (ví dụ: khu vực nội dung, thông tin người dùng) mà không cần tải lại toàn bộ trang. Giúp trải nghiệm người dùng mượt mà và nhanh chóng hơn.
*   **Regular Website (Multi-Page App):** Mỗi lần chuyển trang hoặc yêu cầu dữ liệu mới, trình duyệt phải gửi yêu cầu lên server và tải lại toàn bộ trang web mới, dẫn đến hiện tượng nhấp nháy màn hình và thời gian tải lâu hơn.

#### 1.4 Who uses ReactJS?
ReactJS được sử dụng rộng rãi bởi nhiều tập đoàn công nghệ lớn trên thế giới, bao gồm:
*   Facebook
*   Instagram
*   PayPal
*   Yahoo!
*   Atlassian

---

### 2. React document
Tài liệu tham khảo và tài nguyên học tập:
*   [Trang chủ ReactJS](https://react.dev/)
*   [GitHub Repository của React](https://github.com/facebook/react/)
*   [Awesome React - Danh sách tài nguyên chọn lọc](https://github.com/enaqx/awesome-react)

---

### 3. Tools

#### 3.1 Text editors
Các trình soạn thảo mã nguồn phổ biến để lập trình React:
*   **VS Code (Visual Studio Code):** [https://code.visualstudio.com/](https://code.visualstudio.com/) (Khuyên dùng)
*   **Vim:** [http://www.vim.org/download.php](http://www.vim.org/download.php)
*   **Emacs Editor:** [https://www.gnu.org/software/emacs/](https://www.gnu.org/software/emacs/)
*   **Atom:** [https://atom.io/](https://atom.io/)
*   **Brackets:** [http://brackets.io/](http://brackets.io/)

#### 3.2 Chrome extensions
Công cụ hỗ trợ phát triển trên trình duyệt Chrome:
*   **React Developer Tools:** Tiện ích mở rộng giúp kiểm tra cấu trúc component, props, state của ứng dụng React trực tiếp trên Chrome DevTools.
*   **Chrome Developer Tools:** Bộ công cụ sẵn có của Chrome dùng để debug code, kiểm tra network, performance, v.v.

---

### 4. Why use ReactJS?
Tại sao nên chọn ReactJS thay vì các thư viện/framework khác (như Vue.js, Riot.js...)?
*   **Tốc độ và Hiệu năng tốt:** Nhờ cơ chế Virtual DOM giúp giảm thiểu tối đa việc tác động trực tiếp vào DOM thực.
*   **Component-based:** Cho phép phân chia giao diện thành các thành phần nhỏ, độc lập và có thể tái sử dụng dễ dàng.
*   **Học một lần, viết mọi nơi (Learn Once, Write Anywhere):** Có thể dùng React Native để phát triển ứng dụng di động cho cả iOS và Android.
*   **Cộng đồng lớn mạnh:** Hệ sinh thái thư viện phong phú, tài liệu dồi dào và cộng đồng lập trình viên hỗ trợ đông đảo.

---

## Phần 2. Setting Up Your React Dev Environment Easily

### 1. Meet Create React / Vite Scaffolding
Giải pháp tối ưu là thiết lập một môi trường phát triển (development environment) để quá trình chuyển đổi từ **JSX sang JS** được xử lý tự động như một phần của quá trình xây dựng ứng dụng (build process). Với giải pháp này, trình duyệt chỉ cần tải ứng dụng và xử lý tệp JavaScript đã được biên dịch hoàn chỉnh (và có thể đã được tối ưu hóa).

---

### Step 1 — Creating a Vite Project
Trong bước này, bạn sẽ khởi tạo một dự án React mới bằng công cụ CLI của Vite. Chúng ta sử dụng trình quản lý gói `yarn` để cài đặt và chạy các kịch bản.

Chạy lệnh sau trong terminal để tạo cấu trúc dự án:
```bash
yarn create vite
```
*Lưu ý: Lệnh này sẽ chạy trình thực thi Vite từ kho lưu trữ npm từ xa để cấu hình các công cụ cần thiết cho môi trường phát triển local của React.*

**Quy trình thiết lập qua giao diện dòng lệnh (CLI):**
1.  **Project name:** Nhập tên dự án của bạn (ví dụ: `digital-ocean-vite`).
2.  **Select a framework:** Chọn framework `React`.
3.  **Select a variant (Language):** Chọn ngôn ngữ lập trình mong muốn: `JavaScript` hoặc `TypeScript`.
4.  **Cài đặt dependencies:** Sau khi khởi tạo xong cấu trúc thư mục, di chuyển vào thư mục dự án và dùng Yarn để cài đặt các thư viện phụ thuộc:
    ```bash
    cd digital-ocean-vite
    yarn install
    ```

---

### Step 2 — Starting the Development Server
Khởi chạy máy chủ phát triển ở chế độ local bằng lệnh:
```bash
yarn run dev
```
*(Hoặc viết tắt: `yarn dev`)*

---

### Step 3 — Previewing Your App from Mobile Phone
Mặc định, Vite không chia sẻ ứng dụng đang phát triển ra mạng nội bộ (local network). Để có thể xem trước ứng dụng từ điện thoại di động:
1.  Nhấn `CTRL + C` trong terminal để dừng server hiện tại.
2.  Khởi chạy lại server với cờ `--host` để mở rộng phạm vi truy cập:
    ```bash
    yarn run dev --host
    ```

**Kết quả đầu ra (Output):**
```text
  VITE v4.0.4  ready in 747 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/  (Địa chỉ IP của máy tính trong mạng LAN)
  ➜  press h to show help
```
Bây giờ, bạn có thể dùng điện thoại di động kết nối chung mạng Wi-Fi và truy cập vào đường dẫn ở mục **Network** để xem trước ứng dụng.

---

### Can I use Tailwind CSS with Vite and React?
Hoàn toàn có thể. Để tích hợp Tailwind CSS vào dự án Vite + React:

1.  **Cài đặt Tailwind CSS và các công cụ hỗ trợ:**
    ```bash
    yarn add -D tailwindcss postcss autoprefixer
    ```
2.  **Khởi tạo file cấu hình:**
    ```bash
    npx tailwindcss init -p
    ```
3.  **Cấu hình file `tailwind.config.js`:**
    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

---

## Phần 3. Exploring JSX and the ReactJS Anatomy

### 1. JSX (JavaScript XML)

#### 1.1 What is JSX?
JSX (JavaScript XML) là một phần mở rộng cú pháp (syntax extension) cho JavaScript, có cấu trúc trông tương tự như XML/HTML. Nó được sử dụng để xây dựng và mô tả các thành phần giao diện người dùng (UI components) trong ReactJS.

*   **JSX Code:**
    ```jsx
    var HelloMessage = React.createClass({
      render: function() {
        return <div>Hello World</div>;
      }
    });
    ```
*   **Compile sang JavaScript thuần (qua Babel):**
    ```javascript
    var HelloMessage = React.createClass({
      displayName: "HelloMessage",
      render: function() {
        return React.createElement("div", null, "Hello World");
      }
    });
    ```

#### 1.2 Why JSX?
*   **Viết thẻ HTML trực tiếp trong JavaScript:** JSX cho phép kết hợp cấu trúc giao diện HTML và mã điều khiển logic JavaScript trong cùng một tệp, giúp mã nguồn cô đọng và dễ quản lý.
*   **Thay đổi tư duy MVC truyền thống:** Trong các ứng dụng MVC truyền thống, logic của M, V, C thường được tách riêng biệt để đảm bảo tính phân tách mối quan tâm (separation of concerns). Nhưng trong React, giao diện và logic hiển thị được liên kết chặt chẽ với nhau, do đó JSX hoạt động giống như một middleware trung gian chuyển đổi các mã đánh dấu (markup) thành các đối tượng Javascript mà React có thể xử lý và quản lý một cách tối ưu.
*   **Tăng tốc độ phát triển:** Giúp viết giao diện React nhanh hơn, dễ đọc và dễ bảo trì hơn.

#### 1.3 Tools for transforming JSX
Để biên dịch mã JSX thành JavaScript mà trình duyệt hiểu được, các công cụ biên dịch thường dùng bao gồm:
*   Babel plugin:
    ```bash
    npm i babel-plugin-transform-react-jsx
    ```
*   React tools CLI (thường dùng trong các dự án cũ):
    ```bash
    npm install -g react-tools
    ```

---

### 2. The ReactJS anatomy

#### 2.1 ReactElement
*   `ReactElement` là API cơ bản nhất của React, không có phương thức nội tại của riêng nó.
*   Có thể tạo ra đối tượng ReactElement bằng cách sử dụng hàm `React.createElement(...)`.
*   ReactElement đại diện cho Virtual DOM và khác hoàn toàn với các phần tử DOM thực tế của trình duyệt.
*   **Cấu trúc cấu thành:**
    $$\text{ReactElement} = \text{Opening Tag} + \text{Content (Text/Elements)} + \text{Closing Tag}$$
    Ví dụ: `<h1>Black Goose Bistro</h1>` gồm có thẻ mở `<h1>`, nội dung hiển thị ở giữa, và thẻ đóng `</h1>`.

#### 2.2 Rendering a component
Quá trình hiển thị component lên giao diện thực tế thông qua Virtual DOM:
```javascript
ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('container')
);
```
**Luồng xử lý (Workflow):**
$$\text{RENDER (Khởi tạo các Virtual Node)} \longrightarrow \text{VIRTUAL DOM DIFF CALC (Tính toán khác biệt)} \longrightarrow \text{DOM UPDATE (Cập nhật lên DOM thực)}$$

#### 2.3 Children components
Để truyền phần tử con hoặc văn bản vào bên trong thẻ của một component, chúng ta sử dụng `props.children`:
```javascript
function Hello(props) {
  return <div>Hello {props.name} {props.children}</div>;
}

ReactDOM.render(
  <Hello name="World"> children text </Hello>,
  document.getElementById('container')
);
```

#### 2.4 Một số quy tắc khi tạo Component
*   **Quy tắc đặt tên PascalCase:** Bắt buộc đặt tên component viết hoa chữ cái đầu (ví dụ: `HelloMessage`, `UserCard`) để phân biệt chúng với các thẻ HTML thông thường (viết thường như `div`, `span`, `p`) và các biến Javascript khác.
*   **Giới hạn số lượng thẻ gốc (Maximum number of roots):** Trong hàm `render()` hoặc câu lệnh `return` của component, bạn chỉ được phép trả về **một node gốc duy nhất**. Nếu muốn trả về một danh sách nhiều phần tử cùng cấp, bạn phải bao bọc chúng trong một thẻ bao ngoài (như `<div>`, `<span>` hoặc React Fragment `<>...</>`).
*   **Thuộc tính được hỗ trợ (Supported attributes):** Do JSX bản chất là JavaScript nên một số thuộc tính HTML bị trùng với từ khóa của JS sẽ được thay thế:
    *   Sử dụng `className` thay cho `class`.
    *   Sử dụng `htmlFor` thay cho `for`.
    *   Các thuộc tính tùy chỉnh như `data-*` và `aria-*` vẫn được ReactJS hỗ trợ đầy đủ.

---

### 3. Learning JSX and Gotchas

#### 3.1 Expressions (Biểu thức trong JSX)
Để viết hoặc thực thi các biểu thức JavaScript bên trong mã JSX, bạn cần bao bọc mã JavaScript đó bên trong cặp dấu ngoặc nhọn `{ }`.

*Ví dụ:*
```javascript
var label = '2 + 2';
var inputType = 'input';

// Sử dụng biểu thức JavaScript {} lồng ghép trong JSX
var reactNode = <label>{label} = <input type={inputType} value={2+2} /></label>;
```

#### 3.2 Properties/attributes (Thuộc tính và Props)
JSX được sử dụng để thể hiện các node có cấu trúc tương tự XML, sau đó sẽ được chuyển đổi thành mã HTML thực tế. Các thuộc tính (attributes/props) được định nghĩa bằng cách thêm chúng vào biểu thức JSX dưới dạng cặp tên-giá trị (name-value).

*   **Cấu trúc JSX với thẻ thông thường:**
    *   `<Text>`: Thẻ mở (Opening Tag)
    *   `Text`: Tên thẻ (Tag name)
    *   `Hello World!`: Nội dung thẻ (Tag body)
    *   `</Text>`: Thẻ đóng (Closing Tag)
*   **Cấu trúc JSX với thẻ tự đóng (Self Closing Tag) và truyền object vào Props:**
    ```jsx
    <Image style={{height: 100, width: 100}} source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
    ```
    *   `<Image ... />`: Thẻ tự đóng.
    *   `style`, `source`: Tên thuộc tính (Attribute Name).
    *   `{{height: 100, width: 100}}`: Giá trị thuộc tính (Attribute Value) - cặp ngoặc nhọn ngoài biểu thị biểu thức Javascript, cặp ngoặc nhọn trong đại diện cho một Javascript Object.

*Lưu ý lỗi thường gặp:*
Khi định nghĩa component, hãy đảm bảo nhận biến `props` làm tham số của hàm, nếu không việc sử dụng `{props.name}` bên trong sẽ báo lỗi chưa định nghĩa.
```javascript
// ĐÚNG:
function Hello(props) {
  return <div>Hello {props.name}</div>;
}
```

#### 3.3 Transferring properties (Truyền thuộc tính xuống Component con)
Trong React, dữ liệu/thuộc tính được truyền một chiều từ component cha xuống các component con (Prop Drilling).

*Ví dụ về cấu trúc truyền thuộc tính liên tiếp:*
$$\text{Shirt} \longrightarrow \text{Label} \longrightarrow \text{Display}$$

```javascript
function Display(props) {
  return (
    <div>
      <p>{props.color}</p>
      <p>{props.num}</p>
      <p>{props.size}</p>
    </div>
  );
}

function Label(props) {
  return (
    <Display 
      color={props.color}
      num={props.num}
      size={props.size} 
    />
  );
}

function Shirt(props) {
  return (
    <div>
      <Label
        color={props.color}
        num={props.num}
        size={props.size} 
      />
    </div>
  );
}

ReactDOM.render(
  <div>
    <Shirt color="steelblue" num="3.14" size="medium" />
  </div>,
  document.querySelector("#container")
);
```
*Giải thích:* Component `Shirt` nhận các giá trị từ lệnh render ban đầu, sau đó truyền tiếp sang `Label`, và `Label` tiếp tục chuyển tiếp các thuộc tính này cho `Display` để render ra HTML hiển thị cuối cùng.

#### 3.4 Other Gotchas (Các lưu ý khác)

*   **Tính bất biến của Props (Mutating properties):**
    Props trong React là **chỉ đọc (read-only / immutable)**. Không được phép thay đổi giá trị của props trực tiếp sau khi component đã được khởi tạo:
    ```javascript
    // SAI - Sẽ báo lỗi:
    var component = <HelloMessage />
    component.props.name = 'Testing' 
    ```
*   **Comments trong JSX:**
    Để viết chú thích (comments) trong JSX, chú thích phải được bao bọc trong cặp ngoặc nhọn `{ }` và sử dụng cú pháp chú thích nhiều dòng của JavaScript:
    ```jsx
    {/* đây là đoạn chú thích trong JSX */}
    ```
*   **Css classes:**
    Luôn sử dụng `className` thay thế cho thuộc tính `class` truyền thống của HTML khi viết JSX:
    ```jsx
    <button className="btn btn-over"></button>
    ```

---

## Phần 4. Component and Properties

### 1. Component

#### 1.1 What is a component?
Component (Thành phần) cho phép bạn phân chia giao diện người dùng (UI) thành các phần độc lập, có thể tái sử dụng và giúp bạn quản lý/tư duy về từng phần giao diện đó một cách biệt lập.

#### 1.2 Type of component (Các loại Component)
Trong React, có 2 cách chính để định nghĩa một component:

*   **Functional Components (Component dạng hàm):**
    Đây là một hàm JavaScript nhận vào một đối tượng đối số chứa dữ liệu duy nhất là `props` (viết tắt của properties) và trả về một phần tử React. Cách này cô đọng và dễ viết:
    ```javascript
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    ```
*   **Class Components (Component dạng lớp):**
    Sử dụng lớp ES6 để định nghĩa một component. Lớp này kế thừa từ `React.Component`:
    ```javascript
    class Welcome extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }
    ```
    *Lưu ý: Class components cung cấp thêm một số tính năng bổ sung (như state và các phương thức vòng đời lifecycle). Tuy nhiên, hiện tại functional components được khuyến khích sử dụng hơn vì tính ngắn gọn.*

#### 1.3 Rendering a Component
React element không chỉ đại diện cho các thẻ DOM HTML thông thường (như `<div />`) mà còn có thể đại diện cho các component do người dùng tự định nghĩa:
```javascript
const element = <Welcome name="Sara" />;
```
Khi React thấy một phần tử đại diện cho component do người dùng định nghĩa, nó sẽ chuyển các thuộc tính viết trong JSX sang component đó dưới dạng một đối tượng duy nhất được gọi là **`props`**.

**Ví dụ hiển thị Component:**
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

**Tóm tắt luồng xử lý trong ví dụ trên:**
1.  Gọi `ReactDOM.render()` với phần tử `<Welcome name="Sara" />`.
2.  React gọi component `Welcome` với đối tượng props là `{name: 'Sara'}`.
3.  Component `Welcome` trả về một phần tử `<h1>Hello, Sara</h1>` làm kết quả.
4.  React DOM cập nhật DOM của trình duyệt một cách hiệu quả để khớp với `<h1>Hello, Sara</h1>`.

*Chú ý đặc biệt:*
Luôn bắt đầu tên của Component bằng chữ cái viết hoa (PascalCase). React coi các component bắt đầu bằng chữ thường là các thẻ DOM HTML tiêu chuẩn. Ví dụ: `<div />` là một thẻ HTML div, nhưng `<Welcome />` là một component tự định nghĩa.

---

### 2. Component properties (Props)

#### 2.1 Properties (props) là gì?
*   Hầu hết các component có thể tùy biến với các tham số khác nhau khi được khởi tạo. Những tham số khởi tạo này được gọi là **props**.
*   Các thuộc tính (properties/props) của một React component **không thể thay đổi (immutable)** một khi component đã được render lên DOM.

**Luồng dữ liệu (Data flow):**
Dữ liệu được truyền từ trên xuống theo cấu trúc cây (từ cha xuống con, cháu...):
*   Component gốc truyền `color="purple" size="large"` xuống component con.
*   Component con nhận lại qua `this.props.color` và `this.props.size` để hiển thị hoặc tiếp tục truyền xuống các component nhánh thấp hơn.

$$\text{Parent (chứa data)} \longrightarrow \text{Child (nhận props)} \longrightarrow \text{Grandchild}$$

Một trong những nguyên tắc cơ bản và thực hành tốt nhất (best practices) của ReactJS là truyền dữ liệu xuống các component lồng nhau thông qua thuộc tính (**Props**), tạo nên luồng dữ liệu một chiều rõ ràng (One-way data flow).

**Ví dụ thực tế về truyền dữ liệu (Data flow):**
Dưới đây là mã nguồn để xây dựng giao diện hiển thị thông tin người dùng phân tách theo màu sắc (Xanh lá cây cho thông tin cơ bản, Xanh dương cho thông tin bổ sung):

```javascript
import React from 'react';

// Component hiển thị thông tin cơ bản (Màu xanh lá)
function UserInfo(props) {
  return (
    <div style={{ backgroundColor: 'green', color: 'white', padding: '10px', marginBottom: '10px' }}>
      <div>Name: {props.name}</div>
      <div>Email: {props.email}</div>
    </div>
  );
}

// Component hiển thị thông tin bổ sung (Màu xanh dương)
function OtherInfo(props) {
  return (
    <div style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>
      <div>Other Information: {props.info}</div>
    </div>
  );
}

// Component cha quản lý dữ liệu và phân phối xuống các component con
function App() {
  const user = {
    name: "Anna",
    email: "anna123@gmail.com",
    otherInfo: "She like to work at home"
  };

  return (
    <div>
      <UserInfo name={user.name} email={user.email} />
      <OtherInfo info={user.otherInfo} />
    </div>
  );
}

export default App;
```

---

### 3. Rendering data in a ReactJS component (Hiển thị dữ liệu danh sách)

Để hiển thị một danh sách dữ liệu động (mảng/array) trong React, lập trình viên thường dùng phương thức `.map()` của JavaScript để lặp qua mảng dữ liệu và trả về một danh sách các React Elements.

**Ví dụ hiển thị danh sách trang cá nhân yêu thích (Facebook User's list of likes):**

```javascript
import React from 'react';

// Component con hiển thị từng thẻ sở thích
function LikeItem(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      display: 'flex',
      width: '45%',
      margin: '10px',
      backgroundColor: '#a0c4ff',
      padding: '10px'
    }}>
      <img 
        src={props.image} 
        alt={props.name} 
        style={{ width: '80px', height: '80px', marginRight: '10px', objectFit: 'cover' }} 
      />
      <div>
        <h4 style={{ margin: '0 0 5px 0', color: '#03045e' }}>{props.name}</h4>
        <span style={{ color: '#d90429', fontSize: '14px' }}>{props.category}</span>
      </div>
    </div>
  );
}

// Component cha hiển thị toàn bộ trang danh sách
function FacebookLikes() {
  const likesData = [
    { id: 1, name: "Astronomy", category: "Field of study", image: "path_to_astronomy_img.jpg" },
    { id: 2, name: "Richard Dawkins", category: "Author", image: "path_to_dawkins_img.jpg" },
    { id: 3, name: "Neil deGrasse Tyson", category: "Public figure", image: "path_to_tyson_img.jpg" },
    { id: 4, name: "Carl Sagan", category: "Public figure", image: "path_to_sagan_img.jpg" }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#588157' }}>Facebook User's list of likes</h2>
      <div style={{ marginBottom: '15px' }}>
        <a href="#user">Danillo Corvalan</a> | <a href="#logout">Logout</a>
      </div>
      
      {/* Lặp qua mảng dữ liệu để render danh sách */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {likesData.map((item) => (
          <LikeItem 
            key={item.id} 
            name={item.name} 
            category={item.category} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  );
}

export default FacebookLikes;
```

**Lưu ý quan trọng khi hiển thị danh sách (Gotcha - Cờ `key`):**
*   Khi render một danh sách các phần tử bằng vòng lặp, React yêu cầu mỗi phần tử con phải có một thuộc tính **`key`** duy nhất (thường sử dụng `id` của dữ liệu).
*   Thuộc tính `key` giúp React xác định phần tử nào đã thay đổi, được thêm vào hoặc bị xóa, từ đó tối ưu hóa quá trình cập nhật Virtual DOM và tăng tốc độ hiển thị giao diện.

---

## Phần 5. Styling in React

### 1. Displaying Some Vowels (Ví dụ hiển thị các nguyên âm)

Giả sử ta cần hiển thị danh sách các nguyên âm: A, E, I, O, U dưới dạng các thẻ độc lập.

**Mã nguồn React ban đầu:**
```javascript
function Letter({ children }) {
  return <div>{children}</div>;
}

ReactDOM.render(
  <div>
    <Letter>A</Letter>
    <Letter>E</Letter>
    <Letter>I</Letter>
    <Letter>O</Letter>
    <Letter>U</Letter>
  </div>,
  document.getElementById('container')
);
```
*Mặc định, các thẻ `div` này sẽ xếp chồng lên nhau theo chiều dọc.*

---

### 2. Styling React Content Using CSS (Sử dụng CSS truyền thống)

Việc sử dụng CSS để tạo kiểu cho các thành phần trong React cực kỳ đơn giản và trực quan. Do React cuối cùng sẽ xuất ra các thẻ HTML thông thường, tất cả các kỹ thuật và bộ chọn CSS bạn từng sử dụng vẫn áp dụng hoàn hảo. Bạn chỉ cần lưu ý sử dụng thuộc tính **`className`** thay cho `class` trong JSX.

---

### 3. Understand the Generated HTML (Hiểu cấu trúc HTML được tạo ra)

Khi ứng dụng chạy, React DOM sẽ biên dịch mã JSX và chèn cấu trúc HTML thực tế vào cây DOM của trình duyệt:

```html
<div id="container">
  <div>
    <div>A</div>
    <div>E</div>
    <div>I</div>
    <div>O</div>
    <div>U</div>
  </div>
</div>
```

---

### 4. Just Style It Already! (Áp dụng CSS)

Để định dạng các nguyên âm thành các ô màu vàng, hiển thị theo hàng ngang, ta có 2 cách tiếp cận bằng CSS:

#### Cách 1: Sử dụng bộ chọn CSS Selector lồng nhau
Nhắm mục tiêu trực tiếp vào các thẻ `div` con nằm sâu 3 cấp:
```css
div div div {
  padding: 10px;
  margin: 10px;
  background-color: #FFDE00;
  color: #333;
  display: inline-block;
  font-family: monospace;
  font-size: 32px;
  text-align: center;
}
```

#### Cách 2: Sử dụng className (Khuyên dùng)
Gán class cụ thể cho thẻ inner div của component để mã nguồn rõ ràng và dễ bảo trì:

*   **React component:**
    ```javascript
    function Letter({ children }) {
      return <div className="letter">{children}</div>;
    }
    ```
*   **CSS file:**
    ```css
    .letter {
      padding: 10px;
      margin: 10px;
      background-color: #FFDE00;
      color: #333;
      display: inline-block;
      font-family: monospace;
      font-size: 32px;
      text-align: center;
    }
    ```

---

### 5. Styling Content the React Way (Tạo kiểu theo cách của React - Inline Styles)

React ưu tiên một phương pháp tạo kiểu kiểu **inline style** sử dụng các thuộc tính là đối tượng JavaScript thay vì các tệp CSS truyền thống.

*   **Tại sao lại chọn Inline Styles?**
    Mặc dù ban đầu có vẻ lạ lẫm, cách tiếp cận này được thiết kế để tăng tính tái sử dụng của các thành phần giao diện. Mục tiêu là biến mỗi component thành một **"hộp đen" tự chứa (little black box)** - nơi lưu trữ toàn bộ cấu trúc giao diện, logic xử lý và cả định dạng CSS của chính component đó.

*   **Cú pháp Inline Styles trong React:**
    ```javascript
    function Letter({ children }) {
      const letterStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: "#FFDE00",
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: 32,
        textAlign: "center"
      };

      return <div style={letterStyle}>{children}</div>;
    }
    ```

**Quy tắc chuyển đổi thuộc tính CSS sang Style Object trong JavaScript:**
1.  **Các thuộc tính từ đơn (Single-word):** (như `padding`, `margin`, `color`) giữ nguyên không thay đổi.
2.  **Các thuộc tính nhiều từ có dấu gạch ngang (Multiword with dashes):** (như `background-color`, `font-family`, `border-radius`) được chuyển đổi thành cú pháp **camelCase** (loại bỏ dấu gạch ngang và viết hoa chữ cái đầu của từ tiếp theo, ví dụ: `backgroundColor`, `fontFamily`, `borderRadius`).

---

### 6. Actually Styling Our Content (Tạo kiểu động bằng cách sử dụng Props)

Để làm cho giao diện sinh động hơn, chúng ta có thể truyền thuộc tính màu nền khác nhau cho từng chữ cái từ bên ngoài thay vì gán cứng màu nền `#FFDE00`.

**Bước 1: Truyền thuộc tính `bgcolor` vào component**
```javascript
ReactDOM.render(
  <div>
    <Letter bgcolor="#58B3FF">A</Letter>
    <Letter bgcolor="#FF605F">E</Letter>
    <Letter bgcolor="#FFD52E">I</Letter>
    <Letter bgcolor="#49DD8E">O</Letter>
    <Letter bgcolor="#AE99FF">U</Letter>
  </div>,
  document.getElementById('container')
);
```

**Bước 2: Đọc và áp dụng thuộc tính động trong Style Object**
Trong component `Letter`, gán giá trị của `backgroundColor` tương ứng với thuộc tính `bgcolor` nhận được từ props:

*   **Sử dụng Functional Component (Khuyên dùng):**
    ```javascript
    function Letter({ children, bgcolor }) {
      const letterStyle = {
        padding: 10,
        margin: 10,
        backgroundColor: bgcolor, // Lấy giá trị động từ props
        color: "#333",
        display: "inline-block",
        fontFamily: "monospace",
        fontSize: 32,
        textAlign: "center"
      };

      return <div style={letterStyle}>{children}</div>;
    }
    ```
*   **Sử dụng Class Component:**
    ```javascript
    class Letter extends React.Component {
      render() {
        const letterStyle = {
          padding: 10,
          margin: 10,
          backgroundColor: this.props.bgcolor, // Sử dụng this.props trong class
          color: "#333",
          display: "inline-block",
          fontFamily: "monospace",
          fontSize: 32,
          textAlign: "center"
        };
        
        return <div style={letterStyle}>{this.props.children}</div>;
      }
    }
    ```

---

## Phần 6. State & Event

### 1. ReactJS States

#### 1.1 Properties versus States (Props vs State)
*   **Props (Properties):** Được khai báo và truyền vào khi React component được khởi tạo từ bên ngoài.
    *   `props` là chỉ đọc (read-only).
    *   `props` không thể bị thay đổi bởi bản thân component nhận nó.
*   **State:** Được khai báo và quản lý hoàn toàn bên trong định nghĩa của chính component đó.
    *   Sự thay đổi của `state` có thể xảy ra bất đồng bộ (asynchronous).
    *   `state` có thể sửa đổi bằng cách sử dụng `this.setState` (trong Class Component) hoặc hàm cập nhật trạng thái của Hook `useState` (trong Functional Component).

#### 1.2 Adding a state variable (Khai báo biến trạng thái)
Để khai báo biến trạng thái trong Functional Component, chúng ta sử dụng Hook `useState` bằng cách import ở đầu tệp:
```javascript
import { useState } from 'react';

const [index, setIndex] = useState(0);
```
*Lưu ý:* Cú pháp `[ index, setIndex ]` được gọi là **array destructuring** (phân rã mảng), cho phép đọc các phần tử từ mảng. Mảng do `useState` trả về luôn chứa đúng 2 phần tử:
1.  **Biến trạng thái** (ví dụ: `index`): lưu trữ giá trị hiện tại.
2.  **Hàm cập nhật** (ví dụ: `setIndex`): dùng để gán giá trị mới cho trạng thái và kích hoạt quá trình render lại giao diện.

**Cách hoạt động cùng nhau trong hàm xử lý sự kiện:**
```javascript
function handleClick() {
  setIndex(index + 1); // Cập nhật trạng thái tăng thêm 1
}
```

---

### 2. Render and Commit (Chu trình Yêu cầu và Phục vụ UI)

React xử lý việc hiển thị giao diện qua quy trình 3 bước tương tự như hoạt động trong một nhà hàng:
*   **Components = Đầu bếp:** Chuẩn bị các món ăn ngon (giao diện UI) từ nguyên liệu (props, state).
*   **React = Nhân viên phục vụ:** Nhận order từ khách hàng và mang món ăn đến cho họ.

**Quy trình 3 bước hiển thị UI:**
1.  **Triggering a render (Gửi order vào bếp):** Khi có sự thay đổi trạng thái (state) hoặc khởi tạo ban đầu, React sẽ kích hoạt yêu cầu render.
2.  **Rendering the component (Chuẩn bị món ăn trong bếp):** React gọi component để tính toán giao diện JSX mới.
3.  **Committing to the DOM (Đặt món ăn lên bàn):** React cập nhật các thay đổi lên DOM thực tế của trình duyệt một cách tối ưu.

$$\text{Trigger (Kích hoạt)} \longrightarrow \text{Render (Tạo JSX)} \longrightarrow \text{Commit (Cập nhật DOM)}$$

---

### 3. State as a Snapshot (Trạng thái như một bức ảnh chụp nhanh)

State trong React không hoạt động giống như các biến JavaScript thông thường. Nó hoạt động như một **Snapshot** (ảnh chụp nhanh) tại một thời điểm render cụ thể.

Khi React render lại một component:
1.  React gọi lại hàm component của bạn.
2.  Hàm component tính toán và trả về một **JSX snapshot** mới (tất cả các props, event handlers và giá trị được tính toán dựa trên trạng thái tại lượt render đó).
3.  React cập nhật màn hình để khớp với snapshot mà hàm vừa trả về.

$$\text{React thực thi component} \longrightarrow \text{Tính toán Snapshot mới} \longrightarrow \text{Cập nhật cây DOM}$$

**Luồng cập nhật trạng thái chi tiết:**
1.  Bạn yêu cầu React cập nhật trạng thái (ví dụ: gọi `setIndex(index + 1)`).
2.  React ghi nhận và cập nhật giá trị trạng thái mới trong bộ nhớ.
3.  React truyền một snapshot của giá trị trạng thái mới đó vào component để render lại giao diện tương ứng.

#### 3.2 Queueing a Series of State Updates (Đưa các bản cập nhật trạng thái vào hàng đợi - Batching)
React đợi cho đến khi tất cả mã nguồn trong trình xử lý sự kiện (event handlers) chạy xong trước khi bắt đầu xử lý các cập nhật trạng thái của bạn.

*Ẩn dụ về Nhân viên phục vụ:*
Nhân viên phục vụ tại nhà hàng sẽ không chạy thẳng vào bếp ngay khi bạn gọi món đầu tiên! Thay vào đó, họ sẽ đợi bạn gọi xong toàn bộ các món, cho phép bạn thay đổi món ăn và thậm chí nhận order từ những người khác cùng bàn, sau đó mới vào bếp một lượt. Quá trình này giúp tối ưu hóa số lần render lại giao diện (được gọi là **State Batching**).

*Cập nhật cùng một trạng thái nhiều lần trước lần render tiếp theo:*
Để cập nhật trạng thái liên tiếp nhiều lần dựa trên giá trị trước đó trong cùng một sự kiện, chúng ta sử dụng **hàm cập nhật (updater function)** thay vì truyền giá trị trực tiếp:
```javascript
setNumber(n => n + 1);
setNumber(n => n + 1);
setNumber(n => n + 1);
```
Trong quá trình xử lý sự kiện:
1.  `setNumber(n => n + 1)`: Nhận hàm `n => n + 1` và đẩy vào hàng đợi của React.
2.  `setNumber(n => n + 1)`: Tiếp tục đẩy hàm vào hàng đợi.
3.  `setNumber(n => n + 1)`: Tiếp tục đẩy hàm vào hàng đợi.

Khi render tiếp theo, React sẽ duyệt qua hàng đợi và tính toán tuần tự để đưa ra trạng thái cập nhật cuối cùng (nếu giá trị ban đầu là `0`, kết quả sau 3 lần gọi sẽ là `3`).

---

### 4. Updating Objects in State (Cập nhật đối tượng trong State)

State có thể lưu trữ bất kỳ loại giá trị JavaScript nào, kể cả đối tượng (Object). Tuy nhiên, bạn **không bao giờ được phép thay đổi trực tiếp đối tượng** đang được lưu trữ trong React state:

*   **Tránh làm thay đổi trực tiếp (Mutation):**
    ```javascript
    // KHÔNG NÊN: Làm thay đổi trực tiếp đối tượng state cũ
    person.firstName = 'John'; 
    ```
*   **Hãy tạo ra đối tượng mới bằng cú pháp spread (`...`):**
    Bản chất là sao chép các trường dữ liệu cũ và chỉ ghi đè lên các trường cần cập nhật:
    ```javascript
    setPerson({
      ...person, // Sao chép tất cả các thuộc tính cũ
      firstName: e.target.value // Chỉ cập nhật/ghi đè trường firstName
    });
    ```

---

### 5. Updating Arrays in State (Cập nhật mảng trong State)

Mặc dù mảng (Array) trong JavaScript có thể thay đổi được (mutable), bạn cần phải coi chúng là **bất biến (immutable)** khi lưu trữ trong React state. Giống như đối tượng, khi cập nhật mảng, hãy tạo một bản sao mới thay vì chỉnh sửa trực tiếp trên mảng cũ.

**Bảng hướng dẫn thao tác với mảng trong State:**

| Thao tác | Tránh sử dụng (Làm thay đổi mảng gốc) | Nên sử dụng (Trả về mảng mới) |
| :--- | :--- | :--- |
| **Thêm phần tử** | `push`, `unshift` | `concat`, cú pháp spread `[...arr]` |
| **Xóa phần tử** | `pop`, `shift`, `splice` | `filter`, `slice` |
| **Thay thế/Sửa đổi** | `splice`, phép gán trực tiếp `arr[i] = ...` | `map` |
| **Sắp xếp/Đảo ngược** | `reverse`, `sort` | Sao chép mảng trước rồi mới sắp xếp: `[...arr].sort()` |

---

### 6. Example: Change Input App (Ứng dụng Thay đổi Ô Input)

Dưới đây là một ví dụ thực tế kết hợp sử dụng State và Props để xử lý sự kiện thay đổi dữ liệu từ ô nhập liệu (`input`):

```javascript
import React, { useState } from 'react';

function ChangeInputApp() {
  // Khai báo state lưu trữ giá trị ô input
  const [text, setText] = useState('abc');

  // Hàm xử lý sự kiện khi người dùng gõ phím
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Welcome to the change input app!</h1>
      
      {/* Ô input có kiểm soát (Controlled Component) */}
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        style={{ padding: '5px', width: '200px', fontSize: '16px' }}
      />
      
      <p style={{ marginTop: '15px', fontWeight: 'bold', fontSize: '18px' }}>
        Value input: {text}
      </p>
    </div>
  );
}

export default ChangeInputApp;
```

---

### 2. Event Ecosystem (Hệ sinh thái sự kiện trong React)

#### 2.1 Events trong React
Các trình xử lý sự kiện (event handlers) trong React sẽ được truyền các phiên bản của **`SyntheticEvent`**. Đây là một đối tượng bao bọc (wrapper) đa trình duyệt xung quanh sự kiện gốc của trình duyệt (native event).

*   `SyntheticEvent` có cùng giao diện (interface) giống như sự kiện gốc của trình duyệt bao gồm cả `stopPropagation()` và `preventDefault()`.
*   Giúp các sự kiện hoạt động đồng nhất trên tất cả các trình duyệt khác nhau.

**Một số sự kiện phổ biến:**
*   **Form events:** `onChange`, `onInput`, `onSubmit`.
*   **Mouse events:**
    *   `onClick`, `onContextMenu`, `onDoubleClick`.
    *   `onDrag`, `onDragEnd`, `onDragEnter`, `onDragExit`, `onDragLeave`, `onDragOver`, `onDragStart`, `onDrop`.
    *   `onMouseDown`, `onMouseEnter`, `onMouseLeave`, `onMouseMove`, `onMouseOut`, `onMouseOver`, `onMouseUp`.

#### 2.2 SyntheticEvent Interface
Bảng danh sách các thuộc tính và phương thức có trong một đối tượng `SyntheticEvent`:

1.  `bubbles` (boolean)
2.  `cancelable` (boolean)
3.  `currentTarget` (DOMEventTarget)
4.  `defaultPrevented` (boolean)
5.  `eventPhase` (number)
6.  `isTrusted` (boolean)
7.  `nativeEvent` (DOMEvent)
8.  `preventDefault()` (void)
9.  `isDefaultPrevented()` (boolean)
10. `stopPropagation()` (void)
11. `isPropagationStopped()` (boolean)
12. `target` (DOMEventTarget)
13. `timeStamp` (number)
14. `type` (string)

#### 2.3 Event Pooling (Tối ưu hóa tài nguyên sự kiện)
*(Lưu ý: Đây là cơ chế tối ưu hóa bộ nhớ trong các phiên bản React cũ trước phiên bản 17)*

Trong React, các đối tượng `SyntheticEvent` được **đưa vào một bể chứa (pooled)** để tái sử dụng:
*   Sau khi hàm callback xử lý sự kiện thực thi xong, tất cả các thuộc tính của đối tượng `SyntheticEvent` sẽ bị **gán về `null`** để giải phóng bộ nhớ.
*   Do đó, bạn không thể truy cập các thuộc tính của sự kiện một cách bất đồng bộ (ví dụ: bên trong hàm `setTimeout` hoặc tiến trình bất đồng bộ).
*   Nếu muốn giữ lại tham chiếu sự kiện để truy cập bất đồng bộ, bạn phải gọi phương thức **`event.persist()`** ở đầu hàm xử lý để đưa sự kiện ra khỏi pool.

**Ví dụ thực tế minh họa cơ chế Event Pooling:**

```javascript
import React, { useState } from 'react';

function ClickComponent() {
  const [eventType, setEventType] = useState('');

  const handleClick = (event) => {
    console.log(event); // => Trả về đối tượng đã bị nullified nếu xem sau
    console.log(event.type); // => "click"
    
    const eventTypeTemp = event.type; // => Lưu lại giá trị tức thời của type

    // Thử truy cập bất đồng bộ
    setTimeout(() => {
      // LỖI: event.type lúc này sẽ trả về null do đối tượng đã bị React dọn dẹp
      console.log("Async event.type:", event.type); 
      
      // ĐÚNG: Truy cập thông qua biến tạm đã lưu trước đó
      console.log("Async eventTypeTemp:", eventTypeTemp); 
    }, 100);

    setEventType(eventTypeTemp); // Thực hiện cập nhật state bình thường
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <button onClick={handleClick}>Click me</button>
      <p>Last event type: {eventType}</p>
    </div>
  );
}

export default ClickComponent;
```

---

#### 2.4 Handler events (Quy trình xử lý sự kiện trong Form)

React quản lý việc thay đổi dữ liệu của các phần tử nhập liệu thông qua cơ chế **Controlled Component** (Thành phần có kiểm soát) theo chu trình khép kín sau:

$$\text{1. User gõ ký tự} \longrightarrow \text{2. Trình duyệt kích hoạt Event (lấy event.target.value)} \longrightarrow \text{3. Cập nhật State (value=\{input\})} \longrightarrow \text{4. Changed view (Giao diện hiển thị thay đổi)}$$

**Mã nguồn ví dụ về Controlled Input:**

```javascript
const { useState } = React;

function App() {
  const [input, setInput] = useState('');

  // Hàm cập nhật state dựa trên sự kiện onChange
  function formUpdate(event) {
    setInput(event.target.value);
  }

  return (
    <div className="form-group container">
      <label>Controlled Form Input</label>
      <input
        type="text"
        className="form-control"
        placeholder="Update input here"
        value={input}
        onChange={formUpdate}
      />
      {/* Hiển thị giá trị input lập tức ra màn hình */}
      <span className="form-text text-muted" style={{ display: 'block', marginTop: '10px' }}>
        {input}
      </span>
    </div>
  );
}

const destination = document.querySelector("#container");
ReactDOM.render(<App />, destination);
```

---

#### 2.5 Example: React Form Tutorial (Biểu mẫu hiển thị họ tên đầy đủ)

Ví dụ thực tế xây dựng biểu mẫu nhập họ tên và hiển thị họ tên đầy đủ sau khi nhấn nút gửi (**Submit**):

```javascript
import React, { useState } from 'react';

function ReactFormTutorial() {
  const [firstName, setFirstName] = useState('Roy');
  const [lastName, setLastName] = useState('Agasthyan');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn hành vi gửi form và tải lại trang mặc định
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', border: '1px solid #ccc', maxWidth: '400px' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>TutsPlus - React Form Tutorial</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '90px' }}>First Name:</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            style={{ padding: '4px', fontSize: '14px' }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'inline-block', width: '90px' }}>Last Name:</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            style={{ padding: '4px', fontSize: '14px' }}
          />
        </div>
        
        <button type="submit" style={{ padding: '5px 15px', cursor: 'pointer' }}>Submit</button>
      </form>

      {fullName && (
        <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
          <h3 style={{ fontSize: '16px', margin: '0 0 10px 0' }}>Your full name is</h3>
          <p style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>{fullName}</p>
        </div>
      )}
    </div>
  );
}

export default ReactFormTutorial;
```

---

## Phần 7. Side Effects (Các tác vụ phụ lẻ ngoài luồng)

### 1. Synchronizing with Effects (Đồng bộ hóa với Effects)

Một số component cần phải đồng bộ hóa (synchronize) với các hệ thống bên ngoài React.
*Ví dụ:*
*   Điều khiển một component không thuộc React dựa trên trạng thái của React.
*   Thiết lập kết nối máy chủ (server connection).
*   Gửi log phân tích (analytics log) khi một component xuất hiện trên màn hình.

**Effects** cho phép bạn thực thi mã nguồn sau khi quá trình render hoàn tất, giúp bạn đồng bộ hóa component của mình với một hệ thống nào đó nằm ngoài luồng quản lý của React.

---

### 2. How to write an Effect (Cách viết một Effect)

Để viết một Effect, thực hiện theo quy trình 3 bước sau:

1.  **Declare an Effect (Khai báo Effect):** Theo mặc định, Effect của bạn sẽ chạy sau mỗi lần hoàn thành render (commit).
2.  **Specify the Effect dependencies (Chỉ định mảng phụ thuộc):** Hầu hết các Effect chỉ nên chạy lại *khi thực sự cần thiết* thay vì chạy sau mọi lần render. Ví dụ: hoạt ảnh fade-in chỉ nên kích hoạt khi component xuất hiện; kết nối/ngắt kết nối phòng chat chỉ xảy ra khi component xuất hiện/biến mất hoặc phòng chat thay đổi. Bạn kiểm soát điều này thông qua việc chỉ định các *dependencies*.
3.  **Add cleanup if needed (Thêm hàm dọn dẹp nếu cần):** Một số Effect cần chỉ định cách dừng, hoàn tác hoặc dọn dẹp các tác vụ đang làm. Ví dụ: "connect" cần "disconnect", "subscribe" cần "unsubscribe", và "fetch" cần "cancel" hoặc "ignore". Thực hiện bằng cách trả về một **cleanup function** bên trong Effect.

---

### 3. Chi tiết các bước viết Effect

#### Step 1: Declare an Effect (Khai báo Effect)
Để khai báo một Effect trong component, trước tiên hãy import Hook `useEffect` từ React:
```javascript
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Mã nguồn ở đây sẽ chạy sau *mỗi* lượt render của component
  });
  
  return <div />;
}
```

#### Step 2: Specify the Effect dependencies (Chỉ định dependencies)
Mặc định, Effects chạy sau mỗi lần render. Tuy nhiên, trong nhiều trường hợp, điều này không tối ưu:
*   *Làm chậm ứng dụng:* Việc đồng bộ với hệ thống bên ngoài không phải lúc nào cũng nhanh (ví dụ: không muốn kết nối lại server chat sau mỗi phím gõ của người dùng).
*   *Sai logic:* Không muốn kích hoạt hoạt ảnh fade-in của component sau mỗi lần gõ phím, hoạt ảnh này chỉ nên chạy duy nhất một lần khi component xuất hiện lần đầu.

**Cách bỏ qua việc chạy lại Effect không cần thiết:**
Truyền một mảng phụ thuộc (dependency array) làm đối số thứ hai cho hàm `useEffect`.

*   **Chạy duy nhất một lần khi component Mount:**
    Truyền một mảng rỗng `[]`:
    ```javascript
    useEffect(() => {
      // Chỉ chạy 1 lần khi component xuất hiện (mount)
    }, []); 
    ```
*   **Chạy lại khi biến phụ thuộc thay đổi:**
    Nếu mã nguồn bên trong Effect phụ thuộc vào một prop hoặc state cụ thể (ví dụ: `isPlaying`), bạn bắt buộc phải khai báo nó trong mảng phụ thuộc:
    ```javascript
    useEffect(() => {
      if (isPlaying) {
        // Tác vụ được thực thi ở đây...
      } else {
        // ...
      }
    }, [isPlaying]); // Bắt buộc phải khai báo biến phụ thuộc ở đây!
    ```

#### Step 3: Add cleanup if needed (Thêm hàm dọn dẹp bộ nhớ)
Nếu Effect của bạn đăng ký một dịch vụ hoặc sự kiện (subscribe), hàm dọn dẹp (cleanup function) có nhiệm vụ hủy đăng ký đó (unsubscribe) khi component bị hủy (unmount) hoặc trước khi chạy Effect lượt tiếp theo.

**Ví dụ về hàm cleanup lắng nghe sự kiện cuộn trang (scroll):**
```javascript
useEffect(() => {
  function handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }
  
  // Đăng ký sự kiện
  window.addEventListener('scroll', handleScroll);
  
  // Trả về hàm dọn dẹp để hủy đăng ký sự kiện
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```
*Lưu ý ở môi trường Development:*
Trong môi trường phát triển (Development), React (Strict Mode) sẽ gọi `addEventListener()`, sau đó gọi ngay lập tức `removeEventListener()`, và cuối cùng gọi lại `addEventListener()` một lần nữa với cùng trình xử lý. Cơ chế này giúp đảm bảo chỉ có duy nhất một subscription hoạt động tại một thời điểm, giúp phát hiện sớm các lỗi rò rỉ bộ nhớ (memory leaks). Hành vi hiển thị tới người dùng hoàn toàn tương tự như khi chạy thực tế (Production).

---

### 4. Other ES (ECMAScript) versions in React

### 1. ECMAScript là gì?
ECMAScript (hay viết tắt là **ES**) là một đặc tả ngôn ngữ kịch bản (scripting-language specification) được đăng ký thương hiệu và tiêu chuẩn hóa bởi tổ chức Ecma International trong tài liệu **ECMA-262** và ISO/IEC 16262. Nó được tạo ra nhằm mục đích tiêu chuẩn hóa ngôn ngữ JavaScript, tạo nền tảng cho nhiều triển khai độc lập tương thích với nhau.

**Lịch sử phát triển của ECMAScript (ES):**
*   **1997:** ES1
*   **1998:** ES2
*   **1999:** ES3
*   **2009:** ES5
*   **2015:** ES6 (Cột mốc quan trọng mang lại nhiều cải tiến lớn giúp lập trình React dễ dàng hơn).

---

### 2. Các tính năng nổi bật của ES6 được ứng dụng nhiều trong React

1.  **Block-Scoped Constructs (Khai báo biến phạm vi khối):** `let` và `const` giúp thay thế cho cách dùng `var` cũ, kiểm soát tốt phạm vi biến.
2.  **Arrow Functions (Hàm mũi tên):** Cú pháp viết hàm ngắn gọn `() => {}`, tự động kế thừa ngữ cảnh `this` từ phạm vi cha.
3.  **Rest Parameters / Spread Operator (Tham số còn lại và toán tử rải):** Sử dụng ký hiệu ba chấm `...` giúp sao chép/gom mảng và đối tượng tiện lợi.
4.  **Destructuring Assignment (Phép gán phân rã):** Giúp trích xuất dữ liệu từ mảng hoặc thuộc tính của đối tượng một cách ngắn gọn (ví dụ: `const { name, age } = user;`).
5.  **Default Parameters (Tham số mặc định):** Cho phép đặt giá trị mặc định cho tham số của hàm nếu không có giá trị truyền vào.
6.  **Template Literals (Chuỗi mẫu):** Sử dụng dấu backtick \` \` lồng ghép biến dễ dàng qua cú pháp `${variable}`.
7.  **Multi-line Strings (Chuỗi nhiều dòng):** Cho phép viết chuỗi dài xuống dòng trực tiếp mà không cần ký tự nối chuỗi.
8.  **Enhanced Object Literals (Định nghĩa đối tượng nâng cao):** Rút gọn cách viết thuộc tính và phương thức trong đối tượng nếu tên khóa trùng với tên biến.
9.  **Promises (Lời hứa):** Cơ chế xử lý các tác vụ bất đồng bộ thay thế cho callback hell.
10. **Classes (Lớp đối tượng):** Cú pháp hướng đối tượng ES6 (`class MyComponent extends React.Component`) dùng để xây dựng Class Components trong React.

---

## Phần 8. React Forms

### 1. Introduction (Giới thiệu)
Các phần tử biểu mẫu (HTML form elements) hoạt động hơi khác so với các phần tử DOM thông thường khác trong React vì các phần tử biểu mẫu thường tự duy trì một số trạng thái nội bộ (internal state).

Ví dụ biểu mẫu nhập tên bằng mã HTML thuần:
```html
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

---

### 2. Controlled Components (Thành phần có kiểm soát)
Trong HTML thông thường, các phần tử biểu mẫu như `<input>`, `<textarea>`, và `<select>` thường tự duy trì trạng thái của riêng chúng và cập nhật dựa trên đầu vào của người dùng.

Trong React, trạng thái khả biến (mutable state) thường được lưu trữ trong thuộc tính `state` của component và chỉ được cập nhật thông qua hàm cập nhật trạng thái (ví dụ: `useState` hook). Component React kiểm soát phần tử form đó bằng cách gán giá trị của state vào thuộc tính `value`.

**Mã nguồn ví dụ:**
```javascript
import React, { useState } from 'react';

function NameForm() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + value);
    event.preventDefault(); // Ngăn chặn hành vi gửi form mặc định (tải lại trang)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NameForm;
```

---

### 3. The textarea Tag (Thẻ textarea trong React)
Trong HTML thuần, thẻ `<textarea>` định nghĩa nội dung văn bản hiển thị thông qua các phần tử con của nó (viết giữa thẻ mở và thẻ đóng):
```html
<textarea>Văn bản mô tả ở đây...</textarea>
```
Trong React, thẻ `<textarea>` được thiết kế để sử dụng thuộc tính **`value`** trực tiếp (tương tự như thẻ `<input>` dòng đơn). Điều này giúp cú pháp viết form đồng nhất và dễ quản lý:

```javascript
import React, { useState } from 'react';

function EssayForm() {
  const [value, setValue] = useState('Hãy viết một bài luận về phần tử DOM mà bạn yêu thích.');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('Một bài luận đã được gửi: ' + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Bài luận:
        <textarea value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Gửi" />
    </form>
  );
}

export default EssayForm;
```

---

### 4. The select Tag (Thẻ select trong React)
Trong HTML thuần, thẻ `<select>` tạo một danh sách thả xuống. Để chọn mặc định một tùy chọn, HTML sử dụng thuộc tính `selected` trên thẻ `<option>` tương ứng:
```html
<select>
  <option value="grapefruit">Grapefruit</option>
  <option selected value="coconut">Coconut</option>
</select>
```
Trong React, thay vì sử dụng thuộc tính `selected` trên thẻ option, bạn sử dụng thuộc tính **`value`** trực tiếp trên thẻ gốc **`<select>`**. Điều này thuận tiện hơn đối với một component có kiểm soát vì bạn chỉ cần cập nhật trạng thái ở một nơi duy nhất (thẻ select).

**Mã nguồn ví dụ:**
```javascript
import React, { useState } from 'react';

function FlavorForm() {
  const [value, setValue] = useState('coconut');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('Your favorite flavor is: ' + value);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Chọn hương vị yêu thích:
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

*Chọn nhiều tùy chọn (Multiple Selection):*
Bạn có thể truyền một mảng giá trị vào thuộc tính `value` của thẻ `<select>` và bật thuộc tính `multiple={true}` để cho phép chọn nhiều mục cùng lúc:
```jsx
<select multiple={true} value={['B', 'C']}>
```
---

### 5. The file input Tag (Thẻ file input trong React)
Trong HTML, thẻ `<input type="file">` cho phép người dùng chọn một hoặc nhiều tệp từ bộ nhớ thiết bị của họ để tải lên máy chủ hoặc thao tác bằng JavaScript thông qua File API.
```html
<input type="file" />
```
*Lưu ý:* Do giá trị của thẻ nhập tệp là **chỉ đọc (read-only)**, nó hoạt động dưới dạng một **Uncontrolled Component** (Thành phần không kiểm soát) trong React.

---

### 6. Controlled Input Null Value (Giá trị Null trong Controlled Component)
Việc gán giá trị cố định cho thuộc tính `value` của một component có kiểm soát sẽ ngăn người dùng thay đổi giá trị của ô nhập liệu. Tuy nhiên, nếu bạn đã gán thuộc tính `value` nhưng ô nhập liệu vẫn cho phép chỉnh sửa, có thể bạn đã vô tình gán giá trị của `value` thành `undefined` hoặc `null`.

**Đoạn code minh họa:**
```javascript
// Ô input ban đầu bị khóa với giá trị "hi"
ReactDOM.render(<input value="hi" />, mountNode);

// Sau 1 giây, ô input trở nên chỉnh sửa được bình thường vì giá trị được gán là null
setTimeout(function() {
  ReactDOM.render(<input value={null} />, mountNode);
}, 1000);
```

---

### 7. Form Actions (Xử lý sự kiện gửi Form qua thuộc tính Action - React 19+)
Trong các phiên bản React mới (React 19+), thẻ `<form>` tích hợp cho phép bạn truyền trực tiếp một hàm xử lý (action) vào thuộc tính `action` của biểu mẫu để tự động quản lý việc gửi thông tin thông qua đối tượng `FormData`.

**Ví dụ về Form Action:**
```javascript
export default function Search() {
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

  return (
    <form action={search}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
```

**Handling multiple submission types (Xử lý nhiều loại submit hành động khác nhau):**
Bạn cũng có thể cấu hình các nút submit khác nhau thực thi các hành động khác nhau trong cùng một Form bằng cách sử dụng thuộc tính `formAction` trên nút bấm:

```javascript
export default function Search() {
  function publish(formData) {
    const content = formData.get("content");
    const button = formData.get("button");
    alert(`'${content}' was published with the '${button}' button`);
  }

  function save(formData) {
    const content = formData.get("content");
    alert(`Your draft of '${content}' has been saved!`);
  }

  return (
    <form action={publish}>
      <textarea name="content" rows={4} cols={40} />
      <br />
      <button type="submit" name="button" value="submit">Publish</button>
      {/* Nút lưu bản nháp gọi hành động lưu nháp riêng biệt */}
      <button formAction={save}>Save draft</button>
    </form>
  );
}
```

---

### 8. Các phương án thay thế Controlled Components

*   **Uncontrolled Components (Thành phần không kiểm soát):**
    Việc viết các hàm xử lý sự kiện cho từng thay đổi nhỏ của dữ liệu trong Controlled Components đôi khi rất tẻ nhạt và cồng kềnh, đặc biệt là khi chuyển đổi một cơ sở mã nguồn cũ sang React hoặc tích hợp React với một thư viện non-React. Trong những tình huống này, sử dụng **Uncontrolled Components** kết hợp với các tham chiếu **`refs`** (đọc giá trị trực tiếp từ DOM khi cần) là một giải pháp thay thế phù hợp.
*   **Fully-Fledged Solutions (Các giải pháp biểu mẫu toàn diện):**
    Nếu bạn đang tìm kiếm một giải pháp biểu mẫu đầy đủ bao gồm xác thực dữ liệu đầu vào (validation), theo dõi các trường đã tương tác (visited/touched fields) và quản lý tiến trình gửi biểu mẫu, các thư viện phổ biến như **Formik** hoặc **React Hook Form** là lựa chọn hàng đầu. Mặc dù vậy, chúng vẫn được xây dựng trên nền tảng của Controlled Components và quản lý state, nên việc nắm vững kiến thức nền tảng là vô cùng quan trọng.

---

## Phần 9. Lists and Keys (Danh sách và Khóa)

### 1. Rendering Multiple Components (Hiển thị nhiều component)
Bạn có thể xây dựng các bộ sưu tập phần tử và lồng ghép chúng vào cấu trúc JSX bằng cách sử dụng cặp dấu ngoặc nhọn `{ }`.

Dưới đây là cách chúng ta lặp qua mảng `numbers` bằng cách sử dụng hàm `map()` của JavaScript để trả về một thẻ danh sách `<li>` cho mỗi phần tử:

```javascript
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);
```

---

### 2. Basic List Component (Component danh sách cơ bản)
Thông thường, bạn sẽ render danh sách bên trong một component tự định nghĩa. Khi làm điều này, bạn cần phải gắn một thuộc tính **`key`** cho mỗi phần tử trong danh sách khi duyệt qua `map()` để React nhận dạng.

**Ví dụ có chỉ định khóa (Key):**
```javascript
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

---

### 3. Keys (Vai trò của Khóa)
*   **Khóa (Keys)** giúp React xác định phần tử nào đã thay đổi, được thêm vào hoặc bị xóa khỏi danh sách.
*   Các phần tử bên trong một mảng cần được cung cấp một `key` duy nhất để gán cho chúng một danh tính ổn định lâu dài.
*   Cách tốt nhất để chọn một `key` là sử dụng một chuỗi ký tự duy nhất phân biệt phần tử đó với các phần tử anh em khác trong danh sách (thường sử dụng `id` từ nguồn dữ liệu gốc của bạn):

```javascript
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

---

### 4. Extracting Components with Keys (Tách component con chứa Key)
*   Thuộc tính `key` chỉ có ý nghĩa trong **ngữ cảnh của mảng bao quanh nó**.
*   Khi bạn tách một phần tử danh sách ra thành một component con riêng biệt (ví dụ: component `ListItem`), bạn phải **giữ thuộc tính `key` trên thẻ component con trong vòng lặp `map()`**, chứ không phải trên thẻ gốc bên trong template của component con đó.

*   **SAI (Khóa đặt sai vị trí):**
    ```javascript
    function ListItem(props) {
      const value = props.value;
      // Sai: Định nghĩa key ở đây không có tác dụng
      return <li key={value.toString()}>{value}</li>;
    }

    function NumberList(props) {
      const listItems = props.numbers.map((number) =>
        // Sai: Thiếu thuộc tính key ở cấp độ phần tử mảng
        <ListItem value={number} />
      );
      return <ul>{listItems}</ul>;
    }
    ```
*   **ĐÚNG (Khóa đặt ở cấp độ mảng):**
    ```javascript
    function ListItem(props) {
      const value = props.value;
      // Đúng: Loại bỏ key ở đây
      return <li>{value}</li>;
    }

    function NumberList(props) {
      const listItems = props.numbers.map((number) =>
        // Đúng: Gán key trực tiếp tại component con được render trong mảng
        <ListItem key={number.toString()} value={number} />
      );
      return <ul>{listItems}</ul>;
    }
    ```

---

### 5. Embedding map() in JSX (Lồng map() trực tiếp trong JSX)
Trong các ví dụ trên, chúng ta đã khai báo một biến `listItems` riêng biệt và đưa nó vào JSX.

Tuy nhiên, cấu trúc JSX cho phép lồng ghép trực tiếp bất kỳ biểu thức JavaScript nào trong ngoặc nhọn `{ }`, vì vậy bạn có thể viết trực tiếp hàm `.map()` ngay bên trong mã JSX của khối lệnh trả về:

```javascript
function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  );
}
```
*Lưu ý: Mặc dù cách viết lồng này giúp code trông gọn gàng hơn, nếu logic lặp quá phức tạp, bạn vẫn nên tách nó thành biến hoặc component phụ để đảm bảo tính dễ đọc.*

---

## Phần 10. Creating Complex Components (Tạo các Component phức tạp)

### 1. From Visuals to Components (Từ thiết kế trực quan đến Component)
Trong thực tế, những giao diện bạn được yêu cầu xây dựng bằng React sẽ không bao giờ chỉ đơn giản là danh sách các tên hay các ô nguyên âm có màu sắc cố định. Thay vào đó, bạn sẽ nhận được các bản thiết kế giao diện phức tạp: có thể là bản phác thảo vẽ tay, sơ đồ cấu trúc, ảnh chụp màn hình thiết kế, video demo, hay file thiết kế chi tiết (từ Figma, Sketch...). Nhiệm vụ của bạn là đưa các pixel tĩnh đó vào thế giới động của React.

---

### 1.1 Identifying the Major Visual Elements (Xác định các phần tử trực quan chính)
Để tái tạo một thẻ màu (ví dụ: thẻ màu mã `#FF6663`) bằng React, quy trình triển khai sẽ đi qua 2 bước cốt lõi:
1.  **Xác định các phần tử trực quan chính:** Phân tích bản thiết kế tĩnh để nhận diện các phân vùng giao diện độc lập.
2.  **Xác định các component tương ứng:** Lên kế hoạch phân chia phân vùng nào sẽ trở thành các component riêng biệt.

**Phân tích cấu trúc thẻ màu:**
Nhìn vào thiết kế thẻ màu, chúng ta có thể phân tách nó thành 2 vùng chính biệt lập:
*   **Vùng phía trên (Top region):** Một khu vực hình vuông hiển thị màu sắc cụ thể (ví dụ: màu đỏ hồng).
*   **Vùng phía dưới (Bottom region):** Một khu vực màu trắng hiển thị thông tin mã màu hex (ví dụ: `#FF6663`).

*Phân tách sâu hơn:*
*   Khu vực hình vuông màu sắc phía trên là tối giản, không thể chia nhỏ hơn nữa.
*   Tuy nhiên, khu vực màu trắng phía dưới vẫn có thể tiếp tục phân tách thành 2 phần: chuỗi văn bản nhãn mã màu (`#FF6663`) và vùng khung nền trắng bao quanh nhãn đó.

---

### 1.2 Identifying the Components (Xác định các Component cần tạo)
Sau khi đã nhận diện toàn bộ các phần tử trực quan, bước tiếp theo là quyết định xem phần tử nào sẽ được tạo thành một component độc lập và phần tử nào không.

*Nguyên lý phân chia component hiệu quả:*
*   **Không nên tạo quá ít component (Too few):** Gộp toàn bộ giao diện phức tạp vào một component duy nhất sẽ khiến mã nguồn khổng lồ, khó đọc và không thể tái sử dụng.
*   **Không nên tạo quá nhiều component (Too many):** Chia nhỏ mọi thẻ HTML đơn giản thành các component con li ti sẽ làm tăng độ phức tạp của luồng truyền dữ liệu (props) và gây khó khăn trong việc quản lý cấu trúc dự án.
*   **Giải pháp:** Tìm kiếm sự cân bằng hợp lý dựa trên tính tái sử dụng và chức năng độc lập của từng khối giao diện.

**Xác định kiến trúc cây Component của thẻ màu:**
Đối với thẻ màu của chúng ta, các phần tử phù hợp nhất để tách thành các component bao gồm:
*   **Card (Component cha):** Đóng vai trò là khung chứa (container) bên ngoài bao quanh toàn bộ thẻ màu.
*   **Square (Component con thứ nhất):** Chỉ chịu trách nhiệm hiển thị vùng hình vuông màu sắc.
*   **Label (Component con thứ hai):** Chỉ chịu trách nhiệm hiển thị chuỗi văn bản chứa mã Hex màu (ví dụ: `#FF6663`).
*   *(Lưu ý: Vùng nền chữ nhật màu trắng bao quanh nhãn màu sẽ không cần tạo thành một component riêng biệt).*

**Mô hình phân cấp cây Component (Hierarchy):**
$$\text{Card (Parent Container)} \begin{cases} \text{Square (Colored Area)} \\ \text{Label (Hex Value Text)} \end{cases}$$

---

### 2. Creating the Components (Khởi tạo các Component cơ bản)
Chúng ta sẽ bắt đầu khai báo khung của 3 component: `Square`, `Label`, và `Card` bằng các hàm JavaScript ngắn gọn (Functional Components):

```javascript
import React from 'react';

// Component: Square
const Square = () => {
  return (
    <br />
  );
};

// Component: Label
const Label = () => {
  return (
    <br />
  );
};

// Component: Card
const Card = () => {
  return (
    <br />
  );
};
```

---

### 3. The Card Component (Xây dựng Component Card)
Component này hoạt động giống như một khung chứa (container) nơi chứa cả 2 component `Square` và `Label`. Chúng ta sẽ định hình kích thước, màu nền trắng và đổ bóng cho thẻ.

```javascript
function Card() {
  const cardStyle = {
    height: 200,
    width: 150,
    padding: 0,
    backgroundColor: "#FFF",
    boxShadow: "0px 0px 5px #666",
    margin: "10px"
  };

  return (
    <div style={cardStyle}>
      {/* Các component con sẽ được đưa vào đây */}
    </div>
  );
}

// Render component cha ra màn hình
root.render(
  <div style={{ display: 'flex' }}>
    <Card />
  </div>
);
```

---

### 4. The Square Component (Xây dựng Component Square)
Tương tự như `Card`, component `Square` trả về một thẻ `div` với đối tượng định kiểu `squareStyle` để hiển thị khối màu hình vuông phía trên và bo góc nhẹ:

```javascript
function Square() {
  const squareStyle = {
    height: 150,
    backgroundColor: "#FF6663", // Mã màu hiển thị
    borderRadius: "5px" // Bo nhẹ các góc của vùng màu
  };

  return (
    <div style={squareStyle}></div>
  );
}

---

### 5. The Label Component (Xây dựng Component Label)
Component cuối cùng còn thiếu là `Label`. Chúng ta sẽ định kiểu cho văn bản chứa mã Hex màu (sử dụng font chữ sans-serif, in đậm, căn giữa và có khoảng đệm phía trên):

```javascript
function Label() {
  const labelStyle = {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    padding: "13px 0 0 0",
    margin: 0,
    textAlign: "center",
    color: "#333"
  };

  return (
    <p style={labelStyle}>#FF6663</p>
  );
}
```

---

### 6. Question: How to customize Card color? (Làm sao hiển thị màu động?)
Làm thế nào để tùy biến component `Card` hiển thị bất kỳ màu sắc nào khác (ví dụ màu cam mã `#FFA737`), thay vì bị gán cứng màu đỏ hồng `#FF6663`?

**Giải pháp:** Chúng ta sẽ sử dụng thuộc tính (**Props**) để truyền động giá trị màu sắc từ component cha xuống các component con.

**Mã nguồn hoàn chỉnh sau khi truyền Props:**
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

// 1. Component hiển thị khối màu Square nhận prop 'color'
function Square(props) {
  const squareStyle = {
    height: 150,
    backgroundColor: props.color, // Sử dụng màu truyền vào
    borderRadius: "5px 5px 0 0"
  };
  return <div style={squareStyle}></div>;
}

// 2. Component hiển thị nhãn chữ Label nhận prop 'color'
function Label(props) {
  const labelStyle = {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    padding: "13px 0 0 0",
    margin: 0,
    textAlign: "center",
    color: "#333"
  };
  return <p style={labelStyle}>{props.color}</p>; // Hiển thị mã màu động
}

// 3. Component cha Card nhận prop 'color' và truyền tiếp xuống các con
function Card(props) {
  const cardStyle = {
    height: 200,
    width: 150,
    padding: 0,
    backgroundColor: "#FFF",
    boxShadow: "0px 0px 5px #666",
    margin: "10px",
    borderRadius: "5px",
    overflow: "hidden"
  };

  return (
    <div style={cardStyle}>
      <Square color={props.color} />
      <Label color={props.color} />
    </div>
  );
}

// Render ứng dụng - truyền các mã màu khác nhau động
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(
  <div style={{ display: 'flex' }}>
    <Card color="#FF6663" />
    <Card color="#FFA737" />
    <Card color="#49DD8E" />
  </div>
);
```

---

## Phần 11. Router, SSR

### 1. React Router Basic (Cơ bản về React Router)

#### 1.1 Introduction (Giới thiệu)
React Router giúp giao diện người dùng (UI) luôn đồng bộ với URL trên thanh địa chỉ của trình duyệt. Nó sở hữu một API đơn giản đi kèm các tính năng mạnh mẽ được tích hợp sẵn như: nạp mã nguồn chậm (lazy code loading), so khớp đường dẫn động (dynamic route matching), và xử lý quá trình chuyển đổi vị trí trang (location transition handling). 

> [!TIP]
> Hãy biến URL thành suy nghĩ đầu tiên của bạn khi thiết kế ứng dụng, chứ không phải một ý nghĩ nảy sinh sau cùng.

Khi người dùng truy cập các URL khác nhau:
*   `http://localhost:3000/` $\longrightarrow$ Kích hoạt component `Home` (thông qua `<Route>`)
*   `http://localhost:3000/about` $\longrightarrow$ Kích hoạt component `About` (thông qua `<Route>`)
*   `http://localhost:3000/topics` $\longrightarrow$ Kích hoạt component `Topics` (thông qua `<Route>`)

#### 1.2 Phân biệt các gói thư viện React Router
*   **`react-router`**: Chứa các component core phục vụ cho cơ chế định tuyến (routing) của các ứng dụng React nói chung.
*   **`react-router-dom`**: Cung cấp các component chuyên biệt cho môi trường trình duyệt (Browser) để định tuyến các ứng dụng web.
*   **`react-router-native`**: Cung cấp các component chuyên biệt cho các ứng dụng di động xây dựng bằng React Native.
*   **Lưu ý:** Bạn chỉ nên cài đặt trực tiếp `react-router-dom` (đối với Web) hoặc `react-router-native` (đối với Mobile App), vì cả hai thư viện này đều đã xuất (export) toàn bộ các chức năng từ gói lõi `react-router`.

#### 1.3 Installation (Cài đặt)
Đối với việc xây dựng một dự án ứng dụng Web mới tích hợp React Router (sử dụng mẫu cấu trúc khuyến nghị từ Remix/React Router mới nhất), bạn chạy lệnh sau trên Command Prompt (Windows) hoặc Terminal (Linux/Mac):

```bash
npx create-react-router@latest --template remix-run/react-router-templates/<template-name>
```

---

### 2. Create a Router and Render (Khởi tạo Bộ định tuyến và Render)
Để thiết lập định tuyến cơ bản, chúng ta tạo một đối tượng router bằng hàm `createBrowserRouter` và truyền nó vào component `<RouterProvider>` để React thực hiện render.

```javascript
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";

// Định nghĩa danh sách các tuyến đường (Routes)
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

// Tìm phần tử root và render RouterProvider
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
```

---

### 3. Nested Routes (Định tuyến lồng nhau)
Các tuyến đường có thể được lồng vào bên trong các tuyến đường cha thông qua thuộc tính **`children`**.

#### 3.1 Khai báo danh sách đường dẫn lồng nhau:
```javascript
createBrowserRouter([
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      // Tuyến đường mặc định khi truy cập vào /dashboard
      { index: true, Component: Home },
      
      // Tuyến đường con truy cập qua /dashboard/settings
      { path: "settings", Component: Settings },
    ],
  },
]);
```

#### 3.2 Hiển thị Component con thông qua `<Outlet />`:
Các component con trong mảng `children` sẽ được xác định vị trí hiển thị bên trong component cha thông qua thẻ giữ chỗ **`<Outlet />`**.

```javascript
import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Vị trí hiển thị nội dung của <Home /> hoặc <Settings /> */}
      <Outlet />
    </div>
  );
}
```

---

### 4. Layout Routes (Tuyến đường bố cục không làm thay đổi URL)
Việc lược bỏ thuộc tính `path` ở một tuyến đường cha (chỉ khai báo thuộc tính `Component`) sẽ tạo ra các tuyến đường con dùng chung một Layout mà không thêm bất kỳ đoạn phân tách (segment) nào vào đường dẫn URL của trình duyệt.

```javascript
createBrowserRouter([
  {
    // Không khai báo thuộc tính path, chỉ chỉ định layout chung
    Component: MarketingLayout,
    children: [
      { index: true, Component: Home }, // Hiển thị tại "/"
      { path: "contact", Component: Contact }, // Hiển thị tại "/contact"
    ],
  },
  {
    path: "projects",
    children: [
      { index: true, Component: ProjectsHome }, // Hiển thị tại "/projects"
      {
        // Layout dùng chung cho các dự án chi tiết
        Component: ProjectLayout,
        children: [
          { path: ":pid", Component: Project }, // Hiển thị tại "/projects/:pid"
          { path: ":pid/edit", Component: EditProject }, // Hiển thị tại "/projects/:pid/edit"
        ],
      },
    ],
  },
]);
```

---

### 5. Dynamic Segments (Phần đường dẫn động)
Nếu một đoạn đường dẫn (path segment) bắt đầu bằng dấu hai chấm `:` thì nó sẽ trở thành một **"dynamic segment"** (đường dẫn động). Khi URL khớp với cấu trúc đường dẫn này, giá trị động từ URL sẽ được phân tích cú pháp và cung cấp dưới dạng thuộc tính `params` cho các API khác của router (như loader, action, hoặc component).

**Ví dụ cấu hình dynamic segment:**
```javascript
{
  path: "teams/:teamId",
  // loader dùng để lấy dữ liệu trước khi component được render
  loader: async ({ params }) => {
    // params.teamId chứa giá trị động từ URL (ví dụ: "teams/manchester-united" -> "manchester-united")
    let team = await fetchTeam(params.teamId);
    return { name: team.name };
  },
  Component: Team,
}
```

---

### 6. Component `<Prompt>` (Xác nhận trước khi rời trang)
Component `<Prompt>` được sử dụng để hiển thị một hộp thoại cảnh báo (prompt) xác nhận trước khi người dùng chuyển hướng rời khỏi trang hiện tại. Nó rất hữu ích khi ứng dụng đang ở trạng thái không nên rời đi (ví dụ: người dùng đang điền dở một biểu mẫu).

#### 6.1 Các thuộc tính chính của `<Prompt>`:

*   **`message` (Kiểu chuỗi - string):** 
    Tin nhắn sẽ hiển thị trong hộp thoại cảnh báo khi người dùng cố gắng chuyển trang.
    ```jsx
    import { Prompt } from 'react-router';
    
    <Prompt message="Bạn có chắc chắn muốn rời khỏi trang này?" />
    ```
*   **`message` (Kiểu hàm - function):**
    Cho phép kiểm tra điều kiện chuyển trang dựa trên thông tin đường dẫn tiếp theo (`location`). Hàm này nhận vào vị trí sắp tới và trả về `true` để cho phép chuyển hướng ngay, hoặc trả về chuỗi văn bản để hiển thị hộp thoại cảnh báo.
    ```jsx
    <Prompt
      message={location =>
        location.pathname.startsWith("/app")
          ? true // Cho phép chuyển tiếp trực tiếp không cần hỏi
          : `Bạn có chắc muốn chuyển đến trang ${location.pathname}?` // Hiện cảnh báo
      }
    />
    ```
*   **`when` (Kiểu boolean):**
    Thay vì render `<Prompt>` theo điều kiện bằng toán tử logic, bạn có thể luôn render `<Prompt>` và truyền giá trị boolean (`true`/`false`) vào thuộc tính `when` để kích hoạt hoặc vô hiệu hóa cơ chế chặn chuyển trang.
    ```jsx
    <Prompt when={formIsHalfFilledOut} message="Bạn có chắc chắn muốn rời đi?" />
    ```

> [!NOTE]
> Component `<Prompt>` thuộc về phiên bản React Router cũ (v4/v5). Ở React Router v6+, chức năng này được thay thế bằng Hook `useBlocker` hoặc `usePrompt`.

---

### 7. Component `<Redirect>` (Điều hướng trang)
Việc hiển thị component `<Redirect>` sẽ ngay lập tức điều hướng người dùng sang một đường dẫn mới. Vị trí mới này sẽ ghi đè lên vị trí hiện tại trong ngăn xếp lịch sử trình duyệt (history stack), tương tự như cơ chế Redirect phía Server (HTTP 3xx).

#### 7.1 Các thuộc tính chính:
*   **`to` (Kiểu chuỗi - string):**
    Đường dẫn URL muốn chuyển hướng đến. Bất kỳ đường dẫn hợp lệ nào mà thư viện `path-to-regexp` hỗ trợ đều có thể sử dụng.
    ```jsx
    <Redirect to="/somewhere/else" />
    ```
*   **`to` (Kiểu đối tượng - object):**
    Cho phép định nghĩa chi tiết vị trí chuyển hướng, gửi kèm tham số truy vấn (`search`) hoặc dữ liệu trạng thái (`state`).
    ```jsx
    <Redirect
      to={{
        pathname: "/login",
        search: "?utm=your+face",
        state: { referrer: currentLocation } // Dữ liệu trạng thái đi kèm
      }}
    />
    ```
    *Cách truy cập state nhận được:* Ở component được chuyển hướng tới (ví dụ: `Login` ở đường dẫn `/login`), ta có thể đọc dữ liệu trạng thái này qua thuộc tính `this.props.location.state.referrer`.
*   **`from` (Kiểu chuỗi - string):**
    Đường dẫn nguồn muốn chuyển đi. Thuộc tính này chỉ có thể sử dụng khi thẻ `<Redirect>` được lồng bên trong một component `<Switch>`.
    ```jsx
    <Switch>
      {/* Tự động chuyển hướng từ đường dẫn cũ sang mới */}
      <Redirect from="/old-path" to="/new-path" />
      <Route path="/new-path" component={Place} />
    </Switch>
    
    // Chuyển hướng kèm theo tham số (parameters)
    <Switch>
      <Redirect from="/users/:id" to="/users/profile/:id" />
      <Route path="/users/profile/:id" component={Profile} />
    </Switch>
    ```
*   **`exact` (Kiểu boolean):**
    Yêu cầu khớp chính xác tuyệt đối đường dẫn `from` để kích hoạt chuyển hướng; hoạt động tương tự thuộc tính `exact` của thẻ `<Route>`.
*   **`push` (Kiểu boolean):**
    Nếu đặt là `true`, hành động điều hướng sẽ thêm một bản ghi mới vào lịch sử trình duyệt (history stack) thay vị thay thế (replace) bản ghi hiện tại.
    ```jsx
    <Redirect push to="/somewhere/else" />
    ```

> [!NOTE]
> Component `<Redirect>` thuộc về phiên bản React Router cũ (v4/v5). Ở phiên bản React Router v6+, component này đã được thay thế bằng `<Navigate to="/dashboard" replace />` hoặc hàm `redirect("/dashboard")` bên trong loader/action.

---

### 8. Component `<Switch>` (Khớp tuyến đường độc quyền)
Component `<Switch>` hiển thị phần tử con `<Route>` hoặc `<Redirect>` **đầu tiên** khớp với URL hiện tại.

#### 8.1 Sự khác biệt giữa `<Switch>` và danh sách các thẻ `<Route>` độc lập:
*   **Không dùng `<Switch>`:** Tất cả các `<Route>` khớp với địa chỉ URL sẽ hiển thị **đồng thời** (inclusive rendering).
*   **Sử dụng `<Switch>`:** Chỉ có duy nhất Route khớp đầu tiên được render (exclusive rendering). Điều này rất hữu ích để làm trang báo lỗi 404 (No Match).

**Ví dụ sử dụng:**
```javascript
import { Switch, Route } from 'react-router';

<Switch>
  {/* Khớp chính xác trang chủ */}
  <Route exact path="/" component={Home} />
  
  {/* Khớp đường dẫn /about */}
  <Route path="/about" component={About} />
  
  {/* Khớp đường dẫn động chứa user */}
  <Route path="/:user" component={User} />
  
  {/* Component hiển thị khi không khớp bất kỳ đường dẫn nào ở trên (Trang 404) */}
  <Route component={NoMatch} />
</Switch>
```

> [!NOTE]
> Component `<Switch>` thuộc về phiên bản React Router cũ (v4/v5). Ở phiên bản React Router v6+, component này đã được đổi tên và thay thế bằng `<Routes>`.

---

### 9. Understanding and Using Links (Hiểu và sử dụng Component Link)
Thành phần `<Link>` nhận một thuộc tính **`to`** đóng vai trò chỉ định điểm đến cần điều hướng.

```javascript
import { Link } from 'react-router-dom';

const Nav = () => (
  <Link to='/'>Home</Link>
);
```

#### Thuộc tính `to` chấp nhận các định dạng dữ liệu:
*   **Kiểu chuỗi (string):** Đường dẫn trực tiếp cần chuyển hướng.
*   **Kiểu đối tượng vị trí (location object):** Chứa các thông tin cấu trúc như `pathname`, `search`, `hash`, và `state`.
    ```jsx
    <Link to={{
      pathname: '/me',
      search: '?sort=asc',
      hash: '#hash',
      state: { fromHome: true }
    }} />
    ```

---

### 10. Link vs NavLink (Phân biệt Link và NavLink)
`<NavLink>` là một lớp con đặc biệt của `<Link>`, bổ sung thêm khả năng áp dụng các thuộc tính định kiểu (styling) khi đường dẫn hiện tại đang ở trạng thái hoạt động (active path).

```javascript
import { NavLink } from 'react-router-dom';

<NavLink
  to="/me"
  activeClassName="selected"
  activeStyle={{ color: 'red' }} // Chỉ định kiểu CSS khi đường dẫn đang Active
>
  My Profile
</NavLink>
```
*Lưu ý:* Khi URL trình duyệt khớp với đường dẫn `to="/me"`, class `selected` sẽ tự động được thêm vào thẻ HTML sinh ra.

---

### 11. Server-side Rendering (SSR - Kết xuất phía Máy chủ)

#### 11.1 Server Side Rendering là gì?
Server-side Rendering (SSR) là một kỹ thuật kết xuất một ứng dụng trang đơn (SPA) - vốn bình thường chỉ chạy ở phía client - ngay tại máy chủ (server), sau đó gửi toàn bộ trang HTML hoàn chỉnh đã kết xuất trực tiếp về phía trình duyệt của người dùng.

#### 11.2 Cơ chế hoạt động của SSR (How SSR works)
Quy trình tải trang qua SSR được chia thành 2 giai đoạn chính:

1.  **Server Rendering (Máy chủ kết xuất):**
    *   Trình duyệt gửi yêu cầu `GET /page`.
    *   Server xử lý và trả về phản hồi HTML đã được kết xuất sẵn nội dung hoàn chỉnh, kèm theo các file CSS.
    *   Trình duyệt dựng (render) HTML tĩnh và CSS.
    *   **Kết quả (FCP - First Contentful Paint):** Người dùng có thể nhìn thấy nội dung trang ngay lập tức (**Page now viewable**), tuy nhiên chưa thể tương tác.
2.  **Client Rendering (Trình duyệt tiếp quản):**
    *   Trình duyệt tải tiếp gói mã JavaScript (`bundle.js`) từ máy chủ.
    *   Trình duyệt thực thi mã JavaScript và chạy React để tiếp quản trang HTML tĩnh có sẵn (quá trình này gọi là **Rehydration**).
    *   **Kết quả (TTI - Time to Interactive):** Trang Web chính thức tương tác được bình thường (**Page now interactable**).

$$\text{Request URL} \longrightarrow \text{HTML tĩnh sẵn sàng (FCP - Viewable)} \longrightarrow \text{Tải JS} \longrightarrow \text{Rehydration (TTI - Interactable)}$$

#### 11.3 Ưu điểm và nhược điểm của SSR

##### Ưu điểm (PROS):
*   **SEO nhất quán (Consistent SEO):** Các công cụ tìm kiếm dễ dàng thu thập nội dung trang vì HTML đã được dựng hoàn chỉnh trên server.
*   **Hiệu năng tải trang đầu (Performance, initial page load):** Rút ngắn thời gian hiển thị nội dung đầu tiên tới người dùng (FCP nhanh).
*   **Thân thiện mạng xã hội (SMO):** Các robot thu thập thông tin của mạng xã hội (Facebook Crawler, Twitter Bot...) đọc tốt thẻ meta để hiển thị bản xem trước bài viết trực quan.

##### Nhược điểm (CONS):
*   **Yêu cầu xử lý liên tục (Frequent requests):** Mỗi lần chuyển trang hoặc yêu cầu mới đều tạo áp lực tính toán dựng HTML trực tiếp trên Server.
*   **Thời gian phản hồi chậm (Slow page rendering - TTFB):** Thời gian nhận byte đầu tiên (Time to first byte) lâu hơn do server cần thời gian dựng HTML trước khi trả về.
*   **Kiến trúc phức tạp (Complex architecture):** Việc đồng bộ giữa môi trường Node.js và trình duyệt (Universal JavaScript) đòi hỏi cấu hình phức tạp.

#### 11.4 Phương pháp và thách thức khi triển khai SSR với React

##### Phương pháp thực hiện (Methodology):
1.  **Kết xuất đầu tiên trên máy chủ (Initial render on server):** Tạo ra chuỗi HTML tĩnh bằng hàm `renderToString` hoặc `renderToPipeableStream` của React.
2.  **Hiển thị trang HTML hoàn chỉnh (Show fully formed HTML):** Gửi phản hồi HTML tĩnh sớm về trình duyệt.
3.  **Thực thi JS (JS executions):** Trình duyệt tải xuống các script.
4.  **React tiếp quản (React takes over / re-render):** Kích hoạt cơ chế rehydration trên Client để gắn các bộ lắng nghe sự kiện vào HTML tĩnh.

##### Các thách thức lớn (Challenges):
*   **Hỗ trợ JSX trên Node.js:** Node.js thuần không hiểu JSX, cần dùng trình biên dịch (Babel/Webpack) trên Server.
*   **Quản lý Redux/State trên server:** Cần tạo mới store và đồng bộ trạng thái ban đầu (`preloadedState`) từ máy chủ sang trình duyệt.
*   **Định tuyến (Routing):** Phải đồng bộ đường dẫn giữa `StaticRouter` (trên Server) và `BrowserRouter` (trên Client).
*   **Quá trình bù nước (Rehydration):** HTML render từ Server và HTML render trên Client lượt đầu phải trùng khớp hoàn toàn cấu trúc, nếu không sẽ xảy ra lỗi không khớp (hydration mismatch).





```

---

## Phần 12. Making Your Component Reusable (Thiết kế Component có khả năng tái sử dụng)

### 1. Understanding Mixins (Tìm hiểu về Mixins)
Khi bắt đầu tiếp cận React, một trong những câu hỏi phổ biến nhất là: *"Làm thế nào để chia sẻ chung mã logic giữa nhiều component khác nhau?"*

Trong các phiên bản React sơ khai (khi sử dụng cú pháp `React.createClass`), **Mixins** là giải pháp được giới thiệu để giải quyết vấn đề này. Mixins cho phép gom các đoạn logic dùng chung (state, phương thức) và nhúng (mix) chúng vào nhiều component khác nhau.

> [!WARNING]
> Hiện nay Mixins đã bị **ngừng hỗ trợ (deprecated)** trong React hiện đại vì các nhược điểm lớn như: xung đột tên hàm/state, khó theo dõi nguồn gốc của code, và làm mã nguồn trở nên mập mờ, khó bảo trì. Thay vào đó, React khuyên dùng **Higher-Order Components (HOCs)** hoặc các **Custom Hooks**.

---

### 2. Higher-Order Components (HOC - Thành phần cấp cao)
Một Higher-Order Component (HOC) là một hàm nhận vào một component và trả về một component mới được nâng cấp hoặc bổ sung thêm tính năng/dữ liệu.

#### Cơ chế hoạt động của HOC (Luồng truyền Props):
1.  **Nhận Props ban đầu:** HOC nhận cả `OriginalProps` (thuộc tính gốc dành cho component con) và `ExternalProps` (thuộc tính điều hướng logic của HOC).
2.  **Xử lý Logic & State:** HOC thực thi logic nội bộ, quản lý các state trung gian.
3.  **Tiêm Props mới (Injected Props):** HOC chuyển giao các thuộc tính bổ sung (`InjectedProps`) cộng với các thuộc tính gốc (`OriginalProps`) xuống component con đích.

$$\text{Component} \xrightarrow{\text{wrapped in HOC}} \text{New Component} \ (\text{receives OriginalProps} + \text{InjectedProps})$$

---

### 3. Validations in React (Xác thực dữ liệu trong React)

#### 3.1 Validations (Xác thực đầu vào của biểu mẫu)
Có rất nhiều cách tiếp cận và công cụ khác nhau để thực hiện xác thực (validation) trong React. Mục tiêu chung quan trọng nhất của việc xác thực là **ngăn chặn dữ liệu đầu vào sai của người dùng càng sớm càng tốt** bằng các cảnh báo trực quan lập tức (ví dụ: bôi đỏ viền ô nhập liệu và hiển thị câu thông báo lỗi chi tiết như *"Password is a required field"*).

#### 3.2 Validating Props (Xác thực các thuộc tính - Props Validation)
Xác thực thuộc tính (Props Validation) là một phương pháp hữu hiệu giúp kiểm soát và bắt buộc việc sử dụng đúng kiểu dữ liệu của các props truyền vào component.

##### Lợi ích của việc xác thực Props:
*   **Hạn chế lỗi sớm trong quá trình phát triển (Development phase):** Giúp phát hiện các lỗi sai kiểu dữ liệu ngay lập tức thông qua cảnh báo ở console trình duyệt trước khi dự án phình to.
*   **Tăng tính đọc hiểu của mã nguồn (Readability):** Bằng cách định nghĩa kiểu dữ liệu cho props, nhà phát triển khác nhìn vào có thể lập tức hiểu component này yêu cầu những tham số đầu vào nào và định dạng ra sao.
*   *Lưu ý:* Trong thực tế, các dự án React hiện đại thường dùng thư viện `prop-types` hoặc chuyển hẳn sang sử dụng **TypeScript** để thực hiện kiểm tra kiểu dữ liệu tĩnh nghiêm ngặt và an toàn nhất.

##### Cách khai báo PropTypes & defaultProps:
Thư viện `prop-types` cung cấp một loạt các trình xác thực (validators) có sẵn để đảm bảo dữ liệu nhận được là hợp lệ. Nếu giá trị truyền vào không hợp lệ, React sẽ phát ra một cảnh báo (warning) ở console trình duyệt Javascript. Vì lý do tối ưu hiệu năng, việc kiểm tra PropTypes này chỉ được thực hiện trong môi trường phát triển (**Development mode**).

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ name }) => {
  return (
    <h1>Hello, {name}</h1>
  );
};

// Định nghĩa kiểu dữ liệu cho Props
Greeting.propTypes = {
  name: PropTypes.string // Ràng buộc name phải là kiểu chuỗi (string)
};

// Định nghĩa giá trị mặc định cho Props nếu không được truyền vào
Greeting.defaultProps = {
  name: 'Guest'
};

export default Greeting;
```

---

### 4. Cấu trúc chuẩn của một Component trong React (The structure of a React component)
Khi viết một component React, việc tuân thủ một cấu trúc sắp xếp các thành phần từ trên xuống dưới giúp mã nguồn thống nhất và dễ bảo trì:

1.  **Khai báo dữ liệu nội bộ (The component declaredData):** Thiết lập state ban đầu, cấu hình biến, các tham chiếu...
2.  **Xác thực thuộc tính (The propType):** Khai báo kiểm tra kiểu dữ liệu props (`propTypes`) và giá trị mặc định (`defaultProps`).
3.  **Các phương thức vòng đời (Component lifecycle method):** Các hook hiệu ứng hoặc hàm vòng đời (như `useEffect`, hoặc `componentDidMount` trong Class Component).
4.  **Logic bên trong phương thức vòng đời:** Các xử lý dữ liệu chi tiết thực thi trong lifecycle.
5.  **Phương thức hiển thị (Render method):** Hàm `return` khối lệnh JSX (hoặc hàm `render()` trong Class Component) hiển thị giao diện UI cuối cùng.

---

## Phần 13. Context (Ngữ cảnh)

### 1. When to Use Context (Khi nào cần sử dụng Context)
**Context** được thiết kế để chia sẻ dữ liệu có thể được coi là "toàn cục" (global) cho toàn bộ cây component React (ví dụ: thông tin người dùng đã đăng nhập, cài đặt chủ đề giao diện, hoặc ngôn ngữ ưa thích).

#### 1.1 Vấn đề truyền Props quá nhiều cấp (Prop Drilling):
Thông thường, để truyền dữ liệu từ cha xuống con, chúng ta phải truyền props thủ công qua mọi component trung gian, ngay cả khi các component trung gian đó hoàn toàn không cần sử dụng dữ liệu này.

**Ví dụ truyền thủ công (Prop Drilling):**
```javascript
const Button = ({ theme }) => {
  const style = {
    backgroundColor: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333'
  };
  return <button style={style}>Themed Button</button>;
};

// Component trung gian phải nhận và truyền tiếp 'theme'
const ThemedButton = ({ theme }) => <Button theme={theme} />;
const Toolbar = ({ theme }) => (
  <div>
    <ThemedButton theme={theme} />
  </div>
);

const App = () => <Toolbar theme="dark" />;
```

#### 1.2 Giải pháp dùng Context để tránh truyền trung gian:
Context giúp các component sâu bên dưới có thể truy cập trực tiếp vào giá trị mà không cần thông qua props ở các cấp trung gian.

**Ví dụ sử dụng React.createContext & useContext:**
```javascript
import React, { useContext } from 'react';

// Khởi tạo Context với giá trị mặc định là 'light'
const ThemeContext = React.createContext('light');

const Button = ({ theme }) => {
  const style = {
    backgroundColor: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333'
  };
  return <button style={style}>Themed Button</button>;
};

const ThemedButton = () => {
  // Lấy giá trị trực tiếp từ ThemeContext thông qua hook useContext
  const theme = useContext(ThemeContext);
  return <Button theme={theme} />;
};

const Toolbar = () => (
  <div>
    <ThemedButton /> {/* Không cần truyền props 'theme' ở đây nữa */}
  </div>
);

const App = () => (
  // Sử dụng Provider để cung cấp giá trị Context cho toàn bộ cây con bên dưới
  <ThemeContext.Provider value="dark">
    <Toolbar />
  </ThemeContext.Provider>
);
```

---

### 2. Before You Use Context (Lưu ý trước khi dùng Context)
*   **Áp dụng chừng mực:** Context chủ yếu dùng khi nhiều component ở các cấp lồng nhau khác nhau cần truy cập cùng một dữ liệu. Hãy sử dụng nó một cách hạn chế vì Context sẽ làm giảm khả năng tái sử dụng độc lập của các component.
*   **Giải pháp Component Composition (Kết hợp thành phần):** Nếu mục tiêu của bạn chỉ là tránh truyền props qua quá nhiều cấp trung gian, phương án **Component Composition** (kết hợp thành phần) thường là một giải pháp đơn giản và hiệu quả hơn so với việc lạm dụng Context.

#### 2.1 Ví dụ về Prop Drilling sâu:
```jsx
<Page user={user} avatarSize={avatarSize} />
// ... PageLayout nhận user, avatarSize và render NavigationBar ...
<PageLayout user={user} avatarSize={avatarSize} />
// ... NavigationBar nhận user, avatarSize và render Link ...
<NavigationBar user={user} avatarSize={avatarSize} />
// ... Link render Avatar ...
<Link href={user.permalink}>
  <Avatar user={user} size={avatarSize} />
</Link>
```

#### 2.2 Giải quyết bằng Component Composition (Truyền trực tiếp component đã bọc):
Chúng ta có thể chuyển trực tiếp component con `userLink` (đã được bọc đầy đủ thông tin) từ trên cấp cha xuống dưới, giúp các component trung gian như `PageLayout` và `NavigationBar` không cần biết gì về các props `user` hay `avatarSize` nữa:

```javascript
function Page(props) {
  const user = props.user;
  // Bọc sẵn dữ liệu vào component userLink ở ngay component cha
  const userLink = (
    <Link href={user.permalink}>
      <Avatar user={user} size={props.avatarSize} />
    </Link>
  );
  return <PageLayout userLink={userLink} />;
}

// Bên dưới các component trung gian chỉ việc hiển thị {props.userLink}
```

#### 2.3 Phân phối nhiều vị trí hiển thị (Slots):
Bạn không bị giới hạn ở việc chỉ truyền một component con duy nhất. Bạn hoàn toàn có thể truyền nhiều component con khác nhau vào các vị trí (slots) mong muốn của component bố cục:

```javascript
function Page(props) {
  const user = props.user;
  const content = <Feed user={user} />;
  const topBar = (
    <NavigationBar>
      <Link href={user.permalink}>
        <Avatar user={user} size={props.avatarSize} />
      </Link>
    </NavigationBar>
  );

  return (
    <PageLayout
      topBar={topBar}
      content={content}
    />
  );
}
```

---

### 3. API của Context

#### 3.1 React.createContext
Hàm `React.createContext` tạo ra một đối tượng Context.

```javascript
const MyContext = React.createContext(defaultValue);
```

*   **Cơ chế hoạt động:** Khi React render một component có đăng ký lắng nghe đối tượng Context này, nó sẽ đọc giá trị context hiện tại từ **Provider khớp gần nhất** nằm ở phía trên nó trong cây component.
*   **Tham số `defaultValue`:** Giá trị mặc định này **chỉ được sử dụng** khi component tiêu thụ context không tìm thấy bất kỳ Provider khớp nào phía trên nó trong cây component. Điều này cực kỳ hữu ích cho việc viết Unit Test cho các component riêng lẻ mà không cần bọc chúng.
*   *Lưu ý quan trọng:* Việc truyền giá trị `undefined` vào thuộc tính `value` của Provider (ví dụ: `<MyContext.Provider value={undefined}>`) **không** làm cho component tiêu thụ sử dụng giá trị mặc định `defaultValue`.

#### 3.2 Hook `useContext`
Hook `useContext` là phương pháp giúp lấy dữ liệu từ một đối tượng Context và đưa xuống các component con mà không cần truyền prop. Kiểu dữ liệu (type) của giá trị trả về bởi hook sẽ được suy luận trực tiếp từ giá trị được truyền vào lệnh gọi khởi tạo `createContext`.

**Ví dụ viết bằng TypeScript:**
```typescript
import { createContext, useContext } from 'react';

type Theme = "light" | "dark" | "system";

// Khởi tạo Context và định nghĩa kiểu dữ liệu cho Theme
const ThemeContext = createContext<Theme>("system");

// Tạo một Custom Hook để tiêu thụ giá trị ThemeContext dễ dàng hơn
const useGetTheme = () => useContext(ThemeContext);
```

---

## Phần 14. Reacting with Redux (Quản lý trạng thái với Redux)

### 1. Tại sao Redux phổ biến trong các dự án React?

#### 1.1 Vấn đề khi không sử dụng Redux (Without Redux):
Trong một ứng dụng React lớn với cây component sâu nhiều cấp, khi một component ở nhánh dưới cùng kích hoạt một thay đổi trạng thái (state change), dữ liệu state phải được chuyển ngược lên qua các cấp cha trung gian rồi truyền xuôi xuống các nhánh component anh em khác. Điều này dẫn tới:
*   Mã nguồn phức tạp do phải thực hiện **prop drilling** qua quá nhiều tầng trung gian.
*   Khó khăn lớn khi cần đồng bộ trạng thái giữa các component không có quan hệ cha-con trực tiếp.

#### 1.2 Giải pháp khi sử dụng Redux (With Redux):
Redux tách biệt trạng thái của toàn bộ ứng dụng ra khỏi cây component và đặt tập trung vào một kho chứa duy nhất gọi là **`Store`**.
*   Khi bất kỳ component nào muốn thay đổi trạng thái, nó chỉ cần thông báo trực tiếp lên `Store`.
*   `Store` cập nhật trạng thái mới và tự động cập nhật dữ liệu trực tiếp xuống đúng các component có đăng ký lắng nghe thay đổi đó, bỏ qua hoàn toàn các component trung gian.

---

### 2. Định nghĩa về Redux
Redux là một **hộp chứa trạng thái có thể dự đoán được (predictable state container)** dành cho các ứng dụng JavaScript, giúp tổ chức và quản lý trạng thái của ứng dụng một cách khoa học. 

*   Mặc dù cực kỳ phổ biến trong hệ sinh thái React, Redux là một thư viện độc lập và có thể sử dụng kết hợp với các framework khác như Angular, Vue.js hoặc thậm chí là JavaScript thuần (Vanilla JS).

---

### 3. Kiến trúc luồng dữ liệu của Redux (Redux structure)
Redux hoạt động dựa trên mô hình luồng dữ liệu một chiều khép kín (**One-way data flow**):

$$\text{React App} \xrightarrow{\text{Dispatch Event}} \text{Action} \longrightarrow \text{Reducer} \longrightarrow \text{Store} \longrightarrow \text{React App (Re-render)}$$

1.  **React App (Giao diện):** Người dùng tương tác (ví dụ: click nút) kích hoạt một sự kiện.
2.  **Action:** Gửi một yêu cầu hành động kèm dữ liệu payload tương ứng.
3.  **Reducer:** Nhận Action và State hiện tại để tính toán sinh ra một State mới hoàn toàn (pure function).
4.  **Store (Kho chứa):** Lưu trữ State mới và phát thông báo cập nhật giao diện người dùng React tái tạo (re-render) tương ứng.

---

### 4. Actions trong Redux
**Actions** là các gói thông tin (payloads) gửi dữ liệu từ ứng dụng của bạn tới kho chứa `Store`. Đây là **nguồn thông tin duy nhất** để cập nhật dữ liệu cho Store.

*   Một action bắt buộc phải có thuộc tính `type` để xác định loại hành động sẽ thực thi.
*   Có thể kèm theo thuộc tính `payload` để mang thông tin dữ liệu mới.

**Ví dụ về cấu trúc một Action:**
```javascript
{
  type: "ADD_TODO",
  payload: "Build my first Redux app"
}
```

*Cơ chế kích hoạt:* Khi người dùng tương tác trên **View** (ví dụ: Button Click), ứng dụng sẽ gọi một **Action Creator** (hàm tạo và trả về action) để phát đi (dispatch) action đó, dẫn đến sự thay đổi trạng thái (State Change) và cập nhật lại View.

---

### 5. Reducers trong Redux
**Reducers** định nghĩa cách thức mà trạng thái của ứng dụng thay đổi để phản hồi lại các action được gửi tới Store. 

> [!IMPORTANT]
> Hãy nhớ rằng các **Actions** chỉ mô tả *điều gì đã xảy ra*, chứ không mô tả *trạng thái ứng dụng thay đổi như thế nào*. Việc quyết định cách thay đổi trạng thái hoàn toàn là nhiệm vụ của **Reducers**.

*Cơ chế hoạt động:*
Hàm Reducer nhận vào giá trị trạng thái hiện tại (`current state`) cùng sự kiện hành động (`action`) được gửi đi (dispatch) và trả về một trạng thái hoàn toàn mới (`new state`) để lưu trữ vào `Store`.

$$\text{Dispatch} \ \{\text{current state}, \text{action}\} \longrightarrow \text{Reducer} \longrightarrow \text{New State} \ (\text{lưu vào Store})$$

---

### 6. Store trong Redux
**Store** là nơi lưu trữ toàn bộ cây trạng thái (state tree) của ứng dụng của bạn. 

*   Cách duy nhất để thay đổi trạng thái bên trong Store là phát đi một sự kiện hành động (**dispatch an action**) trên nó.
*   Hành động dispatch này sẽ kích hoạt hàm Reducer gốc (root reducer) tính toán và trả về trạng thái mới.

---

### 7. Sử dụng Redux Toolkit (RTK)
Trong quá khứ, việc thiết lập Redux Store thuần túy đòi hỏi phải viết rất nhiều mã nguồn cấu hình phức tạp (boilerplate code). Hiện nay, công cụ đồng hành **Redux Toolkit (RTK)** được khuyên dùng để đơn giản hóa quá trình cài đặt và cấu hình Redux.

#### 7.1 Cài đặt Redux Toolkit:
Để cài đặt Redux Toolkit và cầu nối react-redux (bao gồm cả các kiểu dữ liệu hỗ trợ TypeScript sẵn có), bạn chạy lệnh sau:

```bash
npm i @reduxjs/toolkit react-redux
```

#### 7.2 Tạo Store bằng `configureStore`:
Hàm `configureStore` tự động thiết lập store với các tùy chọn mặc định tối ưu (như kích hoạt DevTools và tích hợp sẵn middleware xử lý bất đồng bộ).

```javascript
import { configureStore } from '@reduxjs/toolkit';
import someFeatureReducer from './someFeatureSlice';

export const store = configureStore({
  reducer: {
    someFeature: someFeatureReducer, // Khai báo reducer quản lý nhánh state 'someFeature'
  },
});
```

#### 7.3 Tạo các lát cắt trạng thái bằng `createSlice`:
Hàm `createSlice` của Redux Toolkit cho phép bạn gộp chung việc định nghĩa giá trị state khởi tạo (`initialState`), các hàm reducers xử lý thay đổi, và tự động sinh ra các Action Creators tương ứng ở một nơi duy nhất.

```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  someValue: "",
  someOtherValue: ""
};

export const someSlice = createSlice({
  name: "someFeature",
  initialState,
  reducers: {
    // Redux Toolkit sử dụng thư viện Immer giúp bạn viết code đột biến trực tiếp (mutable code)
    // nhưng thực tế vẫn đảm bảo bất biến (immutable state) an toàn bên dưới.
    someAction: (state) => {
      state.someValue = "something";
    },
    anotherAction: (state) => {
      state.someOtherValue = "something else";
    },
  },
});
```

*   **Liên kết Reducer từ Slice vào Store:**
    Hàm reducer được tạo ra từ `createSlice` có thể được tham chiếu trực tiếp trong thuộc tính `reducer` của `configureStore` khi khởi tạo store:
    ```javascript
    export const store = configureStore({
      reducer: {
        someFeature: someSlice.reducer,
        // ... các reducers khác
      },
    });
    ```

#### 7.4 Cung cấp Store cho các Component (Providing the store)
Để các component trong ứng dụng React có thể truy cập được Redux Store, chúng ta sử dụng component **`<Provider>`** từ thư viện `react-redux` và truyền đối tượng `store` vào làm giá trị thuộc tính. Component `<Provider>` phải được đặt bao bọc bên trên toàn bộ các component cần quyền truy cập Store.

```jsx
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SomeComponent />
    <AnotherComponent />
  </Provider>
);
```

#### 7.5 Truy cập dữ liệu State từ Component bằng `useSelector`
Các component React có thể đọc dữ liệu trạng thái từ Redux Store bằng cách sử dụng hook **`useSelector`**:

```javascript
import { useSelector } from 'react-redux';

const someValue = useSelector((state) => state.someFeature.someValue);
```

#### 7.6 Phát đi sự kiện cập nhật bằng `useDispatch`
Để cập nhật state trong Store từ một component, chúng ta sử dụng hook **`useDispatch`** để lấy về hàm `dispatch`. Sau đó, truyền các action được sinh ra từ slice vào hàm này:

```javascript
import { useDispatch } from 'react-redux';
import { someSlice } from './someFeatureSlice';

function MyButton() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(someSlice.actions.someAction())}>
      Some button
    </button>
  );
}
```

---

### 8. Kết luận (Conclusion)
*   Redux được thiết kế nhằm khắc phục một số hạn chế của luồng truyền dữ liệu một chiều thuần túy trong React khi ứng dụng phình to.
*   Tuy nhiên, **Redux không phải là một giải pháp hoàn hảo cho mọi trường hợp**. Nó chỉ là một trong nhiều công cụ quản lý trạng thái có sẵn.
*   Không phải mọi tình huống xử lý dữ liệu đều cần tới Redux. Trong nhiều trường hợp, việc tích hợp thêm Redux sẽ làm tăng độ phức tạp không cần thiết (over-engineering) cho ứng dụng của bạn. Hãy cân nhắc kỹ lưỡng trước khi quyết định sử dụng.

---

## Phần 15. Thinking in React (Tư duy theo cách của React)
"Tư duy theo cách của React" là một triết lý thiết kế giúp bạn phân tích giao diện UI phức tạp và xây dựng ứng dụng React một cách có hệ thống, rõ ràng.

### 1. Start With A Mock (Bắt đầu với một bản thiết kế tĩnh)
Giả sử chúng ta đã có một tài liệu thiết kế tĩnh (mockup) từ Designer và một JSON API trả về dữ liệu mẫu có cấu trúc như sau:

```json
[
  { "category": "Sporting Goods", "price": "$49.99", "stocked": true, "name": "Football" },
  { "category": "Sporting Goods", "price": "$9.99", "stocked": true, "name": "Baseball" },
  { "category": "Sporting Goods", "price": "$29.99", "stocked": false, "name": "Basketball" },
  { "category": "Electronics", "price": "$99.99", "stocked": true, "name": "iPod Touch" },
  { "category": "Electronics", "price": "$399.99", "stocked": false, "name": "iPhone 5" },
  { "category": "Electronics", "price": "$199.99", "stocked": true, "name": "Nexus 7" }
]
```

---

### 2. Step 1: Break The UI Into A Component Hierarchy (Phân rã giao diện thành cây Component)
Đầu tiên, bạn vẽ các hộp bao quanh mọi component (và subcomponent) trong thiết kế mock và đặt tên cho chúng. Có 5 component chính được xác định:

1.  **`FilterableProductTable` (Màu cam):** Bao quát toàn bộ ứng dụng mẫu.
2.  **`SearchBar` (Màu xanh dương):** Nhận toàn bộ dữ liệu nhập của người dùng (ô tìm kiếm và checkbox).
3.  **`ProductTable` (Màu xanh lá):** Hiển thị và lọc danh sách sản phẩm dựa trên dữ liệu người dùng nhập.
4.  **`ProductCategoryRow` (Màu ngọc lam):** Hiển thị tiêu đề cho từng danh mục sản phẩm (Sporting Goods, Electronics...).
5.  **`ProductRow` (Màu đỏ):** Hiển thị một dòng thông tin chi tiết cho từng sản phẩm cụ thể.

#### Sắp xếp các Component theo thứ tự phân cấp (Component Hierarchy):
*   `FilterableProductTable`
    *   `SearchBar`
    *   `ProductTable`
        *   `ProductCategoryRow`
        *   `ProductRow`

---

### 3. Step 2: Build A Static Version in React (Xây dựng phiên bản tĩnh)
Để xây dựng một phiên bản tĩnh hiển thị mô hình dữ liệu của bạn, bạn hãy tạo các component tái sử dụng các component khác và truyền dữ liệu cho nhau chỉ bằng cách sử dụng **`props`**. 

> [!IMPORTANT]
> **Không sử dụng `state` trong phiên bản tĩnh này**. `State` chỉ được dành riêng cho các tính năng tương tác (interactivity) - tức là dữ liệu thay đổi theo thời gian. Vì đây là phiên bản tĩnh không cần tương tác động, bạn hoàn toàn không cần tới nó.

#### Phân biệt giữa Props và State (Props vs State):
*   **Props:** Là cách truyền dữ liệu từ component cha xuống component con (đối với component con nhận được, props là bất biến - immutable).
*   **State:** Là dữ liệu được quản lý cục bộ bên trong bản thân component đó, có thể thay đổi theo thời gian (mutable) thường thông qua các hàm xử lý tương tác của người dùng.

---

### 4. Step 3: Identify The Minimal (but complete) Representation Of UI State (Xác định cấu trúc State tối thiểu)
Liệt kê tất cả các mẩu dữ liệu có mặt trong ứng dụng của chúng ta:
*   Danh sách các sản phẩm gốc (Original list of products).
*   Văn bản tìm kiếm người dùng đã nhập (Search text).
*   Giá trị của checkbox ("Only show products in stock").
*   Danh sách các sản phẩm đã được lọc (Filtered list of products).

#### 3 câu hỏi để xác định một mẩu dữ liệu có phải là State hay không:
Để kiểm tra từng dữ liệu trên có phải là State không, hãy đặt 3 câu hỏi sau:
1.  **Nó có được truyền từ cha xuống qua props không?** Nếu có, nó có thể không phải là state.
2.  **Nó có giữ nguyên không thay đổi theo thời gian không?** Nếu có, nó chắc chắn không phải là state.
3.  **Bạn có thể tính toán ra nó dựa trên bất kỳ state hoặc props nào khác trong component không?** Nếu có, nó không phải là state.

#### Kết quả phân tích:
*   *Danh sách sản phẩm gốc:* Được truyền vào qua props $\longrightarrow$ **Không phải state**.
*   *Văn bản tìm kiếm:* Thay đổi theo thời gian gõ phím và không thể tính toán từ cái khác $\longrightarrow$ **Là State**.
*   *Giá trị checkbox:* Thay đổi khi click chọn và không thể tính toán từ cái khác $\longrightarrow$ **Là State**.
*   *Danh sách sản phẩm đã được lọc:* Có thể tính toán được bằng cách lấy *Danh sách sản phẩm gốc* kết hợp với *Văn bản tìm kiếm* và *Giá trị checkbox* $\longrightarrow$ **Không phải state** (chỉ là giá trị được tính toán trực tiếp lúc render).

---

### 5. Step 4: Identify Where Your State Should Live (Xác định nơi lưu trữ State)
Vì React hoạt động theo mô hình **luồng dữ liệu một chiều (one-way data flow)** từ trên xuống dưới, việc xác định component nào sẽ nắm giữ (own) state nào thường là phần thử thách nhất đối với người mới bắt đầu.

Để xác định vị trí đặt State hợp lý cho mỗi mẩu State trong ứng dụng:
1.  **Xác định mọi component** có tham gia render giao diện hoặc phụ thuộc vào state đó.
2.  **Tìm component chủ sở hữu chung (common owner component):** Là một component cha chung nằm phía trên tất cả các component cần sử dụng state đó trong cây phân cấp.
3.  **Đặt state tại:** Component chủ sở hữu chung đó, hoặc một component khác nằm ở cấp cao hơn trong cây phân cấp.
4.  **Tạo component chứa trung gian nếu cần:** Nếu bạn không tìm thấy component nào phù hợp để chứa state, hãy tạo một component mới chỉ nhằm mục đích giữ state này và đặt nó ở vị trí phía trên component chủ sở hữu chung.

#### Áp dụng vào ví dụ:
*   Cả hai State (*Văn bản tìm kiếm* và *Giá trị checkbox*) đều cần thiết cho `SearchBar` (để hiển thị giá trị ô nhập) và `ProductTable` (để lọc danh sách).
*   Component cha chung khớp gần nhất của cả hai là **`FilterableProductTable`**.
*   Do đó, chúng ta sẽ đặt hai state này nằm ở **`FilterableProductTable`**.

---

### 6. Step 5: Add Inverse Data Flow (Thêm luồng truyền dữ liệu ngược)
Hiện tại, ứng dụng đã truyền props và state xuôi từ cha (`FilterableProductTable`) xuống con (`SearchBar` và `ProductTable`). Bây giờ chúng ta cần hỗ trợ luồng dữ liệu ngược lại: **khi người dùng thay đổi dữ liệu trên biểu mẫu (Form), state ở component cha phải được cập nhật tương ứng**.

#### Cách triển khai:
*   Vì mỗi component chỉ có quyền cập nhật state của chính nó, component cha `FilterableProductTable` sẽ truyền các hàm callback xuống `SearchBar`.
*   Bên trong `SearchBar`, chúng ta lắng nghe sự kiện `onChange` trên các thẻ `<input>`. Khi sự kiện này xảy ra, nó sẽ kích hoạt hàm callback được truyền xuống từ cha.
*   Hàm callback này thực thi lệnh cập nhật state (như gọi `setState` hoặc hàm dispatcher cập nhật hook state) tại `FilterableProductTable`. State thay đổi sẽ kích hoạt re-render toàn bộ ứng dụng với dữ liệu mới.

---

## Phần 16. RESTful APIs with React (Làm việc với RESTful API trong React)

### 1. Định nghĩa RESTful API
**RESTful API** là một phong cách kiến trúc (architectural style) dành cho giao diện lập trình ứng dụng (API), sử dụng các yêu cầu HTTP (HTTP requests) để truy cập và thao tác với dữ liệu.

Các yêu cầu HTTP được dùng để thực thi các hành động như **GET**, **PUT**, **POST**, **PATCH**, và **DELETE**, tương ứng với các tác vụ đọc (reading), cập nhật (updating), tạo mới (creating) và xóa (deleting) tài nguyên.

---

### 2. Các thành phần chính của RESTful API (Main elements of RESTful API)

#### 2.1 Các thực thể tham gia:
*   **Client (Phía khách):** Mã nguồn phần mềm hoặc ứng dụng gửi yêu cầu (request) đòi hỏi tài nguyên từ máy chủ.
*   **Server (Phía máy chủ):** Mã nguồn phần mềm hoặc ứng dụng kiểm soát tài nguyên và gửi phản hồi (response) lại cho client.
*   **Resource (Tài nguyên):** Bất kỳ dữ liệu hay nội dung nào (văn bản, hình ảnh, video...) được máy chủ kiểm soát và cung cấp dựa trên yêu cầu từ client.

#### 2.2 Bốn thành phần chính trong một HTTP Request từ Client:
1.  **HTTP Method (Phương thức HTTP):** Chỉ ra hành động mong muốn thực thi trên tài nguyên (GET, POST, PUT, DELETE, PATCH...).
2.  **Endpoint (Điểm cuối):** Địa chỉ URL chỉ ra vị trí định vị tài nguyên trên server.
3.  **Header (Tiêu đề):** Chứa các thông tin chi tiết cần thiết để thực hiện cuộc gọi và xử lý phản hồi (ví dụ: thông tin xác thực Token, định dạng nội dung `Content-Type`).
4.  **Body (Thân):** Chứa thông tin dữ liệu gửi đi lên server (POST/PUT/PATCH) hoặc nhận về từ server.

#### 2.3 Bảng ánh xạ phương thức HTTP và hành động CRUD:
| HTTP Verb (Phương thức) | CRUD Action (Hành động) | Mô tả chi tiết |
| :--- | :--- | :--- |
| **POST** | Create | Tạo một tài nguyên mới |
| **GET** | Read | Đọc/Lấy dữ liệu tài nguyên |
| **PUT** | Update | Cập nhật toàn bộ tài nguyên |
| **PATCH** | Update | Cập nhật một phần của tài nguyên |
| **DELETE** | Delete | Xóa tài nguyên |

---

### 3. Lợi ích của RESTful API (Benefits of RESTful API)
RESTful API rất phổ biến trong phát triển phần mềm nhờ những ưu điểm vượt trội sau:
*   **Simplicity (Sự đơn giản):** Sử dụng các giao thức HTTP tiêu chuẩn phổ biến rộng rãi, giúp thiết kế, triển khai và sử dụng cực kỳ dễ dàng.
*   **Independence (Sự độc lập):** Độc lập hoàn toàn với nền tảng và ngôn ngữ lập trình. Lập trình viên có thể dùng hầu hết mọi ngôn ngữ (JavaScript, Python, Java, Go...) để xây dựng RESTful API.
*   **Flexibility (Sự linh hoạt):** Hỗ trợ truyền tải nhiều định dạng dữ liệu khác nhau, phổ biến nhất là **JSON**, ngoài ra còn có XML và văn bản thuần (plain text).
*   **Scalability (Khả năng mở rộng):** Đặc tính phi trạng thái (**Stateless**) của REST API hỗ trợ mở rộng hệ thống theo chiều ngang (horizontal scaling), cho phép xử lý song song khối lượng lớn các cuộc gọi API tải trọng cao.
*   **Cacheability (Khả năng lưu bộ nhớ đệm):** Hỗ trợ cơ chế bộ nhớ đệm (caching), cho phép lưu trữ dữ liệu tại bộ nhớ cục bộ để tối ưu tốc độ phản hồi.
*   **Security (Tính bảo mật):** REST API có thể bảo vệ các cuộc gọi và trao đổi dữ liệu an toàn thông qua các chuẩn xác thực phổ biến như Open Authorization (OAuth).
*   **Compatibility (Khả năng tương thích):** Việc sử dụng phân chia phiên bản (versioning) hợp lý (như `/v1/`, `/v2/`) giúp API dễ dàng cập nhật thêm tính năng mới theo thời gian nhưng vẫn đảm bảo tương thích ngược (backward compatibility) cho các client cũ.

---

### 4. Ví dụ về các Endpoint RESTful (Example of a RESTful endpoint)
Một địa chỉ Endpoint RESTful điển hình có cấu trúc dạng:
`GET https://api.example.com/users/1234`

Các mẫu đường dẫn URL RESTful phổ biến:
*   `/users`: Quản lý danh sách tài khoản người dùng.
*   `/posts`: Truy cập danh sách các bài viết.
*   `/posts/{postId}`: Xử lý thông tin chi tiết của một bài viết cụ thể dựa trên khóa `postId`.
*   `/reports?type=sales`: Lọc danh sách báo cáo dựa trên tham số truy vấn (query parameters) `type=sales`.

---

### 5. Khởi tạo một REST API giả lập với JSON Server (Creating a REST API)
Trong quá trình phát triển ứng dụng React, chúng ta thường cần một API để chạy thử nghiệm trước khi Backend hoàn thiện. Công cụ **JSON Server** là một giải pháp hoàn hảo giúp khởi tạo nhanh một REST API đầy đủ tính năng chỉ từ một file JSON tĩnh.

#### 5.1 Cài đặt JSON Server:
Bạn chạy lệnh sau trong terminal dự án để cài đặt JSON Server làm công cụ phát triển (DevDependency):

```bash
npm i -D json-server@0.17.4
```

#### 5.2 Tạo file dữ liệu mẫu `db.json`:
Tạo một file có tên là `db.json` tại thư mục gốc (root directory) của dự án React với nội dung dữ liệu JSON mẫu như sau:

```json
{
  "posts": [
    {
      "title": "Getting started with fetch",
      "description": "How to interact with backend APIs using fetch",
      "id": 1
    },
    {
      "title": "Getting started with useEffect",
      "description": "How to use React's useEffect hook for interacting with backend APIs",
      "id": 2
    }
  ]
}
```

#### 5.3 Cấu hình script khởi chạy trong `package.json`:
Mở file `package.json` và bổ sung thêm lệnh `"server"` vào khóa `"scripts"` để dễ dàng kích hoạt máy chủ API giả lập này:

```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "server": "json-server --watch db.json --port 3001"
}
```

*Giải thích câu lệnh:* Chạy `npm run server` sẽ khởi chạy JSON Server theo dõi (`--watch`) file `db.json` và mở cổng hoạt động tại port `3001` (để tránh xung đột với cổng `3000` mặc định của ứng dụng React).

#### 5.4 Chạy JSON Server:
Trong cửa sổ terminal, khởi động máy chủ API giả lập bằng lệnh:
```bash
npm run server
```
Khi chạy thành công, bạn có thể truy cập đường dẫn `http://localhost:3001/posts` trên trình duyệt để kiểm tra cấu trúc dữ liệu JSON phản hồi về.

---

### 6. Cài đặt và sử dụng Axios (Setup Axios)
Để gọi và xử lý dữ liệu từ REST API, thư viện **Axios** là một trong những HTTP Client dựa trên Promise (promise-based) phổ biến nhất cho trình duyệt và Node.js.

#### 6.1 Lệnh cài đặt Axios:
Chạy lệnh sau trong thư mục dự án của bạn:
```bash
npm install axios
```

#### 6.2 Kết hợp hook `useEffect` và `axios` để gọi API:
Chúng ta tạo trạng thái `postData` để lưu danh sách bài viết nhận được. Sử dụng hook `useEffect` với mảng phụ thuộc rỗng `[]` để chỉ kích hoạt hàm gọi API một lần duy nhất khi component được gắn vào giao diện (mount).

**Mã nguồn triển khai gọi API:**
```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [postData, setPostData] = useState([]);

  // Khai báo hàm bất đồng bộ thực hiện lấy dữ liệu từ API
  const fetchPostsData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/posts");
      setPostData(response.data); // Gán dữ liệu nhận được vào state
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu API: ", error);
    }
  };

  // Kích hoạt việc gọi API khi component mounted
  useEffect(() => {
    fetchPostsData();
  }, []);

  console.log(postData); // Theo dõi log kết quả ở console dev tools

  return (
    <div style={{ padding: '20px' }}>
      <h1>Danh sách bài viết</h1>
      <ul>
        {postData.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

### 7. Kết luận (Conclusion)
*   RESTful API cung cấp một phương pháp thiết kế giao diện dịch vụ web dễ dàng nhưng cực kỳ mạnh mẽ, có khả năng mở rộng tốt.
*   Bằng cách ràng buộc kiến trúc xung quanh các tài nguyên trung tâm được truy cập qua các phương thức HTTP tiêu chuẩn, REST đơn giản hóa việc phát triển ứng dụng kết nối mạng cho cả môi trường lập trình Web và Mobile.
*   Sự kết hợp giữa hệ thống công cụ hỗ trợ phong phú và khả năng mở rộng linh hoạt làm cho thiết kế RESTful trở thành trọng tâm cốt lõi của các API hiện đại, đồng thời duy trì khả năng sử dụng và mở rộng lâu dài cho ứng dụng.

---

## Phần 17. Middleware và Redux-thunk, Redux-saga

### 1. Khái niệm về Middleware (Phần mềm trung gian)
**Middleware** là một đoạn mã trung gian nằm giữa luồng gửi yêu cầu (request) và nhận phản hồi (response).
*   Nhiệm vụ của nó là tiếp nhận các yêu cầu đầu vào, thực thi các mã lệnh tương ứng để tiền xử lý hoặc thay đổi dữ liệu yêu cầu đó. Sau khi hoàn thành, nó sẽ gửi phản hồi ngay lập tức hoặc ủy quyền chuyển tiếp kết quả đến phần mềm trung gian tiếp theo trong hàng đợi (queue).
*   Middleware cung cấp các dịch vụ dùng chung và các khả năng nằm ngoài những gì hệ điều hành cung cấp. Các tác vụ quản lý dữ liệu, dịch vụ ứng dụng, truyền thông tin nhắn, xác thực người dùng và quản lý API thường do middleware đảm nhận.
*   Nó giúp lập trình viên phát triển ứng dụng hiệu quả hơn, đóng vai trò như chất liên kết (connective tissue) giữa các ứng dụng, dữ liệu và người dùng.

---

### 2. Middleware trong Redux (Middleware in Redux)
Trong Redux, **Middleware** đóng vai trò là một điểm trung gian nằm **sau khi một Action được phát đi (dispatch) và trước khi Action đó tiếp cận đến Reducer**.

$$\text{Dispatch Action} \longrightarrow \text{Middleware (gọi API / Log)} \longrightarrow \text{Reducer}$$

*   **Cơ chế hoạt động:** Khi một action được dispatch, nó sẽ đi qua các Middleware trước. Tại đây, Middleware có thể can thiệp để thực hiện các tác vụ phụ (side effects) như gọi API bên ngoài, ghi log (logging), trì hoãn action, hoặc thậm chí dispatch thêm các action khác trước khi gửi action ban đầu đến Reducer để cập nhật State.

---

### 3. Giới thiệu Redux Thunk (Redux Thunk)
**Redux Thunk** là một thư viện Middleware chính thức và phổ biến nhất cho Redux. Nó cho phép bạn viết các **Action Creators trả về một hàm (function) thay vì trả về một đối tượng Action thuần túy (plain object)**.

#### 3.1 Ưu điểm của Redux Thunk:
*   Cho phép thực hiện các thao tác bất đồng bộ (như gọi API bằng `fetch` hoặc `axios`).
*   Có thể phát đi nhiều action khác nhau tại các thời điểm khác nhau (ví dụ: phát action `FETCH_START`, gọi API, rồi phát action `FETCH_SUCCESS` khi có dữ liệu hoặc `FETCH_FAILURE` nếu lỗi).
*   Truy cập được trạng thái hiện tại (`getState`) của Store trước khi quyết định dispatch một action mới.

#### 3.2 Khái niệm hàm Thunk (Thunk Function):
Một **hàm thunk (thunk function)** là một hàm nhận vào hai tham số tự động từ Redux Store: phương thức **`dispatch`** và phương thức **`getState`**.

```javascript
// Khai báo một hàm thunk
const thunkFunction = (dispatch, getState) => {
  // Logic bất đồng bộ hoặc đọc state hiện tại ở đây
  const currentState = getState();
  
  if (currentState.someValue === "") {
    dispatch({ type: "ACTION_SUCCESS" });
  }
};

// Dispatch hàm thunk vào store
store.dispatch(thunkFunction);
```

#### 3.3 Viết Thunk Action Creator bằng cú pháp Arrow Function:
Trong thực tế, chúng ta thường viết các Action Creator trả về hàm thunk sử dụng cú pháp arrow function lồng nhau (Currying) rất ngắn gọn như sau:

```javascript
// Thunk Action Creator gọi API lấy thông tin todo theo ID
export const fetchTodoById = (todoId) => async (dispatch) => {
  try {
    const response = await client.get(`/fakeApi/todo/${todoId}`);
    // Dispatch một action object thông thường khi nhận được kết quả
    dispatch(todosLoaded(response.todos));
  } catch (error) {
    dispatch(todoLoadFailed(error.message));
  }
};
```

---

#### 3.4 Gọi Hàm Thunk từ Component trong React:
Chúng ta dispatch hàm thunk thu được bằng cách gọi Action Creator tương tự như cách dispatch các action thông thường khác qua hook `useDispatch`:

```javascript
import { useDispatch } from 'react-redux';
import { fetchTodoById } from './todoSlice';

function TodoComponent({ todoId }) {
  const dispatch = useDispatch();

  const onFetchClicked = () => {
    // Gọi thunk action creator và truyền hàm thunk vào hàm dispatch
    dispatch(fetchTodoById(todoId));
  };

  return <button onClick={onFetchClicked}>Tải Todo</button>;
}
```

#### 3.5 Các trường hợp sử dụng phổ biến của Redux Thunk:
Vì các hàm thunk là công cụ đa năng có chứa logic tùy ý, chúng được sử dụng rộng rãi cho:
*   Tách biệt logic xử lý phức tạp ra khỏi giao diện hiển thị của component.
*   Thực hiện các yêu cầu bất đồng bộ (như gọi HTTP API) hoặc logic bất đồng bộ khác.
*   Viết mã logic cần phát đi nhiều action liên tiếp nhau hoặc rải rác theo thời gian.
*   Viết logic cần truy xuất dữ liệu từ `getState` của Store để đưa ra quyết định xử lý hoặc nhúng giá trị state khác vào action.

---

### 4. Giới thiệu Redux Saga (Redux Saga)
**Redux Saga** là một thư viện hỗ trợ xử lý các tác vụ phụ (side effects) trong ứng dụng (như lấy dữ liệu bất đồng bộ và các thao tác không thuần khiết như truy xuất bộ nhớ đệm trình duyệt) một cách dễ quản lý, thực thi hiệu quả, dễ kiểm thử (test) và xử lý lỗi tốt hơn.

*   **Mô hình tư duy (Mental model):** Một Saga giống như một luồng chạy riêng biệt (**separate thread**) trong ứng dụng của bạn, chịu trách nhiệm độc lập hoàn toàn cho các side effects.
*   Redux Saga sử dụng tính năng **Generator function** của ES6 (`function*` kết hợp từ khóa `yield`) giúp viết mã bất đồng bộ trông giống như đồng bộ.

#### 4.1 Ví dụ khởi tạo Hello Saga (`sagas.ts`):
```typescript
// Định nghĩa Generator function* cho Saga
export function* helloSaga() {
  console.log('Hello Sagas!');
}
```

#### 4.2 Cấu hình đưa Saga Middleware vào Redux Store:
Để chạy Saga, chúng ta cần:
1.  Khởi tạo đối tượng Middleware bằng `createSagaMiddleware()`.
2.  Liên kết Saga Middleware này vào Redux Store bằng `applyMiddleware()`.
3.  Kích hoạt chạy Saga bằng cách gọi hàm `.run(rootSaga)`.

```javascript
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './sagas';
import { reducer } from './reducer';

// 1. Tạo Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// 2. Kết nối Saga Middleware vào Redux store khi khởi tạo
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

// 3. Khởi chạy Saga
sagaMiddleware.run(helloSaga);

const action = (type) => store.dispatch({ type });
```

---

### 5. Kết luận (Conclusion)
*   **Middleware** là một trong những thành phần quan trọng nhất trong bất kỳ dự án nào để giải quyết các tác vụ phụ (side effects) hoặc làm việc trực tiếp với máy chủ (server).
*   Có rất nhiều thư viện hỗ trợ triển khai Middleware trong Redux như: `redux-saga`, `redux-thunk`, `redux-promise`,...
*   Trong đó, **Redux-thunk** và **Redux-saga** là hai thư viện quản lý trạng thái phổ biến nhất giúp cho việc sử dụng Middleware trở nên dễ dàng và đơn giản hơn rất nhiều.





























