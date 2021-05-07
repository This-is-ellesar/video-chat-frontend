import react, { useState } from 'react';
import { Route } from 'react-router-dom'
//components
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
      <Header onToggle={modalToggle} />

      <main>
        
      </main>


      <Dialog 
        open={show} 
        onToggle={modalToggle}
        dialogContent={<DialogSignIn />}
      />
    </>
  )
}

export default App;