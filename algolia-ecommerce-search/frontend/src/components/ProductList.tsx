import type { Product } from '../types/Product';
import { ProductCard } from './ProductCard';
import { StatusMessage } from './shared/StatusMessage';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return <StatusMessage variant="empty">No products found.</StatusMessage>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:gap-10">
      {products.map((product) => (
        <ProductCard key={product.objectID} product={product} />
      ))}
    </div>
  );
}
