import { useCallback, useReducer } from 'react';
import type { Filters, PageSize, SortOption } from '../types/Filters';
import { initialFilters } from '../types/Filters';

type Action =
  | { type: 'SET_SEARCH'; value: string }
  | { type: 'SET_CATEGORY'; value: string | null }
  | { type: 'TOGGLE_BRAND'; value: string }
  | { type: 'SET_PRICE_RANGE'; min: number | null; max: number | null }
  | { type: 'SET_MIN_RATING'; value: number | null }
  | { type: 'SET_FREE_SHIPPING'; value: boolean }
  | { type: 'SET_SORT'; value: SortOption }
  | { type: 'SET_PAGE_SIZE'; value: PageSize }
  | { type: 'SET_PAGE'; value: number }
  | { type: 'RESET' };

function filtersReducer(state: Filters, action: Action): Filters {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.value, minPrice: null, maxPrice: null, page: 1 };
    case 'SET_CATEGORY':
      return { ...state, category: action.value, minPrice: null, maxPrice: null, page: 1 };
    case 'TOGGLE_BRAND': {
      const brands = state.brands.includes(action.value)
        ? state.brands.filter((brand) => brand !== action.value)
        : [...state.brands, action.value];
      return { ...state, brands, minPrice: null, maxPrice: null, page: 1 };
    }
    case 'SET_PRICE_RANGE':
      return { ...state, minPrice: action.min, maxPrice: action.max, page: 1 };
    case 'SET_MIN_RATING':
      return { ...state, minRating: action.value, minPrice: null, maxPrice: null, page: 1 };
    case 'SET_FREE_SHIPPING':
      return { ...state, freeShippingOnly: action.value, minPrice: null, maxPrice: null, page: 1 };
    case 'SET_SORT':
      return { ...state, sortBy: action.value, page: 1 };
    case 'SET_PAGE_SIZE':
      return { ...state, pageSize: action.value, page: 1 };
    case 'SET_PAGE':
      return { ...state, page: action.value };
    case 'RESET':
      return initialFilters;
    default:
      return state;
  }
}

export function useFilters() {
  const [filters, dispatch] = useReducer(filtersReducer, initialFilters);

  const setSearch = useCallback((value: string) => dispatch({ type: 'SET_SEARCH', value }), []);
  const setCategory = useCallback(
    (value: string | null) => dispatch({ type: 'SET_CATEGORY', value }),
    []
  );
  const toggleBrand = useCallback((value: string) => dispatch({ type: 'TOGGLE_BRAND', value }), []);
  const setPriceRange = useCallback(
    (min: number | null, max: number | null) => dispatch({ type: 'SET_PRICE_RANGE', min, max }),
    []
  );
  const setMinRating = useCallback(
    (value: number | null) => dispatch({ type: 'SET_MIN_RATING', value }),
    []
  );
  const setFreeShippingOnly = useCallback(
    (value: boolean) => dispatch({ type: 'SET_FREE_SHIPPING', value }),
    []
  );
  const setSortBy = useCallback((value: SortOption) => dispatch({ type: 'SET_SORT', value }), []);
  const setPageSize = useCallback(
    (value: PageSize) => dispatch({ type: 'SET_PAGE_SIZE', value }),
    []
  );
  const setPage = useCallback((value: number) => dispatch({ type: 'SET_PAGE', value }), []);
  const resetFilters = useCallback(() => dispatch({ type: 'RESET' }), []);

  return {
    filters,
    setSearch,
    setCategory,
    toggleBrand,
    setPriceRange,
    setMinRating,
    setFreeShippingOnly,
    setSortBy,
    setPageSize,
    setPage,
    resetFilters,
  };
}
