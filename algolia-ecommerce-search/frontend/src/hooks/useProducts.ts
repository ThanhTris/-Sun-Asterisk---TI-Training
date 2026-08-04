import { useEffect, useState } from 'react';
import type { Product } from '../types/Product';

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  error: string | null;
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load products (status ${res.status})`);
        return res.json() as Promise<Product[]>;
      })
      .then(setProducts)
      .catch((err: Error) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return { products, isLoading, error };
}
