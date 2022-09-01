// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    openStore(){
      this.amOnPage('http://automationpractice.com/index.php');
    },

    openProduct(){
      this.amOnPage('http://automationpractice.com/index.php?id_product=1&controller=product');
    },

    openCart(){
      this.amOnPage('http://automationpractice.com/index.php?controller=order');
    }

  });
}
