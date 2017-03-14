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



eventListeners.searchBox(eventListeners.logKey);
