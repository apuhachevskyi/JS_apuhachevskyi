const { I } = inject();

module.exports = {
  firstNameInput: { css: '#customer_firstname' },
  lastNameInput: { css: '#customer_lastname' },
  passwordInput: { css: '#passwd' },
  firstnameInput: { css: '#firstname' },
  lastnameInput: { css: '#lastname' },
  addressInput: { css: '#address1' },
  cityInput: { css: '#city' },
  stateDropDown: { css: '#id_state' },
  postcodeInput: { css: '#postcode' },
  phoneInput: { css: '#phone_mobile' },
  aliasInput: { css: '#alias' },
  registerButton: { css: '#submitAccount' },

  fillNewAccountFields(user){
    I.waitForVisible(this.firstNameInput)
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.fillField(this.passwordInput, user.password);
    I.fillField(this.firstnameInput, user.firstname);
    I.fillField(this.lastnameInput, user.lastname);
    I.fillField(this.addressInput, user.address);
    I.fillField(this.cityInput, user.city);
    I.click(this.stateDropDown);
    I.selectOption(this.stateDropDown, user.state);
    I.fillField(this.postcodeInput, user.zipCode);
    I.fillField(this.phoneInput, user.phone);
    I.fillField(this.aliasInput, user.alias);
  },

  clickRegister(){
    I.click(this.registerButton);
  }

  // insert your locators and methods here
}
