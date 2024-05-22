import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    > a {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      color: ${(props) => props.theme.purple};
      font-size: 0.875rem;
      padding: 0.5rem;
      background-color: ${(props) => props.theme["purple-light"]};

      span {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }
`;
