import react, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import AppRouter from './AppRouter'

import Header from './components/base/AppHeader'
import Dialog from './components/base/AppDialog'
import DialogSignIn from './components/login/DialogSignIn'


const App = () => {
  const [show, setShow] = useState(false)

  function modalToggle() {
    setShow(!show)
  }

  return (
    <>
      <BrowserRouter>
        <AppRouter />
        <Header onToggle={modalToggle} />
        <Dialog 
          open={show} 
          onToggle={modalToggle}
          dialogContent={<DialogSignIn />}
        />
      </BrowserRouter>
    </>
  )
}

export default App;