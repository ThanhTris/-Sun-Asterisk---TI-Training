import type { Filters } from '../types/Filters';
import type { FacetCount } from '../hooks/useFacetCounts';
import type { CategoryNode } from '../hooks/useCategoryTree';
import type { PriceBounds } from '../hooks/usePriceBounds';
import type { RatingOption } from '../hooks/useRatingOptions';
import { FilterPanel } from './shared/FilterPanel';
import { OptionList } from './shared/OptionList';
import { CategoryTree } from './CategoryTree';
import { PriceRangeFilter } from './PriceRangeFilter';
import { RatingFilter } from './RatingFilter';
import { Switch } from './shared/Switch';

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

export function Sidebar({
  categoryTree,
  brands,
  ratingOptions,
  priceBounds,
  filters,
  onSelectCategory,
  onToggleBrand,
  onSetPriceRange,
  onSelectMinRating,
  onToggleFreeShipping,
  onClearFilters,
}: SidebarProps) {
  return (
    <aside className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="m-0 text-[1.5rem] font-bold text-primary">Filters</h2>
        <button
          type="button"
          className="flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 text-[0.8rem] text-[#666] hover:underline"
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

      <FilterPanel title="Category">
        <CategoryTree tree={categoryTree} selected={filters.category} onSelect={onSelectCategory} />
      </FilterPanel>

      <FilterPanel title="Brand">
        <OptionList
          options={brands}
          selected={filters.brands}
          onSelect={onToggleBrand}
          searchable
          searchPlaceholder="Search for brands…"
        />
      </FilterPanel>

      <FilterPanel title="Price">
        <PriceRangeFilter
          bounds={priceBounds}
          value={{ min: filters.minPrice, max: filters.maxPrice }}
          onApply={onSetPriceRange}
        />
      </FilterPanel>

      <FilterPanel title="Free shipping">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[0.9rem] text-[#3b4468]">Display only items with free shipping</span>
          <div className="flex items-center gap-2">
            <span
              className={`text-xs ${filters.freeShippingOnly ? 'font-semibold text-accent' : 'text-[#999]'}`}
            >
              {filters.freeShippingOnly ? 'Yes' : 'No'}
            </span>
            <Switch checked={filters.freeShippingOnly} onChange={onToggleFreeShipping} />
          </div>
        </div>
      </FilterPanel>

      <FilterPanel title="Ratings">
        <RatingFilter
          options={ratingOptions}
          selected={filters.minRating}
          onSelect={onSelectMinRating}
        />
      </FilterPanel>
    </aside>
  );
}
