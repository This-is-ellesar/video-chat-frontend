import { FC } from 'react'
import { NavLink } from 'react-router-dom'
//ui
import Avatar from '@material-ui/core/Avatar'
import { RoomListItem as RoomListItemContainer } from '../../views/Rooms/style'
import { RoomItemHeader, RoomItemMain, RoomItemFooter } from './style'
//types
import { IPropsRoomList } from '../../types/components/room/room-list-item'

const RoomListItem: FC<IPropsRoomList> = ({ room }) => {
  return (
    <RoomListItemContainer>
      <RoomItemHeader>
        <div>
          <h1>Room: {room.name}</h1>
        </div>
        <div>
          {room.avatar ? (
            <Avatar src={`http://127.0.0.1/${room.avatar}/`} />
          ) : (
            <Avatar />
          )}
        </div>
      </RoomItemHeader>
      <RoomItemMain>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A deserunt
      </RoomItemMain>
      <RoomItemFooter>
        <div>Room users: {room.users.length}</div>
        <NavLink to={`${room._id}/`} title="Открыть">
          Open
        </NavLink>
      </RoomItemFooter>
    </RoomListItemContainer>
  )
}

export default RoomListItem
