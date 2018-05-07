import React, { Component } from 'react';

import { UserController } from '../../aws';

import { FormInput } from '../presentational';



export class SignInPage extends Component {
	constructor() {
		super();

		this.state = {
			email: { value: "", error: "", valid: false },
			password: { value: "", error: "", valid: false },

		}

		this.signIn = this.signIn.bind(this);

		this.updateEmail = this.updateEmail.bind(this);
		this.updatePassword= this.updatePassword.bind(this);
	}

	signIn() {
		UserController.signIn(this.state.email.value, this.state.password.value);
	}

	updateEmail(event) {
		const value = event.target.value;
		const valid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
		const error = valid ? "" : "Please enter a valid email";

		this.setState({
			email: { value, valid, error },
		})
	}

	updatePassword(event) {
		const value = event.target.value;
		const valid = value != "";

		this.setState({
			password: { value, valid, error:"" },
		})
	}

	render() {
		return (
			<div className="SignInPage">
				<FormInput type="email" placeholder="Email" 
					value={this.state.email.value}
					error={this.state.email.error}
					changeFn={this.updateEmail}/>
				<FormInput type="password" placeholder="Password" 
					value={this.state.password.value}
					error={this.state.password.error}
					changeFn={this.password}/>
				<button disabled={this.state.email.valid && this.state.password.valid} onClick={this.signIn}>Sign In</button>
			</div>
		)
	}
}






