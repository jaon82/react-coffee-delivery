import { InputHTMLAttributes } from "react";
import { TextInputContainer } from "./styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function TextInput({
  required = true,
  ...rest
}: TextInputProps) {
  return (
    <TextInputContainer>
      <input {...rest} />
      {!required && <span>Opcional</span>}
    </TextInputContainer>
  );
}
