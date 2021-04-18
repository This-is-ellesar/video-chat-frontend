import react, { useState } from 'react';
import { Route } from 'react-router-dom'

import { routes } from './router/router'

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
        {routes.map(({path, component} : any) => {
          <Route path={path} component={component} />
        })}
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