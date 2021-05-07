import styled from 'styled-components'

export const SignIn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 0px 4px 4px rgba(78,42,182, 0.1);
    border-radius: 4px;
    padding: 30px;
    h4{
        font-size: 12px;
        font-weight: 600;
    }
    input{ 
        text-align: center;
        height: 40px;
        width: max-content;
        font-size: 18px;
        background: #fafafa;
        outline: none;
        border: none;
        border-radius: 4px;
    }
`

export const InputWrapperHeadline = styled.div `
    font-size: 16px;
    font-weight: 600;
`

export const  InputPhoneWrapper = styled.div `
    margin: 15px;
`