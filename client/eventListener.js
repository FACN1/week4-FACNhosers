var eventListenerModule = (function(){

var sBox = document.querySelector('#sBox');

 function searchBox(callback){
  sBox.addEventListener('keyup',function(event){
    callback();
    })
}

function eventListeners(){
  console.log(document.querySelector('#sBox').value)
};

function makeRequest(){
  requestModule.makeRequest('POST','/makeRequest',renderModule.renderSearch, sBox)
}

return {
  searchBox:searchBox,
  eventListeners:eventListeners,
  makeRequest:makeRequest
}

}());
