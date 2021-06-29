import { IAuthState, IUser } from '../types/store/auth'

const SET_USER_INFO = 'SET_USER_INFO'
const SET_USER = 'SET_USER'
const SET_USERS = 'SET_USERS'

const defaultState: IAuthState = {
  user: {
    _id: '',
    name: '',
    surname: '',
    nickname: '',
    roles: [],
  },
  users: [],
  token: '',
  isAuthtentificated: !!localStorage.getItem('token') || false,
  isFetching: false,
}

export const authReducer = (state: IAuthState = defaultState, action: any) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case SET_USER_INFO:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthtentificated: true,
      }
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state
  }
}

export const setUser = (data: IUser) => ({
  type: SET_USER,
  payload: data,
})

export const setUserInfo = (data: IAuthState) => ({
  type: SET_USER_INFO,
  payload: data,
})

export const setUsers = (data: IAuthState) => ({
  type: SET_USERS,
  payload: data,
})
