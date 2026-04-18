import { test, expect } from '@playwright/test';
import { formatDate } from '../../src/utils/dateHelper';

test.describe('formatDate utility', () => {
  test('should handle valid date', () => {
    const result = formatDate('2024-01-01');
    expect(result).toBeTruthy();
  });

  test('should fail on null', () => {
    const result = formatDate(null as any);
    expect(result).toBe('');
  });

  test('should fail on undefined', () => {
    const result = formatDate(undefined as any);
    expect(result).toBe('');
  });
});