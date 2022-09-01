const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './store/store_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost',
      show: true,
      browser: 'chromium',
      timeout: 20000,
      waitForTimeout: 10000,
      waitForNavigation: 'networkidle',
      windowSize: '1880x920',
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
  },
  include: {
    I: './steps_file.js',
    homePage: './pages/home.js',
    authPage: './pages/auth.js',
    createAccountPage: './pages/createAccount.js',
    myAccountPage: './pages/myAccount.js',
    productPage: './pages/product.js',
    shoppingCartPage: './pages/shoppingCart.js',
  },
  name: 'JS_apuhachevskyi'
}