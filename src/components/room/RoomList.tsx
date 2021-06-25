import { FC } from 'react'
//hooks
import { useTypedSelector } from '../hooks/useTypedSelector'
//components
import RoomListItem from './RoomListItem'

const RoomList: FC = () => {
  const { rooms } = useTypedSelector((state) => state.room)

  return (
    <div>
      {rooms}
      <RoomListItem />
    </div>
  )
}

export default RoomList
