import { Locator, Page } from '@playwright/test';

export class ResultsPage {
  constructor(private page: Page) {}

  items(): Locator {
    return this.page.getByTestId('results').getByTestId('result-item');
  }

  titleOf(index: number): Locator {
    return this.items().nth(index).getByTestId('result-title');
  }

  priceOf(index: number): Locator {
    return this.items().nth(index).getByTestId('result-price');
  }
}
