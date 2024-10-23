import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Cart from "../pages/Cart.tsx";
import ProductDetails from "../pages/ProductDetailsPage.tsx";
import MainLayout from "../components/Layout/MainLayout.tsx";

export const PublicRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </MainLayout>
);
