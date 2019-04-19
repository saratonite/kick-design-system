import styled, {css } from 'styled-components'

const Heading = styled.h1`
font-weight: 400;
font-size: 32px;
line-height: 42px;
margin:0;
padding:0;
${props  => {
    switch(props.as) {
        case 'h2': 
        return css`font-size: 24px;`
        case 'h3':
        return css`font-size: 18px;`
        case 'h4':
        return css`font-size: 16px;`
        case 'h5':
        return css`font-size: 14px;`
        case 'h6':
        return css`font-size: 12px;`
    }
}}
`

export default Heading;