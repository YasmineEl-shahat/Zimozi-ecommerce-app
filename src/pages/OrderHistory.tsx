import React, { useEffect, useState } from "react";
import { Typography, CircularProgress, Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchUserOrderHistory } from "../utils/api.ts";
import OrderList from "../components/Order/OrderList.tsx";

const OrderHistory: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getOrderHistory = async () => {
      if (!user) {
        setError("User not authenticated.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetchUserOrderHistory(user.uid);
        setOrders(response.data);
      } catch (error) {
        setError("Failed to load order history.");
      } finally {
        setLoading(false);
      }
    };

    getOrderHistory();
  }, [user]);

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Order History
      </Typography>
      <OrderList orders={orders} />
    </div>
  );
};

export default OrderHistory;
