**Solution(code)**

class SearchSuggestionSystem {
  constructor(products) {
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    let results = [];
    let prefix = '';

    for (let char of searchWord) {
      prefix += char;
      let suggestions = [];

      // Check each product against the current prefix
      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          suggestions.push(product);
        }
        if (suggestions.length === 3) break; // Only up to 3 suggestions
      }

      results.push(suggestions);
    }
`  
    return results;
  }
}

