
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
export const amplify = {
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
	},
};


export const cognito = {
	password: {
		policies: [
			{ 
				name: 'length', 
				description: 'Password must be at least 6 characters',
				test: (str) => str.length > 8,
			},
			{
				name: 'numbers',
				description: 'Password must include a number',
				test: (str) => /\d/.test(str),
			},
			{
				name: 'special-characters',
				description: 'Password must include a special character',
				test: (str) => /[\^$*.\[\]{}()?\-"!@#%&/\\,><':;|_~`]/.test(str),
			},
			{
				name: 'uppercase',
				description: 'Password must include uppercase letters',
				test: (str) => /[A-Z]/.test(str),
			},
			{
				name: 'lowercase',
				description: 'Password must include lowercase letters',
				test: (str) => /[a-z]/.test(str),
			}
		],
	},
};






