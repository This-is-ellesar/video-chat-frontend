import { Component } from 'react'
import { Route } from 'react-router-dom'
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
          <Route path="/" exact component={Rooms} />
          <Route path="/sign" component={Auth} />
          <Route path="*" component={NotFoundPage} />
        </MainWrapper>

        <Dialog open={false} />
        <SnackBar />
      </>
    )
  }
}

export default App
