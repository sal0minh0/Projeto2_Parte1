document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const results = [];
    
    if (searchTerm) {
      document.querySelectorAll('[data-nome]').forEach((element) => {
        if (element.getAttribute('data-nome').toLowerCase().startsWith(searchTerm)) {
          results.push(element.getAttribute('data-nome'));
        }
      });
      
      if (results.length > 0) {
        displayResults(results);
      } else {
        hideResults();
      }
    } else {
      hideResults();
    }
  });
  
  function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    
    results.forEach((result) => {
      const resultItem = document.createElement('div');
      resultItem.className = 'result-item';
      resultItem.textContent = result;
      resultsContainer.appendChild(resultItem);
    });
    
    const popup = document.getElementById('search-popup');
    popup.style.display = 'block';
    popup.style.top = document.getElementById('search-input').offsetTop + document.getElementById('search-input').offsetHeight + 'px';
    popup.style.left = document.getElementById('search-input').offsetLeft + 'px';
  }
  
  function hideResults() {
    document.getElementById('search-popup').style.display = 'none';
  }