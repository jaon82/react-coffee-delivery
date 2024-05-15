import styled from "styled-components";

export const NumberInputContainer = styled.div`
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  height: 38px;

  > span {
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const CountButton = styled.button`
  background-color: inherit;
  color: ${(props) => props.theme.purple};
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
