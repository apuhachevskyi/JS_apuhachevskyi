// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({
    openStore(){
      this.amOnPage('http://automationpractice.com/index.php');
    },

      openCart(){
      this.amOnPage('http://automationpractice.com/index.php?controller=order');
    }

  });
}
