import React from 'react';

import {init} from './utils';

import CssBaseline from '@material-ui/core/CssBaseline';
import MainPage from './../components/mainPage/mainPage.component';

function App() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <MainPage/>
    </React.Fragment>

  );
}

init();

export default App;
