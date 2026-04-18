// path: src/utils/dateHelper.ts
import { Page } from '@playwright/test';

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString();
}