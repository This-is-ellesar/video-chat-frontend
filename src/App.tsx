import React, { useState } from 'react';
import Header from './components/Header'
import Dialog from './components/base/AppDialog'

const App = () => {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      <Header />
      <Dialog block={show}>Привет ебать</Dialog>
    </div>
  );
}

export default App;