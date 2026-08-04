import type { Product, RawAlgoliaHit } from './types.js';

// Index demo cua Algolia la index public, nhieu tutorial/nguoi dung khac cung
// ghi du lieu test vao do (vd: "helloworld"). Loc cac gia tri giong data rac.
const JUNK_PATTERN = /^(helloworld|hello world|test\d*|foo|bar|asdf+|xxx+|lorem ipsum|demo\d*|abc\d*|sample)$/i;

function isJunkText(value: string): boolean {
  return JUNK_PATTERN.test(value.trim());
}

/**
 * Chuyen 1 hit tho tu Algolia thanh Product sach:
 * - Bo cac field noi bo/khong dung (_highlightResult, _snippetResult, hierarchicalCategories, url)
 * - Loc bo gia tri category bi nhiem rac
 * - Tra ve null neu thieu field bat buoc (objectID, name, image, gia hop le)
 */
export function normalizeProduct(raw: RawAlgoliaHit): Product | null {
  if (!raw.objectID || !raw.name?.trim() || !raw.image?.startsWith('http')) {
    return null;
  }
  if (typeof raw.price !== 'number' || Number.isNaN(raw.price) || raw.price <= 0) {
    return null;
  }

  const categories = (raw.categories ?? []).filter(
    (category) => typeof category === 'string' && category.trim() !== '' && !isJunkText(category)
  );
  if (categories.length === 0) {
    return null;
  }

  return {
    objectID: raw.objectID,
    name: raw.name.trim(),
    description: raw.description?.trim() ?? '',
    brand: raw.brand?.trim() || undefined,
    categories,
    type: raw.type?.trim() || undefined,
    price: raw.price,
    price_range: raw.price_range,
    image: raw.image,
    free_shipping: Boolean(raw.free_shipping),
    popularity: raw.popularity,
    rating: raw.rating,
  };
}

export function normalizeProducts(rawHits: RawAlgoliaHit[]): {
  products: Product[];
  droppedCount: number;
} {
  const seenIds = new Set<string>();
  const products: Product[] = [];
  let droppedCount = 0;

  for (const raw of rawHits) {
    const product = normalizeProduct(raw);
    if (!product || seenIds.has(product.objectID)) {
      droppedCount++;
      continue;
    }
    seenIds.add(product.objectID);
    products.push(product);
  }

  return { products, droppedCount };
}
