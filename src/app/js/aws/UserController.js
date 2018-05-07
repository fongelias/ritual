import { Auth, API } from 'aws-amplify';




export class UserController {
	static signIn(username, password, errCallback) {
		return Auth.signIn(username, password).then((awsUser) => {
			API.get("retrieveUser", "/").then(data => console.log(data));
		}).catch((err) => {
			console.log(err);
			errCallback(err.message);
		});
	}

	static signUp(email, password, given_name) {
		return Auth.signUp({
			username: email,
			password,
			attributes: {
				email,
				given_name,
			},
		});
	}

	static signOut() {
		return Auth.signOut();
	}

	static currentSession() {
		return Auth.currentSession();
	}

	static federatedSignIn(username, password) {
		this.signIn(username, password).then((response) => {
			const { accessToken, idToken, refereshToken } = response.signInUserSession
			const user = {
				email: idToken.payload.email,
				name: idToken.payload.given_name,
			}

			Auth.federatedSignIn('amazon', {
				token: user.signInUserSession
			}, user).then((response) => {
				console.log(response);
			})
		})
	}
}











