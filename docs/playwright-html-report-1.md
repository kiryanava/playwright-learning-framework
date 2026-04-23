# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/main.navigation.spec.ts >> Main page navigation >> Main page should display navigation links: Docs, API, Community
- Location: tests/e2e/main.navigation.spec.ts:20:7

# Error details

```
Error: toBeVisible can be only used with Locator object
```

# Page snapshot

```yaml
- navigation [ref=e2]:
  - link "Docs" [ref=e3] [cursor=pointer]:
    - /url: /docs
  - link "API" [ref=e4] [cursor=pointer]:
    - /url: /api
  - link "Community" [ref=e5] [cursor=pointer]:
    - /url: /community
```

# Test source

```ts
  1  | // path: tests/e2e/main.navigation.spec.ts
  2  | import { test, expect } from '@playwright/test';
  3  | import { MainPage } from '../../src/pages/MainPage';
  4  | 
  5  | test.describe('Main page navigation', () => {
  6  |   let mainPage: MainPage;
  7  | 
  8  |   test.beforeEach(async ({ page }) => {
  9  |     // Initialization
  10 |     await page.setContent(`
  11 |       <nav data-testid="main-nav">
  12 |         <a id="docs" href="/docs" data-testid="nav-docs">Docs</a>
  13 |         <a href="/api" data-testid="nav-api">API</a>
  14 |         <a href="/community" data-testid="nav-community">Community</a>
  15 |       </nav>
  16 |     `);
  17 |     mainPage = new MainPage(page);
  18 |   });
  19 | 
  20 |   test('Main page should display navigation links: Docs, API, Community', async ({ page }) => {
  21 |     // User actions
  22 |     const navigation = mainPage.navigation;
  23 |     const apiLink = mainPage.apiLink;
  24 |     const communityLink = mainPage.communityLink;
  25 | 
  26 |     await page.waitForTimeout(2000);
  27 | 
  28 |     // Verification
> 29 |     await expect(navigation).toBeVisible();
     |                              ^ Error: toBeVisible can be only used with Locator object
  30 |     await expect(page.locator('#docs')).toBeVisible();
  31 |     await expect(page.locator('#docs')).toHaveAttribute('href', '/docs');
  32 |     await expect(apiLink).toBeVisible();
  33 |     await expect(apiLink).toHaveAttribute('href', '/api');
  34 |     await expect(communityLink).toBeVisible();
  35 |     await expect(communityLink).toHaveAttribute('href', '/community');
  36 |   });
  37 | });
```