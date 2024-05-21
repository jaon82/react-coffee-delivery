import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { RadioButtonContainer } from "./styles";

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {}

const RadioButton = forwardRef(
  (
    { children, ...rest }: RadioButtonProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <RadioButtonContainer>
        {children}
        <input {...rest} type="radio" ref={ref} />
      </RadioButtonContainer>
    );
  }
);

export default RadioButton;
