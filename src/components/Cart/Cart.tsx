import React from "react";
import { Box, Typography, Button, Divider, IconButton } from "@mui/material";
import useCart from "../../hooks/useCart.ts";
import {
  StyledCard,
  StyledTextField,
  StyledIconButton,
  ItemImage,
  ItemTitle,
  ItemPrice,
  StyledBox,
  StyledDeleteIcon,
} from "./Cart.styles.ts";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalAmount, handleRemoveItem, handleQuantityChange } =
    useCart();

  if (items.length === 0) {
    return <Typography variant="h5">Your cart is empty.</Typography>;
  }

  return (
    <Box>
      <IconButton
        onClick={() => navigate("/")} // Navigate back to the product list
        sx={{ position: "absolute", top: 64, left: 16 }}
      >
        <ArrowBack />
      </IconButton>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {items.map((item) => (
        <StyledCard key={item.id}>
          <StyledBox sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            <Box sx={{ flex: 1, mr: 2 }}>
              <ItemImage src={item.image} alt={item.title} />
            </Box>
            <Box sx={{ flex: 2, mr: 2 }}>
              <ItemTitle variant="h6">{item.title}</ItemTitle>
              <ItemPrice>${item.price}</ItemPrice>
            </Box>
            <Box sx={{ flex: 1, mr: 2 }}>
              <StyledTextField
                type="number"
                label="Quantity"
                value={item.quantity}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
                inputProps={{ min: 1 }}
              />
            </Box>
            <Box>
              <StyledIconButton onClick={() => handleRemoveItem(item.id)}>
                <StyledDeleteIcon />
              </StyledIconButton>
            </Box>
          </StyledBox>
        </StyledCard>
      ))}

      <Divider sx={{ mt: 2 }} />
      <Typography variant="h5" sx={{ mt: 2 }}>
        Total: ${totalAmount.toFixed(2)}
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Proceed to Checkout
      </Button>
    </Box>
  );
};

export default Cart;
