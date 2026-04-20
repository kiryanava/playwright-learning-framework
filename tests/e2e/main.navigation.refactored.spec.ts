// path: tests/e2e/main.navigation.refactored.spec.ts
import { test, expect } from '@playwright/test';
import { MainPage } from '../../src/pages/MainPage';

test.describe('Main page navigation', () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <nav aria-label="Main navigation" data-testid="main-nav">
        <a href="/docs">Docs</a>
        <a href="/api">API</a>
        <a href="/community">Community</a>
      </nav>
    `);

    mainPage = new MainPage(page);
  });

  test('should display Docs, API, and Community navigation links', async ({ page }) => {
   
    const navigation = mainPage.navigation();
    const docsLink = mainPage.docsLink();
    const apiLink = mainPage.apiLink();
    const communityLink = mainPage.communityLink();

    await expect(navigation).toBeVisible();

    await expect(docsLink).toBeVisible();
    await expect(docsLink).toHaveAttribute('href', '/docs');

    await expect(apiLink).toBeVisible();
    await expect(apiLink).toHaveAttribute('href', '/api');

    await expect(communityLink).toBeVisible();
    await expect(communityLink).toHaveAttribute('href', '/community');
  });
});