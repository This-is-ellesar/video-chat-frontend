import { FC, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { $axios } from '../../http/axios-config'
//store
import { setUserInfo } from '../../store/auth'
//ui
import { Button, TextField } from '@material-ui/core'
import {
  SignIn,
  InputWrapper,
  InputWrapperHeadline,
  InputWrapperItem,
} from './style'

const DialogSignIn: FC<any> = (props) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const signIn = async (name: string, password: string) => {
    try {
      const { data } = await $axios.post('/auth/login/', {
        name,
        password,
      })

      localStorage.setItem('token', data.token)
      localStorage.setItem('user_id', data.user._id)

      props.setUserInfo(data)

      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SignIn>
      <InputWrapper>
        <InputWrapperHeadline>Login Form</InputWrapperHeadline>

        <form noValidate autoComplete="off">
          <InputWrapperItem>
            <TextField
              label="Name"
              variant="outlined"
              margin="dense"
              onChange={(event) => setName(event.target.value)}
            />
          </InputWrapperItem>

          <InputWrapperItem>
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              margin="dense"
              onChange={(event) => setPassword(event.target.value)}
            />
          </InputWrapperItem>
          <InputWrapperItem>
            <Button
              onClick={() => signIn(name, password)}
              color="primary"
              variant="contained"
            >
              Continue
            </Button>
          </InputWrapperItem>
        </form>
      </InputWrapper>
    </SignIn>
  )
}

const mapDispatchProps = {
  setUserInfo,
}

export default connect(null, mapDispatchProps)(DialogSignIn)
