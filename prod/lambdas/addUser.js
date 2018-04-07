exports.handler = async (event, context, callback) => {
    // TODO implement
    console.log(context);
    
    callback(null, {
        body: 'Hello from Lambda!'
    });
};