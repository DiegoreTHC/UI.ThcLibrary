import type { Media } from "./Media";
import type { Price } from "./Price";

export interface Product {
  id: string;
  "product-name"?: string;
  name?: string;
  slug?: string;
  "category-name"?: string;
  "category-slug": string;
  subtitle?: string;
  colors?: string[];
  label?: {
    variant: string;
    text: string;
  };
  brand?: string;
  price?: Price;
  stock?: number;
  sku?: string;
  rating?: number;
  totalRatings?: number;
  media?: Media;
  slideshow?: string[];
  descriptions?: any;
}
