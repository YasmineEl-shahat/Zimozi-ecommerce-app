import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledLogo } from "./Header.styles.ts";
import logo from "../../assets/images/Header-Logo.svg";
import useCart from "../../hooks/useCart.ts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { logoutSuccess } from "../../redux/slices/authSlice.ts";

const Header: React.FC = () => {
  const { totalAmount } = useCart();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const user = useSelector((state: RootState) => state.auth.user); // Get user from Redux store

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
          <Box display="flex" alignItems="center">
            <Link to="/user-profile" className="custom-link">
              {user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  style={{ width: 40, height: 40, borderRadius: "50%" }}
                />
              )}
              <span>{user?.displayName}</span>
            </Link>
            <LogoutIcon onClick={() => dispatch(logoutSuccess())} />
          </Box>
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
