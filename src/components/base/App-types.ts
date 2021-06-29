import React from 'react'
import { IUser } from '../../types/store/auth'

export interface IAppProps {
  setUser: (arg0: IUser) => void
  setRooms: (arg0: any) => void
}
export interface IAppState {
  loading: boolean
}

export interface IDialog {
  width?: string
  open: boolean | false
  dialogContent?: React.ReactChild | React.ReactNode
}

export interface IHeader {}
