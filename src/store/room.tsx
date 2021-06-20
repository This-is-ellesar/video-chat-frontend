import { IBaseState, IRoom } from '../types/store/room'

const CREATE_ROOMS = 'CREATE_ROOMS'
const SET_ROOMS = 'SET_ROOMS'

const defaultState: IBaseState = {
  rooms: [],
}

export const roomReducer = (state: IBaseState = defaultState, action: any) => {
  switch (action.type) {
    case CREATE_ROOMS:
      return {
        ...state,
        snackbar: action.payload,
      }
    case SET_ROOMS:
      return {
        ...state,
        rooms: action.payload,
      }
    default:
      return state
  }
}

export const setRooms = (rooms: IRoom[]) => ({
  type: SET_ROOMS,
  payload: rooms,
})

export const createRooms = (room: IRoom) => ({
  type: CREATE_ROOMS,
  payload: room,
})
