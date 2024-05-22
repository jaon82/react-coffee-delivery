import { Minus, Plus } from "phosphor-react";
import { CountButton, NumberInputContainer } from "./styles";

interface NumberInputProps {
  quantity: number;
  handleDecreaseQuantity: () => void;
  handleIncreaseQuantity: () => void;
}
export default function NumberInput({
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}: NumberInputProps) {
  return (
    <NumberInputContainer>
      <CountButton onClick={handleDecreaseQuantity} disabled={quantity === 1}>
        <Minus size={14} />
      </CountButton>
      <span>{quantity}</span>
      <CountButton onClick={handleIncreaseQuantity}>
        <Plus size={14} />
      </CountButton>
    </NumberInputContainer>
  );
}
