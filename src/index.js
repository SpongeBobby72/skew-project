import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "store";
import App from "./App";
import * as serviceWorkerRegistration from './tests/serviceWorkerRegistration';


const startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  serviceWorkerRegistration.register();
}
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp()
}