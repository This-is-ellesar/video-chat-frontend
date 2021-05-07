import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
//ui 
import { HeaderComponents, HeaderContainerItem, HeaderContainer } from './Header'
//icons
import Logo from '../../assets/icons/logo.svg'
//interfaces
import { IHeader } from '../../types/base/AppHeader';

const Header: FC<IHeader> = () => {
    return (
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
    )
}

export default Header