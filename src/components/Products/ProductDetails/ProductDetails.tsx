import React from "react";
import {
  Box,
  CircularProgress,
  Alert,
  IconButton,
  Container,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import useProductDetails from "../../../hooks/useProductDetails.ts";
import useProductCard from "../../../hooks/useProductCard.ts";
import {
  StyledBox,
  StyledTypography,
  StyledButton,
  StyledImage,
} from "./ProductDetails.styles.ts";

const ProductDetails: React.FC = () => {
  const navigate = useNavigate();
  const { product, loading, error } = useProductDetails();
  const { handleAddToCart, handleRemoveFromCart, isInCart } = useProductCard();
  const inCart: boolean | null = product ? isInCart(product.id) : null;

  return (
    <Container sx={{ position: "relative" }}>
      <IconButton
        onClick={() => navigate("/")}
        sx={{ position: "absolute", top: 0 }}
      >
        <ArrowBack />
      </IconButton>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
          width="100%"
        >
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <StyledBox>
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
            inCart={inCart}
            onClick={() =>
              inCart && product
                ? handleRemoveFromCart(product.id)
                : product
                ? handleAddToCart(product)
                : ""
            }
          >
            {inCart && product ? "Remove from Cart" : "Add to Cart"}
          </StyledButton>
        </StyledBox>
      )}
    </Container>
  );
};

export default ProductDetails;
