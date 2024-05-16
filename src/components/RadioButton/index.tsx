import { InputHTMLAttributes } from "react";
import { RadioButtonContainer } from "./styles";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function RadioButton({ children, ...rest }: RadioButtonProps) {
  return (
    <RadioButtonContainer>
      {children}
      <input {...rest} type="radio" />
    </RadioButtonContainer>
  );
}
