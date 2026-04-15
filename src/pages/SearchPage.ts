import { Locator, Page } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  queryInput(): Locator {
    return this.page.getByTestId('search-input');
  }

  submit(): Locator {
    return this.page.getByTestId('search-btn');
  }

  async applyFilter(filterName: string): Promise<void> {
    const filterMap: Record<string, string> = {
      'Price < $1000': 'filter-price-lt-1000',
    };

    const filterId = filterMap[filterName];

    if (!filterId) {
      throw new Error(`Unsupported filter: ${filterName}`);
    }

    await this.page.getByTestId(filterId).click();
  }

  productResult(name: string): Locator {
    return this.page.getByTestId('product-result').filter({ hasText: name });
  }
}
