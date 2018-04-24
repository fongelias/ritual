
//Config
const cognitoDomain = 'ritual-app.auth.us-east-1.amazoncognito.com';
const cognitoClientId = {
	web: '2ds2ch7esf0n64ht623f18huvk',
};
const responseType = 'token';
const callbackUrl = 'https://ritualmap.com/';

//Exported
export const aws = {
	cognito: {
		signIn: {
			url: 'https://' + cognitoDomain + '/login?response_type=' + responseType + '&client_id=' + cognitoClientId.web + '&redirect_uri=' + callbackUrl,
		},
		signUp: {
			url: 'https://' + cognitoDomain + '/signup?response_type=' + responseType + '&client_id=' + cognitoClientId.web + '&redirect_uri=' + callbackUrl,
		},
		signOut: {}
	}
}





