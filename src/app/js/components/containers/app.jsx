import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import { LandingPage, SignInPage, SignUpPage } from '../containers';
//import { url } from '../../../../utils';



export const App = () => (
  <Router>
    <Switch>
	  <Route exact path="/" component={LandingPage}/>
	  <Route path="/SignUp" component={SignUpPage}/>
	  <Route path="/SignIn" component={SignInPage}/>
	  <Route path="/*" component={LandingPage}/>
    </Switch>
  </Router>
)
