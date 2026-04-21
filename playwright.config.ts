import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
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