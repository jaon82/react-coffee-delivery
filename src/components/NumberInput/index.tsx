import { Minus, Plus } from "phosphor-react";
import { CountButton, NumberInputContainer } from "./styles";

export default function NumberInput() {
  return (
    <NumberInputContainer>
      <CountButton>
        <Minus size={14} />
      </CountButton>
      <span>1</span>
      <CountButton>
        <Plus size={14} />
      </CountButton>
    </NumberInputContainer>
  );
}
