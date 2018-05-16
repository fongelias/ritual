import React, { Component } from 'react';
//import { Link, NavLink } from 'react-router-dom';

import { PATHNAME } from './PATHNAME'; 
//svgs


export class DashboardPage extends Component {
	static pathName() {
		return PATHNAME.DASHBOARD_PAGE;
	}

	render() {
		return (
			<div className="dashboardPage">
				<h1>WELCOME FRIEND</h1>
			</div>
		)
	}
}






