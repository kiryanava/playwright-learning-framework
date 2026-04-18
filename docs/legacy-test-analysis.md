# Legacy Test Analysis — Chapter 2

## File under analysis
Project file: `tests/e2e/main.navigation.spec.ts`  
Course task reference: `tests/main.navigation.spec.ts`

## Scope
This report analyzes the degraded navigation spec against the manual test case expectations:

- Docs link is visible
- API link is visible
- Community link is visible
- links are accessible by role and name
- links navigate correctly

## Prioritized checklist of AI-detected issues

### 1. Synchronization — fixed wait used
**Issue:** The spec uses `await page.waitForTimeout(2000)`.

**Category:** synchronization, flakiness

**Impact:**  
Fixed waits increase runtime and make tests flaky. They do not wait for a real UI state and may still fail on slow or unstable environments.

---

### 2. Coverage — no real navigation validation
**Issue:** The spec checks `href` attributes but does not verify that clicking the links actually navigates to the expected destination.

**Category:** coverage

**Impact:**  
Broken routing, wrong targets, or client-side navigation problems could go unnoticed. The test validates markup, not real behavior.

---

### 3. Accessibility — missing role/name-based assertions
**Issue:** The spec does not verify links using accessible role and name, for example `getByRole('link', { name: 'Docs' })`.

**Category:** accessibility, coverage

**Impact:**  
The test does not confirm that navigation is accessible to assistive technologies. This weakens confidence in accessibility-related behavior.

---

### 4. Page Object inconsistency — direct selector used in spec
**Issue:** The Docs link is validated through a direct selector in the test instead of the existing Page Object method.

**Category:** Page Object consistency, maintainability

**Impact:**  
This breaks the abstraction pattern. Locator changes would require updates in multiple places, increasing maintenance cost.

---

### 5. Selector quality — brittle ID/CSS selector
**Issue:** The spec uses a direct selector like `#docs` instead of a stable Page Object locator.

**Category:** selector quality

**Impact:**  
ID/CSS selectors are more fragile and tightly coupled to markup details. Minor DOM refactors can break the test even when functionality still works.

---

### 6. Coverage — no explicit verification of link text content
**Issue:** The spec verifies visibility and `href`, but not the actual visible labels like `Docs`, `API`, and `Community`.

**Category:** coverage

**Impact:**  
The test may miss issues where links are visible but have incorrect or missing labels.

---

### 7. Maintainability — mocked page setup limits realism
**Issue:** The spec uses `page.setContent(...)` instead of interacting with a real page.

**Category:** readability / maintainability, realism

**Impact:**  
This is acceptable for a learning exercise, but it reduces confidence that the real application navigation matches the test setup.

---

### 8. Coverage — missing checks for interactivity/state
**Issue:** The spec does not verify whether links are focusable, enabled, or interactable beyond visibility.

**Category:** coverage, accessibility

**Impact:**  
A link may be visible but still unusable for the user.

---

### 9. Readability / maintainability — mixed locator strategy
**Issue:** Some checks use Page Object methods, while others use raw selectors directly in the spec.

**Category:** readability / maintainability

**Impact:**  
Mixed styles make the spec harder to read, harder to refactor, and easier to break during future UI changes.

---

## Additional findings the AI did not emphasize enough

### 1. The spec previously had a method-call risk
During earlier iterations, the page-object methods were referenced without `()` instead of being called.  
This is a maintainability risk because it can turn locator access into runtime errors.

**Category:** readability / maintainability

**Impact:**  
Method/property confusion can cause false failures and wastes debugging time.

---

### 2. The test does not verify exact navigation inventory
The spec checks that expected links exist, but it does not verify whether the navigation contains only the expected entries.

**Category:** coverage

**Impact:**  
Unexpected extra links could appear without being detected.

---

### 3. Redundancy risk for future growth
If similar navigation checks are added in multiple files, this scenario may become duplicated rather than centralized in one reusable navigation check.

**Category:** redundancy risk

**Impact:**  
Execution time and maintenance effort can grow unnecessarily.

---

### 4. No assertion of semantic navigation container
The spec checks visibility of the nav block, but does not verify semantic navigation behavior beyond one container locator.

**Category:** accessibility, coverage

**Impact:**  
Markup could visually look correct while still being semantically weak.

---

## Short impact notes

- **Fixed waits** → flakiness, slower runtime
- **ID selector in spec** → brittle to markup changes
- **Mixed locator strategy** → lower maintainability
- **No role/name assertions** → accessibility risk
- **No real navigation click validation** → incomplete coverage
- **No exact navigation inventory check** → hidden UI regressions possible
- **Potential duplication risk** → wasted maintenance effort

---

## Conclusion
The degraded spec shows typical legacy-test problems:

- brittle selector usage
- fixed synchronization
- inconsistent Page Object usage
- incomplete accessibility coverage
- incomplete navigation validation
- maintainability risks as the suite grows

## Chapter note
**No code changes applied in Chapter 2.**

The degraded spec remains intentionally unfixed in this chapter and will be repaired/refactored in Chapter 3.