import { useMemo } from 'react';
import type { Product } from '../types/Product';

export interface PriceBounds {
  min: number;
  max: number;
}

export function usePriceBounds(products: Product[]): PriceBounds {
  return useMemo(() => {
    if (products.length === 0) return { min: 0, max: 0 };
    let min = Infinity;
    let max = -Infinity;
    for (const product of products) {
      if (product.price < min) min = product.price;
      if (product.price > max) max = product.price;
    }
    return { min: Math.floor(min), max: Math.ceil(max) };
  }, [products]);
}
