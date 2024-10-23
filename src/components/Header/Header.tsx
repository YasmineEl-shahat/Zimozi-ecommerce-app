import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledLogo } from "./Header.styles.ts";
import logo from "../../assets/images/Header-Logo.svg"; // Updated file name to match casing
import useCart from "../../hooks/useCart.ts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header: React.FC = () => {
  const { totalAmount } = useCart(); // Get total amount from useCart

  return (
    <StyledHeader>
      <Link to="/">
        <StyledLogo src={logo} alt="Logo" />
      </Link>
      <Link to="/cart" className="custom-link">
        <ShoppingCartIcon />
        <span>${totalAmount}</span>
      </Link>
    </StyledHeader>
  );
};

export default Header;
