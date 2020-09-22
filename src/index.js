import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routing/Routes';
import AuthContextProvider from "./contexts/auth-context";
import MenuContextProvider from "./contexts/menu-context";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MenuContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </MenuContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
