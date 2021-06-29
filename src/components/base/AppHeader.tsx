import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
//ui
import { Avatar, Button } from '@material-ui/core'
import {
  HeaderComponents,
  HeaderContainerItem,
  HeaderContainer,
  HeaderAccount,
} from './style'
import IconButton from '@material-ui/core/IconButton'
//icons
import Logo from '../../assets/icons/logo.svg'
import AccountIcon from '../../assets/icons/account-icon.svg'
import ArrowBottomIcon from '../../assets/icons/arrow-bottom.svg'
//interfaces
import { IHeader } from './App-types'

const Header: FC<IHeader> = () => {
  // @ts-ignore: Unreachable code error
  const { isAuthtentificated } = useTypedSelector((state) => state.auth)
  const { user } = useTypedSelector((state) => state.auth)

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
            <Button>
              <HeaderAccount>
                <span>{`${user.name} ${user.surname.slice(0, 1)}.`}</span>

                {user.avatar ? (
                  <Avatar src={`http://127.0.0.1/${user.avatar}/`} />
                ) : (
                  <Avatar />
                )}
                <img src={ArrowBottomIcon} alt="" />
              </HeaderAccount>
            </Button>
          )}
        </HeaderContainerItem>
      </HeaderContainer>
    </HeaderComponents>
  )
}

export default Header
