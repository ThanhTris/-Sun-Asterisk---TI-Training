import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { Product } from './types.js';

const OUTPUT_DIR = path.resolve(import.meta.dirname, '../output');

// Chi khop cac chuoi ro rang la data test/placeholder, tranh trung voi tu tieng Anh
// binh thuong (vd "sound bar", "test drive" trong mo ta san pham that).
const JUNK_PATTERN = /helloworld|hello world|^test\d*$|^foo$|^bar$|asdf{2,}|lorem ipsum|^sample\d*$/i;

function checkTextFieldsForJunk(product: Product): string[] {
  const issues: string[] = [];
  const fieldsToCheck: [string, string | undefined][] = [
    ['name', product.name],
    ['description', product.description],
    ['brand', product.brand],
    ['type', product.type],
  ];
  for (const [field, value] of fieldsToCheck) {
    if (value && JUNK_PATTERN.test(value)) {
      issues.push(`${field} nghi ngo la rac: "${value}"`);
    }
  }
  for (const category of product.categories) {
    if (JUNK_PATTERN.test(category)) {
      issues.push(`category nghi ngo la rac: "${category}"`);
    }
  }
  return issues;
}

async function main() {
  const raw = await readFile(path.join(OUTPUT_DIR, 'products.json'), 'utf-8');
  const products: Product[] = JSON.parse(raw);

  console.log(`Tong so san pham: ${products.length}`);

  const seenIds = new Set<string>();
  let duplicateIds = 0;
  let missingName = 0;
  let missingImage = 0;
  let missingCategories = 0;
  let invalidPrice = 0;
  let priceMin = Infinity;
  let priceMax = -Infinity;
  let priceSum = 0;
  const categorySet = new Set<string>();
  const junkIssues: string[] = [];

  for (const product of products) {
    if (seenIds.has(product.objectID)) duplicateIds++;
    else seenIds.add(product.objectID);

    if (!product.name?.trim()) missingName++;
    if (!product.image?.startsWith('http')) missingImage++;
    if (!product.categories || product.categories.length === 0) missingCategories++;

    if (typeof product.price !== 'number' || Number.isNaN(product.price) || product.price <= 0) {
      invalidPrice++;
    } else {
      priceMin = Math.min(priceMin, product.price);
      priceMax = Math.max(priceMax, product.price);
      priceSum += product.price;
    }

    for (const category of product.categories ?? []) categorySet.add(category);

    const issues = checkTextFieldsForJunk(product);
    for (const issue of issues) {
      junkIssues.push(`[${product.objectID}] ${issue}`);
    }
  }

  console.log(`objectID trung lap: ${duplicateIds}`);
  console.log(`Thieu name: ${missingName}`);
  console.log(`Thieu/sai image url: ${missingImage}`);
  console.log(`Thieu categories: ${missingCategories}`);
  console.log(`Gia khong hop le: ${invalidPrice}`);
  console.log(
    `Gia: min=${priceMin === Infinity ? '-' : priceMin}, max=${priceMax === -Infinity ? '-' : priceMax}, avg=${(priceSum / products.length).toFixed(2)}`
  );
  console.log(`So category duy nhat: ${categorySet.size}`);
  console.log(`Ban ghi nghi ngo nhiem rac: ${junkIssues.length}`);
  for (const issue of junkIssues) console.log(`  - ${issue}`);

  const hasBlockingIssues =
    duplicateIds > 0 || missingName > 0 || missingImage > 0 || missingCategories > 0 || invalidPrice > 0;

  if (hasBlockingIssues || junkIssues.length > 0) {
    console.log('\nKET QUA: du lieu can xem lai truoc khi dung.');
    process.exitCode = 1;
  } else {
    console.log('\nKET QUA: du lieu sach, san sang su dung.');
  }
}

main().catch((error) => {
  console.error('Loi khi kiem tra du lieu:', error);
  process.exitCode = 1;
});
