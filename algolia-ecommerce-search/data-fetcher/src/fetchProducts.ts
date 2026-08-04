import { algoliasearch } from 'algoliasearch';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import type { RawAlgoliaHit, AlgoliaSearchResponse, Product } from './types.js';
import { normalizeProducts } from './normalize.js';

const APP_ID = 'latency';
const SEARCH_API_KEY = '6be0576ff61c053d5f9a3225e2a90f76';
const INDEX_NAME = 'instant_search';

const HITS_PER_PAGE = 100;
const MAX_PRODUCTS = 1000;

const OUTPUT_DIR = path.resolve(import.meta.dirname, '../output');

async function fetchRawProducts(): Promise<RawAlgoliaHit[]> {
  const client = algoliasearch(APP_ID, SEARCH_API_KEY);
  const pagesNeeded = Math.ceil(MAX_PRODUCTS / HITS_PER_PAGE);
  const rawHits: RawAlgoliaHit[] = [];

  for (let page = 0; page < pagesNeeded; page++) {
    const { results } = await client.search<RawAlgoliaHit>({
      requests: [
        {
          indexName: INDEX_NAME,
          query: '',
          page,
          hitsPerPage: HITS_PER_PAGE,
        },
      ],
    });

    const result = results[0] as AlgoliaSearchResponse;
    rawHits.push(...result.hits);
    console.log(`Trang ${page + 1}/${pagesNeeded} - lay duoc ${result.hits.length} san pham`);

    if (page + 1 >= result.nbPages) break;
  }

  return rawHits.slice(0, MAX_PRODUCTS);
}

function extractCategories(products: Product[]): string[] {
  const categorySet = new Set<string>();
  for (const product of products) {
    for (const category of product.categories ?? []) {
      categorySet.add(category);
    }
  }
  return Array.from(categorySet).sort();
}

async function main() {
  console.log('Dang lay du lieu tu Algolia...');
  const rawHits = await fetchRawProducts();

  const { products, droppedCount } = normalizeProducts(rawHits);
  if (droppedCount > 0) {
    console.log(`Da loai ${droppedCount} ban ghi bi trung hoac thieu du lieu/nhiem rac.`);
  }

  const categories = extractCategories(products);

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(
    path.join(OUTPUT_DIR, 'products.json'),
    JSON.stringify(products, null, 2),
    'utf-8'
  );
  await writeFile(
    path.join(OUTPUT_DIR, 'categories.json'),
    JSON.stringify(categories, null, 2),
    'utf-8'
  );

  console.log(`Xong! Da luu ${products.length} san pham va ${categories.length} danh muc vao ${OUTPUT_DIR}`);
}

main().catch((error) => {
  console.error('Loi khi lay du lieu:', error);
  process.exitCode = 1;
});
