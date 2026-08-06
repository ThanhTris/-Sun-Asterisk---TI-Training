import { useMemo } from 'react';
import type { Product } from '../types/Product';
import type { Filters } from '../types/Filters';

interface FilteredProductsResult {
  pageItems: Product[];
  totalCount: number;
  totalPages: number;
}

export interface MatchSkip {
  category?: boolean;
  brand?: boolean;
  price?: boolean;
  rating?: boolean;
}

/** Matches a product against active filters, optionally skipping one facet (to compute that facet's own counts/bounds). */
export function matchesFilters(product: Product, filters: Filters, skip: MatchSkip = {}): boolean {
  const term = filters.search.trim().toLowerCase();
  if (term && !product.name.toLowerCase().includes(term)) return false;
  if (!skip.category && filters.category && !product.categories.includes(filters.category)) return false;
  if (
    !skip.brand &&
    filters.brands.length > 0 &&
    (!product.brand || !filters.brands.includes(product.brand))
  )
    return false;
  if (!skip.price) {
    if (filters.minPrice != null && product.price < filters.minPrice) return false;
    if (filters.maxPrice != null && product.price > filters.maxPrice) return false;
  }
  if (!skip.rating && filters.minRating != null && (product.rating ?? 0) < filters.minRating) return false;
  if (filters.freeShippingOnly && !product.free_shipping) return false;
  return true;
}

export function useFilteredProducts(products: Product[], filters: Filters): FilteredProductsResult {
  return useMemo(() => {
    const filtered = products.filter((product) => matchesFilters(product, filters));

    const sorted = [...filtered].sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return (b.popularity ?? 0) - (a.popularity ?? 0);
      }
    });

    const totalCount = sorted.length;
    const totalPages = Math.max(1, Math.ceil(totalCount / filters.pageSize));
    const start = (filters.page - 1) * filters.pageSize;
    const pageItems = sorted.slice(start, start + filters.pageSize);

    return { pageItems, totalCount, totalPages };
  }, [products, filters]);
}
