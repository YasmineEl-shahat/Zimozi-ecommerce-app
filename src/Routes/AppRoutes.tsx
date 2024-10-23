import React from "react";
import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { RootState } from "../redux/store.ts";
import { ProtectedRoutes } from "./ProtectedRoutes.tsx";
import { AuthRoutes } from "./AuthRoutes.tsx";
import { PublicRoutes } from "./PublicRoutes.tsx";

export const AppRoutes = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/protected/*" element={<ProtectedRoutes />} />
            <Route path="/auth/*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/*" element={<PublicRoutes />} />
          </>
        )}
      </Routes>
    </Router>
  );
};
