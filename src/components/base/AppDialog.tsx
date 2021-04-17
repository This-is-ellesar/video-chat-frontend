import react from 'react'

import { Dialog, DialogContainer, Overlay, Title, Content } from '../../assets/style/Dialog'
import dialogClose from '../../assets/icons/dialog-close.svg'
 

const AppDialog = (props: any) => {
    return (
        <Dialog {...props}>
            <Overlay onClick={props.onToggle} />
            <DialogContainer>
                <Title>
                    <h1>{ props.dialogTitle }</h1>
                    <img src={dialogClose} alt="Крестик" onClick={props.onToggle} />
                </Title>
                <Content>
                    {props.dialogContent}
                </Content>
            </DialogContainer>
        </Dialog>
    )
}

export default AppDialog 