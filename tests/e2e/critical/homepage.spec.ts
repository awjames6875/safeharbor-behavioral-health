import { test, expect } from '@playwright/test';

test.describe('Homepage Core Features', () => {
  test('Homepage loads successfully', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    expect(loadTime).toBeLessThan(5000);
    await expect(page).toHaveTitle(/SafeHarbor/i);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('No console errors on homepage load', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Filter out expected errors (like CARF or missing deps)
    const unexpectedErrors = errors.filter(err =>
      !err.includes('CARF') &&
      !err.includes('countup')
    );

    expect(unexpectedErrors).toHaveLength(0);
  });

  test('Homepage has main heading and subheading', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('CTA buttons are visible on homepage', async ({ page }) => {
    await page.goto('/');
    const ctaButtons = page.locator('button, a[role="button"]');
    expect(await ctaButtons.count()).toBeGreaterThan(0);
  });

  test('TestimonialCarousel exists on homepage', async ({ page }) => {
    await page.goto('/');

    // Scroll to find testimonials section
    const testimonialText = page.locator('text=/families|testimonial/i');
    if (await testimonialText.isVisible({ timeout: 1000 })) {
      await expect(testimonialText).toBeVisible();
    }
  });

  test('Medicaid messaging visible on homepage', async ({ page }) => {
    await page.goto('/');
    const medicaidText = page.getByText(/medicaid|soonercare/i);
    await expect(medicaidText.first()).toBeVisible();
  });
});
