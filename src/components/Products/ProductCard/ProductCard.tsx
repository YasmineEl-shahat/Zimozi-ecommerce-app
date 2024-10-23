import React from "react";
import { CardMedia, CardContent, CardActions, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../../types/Product.ts";
import {
  StyledCard,
  StyledTypography,
  IconContainer,
} from "./ProductCard.styles.ts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useProductCard from "../../../hooks/useProductCard.ts";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { handleAddToCart } = useProductCard();
  return (
    <StyledCard>
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardContent sx={{ px: 0 }}>
          <Typography variant="body2" color="text.secondary">
            {product.category}
          </Typography>
          <StyledTypography gutterBottom variant="h5">
            {product.title}
          </StyledTypography>
        </CardContent>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
        />
      </Link>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", px: 0 }}
      >
        <StyledTypography variant="body2" color="text.secondary">
          ${product.price}
        </StyledTypography>
        <IconContainer onClick={() => handleAddToCart(product)}>
          <ShoppingCartIcon />
        </IconContainer>
      </CardActions>
    </StyledCard>
  );
};

export default ProductCard;
