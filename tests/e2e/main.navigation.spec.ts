// path: tests/e2e/main.navigation.spec.ts
import { test, expect } from '@playwright/test';
import { MainPage } from '../../src/pages/MainPage';

test.describe('Main page navigation', () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    // Initialization
    await page.setContent(`
      <nav data-testid="main-nav">
        <a href="/docs" data-testid="nav-docs">Docs</a>
        <a href="/api" data-testid="nav-api">API</a>
        <a href="/community" data-testid="nav-community">Community</a>
      </nav>
    `);
    mainPage = new MainPage(page);
  });

  test('Main page should display navigation links: Docs, API, Community', async () => {
    // User actions
    const navigation = mainPage.navigation;
    const docsLink = mainPage.docsLink;
    const apiLink = mainPage.apiLink;
    const communityLink = mainPage.communityLink;

    // Verification
    await expect(navigation).toBeVisible();
    await expect(docsLink).toBeVisible();
    await expect(docsLink).toHaveAttribute('href', '/docs');
    await expect(apiLink).toBeVisible();
    await expect(apiLink).toHaveAttribute('href', '/api');
    await expect(communityLink).toBeVisible();
    await expect(communityLink).toHaveAttribute('href', '/community');
  });
});
