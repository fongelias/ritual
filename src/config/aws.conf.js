
//Config
const cognitoDomain = 'ritual-app.auth.us-east-1.amazoncognito.com';
const cognitoRegion = 'us-east-1';
const cognitoId = {
	webClient: '63ublealr0r5485ihm1gbtmm3e',
	identityPool: 'us-east-1:81ae047a-40ff-4dd4-9cc6-22e85eb53a9e',
	userPool: 'us-east-1_wFoDDbMJF',
};
const responseType = 'token';
const domainName = 'ritualmap.com'
const callbackUrl = 'https://' + domainName + '/';

//Exported
export const aws = {
	cognito: {
		signIn: {
			url: 'https://' + cognitoDomain + '/login?response_type=' + responseType + '&client_id=' + cognitoId.webClient + '&redirect_uri=' + callbackUrl,
		},
		signUp: {
			url: 'https://' + cognitoDomain + '/signup?response_type=' + responseType + '&client_id=' + cognitoId.webClient + '&redirect_uri=' + callbackUrl,
		},
		signOut: {}
	},
	amplify: {
		Auth: {
			identityPoolId: cognitoId.identityPool,
			region: cognitoRegion,
			userPoolId: cognitoId.userPool,
			userPoolWebClientId: cognitoId.webClient,
			mandatorySignIn: false,
			cookieStorage: {
				domain: '.' + domainName,
				expires: 1, //Days
				secure: true
			}
		},
		API: {
			endpoints: [
				{
					name: "retrieveUser",
					endpoint: "https://3ku3hkpf7j.execute-api.us-east-1.amazonaws.com/prod/retrieveuser",
				}
			]
		}
	},
	routes: {
		retrieveUser: "https://3ku3hkpf7j.execute-api.us-east-1.amazonaws.com/prod/retrieveuser",
	},
}






