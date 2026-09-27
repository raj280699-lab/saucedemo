import { test, expect }
from '../fixtures/baseFixture';

import loginData
from '../test-data/logindata.json';

test(
'Complete Checkout Flow',
async ({
    loginPage,
    inventoryPage,
    cartPage
}) => {

    await loginPage.navigate();

    await loginPage.verifyLoginPage();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await inventoryPage.sortLowToHigh();

    await inventoryPage.addCheapestProduct();

    await inventoryPage.verifyCartCount();

    await inventoryPage.openCart();

    await cartPage.verifyProduct();

    await cartPage.checkout();

    await cartPage.enterCheckoutInfo();

    await cartPage.finishOrder();

    await cartPage.verifyOrderSuccess();
});