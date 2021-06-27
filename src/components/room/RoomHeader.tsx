import { FC } from 'react'
import { connect } from 'react-redux'
import { $axios } from '../../http/axios-config'
//store
import { setRooms } from '../../store/room'
//ui
import { RoomHeaderStyle } from '../../views/Rooms/style'
import IconButton from '@material-ui/core/IconButton'
import RefreshIcon from '../../assets/icons/refresh-icon.svg'
//types
import { IPropsRoomHeader } from '../../types/components/room/room-header'

const RoomHeader: FC<IPropsRoomHeader> = (props) => {
  const refreshRoomList = async () => {
    try {
      const { data } = await $axios.get('/room/rooms/')

      props.setRooms(data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <RoomHeaderStyle>
      <h1>#room-list</h1>
      <IconButton
        size="small"
        title="refresh"
        color="primary"
        onClick={() => refreshRoomList()}
      >
        <img src={RefreshIcon} alt="refresh" />
      </IconButton>
    </RoomHeaderStyle>
  )
}

const mapDispatchProps = {
  setRooms,
}

export default connect(null, mapDispatchProps)(RoomHeader)
