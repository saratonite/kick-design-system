import styled , {css } from "styled-components";

const Image = styled.img`
max-width: 100%;
${props => props.triangle && css`
-webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`}

${props => props.circle && css`
    border-radius:50%;
`}

`


export default Image