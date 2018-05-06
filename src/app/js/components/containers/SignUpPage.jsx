import React, { Component } from 'react';

import { UserController } from '../../aws';

import { FlightCheck } from '../presentational';



export class SignUpPage extends Component {
	constructor() {
		super();

		this.signUp = this.signUp.bind(this);
	}

	signUp() {
		console.log(this.refs.email.value);
		console.log(this.refs.password.value);
		console.log(this.refs.name.value);
		UserController.signUp(this.refs.email.value, this.refs.password.value, this.refs.name.value);
	}

	render() {
		return (
			<div className="SignUpPage">
				<input ref="name" type="text" placeholder="First Name"/>
				<input ref="email" type="email" placeholder="Email"/>
				<input ref="password" type="password" placeholder="Password"/>
				<button onClick={this.signUp}>Sign Up</button>
				<FlightCheck steps={{1:true}}></FlightCheck>
			</div>
		)
	}
}






