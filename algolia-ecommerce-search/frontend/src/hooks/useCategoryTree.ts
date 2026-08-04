import { useEffect, useState } from 'react';

export interface CategoryChild {
  name: string;
  count: number;
}

export interface CategoryNode extends CategoryChild {
  children: CategoryChild[];
}

/** Fetches the precomputed 2-level category facet tree (top categories + subcategories by count). */
export function useCategoryTree(): CategoryNode[] {
  const [tree, setTree] = useState<CategoryNode[]>([]);

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
        setTree(sorted);
      })
      .catch(() => setTree([]));
  }, []);

  return tree;
}
