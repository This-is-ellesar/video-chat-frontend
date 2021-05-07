import react, { FC } from 'react'
//ui
import { Room, RoomList, RoomListItem} from './style'

const Rooms: FC<any> = () => {
    return (
        <Room>
            <h1>Список комнат</h1>
            <RoomList>
                <RoomListItem>
                </RoomListItem>
                <RoomListItem>

                </RoomListItem>
                <RoomListItem>

                </RoomListItem>
                <RoomListItem>

                </RoomListItem>
                <RoomListItem>

                </RoomListItem>
            </RoomList>
        </Room>
    )
}

export default Rooms