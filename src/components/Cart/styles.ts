import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CartContainer = styled.div`
  position: relative;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["yellow-light"]};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const ItemsCounter = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 10px;
  position: absolute;
  top: -10px;
  right: -10px;
  color: ${(props) => props.theme["white"]};
  ${mixins.fonts.textS}
  font-weight: bold;
`;
