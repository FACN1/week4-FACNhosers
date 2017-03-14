var eventListeners = {
    searchBox: function(){
        var sBox = document.querySelector('#sBox');
        sBox.addEventListener('keyup',function(event){
                console.log(event.target.value);
            })
    }
}



eventListeners.searchBox();
