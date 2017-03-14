const fs = require('fs');
const path = require('path');

var handler = function(request, response){
  var url = request.url;
  console.log('Request coming in for URL: ', url);

  if(url === '/'){
    var filePath = path.join(__dirname, '../index.html');
    fs.readFile(filePath, function (err, file){
      if (err) {
        console.log(err);
        return;
      }
      else {
        response.writeHead(200, {"content-type":"text/html"});
        response.end(file);
      }
    })
  }
  else if(url.indexOf('client') !== -1) {
    var filePath = path.join(__dirname, '..', url);
    var extension = url.split('.')[1];
    var extensionType = {
      "js": 'application/javascript',
      "css": 'text/css'
    }
    fs.readFile(filePath, function (err, file){
      if (err){
        console.log(err);
        return;
      }
      response.writeHead(200, {"content-type":extensionType[extension]});
      response.end(file);
    });
  }
}

module.exports = handler;
