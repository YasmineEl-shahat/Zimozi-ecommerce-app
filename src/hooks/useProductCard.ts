import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice.ts";
import { Product } from "../types/Product.ts";

const useProductCard = () => {
  const dispatch = useDispatch();

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

  return { handleAddToCart };
};

export default useProductCard;
