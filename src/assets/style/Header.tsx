import styled from 'styled-components'


export const HeaderComponents = styled.div `
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0 5px 5px -5px rgb(0 0 0 / 50%);
`

export const HeaderContainer = styled.div `
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderContainerItem = styled.div `
    display: flex;
    align-items: center;
    .sign-in {
        margin: 0 10px;
        color: #fff;
        background-color: #5e46ee;
    }
    .divider{ 
        height: 20px;
        padding-right: 0;
        border-right: 1px solid #616a94;
    }
`