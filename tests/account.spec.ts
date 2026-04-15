import { expect, test } from '@playwright/test';
import { AccountPage } from '../src/pages/AccountPage';

test.describe('Account Page Tabs', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <button data-testid="tab-overview">Overview</button>
      <button data-testid="tab-settings">Settings</button>
      <button data-testid="tab-security">Security</button>
      <label>
        <input type="checkbox" data-testid="remember-settings" />
        Remember preferences
      </label>
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

  test('enable remember preferences checkbox', async ({ page }) => {
    const accountPage = new AccountPage(page);

    // Initialization
    const rememberCheckbox = accountPage.rememberPreferencesCheckbox();

    // User actions
    await rememberCheckbox.check();

    // Verification
    await expect(rememberCheckbox).toBeChecked();
  });
});

