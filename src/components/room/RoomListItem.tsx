import { FC } from 'react'
import { NavLink } from 'react-router-dom'
//ui
import { RoomListItem as RoomListItemContainer } from '../../views/Rooms/style'
import { RoomItemHeader, RoomItemMain, RoomItemFooter } from './style'
import closeIcon from '../../assets/icons/close-icon.svg'

const RoomListItem: FC = () => {
  return (
    <RoomListItemContainer>
      <RoomItemHeader>
        <h1>Room: 1</h1>
        <img src={closeIcon} alt="крестик" />
      </RoomItemHeader>
      <RoomItemMain>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A deserunt
      </RoomItemMain>
      <RoomItemFooter>
        <div>Room users: 2</div>
        <NavLink to={`${1}/`} title="Открыть">
          Open
        </NavLink>
      </RoomItemFooter>
    </RoomListItemContainer>
  )
}

export default RoomListItem
