import React from "react";
import ProductCard from "../ProductCard/ProductCard.tsx";
import { Pagination, CircularProgress, Alert } from "@mui/material";
import { useProductList } from "../../../hooks/useProductList.ts";
import { StyledBox, CenteredBox } from "./ProductList.styles.ts"; // Import the new styles

interface ProductListProps {
  searchTerm: string; // Accept searchTerm as a prop from the Home page
}
const ProductList: React.FC<ProductListProps> = ({ searchTerm }) => {
  const {
    filteredProducts,
    currentPage,
    totalPages,
    loading,
    error,
    handlePageChange,
  } = useProductList(searchTerm);

  return (
    <>
      {loading ? (
        <CenteredBox>
          <CircularProgress />
        </CenteredBox>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <>
          <StyledBox>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </StyledBox>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            sx={{ mt: 2, display: "flex", justifyContent: "center" }}
          />
        </>
      )}
    </>
  );
};

export default ProductList;
