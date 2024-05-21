import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  border-top-right-radius: 2rem;
  padding: 0 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 256px;

  img {
    margin-top: -30px;
  }
`;
export const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
`;
export const CoffeeTag = styled.span`
  background-color: ${(props) => props.theme["yellow-light"]};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  color: ${(props) => props.theme["yellow-dark"]};
  text-transform: uppercase;
  ${mixins.fonts.tag};
`;
export const CoffeeName = styled.h3`
  ${mixins.fonts.titleS};
  color: ${(props) => props.theme["base-subtitle"]};
`;
export const CoffeeDrescription = styled.span`
  ${mixins.fonts.textS};
  color: ${(props) => props.theme["base-label"]};
`;
export const CoffeeOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  > div:first-child {
    gap: 0.25rem;
  }
`;

export const Currency = styled.span`
  ${mixins.fonts.textS};
`;

export const Price = styled.span`
  ${mixins.fonts.titleM};
`;

export const CartButton = styled.button`
  display: flex;
  background-color: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["base-card"]};
  padding: 0.5rem;
  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;
