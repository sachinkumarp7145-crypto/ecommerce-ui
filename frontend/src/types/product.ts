export interface Product {
  rating: number | undefined;
  id: number;
  title: string;
  price: number;
  image ?: string;
  category ?: string;
}