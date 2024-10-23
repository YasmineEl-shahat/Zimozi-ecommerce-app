import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout.tsx";
import Profile from "../pages/Profile.tsx";

export const ProtectedRoutes = () => (
  <MainLayout>
    <Routes>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </MainLayout>
);
