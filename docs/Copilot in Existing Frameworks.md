#Copilot in Existing Frameworks

## Exercise

Prompt used: 

You are a Senior QA Automation Engineer.

Task:
Extend the existing AccountPage class from src/pages/AccountPage.ts.
Do not create a new Page Object file.

Add a new method for the new checkbox element:
- rememberPreferencesCheckbox() → returns locator for checkbox with data-testid="remember-preferences"

Then update the existing tests/account.spec.ts file to use this new element.

Requirements:
1. Reuse existing files and patterns from this project.
2. Do not create duplicate Page Objects or duplicate test files.
3. Keep locators inside page classes only.
4. Use stable selectors with getByTestId only.
5. Follow the same coding style already used in the project.
6. Add comments in the test:
   - // Initialization
   - // User actions
   - // Verification
7. Output code with file headers in this format:
   // path: <relative_path>

Relevant outerHTML of the new element:
<label>
  <input type="checkbox" data-testid="remember-preferences" />
  Remember preferences
</label>

Refactoring Prompt:
You are a Senior QA Automation Engineer.

Task:
Refactor the existing tests in tests/account.spec.ts.

Current issue:
The checkbox interaction (rememberPreferencesCheckbox) is mixed into an existing test ("click overview tab").

Goal:
1. Do NOT modify the existing tab tests (overview, settings, security).
2. Remove checkbox interaction from the "click overview tab" test.
3. Create a new dedicated test:
   - test name: "enable remember preferences checkbox"
4. In the new test:
   - use AccountPage.rememberPreferencesCheckbox()
   - check the checkbox
   - verify it is checked

Requirements:
- Reuse existing AccountPage class
- Do NOT create new Page Objects
- Keep locators inside page class only
- Use getByTestId only
- Follow existing test style
- Add comments:
  // Initialization
  // User actions
  // Verification

Output:
Return only the updated tests/account.spec.ts file with header:
 // path: tests/account.spec.ts 