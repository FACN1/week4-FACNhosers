const fs = require('fs');

fs.readFile('./dict.txt', function(err, data){
  if (err){
    console.log(err);
    return;
  }
  else{
    var dict = (data.toString()).toLowerCase().split("\n");
    console.log(dict);
  }
})

function search(userInput){
  var searchResults = [];
  var resultCounter =0;
  for(var i=0;i<dict.length;i++){
    if(dict[i].startsWith(userInput)){
      searchResults.push(dict[i]);
      resultCounter ++;
      if(resultCounter === 5){
        break;
      }
    }
  }
  return searchResults;
}
