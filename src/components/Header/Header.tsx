import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <header>
    <Button component={Link} to="/cart" variant="contained" color="secondary">
      Go to Cart
    </Button>
  </header>
);

export default Header;
