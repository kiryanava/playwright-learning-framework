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