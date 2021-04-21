import react, { useState } from 'react';
import { Route } from 'react-router-dom'
//routes
import { routes } from './router/router'
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
        {routes.map(({path, component} : any, index) => {
          return <Route path={path} component={component} key={index} />
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