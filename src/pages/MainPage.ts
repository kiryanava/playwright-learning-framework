import { Page } from '@playwright/test';

/**
 * Page Object Model for the Main Page
 * Encapsulates locators and interactions for the main navigation
 */
export class MainPage {
  constructor(private page: Page) {}

  /**
   * Locator for the main navigation section
   */
  get navigation() {
    return this.page.getByTestId('main-nav');
  }

  /**
   * Locator for the Docs link
   */
  get docsLink() {
    return this.page.getByTestId('nav-docs');
  }

  /**
   * Locator for the API link
   */
  get apiLink() {
    return this.page.getByTestId('nav-api');
  }

  /**
   * Locator for the Community link
   */
  get communityLink() {
    return this.page.getByTestId('nav-community');
  }
}