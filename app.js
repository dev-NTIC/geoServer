var http = require("http"); // Import Node.js core module

var server = http.createServer(function(req, res) {});

server.listen(5000); //6 - listen for any incoming requests

console.log("Node.js web server at port 5000 is running..");
