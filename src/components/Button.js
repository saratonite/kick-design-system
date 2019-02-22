import styled from 'styled-components'

const Button = styled.button `
padding: 10px;
border:2px solid ${(props) => props.primary ? '#f56': '#8755ff'};
background: white;
border-radius: 5px;
margin: 1px;
transition: All 0.25s ease-in-out;
color:back;
:hover {
    background: #ddd;
    transform: translateY(-2px);
}
`
export default Button