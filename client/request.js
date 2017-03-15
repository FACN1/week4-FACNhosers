var requestModule = (function(){
  function makeRequest(method, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200){
        //var response = JSON.parse(xhr.responseText);
        callback('response recieved');
      }
    }
    xhr.open(method, url);
    xhr.send();
  }

  return {
    makeRequest:makeRequest
  }
}());
