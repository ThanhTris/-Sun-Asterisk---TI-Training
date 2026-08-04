import type { Product } from '../types/Product';
import { useFacetCounts, type FacetCount } from './useFacetCounts';

export type CategoryCount = FacetCount;

function selectCategory(product: Product) {
  return product.categories[0];
}

/** Uses categories[0] (top-level) as the category grouping for the sidebar. */
export function useCategoryCounts(products: Product[]): CategoryCount[] {
  return useFacetCounts(products, selectCategory);
}
