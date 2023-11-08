import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import { useEffect, useRef } from "react";

function CartIcon() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  const quantityArray = cartItems.map((item) => item.quantity);
  const totalQuantity = quantityArray.reduce(
    (previous, current) => previous + current,
    0
  );

  const cartIconRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside: EventListenerOrEventListenerObject = (event) => {
      if (cartIconRef.current && !cartIconRef.current.contains(event.target as Node)) {
        dispatch(setIsCartOpen(false));
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <CartIconContainer onClick={toggleIsCartOpen} ref={cartIconRef}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
}

export default CartIcon;
