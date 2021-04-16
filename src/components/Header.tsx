import React from 'react'
import styled from 'styled-components'

import Logo from '../assets/icons/Logo.svg'

const HeaderComponents = styled.div `
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: 0 5px 5px -5px rgb(0 0 0 / 50%);
`

const HeaderContainer = styled.div `
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderContainerItem = styled.div `
    display: flex;
    align-items: center;
`

const Button = styled.button `
    margin: 0 10px;
    padding: 5px 15px;
    outline: none;
    border: none;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    display: inline-block;
    border-radius: 4px;
    letter-spacing: 2px;
    background-size: 200% auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    transition: .5s;
`

function Header(){
    return (
        <HeaderComponents>
            <HeaderContainer>
                <HeaderContainerItem>
                    <img src={Logo} alt="Логотип"/>
                </HeaderContainerItem>
                <HeaderContainerItem>
                    <div>
                        <Button>вход</Button>
                        <Button>авторизация</Button>
                    </div>
                </HeaderContainerItem>
            </HeaderContainer>
        </HeaderComponents>
    )
}

export default Header