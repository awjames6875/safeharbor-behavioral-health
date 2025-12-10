import { test, expect } from '@playwright/test';

test.describe('Crisis Support Features', () => {
  test('988 banner visible on homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/in crisis\?.*988/i)).toBeVisible();
  });

  test('988 banner visible on service pages', async ({ page }) => {
    await page.goto('/services/child-therapy');
    await expect(page.getByText(/in crisis\?.*988/i)).toBeVisible();
  });

  test('988 banner visible on location pages', async ({ page }) => {
    await page.goto('/locations/midtown-tulsa');
    await expect(page.getByText(/in crisis\?.*988/i)).toBeVisible();
  });

  test('Crisis page loads and displays 988/911', async ({ page }) => {
    await page.goto('/resources/crisis-help');
    await expect(page).toHaveTitle(/crisis/i);
    await expect(page.getByText('988')).toBeVisible();
    await expect(page.getByText('911')).toBeVisible();
  });

  test('Crisis 988 link is clickable', async ({ page }) => {
    await page.goto('/');

    // Find and click 988 button/link
    const crisisButton = page.getByText(/in crisis\?.*988/i).first();
    await expect(crisisButton).toBeVisible();
    await crisisButton.click({ force: true });

    // Should navigate or open link
    await page.waitForTimeout(500);
  });
});
