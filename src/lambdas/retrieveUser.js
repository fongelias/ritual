'use strict';

const AWS = require('aws-sdk');

const config = {
	USERTABLE: {
		NAME: 'ritual-app-users',
		PRIMARY_KEY: 'cognitoIdentityId',
	}
}

exports.handler = (event, context, callback) => {
    console.log(event);
    console.log(event.requestContext.identity.cognitoIdentityId)
    //Change to make sure travis deploy is being tested properly
    const headers = {
    	"Access-Control-Allow-Origin" : "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials" : true, // Required for cookies, authorization headers with HTTPS 
    }

    retrieveUser(event.requestContext.identity.cognitoIdentityId).then((data) => {
    	callback(null, {
    		headers,
    		body: JSON.stringify(data),
    	})
    }).catch((err) => {
    	console.log(err);
    })
};



function retrieveUser(id) {
	return findUserById(id).then(user => user).catch(err => addUser(id));
}



/*--DynamoDB functions--*/
function findUserById(id) {
	console.log("Querying " + config.USERTABLE.NAME + " for user with " + config.USERTABLE.PRIMARY_KEY + " " + id);
	const docClient = new AWS.DynamoDB.DocumentClient();
	const params = {
		TableName: config.USERTABLE.NAME,
		KeyConditionExpression: config.USERTABLE.PRIMARY_KEY + " = :cognitoId",
		ExpressionAttributeValues: {
			":cognitoId": id,
		}
	}

	return new Promise((resolve, reject) => {
		docClient.query(params, (err, data) => {
			if(err) {
				const errMessage = "Query to " + config.USERTABLE.NAME + " from findUserById() has failed.";
				console.error(errMessage + " Error JSON:" + JSON.stringify(err));
				reject(errMessage);
			} else {
				if(data.Items != null && data.Items.length > 0) {
					resolve(data.Items[0]);
				} else {
					const errMessage = "User " + id + " not found in " + config.USERTABLE.NAME;
					console.error(errMessage + " Error JSON:" + JSON.stringify(err));
					reject(errMessage);
				}
			}
		})
	})
}

function addUser(id) {
	console.log("Adding new user to " + config.USERTABLE.NAME);

	const docClient = new AWS.DynamoDB.DocumentClient();
	const params = {
		TableName: config.USERTABLE.NAME,
		Item: {
			'cognitoIdentityId': id,
		}
	}

	return new Promise((resolve, reject) => {
		docClient.put(params, (err, data) => {
			if(err) {
				const errMessage = "Unable to add user";
				console.error(errMessage + " Error JSON:" + JSON.stringify(err));
				reject(errMessage);
			} else {
				console.log("Added user:", JSON.stringify(params.Item));
				resolve(params.Item);
			}
		})
	})
}








