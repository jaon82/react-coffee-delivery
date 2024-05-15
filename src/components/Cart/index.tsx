import { ShoppingCart } from "phosphor-react";

import { CartContainer } from "./styles";

export default function Cart() {
  return (
    <CartContainer>
      <ShoppingCart size={22} weight="fill" />
    </CartContainer>
  );
}
