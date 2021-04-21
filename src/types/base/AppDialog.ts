import React from 'react'

export interface IDialog{
    width?: string
    open: boolean
    dialogContent: React.ReactChild | React.ReactNode
    onToggle: () => void;
}