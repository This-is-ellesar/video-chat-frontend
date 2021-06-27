import { Component } from 'react'
import { connect } from 'react-redux'
//components
import RoomHeader from '../../components/room/RoomHeader'
import RoomList from '../../components/room/RoomList'
//store
import { setRooms } from '../../store/room'
import { showSnackbar } from '../../store/base'
//ui
import { Room } from './style'
//types
import { IProps, IState } from './Rooms-types'
//http
import { $axios } from '../../http/axios-config'

class Rooms extends Component<IProps, IState> {
  async componentWillMount() {
    try {
      const { data } = await $axios.get('/room/rooms/')

      this.props.setRooms(data)
    } catch (e) {
      this.props.showSnackbar({
        message: 'Упс! Произошла ошибка, пожалуйста, попробуйте позже!',
        show: true,
        type: 'message',
      })
    }
  }

  render() {
    return (
      <Room>
        <RoomHeader />
        <RoomList />
      </Room>
    )
  }
}

const mapDispatchProps = {
  setRooms,
  showSnackbar,
}

export default connect(null, mapDispatchProps)(Rooms)
