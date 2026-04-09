import { test } from '@playwright/test';
import { AccountPage } from '../src/pages/AccountPage';

test.describe('Account Page Tabs', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <button data-testid="tab-overview">Overview</button>
      <button data-testid="tab-settings">Settings</button>
      <button data-testid="tab-security">Security</button>
    `);
  });

  test('click overview tab', async ({ page }) => {
    const accountPage = new AccountPage(page);
    await accountPage.clickTabByName('overview');
  });

  test('click settings tab', async ({ page }) => {
    const accountPage = new AccountPage(page);
    await accountPage.clickTabByName('settings');
  });

  test('click security tab', async ({ page }) => {
    const accountPage = new AccountPage(page);
    await accountPage.clickTabByName('security');
  });
});

