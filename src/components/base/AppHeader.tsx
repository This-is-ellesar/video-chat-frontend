import React, { FC } from 'react'
//ui 
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { HeaderComponents, HeaderContainerItem, HeaderContainer } from '../../assets/style/Header'
//icons
import Logo from '../../assets/icons/logo.svg'
//interfaces
import { IHeader } from '../../types/base/AppHeader';

const Header: FC<IHeader> = ({ onToggle }) => {
    return (
        <AppBar style={{ background: '#161a31'}}>
            <Toolbar>
                <HeaderComponents>
                    <HeaderContainer>
                        <HeaderContainerItem>
                            <img src={Logo} alt="Логотип"/>
                        </HeaderContainerItem>
                        <HeaderContainerItem>
                            <Button
                                className="sign-in"
                                variant="outlined"
                                onClick={ onToggle }
                            >sign_in</Button>
                        </HeaderContainerItem>
                    </HeaderContainer>
                </HeaderComponents>
            </Toolbar>
        </AppBar>
    )
}

export default Header