// Du lieu tho tra ve tu Algolia - co the chua field noi bo (_highlightResult...)
// hoac field khong dung toi (hierarchicalCategories) nen khai bao long, khong strict.
export interface RawAlgoliaHit {
  objectID: string;
  name: string;
  description: string;
  brand?: string;
  categories: string[];
  type?: string;
  price: number;
  price_range?: string;
  image: string;
  url?: string;
  free_shipping: boolean;
  popularity?: number;
  rating?: number;
  [key: string]: unknown;
}

// Du lieu sach, chi giu field app thuc su dung.
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

export interface AlgoliaSearchResponse {
  hits: RawAlgoliaHit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
}
