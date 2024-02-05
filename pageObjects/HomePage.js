module.exports = {
  url: 'http://automationpractice.multiformis.com/',
  elements: {
    searchInput: 'input[name="search_query"]',
    searchButton: 'button[name="submit_search"]',
    productContainer: '.product-container',
  },
  commands: [{
    goToHomePage() {
      return this.navigate();
    },
    searchForItem(item) {
      return this.setValue('@searchInput', item)
                 .click('@searchButton');
    },
    waitForSearchResultsVisible() {
      return this.waitForElementVisible('@productContainer', 10000, 'Search results not visible.');
    },
    getSearchResultsCounts(callback) {
      return this.api.elements('css selector', this.elements.productContainer.selector, function(result) {
        let dressCount = 0;
        let nonDressCount = 0;
        result.value.forEach(function(element, index) {
          const elementId = element['element-6066-11e4-a52e-4f735466cecf'];
          browser.elementIdText(elementId, function(textResult) {
            if (textResult.value) {
              const searchText = textResult.value.toLowerCase();
              if (searchText.includes('dress')) {
                dressCount++;
              } else {
                nonDressCount++;
              }
            }
            if (index === result.value.length - 1) {
              callback(dressCount, nonDressCount);
            }
          });
        });
      });
    },
    
  }],
};
