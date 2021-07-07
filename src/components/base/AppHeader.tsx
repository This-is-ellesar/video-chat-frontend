import { FC, useState } from 'react'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
//store
import { logOut } from '../../store/auth'
//ui
import { Avatar, Button, Menu, MenuItem } from '@material-ui/core'
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

const Header: FC<IHeader> = ({ logOut }) => {
  const { isAuthtentificated } = useTypedSelector((state) => state.auth)
  const { user } = useTypedSelector((state) => state.auth)
  const [dropDown, setDropDown] = useState<null | HTMLElement>(null)
  const history = useHistory()

  const openDropDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDropDown(event.currentTarget)
  }

  const closeDropDown = () => setDropDown(null)

  const logOutHandler = async () => {
    try {
      closeDropDown()

      await localStorage.clear()
      await logOut()

      history.push('/auth/')
    } catch (e) {
      console.log(e)
    }
  }

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
            <NavLink to="/auth/">
              <IconButton size="small" title="refresh" color="primary">
                <img src={AccountIcon} alt="Sign in" title="Sign in" />
              </IconButton>
            </NavLink>
          ) : (
            <>
              <Button onClick={openDropDown}>
                <HeaderAccount>
                  <span>{`${user.name} ${user.surname.slice(0, 1)}.`}</span>

                  {user.avatar ? (
                    <Avatar src={`http://127.0.0.1/${user.avatar}/`} />
                  ) : (
                    <Avatar />
                  )}
                  <img
                    src={ArrowBottomIcon}
                    className={dropDown ? 'arrow--top' : 'arrow--bottom'}
                    alt=""
                  />
                </HeaderAccount>
              </Button>
              <Menu
                anchorEl={dropDown}
                keepMounted
                open={Boolean(dropDown)}
                onClose={closeDropDown}
              >
                <MenuItem onClick={logOutHandler}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </HeaderContainerItem>
      </HeaderContainer>
    </HeaderComponents>
  )
}

const mapDispatchProps = {
  logOut,
}

export default connect(null, mapDispatchProps)(Header)
