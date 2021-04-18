import React from 'react'
import { AppBar, Toolbar, Button, TextField } from '@material-ui/core';

import { HeaderComponents, HeaderContainerItem, HeaderContainer } from '../../assets/style/Header'
import Logo from '../../assets/icons/logo.svg'

const Header = ({ onToggle }: any) => {
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
                            <div className="divider"></div>
                            <Button
                                variant="outlined"
                                className="sign-in"
                            >sign_up</Button>
                        </HeaderContainerItem>
                    </HeaderContainer>
                </HeaderComponents>
            </Toolbar>
        </AppBar>
    )
}

export default Header