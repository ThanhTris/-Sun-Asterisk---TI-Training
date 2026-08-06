import type { Filters } from '../types/Filters';
import type { FacetCount } from '../hooks/useFacetCounts';
import type { CategoryNode } from '../hooks/useCategoryTree';
import type { PriceBounds } from '../hooks/usePriceBounds';
import type { RatingOption } from '../hooks/useRatingOptions';
import { SidebarFilters } from './SidebarFilters';

interface FiltersDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onClearFilters: () => void;
  resultCount: number;
  categoryTree: CategoryNode[];
  brands: FacetCount[];
  ratingOptions: RatingOption[];
  priceBounds: PriceBounds;
  filters: Filters;
  onSelectCategory: (category: string | null) => void;
  onToggleBrand: (brand: string) => void;
  onSetPriceRange: (min: number | null, max: number | null) => void;
  onSelectMinRating: (rating: number | null) => void;
  onToggleFreeShipping: (checked: boolean) => void;
}

/** Full-screen filters overlay shown below the `md` breakpoint. */
export function FiltersDrawer({
  isOpen,
  onClose,
  onClearFilters,
  resultCount,
  ...filterProps
}: FiltersDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white md:hidden">
      <div className="flex items-center justify-between border-b border-[#e5e5e5] px-4 py-4">
        <h2 className="m-0 text-[1.5rem] font-bold text-primary">Filters</h2>
        <span className="text-sm font-bold text-primary">{resultCount.toLocaleString()} results</span>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <SidebarFilters {...filterProps} />
      </div>

      <div className="flex gap-3 border-t border-[#e5e5e5] p-4">
        <button
          type="button"
          onClick={onClearFilters}
          className="flex-1 cursor-pointer rounded border-none bg-[rgba(65,66,71,0.08)] px-4 py-3 text-sm font-semibold text-[#414247]"
        >
          Reset filters
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex-1 cursor-pointer rounded border-none bg-accent px-4 py-3 text-sm font-semibold text-white"
        >
          See {resultCount.toLocaleString()} results
        </button>
      </div>
    </div>
  );
}
