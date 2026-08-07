import {test,expect} from "@playwright/test";
import { HomePage } from "../pages/HomePage";   
import { LoginPage } from "../pages/LoginPage";
import { TestConfig } from "../test.config";


let homepage: HomePage;
let config: TestConfig;
let loginpage: LoginPage;

test.beforeEach("Page URL", async ({ page }) => 
{
    config = new TestConfig(); 
    await page.goto(config.appUrl);

    homepage = new HomePage(page);
    loginpage = new LoginPage(page);

})

test.afterEach("Page Logout", async ({ page }) => {
    await page.waitForTimeout(2000);
    await page.close();
})


test('user login test',async()=>{

    await homepage.clickMyAccount();
    await homepage.clickLogin();
    await loginpage.login(config.email,config.password);
    //await loginpage.errorMessage();

})