const { I } = inject();

module.exports = {
  myAccountId: { css: '#my-account' },

  verifyPage(){
    I.waitForVisible(this.myAccountId)
    I.see('My account');
  }
  // insert your locators and methods here
}
