import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const LandingPage = () => (
	<div className="landingPage">
		<nav>
			<span className="left">
				<Link to='/' className="navLink homePage">Ritual Map</Link>
			</span>
			<span className="right">
				<NavLink to='/Features' className="navLink" activeClassName="active">Features</NavLink>
				<NavLink to='/Pricing' className="navLink" activeClassName="active">Pricing</NavLink>
				<NavLink to='/SignIn' className="navLink" activeClassName="active">Sign In</NavLink>
				<Link to='/SignUp' className="navLink signUp" activeClassName="active">Sign Up</Link>
			</span>
		</nav>
		<h1>let's get organized</h1>
		<p>Record, organize and measure daily routines</p>
		<span>
			<Link to='/SignUp' className="">Get Started</Link>
		</span>
	</div>
)