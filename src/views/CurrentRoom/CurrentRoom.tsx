import { Component } from 'react'
//ui
import { CurrentRoomContainer } from './style'
//types
import { IProps, IState } from './current-room-types'

class CurrentRoom extends Component<IProps, IState> {
  render() {
    return (
      <CurrentRoomContainer>
        <main>
          <h1>Available rooms</h1>
        </main>
      </CurrentRoomContainer>
    )
  }
}

export default CurrentRoom
