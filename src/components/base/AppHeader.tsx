import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
//ui
import { HeaderComponents, HeaderContainerItem, HeaderContainer } from './style'
import IconButton from '@material-ui/core/IconButton'
//icons
import Logo from '../../assets/icons/logo.svg'
import AccountIcon from '../../assets/icons/account-icon.svg'
//interfaces
import { IHeader } from './App-types'

const Header: FC<IHeader> = () => {
  // @ts-ignore: Unreachable code error
  const { isAuthtentificated } = useTypedSelector((state) => state.auth)

  console.log(isAuthtentificated)
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
          {!isAuthtentificated ? (
            <NavLink to="/auth">
              <IconButton size="small" title="refresh" color="primary">
                <img src={AccountIcon} alt="Sign in" title="Sign in" />
              </IconButton>
            </NavLink>
          ) : (
            <div>Ты авторизован, брат</div>
          )}
        </HeaderContainerItem>
      </HeaderContainer>
    </HeaderComponents>
  )
}

export default Header
