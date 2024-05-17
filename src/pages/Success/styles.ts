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
  gap: 6.375rem;
`;

export const OrderInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  padding: 2.5rem;
  flex: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: 8px 32px;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

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
