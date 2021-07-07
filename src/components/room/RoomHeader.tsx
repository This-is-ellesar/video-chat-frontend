import { FC } from 'react'
import { v4 } from 'uuid'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { $axios } from '../../http/axios-config'
//store
import { setRooms } from '../../store/room'
//ui
import { RoomHeaderStyle } from '../../views/Rooms/style'
import IconButton from '@material-ui/core/IconButton'
import RefreshIcon from '../../assets/icons/refresh-icon.svg'
import AddIcon from '../../assets/icons/add-room-icon.svg'
//types
import { IPropsRoomHeader } from '../../types/components/room/room-header'

const RoomHeader: FC<IPropsRoomHeader> = (props) => {
  const history = useHistory()

  const createRoom = () => {
    try {
      history.push(`/${v4()}/`)
    } catch (e) {
      console.log(e)
    }
  }

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
      <div>
        <h1>#room-list</h1>
      </div>
      <div>
        <IconButton
          size="small"
          title="refresh"
          color="primary"
          onClick={() => refreshRoomList()}
        >
          <img src={RefreshIcon} alt="refresh" />
        </IconButton>
        <IconButton
          size="small"
          title="refresh"
          color="primary"
          onClick={() => createRoom()}
        >
          <img src={AddIcon} alt="add" />
        </IconButton>
      </div>
    </RoomHeaderStyle>
  )
}

const mapDispatchProps = {
  setRooms,
}

export default connect(null, mapDispatchProps)(RoomHeader)
