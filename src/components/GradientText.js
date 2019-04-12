import styled from "styled-components";
import theme from "../theme";
export default styled.span`
  background: -webkit-linear-gradient(
    40deg,
    ${theme.colors.primary},
    ${theme.colors.secondary},
    ${theme.colors.info}
  );

  transition: all 0.3s ease-in;

  :hover {
    background: -webkit-linear-gradient(
      40deg,
      ${theme.colors.info},
      ${theme.colors.secondary},
      ${theme.colors.primary}
    );

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
