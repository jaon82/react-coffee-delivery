import { ShoppingCart } from "phosphor-react";

import { Link } from "react-router-dom";
import useOrder from "../../hooks/useOrder";
import { CartContainer, ItemsCounter } from "./styles";

export default function Cart() {
  const { items } = useOrder();

  const quantity = items.length;

  return (
    <CartContainer>
      <Link to="order">
        <ShoppingCart size={22} weight="fill" />
        <ItemsCounter>{quantity}</ItemsCounter>
      </Link>
    </CartContainer>
  );
}
