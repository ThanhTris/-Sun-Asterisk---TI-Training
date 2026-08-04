import type { Product } from '../types/Product';
import { useFacetCounts, type FacetCount } from './useFacetCounts';

export type BrandCount = FacetCount;

function selectBrand(product: Product) {
  return product.brand;
}

export function useBrandCounts(products: Product[]): BrandCount[] {
  return useFacetCounts(products, selectBrand);
}
