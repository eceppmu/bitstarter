var express = require('express');
var fs = requere('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  console.log(fs.readFileSync('index.html'));
  response.send(fs.readFileSync('index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
