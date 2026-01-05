import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

test.beforeEach(async ({ page }) => {
  await page.route('**/*', route => {
    const url = route.request().url();

    if (
      url.includes('ads') ||
      url.includes('doubleclick') ||
      url.includes('googlesyndication') ||
      url.includes('adservice')
    ) {
      route.abort();
    } else {
      route.continue();
    }
  });
});

test('login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('practice', 'SuperSecretPassword!');

  const greeting = await loginPage.getGreetingMessage();
  expect(greeting).toContain('Hi, practice!');
});
