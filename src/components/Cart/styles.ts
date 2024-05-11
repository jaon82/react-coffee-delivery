import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme["yellow-light"]};

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;
