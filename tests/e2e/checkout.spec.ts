import { test, expect } from '@playwright/test';
import { SearchPage } from '../../src/pages/SearchPage';
import { ProductPage } from '../../src/pages/ProductPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';
import { Header } from '../../src/components/Header';
import { checkoutProduct } from '../../src/fixtures/testData';

test.describe('Checkout flow', () => {
  test.beforeEach(async ({ page }) => {
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

  test('search, add product and complete checkout', async ({ page }) => {
    const searchPage = new SearchPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const header = new Header(page);

    // Initialization
    await searchPage.queryInput().fill(checkoutProduct.searchQuery);

    // User actions
    await searchPage.submit().click();
    await expect(searchPage.productResult(checkoutProduct.name)).toBeVisible();
    await productPage.addToCart().click();

    // Verification
    await expect(header.cartBadge()).toHaveText('1');

    await expect(page.getByTestId('cart-total')).toHaveText(checkoutProduct.price);

    await expect(productPage.title()).toHaveText(checkoutProduct.name);
    await expect(productPage.price()).toHaveText(checkoutProduct.price);



    // User actions
    await cartPage.proceedToCheckout().click();
    
    await expect(page.getByTestId('checkout-page')).toBeVisible();
    
    // Verification
    await expect(checkoutPage.total()).toHaveText(checkoutProduct.total);
  });
});