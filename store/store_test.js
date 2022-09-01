const auth = require("../pages/auth");

let user = {
    firstName: 'Andrii',
    lastName: 'Puhachevskyi',
    email: '31082022181223@test.com',
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

Before(({ I }) => {
    I.openStore();
});

xScenario('create account', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    homePage.clickSignIn();
    authPage.fillRegistrationEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    createAccountPage.clickRegister();
    myAccountPage.verifyPage();
}).tag('reg');

Scenario('buy product', async ({ I, homePage, authPage, myAccountPage, productPage, shoppingCartPage }) => {
    homePage.clickSignIn();
    authPage.login(user.email, user.password);
    myAccountPage.verifyPage();
    I.openProduct();
    let productPrice = await productPage.getProductPrice();
    productPage.clickAddToCart();
    shoppingCartPage.processShopping();
    let productCartPrice = await shoppingCartPage.getProductPrice();
    productCartPrice = productCartPrice.replace(/\s+/g, '');
    I.assertEqual(productPrice, productCartPrice, 'Prices are not in match' );
}).tag('buy');
