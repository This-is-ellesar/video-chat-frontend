import { Component } from 'react'
//ui
import { Room, RoomList, RoomListItem} from './style'
//types
import { IProps, IState } from './Rooms-types'
//http
import { $axios } from '../../http/axios-config'


export class Rooms extends Component<IProps, IState> {
    
    async componentWillMount() {
        try {
            const { data } = await $axios.get('/room/rooms/')
            this.setState(data)
        } catch(e){
            console.error(e)
        }
    }

    render() {
        return (
            <Room>
                <h1>Rooms</h1>
                <RoomList>
                    { this.setState }
                    <RoomListItem>
                    </RoomListItem>
                    <RoomListItem>
                    </RoomListItem>
                </RoomList>
            </Room>
        )
    }
}

