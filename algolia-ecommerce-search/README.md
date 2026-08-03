# Algolia E-commerce Search

Du an luyen tap: lay du lieu san pham tu Algolia demo API (index `instant_search`),
luu thanh JSON tinh, roi dung React + TypeScript de xay giao dien tim kiem/loc san pham.

## Cau truc thu muc

```
algolia-ecommerce-search/
├── data-fetcher/     # Node + TypeScript - script goi Algolia API, xuat ra JSON
│   ├── src/
│   │   ├── fetchProducts.ts
│   │   └── types.ts
│   └── output/
│       ├── products.json
│       └── categories.json
└── frontend/         # Vite + React + TypeScript - giao dien hien thi/tim kiem san pham
    ├── public/data/  # ban copy cua products.json / categories.json de FE fetch
    └── src/
        ├── types/
        ├── hooks/
        └── components/
```

## Nguon du lieu

- Algolia demo credentials (cong khai, chi doc):
  - App ID: `latency`
  - Search API Key: `6be0576ff61c053d5f9a3225e2a90f76`
  - Index: `instant_search`
- Day la du lieu demo cua Algolia, chi dung de hoc/luyen tap, khong dung cho production.

## Cach chay

**1. Lay du lieu (data-fetcher)**

```bash
cd data-fetcher
npm install
npm run fetch
```

Script se lay 1000 san pham dau tien, tu dong chuan hoa (bo field noi bo cua
Algolia, loc bo gia tri category bi nhiem rac, bo ban ghi trung/thieu du lieu),
va luu vao `data-fetcher/output/products.json` + `output/categories.json`.

Kiem tra chat luong du lieu bat cu luc nao bang:

```bash
npm run validate
```

Script se bao cao: so ban ghi trung `objectID`, thieu field bat buoc, gia khong
hop le, va cac gia tri nghi ngo la data rac (index demo cua Algolia la index
public nen doi khi bi lan data test cua nguoi khac).

Sau khi fetch xong, copy 2 file JSON sang `frontend/public/data/` de FE su dung
(hoac chinh script fetch de ghi thang vao do).

**2. Chay giao dien (frontend)**

```bash
cd frontend
npm install
npm run dev
```

Mo `http://localhost:5173`.

## Ke hoach 5 ngay

### Ngay 1 - Setup & lay du lieu tho
- Tao cau truc thu muc du an (`data-fetcher`, `frontend`).
- Setup `data-fetcher` (Node + TypeScript), cai `algoliasearch`.
- Viet script goi Algolia API, phan trang de lay danh sach san pham.
- Xuat ket qua tho ra `products.json`, kiem tra du lieu nhan duoc.

### Ngay 2 - Xu ly & chuan hoa du lieu
- Dinh nghia `type Product` sach (whitelist field), tach rieng `RawAlgoliaHit`
  cho du lieu tho tra ve tu Algolia.
- Viet ham `normalizeProduct`: bo field noi bo cua Algolia (`_highlightResult`,
  `_snippetResult`, `hierarchicalCategories`), loc gia tri category bi nhiem rac,
  loai ban ghi trung `objectID` hoac thieu field bat buoc.
- Viet script `validateProducts.ts` (`npm run validate`) de kiem tra chat luong
  du lieu: trung lap, thieu field, gia khong hop le, dau hieu data rac.
- Tach danh sach category rieng (`categories.json`) phuc vu cho filter sau nay.
- Copy du lieu da chuan hoa sang `frontend/public/data`.

**Ket qua kiem tra thuc te (1000 san pham lay ve):** phat hien 1 ban ghi bi lan
gia tri `"helloworld"` trong `hierarchicalCategories.lvl1` (data test cua nguoi
khac ghi vao index demo public) - da bi loai bo hoan toan vi field nay khong
duoc dua vao `Product` sach. Sau chuan hoa: 0 trung lap, 0 thieu field, 0 gia
tri rac con sot - `npm run validate` bao "du lieu sach, san sang su dung".

### Ngay 3 - Scaffold FE & hien thi danh sach co ban
- Khoi tao du an Vite + React + TypeScript.
- Tao `Product` type, hook `useProducts` de load JSON.
- Tao component `ProductCard`, `ProductList`, hien thi grid san pham co ban.

### Ngay 4 - Search & Filter
- Thanh tim kiem theo ten san pham (client-side).
- Filter theo category, free_shipping, khoang gia.
- Quan ly state bang `useState`/`useReducer` hoac Context neu can chia se giua nhieu component.

### Ngay 5 - Hoan thien
- Phan trang hoac "load more".
- Xu ly loading/empty/error state ro rang.
- Responsive day du (mobile/tablet/desktop).
- Don code, cap nhat README, chuan bi demo.
