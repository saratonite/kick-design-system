import styled, {css } from 'styled-components'

const Heading = styled.h1`
font-size: 3.5em;
margin:0;
padding:0;
${props  => {
    switch(props.as) {
        case 'h2': 
        return css`font-size: 3em;`
        case 'h3':
        return css`font-size: 2.5em;`
        case 'h4':
        return css`font-size: 2em;`
        case 'h4':
        return css`font-size: 1.7em;`
        case 'h5':
        return css`font-size: 1.4em;`
        case 'h6':
        return css`font-size:1.2em;`
    }
}}
`

export default Heading;