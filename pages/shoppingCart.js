const { I } = inject();

module.exports = {
  cartTitleId: { css: '#cart_title' },
  stepId: { css: '#order' },
  agreeBox: { css: '#cgv' },
  orderConfirmation: { css: '#order-confirmation' },
  verificationText: 'SHOPPING-CART SUMMARY',
  verificationAddressText: 'ADDRESSES',
  verificationShippingText: 'SHIPPING',
  verificationPaymentText: 'PLEASE CHOOSE YOUR PAYMENT METHOD',
  verificationConfirmationText: 'Your order on My Store is complete.',
  proceedToCheckout: { xpath: '//a[@title="Proceed to checkout"]' },
  submitAddressButton: { xpath: '//button[@name="processAddress"]' },
  submitShippingButton: { xpath: '//button[@name="processCarrier"]' },
  productPrice: { css: '#total_price' },
  productShipping: { css: '#total_shipping' },
  productTax: { css: '#total_tax' },
  orderInfo: 'div.box',
  wireTransfer: 'a.bankwire',
  confirmOrder: { xpath: '//button[@class="button btn btn-default button-medium"]' },

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

  confirmShopping() {
    I.click(this.wireTransfer);
    I.click(this.confirmOrder);
    this._verifyPage(this.orderConfirmation, this.verificationConfirmationText);
  },

  async getProductPrice() {
    return +(await I.grabTextFrom(this.productPrice)).slice(1);
  },

  async getProductShipping() {
    return +(await I.grabTextFrom(this.productShipping)).slice(1);
  },

  async getProductTax() {
    return +(await I.grabTextFrom(this.productTax)).slice(1);
  },

  async getOrderCode() {
    let orderText = await I.grabTextFrom(this.orderInfo);
    return orderText.substring(orderText.indexOf('reference') + 10, orderText.indexOf('reference') + 19);
  },

}
