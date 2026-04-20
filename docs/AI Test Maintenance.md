# Introduction – Why Test Maintenance Matters

## Manual Test Case — Main Navigation

### Title
Main page should display navigation links: Docs, API, Community

### Preconditions
Main page is open

### Steps
1. Open the main page
2. Locate the main navigation section
3. Verify that the "Docs" link is visible
4. Verify that the "API" link is visible
5. Verify that the "Community" link is visible

### Expected Result
The main navigation is visible and contains links:
- Docs
- API
- Community

Prompt used: 
You are a Senior QA Automation Engineer expert in TypeScript and Playwright E2E testing.
Write concise, maintainable TypeScript.

Project & framework:
- Stack: TypeScript + Playwright
- Pattern: Page Object Model
- Structure:
  - src/pages/MainPage.ts
  - tests/e2e/main.navigation.spec.ts

Rules:
- Reuse the existing MainPage from src/pages/MainPage.ts
- Do not create duplicate page objects
- Use stable selectors only
- Keep locators inside the page class, not inside the test
- Add comments in the test:
  - // Initialization
  - // User actions
  - // Verification
- Output only final code with file header:
  // path: tests/e2e/main.navigation.spec.ts

Manual test case:
Title: Main page should display navigation links: Docs, API, Community

Steps:
1. Open the main page
2. Locate the main navigation section
3. Verify that the "Docs" link is visible
4. Verify that the "API" link is visible
5. Verify that the "Community" link is visible

Expected Result:
The main navigation is visible and contains links:
- Docs
- API
- Community

DOM context:
<nav data-testid="main-nav">
  <a href="/docs" data-testid="nav-docs">Docs</a>
  <a href="/api" data-testid="nav-api">API</a>
  <a href="/community" data-testid="nav-community">Community</a>
</nav>

Important:
- Use page.setContent(...) in beforeEach for this exercise
- Also add one extra validation:
  verify that each link has the correct href

