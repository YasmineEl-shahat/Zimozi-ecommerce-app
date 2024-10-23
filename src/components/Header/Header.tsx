import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledLogo } from "./Header.styles.ts";
import logo from "../../assets/images/Header-Logo.svg";
import useCart from "../../hooks/useCart.ts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";

const Header: React.FC = () => {
  const { totalAmount } = useCart();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={logo} alt="Logo" />
      </Link>
      <Box display="flex" gap="25px">
        <Link to="/cart" className="custom-link">
          <ShoppingCartIcon />
          <span>${totalAmount}</span>
        </Link>
        {isAuthenticated ? (
          <LogoutIcon />
        ) : (
          <Link to="/auth/login" className="custom-link">
            <LoginIcon />
          </Link>
        )}
      </Box>
    </StyledHeader>
  );
};

export default Header;
