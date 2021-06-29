import { Component } from 'react'
//components
import RoomHeader from '../../components/room/RoomHeader'
import RoomList from '../../components/room/RoomList'
//ui
import { Room } from './style'
//types
import { IProps, IState } from './Rooms-types'

class Rooms extends Component<IProps, IState> {
  render() {
    return (
      <Room>
        <RoomHeader />
        <RoomList />
      </Room>
    )
  }
}

export default Rooms
