import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { Product } from "../../types/Product";

interface ProductState {
  products: Product[]; // Store all products here
  currentPageProducts: Product[]; // Products for the current page
  totalPages: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  currentPageProducts: [],
  totalPages: 1,
  currentPage: 1,
  loading: false,
  error: null,
};

const productsPerPage = 8; // Define how many products to show per page

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      const startIndex = (state.currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      state.currentPageProducts = state.products.slice(startIndex, endIndex);
    },
    resetProducts: (state) => {
      state.products = [];
      state.currentPage = 1;
      state.totalPages = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.totalPages = Math.ceil(action.payload.length / productsPerPage);

        // Set the products for the first page by default
        state.currentPageProducts = action.payload.slice(0, productsPerPage);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load products";
      });
  },
});
export const { resetProducts, setCurrentPage } = productSlice.actions;
export const selectProducts = (state: RootState) => state.products;
export default productSlice.reducer;
