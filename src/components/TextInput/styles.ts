import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const TextInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: ${(props) => props.theme["base-input"]};
  border-radius: 0.25rem;
  flex: 1;

  &:focus-within {
    box-shadow: 0 0 0 1px ${(props) => props.theme["yellow-dark"]};
  }

  > input {
    width: 100%;
    background-color: transparent;
    border: none;
    ${mixins.fonts.textS}

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }

  > span {
    font-family: "Roboto", sans-serif;
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme["base-label"]};
  }
`;
