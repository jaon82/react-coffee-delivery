import { Trash } from "phosphor-react";
import NumberInput from "../NumberInput";
import {
  ItemInfo,
  ItemValue,
  OrderItemContainer,
  RemoveItemButton,
} from "./styles";

import expressoTradicionalImg from "../../assets/expresso-tradicional.png";

export default function OrderItem() {
  return (
    <OrderItemContainer>
      <img src={expressoTradicionalImg} width={64} />
      <ItemInfo>
        <span>Expresso Tradicional</span>
        <div>
          <NumberInput />
          <RemoveItemButton>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveItemButton>
        </div>
      </ItemInfo>
      <ItemValue>
        <span>R$ 9,90</span>
      </ItemValue>
    </OrderItemContainer>
  );
}
