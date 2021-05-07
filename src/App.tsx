import react from 'react';
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

const App = () => {
  return (
    <>
      <Header />

      <MainWrapper>
        <Route path="/" exact component={Rooms} />
        <Route path="/sign" component={Auth} />
        <Route component={NotFoundPage} />
      </MainWrapper>
     
      <Dialog open={false} />
      <SnackBar />
    </>
  )
}

export default App;