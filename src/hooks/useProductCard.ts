import { useDispatch, useSelector } from "react-redux";
import { Product } from "../types/Product.ts";
import {
  selectCart,
  removeFromCart,
  addToCart,
} from "../redux/slices/cartSlice.ts";

const useProductCard = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart).items;

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
  };
  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };
  const isInCart = (id: number) => cartItems.some((item) => item.id === id);

  return { handleAddToCart, handleRemoveFromCart, isInCart };
};

export default useProductCard;
