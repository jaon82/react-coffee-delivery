import {
  CardContainer,
  CartButton,
  CoffeeDrescription,
  CoffeeName,
  CoffeeOrder,
  CoffeeTag,
  Currency,
  Price,
} from "./styles";

import { ShoppingCart } from "phosphor-react";
import expressoTradicionalImg from "../../assets/expresso-tradicional.png";
import NumberInput from "../NumberInput";

export default function Card() {
  return (
    <CardContainer>
      <img src={expressoTradicionalImg} width={120} />
      <CoffeeTag>Tradicional</CoffeeTag>
      <CoffeeName>Expresso Tradicional</CoffeeName>
      <CoffeeDrescription>
        O tradicional café feito com água quente e grãos moídos
      </CoffeeDrescription>
      <CoffeeOrder>
        <div>
          <Currency>R$</Currency>
          <Price>9,90</Price>
        </div>
        <div>
          <NumberInput />
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </div>
      </CoffeeOrder>
    </CardContainer>
  );
}
