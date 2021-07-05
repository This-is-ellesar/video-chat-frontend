import { FC, useState, useEffect, useRef } from 'react'
import { v4 } from 'uuid'
import { useHistory } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import socket from '../../http/socket-io'
//components
import RoomListItem from './RoomListItem'
//ui
import { RoomContainer } from '../../views/Rooms/style'
//types
import { IRoom } from '../../types/store/room'

const RoomList: FC = () => {
  const history = useHistory()
  const [rooms, updateRooms] = useState([])
  // const { rooms } = useTypedSelector((state) => state.room)

  useEffect(() => {
    socket.on('share-rooms', ({ rooms = [] } = {}) => {
      updateRooms(rooms)
    })
  }, [])

  return (
    // <RoomContainer>
    //   {rooms.map((room: IRoom, index: string) => (
    //     <RoomListItem room={room} key={index} />
    //   ))}
    // </RoomContainer>
    <div>
      dawd
      {rooms}
      {rooms.map((roomID) => (
        <div key={roomID}>
          <li>{roomID}</li>
          <button onClick={() => history.push(`/${v4()}/`)}>JOIN ROOM</button>
        </div>
      ))}
    </div>
  )
}

export default RoomList
