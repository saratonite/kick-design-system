import styled from "styled-components";
import theme from '../theme'

const Card = styled.div `
  box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px 0px;
  margin-bottom: ${theme.margins.cardBottomMargin};
  background: rgb(255, 255, 255);
  border-radius: ${(props) => props.round ? props.round : '5px'};
  padding: 10px 30px;
  transition: all 0.2s ease-in;
  display: ${(props) => props.inline ? 'inline-block' : 'block'};
  ${(props) => props.dark && `
    background-color: #3e3e3e;
    color: #f3f3f3;
  `}
  :hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 2px 5px 2px;
  }
`;

export default Card;