import { useProducts } from './hooks/useProducts';
import { useCategoryTree } from './hooks/useCategoryTree';
import { useBrandCounts } from './hooks/useBrandCounts';
import { useRatingOptions } from './hooks/useRatingOptions';
import { usePriceBounds } from './hooks/usePriceBounds';
import { useFilters } from './hooks/useFilters';
import { useFilteredProducts } from './hooks/useFilteredProducts';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ProductList } from './components/ProductList';
import { Pagination } from './components/Pagination';
import { Select } from './components/shared/Select';
import { StatusMessage } from './components/shared/StatusMessage';
import type { PageSize, SortOption } from './types/Filters';

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: 'Sort by featured', value: 'featured' },
  { label: 'Price ascending', value: 'price-asc' },
  { label: 'Price descending', value: 'price-desc' },
];

const PAGE_SIZE_OPTIONS: { label: string; value: PageSize }[] = [
  { label: '16 hits per page', value: 16 },
  { label: '32 hits per page', value: 32 },
  { label: '64 hits per page', value: 64 },
];

function App() {
  const { products, isLoading, error } = useProducts();
  const categoryTree = useCategoryTree();
  const brands = useBrandCounts();
  const ratingOptions = useRatingOptions();
  const priceBounds = usePriceBounds();

  const {
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
  } = useFilters();

  const { pageItems, totalPages } = useFilteredProducts(products, filters);

  return (
    <div className="flex min-h-screen flex-col">
      <Header searchTerm={filters.search} onSearchChange={setSearch} />

      <div className="mx-auto grid w-full max-w-[1280px] flex-1 grid-cols-1 gap-6 p-6 md:grid-cols-[300px_1fr]">
        <Sidebar
          categoryTree={categoryTree}
          brands={brands}
          ratingOptions={ratingOptions}
          priceBounds={priceBounds}
          filters={filters}
          onSelectCategory={setCategory}
          onToggleBrand={toggleBrand}
          onSetPriceRange={setPriceRange}
          onSelectMinRating={setMinRating}
          onToggleFreeShipping={setFreeShippingOnly}
          onClearFilters={resetFilters}
        />

        <main className="min-w-0">
          {isLoading && <StatusMessage variant="loading">Loading products…</StatusMessage>}
          {error && <StatusMessage variant="error">{error}</StatusMessage>}

          {!isLoading && !error && (
            <>
              <div className="mb-4 flex items-center justify-end border-b border-[#e5e5e5] pb-4">
                <div className="flex items-center gap-2">
                  <Select
                    ariaLabel="Sort by"
                    value={filters.sortBy}
                    options={SORT_OPTIONS}
                    onChange={setSortBy}
                  />
                  <Select
                    ariaLabel="Hits per page"
                    value={filters.pageSize}
                    options={PAGE_SIZE_OPTIONS}
                    onChange={setPageSize}
                  />
                </div>
              </div>

              <ProductList products={pageItems} />

              <Pagination page={filters.page} totalPages={totalPages} onPageChange={setPage} />
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
