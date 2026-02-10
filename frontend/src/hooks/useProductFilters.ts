import { useMemo, useState } from "react";
import { Product } from "../types/product";

export const useProductFilters = (products: Product[]) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState<"none" | "price-asc" | "price-desc">("none");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  const categories = useMemo(
    () => [
      "all",
      ...Array.from(
        new Set(products.map((p) => p.category?.toLowerCase()).filter((c) => c !== undefined))
      ),
    ],
    [products]
  );

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // category filter
    if (selectedCategory !== "all") {
      result = result.filter(
        (p) => p.category && p.category.toLowerCase() === selectedCategory
      );
    }

    // price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // sorting
    if (sortOrder === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedCategory, sortOrder, priceRange]);

  return {
    categories,
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    sortOrder,
    setSortOrder,
    priceRange,
    setPriceRange,
  };
};
