import { FC } from 'react'

import { Dialog, DialogContent, DialogTitle } from '@material-ui/core/'
import { DialogContainer, Content } from './style'

import { IDialog } from './App-types'

const AppDialog: FC<IDialog> = (props) => {
  return (
    <Dialog open={props.open}>
      <DialogTitle id="alert-dialog-title">Вход</DialogTitle>
      <DialogContent>
        <DialogContainer>
          <Content>{props.dialogContent}</Content>
        </DialogContainer>
      </DialogContent>
    </Dialog>
  )
}

export default AppDialog
