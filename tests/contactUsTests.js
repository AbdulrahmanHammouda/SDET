module.exports = {
  'Contact Us Form Submission': function (browser) {
    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');

    // Use JavaScript to set the value of the dropdown
    browser.execute(function () {
      document.querySelector('select[name="id_contact"]').value = '1'; // Assuming "2" is the value of the desired option
    });

    // Continue with other form fields
    browser.setValue('input[name="from"]', 'john.doe@example.com');
    browser.setValue('textarea[name="message"]', 'This is a test message.');

    // Use a more specific selector for the submit button
    browser.click('button[name="submitMessage"]');

    // Wait for the success message to be visible
    browser.waitForElementVisible('.alert-success', 10000, 'Success message not visible.');

    // Assert the success message
    browser.assert.containsText('.alert-success', 'Your message has been successfully sent to our team.');
    browser.end();
  },
  'Contact Us Form Submission - Missing Email': function (browser) {
    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');

    // Set dropdown value
    browser.execute(function () {
      document.querySelector('select[name="id_contact"]').value = '1';
    });

    // Omit email field
    browser.setValue('textarea[name="message"]', 'This is a test message.');
    browser.click('button[name="submitMessage"]');

    // Assert error message for missing email
    browser.assert.containsText('.alert-danger', 'Invalid email address.');
    browser.end();
  },
  'Contact Us Form Submission - Missing Message': function (browser) {
    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');

    // Set dropdown value
    browser.execute(function () {
      document.querySelector('select[name="id_contact"]').value = '1';
    });

    // Fill out other form fields
    browser.setValue('input[name="from"]', 'john.doe@example.com');
    // Omit message field
    browser.click('button[name="submitMessage"]');

    // Assert error message for missing message
    browser.assert.containsText('.alert-danger', 'The message cannot be blank.');
    browser.end();
  },
  'Contact Us Form Submission - Invalid Email Format': function (browser) {
    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');

    // Set dropdown value
    browser.execute(function () {
      document.querySelector('select[name="id_contact"]').value = '1';
    });

    // Fill out other form fields with an invalid email format
    browser.setValue('input[name="from"]', 'invalid-email-format');
    browser.setValue('textarea[name="message"]', 'This is a test message.');
    browser.click('button[name="submitMessage"]');

    // Assert error message for invalid email format
    browser.assert.containsText('.alert-danger', 'Invalid email address.');
    browser.end();
  },
  'Contact Us Form Submission - Dropdown Option Not Selected': function (browser) {
    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');

    // Omit setting the dropdown value
    browser.setValue('input[name="from"]', 'john.doe@example.com');
    browser.setValue('textarea[name="message"]', 'This is a test message.');

    // Attempt to submit without selecting the dropdown
    browser.click('button[name="submitMessage"]');

    // Assert error message for missing dropdown selection
    browser.assert.containsText('.alert-danger', 'Please select a subject from the list provided.');
    browser.end();
  },
  'Contact Us Form Submission - File Upload': function (browser) {
    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');

    // Set dropdown value
    browser.execute(function () {
      document.querySelector('select[name="id_contact"]').value = '1';
    });

    // Fill out other form fields
    browser.setValue('input[name="from"]', 'john.doe@example.com');
    browser.setValue('textarea[name="message"]', 'This is a test message.');

    // Upload a file
    const filePath = require('path').resolve(__dirname, 'test.txt');
    browser.setValue('input[type="file"]', filePath);

    // Use a more specific selector for the submit button
    browser.click('button[name="submitMessage"]');

    // Wait for the success message to be visible
    browser.waitForElementVisible('.alert-success', 10000, 'Success message not visible.');

    // Assert the success message
    browser.assert.containsText('.alert-success', 'Your message has been successfully sent to our team.');
    browser.end();
  },

};
