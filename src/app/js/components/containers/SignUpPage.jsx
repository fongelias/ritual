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
			}),
			submitDisabled: true,
		}

		this.signUp = this.signUp.bind(this);
		this.updateFlightCheck = this.updateFlightCheck.bind(this);
		this.updateSubmitDisabled = this.updateSubmitDisabled.bind(this);
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

		this.updateSubmitDisabled();
	}

	updateSubmitDisabled() {
		if(this.refs.email.value && this.refs.name.value && this.state.policies.reduce((p,c) => p && c.completed, true)) {
			this.setState({
				submitDisabled: false,
			})
		}
	}

	render() {
		return (
			<div className="SignUpPage">
				<input ref="name" type="text" placeholder="First Name" onChange={this.updateSubmitDisabled}/>
				<input ref="email" type="email" placeholder="Email" onChange={this.updateSubmitDisabled}/>
				<input ref="password" type="password" placeholder="Password" onChange={this.updateFlightCheck}/>
				<button onClick={this.signUp} disabled={this.state.submitDisabled}>Sign Up</button>
				<FlightCheck steps={this.state.policies}></FlightCheck>
			</div>
		)
	}
}






