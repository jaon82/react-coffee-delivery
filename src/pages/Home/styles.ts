import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5.75rem;
  gap: 3.5rem;

  aside {
    p:first-child {
      color: ${(props) => props.theme["base-title"]};
      ${mixins.fonts.titleXL};
    }
    p {
      color: ${(props) => props.theme["base-title"]};
      ${mixins.fonts.textL};
    }
  }
`;
