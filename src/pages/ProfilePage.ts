// path: src/pages/ProfilePage.ts
import { Page } from '@playwright/test';

export class ProfilePage {
  constructor(private page: Page) {}

  async clickMenuByName(option: string) {
    await this.page.getByTestId(`menu-${option}`).click();
  }
}