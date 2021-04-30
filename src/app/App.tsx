import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {init} from './utils';


import MainPage from './../components/mainPage/mainPage.component';
import CountryPage from '../components/countryPage/countryPage.component';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route path="/country/:countryId">
          <CountryPage/>
        </Route>
      </Switch>
    </Router>
  );
}

init();

export default App;
