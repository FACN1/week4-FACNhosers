var eventListeners = {}

var sBox = document.querySelector('#sBox');


eventListeners.searchBox = function(callback){
    sBox.addEventListener('keyup',function(event){
            callback();
        })
}

eventListeners.logKey = function(){
  console.log(document.querySelector('#sBox').value)
};

eventListeners.makeRequest = function(){
  requestModule.makeRequest('POST','/makeRequest',renderModule.renderSearch, sBox)
}


eventListeners.searchBox(eventListeners.makeRequest);
