import { FC } from 'react'
//components
import RoomListItem from './RoomListItem'
//ui
import { RoomContainer } from '../../views/Rooms/style'

const RoomList: FC = () => {
  return (
    <RoomContainer>
      <RoomListItem />
    </RoomContainer>
  )
}

export default RoomList
