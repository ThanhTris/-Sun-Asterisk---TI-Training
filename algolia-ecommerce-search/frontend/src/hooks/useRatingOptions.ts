export interface RatingOption {
  value: number;
  count: number;
}

/** Cumulative "N stars & up" counts from the reference dataset, descending from 4 to 1. */
const RATING_OPTIONS: RatingOption[] = [
  { value: 4, count: 16074 },
  { value: 3, count: 17696 },
  { value: 2, count: 17890 },
  { value: 1, count: 18046 },
];

export function useRatingOptions(): RatingOption[] {
  return RATING_OPTIONS;
}
