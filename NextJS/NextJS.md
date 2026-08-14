
## 1. Next.js Fundamentals (Cơ bản về Next.js)

### 1.1. What is Next.js? (Next.js là gì?)
- **Định nghĩa:** Next.js là một React Framework mạnh mẽ dùng để xây dựng các ứng dụng web full-stack (Full-web applications).
- **Khác biệt cốt lõi với React.js:**
  - **React.js** thuần túy hoạt động theo cơ chế **CSR (Client-Side Rendering)**: Trình duyệt tải về một file HTML rỗng cùng với các file JavaScript, sau đó mới thực thi JavaScript để dựng giao diện.
  - **Next.js** hỗ trợ **SSR (Server-Side Rendering)** và nhiều cơ chế render linh hoạt khác.

### 1.2. Server-side Rendering (SSR) trong Next.js
Với Server-side Rendering (SSR):
- **Server generates full HTML:** Máy chủ nhận yêu cầu, xử lý dữ liệu và tạo sẵn toàn bộ mã HTML hoàn chỉnh trước khi gửi về cho trình duyệt.
- **Browser displays content immediately:** Trình duyệt hiển thị nội dung cho người dùng ngay lập tức mà không cần chờ tải và chạy xong mã JavaScript phức tạp.
- **Pros (Ưu điểm):**
  - **Great SEO:** Bot của các máy tìm kiếm (Google, Bing...) dễ dàng cào nội dung và đánh chỉ mục (index) do HTML đã có sẵn nội dung đầy đủ.
  - **Faster First Contentful Paint (FCP):** Giúp nâng cao trải nghiệm người dùng vì trang hiển thị khung hình/nội dung đầu tiên cực kỳ nhanh chóng.

### 1.3. Why Next.js? (Tại sao nên sử dụng Next.js?)
1. **Hybrid Rendering (Cơ chế render linh hoạt):**
   - Hỗ trợ đa dạng các phương thức render trong cùng một dự án: **SSR** (Server-Side Rendering), **SSG** (Static Site Generation), và **CSR** (Client-Side Rendering).
2. **File-system Routing (Điều hướng dựa trên hệ thống tệp):**
   - Các thư mục và tệp tin tự động định nghĩa đường dẫn (routes) cho ứng dụng. Không cần thiết lập thủ công các thư viện điều hướng phức tạp như `react-router-dom`.
3. **API Routes:**
   - Cho phép xây dựng các điểm cuối Backend (Backend endpoints / API) trực tiếp ngay bên trong cùng dự án Next.js mà không cần khởi tạo server Node.js riêng.
4. **Automatic Optimization (Tự động tối ưu hóa):**
   - Tự động tối ưu hóa tài nguyên hệ thống bao gồm: **Images** (Hình ảnh), **Fonts** (Phông chữ), và **Scripts** (Mã kịch bản) nhằm đạt hiệu năng tải trang tối đa.

---

## 2. Setting Up Your First Next.js Project (Khởi tạo dự án Next.js đầu tiên)

Để bắt đầu một dự án Next.js mới, chúng ta sử dụng công cụ dòng lệnh `create-next-app`. Công cụ này tự động thiết lập toàn bộ cấu trúc và môi trường cần thiết, bao gồm cả cấu trúc thư mục App Router mặc định.

### 2.1. Prerequisites (Yêu cầu tiên quyết)
- **Node.js:** Phiên bản **18.17** hoặc mới hơn.

### 2.2. Khởi tạo dự án
Mở Terminal/Command Prompt và chạy lệnh sau:

```bash
npx create-next-app@latest
```

Công cụ `create-next-app` sẽ hỏi bạn một chuỗi câu hỏi thiết lập cấu hình ban đầu (ví dụ: dùng TypeScript, Tailwind CSS, ESLint...). Bạn có thể nhấn **Enter** để chấp nhận cấu hình mặc định hoặc tùy chỉnh theo mong muốn:

```bash
✔ What is your project named? ... my-next-app
✔ Would you like to use TypeScript? ... Yes
✔ Would you like to use ESLint? ... Yes
✔ Would you like to use Tailwind CSS? ... Yes
✔ Would you like to use the `src/` directory? ... No
✔ Would you like to use App Router? (recommended) ... Yes
✔ Would you like to customize the default import alias? ... No
```

### 2.3. Khởi chạy môi trường phát triển (Development Server)
Sau khi quá trình cài đặt hoàn tất, di chuyển vào thư mục dự án và khởi chạy máy chủ phát triển:

```bash
cd my-next-app
npm run dev
```

Bây giờ, mở trình duyệt web và truy cập vào đường dẫn `http://localhost:3000` để xem trang chủ vừa được tạo.

---

## 3. Understanding the `app/` Directory Structure (Tìm hiểu cấu trúc thư mục `app/`)

**App Router** giới thiệu mô hình điều hướng dựa trên hệ thống tệp (file-system-based routing) nằm bên trong thư mục `app/`. Mỗi thư mục con bên trong `app` đại diện cho một phân đoạn URL (URL segment). Giao diện (UI) cho từng route được định nghĩa bằng các tệp đặc biệt như `page.tsx` và `layout.tsx`.

### 3.1. Cấu trúc thư mục minh họa

```text
my-next-app/
└── app/
    ├── layout.tsx      # Root layout, áp dụng cho toàn bộ ứng dụng
    ├── page.tsx        # UI cho trang chủ (route '/')
    ├── globals.css     # CSS dùng chung cho toàn ứng dụng
    │
    └── dashboard/      # Định nghĩa route '/dashboard'
        ├── layout.tsx  # Layout riêng cho route /dashboard và các route con của nó
        ├── page.tsx    # UI cho route '/dashboard'
        │
        └── settings/   # Định nghĩa route '/dashboard/settings'
            └── page.tsx # UI cho route '/dashboard/settings'
```

### 3.2. Special File Conventions (Các quy ước tệp tin đặc biệt)
Next.js App Router cung cấp các quy ước đặt tên tệp đặc biệt để xử lý các hành vi UI cụ thể:

- **`layout.tsx`:** Định nghĩa giao diện dùng chung (shared UI) bọc quanh nhiều trang con.
- **`page.tsx`:** Giao diện chính, duy nhất đại diện cho một đường dẫn (route) cụ thể.
- **`loading.tsx`:** Giao diện hiển thị trạng thái chờ trong khi dữ liệu của trang đang được tải (sử dụng React Suspense bên dưới).
- **`error.tsx`:** Giao diện hiển thị khi có lỗi phát sinh bên trong một route.
- **`route.ts`:** Dùng để tạo các điểm cuối API (API endpoints).
- **`not-found.tsx`:** Định nghĩa giao diện hiển thị khi một đường dẫn không được tìm thấy (Lỗi 404).
- **`metadata.ts`:** Dùng để quản lý các thông tin thẻ meta của trang phục vụ SEO (tiêu đề, mô tả, hình ảnh xem trước...).
- **`template.tsx`:** Một component tương tự `layout.tsx` nhưng sẽ tạo một instance mới (re-mount) mỗi khi người dùng chuyển trang.

---

## 4. Layouts and Nested Routing (Layout và Điều hướng lồng nhau)

### 4.1. Khái niệm Layout
Layouts là các components nhận prop `children` và render nó. Layout cho phép bạn tạo các phần tử giao diện dùng chung (như headers, footers, và sidebars) mà **không bị re-render** khi người dùng chuyển đổi qua lại giữa các trang con.

Khi bạn tạo một tệp `layout.tsx` bên trong một thư mục, nó sẽ tự động bọc (wrap) tất cả các tệp `page.tsx` và các layout con nằm bên trong thư mục đó. Các Layout có tính chất **lồng nhau (nested)**, tạo thành một hệ thống phân cấp component (component hierarchy).

### 4.2. Cấu trúc lồng nhau (Nested Structure)

```text
+-----------------------------------------------------------------------+
| Root Layout (app/layout.tsx)                                         |
| <html>, <body>, <Header>, <Footer>                                    |
|                                                                       |
|   +---------------------------------------------------------------+   |
|   | Dashboard Layout (app/dashboard/layout.tsx)                   |   |
|   | <Sidebar>                                                     |   |
|   |                                                               |   |
|   |   +-------------------------------------------------------+   |   |
|   |   | Page Content (app/dashboard/settings/page.tsx)       |   |   |
|   |   | {children}                                            |   |   |
|   |   +-------------------------------------------------------+   |   |
|   +---------------------------------------------------------------+   |
+-----------------------------------------------------------------------+
```

### 4.3. Ví dụ mã nguồn minh họa

#### A. Root Layout (`app/layout.tsx`)
Đây là layout cấp cao nhất (top-level layout). Nó là **bắt buộc** và phải chứa các thẻ `<html>` và `<body>`.

```tsx
// app/layout.tsx
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', background: '#eee' }}>
          My Awesome Website
        </header>
        <main>{children}</main>
        <footer style={{ padding: '1rem', background: '#eee', marginTop: '2rem' }}>
          Copyright 2025
        </footer>
      </body>
    </html>
  );
}
```

#### B. Dashboard Layout (`app/dashboard/layout.tsx`)
Layout này chỉ áp dụng cho các trang nằm bên trong đường dẫn `/dashboard`.

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ display: 'flex' }}>
      <nav style={{ width: '200px', padding: '1rem', background: '#f0f0f0' }}>
        <p>Dashboard Sidebar</p>
        <ul>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div style={{ flex: 1, padding: '1rem' }}>
        {children}
      </div>
    </section>
  );
}
```

---

## 5. Server and Client Components (Server Component và Client Component)

App Router trong Next.js giới thiệu hai loại component chính: **Server Components** và **Client Components**.

### 5.1. Server Components (Mặc định)
- **Run only on the server:** Chỉ chạy và xử lý mã trên máy chủ (server). Mã nguồn JavaScript của nó không bị gửi xuống trình duyệt.
- **Không thể sử dụng Hooks:** Không thể dùng các React Hooks (`useState`, `useEffect`...) hoặc các API chỉ có trên trình duyệt (như `window`, `document`, `localStorage`).
- **Tối ưu tài nguyên Backend:** Lý tưởng cho việc truy cập trực tiếp vào tài nguyên phía backend (cơ sở dữ liệu, API nội bộ) và giúp giảm thiểu dung lượng JavaScript gửi về client.
- **Mặc định:** Tất cả các components nằm trong thư mục `app` đều là Server Components theo mặc định.

### 5.2. Client Components
- **Khai báo directive `"use client":`** Để biến một component thành Client Component, bạn phải thêm câu lệnh `"use client";` ở ngay dòng đầu tiên của tệp tin.
- **Cơ chế hoạt động:** Được render trước trên server (SSR) để lấy HTML ban đầu và sau đó được **"hydrated"** (bơm tương tác) trên phía client để có thể tương tác đầy đủ.
- **Hỗ trợ tương tác:** Có thể sử dụng React Hooks (`useState`, `useEffect`), quản lý state, và lắng nghe/xử lý các sự kiện của người dùng (`onClick`, `onChange`...).

### 5.3. Ví dụ mã nguồn minh họa (Code Examples)

#### A. Data-fetching Server Component (`app/posts/page.tsx`)
Component này sử dụng `async/await` để thực hiện lấy dữ liệu (fetch data) trực tiếp ngay trên máy chủ (Server).

```tsx
// app/posts/page.tsx

// Function này chỉ chạy hoàn toàn trên server
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

// Đây là một Server Component
export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
```

#### B. Interactive Client Component (`components/Counter.tsx`)
Component này sử dụng `useState` và sự kiện `onClick`, vì vậy nó **bắt buộc** phải là một Client Component (khai báo `"use client"` ở dòng đầu tiên).

```tsx
// components/Counter.tsx
"use client"; // Đánh dấu đây là một Client Component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

---

## 6. Creating Dynamic Routes (Tạo các đường dẫn động)

Thay vì tạo hàng loạt file riêng biệt cho từng bài viết blog hoặc sản phẩm, bạn chỉ cần tạo một mẫu (template) duy nhất với **Dynamic Routes**. 
Trong App Router của Next.js, điều này cực kỳ đơn giản: bạn chỉ cần bọc tên thư mục trong cặp dấu ngoặc vuông, ví dụ `[folderName]`. Bất kỳ giá trị nào người dùng nhập trên URL tại vị trí đó sẽ được truyền vào component dưới dạng prop `params`.

### 6.1. Cấu trúc thư mục (Structure Diagram)
Cấu trúc thư mục để tạo các trang bài viết blog động:

```text
app/
└── blog/
    └── [slug]/          <-- Thư mục động (Dynamic folder)
        └── page.tsx     <-- Mẫu (Template) cho mỗi bài viết
```

### 6.2. Ví dụ mã nguồn (Example)
Component trang sẽ nhận được prop `params` chứa giá trị `slug` từ URL.

```tsx
// app/blog/[slug]/page.tsx

// Component này sẽ render cho các URL như /blog/hello-world, /blog/another-post
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // params sẽ có dạng { slug: 'hello-world' } đối với URL /blog/hello-world

  // Bạn có thể dùng params.slug để fetch dữ liệu cho bài viết cụ thể:
  // const postData = await getPostBySlug(params.slug);

  return (
    <div>
      <h1>Post: {params.slug}</h1>
      {/* Hiển thị nội dung bài viết tại đây */}
    </div>
  );
}
```

---

## 7. Nested Routes and Layouts (Route và Layout lồng nhau)

Khi cấu trúc trang trở nên phức tạp (ví dụ: trang trang cá nhân người dùng với nhiều tiểu mục khác nhau), bạn có thể lồng các route động lại với nhau. Đặt một file `layout.tsx` bên trong thư mục động (ví dụ `[userId]`), bạn sẽ tạo ra một giao diện dùng chung (như Sidebar) hiển thị xuyên suốt trên tất cả các trang con của người dùng đó.

### 7.1. Cấu trúc thư mục (Structure Diagram)
Cấu trúc thư mục cho trang dashboard người dùng kèm các trang con:

```text
app/
└── users/
    └── [userId]/        <-- Route động cho người dùng
        ├── layout.tsx   <-- Layout dùng chung cho người dùng cụ thể
        ├── page.tsx     <-- Trang tổng quan (overview) của người dùng
        └── settings/
            └── page.tsx <-- Trang cài đặt của người dùng
```

### 7.2. Ví dụ mã nguồn (Example)

#### A. User Layout (`app/users/[userId]/layout.tsx`)
Layout này sẽ áp dụng cho `/users/123`, `/users/123/settings`, v.v.

```tsx
// app/users/[userId]/layout.tsx

export default function UserProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { userId: string };
}) {
  return (
    <section>
      <aside>
        <h2>User Profile {params.userId}</h2>
        {/* Các liên kết điều hướng cho người dùng */}
      </aside>
      <main>{children}</main>
    </section>
  );
}
```

#### B. Settings Page (`app/users/[userId]/settings/page.tsx`)
Component này sẽ render tại URL `/users/123/settings`.

```tsx
// app/users/[userId]/settings/page.tsx

export default function UserSettingsPage({ params }: { params: { userId: string } }) {
  return (
    <div>
      <h3>Settings for user {params.userId}</h3>
      {/* Form cài đặt */}
    </div>
  );
}
```

---

## 8. Catch-all and Optional Catch-all Routes (Route gom tất cả và Route gom tất cả tùy chọn)

### 8.1. Catch-all Routes (`[...folderName]`)
Khi bạn cần bắt (scoop up) toàn bộ các đường dẫn sâu bất kỳ trên URL (ví dụ: các trang tài liệu kỹ thuật - documentation site), bạn sử dụng **Catch-all Routes**. Thêm 3 dấu chấm vào bên trong cặp dấu ngoặc vuông `[...folderName]`.

- **Cấu trúc:** `app/docs/[...slug]/page.tsx`
- **Các URL khớp (Matching URLs):**
  - `/docs/getting-started` $\rightarrow$ `params` sẽ là `{ slug: ['getting-started'] }`
  - `/docs/routing/dynamic-routes` $\rightarrow$ `params` sẽ là `{ slug: ['routing', 'dynamic-routes'] }`

### 8.2. Optional Catch-all Routes (`[[...folderName]]`)
Nếu bạn muốn đường dẫn gom tất cả đó hoạt động cho **cả trang gốc** mà không cần bất kỳ đường dẫn con nào bổ sung (giao diện tìm kiếm/bộ lọc sản phẩm), sử dụng **Optional Catch-all Routes** với cặp dấu ngoặc vuông kép `[[...folderName]]`.

- **Cấu trúc:** `app/shop/[[...filters]]/page.tsx`
- **Các URL khớp (Matching URLs):**
  - `/shop` $\rightarrow$ `params` sẽ là `{}` (rỗng)
  - `/shop/shoes` $\rightarrow$ `params` sẽ là `{ filters: ['shoes'] }`
  - `/shop/shoes/red` $\rightarrow$ `params` sẽ là `{ filters: ['shoes', 'red'] }`

---

## 9. Using the `<Link>` Component for Navigation (Sử dụng Component `<Link>` để điều hướng)

Để di chuyển giữa các trang, cách chính là sử dụng Component `<Link>` của Next.js (`import Link from 'next/link'`).

### 9.1. Cơ chế hoạt động (How it works)
`<Link>` giúp trang web hoạt động mượt mà như một ứng dụng đơn trang (SPA):
- Khi người dùng click vào link, trang được chuyển đổi mà **không bị tải lại toàn bộ trang** (no full-page reload).
- Next.js tự động **tải trước (pre-loads)** trang tiếp theo ở nền (background), giúp thao tác chuyển trang diễn ra gần như tức thì.

```text
User Clicks <Link href="/about">
  └─► Next.js (Prevents default browser behavior)
        └─► JavaScript (Renders the new page's component)
              └─► Browser (Updates the URL & displays new UI without page reload)
```

### 9.2. Ví dụ mã nguồn (Example)
Sử dụng `<Link>` trong một component Header để điều hướng đến cả trang tĩnh và trang động.

```tsx
// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  const blogPostSlug = 'my-first-post';

  return (
    <nav style={{ display: 'flex', gap: '1rem' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>

      {/* Link tới một dynamic route */}
      <Link href={`/blog/${blogPostSlug}`}>
        First Post
      </Link>
    </nav>
  );
}
```

---

## 10. Programmatic Navigation (Điều hướng bằng mã lệnh)

Khi bạn muốn chuyển hướng người dùng tới một trang khác **sau khi** họ thực hiện một hành động (như gửi form hoặc đăng nhập thành công), bạn không thể dùng `<Link>` mà phải sử dụng **Programmatic Navigation**.

### 10.1. Hook `useRouter()` & `usePathname()`
- **`useRouter()`:** Cung cấp hàm `router.push('/your-path')` để thực hiện chuyển hướng. 
  - *Lưu ý:* Vì đây là thao tác tương tác người dùng, component phải là **Client Component** (khai báo `"use client";`).
- **`usePathname()`:** Hook giúp lấy đường dẫn URL hiện tại của trang.

### 10.2. Luồng xử lý (Execution Flow)

```text
[User Action (e.g. Clicks Login Button)] ──► [Event Handler (e.g. handleLogin)] ──► [Call router.push('/dashboard')] ──► [User is redirected to Dashboard page]
```

### 10.3. Ví dụ mã nguồn minh họa (Example)
Ví dụ về một Nút đăng nhập (`LoginButton`) sẽ tự động chuyển hướng người dùng sang trang `/dashboard` sau khi click.

```tsx
// components/LoginButton.tsx
'use client'; // Bắt buộc phải là a Client Component

import { useRouter } from 'next/navigation';

export default function LoginButton() {
  const router = useRouter();

  function handleLogin() {
    // ... (Xử lý logic đăng nhập tại đây)

    // Chuyển hướng người dùng sang trang dashboard
    router.push('/dashboard');
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}
```

---

## 11. Data Fetching Strategies (Các chiến lược lấy dữ liệu)

### 11.1. Từ Client-Side Fetching sang Server Components
- **Trước đây (React thuần):** Phụ thuộc vào việc lấy dữ liệu ở phía Client thông qua `useEffect`, thường dẫn đến hiện tượng dịch chuyển giao diện (layout shifts) và hiệu ứng giật lag mạng nối tiếp (network waterfalls).
- **Hiện tại (Next.js Server Components):** Cho phép bạn lấy dữ liệu trực tiếp ngay trên máy chủ (Server) trước khi render giao diện.
- **Lợi ích:**
  - Loại bỏ hoàn toàn việc xử lý tính toán phía Client.
  - Ẩn an toàn các API keys nhạy cảm (không bị lộ ra trình duyệt).
  - Trả về mã HTML đầy đủ nội dung cho trình duyệt giúp hiển thị tức thì và tối ưu SEO vượt trội.

```tsx
// ✅ Cách làm của Next.js (Server Component)
async function Profile() {
  // Trực tiếp gọi DB hoặc Fetch dữ liệu trên Server
  const data = await db.user.findFirst();
  return <div>{data.name}</div>;
}

// ❌ Cách làm cũ (Client-Side trong React)
function Profile() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <Spinner />;
  return <div>{data.name}</div>;
}
```

### 11.2. Static Data vs Dynamic Data (Dữ liệu tĩnh & Dữ liệu động)

Để lấy dữ liệu hiệu quả, cần phân biệt giữa tính đồng nhất (consistency) và độ tươi mới (freshness) của dữ liệu:

1. **Static Data (Dữ liệu tĩnh - Mặc định):**
   - Được lấy một lần duy nhất tại thời điểm build (`build time`) và được cache toàn cục (giống như một tờ báo in).
   - Mang lại tốc độ tối đa cho các nội dung hiếm khi thay đổi (Blogs, trang tài liệu).
   ```tsx
   // 1. Static Data (Default)
   fetch('https://api.example.com/posts', { cache: 'force-cache' });
   ```

2. **Dynamic Data (Dữ liệu động):**
   - Được lấy mới trên mỗi yêu cầu (request) từ người dùng (giống như bảng điểm trận đấu trực tiếp).
   - Đảm bảo người dùng luôn nhận được thông tin cập nhật theo thời gian thực (real-time).
   ```tsx
   // 2. Dynamic Data
   fetch('https://api.example.com/stocks', { cache: 'no-store' });
   ```

---

## 12. Fetching Data with Server Components (`async/await`)

Trong App Router, tất cả các component mặc định đều là **Server Components**. Điều này cho phép bạn lấy dữ liệu một cách đơn giản và trực tiếp bằng cách sử dụng cú pháp `async/await` ngay bên trong component.

### 12.1. Luồng hoạt động (Execution Flow)

```text
Client Sends Request
  │
  ▼
Next.js Server Receives Request
  │
  ▼
Server Component Executes
  │
  ▼
`await fetch(...)` Waits for Data to Return
  │
  ▼
Server Renders HTML with Data
  │
  ▼
Complete HTML is Sent to Client
```

### 12.2. Ví dụ mã nguồn minh họa (Example)
Lấy danh sách bài viết từ một API và hiển thị ra giao diện.

```tsx
// app/posts/page.tsx

// Hàm fetch dữ liệu có thể định nghĩa bên trong hoặc bên ngoài component.
// Next.js tự động mở rộng hàm fetch() gốc và thực hiện cache dữ liệu theo mặc định.
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// Đây là một Server Component
export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

---

## 13. Static Generation with `generateStaticParams` (Tạo trang tĩnh với `generateStaticParams`)

**Static Site Generation (SSG)** cho phép bạn pre-render (dựng sẵn) các trang HTML ngay tại thời điểm build. Với các đường dẫn động (ví dụ: `[slug]`), bạn cần khai báo cho Next.js biết những tham số nào cần được pre-render trước.

Hàm `generateStaticParams` trả về một mảng chứa các đối tượng `params`. Next.js sẽ duyệt qua mảng này và tạo sẵn file HTML tĩnh cho từng đường dẫn, giúp tăng tốc độ tải trang tối đa và giảm tải cho máy chủ.

### 13.1. Luồng xử lý trong quá trình Build (Build Flow)

```text
Build Process Starts
  │
  ▼
Next.js Runs `generateStaticParams`
  │
  ▼
Receives Array of Params (e.g., [{ slug: 'post-1' }, { slug: 'post-2' }])
  │
  ▼
Loop Through Each Param:
  - Fetch data for the page
  - Render the page to static HTML
  │
  ▼
Static HTML files are saved and ready to be served
```

### 13.2. Ví dụ mã nguồn minh họa (Example)
Tạo sẵn các trang tĩnh cho một vài bài viết blog tại thời điểm build.

```tsx
// app/blog/[slug]/page.tsx

// 1. Cho Next.js biết các slug nào cần build sẵn
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts?_limit=3').then((res) => res.json());

  // Trả về một mảng chứa các đối tượng params
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

// 2. Component trang sẽ sử dụng params để fetch dữ liệu
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Lấy dữ liệu cho bài viết cụ thể dựa trên slug
  const post = await fetch(`https://api.example.com/posts/${params.slug}`).then((res) => res.json());

  return <h1>{post.title}</h1>;
}
```

---

## 14. Server-side Rendering and Streaming UI (Server-side Rendering và Streaming UI)

**Server-side Rendering (SSR)** là hành vi mặc định cho các trang động (dynamic pages) không được tạo tĩnh. Với SSR, mã HTML của trang được tạo ra trên server cho mỗi request gửi tới.

**Streaming UI** là một cải tiến mạnh mẽ trong App Router. Thay vì bắt người dùng phải chờ toàn bộ trang render xong hoàn toàn, Next.js sẽ ngay lập tức gửi về phần vỏ giao diện tĩnh (static UI shell như layout) kèm trạng thái chờ (loading state). Sau đó, khi dữ liệu được lấy xong trên server, nội dung động sẽ được **"streamed"** (truyền dòng) về để thay thế trạng thái loading. Kỹ thuật này đạt được nhờ tệp `loading.tsx` và `React Suspense`.

### 14.1. Luồng hoạt động của Streaming UI (Execution Flow)

```text
Client Sends Request
  │
  ▼
Server Immediately Sends:
  - The page shell (Layout)
  - The fallback UI from `loading.tsx`
  │
  ▼
(Meanwhile on the server)
  - Server Component is `await`ing data...
  │
  ▼
Data is available, Server Renders Content
  │
  ▼
Server "Streams" the Complete Content HTML to the Client
  │
  ▼
Client Replaces the Fallback UI with the Complete Content
```

### 14.2. Ví dụ mã nguồn minh họa (Example)
Tạo trạng thái loading cho một trang Dashboard.

```tsx
// app/dashboard/loading.tsx

// Component này sẽ tự động hiển thị trong khi page.tsx đang fetch data
export default function Loading() {
  return <p>Loading dashboard data...</p>;
}
```

```tsx
// app/dashboard/page.tsx

async function getDashboardData() {
  // Giả lập một network request chậm 2 giây
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return { revenue: 12345 };
}

export default async function DashboardPage() {
  const data = await getDashboardData();
  return <h1>Revenue: {data.revenue}</h1>;
}
```

---

## 15. Client-side Data Fetching (Hooks & SWR) (Lấy dữ liệu phía Client với Hooks & SWR)

Đôi khi bạn cần lấy dữ liệu trực tiếp từ phía client, đặc biệt cho các dữ liệu thay đổi thường xuyên hoặc phụ thuộc vào tương tác người dùng (ví dụ: dashboard cá nhân).

Bạn có thể sử dụng các React hooks thuần như `useEffect` và `useState`, hoặc sử dụng các thư viện mạnh mẽ hơn như **SWR** hoặc **React Query** để xử lý việc lấy dữ liệu, caching, và làm mới dữ liệu (revalidation) một cách hiệu quả.
Các Components sử dụng phương pháp này **bắt buộc phải là Client Component** (`"use client";`).

### 5.1. Luồng hoạt động của SWR (Execution Flow)

```text
Component Renders
  │
  ▼
SWR Hook is Called
  │
  ▼
SWR Returns Cached Data (if available) -> Displays immediately
  │
  ▼
(In the background) SWR Sends Fetch Request to API
  │
  ▼
API Returns New Data
  │
  ▼
SWR Updates Cache and Re-renders Component with New Data
```

### 5.2. Ví dụ mã nguồn minh họa với SWR (Example)
Lấy thông tin trang cá nhân của người dùng bằng thư viện `swr`.

```tsx
// components/UserProfile.tsx
'use client';

import useSWR from 'swr';

// Hàm fetcher sẽ được SWR sử dụng để lấy dữ liệu
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function UserProfile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return <h1>Hello, {data.name}!</h1>;
}
---

## 6. Creating and Using API Routes (Tạo và sử dụng API Routes)

App Router cung cấp một phương pháp đơn giản để tạo ra các điểm cuối API (API endpoints) bằng cách tạo tệp `route.ts` (hoặc `.js`) bên trong thư mục route tương ứng.

Bạn có thể export các hàm bất đồng bộ (`async functions`) được đặt tên theo các phương thức HTTP tiêu chuẩn (ví dụ: `GET`, `POST`, `PUT`, `DELETE`). Điều này cho phép bạn xây dựng một backend hoàn chỉnh trực tiếp ngay bên trong ứng dụng Next.js, rất tiện lợi cho việc xử lý các yêu cầu phía Client hoặc giao tiếp an toàn với các dịch vụ bên ngoài.

### 6.1. Cấu trúc thư mục & Luồng yêu cầu (Folder Structure & Request Flow)

```text
Folder Structure:
app/
└── api/
    └── users/
        └── route.ts

Request from Client:
Client Component ─── GET /api/users ───► Your Endpoint
                                             │
                                             ▼
                                 GET function in `route.ts` is executed
                                             │
                                             ▼
                                      Returns JSON Data
```

### 6.2. Ví dụ mã nguồn minh họa (Example)
Tạo một điểm cuối API đơn giản trả về danh sách người dùng.

```tsx
// app/api/users/route.ts

import { NextResponse } from 'next/server';

// Xử lý các request GET
export async function GET(request: Request) {
  // Trong ứng dụng thực tế, bạn sẽ lấy dữ liệu này từ cơ sở dữ liệu (Database)
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  // Trả về phản hồi dạng JSON
  return NextResponse.json({ users });
}

// Bạn cũng có thể định nghĩa các hàm POST, PUT, DELETE tại đây:
// export async function POST(request: Request) { ... }
```

---

## 17. Image Optimization with the `<Image>` Component (Tối ưu hóa hình ảnh với Component `<Image>`)

Component `<Image>` trong Next.js (`next/image`) là một bản mở rộng của thẻ HTML `<img>`, được thiết kế đặc biệt nhằm tối ưu hóa hiệu năng hiển thị hình ảnh. Nó tự động thực hiện các tác vụ sau:

- **Resizing (Thay đổi kích thước):** Tạo ra các phiên bản ảnh nhỏ hơn phù hợp với từng kích thước màn hình thiết bị khác nhau, tránh việc gửi file ảnh dung lượng quá lớn tới thiết bị người dùng.
- **Format Optimization (Tối ưu định dạng):** Tự động chuyển đổi ảnh sang các định dạng hiện đại hơn như **WebP** hoặc **AVIF** (nếu trình duyệt hỗ trợ), giúp giảm dung lượng file nhưng vẫn giữ nguyên chất lượng hiển thị.
- **Lazy Loading (Tải chậm):** Mặc định, hình ảnh chỉ được tải về khi người dùng cuộn tới vùng hiển thị (viewport), giúp tăng tốc độ tải trang ban đầu.
- **Prevents Cumulative Layout Shift (CLS):** Tự động thiết lập kích thước (kích thước khung giữ chỗ) cho hình ảnh để trình duyệt dành sẵn khoảng trống trước khi ảnh tải xong, ngăn chặn hiện tượng giao diện bị "nhảy" đột ngột.

### 17.1. Bảng so sánh (Comparison Table)

| Thẻ `<img` chuẩn (Standard HTML) | Next.js `<Image>` Component |
| :--- | :--- |
| Tải file ảnh gốc với dung lượng lớn | Tải file ảnh đã tối ưu hóa, đúng kích thước màn hình |
| Không tự động chuyển đổi định dạng ảnh | Tự động chuyển đổi sang định dạng WebP/AVIF |
| Tải ngay lập tức (trừ khi tự cấu hình) | Mặc định áp dụng Lazy loading |
| Dễ gây ra lỗi dịch chuyển giao diện (Layout Shift) | Tự động chống lại Layout Shift (Prevent CLS) |

### 17.2. Ví dụ mã nguồn minh họa (Example)
Sử dụng component `<Image>` cho cả ảnh nội bộ (local) và ảnh từ máy chủ từ xa (remote).

```tsx
import Image from 'next/image';
import profilePic from '../public/me.png'; // Import ảnh nội bộ

export default function MyPage() {
  return (
    <div>
      {/* Sử dụng ảnh nội bộ */}
      <Image
        src={profilePic}
        alt="Picture of the author"
        width={500} // Bắt buộc
        height={500} // Bắt buộc
        placeholder="blur" // Hiệu ứng mờ blur-up tùy chọn trong khi tải
      />

      {/* Sử dụng ảnh từ server từ xa */}
      <Image
        src="https://images.unsplash.com/photo-12345"
        alt="An image from Unsplash"
        width={800} // Bắt buộc
        height={600} // Bắt buộc
      />
    </div>
  );
}
```

---

## 18. Code Splitting & Parallel Loading (Chia nhỏ mã nguồn & Tải song song)

### 18.1. Automatic Code Splitting (Chia nhỏ mã tự động)
Next.js tự động thực hiện chia nhỏ mã nguồn (code splitting) mà không cần cấu hình thêm. Mỗi tệp `page.tsx` trong App Router được biên dịch thành một "gói" JavaScript (bundle) riêng biệt. Điều này có nghĩa là khi người dùng truy cập một trang cụ thể, họ chỉ cần tải về phần mã mã nguồn cần thiết cho trang đó thay vì phải tải toàn bộ ứng dụng.

### 18.2. Parallel Route Loading (Tải đường dẫn song song)
Khi một URL được yêu cầu, Next.js sẽ tải **tất cả các tệp `layout.tsx` và `page.tsx` cần thiết** cho route đó theo dạng **song song (in parallel)**.

*Ví dụ:* Khi truy cập đường dẫn `/dashboard/settings`, Root Layout (`app/layout.tsx`), Dashboard Layout (`app/dashboard/layout.tsx`) và Settings Page (`app/dashboard/settings/page.tsx`) sẽ đều được fetch và render đồng thời trên server, giúp giảm thiểu tối đa thời gian chờ đợi của người dùng.

```text
                           ┌──► app/layout.tsx (Root Layout)
                           │
(Parallel Load) ───────────┼──► app/dashboard/layout.tsx (Dashboard Layout)
                           │
                           └──► app/dashboard/settings/page.tsx (Settings Page)
```

Đây là một hành vi hoàn toàn tự động trong Next.js; bạn không cần phải thêm bất kỳ cấu hình bổ sung nào. Chỉ cần tổ chức ứng dụng theo đúng quy ước thư mục của App Router là tính năng này sẽ tự động được kích hoạt.

---

## 19. React Suspense and Lazy Loading with Loading UI (React Suspense và Tải chậm với Loading UI)

**React Suspense** là một tính năng của React cho phép các component "chờ" (wait) một điều gì đó (như tải dữ liệu) trước khi chúng render. Next.js tích hợp sâu với Suspense để tạo ra trải nghiệm người dùng tốt hơn thông qua cơ chế **Streaming**.

Bằng cách tạo tệp `loading.tsx`, bạn đang bảo Next.js: *"Trong khi tệp component trang chính (`page.tsx`) đang bận fetch dữ liệu, hãy hiển thị giao diện từ tệp `loading.tsx` này như một khung giữ chỗ (temporary placeholder)."* Điều này giúp người dùng nhìn thấy ngay một phần giao diện trang và biết rằng nội dung đang trên đường tải về, thay vì phải nhìn vào một màn hình rỗng.

### 19.1. Luồng hoạt động (Execution Flow)

```text
Client Sends Request
  │
  ▼
Server Immediately Sends Back:
  - Static UI (Layout)
  - UI from `loading.tsx` (Fallback)
  │
  ▼
(Meanwhile on the server...)
  - `page.tsx` is `await`ing data...
  │
  ▼
Data is available, Server Renders Page Content
  │
  ▼
Server "Streams" the Content's HTML to the Client to replace the Fallback
```

### 19.2. Ví dụ mã nguồn minh họa (Example)
Tạo giao diện tải tức thì cho một trang mất thời gian fetch data.

```tsx
// app/analytics/loading.tsx

// Component này sẽ tự động hiển thị trong khi tệp page.tsx cùng cấp đang tải dữ liệu
export default function Loading() {
  return <p>Loading analytics data, please wait...</p>;
}
```

```tsx
// app/analytics/page.tsx

async function getAnalyticsData() {
  // Giả lập một network request chậm kéo dài 3 giây
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return { visitors: 9876 };
}

export default async function AnalyticsPage() {
  const data = await getAnalyticsData();
  return <h1>Visitors: {data.visitors}</h1>;
}
```

---

## 20. Caching Strategies and ISR (Chiến lược Caching và ISR)

Next.js mở rộng hàm `fetch` mặc định của JavaScript với hệ thống cache phía server rất mạnh mẽ.

- **Static Fetch (Mặc định):** `fetch('...')` tự động cache kết quả vô thời hạn (tương tự `getStaticProps` trong Pages Router). Dữ liệu được lấy tại thời điểm build và tái sử dụng cho mọi request.
- **No-cache Fetch:** `fetch('...', { cache: 'no-store' })` luôn luôn lấy dữ liệu mới cho mỗi request (tương tự `getServerSideProps`).
- **Incremental Static Regeneration (ISR):** `fetch('...', { next: { revalidate: 60 } })` là sự kết hợp hoàn hảo của cả hai phương pháp. Nó cache dữ liệu trong một khoảng thời gian chỉ định (ví dụ: 60 giây). Request đầu tiên trong khoảng thời gian đó nhận dữ liệu đã cache, đồng thời Next.js tự động kích hoạt một quá trình "revalidation" ngầm ở nền để lấy dữ liệu mới. Các request tiếp theo sau đó sẽ nhận được dữ liệu đã cập nhật.

### 20.1. Luồng tái tạo lại dữ liệu ngầm của ISR (ISR Revalidation Flow)

```text
User A Requests (at 0s) ──► Receives Cached Data (Stale)
  │
  ▼
(Server begins revalidating in the background...)
  │
  ▼
User B Requests (at 10s) ──► Receives Cached Data (Still stale)
  │
  ▼
(Revalidation completes, cache is updated)
  │
  ▼
User C Requests (at 65s) ──► Receives Cached Data (Fresh)
```

### 20.2. Ví dụ mã nguồn minh họa (Example)
Lấy giá cổ phiếu và làm mới lại dữ liệu sau mỗi phút (60 giây).

```tsx
// app/stock-price/page.tsx

async function getStockPrice() {
  const res = await fetch('https://api.example.com/stock/XYZ', {
    next: { revalidate: 60 }, // Revalidate sau mỗi 60 giây
  });
  return res.json();
}

export default async function StockPricePage() {
  const stock = await getStockPrice();
  return <h1>XYZ Stock Price: ${stock.price}</h1>;
}
```

---

## 21. Monitoring and Improving Core Web Vitals (Theo dõi và cải thiện Core Web Vitals)

**Core Web Vitals (CWV)** là bộ ba chỉ số đo lường của Google dùng để đánh giá trải nghiệm thực tế của người dùng trên trang web, tập trung vào tốc độ tải, độ tương tác và tính ổn định về mặt thị giác.

1. **Largest Contentful Paint (LCP):** Đo thời gian cần thiết để phần tử nội dung lớn nhất (thường là ảnh bìa hoặc khối văn bản chính) hiển thị rõ ràng. Next.js giúp cải thiện LCP với component `<Image>`.
2. **Interaction to Next Paint (INP):** Đo độ trễ từ khi người dùng tương tác (click, tap, nhấn phím) cho tới khi giao diện cung cấp phản hồi. Next.js giúp cải thiện INP bằng cơ chế chia nhỏ mã (code splitting), chỉ tải JavaScript cần thiết (INP đã thay thế cho chỉ số cũ First Input Delay - FID).
3. **Cumulative Layout Shift (CLS):** Đo mức độ giao diện bị "nhảy" bất ngờ trong quá trình tải. Next.js giúp giảm CLS bằng cách tự động đặt kích thước khung giữ chỗ cho hình ảnh và phông chữ.

Bạn có thể theo dõi các chỉ số này bằng các công cụ như **Google PageSpeed Insights** hoặc tích hợp **Vercel Analytics** vào dự án.

### 21.1. Sơ đồ các chỉ số (Metrics Diagram)

- **LCP (Loading):** *"Trang web có tải nhanh không?"* $\rightarrow$ Tối ưu hóa bằng `<Image>`, Font Optimization.
- **INP (Interactivity):** *"Trang web có phản hồi nhanh không?"* $\rightarrow$ Tối ưu hóa bằng Code Splitting.
- **CLS (Stability):** *"Giao diện có ổn định không?"* $\rightarrow$ Tối ưu hóa bằng `<Image>`, Font Optimization.

### 21.2. Ví dụ mã nguồn minh họa (Example)
Tích hợp Vercel Analytics để dễ dàng theo dõi các chỉ số Core Web Vitals (CWV).

1. **Cài đặt thư viện (Install package):**
   ```bash
   npm i @vercel/analytics
   ```

2. **Thêm component `<Analytics />` vào Root Layout (`app/layout.tsx`):**
   ```tsx
   // app/layout.tsx

   import { Analytics } from '@vercel/analytics/react';

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en">
         <body>
           {children}
           <Analytics /> {/* Thêm component Analytics tại đây */}
         </body>
       </html>
     );
   }
   ```

---

## 22. Using CSS Modules (Sử dụng CSS Modules)

**CSS Modules** là phương pháp viết CSS với phạm vi cục bộ (locally scoped) dành riêng cho một component cụ thể. Khi bạn import một file CSS Module, Next.js tự động sinh ra các tên class duy nhất (unique class names), giúp tránh hoàn toàn hiện tượng xung đột tên class giữa các component khác nhau. Đây là cách được tích hợp sẵn và khuyến nghị sử dụng khi xử lý CSS ở cấp độ component trong Next.js.

Để sử dụng, bạn chỉ cần đặt tên file theo quy ước `[name].module.css`.

### 22.1. Cấu trúc thư mục minh họa (Structure Diagram)

```text
app/
└── components/
    ├── Button.tsx           <-- Component
    └── Button.module.css    <-- File CSS dành riêng cho Button
```

### 22.2. Ví dụ mã nguồn minh họa (Example)

#### A. File CSS Module (`Button.module.css`)
```css
/* Tên class này sẽ được tự động biến đổi thành một chuỗi duy nhất */
.error {
  background-color: red;
  color: white;
}
```

#### B. Sử dụng trong Component (`Button.tsx`)
```tsx
import styles from './Button.module.css';

export default function Button() {
  return (
    <button
      type="button"
      // `styles.error` sẽ là tên class được sinh tự động, ví dụ: "Button_error__12345"
      className={styles.error}
    >
      Delete
    </button>
  );
}
```

---

## 23. Integrating Sass/SCSS (Tích hợp Sass/SCSS)

**Sass/SCSS** là một CSS preprocessor (trình tiền xử lý CSS) mở rộng khả năng của CSS thuần với các tính năng mạnh mẽ:

- **Variables (Biến):** Lưu trữ các giá trị có thể tái sử dụng (màu sắc, font size).
- **Nesting (Lồng nhau):** Viết các quy tắc CSS lồng vào nhau theo đúng cấu trúc cây phân cấp HTML.
- **Mixins:** Tạo ra các khối style có thể tái sử dụng kèm tham số truyền vào.
- **Partials & Imports:** Chia nhỏ CSS thành các module quản lý dễ dàng.

### 23.1. Cài đặt (Installation)
Mở Terminal và cài đặt gói `sass`:

```bash
npm install sass
# hoặc
yarn add sass
```

### 23.2. Cấu trúc thư mục & Khai báo biến (Structure & Global Variables)

```text
app/
├── styles/
│   └── _variables.scss      // File chứa các biến toàn cục
└── components/
    ├── Card.jsx
    └── Card.module.scss     // Sử dụng SCSS module cho Component
```

#### A. File biến toàn cục (`app/styles/_variables.scss`)
```scss
// Khai báo các biến toàn cục
$primary-color: #8a2be2;
$border-radius: 12px;
$card-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
```

#### B. File SCSS Module (`app/components/Card.module.scss`)
```scss
// Import các biến từ file partial
@import '../styles/variables';

.card {
  padding: 1.5rem;
  border-radius: $border-radius;
  box-shadow: $card-shadow;
  background-color: white;

  h3 {
    margin-top: 0;
    color: $primary-color;
  }

#### C. Sử dụng trong Component (`app/components/Card.jsx`)
```jsx
// Cách sử dụng hoàn toàn giống như CSS Modules thông thường
import styles from './Card.module.scss';

export default function Card({ title, content }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
```

---

## 24. Styled-components with Server Components (Styled-components với Server Components)

**Styled-components** là một thư viện CSS-in-JS cho phép bạn viết mã CSS trực tiếp bên trong các file JavaScript/TypeScript thông qua cú pháp tagged template literals.

- **Ưu điểm:** Tạo kiểu dáng động dựa trên props, tự động giới hạn phạm vi (automatic scoping), không cần lo lắng về việc đặt tên class.

### 24.1. Thách thức đối với App Router (Challenge with App Router)
Styled-components yêu cầu một môi trường runtime trên trình duyệt (browser runtime environment) để chèn (inject) các đoạn mã CSS vào DOM. Tuy nhiên, **Server Components** được render hoàn toàn trên server - nơi môi trường này không tồn tại.

### 24.2. Giải pháp (Solution)
1. Tất cả các component sử dụng styled-components **bắt buộc phải là Client Components** (được đánh dấu với `"use client";`).
2. Cần khởi tạo một **Style Registry** để thu thập tất cả các styles được tạo ra trong quá trình render trên server, sau đó chèn chúng vào thẻ `<head>` của file HTML gửi về cho client.

### 24.3. Cài đặt & Khởi tạo Style Registry (Installation & Setup)

1. **Cài đặt thư viện (Install library):**
   ```bash
   npm install styled-components
   ```

2. **Tạo tệp Style Registry (`app/lib/StyledComponentsRegistry.jsx`):**
   ```jsx
   'use client'

   import React, { useState } from 'react'
   import { useServerInsertedHTML } from 'next/navigation'
   import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

   export default function StyledComponentsRegistry({ children }) {
     const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

     useServerInsertedHTML(() => {
       const styles = styledComponentsStyleSheet.getStyleElement()
       styledComponentsStyleSheet.instance.clearTag()
       return <>{styles}</>
     })

     if (typeof window !== 'undefined') return <>{children}</>

     return (
       <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
         {children}
       </StyleSheetManager>
     )
   }
   ```

3. **Sử dụng Registry trong Root Layout (`app/layout.jsx`):**
   ```jsx
   import StyledComponentsRegistry from './lib/StyledComponentsRegistry';

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
         </body>
       </html>
     );
   }
   ```

### 24.4. Ví dụ mã nguồn minh họa Component (`app/components/StyledButton.jsx`)

```jsx
'use client'; // BẮT BUỘC phải là a Client Component

import styled from 'styled-components';

// Định dạng kiểu dáng động dựa trên prop '$primary'
const Button = styled.button`
  background: ${props => props.$primary ? '#BF4F74' : 'white'};
  color: ${props => props.$primary ? 'white' : '#BF4F74'};
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1.5em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  cursor: pointer;
`;

export default function StyledButton({ primary, children }) {
  // Lưu ý: styled-components khuyến nghị sử dụng tiền tố $ cho props
  // để tránh việc chúng bị tự động truyền xuống phần tử DOM không cần thiết.
  return <Button $primary={primary}>{children}</Button>;
}
---

## 25. Tailwind CSS in the App Router (Tailwind CSS trong App Router)

**Tailwind CSS** là một utility-first framework. Thay vì viết mã CSS tùy chỉnh truyền thống, bạn xây dựng giao diện bằng cách áp dụng trực tiếp các class tiện ích có sẵn vào trong JSX.

- **Ưu điểm:** Tốc độ phát triển UI cực kỳ nhanh, giao diện nhất quán, dễ dàng tùy biến, và tự động loại bỏ (purge) các class CSS không sử dụng để tối ưu dung lượng sản phẩm đầu ra (production).

### 25.1. Cài đặt & Cấu hình (Installation & Configuration)

1. **Cài đặt các gói phụ thuộc cần thiết:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

2. **Khởi tạo các file cấu hình:**
   ```bash
   npx tailwindcss init -p
   ```

3. **Cấu hình đường dẫn mã nguồn trong `tailwind.config.js`:**
   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       './pages/**/*.{js,ts,jsx,tsx,mdx}',
       './components/**/*.{js,ts,jsx,tsx,mdx}',
       './app/**/*.{js,ts,jsx,tsx,mdx}', // Bắt buộc thêm dòng này cho App Router
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

4. **Thêm các directives của Tailwind vào file CSS toàn cục (`app/globals.css`):**
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. **Import file CSS toàn cục vào Root Layout (`app/layout.jsx`):**
   ```jsx
   import './globals.css';

   export default function RootLayout({ children }) {
     // ...
   }
   ```

### 25.2. Quy trình Build mã nguồn của Tailwind (Tailwind Build Process)

```text
[Component.jsx]
  │
  ▼
// Viết các utility classes trực tiếp trong `className`
<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  │
  ▼
[Tailwind Build Process]
// Quét tất cả các file, tìm các class đang được sử dụng,
// và tự động sinh ra một file CSS đã được tối ưu hóa tối đa.
  │
  ▼
[Final Optimized CSS]
// Chỉ chứa duy nhất các class thực sự được dùng trong dự án
.p-6 { padding: 1.5rem; }
.max-w-sm { max-width: 24rem; }
...
```

---

## 26. Adding Custom Tailwind CSS Classes (Thêm các class tùy chỉnh trong Tailwind)

Để duy trì một hệ thống thiết kế (Design System) đồng bộ, bạn thường cần thêm các giá trị tùy chỉnh (như màu thương hiệu, phông chữ, hoặc hiệu ứng chuyển động) vào Tailwind. Điều này được thực hiện bên trong tệp `tailwind.config.ts` (hoặc `.js`).

Cách làm chuẩn nhất (Best practice) là thêm các giá trị tùy biến của bạn bên trong đối tượng `theme.extend`. Điều này giúp **bổ sung thêm** vào theme mặc định của Tailwind thay vì **ghi đè hoàn toàn** nó.

Sau khi định nghĩa, bạn có thể sử dụng các class tiện ích tùy chỉnh này ở bất kỳ đâu trong ứng dụng.

### 26.1. Ví dụ cấu hình tùy chỉnh (`tailwind.config.ts`)

```ts
// tailwind.config.ts

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // Luôn luôn đặt các tùy chỉnh bên trong `extend`
    extend: {
      // 1. Thêm màu thương hiệu tùy chỉnh (Custom brand colors)
      colors: {
        brand: {
          primary: '#0070f3',   // -> Sử dụng: bg-brand-primary
          secondary: '#ff4081', // -> Sử dụng: text-brand-secondary
        },
      },

      // 2. Thêm khoảng cách tùy chỉnh (Custom spacing)
      spacing: {
        '128': '32rem', // -> Sử dụng: p-128, w-128
      },

      // 3. Thêm hiệu ứng chuyển động tùy chỉnh (Custom animations)
      keyframes: {
        'slide-in-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-down': 'slide-in-down 0.5s ease-out', // -> Sử dụng: animate-slide-in-down
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 27. State Management - Overview & Challenges in Next.js (Tổng quan & Thách thức quản lý State trong Next.js)

Trong Next.js App Router, việc quản lý state trở nên phức tạp hơn do sự tách biệt hoàn toàn giữa Server và Client:

- **Server Components:**
  - Chạy trên server, hoàn toàn không có trạng thái (**stateless**), và **không thể sử dụng các React Hooks** như `useState` hay `useEffect`.
  - Lý tưởng cho việc fetch dữ liệu và truy cập các tài nguyên backend.
  - Không thể tương tác trực tiếp với state ở phía client.
- **Client Components (`"use client"`):**
  - Hoạt động tương tự như các React components truyền thống.
  - Có thể sử dụng hooks, quản lý state và xử lý các sự kiện người dùng (events).
  - Tất cả các thư viện quản lý state (Context API, Redux, Zustand...) **bắt buộc phải được sử dụng bên trong Client Components**.
- **Hydration (Quá trình Hydration):**
  - Là quá trình "thổi sức sống" vào mã HTML tĩnh được render từ server bằng cách gắn các lắng nghe sự kiện JavaScript và state phía client, làm cho trang web có khả năng tương tác.
  - Đồng bộ hóa state ban đầu giữa Server và Client là điều cực kỳ quan trọng để tránh các lỗi hydration mismatch.

---

## 28. React Context & Server Components (React Context và Server Components)

**React Context API** là phương pháp chia sẻ state giữa các components mà không cần truyền props thủ công qua nhiều cấp (tránh hiện tượng prop drilling).

- **Pros (Ưu điểm):**
  - Tích hợp sẵn trong React, không cần cài đặt thêm thư viện ngoài.
  - Dễ học và dễ sử dụng cho các ứng dụng quy mô vừa và nhỏ.
  - Rất phù hợp cho các dạng state hiếm khi thay đổi, chẳng hạn như Giao diện (light/dark mode), Ngôn ngữ (language), hoặc Thông tin người dùng (user info).
- **Cons (Nhược điểm):**
  - Có thể gây ra việc re-render không cần thiết cho tất cả các component con đọc context khi state thay đổi.
  - Chưa được tối ưu cho các cập nhật state liên tục và phức tạp.
- **Lưu ý quan trọng trong Next.js:**
  - **Context Provider BẮT BUỘC phải đặt bên trong một Client Component** (`"use client"`).

### 28.1. Sơ đồ phân cấp Component & Luồng dữ liệu (Hierarchy Diagram & Flow)

```text
(Server) RootLayout
 └── (Client) "use client" <ThemeProvider>
      └── (Server) {children} - (e.g., HomePage)
           └── (Client) "use client" <ThemeToggleButton />
```

**Luồng hoạt động (Flow):**
1. **RootLayout (Server Component):** Render ra `<ThemeProvider>`.
2. **ThemeProvider (Client Component):** Khởi tạo state và cung cấp nó thông qua Context.
3. **`children` (Server hoặc Client Components):** Được render bên trong Provider (Server Components nằm bên trong Provider vẫn được hỗ trợ nếu được truyền dưới dạng prop `children`).
4. **Client Components:** Chỉ có các Client Components nằm trong cây component mới có thể đọc và truy cập state từ Context (ví dụ: `<ThemeToggleButton />`).

### 28.2. Ví dụ mã nguồn minh họa (Example)

#### A. Khởi tạo Context Provider (`app/contexts/ThemeContext.jsx`)
```jsx
'use client';

import { createContext, useState, useContext } from 'react';

// 1. Tạo Context
const ThemeContext = createContext();

// 2. Tạo Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Tạo Custom Hook để dễ dàng tiêu thụ Context
export function useTheme() {
  return useContext(ThemeContext);
}
```

#### C. Sử dụng Context trong Client Component (`app/components/ThemeSwitcher.jsx`)
```jsx
'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded ${theme === 'light' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
```

---

## 29. Redux Toolkit & App Router (Redux Toolkit và App Router)

**Redux Toolkit (RTK)** là bộ công cụ chính thức và được khuyến nghị sử dụng để viết logic Redux. RTK giúp đơn giản hóa việc khởi tạo Store và viết các Reducers.

- **Pros (Ưu điểm):**
  - Quản lý state tập trung, có thể dự đoán được (predictable state management).
  - Hệ sinh thái mạnh mẽ (DevTools, middleware như Redux Thunk/Saga).
  - Tối ưu hiệu năng tốt nhờ `reselect` và `Immer`.
  - Phù hợp cho các ứng dụng quy mô lớn, phức tạp với nhiều trạng thái toàn cục (global state).
- **Cons (Nhược điểm):**
  - Vẫn còn một số mã boilerplate (dù đã được RTK giảm thiểu đáng kể).
  - Độ dốc học tập (learning curve) cao hơn so với các giải pháp khác.
- **Lưu ý quan trọng trong Next.js:**
  - Tương tự như Context API, Redux Store **chỉ tồn tại phía Client**. Provider của Redux bắt buộc phải được đặt trong một Client Component (`"use client"`).

### 29.1. Sơ đồ phân cấp & Luồng hoạt động (Hierarchy Diagram & Flow)

```text
(Server) RootLayout
 └── (Client) "use client" <StoreProvider>
      └── (Server) {children} - (e.g., DashboardPage)
           └── (Client) "use client" <CounterComponent />
```

**Luồng hoạt động (Flow):**
1. **Store được khởi tạo một lần duy nhất ở phía client.**
2. **StoreProvider (Client Component):** Cung cấp Store này tới toàn bộ cây component con.
3. **Child Client Components:** Có thể tương tác với Store bằng cách sử dụng các hooks `useDispatch` và `useSelector`.

### 29.2. Cài đặt & Các bước triển khai (Installation & Setup Steps)

1. **Cài đặt các gói thư viện (Installation):**
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. **Tạo một Slice (`/lib/features/counter/counterSlice.js`):**
   ```js
   import { createSlice } from '@reduxjs/toolkit';

   const initialState = { value: 0 };

   const counterSlice = createSlice({
     name: 'counter',
     initialState,
     reducers: {
       increment: (state) => {
         state.value += 1;
       },
       decrement: (state) => {
         state.value -= 1;
       },
     },
   });

   export const { increment, decrement } = counterSlice.actions;
   export default counterSlice.reducer;
   ```

3. **Tạo Store (`/lib/store.js`):**
   ```js
   import { configureStore } from '@reduxjs/toolkit';
   import counterReducer from './features/counter/counterSlice';

   export const makeStore = () => {
     return configureStore({
       reducer: {
         counter: counterReducer,
       },
     });
   };
   ```

4. **Tạo StoreProvider (`/app/StoreProvider.jsx`):**

   ```jsx
   'use client';

   import { useRef } from 'react';
   import { Provider } from 'react-redux';
   import { makeStore } from '../lib/store';

   export default function StoreProvider({ children }) {
     const storeRef = useRef(null);
     if (!storeRef.current) {
       // Tạo một instance store mới trong lần đầu tiên component render
       storeRef.current = makeStore();
     }

     return <Provider store={storeRef.current}>{children}</Provider>;
   }
   ```

5. **Sử dụng trong `app/layout.js` và Component (`components/Counter.js`):**

   *Thêm vào Root Layout (`app/layout.js`):*
   ```jsx
   // app/layout.js
   import StoreProvider from './StoreProvider';

   export default function RootLayout({ children }) {
     return (
       <html lang="en">
         <body>
           <StoreProvider>{children}</StoreProvider>
         </body>
       </html>
     );
   }
   ```

   *Sử dụng trong Component (`components/Counter.js`):*
   ```jsx
   // components/Counter.js
   'use client';

   import { useSelector, useDispatch } from 'react';
   import { increment, decrement } from '@/lib/features/counter/counterSlice';

   export function Counter() {
     const count = useSelector((state) => state.counter.value);
     const dispatch = useDispatch();

     return (
       <div>
         <button onClick={() => dispatch(decrement())}>-</button>
         <span>{count}</span>
         <button onClick={() => dispatch(increment())}>+</button>
       </div>
     );
   }
   ```

---

## 30. Recoil & Zustand (Thư viện quản lý state hiện đại Recoil & Zustand)

Đây là các thư viện quản lý state hiện đại, tối giản (minimalist) và hoạt động dựa trên React Hooks.

### 30.1. Zustand
- **Khái niệm:** 'Zustand' có nghĩa là 'trạng thái' (state) trong tiếng Đức.
- **Đặc điểm:** Cực kỳ đơn giản với mã boilerplate tối thiểu.
- **Cơ chế:** State được lưu trữ trong một Store độc lập nằm ngoài cây React, được truy cập thông qua các Custom Hooks.
- **Không cần Provider:** **Không cần bọc ứng dụng trong bất kỳ Provider nào**.
- **Phù hợp nhất cho (Best for):** Các dự án ở mọi quy mô cần một giải pháp quản lý state nhẹ nhàng và dễ sử dụng.

#### Ví dụ mã nguồn với Zustand:
1. **Cài đặt:** `npm install zustand`
2. **Tạo Store (`/stores/bearStore.js`):**
   ```js
   import { create } from 'zustand';

   const useBearStore = create((set) => ({
     bears: 0,
     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
     removeAllBears: () => set({ bears: 0 }),
   }));

   export default useBearStore;
   ```
3. **Sử dụng trong Component (`/components/BearCounter.js`):**
   ```jsx
   'use client';

   import useBearStore from '@/stores/bearStore';

   function BearCounter() {
     // Lấy state từ store
     const bears = useBearStore((state) => state.bears);
     return <h1>{bears} around here ...</h1>;
   }

   function Controls() {
     // Lấy actions từ store
     const increasePopulation = useBearStore((state) => state.increasePopulation);
     return <button onClick={increasePopulation}>one up</button>;
   }
   ```

### 30.2. Recoil
- **Phát triển bởi:** Facebook.
- **Cơ chế:** Sử dụng các khái niệm **'atoms'** (đơn vị state riêng lẻ) và **'selectors'** (state phái sinh/derived state).
- **Tối ưu re-render:** Cho phép tối ưu hóa việc re-render tốt hơn vì các components chỉ đăng ký nhận dữ liệu từ đúng các atoms mà chúng thực sự cần.
- **Phù hợp nhất cho (Best for):** Các ứng dụng phức tạp cần quản lý hiệu quả các state có tính chất phụ thuộc lẫn nhau. *Yêu cầu phải bọc trong Provider (`RecoilRoot`).*

### 30.3. State Persistence (Lưu trữ trạng thái bền vững)
Vấn đề cốt lõi mà **State Persistence** giải quyết là tính chất tạm thời (temporary nature) của state khi lưu trong bộ nhớ RAM. Mặc định, state tạo bởi Zustand (hay bất kỳ thư viện nào) lưu trong bộ nhớ JavaScript của trình duyệt. Điều này dẫn đến:
- Khi người dùng **tải lại trang (F5)**, bộ nhớ JS bị xóa sạch và khởi tạo lại từ đầu.
- Khi người dùng **đóng tab hoặc trình duyệt**, bộ nhớ bị hủy hoàn toàn.

**Hậu quả:** Ứng dụng khôi phục về giá trị khởi tạo ban đầu, gây trải nghiệm người dùng rất tồi tệ (mất Giỏ hàng - Shopping Cart, mất Cấu hình giao diện - User Preferences, hoặc mất dữ liệu Form đang nhập).

**Giải pháp State persistence:** Đưa state từ bộ nhớ tạm thời và lưu vào bộ nhớ bền vững hơn trên thiết bị người dùng (như `localStorage` hay `sessionStorage`).

#### Cấu hình State Persistence với Zustand:

##### 1. Tạo Persisted Store (`stores/settingsStore.ts`)
Sử dụng middleware `persist` và cung cấp một `name` duy nhất để đóng vai trò làm key trong `localStorage`. Tính năng này tự động lưu và rehydrate (khôi phục) state của bạn.

```typescript
// stores/settingsStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  // 1. Bọc định nghĩa store trong hàm `persist`
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      // 2. Đặt một tên duy nhất làm key trong localStorage (BẮT BUỘC)
      name: 'user-settings-storage',
    }
  )
);
```

##### 2. Xử lý Hydration trong Next.js / SSR (`components/ThemeSwitcher.tsx`)
Trì hoãn việc render giao diện UI có sử dụng store cho đến khi component đã được mount hoàn toàn phía client. Điều này giúp ngăn ngừa triệt để lỗi **"hydration mismatch"** giữa server và client.

```tsx
// components/ThemeSwitcher.tsx
'use client';

import { useState, useEffect } from 'react';
import { useSettingsStore } from '../stores/settingsStore';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useSettingsStore();
  // State theo dõi xem component đã mounted trên client chưa
  const [isHydrated, setIsHydrated] = useState(false);

  // Chỉ chuyển cờ flag sang true sau khi component đã mount phía client
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Render một trạng thái chờ (fallback state) cho tới khi quá trình hydration hoàn tất
  if (!isHydrated) {
    return null; // Hoặc trả về một loading skeleton
  }

  // Khi đã hydrated, render component với đúng state khôi phục
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

---

## 31. Handling State Hydration (Xử lý State Hydration)

**Hydration** là quá trình React phía client tiếp quản mã HTML được render bởi server.

- **Vấn đề (The Problem):** Nếu state ban đầu ở phía client không trùng khớp hoàn toàn với những gì đã được render trên server, React sẽ ném ra lỗi **"Hydration Mismatch"**.
  - *Ví dụ:* Server render trang web với theme `'light'`, nhưng client khởi tạo state theme là `'dark'` (do đọc từ `localStorage`).
- **Giải pháp (The Solution):** Truyền state ban đầu từ **Server Component** xuống cho **Client Component** thông qua **props**. Client Component sẽ dùng các props này để khởi tạo state của nó, đảm bảo tính đồng nhất tuyệt đối.

### 31.1. Luồng xử lý Hydration chuẩn (Correct Hydration Flow Diagram)

```text
1. Server: ServerComponent thực hiện fetch dữ liệu (ví dụ: initialTodos).
2. Server -> Client: Truyền initialTodos thông qua props tới ClientComponent.
3. Client: ClientComponent nhận initialTodos và sử dụng làm giá trị khởi tạo cho useState:
   const [todos, setTodos] = useState(initialTodos).
4. Kết quả (Result): HTML được render từ server và state khởi tạo phía client trùng khớp hoàn toàn.
   Hydration thành công rực rỡ (Hydration succeeds)!
```













