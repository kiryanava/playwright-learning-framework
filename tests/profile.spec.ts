import { test } from '@playwright/test';
import { ProfilePage } from '../src/pages/ProfilePage';
import { createProfilePage } from './helpers/profileTestHelper';

let profilePage: ProfilePage;

test.describe('Profile Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    profilePage = await createProfilePage(page);
  });

  test('click edit menu item', async ({ page }) => {
    await profilePage.clickMenuByName('edit');
  });

  test('click delete menu item', async ({ page }) => {
    await profilePage.clickMenuByName('delete');
  });

  test('click archive menu item', async ({ page }) => {
    await profilePage.clickMenuByName('archive');
  });
});