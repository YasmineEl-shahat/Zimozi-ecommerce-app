import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setCurrentPage,
  selectProducts,
} from "../redux/slices/productSlice.ts";

import { AppDispatch } from "../redux/store.ts";

// Custom hook for product filtering and pagination
export const useProductList = (searchTerm: string) => {
  const dispatch = useDispatch<AppDispatch>();

  const { currentPageProducts, currentPage, totalPages, loading, error } =
    useSelector(selectProducts);

  const [filteredProducts, setFilteredProducts] = useState(currentPageProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products whenever the search term or products change

  useEffect(() => {
    if (searchTerm) {
      setFilteredProducts(
        currentPageProducts.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(currentPageProducts);
    }
  }, [searchTerm, currentPageProducts]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setCurrentPage(value));
  };

  return {
    filteredProducts,
    currentPage,
    totalPages,
    loading,
    error,
    handlePageChange,
  };
};
