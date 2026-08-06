import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost/opencart/upload/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Your Store/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost/opencart/upload/');

  // Click the get started link.
  await page.locator('span:has-text("My Account")').click();

  await page.waitForTimeout(3000);
});
