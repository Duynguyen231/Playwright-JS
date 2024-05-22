import { test, expect } from '@playwright/test';

test('Basic Test', async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await expect(page.getByRole('button')).toHaveText('Sign in', { timeout: 10000 });
  await expect(page.getByRole('button')).not.toContainText('some text');
})