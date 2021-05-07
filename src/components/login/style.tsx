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
    margin: 0 0 25px 0;
    h4{
        font-size: 12px;
        font-weight: 600;
    }
    input{ 
        height: 40px;
        width: max-content;
        font-size: 16px;
        background: #fafafa;
        outline: none;
        border: 1px solid #7bbaec;
        border-radius: 4px;
        margin-bottom: 20px;
    }
`

export const InputWrapperHeadline = styled.div `
    font-size: 18px;
    font-weight: 600;
`

export const  InputPhoneWrapper = styled.div `
    margin: 15px;
`