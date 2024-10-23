import React from "react";
import { Box, CircularProgress, Alert, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useProductDetails from "../../../hooks/useProductDetails.ts";
import {
  StyledBox,
  StyledTypography,
  StyledButton,
  StyledImage,
} from "./ProductDetails.styles.ts";

const ProductDetails: React.FC = () => {
  const navigate = useNavigate();
  const { product, loading, error, handleAddToCart } = useProductDetails();

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <StyledBox>
      <IconButton
        onClick={() => navigate("/")} // Navigate back to the product list
        sx={{ position: "absolute", top: 16, left: 16 }}
      >
        <ArrowBack />
      </IconButton>
      <StyledImage src={product?.image} alt={product?.title} />
      <StyledTypography variant="h4">{product?.title}</StyledTypography>
      <StyledTypography variant="h6" color="text.secondary">
        ${product?.price}
      </StyledTypography>
      <StyledTypography variant="body1">
        {product?.description}
      </StyledTypography>
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
      >
        Add to Cart
      </StyledButton>
    </StyledBox>
  );
};

export default ProductDetails;
