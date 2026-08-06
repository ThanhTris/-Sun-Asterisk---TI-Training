import { useMemo } from 'react';
import type { Product } from '../types/Product';
import type { Filters } from '../types/Filters';
import { matchesFilters } from './useFilteredProducts';

export interface RatingOption {
  value: number;
  count: number;
}

const RATING_THRESHOLDS = [4, 3, 2, 1];

/** "N stars & up" counts, recomputed against the local sample given active filters (excluding rating itself). */
export function useRatingOptions(products: Product[], filters: Filters): RatingOption[] {
  return useMemo(() => {
    const relevant = products.filter((product) => matchesFilters(product, filters, { rating: true }));

    return RATING_THRESHOLDS.map((value) => ({
      value,
      count: relevant.filter((product) => (product.rating ?? 0) >= value).length,
    }));
  }, [products, filters]);
}
