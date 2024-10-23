import React, { useEffect, useState } from "react";
import {
  TextField,
  Pagination,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store.ts";
import { loadProducts } from "../redux/slices/productSlice.ts";
import ProductCard from "../components/Products/ProductCard.tsx";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading } = useSelector((state: RootState) => state.products);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(items);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(loadProducts(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredProducts(
        items.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(items);
    }
  }, [searchTerm, items]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>

      <TextField
        fullWidth
        label="Search products"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ mb: 3 }}
      />

      {loading ? (
        <Typography>Loading products...</Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}

      <Pagination
        count={5} // Assuming there are 5 pages of products
        page={page}
        onChange={handlePageChange}
        sx={{ mt: 4, display: "flex", justifyContent: "center" }}
      />
    </Container>
  );
};

export default Home;
