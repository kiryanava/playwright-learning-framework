import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  total(): Locator {
    return this.page.getByTestId('checkout-total');
  }

  placeOrder(): Locator {
    return this.page.getByTestId('place-order-btn');
  }

  container(): Locator {
  return this.page.getByTestId('checkout-page');
  }
}
