
const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.resolve(__dirname, '../../dev/public/')));

//Fallback for unknown paths
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, '../../dev/public', 'index.html'));
});

const server = app.listen(port);

console.log("server running at port: " + port);

module.exports = {
	server: server,
};







