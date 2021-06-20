import { Component } from 'react'
import { connect } from 'react-redux'
//components
import RoomListS from '../../components/room/RoomList'
//store
import { setRooms } from '../../store/room'
//ui
import { Room, RoomList, RoomListItem } from './style'
//types
import { IProps, IState } from './Rooms-types'
//http
import { $axios } from '../../http/axios-config'

class Rooms extends Component<IProps, IState> {
  async componentWillMount() {
    try {
      const { data } = await $axios.get('/room/rooms/')

      console.log(data)
      this.props.setRooms(data)
    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <Room>
        <RoomList>
          <RoomListItem>
            <RoomListS></RoomListS>
          </RoomListItem>
          <RoomListItem></RoomListItem>
        </RoomList>
      </Room>
    )
  }
}

const mapDispatchProps = {
  setRooms,
}

export default connect(null, mapDispatchProps)(Rooms)
