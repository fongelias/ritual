import { Auth } from 'aws-amplify';




export const UserController = {
	signIn: (username, password) => {
		return Auth.signIn(username, password);
	},
	signUp: (email, password, given_name) => {
		return Auth.signUp({
			username: email,
			password,
			attributes: {
				email,
				given_name,
			},
		});
	},
	signOut: () => {
		return Auth.signOut();
	},
	currentSession: () => {
		return Auth.currentSession();
	},
}











