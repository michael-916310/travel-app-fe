import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {init} from './utils';

import CssBaseline from '@material-ui/core/CssBaseline';

import MainPage from './../components/mainPage/mainPage.component';
import CountryPage from '../components/countryPage/countryPage.component';

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
