import { IUser } from './auth'

export interface IBaseState {
  rooms: IRoom[]
}

export interface IRoom {
  _id: string
  name: string
  avatar: string
  users: IUser[]
}
