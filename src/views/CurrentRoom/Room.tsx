import { FC } from 'react'
import { useParams } from 'react-router-dom'
import useWebRtc from '../../hooks/useWebRtc'

const Room: FC = () => {
  const { id: roomId }: any = useParams()

  const { clients, provideMediaRef } = useWebRtc(roomId)

  return (
    <div>
      <h1>Room: {roomId}</h1>
      {clients.map((clientId: any) => (
        <div key={clientId}>
          <video
            ref={(instance) => {
              provideMediaRef(clientId, instance)
            }}
            autoPlay
            playsInline
            muted={clientId === 'LOCAL_VIDEO'}
          />
        </div>
      ))}
    </div>
  )
}

export default Room
