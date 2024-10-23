import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadProducts = createAsyncThunk(
  "products/loadProducts",
  async (page: number) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products?limit=10&page=${page}`
    );
    return response.data;
  }
);

interface ProductState {
  items: any[];
  loading: boolean;
}

const initialState: ProductState = {
  items: [],
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      });
  },
});

export default productSlice.reducer;
