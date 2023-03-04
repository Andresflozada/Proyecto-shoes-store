// react 17.0.2

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignInSide from './components/SignInSide';

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <SignInSide/>
  </React.StrictMode>,
  document.getElementById('root')
);