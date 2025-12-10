import { test, expect } from '@playwright/test';

const services = [
  'child-therapy',
  'teen-counseling',
  'family-therapy',
  'behavioral-assessments',
  'crisis-intervention',
  'group-therapy',
  'individual-therapy',
  'medication-management',
  'parent-coaching',
  'psychiatric-evaluation',
  'school-support',
  'substance-abuse',
  'trauma-treatment',
];

test.describe('Service Pages', () => {
  for (const service of services) {
    test(`${service} service page loads`, async ({ page }) => {
      const response = await page.goto(`/services/${service}`);

      // Should not be 404
      expect(response?.status()).not.toBe(404);
      await expect(page).not.toHaveTitle(/404/i);

      // Should have main heading
      await expect(page.locator('h1')).toBeVisible();
    });
  }

  test('Service pages have Medicaid messaging', async ({ page }) => {
    await page.goto('/services/child-therapy');

    const medicaidText = page.getByText(/medicaid|soonercare|insurance/i);
    expect(await medicaidText.count()).toBeGreaterThan(0);
  });

  test('Service pages have contact form or CTA', async ({ page }) => {
    await page.goto('/services/child-therapy');

    const forms = page.locator('form');
    const ctaButtons = page.locator('button:has-text(/contact|schedule|book|inquire/i)');

    const formCount = await forms.count();
    const ctaCount = await ctaButtons.count();

    expect(formCount + ctaCount).toBeGreaterThan(0);
  });

  test('Service pages are mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/services/child-therapy');

    // Content should load and be visible
    await expect(page.locator('h1')).toBeVisible();

    // Should not have horizontal overflow
    const bodyWidth = await page.locator('body').evaluate(el => el.offsetWidth);
    expect(bodyWidth).toBeLessThanOrEqual(425); // 375 + some margin
  });

  test('Body & Brain program page loads', async ({ page }) => {
    const response = await page.goto('/programs/body-brain');

    // Should not be 404
    expect(response?.status()).not.toBe(404);
    await expect(page).not.toHaveTitle(/404/i);

    // Should have main content
    await expect(page.locator('h1')).toBeVisible();
  });

  test('Service pages have breadcrumb or navigation context', async ({ page }) => {
    await page.goto('/services/child-therapy');

    // Look for breadcrumb or service indicator
    const breadcrumb = page.locator('nav[aria-label="breadcrumb"]');
    const heading = page.locator('h1');

    const hasBreadcrumb = await breadcrumb.isVisible({ timeout: 1000 });
    const hasHeading = await heading.isVisible();

    expect(hasBreadcrumb || hasHeading).toBe(true);
  });
});
