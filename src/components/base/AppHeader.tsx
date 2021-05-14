import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { showSnackbarReducer } from '../../store/actions/snackbar'
import { NavLink } from 'react-router-dom'
//ui 
import { HeaderComponents, HeaderContainerItem, HeaderContainer } from './style'
//icons
import Logo from '../../assets/icons/logo.svg'
//interfaces
import { IHeader } from './App-types';

const Header: FC<IHeader> = () => {

    function SHOW_SNACKBAR(){
        // @ts-ignore: Unreachable code error
        useDispatch()
    }
    
    return (
        <HeaderComponents>
            <HeaderContainer>
                <HeaderContainerItem>
                    <NavLink to="/">
                        <img 
                        src={Logo} 
                        alt="Логотип"
                        />
                    </NavLink>
                </HeaderContainerItem>
                <HeaderContainerItem>
                    <button onClick={() => SHOW_SNACKBAR()}>Click</button>
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