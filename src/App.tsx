import react, { useState } from 'react';
import { Route } from 'react-router-dom'
//views
import Rooms from './views/Rooms/Rooms'
import Auth from './views/Auth/SignIn'
//components
import Header from './components/base/AppHeader'
import Dialog from './components/base/AppDialog'

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Route path="/" exact component={Rooms} />
        <Route path="/sign" component={Auth} render={Auth} />
      </main>


      <Dialog open={false} />
    </>
  )
}

export default App;