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
import { setRooms } from './store/room'
//components
import Header from './components/base/AppHeader'
import Footer from './components/base/AppFooter'
import Dialog from './components/base/AppDialog'
import SnackBar from './components/base/AppSnackBar'
import NotFoundPage from './views/Errors/NotFound'
//ui
import CircularProgress from '@material-ui/core/CircularProgress'
import { MainWrapper, PropgressContainer } from './components/base/style'
//types
import { IAppProps, IAppState } from './components/base/App-types'

class App extends Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      loading: false,
    }
  }

  async componentWillMount() {
    try {
      this.setState({ loading: true })

      const { data: rooms } = await $axios.get('/room/rooms/')

      this.props.setRooms(rooms)

      if (localStorage.getItem('token')) {
        const { data: user } = await $axios.get(
          `/auth/users/${localStorage.getItem('user_id')}/`,
        )

        this.props.setUser(user)
      }
    } catch (e) {
      console.log(e)
    } finally {
      this.setState({ loading: false })
    }
  }
  render() {
    return (
      <div>
        {this.state.loading ? (
          <PropgressContainer>
            <CircularProgress size="80px" />
          </PropgressContainer>
        ) : (
          <div>
            <Header />

            <MainWrapper>
              <Switch>
                <Route path="/auth" component={Auth} />
                <Route path="/:id/" component={CurrentRoom} />
                <Route path="/" exact component={Rooms} />
                <Route path="*" component={NotFoundPage} />
              </Switch>
            </MainWrapper>

            <Footer />

            <Dialog open={false} />
            <SnackBar />
          </div>
        )}
      </div>
    )
  }
}

const mapDispatchProps = {
  setUser,
  setRooms,
}

export default connect(null, mapDispatchProps)(App)
