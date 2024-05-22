import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { ErrorContainer, TextInputContainer } from "./styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

const TextInput = forwardRef(
  (
    { error, required = true, ...rest }: TextInputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <TextInputContainer>
          <input {...rest} ref={ref} />
          {!required && <span>Opcional</span>}
        </TextInputContainer>
        {error?.message && <ErrorContainer>{error.message}</ErrorContainer>}
      </div>
    );
  }
);

export default TextInput;
