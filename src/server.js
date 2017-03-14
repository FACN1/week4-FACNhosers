const http = require('http');
const handler = require('./handler.js');

const server = http.createServer(handler);

server.listen(4000, console.log('Server is listening on Suha\'s favorite port, 4000'));

module.exports = server;
