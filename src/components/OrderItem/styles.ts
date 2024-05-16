import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const OrderItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;
`;

export const ItemInfo = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  div > div {
    height: 2rem;
    min-width: 4.5rem;
  }
`;

export const RemoveItemButton = styled.button`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-button"]};
  padding: 0 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    ${mixins.fonts.buttonM}
    text-transform: uppercase;
  }
`;

export const ItemValue = styled.span`
  align-self: flex-start;
  ${mixins.fonts.textM}
  font-weight: bold;
  padding-top: 0.5rem;
`;
