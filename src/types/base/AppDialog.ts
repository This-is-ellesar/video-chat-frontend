import React from 'react'

export interface IDialog{
    width?: string
    open: boolean | false
    dialogContent?: React.ReactChild | React.ReactNode
}