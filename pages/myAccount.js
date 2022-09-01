const { I } = inject();

module.exports = {
  myAccountId: { css: '#my-account' },
  verificationText: 'My account',

  verifyPage() {
    I.waitForVisible(this.myAccountId)
    I.see(this.verificationText);
  }
}
