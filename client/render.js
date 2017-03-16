var renderModule = (function() {
  function renderSearch(results) {
    var resultsList = document.getElementById('results-list');
    resultsList.textContent = "";
    results.forEach(function(animalName) {
      var listNode = document.createElement('li');
      listNode.textContent = animalName;
      resultsList.appendChild(listNode);

    })
  }
  return {
    renderSearch:renderSearch
  }
}());
