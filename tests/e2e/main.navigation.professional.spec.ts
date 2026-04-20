// path: tests/e2e/main.navigation.refactored.spec.ts

 import { test, expect } from '@playwright/test';
 import { MainPage } from '../../src/pages/MainPage';
 

// TC-NAV-001: Verify main navigation links are present, functional, and handle edge cases
test.describe('TC-NAV-001 - Main page navigation', () => {
   let mainPage: MainPage;
 
   test.beforeEach(async ({ page }) => {
    // Set up a basic navigation structure for testing
     await page.setContent(`
       <nav aria-label="Main navigation" data-testid="main-nav">
        <a href="#docs">Docs</a>
        <a href="#api">API</a>
        <a href="#community">Community</a>
       </nav>
       <script>
         document.querySelectorAll('a').forEach(link => {
           link.addEventListener('click', (e) => {
             e.preventDefault();
             window.location.hash = link.getAttribute('href');
           });
       9  });
</script>
     `);
     mainPage = new MainPage(page);
   });
 
 test('should display and allow interaction with Docs, API, and Community navigation links', async ({ page }) => {
    // Retrieve navigation elements using Page Object Model
    const navigation = mainPage.navigation();
    const docsLink = mainPage.docsLink();
    const apiLink = mainPage.apiLink();
    const communityLink = mainPage.communityLink();
 
    // Verify navigation container is visible
    await expect(navigation).toBeVisible();
 
    // // Verify Docs link is visible, correct, and navigates properly
    await expect(docsLink).toBeVisible();
    await expect(docsLink).toHaveText('Docs');
    await expect(docsLink).toHaveAttribute('href', '#docs');
    // Interaction
    await docsLink.click();
    // Navigation verification
    await expect(page).toHaveURL(/#docs/);
 
    // // Verify API link is visible, correct, and navigates properly
    await expect(apiLink).toBeVisible();
    await expect(apiLink).toHaveText('API');
    await expect(apiLink).toHaveAttribute('href', '#api');
    // Interaction
    await apiLink.click();
    // Navigation verification
    await expect(page).toHaveURL(/#api/);
 
    // // Verify Community link is visible, correct, and navigates properly
    await expect(communityLink).toBeVisible();
    await expect(communityLink).toHaveText('Community');
    await expect(communityLink).toHaveAttribute('href', '#community');
    // Interaction
    await communityLink.click();
    // Navigation verification
    await expect(page).toHaveURL(/#community/);
  });

 test('should handle empty navigation gracefully', async ({ page }) => {
   // Initialization
   await page.setContent(`
     <nav aria-label="Main navigation" data-testid="main-nav">
     </nav>
   `);

   mainPage = new MainPage(page);

   const navigation = mainPage.navigation();

   // Verification
   await expect(navigation).toBeAttached();
   await expect(page.getByRole('link')).toHaveCount(0);
 });

 test('should keep navigation usable when Docs link is hidden', async ({ page }) => {
  // Initialization edge case: Set up navigation with one hidden link
  await page.setContent(`
    <nav aria-label="Main navigation" data-testid="main-nav">
      <a href="/docs" style="display: none;">Docs</a>
      <a href="/api">API</a>
      <a href="/community">Community</a>
    </nav>
  `);

  mainPage = new MainPage(page);

  // Retrieve navigation elements
  const navigation = mainPage.navigation();
  const apiLink = mainPage.apiLink();
  const communityLink = mainPage.communityLink();

   // Use a DOM-based locator for the hidden element
  const hiddenDocsLink = page.locator('a[href="/docs"]');

  // Verification
  await expect(navigation).toBeVisible();

  await expect(hiddenDocsLink).not.toBeVisible();
  await expect(hiddenDocsLink).toHaveAttribute('href', '/docs');

  await expect(apiLink).toBeVisible();
  await expect(apiLink).toHaveText('API');
  await expect(apiLink).toHaveAttribute('href', '/api');

  await expect(communityLink).toBeVisible();
  await expect(communityLink).toHaveText('Community');
  await expect(communityLink).toHaveAttribute('href', '/community');

  await expect(page.getByRole('link')).toHaveCount(2);
  });
 });