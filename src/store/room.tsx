import { IBaseState, IRoom } from '../types/store/room';

const CREATE_ROOMS = 'CREATE_ROOMS';

const defaultState: IBaseState = {
  rooms: [],
};

export const baseReducer = (state: IBaseState = defaultState, action: any) => {
  switch (action.type) {
    case CREATE_ROOMS:
      return {
        ...state,
        snackbar: action.payload,
      };
    default:
      return state;
  }
};

export const createRooms = (room: IRoom) => ({
  type: CREATE_ROOMS,
  payload: room,
});
