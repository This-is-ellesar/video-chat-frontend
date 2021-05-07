import { Component } from 'react'
//components
import DialogSignIn from '../../components/login/DialogSignIn'
//style
import { AuthWrapper } from './style'
//types
import { IProps, IState } from './SignIn-types'

class SignIn extends Component<IProps, IState> {

    render(){
        return (
            <AuthWrapper>
                <DialogSignIn />
            </AuthWrapper>
        )
    }
}

export default SignIn