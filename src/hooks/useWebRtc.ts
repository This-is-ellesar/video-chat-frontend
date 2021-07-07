import { useRef, useEffect, useCallback } from 'react'
// @ts-ignore: Unreachable code error
import freeice from 'freeice'
import socket from '../http/socket-io'
import useStateWithCallback from './useStateWithCallback'

const LOCAL_VIDEO = 'LOCAL_VIDEO'

export default function useWebRtc(roomId: string) {
  const [clients, updateClients] = useStateWithCallback([])
  const peerConnections: any = useRef({})
  const localMediaStream: any = useRef(null)
  const peerMediaElements: any = useRef({
    [LOCAL_VIDEO]: null,
  })

  const addNewClient = useCallback(
    (newClient, cb) => {
      updateClients((list: any) => {
        if (!list.includes(newClient)) {
          return [...list, newClient]
        }

        return list
      }, cb)
    },
    [clients, updateClients],
  )

  useEffect(() => {
    const handleNewPeer = async ({ peerID, createOffer }: any) => {
      if (peerID in peerConnections.current) {
        return console.log('Already connected')
      }

      peerConnections.current[peerID] = new RTCPeerConnection({
        iceServers: freeice(),
      })

      peerConnections.current[peerID].onicecandidate = (event: any) => {
        if (event.candidate) {
          socket.emit('relay-ice', {
            peerID,
            iceCandidate: event.candidate,
          })
        }
      }

      let tracksNumber = 0
      peerConnections.current[peerID].ontrack = ({
        streams: [remoteStream],
      }: any) => {
        tracksNumber++

        if (tracksNumber === 2) {
          // video & audio tracks received
          tracksNumber = 0
          addNewClient(peerID, () => {
            if (peerMediaElements.current[peerID]) {
              peerMediaElements.current[peerID].srcObject = remoteStream
            } else {
              // FIX LONG RENDER IN CASE OF MANY CLIENTS
              let settled = false
              const interval = setInterval(() => {
                if (peerMediaElements.current[peerID]) {
                  peerMediaElements.current[peerID].srcObject = remoteStream
                  settled = true
                }

                if (settled) {
                  clearInterval(interval)
                }
              }, 1000)
            }
          })
        }
      }
      localMediaStream.current.getTracks().forEach((track: any) => {
        peerConnections.current[peerID].addTrack(
          track,
          localMediaStream.current,
        )
      })

      if (createOffer) {
        const offer = await peerConnections.current[peerID].createOffer()

        await peerConnections.current[peerID].setLocalDescription(offer)

        socket.emit('relay-sdp', {
          peerID,
          sessionDescription: offer,
        })
      }
    }

    socket.on('add-peer', handleNewPeer)
  }, [])

  useEffect(() => {
    async function setRemoteMedia({
      peerID,
      sessionDescription: remoteDescription,
    }: any) {
      await peerConnections.current[peerID]?.setRemoteDescription(
        new RTCSessionDescription(remoteDescription),
      )

      if (remoteDescription.type === 'offer') {
        const answer = await peerConnections.current[peerID].createAnswer()

        await peerConnections.current[peerID].setLocalDescription(answer)

        socket.emit('relay-sdp', {
          peerID,
          sessionDescription: answer,
        })
      }
    }

    socket.on('session-description', setRemoteMedia)

    return () => {
      socket.off('session-description')
    }
  }, [])

  useEffect(() => {
    socket.on('ice-candidate', ({ peerID, iceCandidate }) => {
      peerConnections.current[peerID]?.addIceCandidate(
        new RTCIceCandidate(iceCandidate),
      )
    })

    return () => {
      socket.off('ice-candidate')
    }
  }, [])

  useEffect(() => {
    const handleRemovePeer = ({ peerID }: any) => {
      if (peerConnections.current[peerID]) {
        peerConnections.current[peerID].close()
      }

      delete peerConnections.current[peerID]
      delete peerMediaElements.current[peerID]

      updateClients((list: any) => list.filter((c: any) => c !== peerID))
    }

    socket.on('remove-peer', handleRemovePeer)

    return () => {
      socket.off('remove-peer')
    }
  }, [])

  useEffect(() => {
    const startCapture = async () => {
      localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      })

      addNewClient(LOCAL_VIDEO, () => {
        const localVideoElement = peerMediaElements.current[LOCAL_VIDEO]

        if (localVideoElement) {
          // @ts-ignore: Unreachable code error
          localVideoElement.volume = 0
          // @ts-ignore: Unreachable code error
          localVideoElement.srcObject = localMediaStream.current
        }
      })
    }

    startCapture().then(() => {
      socket.emit('join', { room: roomId })
    })

    return () => {
      localMediaStream.current.getTracks().forEach((track: any) => {
        track.stop()
      })

      socket.emit('leave')
    }
  }, [roomId])

  const provideMediaRef = useCallback((id: any, node: any) => {
    // @ts-ignore: Unreachable code error
    peerMediaElements.current[id] = node
  }, [])

  return { clients, provideMediaRef }
}
