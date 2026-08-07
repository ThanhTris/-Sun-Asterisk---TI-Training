import { useMemo } from 'react';
import type { Product } from '../types/Product';
import type { Filters } from '../types/Filters';
import { matchesFilters } from './useFilteredProducts';

export interface PriceBounds {
  min: number;
  max: number;
}

const FALLBACK_BOUNDS: PriceBounds = { min: 1, max: 5000 };

// Price range of products matching every active filter except price itself.
export function usePriceBounds(products: Product[], filters: Filters): PriceBounds {
  return useMemo(() => {
    const matching = products.filter((product) => matchesFilters(product, filters, { price: true }));
    if (matching.length === 0) return FALLBACK_BOUNDS;

    let min = Infinity;
    let max = -Infinity;
    for (const product of matching) {
      if (product.price < min) min = product.price;
      if (product.price > max) max = product.price;
    }

    return { min: Math.floor(min), max: Math.ceil(max) };
  }, [products, filters]);
}
