import { useMemo } from 'react';

export interface FacetCount {
  name: string;
  count: number;
}

// Counts how many items match each value returned by `selector`, sorted by count desc.
export function useFacetCounts<T>(
  items: T[],
  selector: (item: T) => string | undefined
): FacetCount[] {
  return useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of items) {
      const value = selector(item);
      if (!value) continue;
      counts.set(value, (counts.get(value) ?? 0) + 1);
    }
    return Array.from(counts, ([name, count]) => ({ name, count })).sort(
      (a, b) => b.count - a.count
    );
  }, [items, selector]);
}
