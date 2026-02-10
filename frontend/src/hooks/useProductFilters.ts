import { useMemo, useState } from "react";
import { Product } from "../types/product";

const PAGE_SIZE = 4;

export const useProductFilters = (products: Product[]) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] =
    useState<"none" | "price-asc" | "price-desc">("none");
  const [priceRange, setPriceRange] =
    useState<[number, number]>([0, 10000]);

  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(
    () => [
      "all",
      ...Array.from(
        new Set(products.map((p) => (p.category ?? "").toLowerCase()))
      ),
    ],
    [products]
  );

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory !== "all") {
      result = result.filter(
        (p) => (p.category ?? "").toLowerCase() === selectedCategory
      );
    }

    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (sortOrder === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategory, sortOrder, priceRange]);

  // 🔹 pagination slice
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, currentPage]);

  // reset page when filters change
  const resetPage = () => setCurrentPage(1);

  return {
    categories,
    paginatedProducts,
    total: filteredProducts.length,
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
