import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.ts";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}
interface CartState {
  items: CartItem[];
  totalAmount: number;
}
const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
        console.log(state.items);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        state.totalAmount -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const itemToUpdate = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToUpdate) {
        const quantityDiff = action.payload.quantity - itemToUpdate.quantity;
        itemToUpdate.quantity = action.payload.quantity;
        state.totalAmount += itemToUpdate.price * quantityDiff;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;
