import { useMemo } from 'react';
import type { Product } from '../types/Product';

/** Distinct rating values actually present in the data, descending (used as "N & up" filter options). */
export function useRatingOptions(products: Product[]): number[] {
  return useMemo(() => {
    const values = new Set<number>();
    for (const product of products) {
      if (product.rating) values.add(product.rating);
    }
    return Array.from(values).sort((a, b) => b - a);
  }, [products]);
}
