import { useEffect, useMemo, useState } from 'react';
import type { Product } from '../types/Product';
import type { Filters } from '../types/Filters';
import { matchesFilters } from './useFilteredProducts';
import type { FacetCount } from './useFacetCounts';

export type BrandCount = FacetCount;

/** Fetches the precomputed top-brand list (name + pinned order), then recounts against the local sample given active filters. */
export function useBrandCounts(products: Product[], filters: Filters): BrandCount[] {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    fetch('/data/brands.json')
      .then((res) => res.json() as Promise<BrandCount[]>)
      .then((data) => setNames(data.map((brand) => brand.name)))
      .catch(() => setNames([]));
  }, []);

  return useMemo(() => {
    const relevant = products.filter((product) => matchesFilters(product, filters, { brand: true }));

    return names.map((name) => ({
      name,
      count: relevant.filter((product) => product.brand === name).length,
    }));
  }, [names, products, filters]);
}
