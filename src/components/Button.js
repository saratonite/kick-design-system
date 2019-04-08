import styled, { css } from "styled-components";
import theme from "../theme";
const Button = styled.button`
  padding: 10px;
  border: 2px solid ${theme.colors.secondary};
  ${props =>
    props.primary &&
    css`
      border: 2px solid ${theme.colors.primary};
    `}
  background: white;
  border-radius: 5px;
  margin: 1px;
  transition: All 0.25s ease-in-out;
  color: back;
  :hover {
    background: #ddd;
    transform: translateY(-2px);
  }
`;
export default Button;
