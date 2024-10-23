import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice.ts";
import authReducer from "./slices/authSlice.ts";
import cartReducer from "./slices/cartSlice.ts";

const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
