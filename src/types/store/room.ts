import { IUser } from './auth'

export interface IBaseState {
  rooms: IRoom[]
}

export interface IRoom {
  name: string
  avatar: string
  users: IUser
}
