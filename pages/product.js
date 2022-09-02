const { I } = inject();

module.exports = {
  productPrice: { css: '#our_price_display' },
  addToCart: { css: '#add_to_cart' },
  proceedToCheckout: { xpath: '//a[@title="Proceed to checkout"]' },

  async getProductPrice() {
    return await I.grabTextFrom(this.productPrice);
  },

  clickAddProduct(){
    I.click(this.addToCart);
    I.click(this.proceedToCheckout);
  }

}
