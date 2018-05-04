'use strict';

const AWS = require('aws-sdk');

const config = {
	USERTABLE: {
		NAME: 'ritual-app-users',
		INDEX: 'cognitoIdentityId',
	}
}

exports.handler = async (event, context, callback) => {
    console.log(event);
    console.log(context);
    console.log(event.requestContext.identity.cognitoIdentityId)
    //Change to make sure travis deploy is being tested properly
    const headers = {
    	"Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials" : true, // Required for cookies, authorization headers with HTTPS 
    }

    findUserById(event.requestContext.identity.cognitoIdentityId).then((data) => {
    	callback(null, {
    		headers,
    		body: data,
    	})
    })

    /*callback(null, {
        headers,
        body: 'Hello from Lambda! retrieveUser'
    });*/
};



/*--DynamoDB functions--*/
function findUserById(id) {
	console.log("Querying " + config.USERTABLE.NAME + " for user with " + config.USERTABLE.INDEX + " " + id);
	const docClient = new AWS.DynamoDB.DocumentClient();
	const params = {
		TableName: config.USERTABLE.NAME,
		IndexName: config.USERTABLE.INDEX,
		KeyConditionExpression: config.USERTABLE.INDEX + " = :cognitoId",
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
				console.log(data);
				resolve(data);
			}
		})
	})
}








