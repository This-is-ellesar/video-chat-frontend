import react from 'react'
//components
import DialogSignIn from '../../components/login/DialogSignIn'
//style
import { AuthWrapper } from './style'

const SignIn = () => {
    return (
        <AuthWrapper>
            <DialogSignIn />
        </AuthWrapper>
    )
}

export default SignIn