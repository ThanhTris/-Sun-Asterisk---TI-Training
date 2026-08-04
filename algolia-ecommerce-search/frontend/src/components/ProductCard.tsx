import type { Product } from '../types/Product';
import { Badge } from './shared/Badge';
import { StarRating } from './shared/StarRating';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-[#e5e5e5] bg-white">
      <div className="flex aspect-square items-center justify-center bg-[#f7f7f7]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <p className="m-0 text-xs text-[#999] uppercase">{product.categories[0]}</p>
        <h3 className="m-0 line-clamp-2 text-[0.9rem] leading-[1.3]">{product.name}</h3>
        {!!product.rating && <StarRating value={product.rating} />}
        <p className="m-0 font-semibold">${product.price.toFixed(2)}</p>
        {product.free_shipping && <Badge>Free shipping</Badge>}
      </div>
    </article>
  );
}
