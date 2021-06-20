import { FC } from 'react'
//hooks
import { useTypedSelector } from '../hooks/useTypedSelector'

const RoomList: FC<any> = () => {
  const { rooms } = useTypedSelector((state) => state.room.rooms)

  return <div>{rooms}</div>
}

export default RoomList
