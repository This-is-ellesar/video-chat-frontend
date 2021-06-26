import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
//views
import Rooms from './views/Rooms/Rooms'
import Auth from './views/Auth/SignIn'
//components
import Header from './components/base/AppHeader'
import Dialog from './components/base/AppDialog'
import SnackBar from './components/base/AppSnackBar'
import NotFoundPage from './views/Errors/NotFound'
//ui
import { MainWrapper } from './components/base/style'
//types
import { IAppProps, IAppState } from './components/base/App-types'

class App extends Component<IAppProps, IAppState> {
  render() {
    return (
      <>
        <Header />

        <MainWrapper>
          <Switch>
            <Route path="/" exact component={Rooms} />
            <Route path="/auth" component={Auth} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </MainWrapper>

        <Dialog open={false} />
        <SnackBar />
      </>
    )
  }
}

export default App
