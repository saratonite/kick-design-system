import styled from "styled-components";
import theme from "../theme";
export default styled.span`
  background: -webkit-linear-gradient(
    45deg,
    ${theme.colors.secondary},
    ${theme.colors.primary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
