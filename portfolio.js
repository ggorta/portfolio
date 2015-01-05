var http = require ('http');
var fs = require('fs');
var server = http.createServer(function(request, response){

  if (request.url === "/") {
    fs.readFile("index.html", function(err, data){
      response.end(data);
    });
  }
  else {
    var path = request.url.substring(1,request.url.length)
    fs.readFile(path, function(err, data){
      response.end(data);
    });
  }

});
server.listen(8080)
