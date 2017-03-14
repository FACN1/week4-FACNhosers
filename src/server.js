const http = require('http');
const handler = require('./handler.js');

const server = http.createServer(handler);

module.exports = server;
