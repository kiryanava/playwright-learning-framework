import { test, expect } from '@playwright/test';
import { SearchPage } from '../../src/pages/SearchPage';
import { ResultsPage } from '../../src/pages/ResultsPage';

test.describe('Search page filtering', () => {
  test.beforeEach(async ({ page }) => {
    await page.setContent(`
      <div>
        <input data-testid="search-input" />
        <button data-testid="search-btn">Search</button>
        <button data-testid="filter-price-lt-1000">Price < $1000</button>

        <div role="list" data-testid="results">
          <div data-testid="result-item">
            <span data-testid="result-title">Laptop A</span>
            <span data-testid="result-price">$999</span>
          </div>
          <div data-testid="result-item">
            <span data-testid="result-title">Laptop B</span>
            <span data-testid="result-price">$899</span>
          </div>
          <div data-testid="result-item">
            <span data-testid="result-title">Laptop C</span>
            <span data-testid="result-price">$1200</span>
          </div>
        </div>
      </div>
      <script>
        document.querySelector('[data-testid="filter-price-lt-1000"]').addEventListener('click', () => {
          document.querySelector('[data-testid="results"]').innerHTML =
            '<div data-testid="result-item">' +
            '<span data-testid="result-title">Laptop A</span>' +
            '<span data-testid="result-price">$999</span>' +
            '</div>' +
            '<div data-testid="result-item">' +
            '<span data-testid="result-title">Laptop B</span>' +
            '<span data-testid="result-price">$899</span>' +
            '</div>';
        });
      </script>
    `);
  });

  test('should verify every filtered result price is below 1000', async ({ page }) => {
    const searchPage = new SearchPage(page);
    const resultsPage = new ResultsPage(page);

    // Initialization
    await searchPage.queryInput().fill('Laptop');

    // User actions
    await searchPage.submit().click();
    await searchPage.applyFilter('Price < $1000');

    // Verification
    const itemCount = await resultsPage.items().count();

    for (let index = 0; index < itemCount; index += 1) {
      const priceText = await resultsPage.priceOf(index).textContent();
      const price = Number(priceText?.replace(/[^0-9]/g, ''));

      expect(price).toBeLessThan(1000);
    };

    expect(itemCount).toBe(2);
    
  });
});
