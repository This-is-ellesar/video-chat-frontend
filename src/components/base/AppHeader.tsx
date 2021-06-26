import { FC } from 'react'
import { NavLink } from 'react-router-dom'
//ui
import { HeaderComponents, HeaderContainerItem, HeaderContainer } from './style'
//icons
import Logo from '../../assets/icons/logo.svg'
import AccountIcon from '../../assets/icons/account-icon.svg'
//interfaces
import { IHeader } from './App-types'

const Header: FC<IHeader> = () => {
  return (
    <HeaderComponents>
      <HeaderContainer>
        <HeaderContainerItem>
          <NavLink to="/">
            <img src={Logo} alt="Логотип" />
          </NavLink>
        </HeaderContainerItem>
        <HeaderContainerItem>
          <NavLink to="/auth">
            <img src={AccountIcon} alt="Sign in" title="Sign in" />
          </NavLink>
        </HeaderContainerItem>
      </HeaderContainer>
    </HeaderComponents>
  )
}

export default Header
