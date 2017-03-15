var requestModule = (function(){
  function makeRequest(method, url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 2000){
        var response = JSON.parse(xhr.responseText));
        callback(response);
      }
    }
    xhr.open(method, url);
    xhr.send();
  }

  return {
    makeRequest:makeRequest
  }
}();
