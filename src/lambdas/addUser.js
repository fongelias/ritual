import 'babel-polyfill';

exports.handler = async (event, context, callback) => {
    // TODO implement
    console.log(context);
    //Change to make sure travis deploy is being tested properly
    callback(null, {
        body: 'Hello from Lambda!'
    });
};
