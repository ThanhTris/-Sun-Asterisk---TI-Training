
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
---

## 32. Authentication & Authorization - Core Concepts (Khái niệm cốt lõi)

### 32.1. Authentication (Xác thực)
- **Khái niệm:** Trả lời cho câu hỏi: **"Bạn là ai?" ("Who are you?")**
- **Mục đích:** Xác minh danh tính của người dùng, thường thông qua `username/password`, tài khoản mạng xã hội (Google, GitHub, Facebook...), v.v.
- **Ví dụ thực tế:** Hành động đăng nhập vào Gmail.

### 32.2. Authorization (Phân quyền)
- **Khái niệm:** Trả lời cho câu hỏi: **"Bạn được phép làm gì?" ("What are you allowed to do?")**
- **Mục đích:** Xác định quyền truy cập tài nguyên của một người dùng đã được xác thực thành công.
- **Ví dụ thực tế:** Chỉ có người dùng mang quyền `admin` mới có thể truy cập vào trang Admin Dashboard (`/admin`).

---

## 33. Setting Up NextAuth.js in the App Router (Thiết lập NextAuth.js trong App Router)

**NextAuth.js** (Auth.js) là thư viện xác thực mã nguồn mở hoàn thiện nhất dành riêng cho Next.js, hỗ trợ cả OAuth (Google, GitHub, Facebook...), Email/Password và Session Management.

### 33.1. Luồng hoạt động xác thực OAuth (OAuth Authentication Flow)

```text
participant User
participant Client as Browser (Next.js App)
participant Server as Next.js Server (Route Handler)
participant Provider as Google/GitHub

User-->>Client: 1. Clicks "Sign in with Google"
Client->>Server: 2. Calls signIn('google')
Server-->>Provider: 3. Redirects to Google sign-in page
Provider-->>User: 4. Requests authentication
User-->>Provider: 5. Signs in successfully
Provider-->>Server: 6. Sends back authorization code
Server-->>Provider: 7. Exchanges code for access token
Server-->>Server: 8. Creates session & saves to cookie
Server-->>Client: 9. Returns session to client
Client-->>User: 10. Displays "Signed in" status
```

---

## 34. Example: Setting up NextAuth.js (Ví dụ thiết lập NextAuth.js)

### 34.1. Bước 1: Cài đặt thư viện (Installation)
Chạy lệnh cài đặt gói `next-auth`:

```bash
npm install next-auth
```

### 34.2. Bước 2: Tạo Route Handler (`app/api/auth/[...nextauth]/route.ts`)
Tạo một Catch-all Route Handler tại đường dẫn `app/api/auth/[...nextauth]/route.ts` để xử lý tất cả các yêu cầu API liên quan đến xác thực (như `signIn`, `signOut`, `callback`):

```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      // ... cấu hình cho đăng nhập username/password
    }),
  ],
  // pages: { signIn: '/login' }, // Trang đăng nhập tùy chỉnh (nếu có)
});

export { handler as GET, handler as POST };
---

## 35. Building a Custom Auth with Server Actions (Tự xây dựng Auth tùy chỉnh với Server Actions)

Dành cho các trường hợp bạn muốn kiểm soát hoàn toàn logic xác thực của ứng dụng.

### 35.1. Khi nào nên sử dụng? (When to use it?)
- Các hệ thống xác thực riêng biệt (Proprietary authentication systems), không sử dụng OAuth.
- Cần tích hợp sâu với cơ sở dữ liệu (Database) có sẵn.
- Không muốn phụ thuộc vào thư viện bên thứ ba.

### 35.2. Phương pháp tiếp cận (Approach)
- Form đăng nhập gọi trực tiếp tới một **Server Action**.
- Server Action xử lý các logic: kiểm tra cơ sở dữ liệu, hash mật khẩu.
- Khi thành công, tạo một session (ví dụ sử dụng `iron-session` hoặc `jose`) và lưu vào cookie an toàn có cờ **`httpOnly`**.

### 35.3. Ví dụ mã nguồn minh họa (`app/login/actions.ts`)
Sử dụng thư viện như `jose` để tạo JWT hoặc `iron-session` để mã hóa cookie:

```typescript
// app/login/actions.ts
'use server';

import { sealData } from 'iron-session/edge';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const email = formData.get('email');

  // 1. Lấy thông tin người dùng từ cơ sở dữ liệu
  // const user = await getUserByEmail(email);

  // 2. Xác minh mật khẩu (ví dụ dùng bcrypt.compare)
  // const isValid = await compare(password, user.password);

  // Giả định xác thực thành công
  const user = { id: 1, email, isAdmin: true };

  // 3. Tạo một session an toàn (mã hóa)
  const session = await sealData(user, {
    password: process.env.SECRET_COOKIE_PASSWORD!,
  });

  // 4. Lưu session vào Cookie an toàn (httpOnly)
  cookies().set('session', session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 tuần
    path: '/',
  });

  // 5. Chuyển hướng người dùng sang Dashboard
  redirect('/dashboard');
}
```

---

## 36. Implementing JWT Authentication & Secure APIs (Xác thực JWT và Bảo mật APIs)

- **JWT (JSON Web Token):** Là một chuỗi JSON được mã hóa được sử dụng để trao đổi thông tin an toàn giữa các bên.
- **Cấu trúc (Structure):** Gồm 3 phần phân tách bởi dấu chấm (`.`): `Header`, `Payload` (chứa dữ liệu), `Signature` (chữ ký). Chữ ký đảm bảo token không bị can thiệp hay thay đổi trên đường truyền.
- **Ứng dụng (Application):** Lý tưởng để bảo vệ các **API Routes** hoặc **Route Handlers** trong Next.js. Client gửi kèm JWT trong mỗi yêu cầu để chứng minh đã được xác thực.

### 36.1. Luồng bảo mật API với JWT (API Security Flow with JWT)

```text
participant Client
participant API as Next.js API Route
participant AuthServer as Server (Login)

Client->>AuthServer: 1. Login (username, password)
AuthServer-->>Client: 2. Returns JWT
Client->>Client: 3. Store JWT (localStorage/cookie)

loop For each request to a protected API
    Client->>API: 4. Send request + JWT in Header (Authorization: Bearer <token>)
    API->>API: 5. Verify JWT signature
    alt Signature valid
        API-->>Client: 6a. Return data successfully
    else Signature invalid/expired
        API-->>Client: 6b. Return 401 Unauthorized error
    end
end
### 36.2. Ví dụ bảo vệ API Route Handler (`app/api/secure-data/route.ts`)

```typescript
// app/api/secure-data/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Xác minh token JWT
    const { payload } = await jwtVerify(token, JWT_SECRET);
    console.log('JWT Payload:', payload);

    // Logic thực thi khi token hợp lệ
    return NextResponse.json({
      data: `Secret data for user ID: ${payload.sub}`,
    });
  } catch (error) {
    // Token không hợp lệ hoặc đã hết hạn
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}
```

---

## 37. Role-Based Access Control - RBAC (Phân quyền dựa trên vai trò)

**RBAC** là phương pháp hạn chế quyền truy cập hệ thống của người dùng đã được xác thực dựa trên vai trò (roles) của họ (ví dụ: `admin`, `editor`, `user`).

### 37.1. Phương pháp triển khai trong Next.js (How to implement in Next.js)
- **Middleware (`middleware.ts`):** Đóng vai trò là "Người gác cổng" (Gatekeeper). Nó chạy trước khi yêu cầu được xử lý, rất lý tưởng để kiểm tra vai trò và chuyển hướng nếu không được cấp quyền.
- **Layouts:** Áp dụng cho một nhóm các routes. Có thể dùng để bọc các trang yêu cầu quyền cụ thể, hiển thị giao diện khác nhau, hoặc kiểm tra quyền ở cấp độ layout.

### 37.2. Luồng phân quyền với Middleware (Authorization Flow with Middleware)

```text
Request to a route (e.g. /admin)
       │
       ▼
[Middleware runs]
       │
       ▼
[Get session/token from cookie]
       ├── No session ──► [Redirect to /login]
       │
       └── Has session ──► [Read role from session]
                                 ├── Role != 'admin' ──► [Redirect to home / or error page]
                                 │
                                 └── Role == 'admin' ──► [Allow request to proceed]
                                                               │
                                                               ▼
                                                      [Render /admin page]
```

### 37.3. Ví dụ mã nguồn phân quyền với Middleware (`middleware.ts`)

```typescript
// middleware.ts (đặt tại thư mục gốc của dự án)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getIronSession } from 'iron-session/edge';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const session = await getIronSession(req, res, {
    cookieName: 'session',
    password: process.env.SECRET_COOKIE_PASSWORD!,
  });

  const { user } = session;

  // Nếu truy cập trang admin nhưng không phải là admin
  if (req.nextUrl.pathname.startsWith('/admin') && user?.isAdmin !== true) {
    return NextResponse.redirect(new URL('/', req.url)); // Chuyển hướng về trang chủ
  }

  // Nếu chưa đăng nhập nhưng cố truy cập trang bị bảo vệ
  if (req.nextUrl.pathname.startsWith('/dashboard') && !user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return res;
}

---

## 38. Testing Next.js Applications - Introduction & Objectives (Giới thiệu & Mục tiêu kiểm thử)

### 38.1. Tại sao kiểm thử lại quan trọng? (Why is Testing Important?)
- **Ensure Quality (Đảm bảo chất lượng):** Phát hiện lỗi sớm trước khi sản phẩm đến tay người dùng cuối.
- **Increase Confidence (Tăng sự tự tin):** Tự tin hơn khi thực hiện refactor mã nguồn hoặc thêm các tính năng mới mà không sợ làm hỏng tính năng cũ.
- **Living Documentation (Tài liệu sống):** Mã kiểm thử đóng vai trò như một bộ tài liệu mô tả chính xác cách mã nguồn hoạt động.
- **Improve Architecture (Cải thiện kiến trúc):** Viết mã dễ kiểm thử (testable code) thường dẫn đến kiến trúc ứng dụng tốt hơn và decoupled hơn.

### 38.2. Chương trình tổng quan (Agenda)
1. **Unit Testing:** Với **Jest** dành cho Server & Client Components.
2. **Integration Testing:** Với **React Testing Library (RTL)**.
3. **End-to-End Testing:** Sử dụng **Cypress**.
4. **Testing the Backend:** Kiểm thử **API Routes & Server Actions**.

---

## 39. The Testing Pyramid (Mô hình Kim tự tháp Kiểm thử)

**Testing Pyramid** là mô hình trực quan hóa các cấp độ kiểm thử khác nhau cùng tỷ lệ phân bổ khuyến nghị giữa chúng.

```text
       /\
      /  \        Top (Smallest): End-to-End (E2E) Tests (Fewest, slow, expensive)
     / E2E\
    /------\      Middle: Integration Tests (Moderate amount)
   /  Integr\
  /----------\    Bottom (Widest): Unit Tests (Most numerous, fast, cheap)
 /    Unit    \
/--------------\
```

- **Bottom (Đáy kim tự tháp - Rộng nhất) - Unit Tests:** Kiểm thử các đơn vị mã nhỏ nhất (các hàm, components đơn lẻ) một cách cô lập. Thực thi cực kỳ nhanh và chi phí thấp.
- **Middle (Phần giữa) - Integration Tests:** Kiểm thử sự tương tác kết hợp giữa nhiều đơn vị mã với nhau.
- **Top (Đỉnh kim tự tháp - Nhỏ nhất) - End-to-End (E2E) Tests:** Kiểm thử toàn bộ luồng hoạt động của ứng dụng từ đầu đến cuối, mô phỏng chính xác hành vi người dùng thật. Tốc độ chậm nhất và chi phí cao nhất.

---

## 40. Unit Testing with Jest (Kiểm thử đơn vị với Jest)

- **Mục tiêu (Objective):** Kiểm thử một component hoặc một hàm đơn lẻ một cách độc lập, hoàn toàn tách biệt khỏi các phần khác của ứng dụng.
- **Công cụ (Tools):**
  - **Jest:** JavaScript Testing Framework mạnh mẽ và dễ thiết lập.
  - **React Testing Library (RTL):** Cung cấp các tiện ích để render components và tương tác với chúng theo đúng cách người dùng thật tương tác.

### 40.1. Luồng thực thi Unit Test (Unit Test Workflow)

```text
Test File ──► Jest Runner ──► Render Component ──► Simulate Interaction ──► Assert Result
```

### 40.2. Ví dụ Unit Test cho Client Component (Client Component Example)

#### A. Component cần kiểm thử (`Counter.tsx`)
```tsx
// Counter.tsx
'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

#### B. File kiểm thử (`Counter.test.tsx`)
```tsx
// Counter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('should render initial count and increment on click', () => {
    // 1. Render component
    render(<Counter />);

    // 2. Tìm các phần tử trên DOM
    const countElement = screen.getByText(/Count: 0/i);
    const button = screen.getByRole('button', { name: /Increment/i });

    // 3. Assertion: Kiểm tra trạng thái ban đầu
    expect(countElement).toBeInTheDocument();

    // 4. Action: Mô phỏng sự kiện click của người dùng
    fireEvent.click(button);

    // 5. Assertion: Kiểm tra trạng thái sau khi click
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
  });
});
```

### 40.3. Ví dụ Unit Test cho Server Component (Server Component Example)

#### A. Component cần kiểm thử (`UserProfile.tsx`)
```tsx
// UserProfile.tsx - Server Component (không có 'use client')
type User = { id: number; name: string; email: string };

export default async function UserProfile({ userId }: { userId: number }) {
  // Giả định hàm fetchUser lấy dữ liệu từ API
  const fetchUser = async (id: number): Promise<User> => {
    return { id, name: 'Leanne Graham', email: 'Sincere@april.biz' };
  };

  const user = await fetchUser(userId);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
#### B. File kiểm thử (`UserProfile.test.tsx`)
*Lưu ý: Chúng ta không test logic fetch dữ liệu, chỉ test xem UI có render chính xác với dữ liệu được cung cấp hay không.*

```tsx
// UserProfile.test.tsx
import { render, screen } from '@testing-library/react';
// Server component cần được render trong môi trường test
import UserProfile from './UserProfile';

// TypeScript sẽ báo lỗi vì chúng ta truyền một async component vào hàm render.
// Để giải quyết, chúng ta có thể sử dụng một mẹo nhỏ (trick):
const Resolved = async ({ children }: { children: React.ReactNode }) => await children;

describe('UserProfile Server Component', () => {
  it('renders user data correctly', async () => {
    // 1. Render async component bằng Resolved wrapper
    render(<Resolved>{UserProfile({ userId: 1 })}</Resolved>);

    // 2. Chờ và tìm các phần tử hiển thị
    const nameElement = await screen.findByRole('heading', { name: /Leanne Graham/i });
    const emailElement = await screen.findByText(/Sincere@april.biz/i);

    // 3. Assertion: Kiểm tra sự tồn tại của các phần tử
    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });
});
```

---

## 41. Integration Testing with React Testing Library (Kiểm thử tích hợp)

- **Mục tiêu (Objective):** Kiểm thử cách nhiều components hoạt động phối hợp với nhau như một khối chức năng hoàn chỉnh. Ví dụ: một biểu mẫu (form) và thông báo thành công xuất hiện sau khi gửi.
- **Công cụ (Tools):** Vẫn sử dụng **Jest** và **React Testing Library (RTL)**.
- **Khác biệt so với Unit Test (Difference from Unit Test):** Thay vì render một component đơn lẻ, chúng ta render một nhóm components (thường là cả một trang web) và kiểm thử luồng tương tác giữa chúng.

### 41.1. Luồng thực thi Integration Test (Integration Test Workflow)

```text
Test File ──► Render Page (with multiple components) ──► Simulate User Flow ──► Assert Final State
```

### 41.2. Ví dụ minh họa Integration Test (Integration Testing Example)

#### A. Components cần kiểm thử (`NewsletterForm.tsx` & `page.tsx`)
```tsx
// NewsletterForm.tsx
'use client';

export default function NewsletterForm({ setSuccess }: { setSuccess: (success: boolean) => void }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
  );
}

// page.tsx
'use client';
import { useState } from 'react';
import NewsletterForm from './NewsletterForm';

export default function Home() {
  const [success, setSuccess] = useState(false);
  return (
    <main>
      <h1>Join our Newsletter</h1>
      {success ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <NewsletterForm setSuccess={setSuccess} />
      )}
    </main>
  );
}
```

#### B. File kiểm thử tích hợp (`Home.test.tsx`)
```tsx
// Home.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './page';

describe('Newsletter Subscription Flow', () => {
  it('shows a success message after form submission', () => {
    render(<Home />);

    // 1. Tìm input và nút bấm
    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const subscribeButton = screen.getByRole('button', { name: /subscribe/i });

    // 2. Nhập thông tin và submit form
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(subscribeButton);

    // 3. Kiểm tra thông báo thành công xuất hiện
    const successMessage = screen.getByText(/Thank you for subscribing!/i);
    expect(successMessage).toBeInTheDocument();

    // 4. (Tùy chọn) Kiểm tra form đã biến mất khỏi màn hình
    expect(emailInput).not.toBeInTheDocument();
  });
});
```

---

## 42. End-to-End (E2E) Testing with Cypress (Kiểm thử toàn trình với Cypress)

- **Mục tiêu (Objective):** Mô phỏng một người dùng thực sự, kiểm thử toàn bộ ứng dụng từ giao diện người dùng (frontend) tới máy chủ (backend) ngay trên một trình duyệt thật.
- **Công cụ (Tool):** **Cypress**.
- **Ưu điểm (Advantages):** Kiểm thử toàn diện các luồng nghiệp vụ quan trọng nhất (Đăng ký, Đăng nhập, Thanh toán...). Đảm bảo tất cả các phần của hệ thống hoạt động trơn tru với nhau.

### 42.1. Luồng thực thi E2E Test (E2E Test Workflow)

### 42.2. Ví dụ minh họa E2E Test với Cypress (`cypress/e2e/navigation.cy.ts`)

```typescript
// cypress/e2e/navigation.cy.ts

describe('Page Navigation', () => {
  it('should navigate from home to the about page', () => {
    // 1. Bắt đầu từ trang chủ
    cy.visit('http://localhost:3000/');

    // 2. Tìm thẻ a có href chứa 'about' và click vào nó
    cy.get('a[href*="about"]').click();

    // 3. Đường dẫn URL mới phải chứa '/about'
    cy.url().should('include', '/about');

    // 4. Trang mới phải có thẻ h1 chứa chữ "About Us"
    cy.get('h1').contains('About Us');
  });
});
```

**Cách chạy E2E Test (How to run):**
1. **Khởi chạy Next.js dev server:** `npm run dev`
2. **Mở giao diện Cypress:** `npx cypress open`
3. **Chọn file test** và theo dõi test chạy trực tiếp trên trình duyệt.

---

## 43. Testing API Routes & Server Actions (Kiểm thử Backend: API Routes & Server Actions)

- **Mục tiêu (Objective):** Kiểm thử trực tiếp logic xử lý backend của Next.js mà không cần đi qua giao diện UI.
- **Phương pháp (Methods):**
  - **API Routes:** Gọi trực tiếp hàm handler với các đối tượng `req` và `res` được mock.
  - **Server Actions:** Vì Server Actions thực chất chỉ là các hàm `async`, chúng ta có thể import và gọi trực tiếp chúng trong file test.
- **Công cụ (Tools):** **Jest** và thư viện **`node-mocks-http`** để giả lập các đối tượng request/response.

### 43.1. Luồng thực thi kiểm thử API Route (API Route Test Workflow)

```text
Test File ──► Calls API Handler ──► Provide Mock Request ──► Assert Mock Response (status, body)
```

### 43.2. Ví dụ kiểm thử API Route (Testing API Route Example)

#### A. API Route cần kiểm thử (`app/api/hello/route.ts`)
```typescript
// app/api/hello/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello, World!' });
}
```

#### B. File kiểm thử API Route (`hello.test.ts`)
```typescript
// hello.test.ts
import { GET } from '@/app/api/hello/route';
import { NextRequest } from 'next/server';

describe('API Route: /api/hello', () => {
  it('should return a hello world message', async () => {
    // Mock một NextRequest đơn giản
    const request = new NextRequest('http://localhost/api/hello');

    // Gọi trực tiếp hàm handler
    const response = await GET(request);

    // Lấy dữ liệu JSON từ response
    const body = await response.json();

    // Assertion: Kiểm tra status code và nội dung trả về
    expect(response.status).toBe(200);
    expect(body).toEqual({ message: 'Hello, World!' });
  });
});
```

### 43.3. Ví dụ kiểm thử Server Action (Testing Server Action Example)

#### A. Server Action cần kiểm thử (`actions.ts`)
```typescript
// actions.ts
'use server';

// Giả định đây là đối tượng tương tác với cơ sở dữ liệu
const db = {
  items: [] as string[],
  addItem: async (item: string) => {
    db.items.push(item);
    return { success: true };
  },
};

export async function createItem(formData: FormData) {
  const item = formData.get('item')?.toString();

  if (!item) {
    return { success: false, error: 'Item is required' };
  }

  return await db.addItem(item);
}
#### B. File kiểm thử Server Action (`actions.test.ts`)
```typescript
// actions.test.ts
import { createItem } from './actions';

describe('Server Action: createItem', () => {
  it('should return an error if item is missing', async () => {
    const formData = new FormData(); // Empty FormData
    const result = await createItem(formData);

    expect(result).toEqual({ success: false, error: 'Item is required' });
  });

  it('should add an item successfully', async () => {
    const formData = new FormData();
    formData.append('item', 'New Test Item');

    const result = await createItem(formData);

    expect(result).toEqual({ success: true });
  });
});
```

---

## 44. Deploying App Router Projects to Vercel (Triển khai ứng dụng App Router lên Vercel)

**Vercel là gì?** Vercel là nền tảng điện toán đám mây (cloud platform) được sáng lập bởi chính đội ngũ phát triển Next.js. Vercel cung cấp cơ sở hạ tầng được tối ưu hóa hoàn hảo dành riêng cho các ứng dụng Next.js.

### 44.1. Tại sao nên chọn Vercel? (Why choose Vercel?)
- **Zero-Configuration (Không cần cấu hình):** Không cần thiết lập phức tạp; Vercel tự động phát hiện và build các dự án Next.js.
- **Performance Optimization (Tối ưu hóa hiệu năng):** Tự động áp dụng các Best Practices hàng đầu (Global CDN, caching, tối ưu hóa hình ảnh).
- **Full App Router Support (Hỗ trợ toàn diện App Router):** Các tính năng mới nhất như Server Components, Server Actions và Route Handlers đều được hỗ trợ mặc định.
- **Seamless Git Integration (Tích hợp Git mượt mà):** Tự động triển khai (deploy) mỗi khi bạn push code lên GitHub, GitLab hoặc Bitbucket.

### 44.2. Sơ đồ quy trình triển khai lên Vercel (Vercel Deployment Process Diagram)

```text
1. Developer
   ├── Viết mã nguồn ở môi trường local.
   └── git push lên repository (ví dụ: GitHub).
       │
       ▼
2. Vercel
   ├── Lắng nghe sự kiện push từ GitHub thông qua Webhooks.
   ├── Tự động tải mã nguồn mới nhất.
   ├── Build Project: Chạy lệnh `next build`.
   └── Deploy: Triển khai ứng dụng đã build lên mạng lưới Global CDN.
       │
       ▼
3. End-User (Người dùng cuối)
   └── Truy cập website với tốc độ nhanh nhất từ vị trí địa lý gần nhất.
```

### 44.3. Các bước triển khai chi tiết trên Vercel (Steps to Deploy on Vercel)

1. **Push code lên Git Provider:**
   - Đảm bảo dự án Next.js của bạn đã được đẩy lên một repository trên GitHub, GitLab, hoặc Bitbucket.
2. **Đăng ký / Đăng nhập vào Vercel:**
   - Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản Git của bạn.
3. **Import Project:**
   - Tại trang Dashboard, chọn **"Add New... -> Project"**.
   - Chọn repository Next.js của bạn và nhấn **"Import"**.
4. **Cấu hình (Tùy chọn):**
   - Vercel tự động nhận diện framework (Next.js) và các lệnh build một cách chính xác.
   - Bạn có thể bổ sung các Biến môi trường (Environment Variables) tại đây nếu cần (ví dụ: `DATABASE_URL`, `API_KEY`).
5. **Deploy:**
   - Nhấn nút **"Deploy"**. Vercel sẽ tiến hành quá trình build và triển khai.
   - Sau vài phút, ứng dụng của bạn sẽ có một URL công khai và sẵn sàng phục vụ!

---

## 45. CI/CD with Netlify and Other Platforms (CI/CD với Netlify và các nền tảng khác)

### 45.1. CI/CD là gì? (What is CI/CD?)
- **Continuous Integration (CI - Tích hợp liên tục):** Thường xuyên gộp (merge) mã nguồn mới vào nhánh chính (main branch). Mỗi lần tích hợp đều được xác minh tự động bằng quy trình build và chạy test tự động.
- **Continuous Deployment (CD - Triển khai liên tục):** Tự động triển khai mọi thay đổi vượt qua giai đoạn CI lên môi trường thực tế (production).

### 45.2. Tại sao nên sử dụng CI/CD? (Why use CI/CD?)
- **Giảm thiểu lỗi do con người (Minimize human error).**
- **Tăng tốc độ phát hành sản phẩm (Increase the speed of product releases).**
- **Quy trình phát triển nhất quán và đáng tin cậy (Consistent and reliable development process).**

**Các nền tảng phổ biến (Popular Platforms):** Netlify, AWS Amplify, Google Firebase Hosting, Azure Static Web Apps, Render.

### 45.3. Sơ đồ quy trình CI/CD với Netlify (CI/CD Process Diagram with Netlify)

Quy trình tương tự như Vercel, tập trung mạnh mẽ vào tự động hóa:

1. **Push to `main` branch:**
   - Lập trình viên push code lên nhánh `main`.
   - $\Rightarrow$ **Kích hoạt Deploy to Production** (Triển khai bản thực tế).
2. **Create Pull Request (PR):**
   - Lập trình viên tạo một Pull Request để review code.
   - $\Rightarrow$ **Kích hoạt Deploy Preview**. Netlify/Vercel tạo một bản xem trước độc lập cho các thay đổi trong PR đó. Điều này cực kỳ hữu ích để kiểm thử trước khi tiến hành merge code!

### 45.4. Ví dụ cấu hình triển khai trên Netlify (`netlify.toml`)

**Hướng dẫn & File cấu hình `netlify.toml`:**
1. **Kết nối tương tự như Vercel:** Đăng nhập Netlify bằng tài khoản Git và import repository.
2. **Cấu hình Build:**
   - Build command: `next build`
   - Publish directory: `.next`
3. **Sử dụng file cấu hình `netlify.toml` (Khuyên dùng):** Tạo file `netlify.toml` tại thư mục gốc của dự án để quản lý cấu hình build một cách rõ ràng.

```toml
# netlify.toml

[build]
  # Lệnh dùng để build dự án
  command = "next build"

  # Thư mục chứa kết quả build để Netlify tiến hành deploy.
  # Đối với ứng dụng Next.js tiêu chuẩn, đây là thư mục mặc định.
  publish = ".next"

[build.environment]
  # Các biến môi trường cần thiết cho quá trình build
  # NEXT_PUBLIC_API_URL = "https://api.example.com"

# Cấu hình plugin Next.js của Netlify để xử lý SSR, ISR...
[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 46. Containerizing with Docker (Đóng gói ứng dụng với Docker)

### 46.1. Docker là gì? (What is Docker?)
- **Docker là gì?** Docker là một nền tảng cho phép bạn đóng gói một ứng dụng cùng toàn bộ các thư viện/dependencies phụ thuộc của nó vào trong một **"container"**.
- **Container là gì?** Là một đơn vị phần mềm độc lập, siêu nhẹ chứa tất cả những gì cần thiết để ứng dụng có thể chạy: mã nguồn, môi trường thực thi (Node.js runtime), các thư viện hệ thống, cấu hình...
- **Tại sao nên sử dụng Docker cho Next.js?**
  - **Consistency (Tính đồng nhất):** Ứng dụng chạy hoàn toàn giống hệt nhau trên máy lập trình viên (local), server staging, và server production.
  - **Portability (Tính linh hoạt/Di động):** Dễ dàng di chuyển ứng dụng giữa các nhà cung cấp dịch vụ đám mây (AWS, Google Cloud, Azure).
  - **Isolation (Tính cô lập):** Chạy nhiều ứng dụng độc lập trên cùng một server vật lý mà không sợ xung đột môi trường.
  - **Scalability (Khả năng mở rộng):** Dễ dàng nhân bản các containers để xử lý lưu lượng truy cập cao (kết hợp với Kubernetes/Docker Swarm).

### 46.2. Sơ đồ kiến trúc Docker Container (Docker Container Architecture Diagram)

```text
+-------------------------------------------------------+
|                 Your Server / Cloud VM                |
|  +-------------------------------------------------+  |
|  |                  Docker Engine                  |  |
|  |  +-------------------------------------------+  |  |
|  |  |            My Next.js Container           |  |  |
|  |  |  +-------------------------------------+  |  |  |
|  |  |  | - Next.js Application (.next)       |  |  |  |
|  |  |  | - Node.js Runtime                   |  |  |  |
|  |  |  | - Production Dependencies (node_mod) |  |  |  |
|  |  |  | - OS Libraries (from base image)    |  |  |  |
|  |  |  +-------------------------------------+  |  |  |
|  |  +-------------------------------------------+  |  |
|  +-------------------------------------------------+  |
+-------------------------------------------------------+
```

### 46.3. Ví dụ viết Dockerfile - Phần 1 (Build Stage)

```dockerfile
# Dockerfile

# --- Stage 1: Build ---
# Sử dụng đầy đủ image Node.js để build ứng dụng
FROM node:18-alpine AS builder

# Thiết lập thư mục làm việc bên trong container
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt tất cả phụ thuộc (bao gồm cả devDependencies)
RUN npm install

# Sao chép toàn bộ mã nguồn ứng dụng
COPY . .

# Build ứng dụng Next.js
RUN npm run build

# --- Stage 2: Production ---
# Sử dụng image Node.js nhẹ hơn dành riêng cho môi trường Production
FROM node:18-alpine AS runner

WORKDIR /app

# Chỉ cài đặt các phụ thuộc cần thiết cho production để giảm tối đa kích thước image
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev

# Sao chép kết quả build từ stage 'builder'
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Mở cổng 3000 để truy cập từ bên ngoài
EXPOSE 3000

# Lệnh để khởi chạy ứng dụng
CMD ["npm", "start"]
```

### 46.4. Hướng dẫn sử dụng và khởi chạy (How to use it)

1. **Build image:**
   ```bash
   docker build -t my-nextjs-app .
   ```
2. **Run container:**
   ```bash
   docker run -p 3000:3000 my-nextjs-app
   ```

---

## 47. Serverless and Edge Functions (Serverless và Edge Functions)

### 47.1. Serverless là gì? (What is Serverless?)
- Là một mô hình phát triển đám mây nơi nhà cung cấp dịch vụ (Vercel, AWS) tự động quản lý việc cấp phát và mở rộng hạ tầng máy chủ.
- Bạn chỉ cần viết và triển khai mã nguồn (functions) mà không cần lo lắng về việc quản trị hay bảo trì server.
- **Ví dụ trong Next.js:** Route Handlers (API Routes) thường được triển khai dưới dạng Serverless Functions.

### 47.2. Edge Functions là gì? (What are Edge Functions?)
- Là các Serverless Functions được triển khai trên mạng lưới phân phối nội dung toàn cầu (Global Content Delivery Network - CDN), đặt ở vị trí địa lý **càng gần người dùng cuối càng tốt**.
- **Mục đích:** Tối đa hóa việc giảm độ trễ (reduce latency) bằng cách xử lý logic ngay tại "rìa" (edge) của mạng lưới.
- **Ví dụ trong Next.js:** **Middleware** là ví dụ điển hình và phổ biến nhất của một Edge Function.

### 47.3. Sơ đồ so sánh: Serverless vs. Edge Functions (Serverless vs. Edge Functions Diagram)

```text
Traditional/Serverless (Centralized - Tập trung):
  User (Vietnam) -> Request -> Server (US-West) -> Response -> User (Vietnam)
  => High latency (Độ trễ cao do khoảng cách địa lý xa).

Edge Functions (Distributed - Phân tán):
  User (Vietnam) -> Request -> Edge Node (Singapore) -> Response -> User (Vietnam)
  => Very low latency (Độ trễ cực thấp vì mã nguồn được thực thi ngay gần vị trí người dùng).
```

### 47.4. Ví dụ Next.js Middleware hoạt động như một Edge Function (`middleware.ts`)

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lấy thông tin vị trí địa lý từ request (Vercel tự động cung cấp thông tin này)
export function middleware(request: NextRequest) {
  const { geo } = request;
  const country = geo?.country || 'N/A';

  // Nếu người dùng truy cập từ quốc gia 'XX', hiển thị trang bị chặn
  if (country === 'XX') {
    return new NextResponse('Access denied from your country.', { status: 403 });
  }

  // Cho phép các request khác đi tiếp
  return NextResponse.next();
}

---

## 48. Scalability Overview (Tổng quan về Khả năng mở rộng)

- **Scalability (Khả năng mở rộng):** Là khả năng của một hệ thống xử lý lượng công việc tăng lên bằng cách bổ sung thêm tài nguyên.
- **Mục tiêu (Goal):** Duy trì hoặc cải thiện hiệu năng khi số lượng người dùng và khối lượng dữ liệu gia tăng.

### 48.1. Hai phương pháp mở rộng chính (Two main approaches)
- **Vertical Scaling (Mở rộng theo chiều dọc / Scale up):** Tăng cường sức mạnh phần cứng của một máy chủ đơn lẻ (thêm CPU, RAM).
  - *Pros (Ưu điểm):* Đơn giản, không cần thay đổi kiến trúc mã nguồn.
  - *Cons (Nhược điểm):* Giới hạn vật lý phần cứng, chi phí cực kỳ đắt đỏ khi đạt ngưỡng, tạo điểm lỗi đơn lẻ (single point of failure).
- **Horizontal Scaling (Mở rộng theo chiều ngang / Scale out):** Bổ sung thêm nhiều máy chủ mới vào hệ thống.
  - *Pros (Ưu điểm):* Linh hoạt, khả năng chịu lỗi (fault tolerance) tốt hơn rất nhiều.
  - *Cons (Nhược điểm):* Quản lý phức tạp hơn, cần cơ chế đồng bộ và cân bằng tải (Load Balancer).

---

## 49. Code Organization: Modular Folder Structure (Tổ chức mã nguồn theo mô-đun)

Trong Next.js App Router, việc tổ chức mã nguồn theo các mô-đun chức năng hoặc "features" giúp dự án dễ bảo trì (maintainable), mở rộng (scalable), và giúp các đội ngũ phát triển phối hợp dễ dàng hơn.

- **Nguyên tắc (Principle):** Tất cả các tệp liên quan đến một tính năng cụ thể (Giao diện UI, logic, API route) nên được đặt nằm cùng một nơi (**co-located**).

### 49.1. Sơ đồ cây thư mục minh họa (Modular Structure Tree)

```text
/src
├── /app                    # Các trang chính và đường dẫn (Main pages and routes)
│   ├── /api                # API Routes
│   │   └── /products
│   │       └── route.ts
│   ├── /products           # Products Feature
│   │   ├── /_components    # Components chỉ dùng riêng cho tính năng Products
│   │   │   └── product-card.tsx
│   │   ├── /[id]           # Product detail page
│   │   │   └── page.tsx
│   │   └── page.tsx        # Product list page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── /components             # Components dùng chung cho toàn bộ ứng dụng
│   └── /ui                 # Basic UI components (Button, Input, Card)
├── /lib                    # Các hàm tiện ích, cấu hình chung (Utility functions, configs)
└── /services               # Business logic, các lệnh gọi API bên thứ ba
```

---

## 50. Reusability: Layouts and Templates (Tái sử dụng: Layouts và Templates)

### 50.1. Layouts vs. Templates
- **Layouts:** Là giao diện dùng chung (shared UI) cho nhiều trang. Khi chuyển hướng qua lại giữa các trang, Layout **giữ nguyên trạng thái (preserve state) và không bị re-render lại**. Rất lý tưởng cho headers, sidebars, và footers.
- **Templates:** Tương tự như Layouts, nhưng chúng **tạo ra một bản thể mới (new instance) cho từng trang con** khi chuyển hướng. Trạng thái (state) sẽ **không** được giữ lại. Thích hợp khi bạn cần chạy lại các hook `useEffect` hoặc logic khởi tạo mỗi khi người dùng truy cập trang mới.

### 50.2. Cấu trúc lồng nhau giữa Layout và Template (Nested Structure)

```jsx
<Layout>
  {/* Header, Sidebar, Footer (Không bị re-render) */}
  <Template key={route}>
    {children} {/* Component của trang hiện tại (Re-renders khi chuyển trang) */}
  </Template>
</Layout>
```

### 50.3. Ví dụ mã nguồn Dashboard Layout (`/app/dashboard/layout.tsx`)

```tsx
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Sidebar này sẽ KHÔNG bị re-render khi chuyển giữa các trang con */}
      <nav>Dashboard Sidebar</nav>
      {children}
    </section>
  );
}
```

---

## 51. Architecture: Microservices and API Gateways (Kiến trúc Microservices & API Gateway)

### 51.1. Microservices
Break down một ứng dụng lớn (monolith) thành nhiều dịch vụ nhỏ hơn, hoàn toàn độc lập với nhau. Mỗi dịch vụ tự quản lý một nghiệp vụ cụ thể (users, products, orders...).

- **Lợi ích (Benefits):** Dễ dàng phát triển, triển khai độc lập, lựa chọn công nghệ linh hoạt cho từng service, cải thiện khả năng chịu lỗi của toàn bộ hệ thống.

### 51.2. API Gateway
Đóng vai trò là một điểm truy cập duy nhất (single entry point) cho tất cả các yêu cầu từ phía client gửi lên. Nó tự động điều hướng (route) các yêu cầu tới đúng microservice tương ứng.

- **Nhiệm vụ chính (Responsibilities):** Xác thực người dùng (Authentication), Giới hạn tần suất gọi (Rate limiting), Ghi nhật ký (Logging), Điều hướng luồng (Routing).

### 51.3. Luồng hoạt động minh họa API Gateway (Architecture Diagram & Example Flow)


```text
1. User truy cập https://my-app.com/api/users/1.
2. Yêu cầu (Request) gửi tới API Gateway.
3. API Gateway xác thực token (Authentication), sau đó điều hướng request tới User Service.
4. User Service xử lý yêu cầu, truy vấn CSDL (DB), và trả kết quả về cho API Gateway.
5. API Gateway gửi phản hồi (Response) cuối cùng về cho User.
```

---

## 52. Performance: CDN and Caching Strategies (Tối ưu hiệu năng: CDN và Chiến lược Cache)

### 52.1. CDN (Content Delivery Network)
- Là mạng lưới các máy chủ được phân bố toàn cầu. Nó lưu trữ các bản sao tài nguyên tĩnh của bạn (hình ảnh, JS, CSS).
- Khi người dùng gửi yêu cầu, CDN phục vụ các tài nguyên từ máy chủ ở vị trí địa lý **gần họ nhất**, giúp giảm thiểu độ trễ và cải thiện tốc độ tải trang đáng kể.

### 52.2. Các chiến lược Caching (Caching Strategies)
- **Browser Cache (Cache Trình duyệt):** Trình duyệt tự lưu tài nguyên tĩnh trực tiếp trên máy của người dùng.
- **CDN Cache (Edge Cache):** CDN lưu trữ tài nguyên ngay tại các trạm "rìa" (edge) của mạng lưới.
- **Server-Side Cache (Application Cache):** Lưu trữ kết quả của các tác vụ tốn chi phí xử lý cao (truy vấn DB phức tạp, gọi API bên thứ 3) trực tiếp vào bộ nhớ RAM phía Server (ví dụ: **Redis**, **Memcached**).

### 52.3. Ví dụ mã nguồn Server-Side Caching trong Next.js (`unstable_cache`)

Sử dụng dịch vụ như Vercel, Cloudflare, hoặc AWS CloudFront để tự động phân phối tài nguyên tĩnh Next.js. Đối với dữ liệu phía server:

```typescript
// Trong một Next.js Route Handler hoặc Server Component
import { unstable_cache } from 'next/cache';
import { db } from '@/lib/db';

const getProducts = unstable_cache(
  async () => db.product.findMany(), // Tác vụ tốn chi phí (Expensive function)
  ['products'],                      // Cache key (Khóa xác định cache)
  { revalidate: 3600 }               // Cache tự động hết hạn sau 1 giờ (3600 giây)
);
```

---

## 53. Database: Scaling Techniques (Kỹ thuật mở rộng Cơ sở dữ liệu)

Khi lưu lượng truy cập tăng đột biến, **Database (CSDL) thường là điểm nghẽn (bottleneck) đầu tiên**. Các kỹ thuật scaling giúp CSDL xử lý được nhiều yêu cầu hơn.

### 53.1. Các kỹ thuật cốt lõi (Key Techniques)

1. **Read Replicas (Bản sao chỉ đọc):**
   - Tạo ra các bản sao (replicas) của CSDL chính. Tất cả các yêu cầu **GHI (WRITE)** đều gửi về CSDL chính (Primary DB), trong khi các yêu cầu **ĐỌC (READ)** được phân phối đều cho các bản sao (Replicas).
   - *Rất hiệu quả cho các ứng dụng có tỷ lệ đọc dữ liệu cao (read-heavy).*

2. **Sharding (Phân mảnh dữ liệu):**
   - Phân chia dữ liệu theo chiều ngang trên nhiều máy chủ CSDL khác nhau.
   - *Ví dụ:* Shard 1 lưu người dùng từ tên A-M, Shard 2 lưu người dùng từ tên N-Z.

3. **Connection Management & Connection Pooling (Quản lý kết nối CSDL):**
   - Mỗi kết nối CSDL đều tiêu tốn tài nguyên hệ thống.
   - **Connection Pooling:** Sử dụng một "bể kết nối" (pool) được khởi tạo sẵn. Thay vì mở một kết nối mới cho từng request (dễ làm sập CSDL), ứng dụng sẽ "mượn" một kết nối có sẵn từ pool và "trả lại" sau khi sử dụng xong.
   - Các thư viện ORM như **Prisma** hoặc dịch vụ DBaaS như **Neon**, **Supabase** thường được tích hợp sẵn Connection Pooling qua Proxy để ngăn CSDL bị ngợp bởi hàng nghìn kết nối đồng thời từ Serverless Functions.

---

## 54. Setting Up i18n in Next.js App Router (Thiết lập Đa ngôn ngữ i18n trong App Router)

Next.js cung cấp khả năng hỗ trợ sẵn (built-in support) cho việc định tuyến đa ngôn ngữ (i18n routing) mà không cần dùng đến thư viện bên thứ ba.

- **Folder Structure (Cấu trúc thư mục):** Sử dụng một đường dẫn động `[lang]` làm thư mục cha chứa toàn bộ các trang của ứng dụng.
- **Middleware:** Sử dụng `middleware.ts` để tự động phát hiện ngôn ngữ ưu tiên của người dùng (từ header `Accept-Language` của trình duyệt) và chuyển hướng tới URL chứa tiền tố ngôn ngữ tương ứng.

### 54.1. Sơ đồ cây thư mục i18n (i18n Folder Structure Diagram)

```text
/
├── /app
│   └── /[lang]/ ...        # Chứa toàn bộ giao diện theo từng locale
├── /dictionaries
│   ├── en.json             # File từ điển Tiếng Anh
│   └── vi.json             # File từ điển Tiếng Việt
├── /i18n-config.ts         # Cấu hình i18n tập trung
└── middleware.ts           # Xử lý logic điều hướng ngôn ngữ
```

### 54.2. Ví dụ mã nguồn Middleware nâng cao (`middleware.ts`)
Sử dụng thư viện `negotiator` và `@formatjs/intl-localematcher` để đọc ngôn ngữ từ browser header:

```typescript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './i18n-config';
import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const locales = i18n.locales;
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Chuyển hướng nếu đường dẫn thiếu tiền tố locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
```

---

## 55. Managing Dynamic Multilingual Content (Quản lý nội dung đa ngôn ngữ động)

- Lưu trữ các chuỗi văn bản dịch (text strings) bên trong các file JSON.
- Tạo một hàm helper để tải file JSON tương ứng cho một ngôn ngữ (`lang`) cụ thể.
- Sử dụng cú pháp **`dynamic import()`** để chỉ tải duy nhất file ngôn ngữ thực sự cần thiết (**code-splitting**), giúp tối ưu hóa hiệu năng cực tốt.

### 55.1. File quản lý từ điển (`lib/dictionary.ts`)

```typescript
// lib/dictionary.ts
import 'server-only';
import type { Locale } from '@/i18n-config';

// Liệt kê tất cả các dictionary để Next.js phát hiện tại thời điểm build time
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  vi: () => import('@/dictionaries/vi.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
```

### 55.2. Sử dụng trong Page Component (`app/[lang]/page.tsx`)

```tsx
// app/[lang]/page.tsx
import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/i18n-config';

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  // Lấy từ điển ngôn ngữ ngay trên server
  const dict = await getDictionary(lang);

  return <button>{dict.products.addToCart}</button>;
}
```

---

## 56. Implementing Right-to-Left - RTL (Hỗ trợ các ngôn ngữ viết từ Phải sang Trái)

Các ngôn ngữ như tiếng Ả Rập (`ar`) hay tiếng Do Thái (`he`) yêu cầu bố cục giao diện hiển thị từ phải sang trái (RTL).

- **Thuộc tính `dir` (The dir attribute):** Bổ sung thuộc tính `dir="rtl"` vào thẻ `<html>` cho các ngôn ngữ này.
- **CSS Logical Properties:** Sử dụng các thuộc tính CSS logic (như `margin-inline-start`, `text-align: start`) thay cho `margin-left` hay `text-align: left` để giao diện tự động đảo chiều chính xác.

### 56.1. Ví dụ cập nhật Root Layout (`app/[lang]/layout.tsx`)

```tsx
// app/[lang]/layout.tsx
export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}
```

---

## 57. Language Switching and Locale-based Routing (Chuyển đổi ngôn ngữ và Điều hướng dựa trên Locale)

Để tạo một component chuyển đổi ngôn ngữ (Language Switcher), chúng ta cần tạo ra các liên kết dẫn tới cùng một trang hiện tại nhưng với tiền tố ngôn ngữ (locale prefix) khác.

- Sử dụng hook **`usePathname()`** để lấy đường dẫn hiện tại và thay thế đoạn (segment) locale một cách động.
- **Luồng hoạt động (Language Switcher Flow):**
  `[User ở trang /en/products]` $\rightarrow$ `[Click "Tiếng Việt"]` $\rightarrow$ `[Link trỏ về /vi/products]` $\rightarrow$ `[Next.js re-render lại trang với lang="vi"]`.

### 57.1. Ví dụ mã nguồn Language Switcher Component (`components/LanguageSwitcher.tsx`)

```tsx
// components/LanguageSwitcher.tsx
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { i18n, Locale } from '@/i18n-config';

export default function LanguageSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
      {i18n.locales.map((locale) => {
        const isCurrent = pathName.startsWith(`/${locale}`);
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              style={{
                fontWeight: isCurrent ? 'bold' : 'normal',
                textDecoration: 'none',
              }}
            >
              {locale.toUpperCase()}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
```

---

## 58. When to use Redux with Next.js App Router? (Khi nào nên dùng Redux với App Router?)

Redux không phải lúc nào cũng bắt buộc. Bạn chỉ nên xem xét sử dụng Redux khi:

1. **Complex and Global State (State phức tạp và toàn cục):** Có lượng lớn dữ liệu cần chia sẻ giữa nhiều components không có quan hệ cha-con trực tiếp (ví dụ: thông tin người dùng, trạng thái giỏ hàng, giao diện trang).
2. **Complicated State Update Logic (Logic cập nhật state phức tạp):** Khi các logic thay đổi state trở nên phức tạp, Redux cung cấp một cấu trúc rõ ràng (actions, reducers) để quản lý.
3. **Middleware is Needed (Cần xử lý Middleware):** Khi bạn cần xử lý các tác vụ bất đồng bộ (gọi API), ghi log, hoặc side effects theo cách đồng nhất. Redux Toolkit cung cấp hàm `createAsyncThunk` rất mạnh mẽ cho việc này.
4. **Predictable State (State có thể dự đoán):** Cần một nguồn dữ liệu đáng tin cậy duy nhất (single source of truth) và khả năng debug mạnh mẽ với **Redux DevTools**.

### 58.1. Sơ đồ cây quyết định sử dụng Redux (Decision Tree: Redux with Next.js App Router)

```text
               Does your app have complex state?
                            │
               ┌────────────┴────────────┐
               │ No                      │ Yes
               ▼                         ▼
  Use useState, useReducer,     Do you need to share state
         Context API            across many components?
                                         │
                           ┌─────────────┴─────────────┐
                           │ No                        │ Yes
                           ▼                           ▼
                   Pass props or use             Consider using
                      Context API                    Redux
```

---

## 59. Required Libraries and Setup (Các thư viện cần thiết & Cài đặt)

Để tích hợp Redux vào dự án Next.js App Router, chúng ta cần 3 thư viện chính từ đội ngũ Redux:

- **`@reduxjs/toolkit`:** Bộ công cụ chính thức, chuẩn hóa giúp phát triển Redux hiệu quả.
- **`react-redux`:** Thư viện giúp kết nối Redux Store với các React components.
- **`redux`:** Thư viện lõi Redux (được tự động cài đặt làm phụ thuộc của `@reduxjs/toolkit`).

### 59.1. Lệnh cài đặt (Installation)

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 60. Suggested Folder Structure (Cấu trúc thư mục khuyến nghị)

Để giữ cho codebase ngăn nắp, chúng ta nên đặt tất cả các logic liên quan đến Redux vào trong một thư mục riêng biệt, chẳng hạn như `lib/redux` hoặc `store`.

### 60.1. Sơ đồ cây thư mục cấu trúc Redux (Redux Folder Structure)

```text
nextjs-redux-app
├── package.json
└── /lib
    └── /redux
        ├── store.ts            # Cấu hình Redux store
        ├── provider.tsx         # Component Provider bọc ứng dụng
        └── /features
            └── /counter
                └── counterSlice.ts  # Reducer & Actions cho từng tính năng
```

---

## 61. Store Configuration using Redux Toolkit (Cấu hình Store với Redux Toolkit)

Sử dụng hàm **`configureStore`** từ `@reduxjs/toolkit` để tạo store. Hàm này tự động thiết lập Redux DevTools và tích hợp sẵn các middleware mặc định hữu ích (như `redux-thunk`).

### 61.1. Mã nguồn cấu hình Store với TypeScript (`lib/redux/store.ts`)

```typescript
// lib/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
// Import các reducers khác tại đây

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      // Bổ sung các reducers khác tại đây
    },
  });
};

// Suy luận kiểu dữ liệu cho makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Suy luận kiểu 'RootState' và 'AppDispatch' trực tiếp từ store
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
```

---

## 62. Creating Async Slices with `createAsyncThunk` (Tạo Async Slices với `createAsyncThunk`)

`createAsyncThunk` là một hàm giúp xử lý các action bất đồng bộ (ví dụ: gọi API). Nó tự động sinh ra các action types cho 3 trạng thái: **`pending`**, **`fulfilled`**, và **`rejected`**.

### 62.1. Sơ đồ quy trình luồng Async Thunk (Async Thunk Workflow Diagram)

```text
Component Dispatches Action
       │
       ▼
createAsyncThunk (Thực thi payload creator)
       │
       ▼
Makes API Call ──► API returns result
                       │
                       ▼
Thunk dispatches fulfilled hoặc rejected action
       │
       ├────► fulfilled  (Thành công)
       └────► rejected   (Thất bại)
```

### 62.2. Ví dụ tạo Async Thunk (`counterSlice.ts`)

```typescript
// Trong counterSlice.ts
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Tạo một async thunk để lấy giá trị tăng ngẫu nhiên
export const fetchIncrementAmount = createAsyncThunk(
  'counter/fetchIncrementAmount',
  async (amount: number) => {
    // Giả lập một lệnh gọi API (Simulate an API call)
    const response = await new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 1000)
    );
    return response.data;
  }
);
```

---

## 63. Handling Async Thunks in Slices (Xử lý Async Thunks trong Slices)

Bên trong `createSlice`, chúng ta sử dụng trường **`extraReducers`** để lắng nghe và xử lý các trạng thái của một `createAsyncThunk`.

### 63.1. Ví dụ mã nguồn cấu hình `extraReducers` (`counterSlice.ts`)

```typescript
// counterSlice.ts
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  },
  reducers: {
    // Synchronous reducers...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncrementAmount.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIncrementAmount.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.value += action.payload; // Cập nhật state với dữ liệu trả về từ API
      })
      .addCase(fetchIncrementAmount.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default counterSlice.reducer;
```

---

## 64. Connecting Redux Store to Next.js App Router (Kết nối Redux Store vào App Router)

Vì App Router ưu tiên các **Server Components**, chúng ta **không thể sử dụng `Provider` trực tiếp trong file gốc `layout.tsx`**. Thay vào đó, chúng ta tạo một Client Component `StoreProvider` để bọc ứng dụng.

### 64.1. Tạo Client Component `StoreProvider` (`lib/redux/provider.tsx`)

```tsx
// lib/redux/provider.tsx
'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Tạo ra instance của store trong lần render đầu tiên
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
```

### 64.2. Bọc `StoreProvider` vào Root Layout (`app/layout.tsx`)

```tsx
// app/layout.tsx
import StoreProvider from '../lib/redux/provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

---


## 65. Using Redux in Server and Client Components (Sử dụng Redux trong Server và Client Components)

- **Client Components:** Có thể sử dụng các hook **`useSelector`** và **`useDispatch`** tương tự như một ứng dụng React tiêu chuẩn để đọc dữ liệu và cập nhật state.
- **Server Components:** **Không thể** truy cập trực tiếp vào Redux Store vì store thuộc về trạng thái phía Client (client-side state).

### 65.1. Mô hình kết hợp (Data Flow Pattern)

Fetch dữ liệu ban đầu ở **Server Component**, sau đó truyền xuống cho **Client Component** thông qua **`props`**. Client Component có thể sử dụng dữ liệu đó để khởi tạo trạng thái trong Redux nếu cần thiết.

```text
Server Component (Fetches data from API)
       │
       ▼ (Passes props)
Client Component
       │
       ▼ (Dispatches to Redux Store)
Redux Store
```

---

## 66. Using Redux with Server Actions (Kế thừa Redux với Server Actions)

Server Actions là cách cho phép thực thi logic phía server trực tiếp từ phía client.

### 66.1. Quy trình xử lý (Workflow)

1. **Client Component** gọi một **Server Action**.
2. **Server Action** thực thi logic trên server (ví dụ: ghi/cập nhật CSDL).
3. **Server Action** có thể trả dữ liệu kết quả về cho client.
4. Tại **Client Component**, sau khi `await` lệnh Server Action xong, sử dụng dữ liệu trả về đó để `dispatch` một action cập nhật Redux Store.

### 66.2. Ví dụ mã nguồn Server Action kết hợp Redux (`app/actions.ts` & Client Component)

```typescript
// app/actions.ts
'use server'
import { revalidatePath } from 'next/cache';

export async function updateUser(data: any) {
  // Logic cập nhật người dùng trên server...
  const updatedUser = { name: 'New Name' }; // Mock dữ liệu trả về
  revalidatePath('/'); // Revalidate cache nếu cần
  return updatedUser;
}
```

```tsx
// app/some-client-component.tsx
'use client'
import { useDispatch } from 'react-redux';
import { updateUser as updateUserAction } from './actions';
import { userSlice } from '../lib/redux/features/userSlice';

function UserProfile() {
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    // 1. Gọi Server Action
    const updatedUser = await updateUserAction({ id: 1 });
    // 2. Dùng dữ liệu trả về để cập nhật Redux store
    dispatch(userSlice.actions.setUser(updatedUser));
  };

  return <button onClick={handleUpdate}>Update User</button>;
}
```

```





























