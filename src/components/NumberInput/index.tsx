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
      <CountButton
        onClick={handleDecreaseQuantity}
        disabled={quantity === 1}
        type="button"
      >
        <Minus size={14} />
      </CountButton>
      <span>{quantity}</span>
      <CountButton onClick={handleIncreaseQuantity} type="button">
        <Plus size={14} />
      </CountButton>
    </NumberInputContainer>
  );
}
