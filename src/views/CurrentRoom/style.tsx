import styled from 'styled-components'

export const CurrentRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 55px);
  main {
    width: 80%;
    height: 100%;
  }
`

export const RoomVideo = styled.div``

export const RoomVideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const Video = styled.div`
  width: 280px;
  height: 211px;
  margin: 10px;
  video {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
`
