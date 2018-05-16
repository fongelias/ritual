import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { DashboardPage, SignInPage } from '../containers';


const unconnectedPrivateRoute = ({ path, Component, isAuthorized }) => (
	<Route path={path} render={() => (
		isAuthorized ? <Component/> : <Redirect to={SignInPage.pathName()}/>
	)}/>
)

const mapStateToProps = state => {
  return {
    isAuthorized: state.isAuthorized,
  }
}

export const PrivateRoute = connect(
	mapStateToProps,
	null
)(unconnectedPrivateRoute);



