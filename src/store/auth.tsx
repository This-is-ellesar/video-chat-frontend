import { IAuthState } from '../types/store/auth';

const GET_TOKEN = 'GET_TOKEN';
const SET_USER = 'SET_USER';

const defaultState: IAuthState = {
  user: {
    _id: '',
    name: '',
    surname: '',
    nickname: '',
    roles: [],
  },
  token: '',
  isAuthtentificated: false,
  isFetching: false,
};

export const authReducer = (state: IAuthState = defaultState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthtentificated: true,
      };
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
export const setUser = (data: IAuthState) => ({
  type: SET_USER,
  payload: data,
});

export const getUsers = (token: string) => ({
  type: GET_TOKEN,
  payload: token,
});
