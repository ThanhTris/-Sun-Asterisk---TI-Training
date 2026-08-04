export type SortOption = 'featured' | 'price-asc' | 'price-desc';

export interface Filters {
  search: string;
  category: string | null;
  brands: string[];
  minPrice: number | null;
  maxPrice: number | null;
  minRating: number | null;
  freeShippingOnly: boolean;
  sortBy: SortOption;
  page: number;
}

export const PAGE_SIZE = 16;

export const initialFilters: Filters = {
  search: '',
  category: null,
  brands: [],
  minPrice: null,
  maxPrice: null,
  minRating: null,
  freeShippingOnly: true,
  sortBy: 'featured',
  page: 1,
};
