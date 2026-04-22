# Practice 1 — Playwright CI/CD Workflow

## Completed
- Added GitHub Actions workflow at `.github/workflows/playwright-tests.yml`
- Configured Playwright parallel execution via `workers` in `playwright.config.ts`
- Triggered CI workflow using a pull request targeting the `main` branch
- Verified successful pipeline execution in GitHub Actions
- Verified dependency installation, browser setup, and test execution in CI
- Verified artifact upload functionality (HTML report and traces)

## Artifacts
- HTML report from a failed test run was successfully generated and reviewed
- Report saved locally as: `docs/playwright-html-report-1.md`

## Notes
- Training test files were excluded from CI execution using `testIgnore` in Playwright config
- Workflow runs automatically on pull requests targeting `main`
- CI environment uses parallel execution (workers) and caching for performance optimization

## Result
- CI/CD pipeline is fully configured and operational
- Automated Playwright tests run on every pull request to `main`
- Test results are reproducible and visible via CI logs and artifacts
- Project is ready for further CI/CD enhancements (optimization, notifications, scaling)