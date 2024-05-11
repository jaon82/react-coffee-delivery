import { ShoppingCartSimple } from "phosphor-react";

import { CartContainer } from "./styles";

export default function Cart() {
  return (
    <CartContainer>
      <ShoppingCartSimple size={22} weight="fill" />
    </CartContainer>
  );
}
