import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { $axios } from './http/axios-config'
//views
import Rooms from './views/Rooms/Rooms'
import CurrentRoom from './views/CurrentRoom/CurrentRoom'
import Auth from './views/Auth/SignIn'
//store
import { setUser } from './store/auth'
//components
import Header from './components/base/AppHeader'
import Footer from './components/base/AppFooter'
import Dialog from './components/base/AppDialog'
import SnackBar from './components/base/AppSnackBar'
import NotFoundPage from './views/Errors/NotFound'
//ui
import { MainWrapper } from './components/base/style'
//types
import { IAppProps, IAppState } from './components/base/App-types'

class App extends Component<IAppProps, IAppState> {
  async componentWillMount() {
    try {
      const { data } = await $axios.get(
        `/auth/users/${localStorage.getItem('user_id')}/`,
      )

      this.props.setUser(data)
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (
      <>
        <Header />

        <MainWrapper>
          <Switch>
            <Route path="/" exact component={Rooms} />
            <Route path="/:id" component={CurrentRoom} />
            <Route path="/auth" component={Auth} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </MainWrapper>

        <Footer />

        <Dialog open={false} />
        <SnackBar />
      </>
    )
  }
}

const mapDispatchProps = {
  setUser,
}

export default connect(null, mapDispatchProps)(App)
