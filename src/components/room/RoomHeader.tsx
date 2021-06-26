import { FC } from 'react'
import { $axios } from '../../http/axios-config'
//ui
import { RoomHeaderStyle } from '../../views/Rooms/style'
import IconButton from '@material-ui/core/IconButton'
import RefreshIcon from '../../assets/icons/refresh-icon.svg'

const RoomHeader: FC = () => {
  const refreshRoomList = async () => {
    try {
      const { data } = await $axios.get('/room/rooms/')

      //надо обновить стейт
      console.log(data)
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

export default RoomHeader
