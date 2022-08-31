let user = {
    firstName: 'Andrii',
    lastName: 'Puhachevskyi',
    password: '12345',
    firstname: 'Andrii',
    lastname: 'Puhachevskyi',
    address: 'Test str.',
    city: 'Test',
    state: 'Alabama',
    zipCode: '12123',
    phone: '+1478998701',
    alias: 'test_user',
};

Feature('store');
Scenario('test something', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
I.openStore();
homePage.clickSignIn();
authPage.fillEmail(Date.now() + '@test.com');
authPage.clickCreateAccount();
createAccountPage.fillNewAccountFields(user);
createAccountPage.clickRegister();
myAccountPage.verifyPage();
//I.see('My account');
}).tag('auth');
