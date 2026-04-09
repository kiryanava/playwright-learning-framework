# Safe AI Usage

## Assignment 1 — AI Self-Review

Prompt for refactoring:

You are a Senior QA Automation Engineer.

Goal:
Refactor this Page Object by merging repetitive tab click methods into one parameterized method.

Context:
- Stack: TypeScript + Playwright
- Pattern: Page Object Model
- Current methods:
  - clickTabOverview()
  - clickTabSettings()
  - clickTabSecurity()

Task:
1. Replace repetitive methods with one generic method:
   clickTabByName(tabName: string)
2. Keep selector logic unchanged.
3. Update related test file to use the new method.
4. Preserve behavior and readability.
5. Return only the updated files.


Self-checking: 

You are a Senior QA Automation Engineer.

Goal:
Review the following AI-generated refactor for correctness and consistency before commit.

Inputs:

Refactored page object:
AccountPage.ts

Refactored test file:
account.spec.ts

Check:
1. Does the refactor preserve original logic and behavior?
2. Does the new parameterized method correctly replace all previous methods?
3. Are selectors stable and correctly scoped?
4. Are imports valid and paths correct?
5. Did the tests update correctly to use the new method?
6. Are there any risks, bugs, naming issues, or missing edge cases?
7. Suggest improvements only if needed.

Output:
A short Self-Review Report with:
- Correct observations
- Risks
- Suggested improvements
- Final verdict: safe to commit / needs fixes


## Assignment 2 — Verify Refactor Consistency

Prompt Used: 

You are a Senior QA Automation Engineer.

Goal:
Verify that the recent refactor did not break consistency between the Page Object and related tests.

Inputs:

Updated Page Object:
src/pages/AccountPage.ts

Related test file:
tests/account.spec.ts

Tasks:
1. Identify outdated method calls or missing references in the tests.
2. Check whether all old methods were updated correctly after refactor.
3. Point out any mismatches between the Page Object and test file.
4. Suggest the exact fixes needed.
5. If possible, provide the corrected version of the test file.

Output format:
- Issues found
- Missing/outdated references
- Corrected test file
- Final verdict: consistent / inconsistent

