import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

interface Product {
  id: number;
  title: string;
  price: number;
}
interface ShippingInfo {
  name: string;
  address: string;
  city: string;
  zip: string;
}

interface OrderSummaryProps {
  cart: Product[];
  shippingInfo: ShippingInfo;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ cart, shippingInfo }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List>
        {cart.map((product) => (
          <ListItem key={product.id}>
            <ListItemText
              primary={product.title}
              secondary={`$${product.price}`}
            />
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Typography variant="h6" gutterBottom>
        Shipping Information
      </Typography>
      <Typography>{shippingInfo.name}</Typography>
      <Typography>{shippingInfo.address}</Typography>
      <Typography>{`${shippingInfo.city}, ${shippingInfo.zip}`}</Typography>

      <Divider sx={{ my: 2 }} />
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
    </Box>
  );
};

export default OrderSummary;
