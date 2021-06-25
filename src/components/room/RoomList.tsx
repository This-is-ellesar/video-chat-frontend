import { FC } from 'react'
//hooks
import { useTypedSelector } from '../hooks/useTypedSelector'
//components
import RoomListItem from './RoomListItem'

const RoomList: FC = () => {
  const users: any[] = useTypedSelector((state) => state.room.rooms)

  return (
    <div>
      {users}
      <RoomListItem />
    </div>
  )
}

export default RoomList
