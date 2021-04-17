import react from 'react'
import { SignIn, Input, Button } from '../../assets/style/login/DialogSignIn'


const DialogSignIn = () => {
    return (
        <SignIn>
            <Input type="text" placeholder="Логин" />
            <Input type="password" placeholder="Пароль" />
            <Button>Войти</Button>
        </SignIn>
    )
}


export default DialogSignIn