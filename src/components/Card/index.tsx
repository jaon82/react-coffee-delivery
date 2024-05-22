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
import { useState } from "react";
import useOrder from "../../hooks/useOrder";
import NumberInput from "../NumberInput";

interface Coffee {
  id: number;
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
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useOrder();
  const [isItemAdded, setItemAdded] = useState(false);

  const decreaseQuantity = () => {
    setQuantity((state) => state - 1);
  };

  const increaseQuantity = () => {
    setQuantity((state) => state + 1);
  };

  const handleAddItem = (coffeeId: number, quantity: number) => {
    addItem(coffeeId, quantity);
    setItemAdded(true);
  };

  const totalPrice = coffee.price * quantity;

  return (
    <CardContainer>
      <img src={coffee.image} width={120} />
      <TagsContainer>
        {coffee.types.map((type) => (
          <CoffeeTag key={type}>{type}</CoffeeTag>
        ))}
      </TagsContainer>
      <CoffeeName>{coffee.name}</CoffeeName>
      <CoffeeDrescription>{coffee.description}</CoffeeDrescription>
      <CoffeeOrder>
        <div>
          <Currency>R$</Currency>
          <Price>
            {totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </Price>
        </div>
        <div>
          <NumberInput
            quantity={quantity}
            handleDecreaseQuantity={decreaseQuantity}
            handleIncreaseQuantity={increaseQuantity}
          />
          <CartButton
            onClick={() => handleAddItem(coffee.id, quantity)}
            disabled={isItemAdded}
          >
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </div>
      </CoffeeOrder>
    </CardContainer>
  );
}
