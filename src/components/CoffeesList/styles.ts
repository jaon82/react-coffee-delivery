import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CoffeesListContainer = styled.div`
  margin-top: 2rem;
`;

export const CoffeesListTitle = styled.h2`
  margin-top: 2rem;
  font-size: ${mixins.fonts.titleL};
`;

export const CoffeesListItems = styled.div`
  margin-top: 3.375rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
