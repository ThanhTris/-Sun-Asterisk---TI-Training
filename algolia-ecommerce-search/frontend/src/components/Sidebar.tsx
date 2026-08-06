import type { Filters } from '../types/Filters';
import type { FacetCount } from '../hooks/useFacetCounts';
import type { CategoryNode } from '../hooks/useCategoryTree';
import type { PriceBounds } from '../hooks/usePriceBounds';
import type { RatingOption } from '../hooks/useRatingOptions';
import { SidebarFilters } from './SidebarFilters';

interface SidebarProps {
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
  onClearFilters: () => void;
}

/** Desktop sidebar. Hidden below `md`; the mobile filters drawer takes over there. */
export function Sidebar(props: SidebarProps) {
  const { onClearFilters, ...filterProps } = props;

  return (
    <aside className="hidden flex-col gap-6 md:flex">
      <div className="flex items-center justify-between">
        <h2 className="m-0 text-[1.5rem] font-bold text-primary">Filters</h2>
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-[0.8rem] text-[rgba(33,36,61,0.5)] hover:text-[rgba(33,36,61,0.7)]"
          onClick={onClearFilters}
        >
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <path d="M3 4v5h5" />
          </svg>
          Clear filters
        </button>
      </div>

      <SidebarFilters {...filterProps} />
    </aside>
  );
}
