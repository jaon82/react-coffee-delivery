import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const RadioButtonContainer = styled.label`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  flex: 1;
  gap: 0.5rem;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  > span {
    text-transform: uppercase;
    ${mixins.fonts.buttonM}
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }

  &:has(input:checked) {
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    background-color: ${(props) => props.theme["purple-light"]};
  }

  > input {
    display: none;
  }
`;
