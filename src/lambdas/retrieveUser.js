exports.handler = async (event, context, callback) => {
    console.log(event);
    console.log(context);
    console.log(event.requestContext.identity.cognitoIdentityId)
    //Change to make sure travis deploy is being tested properly
    callback(null, {
        headers: {
            "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS 
        },
        body: 'Hello from Lambda! retrieveUser'
    });
};