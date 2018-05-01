import React, { Component } from 'react';

import { UserController } from '../../aws';



export class SignInPage extends Component {
	constructor() {
		super();

		this.signIn = this.signIn.bind(this);
	}

	signIn() {
		console.log(this.refs.email.value);
		console.log(this.refs.password.value);
		UserController.signIn(this.refs.email.value, this.refs.password.value).then(user => console.log(user));
	}

	render() {
		return (
			<div className="SignInPage">
				<input ref="email" type="email" placeholder="Email"/>
				<input ref="password" type="password" placeholder="Password"/>
				<button onClick={this.signIn}>Sign In</button>
			</div>
		)
	}
}






