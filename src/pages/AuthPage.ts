import { Page } from '@playwright/test';

export class AuthPage {
  constructor(private page: Page) {}

  open() {
    // Navigate to auth page if needed
  }

  username() {
    return this.page.getByTestId('username-input');
  }

  password() {
    return this.page.getByTestId('password-input');
  }

  submit() {
    return this.page.getByTestId('login-btn');
  }

  errorMessage() {
    return this.page.getByTestId('error-message');
  }

  async login(user: string, pass: string) {
    await this.username().fill(user);
    await this.password().fill(pass);
    await this.submit().click();
  }
}