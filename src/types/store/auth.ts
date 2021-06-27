export interface IAuthState {
  user: IUser | null
  users: IUser[] | null
  token: string | null
  isAuthtentificated: boolean
  isFetching: boolean | null
}

export interface IUser {
  _id: string
  name: string
  surname: string
  roles: string[]
  nickname: string
}
