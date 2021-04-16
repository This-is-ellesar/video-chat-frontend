import react from 'react'
import styled from 'styled-components'


const Dialog = styled.div `
    position: absolute;
    top: 0; left: 0;
    display: ${ ({ block } : any) => block ? 'block' : 'none'};
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
`

const DialogContainer = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 400px;    
    background-color: #fff;
    border-radius: 4px;
    z-index: 999;
`


const AppDialog = (props: any) => {
    return (
        <Dialog {...props}>
            <DialogContainer>
            </DialogContainer>
        </Dialog>
    )
}

export default AppDialog 