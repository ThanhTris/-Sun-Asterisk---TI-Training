import type { Product } from '../types/Product';
import { RatingBadge } from './shared/RatingBadge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-row gap-5 md:flex-col md:gap-0">
      <div className="flex aspect-square w-40 shrink-0 items-center justify-center md:w-auto">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 md:gap-1 md:p-3">
        <p className="m-0 text-xs font-semibold text-primary uppercase">{product.categories[0]}</p>
        <h3 className="m-0 text-[0.9rem] leading-[1.3] font-bold text-primary">{product.name}</h3>
        <p className="m-0 line-clamp-2 text-[0.9rem] leading-[1.3] text-primary">{product.description}</p>
        <div className="mt-2 flex items-center gap-3 md:mt-1">
          <p className="m-0 text-[0.9rem] leading-[1.3] font-bold text-primary">
            <span className="text-[11px] font-semibold text-[#e2a400]">$</span>
            {product.price.toFixed(2)}
          </p>
          {!!product.rating && <RatingBadge value={product.rating} />}
        </div>
      </div>
    </article>
  );
}
