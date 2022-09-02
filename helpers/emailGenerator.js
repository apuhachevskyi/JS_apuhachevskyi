const Helper = require('@codeceptjs/helper');

class EmailGenerator extends Helper {
  getRandomEmail(){
    return Date.now() + '@test.com';
  }


  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = EmailGenerator;
