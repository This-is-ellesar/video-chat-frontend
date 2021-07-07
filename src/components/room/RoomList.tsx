import { FC, useState, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
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
  const rootNode: any = useRef()
  // const { rooms } = useTypedSelector((state) => state.room)

  useEffect(() => {
    socket.on('share-rooms', ({ rooms = [] } = {}) => {
      if (rootNode.current) {
        updateRooms(rooms)
      }
    })
  }, [])

  return (
    // <RoomContainer>
    //   {rooms.map((room: IRoom, index: string) => (
    //     <RoomListItem room={room} key={index} />
    //   ))}
    // </RoomContainer>
    <RoomContainer ref={rootNode}>
      {rooms.map((roomID) => (
        <RoomListItem room={roomID} key={roomID} />
        // <div key={roomID}>
        //   <li>{roomID}</li>
        //   <button onClick={() => history.push(`/${roomID}/`)}>JOIN ROOM</button>
        // </div>
      ))}
    </RoomContainer>
  )
}

export default RoomList
