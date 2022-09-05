const { I } = inject();

module.exports = {
  productPrice: { css: '#our_price_display' },
  addToCart: { css: '#add_to_cart' },
  checkout: { xpath: '//a[@title="Proceed to checkout"]' },

  async getProductPrice() {
    return +(await I.grabTextFrom(this.productPrice)).slice(1);
  },

  addProductToCart() {
    I.click(this.addToCart);
  },

  proceedToCheckout() {
    I.click(this.checkout);
  }

}
