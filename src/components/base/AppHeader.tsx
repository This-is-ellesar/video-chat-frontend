import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
//ui 
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { HeaderComponents, HeaderContainerItem, HeaderContainer } from './Header'
//icons
import Logo from '../../assets/icons/logo.svg'
//interfaces
import { IHeader } from '../../types/base/AppHeader';

const Header: FC<IHeader> = () => {
    return (
        <AppBar>
            <Toolbar>
                <HeaderComponents>
                    <HeaderContainer>
                        <HeaderContainerItem>
                            <NavLink to="/">
                                <img src={Logo} alt="Логотип"/>
                            </NavLink>
                        </HeaderContainerItem>
                        <HeaderContainerItem>
                            <NavLink to="/sign">
                                Sign In
                            </NavLink>
                        </HeaderContainerItem>
                    </HeaderContainer>
                </HeaderComponents>
            </Toolbar>
        </AppBar>
    )
}

export default Header