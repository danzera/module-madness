var http = require('http');
var heading = require('module-three.js').heading;
var accountBalance = require('module-three.js').accountBalance;

http.createServer(function(request, response) {
  //var result;
  //result = heading + accountBalance;
  // someNumber = kitty(7, 4);
  // console.log('APP MODULE: ' + someNumber);
  // // respond with a status code, e.g. 404 Error (page not found)
  response.writeHead(200);
  response.write();
  // we're done
  response.end(heading + accountBalance);
  // method chain after createServer() to listen() on a port
}).listen(3000);

console.log('Listening!');
