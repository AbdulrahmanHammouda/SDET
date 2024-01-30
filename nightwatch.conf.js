const HtmlReporter = require('nightwatch-html-reporter');

const reporter = new HtmlReporter({
  openBrowser: false,
  reportsDirectory: 'reports',
  uniqueFilename: true,
});

module.exports = {
  src_folders: ['tests'],
  page_objects_path: ['pages'],
  output_folder: 'reports',

  webdriver: {
    start_process: true,
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
