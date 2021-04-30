import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './app/App';

import store from './store/store';

import 'fontsource-roboto';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


