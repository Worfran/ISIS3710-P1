import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Ban from './components/Funtionalities/Banner';
import Foot from './components/Funtionalities/Footer';
import LoginForm from './components/login/login';
import "bootstrap/dist/css/bootstrap.min.css";
import Robotlist from './components/Robotslist/Robotlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    < Ban />
    < LoginForm />
    < Foot />
  </div>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
