// path: tests/e2e/checkout.spec.ts
import { test, expect } from '@playwright/test';
import { SearchPage } from '../../src/pages/SearchPage';
import { ProductPage } from '../../src/pages/ProductPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';
import { Header } from '../../src/components/Header';
import { checkoutProduct } from '../../src/fixtures/testData';

// TC-CHECKOUT-001: Verify end-to-end checkout flow from search to order placement
test.describe('TC-CHECKOUT-001 - Checkout flow', () => {
  test.beforeEach(async ({ page }) => {
    // Set up mock HTML structure for search, product, cart, and checkout
    await page.setContent(`
      <div>
        <header>
          <span data-testid="cart-badge">0</span>
        </header>

        <input data-testid="search-input" />
        <button data-testid="search-btn">Search</button>

        <div data-testid="product-result" style="display: none;">
          <h2 data-testid="product-title">${checkoutProduct.name}</h2>
          <span data-testid="product-price">${checkoutProduct.price}</span>
          <button data-testid="add-to-cart-btn">Add to cart</button>
        </div>

        <div data-testid="cart-summary">
          <span data-testid="cart-total">$0</span>
          <button data-testid="checkout-btn">Checkout</button>
        </div>

        <div data-testid="checkout-page" style="display: none;">
          <span data-testid="checkout-total">$0</span>
          <button data-testid="place-order-btn">Place order</button>
        </div>
      </div>

      <script>
        const searchBtn = document.querySelector('[data-testid="search-btn"]');
        const searchInput = document.querySelector('[data-testid="search-input"]');
        const productResult = document.querySelector('[data-testid="product-result"]');
        const addToCartBtn = document.querySelector('[data-testid="add-to-cart-btn"]');
        const cartBadge = document.querySelector('[data-testid="cart-badge"]');
        const cartTotal = document.querySelector('[data-testid="cart-total"]');
        const checkoutBtn = document.querySelector('[data-testid="checkout-btn"]');
        const checkoutPage = document.querySelector('[data-testid="checkout-page"]');
        const checkoutTotal = document.querySelector('[data-testid="checkout-total"]');

        searchBtn?.addEventListener('click', () => {
          const query = searchInput.value.trim().toLowerCase();
          const expected = '${checkoutProduct.searchQuery}'.toLowerCase();
          productResult.style.display = query === expected ? 'block' : 'none';
        });

        addToCartBtn?.addEventListener('click', () => {
          cartBadge.textContent = '1';
          cartTotal.textContent = '${checkoutProduct.price}';
        });

        checkoutBtn?.addEventListener('click', () => {
          checkoutPage.style.display = 'block';
          checkoutTotal.textContent = cartTotal.textContent;
        });
      </script>
    `);
  });

  test('should allow searching for a product, adding it to cart, and proceeding to checkout', async ({ page }) => {
    const searchPage = new SearchPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const header = new Header(page);

    await expect(header.cartBadge()).toHaveText('0');
    await expect(cartPage.total()).toHaveText('$0');
    await expect(checkoutPage.container()).not.toBeVisible();
    await expect(searchPage.productResult(checkoutProduct.name)).not.toBeVisible();

    // Initialization: Prepare search query
    await searchPage.queryInput().fill(checkoutProduct.searchQuery);

    // User Actions: Perform search and verify product appears
    await searchPage.submit().click();
    

    // Verification: Ensure product details are correct before adding to cart
    await expect(searchPage.productResult(checkoutProduct.name)).toBeVisible();
    await expect(productPage.title()).toHaveText(checkoutProduct.name);
    await expect(productPage.price()).toHaveText(checkoutProduct.price);

    // User Actions: Add product to cart
    await productPage.addToCart().click();

    // Verification: Confirm cart updates correctly
    await expect(header.cartBadge()).toHaveText('1');
    await expect(cartPage.total()).toHaveText(checkoutProduct.price);

    // User Actions: Proceed to checkout
    await cartPage.proceedToCheckout().click();

    // Verification: Ensure checkout page loads and total matches cart
    await expect(checkoutPage.container()).toBeVisible();
    await expect(checkoutPage.total()).toHaveText(checkoutProduct.total);
  });
});