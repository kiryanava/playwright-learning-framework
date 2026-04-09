import { Page } from '@playwright/test';
import { ProfilePage } from '../../src/pages/ProfilePage';

// create helper that:
// - sets page content with menu buttons
// - returns ProfilePage instance
export const createProfilePage = async (page: Page): Promise<ProfilePage> => {
  await page.setContent(`
    <button data-testid="menu-edit">Edit</button>
    <button data-testid="menu-delete">Delete</button>
    <button data-testid="menu-archive">Archive</button>
  `);

  return new ProfilePage(page);
};