import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import { LandingPage, SignInPage } from '../containers';
//import { url } from '../../../../utils';



export const App = () => (
  <Router>
    <Switch>
	  <Route exact path="/" component={LandingPage}/>

	  <Route path="/*" component={LandingPage}/>
    </Switch>
  </Router>
)
