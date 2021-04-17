import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import { AppComponent } from './assets/style/AppGlobal'

const app = (
  <BrowserRouter>
    <>
      <AppComponent />
      <App />
    </>,
  </BrowserRouter>
)


ReactDOM.render(
  app,
  document.getElementById('root')

);

reportWebVitals();
