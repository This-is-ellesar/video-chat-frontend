import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppComponent } from './assets/style/AppGlobal'

const app = (
    <>
      <AppComponent />
      <App />
    </>
)


ReactDOM.render(
  app,
  document.getElementById('root')

);

reportWebVitals();
