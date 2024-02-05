const HomePage = require('../pageObjects/HomePage');

module.exports = {
  'Homepage Search - Verify All Results are Dresses': function (browser) {
    const homePage = browser.page.HomePage();

    // Step 1: Navigate to the homepage
    homePage.goToHomePage();

    // Step 2: Enter "dress" in the search bar and submit the search
    homePage.searchForItem('dress');

    // Step 3: Wait for the search results to be visible and get the counts
    homePage.waitForSearchResultsVisible()
      .getSearchResultsCounts((dressCount, nonDressCount) => {
        // Assert that there are no non-dress results
        browser.assert.strictEqual(nonDressCount, 0, 'Non-dress results found.');

        // Log the counts
        console.log('Dress Count:', dressCount);
        console.log('Non-Dress Count:', nonDressCount);
      });

    // End the test
    browser.end();
  },
};
