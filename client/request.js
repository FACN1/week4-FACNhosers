var requestModule = (function(){
  function makeRequest(method, url, callback, input){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200){
        var response = JSON.parse(xhr.responseText);
        callback(response);
      }
    }
    xhr.open(method, url);
    xhr.send(input.value);
  }

  return {
    makeRequest:makeRequest
  }
}());
