import react from 'react'

import { Dialog, DialogContent, DialogTitle } from '@material-ui/core/';
import {DialogContainer, Content } from '../../assets/style/Dialog'

import dialogClose from '../../assets/icons/dialog-close.svg'
 

const AppDialog = (props: any) => {
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