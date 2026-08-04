import { useProducts } from './hooks/useProducts';
import { useCategoryCounts } from './hooks/useCategoryCounts';
import { useBrandCounts } from './hooks/useBrandCounts';
import { useRatingOptions } from './hooks/useRatingOptions';
import { usePriceBounds } from './hooks/usePriceBounds';
import { useFilters } from './hooks/useFilters';
import { useFilteredProducts } from './hooks/useFilteredProducts';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { ProductList } from './components/ProductList';
import { Pagination } from './components/Pagination';
import { Select } from './components/shared/Select';
import { StatusMessage } from './components/shared/StatusMessage';
import type { SortOption } from './types/Filters';

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: 'Sort by featured', value: 'featured' },
  { label: 'Price ascending', value: 'price-asc' },
  { label: 'Price descending', value: 'price-desc' },
];

function App() {
  const { products, isLoading, error } = useProducts();
  const categories = useCategoryCounts(products);
  const brands = useBrandCounts(products);
  const ratingOptions = useRatingOptions(products);
  const priceBounds = usePriceBounds(products);

  const {
    filters,
    setSearch,
    setCategory,
    toggleBrand,
    setPriceRange,
    setMinRating,
    setFreeShippingOnly,
    setSortBy,
    setPage,
    resetFilters,
  } = useFilters();

  const { pageItems, totalCount, totalPages } = useFilteredProducts(products, filters);

  return (
    <div className="flex min-h-screen flex-col">
      <Header searchTerm={filters.search} onSearchChange={setSearch} />

      <div className="mx-auto grid w-full max-w-[1280px] flex-1 grid-cols-1 gap-6 p-6 md:grid-cols-[240px_1fr]">
        <Sidebar
          categories={categories}
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
              <div className="mb-4 flex items-center justify-between border-b border-[#e5e5e5] pb-4">
                <p className="m-0 text-[0.85rem] text-[#666]">{totalCount} results</p>
                <Select
                  ariaLabel="Sort by"
                  value={filters.sortBy}
                  options={SORT_OPTIONS}
                  onChange={setSortBy}
                />
              </div>

              <ProductList products={pageItems} />

              <Pagination page={filters.page} totalPages={totalPages} onPageChange={setPage} />
            </>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
