import { FC } from 'react'
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
      <RoomItemMain>Room description</RoomItemMain>
      <RoomItemFooter>Room users: 2</RoomItemFooter>
    </RoomListItemContainer>
  )
}

export default RoomListItem
