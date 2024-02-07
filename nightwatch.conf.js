const HtmlReporter = require('nightwatch-html-reporter');

const reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: 'reports',
  uniqueFilename: true,
});

module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['pageObjects'],
  output_folder: 'reports',

  webdriver: {
    start_process: true,
    path: '/usr/local/bin/chromedriver',
    port: 9515,
    host: 'localhost',
    
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },

  reporter: reporter.fn,
};
