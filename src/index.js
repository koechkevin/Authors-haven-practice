import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider as AlertProvider } from 'react-alert';
import createHistory from 'history/createBrowserHistory';
import './index.scss';
import Alert from './components/Alert';
import App from './App';
import * as serviceWorker from './serviceWorker';
import storeConfig from './store/index';

require('dotenv').config();

const history = createHistory();
const options = {
  position: 'top center',
  timeout: 8000,
  offset: '30px',
  transition: 'scale',
  zIndex: 1000,
};

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={Alert} {...options}>
      <Router history={history}>
        <App />
      </Router>
    </AlertProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
