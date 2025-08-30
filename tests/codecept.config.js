exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost:3000',
      browser: 'chrome'
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept_tests'
};