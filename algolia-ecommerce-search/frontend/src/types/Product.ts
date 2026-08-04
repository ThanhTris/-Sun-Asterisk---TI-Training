export interface Product {
  objectID: string;
  name: string;
  description: string;
  brand?: string;
  categories: string[];
  type?: string;
  price: number;
  price_range?: string;
  image: string;
  free_shipping: boolean;
  popularity?: number;
  rating?: number;
}
