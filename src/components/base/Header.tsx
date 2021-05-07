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
    font-family: 'Roboto';
    font-size: 16px;
    a{ 
        text-decoration: none;
        color: #fff;
    }
`