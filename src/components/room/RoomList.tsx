import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
//components
import RoomListItem from './RoomListItem'
//ui
import { RoomContainer } from '../../views/Rooms/style'
//types
import { IRoom } from '../../types/store/room'

const RoomList: FC = () => {
  const { rooms } = useTypedSelector((state) => state.room)

  return (
    <RoomContainer>
      {rooms.map((room: IRoom, index: string) => (
        // @ts-ignore: Unreachable code error
        <RoomListItem room={room} key={index} />
      ))}
    </RoomContainer>
  )
}

export default RoomList
