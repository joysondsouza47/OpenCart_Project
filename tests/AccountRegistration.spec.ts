/**

Test Case: Account Registration

Tags: @master @sanity @regression

Steps:
1. Navigate to Application URL
2. Go to 'My Account' and click 'Register'
3. Fill in registration details with random data
4. Agree to privacy and submit the form
5. validate the confirtmation message

**/

import { test, expect, Locator } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegistrationPage } from "../pages/RegistrationPage";
import { RandomDataUtil } from "../utils/randomDataGenerator";
import { TestConfig } from "../test.config";

let homepage: HomePage;
let registrationPage: RegistrationPage;
let config: TestConfig;

test.beforeEach("Page URL", async ({ page }) => {

    config = new TestConfig();
    await page.goto(config.appUrl);
    homepage = new HomePage(page);
    registrationPage = new RegistrationPage(page);


})

test.afterEach("Page Logout", async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.close();
})

test("User registration test", async () => {
    await homepage.clickMyAccount();
    await homepage.clickRegister();

    await registrationPage.setFirstName(RandomDataUtil.getRandomFirstName());
    await registrationPage.setFirstName(RandomDataUtil.getRandomFirstName());
    await registrationPage.setLastName(RandomDataUtil.getRandomLastName());
    await registrationPage.setEmail(RandomDataUtil.getRandomEmail());
    await registrationPage.setPassword(RandomDataUtil.getRanPassword());
    await registrationPage.PrivacyCheck();
    await registrationPage.clickContinueButton();
    const confirmationMsg = await registrationPage.setMsgConfirmation();

    expect(confirmationMsg).toContain('Your Account Has Been Created!');


})