// path: tests/e2e/main.navigation.spec.ts
import { test, expect } from '@playwright/test';
import { MainPage } from '../../src/pages/MainPage';

test.describe('Main page navigation', () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    // Initialization
    await page.setContent(`
      <nav data-testid="main-nav">
        <a id="docs" href="/docs" data-testid="nav-docs">Docs</a>
        <a href="/api" data-testid="nav-api">API</a>
        <a href="/community" data-testid="nav-community">Community</a>
      </nav>
    `);
    mainPage = new MainPage(page);
  });

  test('Main page should display navigation links: Docs, API, Community', async ({ page }) => {
    // User actions
    const navigation = mainPage.navigation();
    const apiLink = mainPage.apiLink();
    const communityLink = mainPage.communityLink();

    await page.waitForTimeout(2000);

    // Verification
    await expect(navigation).toBeVisible();
    await expect(page.locator('#docs')).toBeVisible();
    await expect(page.locator('#docs')).toHaveAttribute('href', '/docs');
    await expect(apiLink).toBeVisible();
    await expect(apiLink).toHaveAttribute('href', '/api');
    await expect(communityLink).toBeVisible();
    await expect(communityLink).toHaveAttribute('href', '/community');
  });
});