import react, { Component } from 'react'
//ui
import { Room, RoomList, RoomListItem} from './style'
//types
import { IProps, IState } from './Rooms-types'
//http
import { $axios } from '../../http/axios-config'


class Rooms extends Component<IProps, IState> {

    async componentDidMount() {
        try {
            await $axios.get('/rooms/')
        } catch(e){
            console.log(e)
        }
    }

    render() {
        return (
            <Room>
                <h1>Rooms</h1>
                <RoomList>
                    <RoomListItem>
                    </RoomListItem>
                    <RoomListItem>
                    </RoomListItem>
                </RoomList>
            </Room>
        )
    }
}

export default Rooms