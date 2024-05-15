import styled from "styled-components";

export const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  padding: 0.5rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;

  > svg {
    color: ${(props) => props.theme.background};
  }
`;
