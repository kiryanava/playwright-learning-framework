# Practice 3 — Security Scan and GitHub Pages

## What I added
- a `security-scan` job in `.github/workflows/playwright-tests.yml`
- dependency scanning with `yarn audit`
- a short security summary in GitHub Actions
- publishing of Playwright HTML report to GitHub Pages

## Result
- Playwright tests run in CI
- security scan runs in parallel
- HTML report is published as a web page

## GitHub Pages
https://kiryanava.github.io/playwright-learning-framework/

## Notes
- Teams notification step is present in the workflow
- real Teams delivery was not tested because of workspace permission limits
- training test files are excluded from CI