import { test, expect } from '@playwright/test';
import { AuthPage } from '../../src/pages/AuthPage';
import { HomePage } from '../../src/pages/HomePage';
import { validUser, invalidUser } from '../../src/fixtures/testData';

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <form>
        <label for="username">Username</label>
        <input id="username" data-testid="username-input" />
        <label for="password">Password</label>
        <input id="password" data-testid="password-input" type="password" />
        <button type="submit" data-testid="login-btn">Sign in</button>
        <div data-testid="error-message" style="display: none;">Invalid credentials</div>
        <div data-testid="user-avatar" style="display: none;">Avatar</div>
      </form>
    `);
    await page.evaluate((validUser) => {
  const loginBtn = document.querySelector('[data-testid="login-btn"]');
  const usernameInput = document.querySelector('[data-testid="username-input"]') as HTMLInputElement;
  const passwordInput = document.querySelector('[data-testid="password-input"]') as HTMLInputElement;
  const errorMessage = document.querySelector('[data-testid="error-message"]') as HTMLElement;
  const avatar = document.querySelector('[data-testid="user-avatar"]') as HTMLElement;

  loginBtn?.addEventListener('click', (e) => {
    e.preventDefault();

    if (usernameInput.value === validUser.username && passwordInput.value === validUser.password) {
      avatar.style.display = 'block';
      errorMessage.style.display = 'none';
    } else {
      errorMessage.style.display = 'block';
      avatar.style.display = 'none';
    }
  });
}, validUser);
  });

  test('successful login', async ({ page }) => {
    const authPage = new AuthPage(page);
    const homePage = new HomePage(page);

    // Initialization

    // User actions
    await authPage.login(validUser.username, validUser.password);

    // Verification
    await expect(homePage.avatar()).toBeVisible();
  });

  test('invalid login', async ({ page }) => {
    const authPage = new AuthPage(page);

    // Initialization

    // User actions
    await authPage.login(invalidUser.username, invalidUser.password);

    // Verification
    await expect(authPage.errorMessage()).toBeVisible();
  });
});