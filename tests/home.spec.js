const { test, expect } = require('@playwright/test');
const path = require('path');
const { pathToFileURL } = require('url');

test('home page has the correct title and heading', async ({ page }) => {
  const filePath = path.resolve(__dirname, '../public/index.html');
  await page.goto(pathToFileURL(filePath).href);

  await expect(page).toHaveTitle('CI/CD Demo');
  await expect(
    page.getByRole('heading', { name: 'Hello CI/CD!' })
  ).toBeVisible();
});
