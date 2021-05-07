import styled from 'styled-components'

export const MainWrapper = styled.div `
    padding: 0 10%;
`


export const Button = styled.button `
    margin: 0 10px;
    padding: 5px 15px;
    outline: none;
    border: none;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    display: inline-block;
    border-radius: 4px;
    letter-spacing: 2px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    transition: .1s;
    &:hover{
        box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    }
    &:active{
        background: rgba(0, 0, 0, 0.3);
        color: #efefef;
    }
`
