# AI Test Code Generation

## Exercise 1 — Auth Flow (Positive + Negative)

Prompt 1: 

You are a Senior QA Automation Engineer expert in TypeScript and Playwright E2E testing.
Write concise, typed, maintainable TypeScript.

Project & framework:
- Stack: TypeScript + Playwright
- Patterns: Page Object Model
- Selectors: getByTestId, getByLabel, getByRole only
- Structure:
  - tests/e2e/auth.spec.ts
  - src/pages/AuthPage.ts
  - src/pages/HomePage.ts
  - src/fixtures/testData.ts

Rules:
- Reuse existing files and do not create duplicate files.
- Locators must live inside page classes, not inside the test.
- Use stable selectors only.
- Keep code simple and readable.
- Add comments in the test:
  - // Initialization
  - // User actions
  - // Verification
- Use reusable fixture data, not hardcoded values inside the test.
- Output code with file headers in this format:
  // path: <relative_path>

Optional DOM context (outerHTML):
<form>
  <label for="username">Username</label>
  <input id="username" data-testid="username-input" />
  <label for="password">Password</label>
  <input id="password" data-testid="password-input" type="password" />
  <button type="submit" data-testid="login-btn">Sign in</button>
  <div data-testid="error-message">Invalid credentials</div>
  <img data-testid="user-avatar" />
</form>

Task:
1) Generate src/pages/AuthPage.ts with methods:
   - open()
   - username()
   - password()
   - submit()
   - errorMessage()
   - login(user, pass)

2) Generate src/pages/HomePage.ts with method:
   - avatar()

3) Generate src/fixtures/testData.ts with:
   - validUser
   - invalidUser

4) Generate tests/e2e/auth.spec.ts with:
   - successful login test
   - invalid login test
   - comments:
     // Initialization
     // User actions
     // Verification

Test behavior:
- Successful login → avatar becomes visible
- Invalid login → error message becomes visible

Use page.setContent(...) in beforeEach to simulate the page for this exercise.

Output only final code blocks with // path: headers.

## Exercise 2 — Checkout Flow (Cart + Total)

Prompt used:
You are a Senior QA Automation Engineer expert in TypeScript and Playwright E2E testing.
Write concise, typed, maintainable TypeScript.

Project & framework:
- Stack: TypeScript + Playwright
- Patterns: Page Object Model + Component Object Model
- Selectors: getByTestId, getByRole, getByLabel only
- Structure:
  - tests/e2e/checkout.spec.ts
  - src/pages/SearchPage.ts
  - src/pages/ProductPage.ts
  - src/pages/CartPage.ts
  - src/pages/CheckoutPage.ts
  - src/components/Header.ts
  - src/fixtures/testData.ts

Rules:
- Reuse existing files if they already exist.
- Do not create duplicate files.
- Locators and actions must live inside page/component classes, not inside tests.
- Use stable selectors only.
- Use comments in the test:
  - // Initialization
  - // User actions
  - // Verification
- Use fixture data instead of hardcoded product values inside the test.
- Output only final code blocks with file headers in this format:
  // path: <relative_path>

Optional DOM context (outerHTML):
<div>
  <input data-testid="search-input" />
  <button data-testid="search-btn">Search</button>

  <div data-testid="product-result">
    <h2 data-testid="product-title">Playwright Book</h2>
    <span data-testid="product-price">$100</span>
    <button data-testid="add-to-cart-btn">Add to cart</button>
  </div>

  <header>
    <span data-testid="cart-badge">0</span>
  </header>

  <div data-testid="cart-summary">
    <span data-testid="cart-total">$0</span>
    <button data-testid="checkout-btn">Checkout</button>
  </div>

  <div data-testid="checkout-page">
    <span data-testid="checkout-total">$100</span>
    <button data-testid="place-order-btn">Place order</button>
  </div>
</div>

Task:
1) Generate src/pages/SearchPage.ts with:
   - queryInput()
   - submit()
   - productResult(name: string)

2) Generate src/pages/ProductPage.ts with:
   - addToCart()
   - title()
   - price()

3) Generate src/pages/CartPage.ts with:
   - items()
   - proceedToCheckout()

4) Generate src/pages/CheckoutPage.ts with:
   - total()
   - placeOrder()

5) Generate src/components/Header.ts with:
   - cartBadge()

6) Update or generate src/fixtures/testData.ts with reusable checkout test data

7) Generate tests/e2e/checkout.spec.ts:
   - // Initialization: open search page
   - // User actions: search, select product, add to cart
   - // Verification: cart badge increments
   - // User actions: proceed to checkout
   - // Verification: total matches expected

Important:
- Use page.setContent(...) in beforeEach to simulate the UI for this exercise.
- The test should read like a business scenario, not like a list of selectors.