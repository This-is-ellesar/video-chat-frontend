import react from 'react'
//ui
import { Button, TextField } from '@material-ui/core/';
import { SignIn, InputWrapper } from '../../assets/style/login/DialogSignIn'


const DialogSignIn = () => {
    return (
        <SignIn>
            <InputWrapper>
                <TextField
                type="email"
                label="Логин"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                />
            </InputWrapper>
            <InputWrapper>
                <TextField
                type="password"
                label="Пароль"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                />
            </InputWrapper>
            <InputWrapper>
                <Button>Войти</Button>
            </InputWrapper>
        </SignIn>
    )
}


export default DialogSignIn