const fs = require('fs');
const path = require('path');

var searchModule = (function() {

  var dictionaryImport = function() {

    var filePath = path.join(__dirname, 'dict.txt');
    var data = fs.readFileSync(filePath);
    return data.toString().toLowerCase().split('\n');
  }

  var search = function(userInput, dict){
    var searchResults = [];
    var resultCounter = 0;
    for(var i = 0; i<dict.length; i++){
      if(dict[i].startsWith(userInput)){
        searchResults.push(dict[i]);
        resultCounter ++;
        if(resultCounter === 5){
          break;
        }
      }
    }
    return searchResults;
  };

  return {
    dictionaryImport: dictionaryImport,
    search: search
  };

})();


module.exports = searchModule;
