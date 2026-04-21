import { Locator, Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  items(): Locator {
    return this.page.getByTestId('cart-summary');
  }

  proceedToCheckout(): Locator {
    return this.page.getByTestId('checkout-btn');
  }

  total(): Locator {
  return this.page.getByTestId('cart-total');
}
}
