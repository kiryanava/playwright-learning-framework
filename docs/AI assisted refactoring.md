\# AI-Assisted Refactoring



\## Assignment 1 — Merge Repetitive Methods



Prompt used:



You are a Senior QA Automation Engineer.



Goal:

Simplify redundant methods in this Page Object by merging similar actions into one parameterized function.



Context:

\- Stack: TypeScript + Playwright

\- Pattern: Page Object Model

\- Methods to refactor:

&#x20; clickMenuEdit()

&#x20; clickMenuDelete()

&#x20; clickMenuArchive()



Task:

1\. Replace all similar methods with a single generic method:

&#x20;  clickMenuByName(option: string)

2\. Keep logic and selectors unchanged.

3\. Return the updated file only.



\## Assignment 2 — Refactor Test Steps



Prompt Used:



You are a Senior QA Automation Engineer.



Goal:

Extract repeated sequences of actions from this Playwright test file into reusable helper functions.



Context:

\- Stack: TypeScript + Playwright

\- Pattern: Page Object Model

\- Repeated steps:

&#x20; - page.setContent(...) with the same HTML

&#x20; - creating ProfilePage instance



Task:

1\. Identify repeated flows in the test file.

2\. Move shared setup into reusable helper logic or beforeEach.

3\. Keep test logic unchanged.

4\. Keep the tests readable.

5\. Return the updated file only.









