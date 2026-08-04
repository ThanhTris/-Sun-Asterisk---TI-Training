import { useEffect, useState } from 'react';
import type { FacetCount } from './useFacetCounts';

export type BrandCount = FacetCount;

/** Fetches the precomputed top-brand facet list (name + count), in display order. */
export function useBrandCounts(): BrandCount[] {
  const [brands, setBrands] = useState<BrandCount[]>([]);

  useEffect(() => {
    fetch('/data/brands.json')
      .then((res) => res.json() as Promise<BrandCount[]>)
      .then(setBrands)
      .catch(() => setBrands([]));
  }, []);

  return brands;
}
