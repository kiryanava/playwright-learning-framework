import { Page } from '@playwright/test';

type AccountTab = 'overview' | 'settings' | 'security';

export class AccountPage {
  constructor(private page: Page) {}

async clickTabByName(tabName: AccountTab) {
    await this.page.getByTestId(`tab-${tabName}`).click();
  }
}