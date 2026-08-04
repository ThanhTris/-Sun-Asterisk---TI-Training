import type { Filters } from '../types/Filters';
import type { FacetCount } from '../hooks/useFacetCounts';
import type { PriceBounds } from '../hooks/usePriceBounds';
import { FilterPanel } from './shared/FilterPanel';
import { OptionList } from './shared/OptionList';
import { PriceRangeFilter } from './PriceRangeFilter';
import { RatingFilter } from './RatingFilter';

interface SidebarProps {
  categories: FacetCount[];
  brands: FacetCount[];
  ratingOptions: number[];
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
  categories,
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
        <h2 className="m-0 text-[1.1rem]">Filters</h2>
        <button
          type="button"
          className="cursor-pointer border-none bg-transparent p-0 text-[0.8rem] text-[#f5a300] hover:underline"
          onClick={onClearFilters}
        >
          Clear filters
        </button>
      </div>

      <FilterPanel title="Category">
        <OptionList
          mode="single"
          options={categories}
          selected={filters.category}
          onSelect={onSelectCategory}
          allLabel="All"
        />
      </FilterPanel>

      <FilterPanel title="Brand">
        <OptionList
          mode="multi"
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
        <label className="flex cursor-pointer items-center gap-2 text-[0.9rem]">
          <input
            type="checkbox"
            checked={filters.freeShippingOnly}
            onChange={(e) => onToggleFreeShipping(e.target.checked)}
          />
          Display only items with free shipping
        </label>
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
