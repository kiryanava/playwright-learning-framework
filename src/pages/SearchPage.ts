import { Locator, Page } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  queryInput(): Locator {
    return this.page.getByTestId('search-input');
  }

  submit(): Locator {
    return this.page.getByTestId('search-btn');
  }

  productResult(name: string): Locator {
    return this.page.getByTestId('product-result').filter({ hasText: name });
  }
}
