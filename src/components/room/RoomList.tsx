import { FC } from 'react'
//hooks
import { useTypedSelector } from '../hooks/useTypedSelector'
//components
import RoomListItem from './RoomListItem'
//ui
import { RoomContainer } from '../../views/Rooms/style'

const RoomList: FC = () => {
  const { users } = useTypedSelector((state) => state.room.rooms)

  return (
    <RoomContainer>
      {users}
      <RoomListItem />
    </RoomContainer>
  )
}

export default RoomList
