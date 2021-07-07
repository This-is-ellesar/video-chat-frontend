import { Component } from 'react'
//components
import Room from './Room'
//ui
import { CurrentRoomContainer } from './style'
//types
import { IProps, IState } from './current-room-types'

class CurrentRoom extends Component<IProps, IState> {
  render() {
    return (
      <CurrentRoomContainer>
        <main>
          <Room />
        </main>
      </CurrentRoomContainer>
    )
  }
}

export default CurrentRoom
