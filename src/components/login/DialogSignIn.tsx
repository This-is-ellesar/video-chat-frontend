import react, { FC } from 'react'
import InputMask from 'react-input-mask'
//store
import { useDispatch } from 'react-redux'
import { getUsers } from '../../store/auth'
//ui 
import { Button } from '@material-ui/core'
import { SignIn, InputWrapper } from '../../assets/style/login/DialogSignIn'


const DialogSignIn: FC = () => {
    const dispatch = useDispatch()

    function signIn(){
        dispatch(getUsers('dahduawhdluwa'))
    }

    return (
        <SignIn>
            <InputWrapper>
                <h4>Чтобы продолжить, введите номер телефона:</h4>
                <InputMask
                mask="+7-(999)-999-99-99"
                placeholder="+7-(999)-999-99-99"
                disabled={false}
                />
                <Button onClick={() => signIn()}>Продложить</Button>
            </InputWrapper>
        </SignIn>
    )
}


export default DialogSignIn