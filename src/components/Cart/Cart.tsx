import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
  Container,
} from "@mui/material";
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
import { Link, useNavigate } from "react-router-dom";
import emptyCart from "../../assets/images/empty-cart.svg";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { items, totalAmount, handleRemoveItem, handleQuantityChange } =
    useCart();

  return items.length === 0 ? (
    <Container sx={{ position: "relative", minHeight: "50vh" }}>
      <IconButton
        onClick={() => navigate("/")}
        sx={{ position: "absolute", top: 0 }}
      >
        <ArrowBack />
      </IconButton>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        width="100%"
      >
        <img src={emptyCart} alt="empty cart" width={200} />
        <Typography variant="h5" ml={5} mt={2}>
          Your cart is empty.
        </Typography>
      </Box>
    </Container>
  ) : (
    <Box px={3} width="100%">
      <IconButton
        onClick={() => navigate("/")}
        sx={{ position: "absolute", top: 90 }}
      >
        <ArrowBack />
      </IconButton>{" "}
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
      <Link to="/protected/checkout" className="custom-link">
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Proceed to Checkout
        </Button>
      </Link>
    </Box>
  );
};

export default Cart;
