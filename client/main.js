var eventListeners = {}

eventListeners.searchBox = function(callback){
    var sBox = document.querySelector('#sBox');
    sBox.addEventListener('keyup',function(event){
            callback(sBox);
        })
}

eventListeners.logKey = function(node){
  console.log(node.value)
};

eventListeners.makeRequest = function(node){
  requestModule.makeRequest('POST',/makeRequest,console.log())
}


eventListeners.searchBox(eventListeners.makeRequest);
