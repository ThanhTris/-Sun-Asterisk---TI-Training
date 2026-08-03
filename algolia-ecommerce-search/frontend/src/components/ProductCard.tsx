import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="product-card__body">
        <p className="product-card__category">{product.categories[0]}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        {product.free_shipping && (
          <span className="product-card__badge">Free shipping</span>
        )}
      </div>
    </article>
  );
}
