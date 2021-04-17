import React from 'react'

import { HeaderComponents, HeaderContainerItem, HeaderContainer } from '../../assets/style/Header'
import { Button } from '../../assets/style/App'
import Logo from '../../assets/icons/logo.svg'

const Header = ({onToggle}: any) => {
    return (
        <HeaderComponents>
            <HeaderContainer>
                <HeaderContainerItem>
                    <img src={Logo} alt="Логотип"/>
                </HeaderContainerItem>
                <HeaderContainerItem>
                    <div>
                        <Button onClick={onToggle}>вход</Button>
                        <Button>авторизация</Button>
                    </div>
                </HeaderContainerItem>
            </HeaderContainer>
        </HeaderComponents>
    )
}

export default Header