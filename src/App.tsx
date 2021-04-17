import react, { useState } from 'react';

import Header from './components/base/AppHeader'
import Dialog from './components/base/AppDialog'
import DialogSignIn from './components/login/DialogSignIn'


const App = () => {
  const [show, setShow] = useState(false)

  function modalToggle() {
    setShow(!show)
  }

  return (
    <div className="App">
      <Header onToggle={modalToggle} />
      <Dialog 
        toggle={show} 
        onToggle={modalToggle}
        width={"500"}
        dialogTitle={'Вход'}
        dialogContent={<DialogSignIn />}
      />
    </div>
  );
}

export default App;