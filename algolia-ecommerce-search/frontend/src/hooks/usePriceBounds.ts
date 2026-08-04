export interface PriceBounds {
  min: number;
  max: number;
}

/** Real price range of the reference dataset ($1–$5,000). */
export function usePriceBounds(): PriceBounds {
  return { min: 1, max: 5000 };
}
