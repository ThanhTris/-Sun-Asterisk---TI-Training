import { useEffect, useMemo, useState } from 'react';
import type { Product } from '../types/Product';
import type { Filters } from '../types/Filters';
import { matchesFilters } from './useFilteredProducts';

export interface CategoryChild {
  name: string;
  count: number;
}

export interface CategoryNode extends CategoryChild {
  children: CategoryChild[];
}

/** Fetches the precomputed 2-level category structure (names + order), then recounts against the local sample given active filters. */
export function useCategoryTree(products: Product[], filters: Filters): CategoryNode[] {
  const [structure, setStructure] = useState<CategoryNode[]>([]);

  useEffect(() => {
    fetch('/data/categories.json')
      .then((res) => res.json() as Promise<CategoryNode[]>)
      .then((data) => {
        const sorted = [...data]
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((node) => ({
            ...node,
            children: [...node.children].sort((a, b) => a.name.localeCompare(b.name)),
          }));
        setStructure(sorted);
      })
      .catch(() => setStructure([]));
  }, []);

  return useMemo(() => {
    const relevant = products.filter((product) => matchesFilters(product, filters, { category: true }));

    return structure.map((node) => ({
      ...node,
      count: relevant.filter((product) => product.categories.includes(node.name)).length,
      children: node.children.map((child) => ({
        ...child,
        count: relevant.filter((product) => product.categories.includes(child.name)).length,
      })),
    }));
  }, [structure, products, filters]);
}
