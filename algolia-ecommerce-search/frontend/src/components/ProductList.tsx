import type { Product } from '../types/Product';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return <p className="empty-state">Khong tim thay san pham nao.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.objectID} product={product} />
      ))}
    </div>
  );
}
