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

let credentials = {
    email: '31082022181223@test.com',
    password: '12345',
}
Feature('store');

Before(({ I }) => {
    I.openStore();
});

xScenario('create account', ({ I, homePage, authPage, createAccountPage, myAccountPage }) => {
    homePage.clickSignIn();
//    authPage.fillRegistrationEmail(Date.now() + '@test.com');
    authPage.fillRegistrationEmail(I.getRandomEmail());
    authPage.clickCreateAccount();
    createAccountPage.fillNewAccountFields(user);
    createAccountPage.clickRegister();
    myAccountPage.verifyPage();
}).tag('reg');

Scenario('buy product', async ({ I, homePage, authPage, myAccountPage, productPage, shoppingCartPage }) => {
    homePage.clickSignIn();
    authPage.login(credentials.email, credentials.password);
    myAccountPage.verifyPage();
    I.amOnPage('http://automationpractice.com/index.php?id_product=1&controller=product');
    let productPrice = await productPage.getProductPrice();
    productPage.clickAddProduct();
    shoppingCartPage.processShopping();
    let productCartPrice = await shoppingCartPage.getProductPrice();
    productCartPrice = productCartPrice.replace(/\s+/g, '');
    I.assertEqual(productPrice, productCartPrice, 'Prices are not in match' );
    shoppingCartPage.confirmShopping();
    let orderCode = await shoppingCartPage.getOrderCode();
    console.log(orderCode);
}).tag('buy');
