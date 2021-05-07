import react, { FC } from 'react'
import InputMask from 'react-input-mask'
//store
import { useDispatch } from 'react-redux'
import { getUsers } from '../../store/auth'
//ui 
import { Button } from '@material-ui/core'
import { SignIn, InputWrapper, InputWrapperHeadline ,InputPhoneWrapper } from './style'


const DialogSignIn: FC = () => {
    const dispatch = useDispatch()

    function signIn(){
        dispatch(getUsers('dahduawhdluwa'))
    }

    return (
        <SignIn>
            <InputWrapper>

                <InputWrapperHeadline>To continue, enter your phone number:</InputWrapperHeadline>

                <InputPhoneWrapper>
                    <InputMask
                    mask="+7-(999)-999-99-99"
                    placeholder="+7-(999)-999-99-99"
                    disabled={false}
                    />
                </InputPhoneWrapper>

                <Button onClick={() => signIn()} color="primary" variant="contained">Continue</Button>
                
            </InputWrapper>
        </SignIn>
    )
}


export default DialogSignIn