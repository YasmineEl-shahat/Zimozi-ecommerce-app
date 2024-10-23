import React, { useState } from "react";
import { StyledContainer, StyledTextField } from "./Home.styles.ts";
import ProductList from "../../components/Products/ProductList/ProductList.tsx";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <StyledContainer>
      <StyledTextField
        fullWidth
        label="Search products"
        placeholder="Search for products"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 3 }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />

      <ProductList searchTerm={searchTerm} />
    </StyledContainer>
  );
};

export default Home;
