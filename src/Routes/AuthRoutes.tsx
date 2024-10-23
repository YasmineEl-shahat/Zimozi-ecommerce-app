import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Auth/Login.tsx";
import Register from "../pages/Auth/Register.tsx";
import AuthLayout from "../components/Auth/Layout/AuthLayout.tsx";

export const AuthRoutes = () => (
  <AuthLayout>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </AuthLayout>
);
