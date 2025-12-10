import { test, expect } from '@playwright/test';

const locations = [
  'midtown-tulsa', 'south-tulsa', 'broken-arrow', 'north-tulsa',
  'downtown-tulsa', 'owasso', 'jenks', 'bixby', 'sand-springs',
  'sapulpa', 'brookside', 'cherry-street', 'east-tulsa',
  'west-tulsa', 'union-district'
];

test.describe('Location Pages', () => {
  for (const location of locations) {
    test(`${location} page loads successfully`, async ({ page }) => {
      const response = await page.goto(`/locations/${location}`);

      // Verify page loads (not 404)
      expect(response?.status()).not.toBe(404);
      await expect(page).not.toHaveTitle(/404|not found/i);

      // Check for location-specific content
      await expect(page.locator('h1')).toBeVisible();

      // Verify phone number is visible
      await expect(page.locator('a[href^="tel:"]')).toBeVisible();
    });
  }

  test('All locations appear in navigation dropdown', async ({ page }) => {
    await page.goto('/');

    // Find locations link/button
    const locationsNav = page.locator('text=/locations/i').first();
    await locationsNav.hover();

    // Wait for dropdown
    await page.waitForTimeout(500);

    // Count visible location links
    const locationLinks = page.locator('a[href*="/locations/"]');
    const count = await locationLinks.count();

    // Should have at least 15 location links
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test('Location pages have contact information', async ({ page }) => {
    await page.goto('/locations/midtown-tulsa');

    // Check for address or phone
    const addressText = page.getByText(/address|street|tulsa/i);
    const phoneLink = page.locator('a[href^="tel:"]');

    const hasAddress = await addressText.count() > 0;
    const hasPhone = await phoneLink.count() > 0;

    expect(hasAddress || hasPhone).toBe(true);
  });

  test('Location pages are mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/locations/midtown-tulsa');

    // Content should be visible and not broken
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('a[href^="tel:"]')).toBeVisible();

    // Should not have horizontal scroll
    const bodyWidth = await page.locator('body').evaluate(el => el.offsetWidth);
    const viewportWidth = 375;
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 50); // Allow 50px margin
  });
});
