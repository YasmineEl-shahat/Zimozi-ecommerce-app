import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

const OrderList: React.FC<{ orders: any[] }> = ({ orders }) => {
  return (
    <List>
      {orders.map((order) => (
        <ListItem key={order.id}>
          <ListItemText
            primary={`Order ID: ${order.id}`}
            secondary={`Status: ${order.status} - Total: $${order.total}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default OrderList;
