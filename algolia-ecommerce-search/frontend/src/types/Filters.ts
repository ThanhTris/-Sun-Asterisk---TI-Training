export type SortOption = 'featured' | 'price-asc' | 'price-desc';

export type PageSize = 16 | 32 | 64;

export interface Filters {
  search: string;
  category: string | null;
  brands: string[];
  minPrice: number | null;
  maxPrice: number | null;
  minRating: number | null;
  freeShippingOnly: boolean;
  sortBy: SortOption;
  pageSize: PageSize;
  page: number;
}

export const initialFilters: Filters = {
  search: '',
  category: null,
  brands: [],
  minPrice: null,
  maxPrice: null,
  minRating: null,
  freeShippingOnly: false,
  sortBy: 'featured',
  pageSize: 16,
  page: 1,
};
