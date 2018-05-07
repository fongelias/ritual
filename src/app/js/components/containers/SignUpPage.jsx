import React, { Component } from 'react';

import { UserController, cognito } from '../../aws';
const passwordPolicies = cognito.password.policies;

import { FlightCheck, FormInput } from '../presentational';



export class SignUpPage extends Component {
	constructor() {
		super();

		this.state = {
			policies: passwordPolicies.map(({ name, description, test }) => {
				return {
					name,
					description, 
					completed: false,
				}
			}),
			submitDisabled: true,
			form: {
				name: { value: "", error: "", valid: false },
				email: { value: "", error: "", valid: false },
				password: { value: "", error: "", valid: false },
			},
		}

		this.signUp = this.signUp.bind(this);
		this.updateSubmitDisabled = this.updateSubmitDisabled.bind(this);

		this.updateName = this.updateName.bind(this);
		this.updateEmail = this.updateEmail.bind(this);
		this.updatePassword = this.updatePassword.bind(this);
	}

	signUp() {
		UserController.signUp(this.state.form.email.value, this.state.form.password.value, this.state.form.name.value);
	}

	updateSubmitDisabled() {
		if(this.state.form.name.valid && this.state.form.email.valid && this.state.form.password.valid) {
			this.setState({
				submitDisabled: false,
			})
		}
	}

	updateName(event) {
		const value = event.target.value;
		const valid = value != "";
		const form = Object.assign({}, this.state.form);
		form.name = { value, valid, error:"" };

		this.setState({ form }, () => {
			if(valid) { 
				this.updateSubmitDisabled();
			}
		});
	}

	updateEmail(event) {
		const value = event.target.value;
		const valid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
		const error = valid ? "" : "Please enter a valid email";
		const form = Object.assign({}, this.state.form);
		form.email = { value, valid, error };

		this.setState({ form }, () => {
			if(valid) { 
				this.updateSubmitDisabled();
			}
		});		
	}

	updatePassword(event) {
		const value = event.target.value;
		const policies = passwordPolicies.map(({ name, description, test }) => {
			return {
				name,
				description, 
				completed: test(value),
			}
		});
		const valid = policies.reduce((p,c) => p && c.completed, true);
		const form = Object.assign({}, this.state.form);
		form.password = { value, valid, error:"" };

		this.setState({ policies, form }, () => {
			if(valid) { 
				this.updateSubmitDisabled();
			}
		});		
	}

	render() {
		return (
			<div className="SignUpPage">
				<FormInput type="text" placeholder="First Name" 
					value={this.state.form.name.value}
					error={this.state.form.name.error}
					changeFn={this.updateName}/>
				<FormInput type="email" placeholder="Email" 
					value={this.state.form.email.value}
					error={this.state.form.email.error}
					changeFn={this.updateEmail}/>
				<FormInput type="password" placeholder="Password" 
					value={this.state.form.password.value}
					error={this.state.form.password.error}
					changeFn={this.updatePassword}/>
				<button onClick={this.signUp} disabled={this.state.submitDisabled}>Sign Up</button>
				<FlightCheck steps={this.state.policies}></FlightCheck>
			</div>
		)
	}
}






