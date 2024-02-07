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
    server_path: '/usr/local/bin/chromedriver',
    port: 9515,
    host: 'localhost',
    ssl: false,
    default_path_prefix: '',
    proxy: undefined,
    cli_args: {}
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
