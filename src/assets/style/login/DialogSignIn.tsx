import styled from 'styled-components'

export const SignIn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input `
    width: 80%;
    height: 30px;
    margin: 0 0 25px 0;
    background: #F3F3F3;
    border: 0.3px solid rgba(152, 152, 152, 0.5);
    outline: none;
    box-sizing: border-box;
    border-radius: 4px;
`

export const Button = styled.button `
    width: 150px;
    height: 50px;
    margin: 15px 0 35px 0;
    background: #8BC9F5;
    border: 0.3px solid rgba(152, 152, 152, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.13);
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
`