var eventListenerModule = (function(){

var sBox = document.querySelector('#sBox');

function searchBox(callback){
  sBox.addEventListener('keyup',function(event){
    callback('POST','/makeRequest',renderModule.renderSearch, sBox);
    })
}

return {
  searchBox:searchBox,
}

}());
