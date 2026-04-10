import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  avatar() {
    return this.page.getByTestId('user-avatar');
  }
}