import { FC } from 'react'
import { useParams } from 'react-router-dom'
import useWebRtc from '../../hooks/useWebRtc'
//ui
import { RoomVideoContainer, RoomVideo, Video } from './style'

const Room: FC = () => {
  const { id: roomId }: any = useParams()

  const { clients, provideMediaRef } = useWebRtc(roomId)

  return (
    <RoomVideo>
      <h1>Room: {roomId}</h1>
      <RoomVideoContainer>
        {clients.map((clientId: any) => (
          <Video key={clientId}>
            <video
              ref={(instance) => {
                provideMediaRef(clientId, instance)
              }}
              autoPlay
              playsInline
              muted={clientId === 'LOCAL_VIDEO'}
            />
          </Video>
        ))}
      </RoomVideoContainer>
    </RoomVideo>
  )
}

export default Room
