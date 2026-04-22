import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  testIgnore: [
    'tests/e2e/main.navigation.spec.ts',
    'tests/e2e/main.navigation.refactored.spec.ts',
  ],
  timeout: 30_000,
  fullyParallel: true,
  retries: 0,
  workers: process.env.CI ? 3 : undefined,
  reporter: [['html', { open: 'never' }]],
  use: {
    headless: true,
    trace: 'on-first-retry',
  },
});