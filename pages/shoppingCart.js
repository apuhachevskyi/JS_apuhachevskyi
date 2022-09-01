const { I } = inject();

module.exports = {
  cartTitleId: { css: '#cart_title' },
  stepId: { css: '#order' },
  agreeBox: { css: '#cgv' },
  verificationText: 'SHOPPING-CART SUMMARY',
  verificationAddressText: 'ADDRESSES',
  verificationShippingText: 'SHIPPING',
  verificationPaymentText: 'PLEASE CHOOSE YOUR PAYMENT METHOD',
  proceedToCheckout: { xpath: '//a[@title="Proceed to checkout"]' },
  submitAddressButton: { xpath: '//button[@name="processAddress"]' },
  submitShippingButton: { xpath: '//button[@name="processCarrier"]' },
  productPrice: { css: '#product_price_1_1_740815' },

  _verifyPage(id, text) {
    I.waitForVisible(id)
    I.see(text);
  },

  processShopping() {
    this._verifyPage(this.cartTitleId, this.verificationText);
    I.click(this.proceedToCheckout);
    this._verifyPage(this.stepId, this.verificationAddressText);
    I.click(this.submitAddressButton);
    this._verifyPage(this.stepId, this.verificationShippingText);
    I.click(this.agreeBox);
    I.click(this.submitShippingButton);
    this._verifyPage(this.stepId, this.verificationPaymentText);
  },

  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);
  },

}
