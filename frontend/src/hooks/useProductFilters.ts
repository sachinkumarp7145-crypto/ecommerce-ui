import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { fetchProducts } from "../services/productService";

const PAGE_SIZE = 4;

export const useProductFilters = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] =
    useState<"none" | "price-asc" | "price-desc">("none");
  const [priceRange, setPriceRange] =
    useState<[number, number]>([0, 10000]);

  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);

  // 🔹 Load from backend
  useEffect(() => {
    const loadProducts = async () => {
      const params: Record<string, string | number> = {
        page: currentPage,
        limit: PAGE_SIZE,
      };

      if (selectedCategory !== "all") {
        params.category = selectedCategory;
      }

      if (priceRange) {
        params.minPrice = priceRange[0];
        params.maxPrice = priceRange[1];
      }

      if (sortOrder === "price-asc") {
        params.sort = "price_asc";
      }

      if (sortOrder === "price-desc") {
        params.sort = "price_desc";
      }

      const response = await fetchProducts(params);

      setProducts(response.data);
      setTotal(response.pagination.total);

      // extract categories once
      const uniqueCategories = [
        "all",
        ...Array.from(new Set(response.data.map((p) => p.category))),
      ];
      setCategories(uniqueCategories);
    };

    loadProducts();
  }, [currentPage, selectedCategory, sortOrder, priceRange]);

  const resetPage = () => setCurrentPage(1);

  return {
    categories,
    products,
    total,
    currentPage,
    pageSize: PAGE_SIZE,

    selectedCategory,
    setSelectedCategory: (value: string) => {
      resetPage();
      setSelectedCategory(value);
    },

    sortOrder,
    setSortOrder: (value: any) => {
      resetPage();
      setSortOrder(value);
    },

    priceRange,
    setPriceRange: (value: [number, number]) => {
      resetPage();
      setPriceRange(value);
    },

    setCurrentPage,
  };
};
