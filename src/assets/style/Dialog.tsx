import styled from 'styled-components'

export const DialogContainer = styled.div `
    width: ${ ({ width } : any)  => width ? width : '400px'};
    background-color: #fff;
    border-radius: 4px;
    z-index: 999;
`

export const Content = styled.div `
    padding: 0px 25px;
`
