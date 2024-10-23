import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store.ts";
import {
  selectCart,
  removeFromCart,
  updateQuantity,
} from "../redux/slices/cartSlice.ts";

const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, totalAmount } = useSelector(selectCart);

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return { items, totalAmount, handleRemoveItem, handleQuantityChange };
};

export default useCart;
