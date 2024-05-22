import { Trash } from "phosphor-react";
import NumberInput from "../NumberInput";
import {
  ItemInfo,
  ItemValue,
  OrderItemContainer,
  RemoveItemButton,
} from "./styles";

import useOrder from "../../hooks/useOrder";

interface OrderCoffee {
  id: number;
  image: string;
  types: string[];
  name: string;
  description: string;
  price: number;
  quantity: number;
}
interface OrderItemProps {
  item: OrderCoffee;
}
export default function OrderItem({ item }: OrderItemProps) {
  const { incrementItemQuantity, decrementItemQuantity, removeItem } =
    useOrder();

  const totalPrice = item.price * item.quantity;

  return (
    <OrderItemContainer>
      <img src={item.image} width={64} />
      <ItemInfo>
        <span>{item.name}</span>
        <div>
          <NumberInput
            quantity={item.quantity}
            handleDecreaseQuantity={() => decrementItemQuantity(item.id)}
            handleIncreaseQuantity={() => incrementItemQuantity(item.id)}
          />
          <RemoveItemButton onClick={() => removeItem(item.id)}>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveItemButton>
        </div>
      </ItemInfo>
      <ItemValue>
        <span>
          {totalPrice.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
            currency: "BRL",
            style: "currency",
          })}
        </span>
      </ItemValue>
    </OrderItemContainer>
  );
}
