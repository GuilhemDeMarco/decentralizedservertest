const http = require('http')
const url = require('url')

const hostname = "127.0.0.1"
const port = 3000

http.createServer(function (req, res){
  var u = url.parse(req.url, true)
  var q = url.parse(req.url, true).query;
  var request = u.pathname

  //request filter
  if(request == "/"){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("OK");
    res.end();
  }
  else{
    res.statusCode = 404;
    res.write("404")
    res.end()
  }
}).listen(port)
