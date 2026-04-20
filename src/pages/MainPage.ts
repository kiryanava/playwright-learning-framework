import { Page } from '@playwright/test';

export class MainPage {
  constructor(private page: Page) {}

  navigation() {
    return this.page.getByRole('navigation', { name: 'Main navigation' });
  }

  docsLink() {
    return this.page.getByRole('link', { name: 'Docs' });
  }

  apiLink() {
    return this.page.getByRole('link', { name: 'API' });
  }

  communityLink() {
    return this.page.getByRole('link', { name: 'Community' });
  }
}