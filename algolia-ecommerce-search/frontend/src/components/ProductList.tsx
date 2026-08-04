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
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
      {products.map((product) => (
        <ProductCard key={product.objectID} product={product} />
      ))}
    </div>
  );
}
