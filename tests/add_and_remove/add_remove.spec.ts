import { test, expect } from '@playwright/test';
import { AddRemovePage } from '../../pages/add_remove.page';

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

test('add and remove items', async ({ page }) => {
  const addRemovePage = new AddRemovePage(page);

  await addRemovePage.goto();

  await addRemovePage.search('add');

  await addRemovePage.addElement();
  await expect(addRemovePage.deleteButton).toBeVisible();

  await addRemovePage.removeElement();
  await expect(addRemovePage.deleteButton).not.toBeVisible();
});