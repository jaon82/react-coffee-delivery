import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  gap: 2.5rem;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const OrderInfoContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 2.5rem;
  border: solid 1px ${(props) => props.theme.yellow};

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
