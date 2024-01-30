module.exports = {
  'Homepage Search - Verify All Results are Dresses': function (browser) {
    // Step 1: Navigate to the homepage
    browser.url('http://automationpractice.multiformis.com/');

    // Step 2: Enter "dress" in the search bar and submit the search
    browser.waitForElementPresent('input[name="search_query"]', 10000, 'Search input field not present.');
    browser.setValue('input[name="search_query"]', 'dress');
    browser.click('button[name="submit_search"]');

    // Step 3: Wait for the search results to be visible
    browser.waitForElementVisible('.product-container', 10000, 'Search results not visible.');

    // Get the text content of all elements with class "product-container"
    browser.elements('css selector', '.product-container', function (result) {
      // Counters for dress and non-dress results
      let dressCount = 0;
      let nonDressCount = 0;

      // Iterate through each search result
      console.log(result);
      result.value.forEach(function (element, index) {
        // Get the text content of each search result
        const elementId = element['element-6066-11e4-a52e-4f735466cecf'];
        browser.elementIdText(elementId, function (textResult) {
          if (textResult.value) {
            const searchText = textResult.value.toLowerCase();

            // Log the text content of each search result
            console.log('Search Result Text:', searchText);

            // Check if the search result contains the text 'dress'
            if (searchText.includes('dress')) {
              dressCount++;
            } else {
              nonDressCount++;
            }
          }

          // If this is the last search result, perform the assertions
          if (index === result.value.length - 1) {
            // Assert that there are no non-dress results
            browser.assert.strictEqual(nonDressCount, 0, 'Non-dress results found.');

            // Log the counts
            console.log('Dress Count:', dressCount);
            console.log('Non-Dress Count:', nonDressCount);

            // End the test
            browser.end();
          }
        });
      });
    });
  },
};
