import { Locator, Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  addToCart(): Locator {
    return this.page.getByTestId('add-to-cart-btn');
  }

  title(): Locator {
    return this.page.getByTestId('product-title');
  }

  price(): Locator {
    return this.page.getByTestId('product-price');
  }
}
