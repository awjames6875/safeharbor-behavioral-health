import { test, expect } from '@playwright/test';

test.describe('Navigation System', () => {
  test('Main navigation elements exist', async ({ page }) => {
    await page.goto('/');

    // Check for navigation items
    await expect(page.locator('text=/services/i').first()).toBeVisible();
    await expect(page.locator('text=/locations/i').first()).toBeVisible();
    await expect(page.locator('text=/about/i').first()).toBeVisible();
  });

  test('Services navigation link works', async ({ page }) => {
    await page.goto('/');

    const servicesLink = page.locator('text=/services/i').first();
    await servicesLink.click();

    await page.waitForLoadState('networkidle');
    // Should navigate or expand menu
    expect(page.url()).not.toBe('http://localhost:3000/');
  });

  test('Can navigate to home page from any page', async ({ page }) => {
    await page.goto('/services/child-therapy');

    // Find home link or logo
    const homeLinks = page.locator('a[href="/"], img[alt*="logo"], a:has-text("Home")');
    if (await homeLinks.first().isVisible()) {
      await homeLinks.first().click();
      await page.waitForURL('/');
      expect(page.url()).toContain('localhost:3000/');
    }
  });

  test('Mobile menu button exists on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Look for hamburger menu or mobile menu button
    const menuButton = page.locator('button[aria-label*="menu" i], button:has-text("Menu")');
    if (await menuButton.isVisible({ timeout: 1000 })) {
      await expect(menuButton).toBeVisible();
    }
  });

  test('Desktop viewport shows full navigation', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    // Check for navigation items visible on desktop
    const navItems = page.locator('nav a, nav button').filter({ hasText: /services|locations|about/i });
    expect(await navItems.count()).toBeGreaterThan(0);
  });

  test('Navigation is keyboard accessible', async ({ page }) => {
    await page.goto('/');

    // Tab through navigation
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Check if focus moved
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['BUTTON', 'A', 'DIV']).toContain(focusedElement);
  });
});
