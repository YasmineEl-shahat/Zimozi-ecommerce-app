import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout.tsx";
import UserProfile from "../pages/UserProfile.tsx";
import Checkout from "../pages/Checkout.tsx";
import OrderHistory from "../pages/OrderHistory.tsx";

export const ProtectedRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-history" element={<OrderHistory />} />{" "}
    </Routes>
  </MainLayout>
);
