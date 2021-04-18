import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { HeaderComponents, HeaderContainerItem, HeaderContainer } from '../../assets/style/Header'
import { Button } from '../../assets/style/App'
import Logo from '../../assets/icons/logo.svg'

const Header = ({onToggle}: any) => {
    return (
        <AppBar>
            <Toolbar>
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
            </Toolbar>
        </AppBar>
    )
}

export default Header