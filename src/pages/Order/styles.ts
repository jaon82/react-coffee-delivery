import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const OrderContainer = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  > div:first-child {
    min-width: 640px;
  }

  > div:nth-child(2) {
    flex: 1;
  }
`;

export const OrderSectionTitle = styled.h3`
  ${mixins.fonts.titleXS}
`;

export const BaseCard = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
`;

export const AddressFields = styled(BaseCard)`
  div > svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const OrdeResume = styled(BaseCard)`
  border-top-right-radius: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > button {
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    text-transform: uppercase;
    ${mixins.fonts.buttonG}

    &:hover {
      opacity: 0.75;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const LabelTitle = styled.div`
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const LabelDescription = styled.div`
  color: ${(props) => props.theme["base-text"]};
  ${mixins.fonts.textS}
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 1rem;
  margin-top: 2rem;

  > div:first-child {
    grid-column: 1;
    grid-row: 1;
  }
  > div:nth-child(2) {
    grid-column: span 3;
    grid-row: 2;
  }
  > div:nth-child(3) {
    grid-column: 1;
    grid-row: 3;
  }
  > div:nth-child(4) {
    grid-column: 2 / span 2;
    grid-row: 3;
  }
  > div:nth-child(5) {
    grid-column: 1;
    grid-row: 4;
  }
  > div:nth-child(6) {
    grid-column: 2;
    grid-row: 4;
  }
  > div:nth-child(7) {
    grid-column: 3;
    grid-row: 4;
  }
`;

export const PaymentOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const PaymentFields = styled(BaseCard)`
  margin-top: 0.75rem;

  div > svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const OrderTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: space-between;

    > span:first-child {
      ${mixins.fonts.textS}
    }
  }

  div:nth-child(3) {
    > span {
      ${mixins.fonts.textL}
      font-weight: bold;
    }
  }
`;

export const Divider = styled.hr`
  border: solid 1px ${(props) => props.theme["base-button"]};
`;
