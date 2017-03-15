var eventListeners = {}

eventListeners.searchBox = function(callback){
    var sBox = document.querySelector('#sBox');
    sBox.addEventListener('keyup',function(event){
            callback();
        })
}

eventListeners.logKey = function(){
  console.log(document.querySelector('#sBox').value)
};

eventListeners.makeRequest = function(){
  requestModule.makeRequest('POST','/makeRequest',console.log)
}


eventListeners.searchBox(eventListeners.makeRequest);
