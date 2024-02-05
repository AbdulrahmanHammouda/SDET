const ContactUsPage = require('../pageObjects/ContactUsPage');

module.exports = {
  'Contact Us Form Submission': function (browser) {
    const contactUsPage = browser.page.ContactUsPage();

    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
    contactUsPage
      
      .setEmail('john.doe@example.com')
      .selectContactOption('1')
      .setMessage('This is a test message.')
      .submitAndVerify('success');

    browser.end();
  },

  'Contact Us Form Submission - Missing Email': function (browser) {
    const contactUsPage = browser.page.ContactUsPage();

    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
    contactUsPage
      .selectContactOption('1')
      .setMessage('This is a test message.')
      .submitAndVerify('error');

    browser.end();
  },

  'Contact Us Form Submission - Missing Message': function (browser) {
    const contactUsPage = browser.page.ContactUsPage();

    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
    contactUsPage
      .selectContactOption('1')
      .setEmail('john.doe@example.com')
      .submitAndVerify('error');

    browser.end();
  },

  'Contact Us Form Submission - Invalid Email Format': function (browser) {
    const contactUsPage = browser.page.ContactUsPage();

    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
    contactUsPage
      .selectContactOption('1')
      .setEmail('invalid-email-format')
      .setMessage('This is a test message.')
      .submitAndVerify('error');

    browser.end();
  },

  'Contact Us Form Submission - Dropdown Option Not Selected': function (browser) {
    const contactUsPage = browser.page.ContactUsPage();

    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
    contactUsPage
      .setEmail('john.doe@example.com')
      .setMessage('This is a test message.')
      .submitAndVerify('error');

    browser.end();
  },

  'Contact Us Form Submission - File Upload': function (browser) {
    const contactUsPage = browser.page.ContactUsPage();
    const filePath = require('path').resolve(__dirname, 'test.txt');

    browser.url('http://automationpractice.multiformis.com/index.php?controller=contact');
    contactUsPage
      .selectContactOption('1')
      .setEmail('john.doe@example.com')
      .setMessage('This is a test message.')
      .uploadAndSetFile(filePath)
      .submitAndVerify('success');

    browser.end();
  }
};
