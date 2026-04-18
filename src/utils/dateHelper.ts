// path: src/utils/dateHelper.ts
import { Page } from '@playwright/test';

export function formatDate(date: string | null |undefined ): string {
  if (!date) return '';
  return new Date(date).toLocaleDateString();
}