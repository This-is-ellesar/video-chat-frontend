import { IBaseState, IRoom } from '../types/store/room'

const SET_ROOMS = 'SET_ROOMS'

const defaultState: IBaseState = {
  rooms: [],
}

export const roomReducer = (state: IBaseState = defaultState, action: any) => {
  switch (action.type) {
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
