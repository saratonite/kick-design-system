import styled, { css } from "styled-components";
import theme from "../theme";
const Button = styled.button`
  padding: 10px;
  border: 2px solid ${theme.colors.secondary};
  cursor: pointer;
  border-radius: 5px;
  background: white;
  ${props =>
    props.primary &&
    css`
      border: 2px solid ${theme.colors.primary};
    `}
  ${props =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
  margin: 1px;
  transition: All 0.2s ease-in;
  color: back;
  :hover {
    background: #ddd;
    transform: translateY(-1px);
  }

  ${props =>
    props.fill &&
    css`
      background: ${theme.colors.secondary};
      color: #fff;
      :hover {
        color: #3e3e3e;
      }
    `}
`;
export default Button;
