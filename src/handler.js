const fs = require('fs');
const path = require('path');
const searchModule = require('./search.js');

var handler = function(request, response){
  var url = request.url;
  var dict = searchModule.dictionaryImport();

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
  else if(url === '/makeRequest'){
    var allData = '';
    request.on('data', function(query) {
      allData += query;
    })
    request.on('end', function() {
      allData = allData.toLowerCase();
      var results = searchModule.search(allData, dict);
      var JSONResults = JSON.stringify(results);
      response.writeHead(200,{"content-type":"text/javascript"});
      response.end(JSONResults);
    })
  }
}

module.exports = handler;
