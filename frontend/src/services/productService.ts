export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  image?: string;
}

export interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ProductResponse {
  data: Product[];
  pagination: Pagination;
}

export const fetchProducts = async (
  params: Record<string, string | number>
): Promise<ProductResponse> => {
  const query = new URLSearchParams(
    Object.entries(params).reduce((acc, [key, value]) => {
      if (value !== "" && value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {} as Record<string, string>)
  ).toString();

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/products?${query}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};
