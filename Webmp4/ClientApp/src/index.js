import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();
