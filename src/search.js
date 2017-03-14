const fs = require('fs');

fs.readFile('./dict.txt', function(err, data){
  if (err){
    console.log(err);
    return;
  }
  else{
    var dict = (data.toString()).toLowerCase().split("\n");
    // dict = dict.split("\n")
    console.log(dict);
  }
})

function search(userInput){
  var searchResults = [];
  dict.filter(function(element){
    if(element.startsWith(userInput)){
      searchResults.push(element);
    }
  });
  return searchResults.splice(0,5);
}
