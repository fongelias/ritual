import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

import { DashboardPage, LandingPage, SignInPage, SignUpPage, PrivateRoute } from '../containers';



export const App = () => (
  <Router>
    <Switch>
	  <Route exact path={LandingPage.pathName()} component={LandingPage}/>
	  <Route path={SignInPage.pathName()} component={SignInPage}/>
	  <Route path={SignUpPage.pathName()} component={SignUpPage}/>
	  <PrivateRoute path={DashboardPage.pathName()} component={DashboardPage}/>
	  <Route path="/*" component={LandingPage}/>
    </Switch>
  </Router>
)

