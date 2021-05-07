import react, { FC } from 'react'

import { Dialog, DialogContent, DialogTitle } from '@material-ui/core/';
import { DialogContainer, Content } from './Dialog'

import { IDialog } from '../../types/base/AppDialog'

const AppDialog: FC<IDialog> = (props) => {
    return (
        <Dialog
        open={props.open}
        onClose={props.onToggle}
        >
            <DialogTitle id="alert-dialog-title">Вход</DialogTitle>
            <DialogContent>
                <DialogContainer>
                    <Content>
                        {props.dialogContent}
                    </Content>
                </DialogContainer>
            </DialogContent>
        </Dialog>
    )
}

export default AppDialog 