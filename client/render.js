var renderModule = (function() {
  function renderSearch(results) {
    var resultsLists = document.getElementById('results-list');
    resultsLists.textContent = "";
    results.forEach(function(element) {
      var listNode = document.createElement('li');
      listNode.textContent = element;
      resultsLists.appendChild(listNode);

    })
  }
  return {
    renderSearch:renderSearch
  }
}());
