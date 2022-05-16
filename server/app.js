const http = require("http");

const SimplePeerServer = require("simple-peer-server");

const server = http.createServer();

const simplePeerServer = new SimplePeerServer(server, true);

server.listen(8081);