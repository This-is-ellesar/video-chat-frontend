import React from 'react'

export interface IAppProps {}
export interface IAppState {}

export interface IDialog {
    width?: string
    open: boolean | false
    dialogContent?: React.ReactChild | React.ReactNode
}

export interface IHeader{
}