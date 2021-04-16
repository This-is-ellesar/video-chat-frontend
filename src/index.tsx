import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'

const AppContainer = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <>
    <AppContainer />
    <App />
  </>,
  document.getElementById('root')

);

reportWebVitals();
