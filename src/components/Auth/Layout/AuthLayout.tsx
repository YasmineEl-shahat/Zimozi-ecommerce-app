import React from "react";
import { StyledContainer } from "./AuthLayout.styles.ts";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <StyledContainer maxWidth={false}>{children}</StyledContainer>;
};

export default AuthLayout;
