import { FC } from 'react'
import { NavLink } from 'react-router-dom'
//ui
import { HeaderComponents, HeaderContainerItem, HeaderContainer } from './style'
import IconButton from '@material-ui/core/IconButton'
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
            <IconButton title="refresh" color="primary">
              <img src={Logo} alt="Логотип" />
            </IconButton>
          </NavLink>
        </HeaderContainerItem>
        <HeaderContainerItem>
          <NavLink to="/auth">
            <IconButton size="small" title="refresh" color="primary">
              <img src={AccountIcon} alt="Sign in" title="Sign in" />
            </IconButton>
          </NavLink>
        </HeaderContainerItem>
      </HeaderContainer>
    </HeaderComponents>
  )
}

export default Header
