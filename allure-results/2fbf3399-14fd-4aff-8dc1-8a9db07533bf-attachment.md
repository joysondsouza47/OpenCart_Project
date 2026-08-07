# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> user login test
- Location: tests\Login.spec.ts:27:5

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('.alert.alert-danger.alert-dismissible')

```

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import { HomePage } from "../pages/HomePage";   
  3  | import { LoginPage } from "../pages/LoginPage";
  4  | import { TestConfig } from "../test.config";
  5  | 
  6  | 
  7  | let homepage: HomePage;
  8  | let config: TestConfig;
  9  | let loginpage: LoginPage;
  10 | 
  11 | test.beforeEach("Page URL", async ({ page }) => 
  12 | {
  13 |     config = new TestConfig(); 
  14 |     await page.goto(config.appUrl);
  15 | 
  16 |     homepage = new HomePage(page);
  17 |     loginpage = new LoginPage(page);
  18 | 
  19 | })
  20 | 
  21 | test.afterEach("Page Logout", async ({ page }) => {
> 22 |     await page.waitForTimeout(2000);
     |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  23 |     await page.close();
  24 | })
  25 | 
  26 | 
  27 | test('user login test',async()=>{
  28 | 
  29 |     await homepage.clickMyAccount();
  30 |     await homepage.clickLogin();
  31 |     await loginpage.login(config.email,config.password);
  32 |     await loginpage.errorMessage();
  33 | 
  34 | })
```