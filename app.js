var http = require('http');
var master = require('./modules/module-three.js');

http.createServer(function(request, response) {
  response.writeHead(200);

  response.write(master.heading() + master.calcUSD());
  // we're done
  response.end();
  // method chain after createServer() to listen() on a port
}).listen(3000);

console.log('Listening!');
