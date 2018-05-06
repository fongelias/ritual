import React, { Component } from 'react';

import { UserController, cognito } from '../../aws';
const policies = cognito.password.policies;

import { FlightCheck } from '../presentational';



export class SignUpPage extends Component {
	constructor() {
		super();

		this.state = {
			policies: policies.map(({ name, description, test }) => {
				return {
					name,
					description, 
					completed: false,
				}
			})
		}

		this.signUp = this.signUp.bind(this);
		this.updateFlightCheck = this.updateFlightCheck.bind(this);
	}

	signUp() {
		console.log(this.refs.email.value);
		console.log(this.refs.password.value);
		console.log(this.refs.name.value);
		UserController.signUp(this.refs.email.value, this.refs.password.value, this.refs.name.value);
	}

	updateFlightCheck(event) {
		this.setState({
			policies: policies.map(({ name, description, test }) => {
				return {
					name,
					description, 
					completed: test(event.target.value),
				}
			})
		})
	}

	render() {
		return (
			<div className="SignUpPage">
				<input ref="name" type="text" placeholder="First Name"/>
				<input ref="email" type="email" placeholder="Email"/>
				<input ref="password" type="password" placeholder="Password" onChange={this.updateFlightCheck}/>
				<button onClick={this.signUp}>Sign Up</button>
				<FlightCheck steps={this.state.policies}></FlightCheck>
			</div>
		)
	}
}






