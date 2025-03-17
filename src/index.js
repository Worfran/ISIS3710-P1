import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import Ban from './components/Funtionalities/Banner';
import Foot from './components/Funtionalities/Footer';
import LoginForm from './components/login/login';
import "bootstrap/dist/css/bootstrap.min.css";
import { IntlProvider } from 'react-intl';
import localemessages from './locales/en.json';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <IntlProvider locale="en" messages={localemessages}>
    <Ban />
    <LoginForm />
    <Foot />
  </IntlProvider>
);