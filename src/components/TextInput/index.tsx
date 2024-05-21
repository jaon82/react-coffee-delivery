import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { TextInputContainer } from "./styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInput = forwardRef(
  (
    { required = true, ...rest }: TextInputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <TextInputContainer>
        <input {...rest} ref={ref} />
        {!required && <span>Opcional</span>}
      </TextInputContainer>
    );
  }
);

export default TextInput;
