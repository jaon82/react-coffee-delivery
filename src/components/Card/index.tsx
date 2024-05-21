import {
  CardContainer,
  CartButton,
  CoffeeDrescription,
  CoffeeName,
  CoffeeOrder,
  CoffeeTag,
  Currency,
  Price,
  TagsContainer,
} from "./styles";

import { ShoppingCart } from "phosphor-react";
import NumberInput from "../NumberInput";

interface Coffee {
  image: string;
  types: string[];
  name: string;
  description: string;
  price: number;
}
interface CardProps {
  coffee: Coffee;
}
export default function Card({ coffee }: CardProps) {
  return (
    <CardContainer>
      <img src={coffee.image} width={120} />
      <TagsContainer>
        {coffee.types.map((type) => (
          <CoffeeTag>{type}</CoffeeTag>
        ))}
      </TagsContainer>
      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDrescription>{coffee.description}</CoffeeDrescription>
      <CoffeeOrder>
        <div>
          <Currency>R$</Currency>
          <Price>
            {coffee.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </Price>
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
