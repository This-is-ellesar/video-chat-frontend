import styled from 'styled-components'

export const Dialog = styled.div `
    position: absolute;
    top: 0; left: 0;
    display: ${ ({ toggle } : any) => toggle ? 'block' : 'none'};
    width: 100%;
    height: 100%;
    font-family: 'Roboto';
`

export const DialogContainer = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${ ({ width } : any)  => width ? width : '400px'};
    background-color: #fff;
    border-radius: 4px;
    z-index: 999;
`

export const Overlay = styled.div `
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
` 

export const Title = styled.div `
    display: flex;
    justify-content: space-between;
    height: max-content;
    padding: 35px 25px;
    img {
        cursor: pointer;
    }
    h1 {
        margin: 0;
    }
`

export const Content = styled.div `
    padding: 0px 25px;
`
