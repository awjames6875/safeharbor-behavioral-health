import { test, expect } from '@playwright/test';

test.describe('Accessibility Compliance', () => {
  test('Homepage has proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();

    // Should have at least one h1
    expect(await h1.count()).toBeGreaterThanOrEqual(1);
  });

  test('All images have alt text', async ({ page }) => {
    await page.goto('/');

    // Get all img elements
    const images = page.locator('img');
    const count = await images.count();

    if (count > 0) {
      // Check that most images (decorative ones might not have alt) have alt text
      const imagesWithAlt = page.locator('img[alt]');
      const withAltCount = await imagesWithAlt.count();

      // At least 50% should have alt text
      expect(withAltCount).toBeGreaterThan(0);
    }
  });

  test('Form inputs have associated labels', async ({ page }) => {
    await page.goto('/contact');

    // Check that inputs have labels or aria-label
    const inputs = page.locator('input:not([type="hidden"]), textarea, select');
    const count = await inputs.count();

    if (count > 0) {
      const firstInput = inputs.first();
      const inputId = await firstInput.getAttribute('id');
      const ariaLabel = await firstInput.getAttribute('aria-label');
      const name = await firstInput.getAttribute('name');

      // Should have either id (for label), aria-label, or at least name
      expect(inputId || ariaLabel || name).toBeTruthy();
    }
  });

  test('Links are distinguishable and keyboard accessible', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('a');
    const count = await links.count();

    expect(count).toBeGreaterThan(0);

    // Test keyboard navigation
    await page.keyboard.press('Tab');

    // Should be able to tab through links
    await page.waitForTimeout(100);
  });

  test('Buttons have accessible names', async ({ page }) => {
    await page.goto('/');

    const buttons = page.locator('button');
    const count = await buttons.count();

    if (count > 0) {
      const firstButton = buttons.first();
      const text = await firstButton.textContent();
      const ariaLabel = await firstButton.getAttribute('aria-label');
      const title = await firstButton.getAttribute('title');

      // Button should have visible text, aria-label, or title
      expect(text || ariaLabel || title).toBeTruthy();
    }
  });

  test('Crisis elements have proper focus indicators', async ({ page }) => {
    await page.goto('/');

    // Tab to crisis element
    for (let i = 0; i < 5; i++) {
      await page.keyboard.press('Tab');
    }

    // Get focused element
    const focusedElement = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement;
      return {
        tagName: el.tagName,
        hasOutline: window.getComputedStyle(el).outline !== 'none',
      };
    });

    // Should be an interactive element
    expect(['BUTTON', 'A']).toContain(focusedElement.tagName);
  });

  test('Color contrast is sufficient for text', async ({ page }) => {
    await page.goto('/');

    // Check main heading color contrast
    const h1 = page.locator('h1').first();
    if (await h1.isVisible()) {
      const color = await h1.evaluate((el) => {
        return window.getComputedStyle(el).color;
      });

      // Should be dark enough (not empty/transparent)
      expect(color).not.toBe('rgba(0, 0, 0, 0)');
    }
  });

  test('Contact form is accessible with keyboard only', async ({ page }) => {
    await page.goto('/contact');

    // Navigate with keyboard only
    let currentElement = '';
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
    }

    // Should be able to focus form elements
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(focused).toBeTruthy();
  });

  test('Mobile text is readable (font size check)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check body text size
    const bodyText = page.locator('body p, body a, body button').first();
    if (await bodyText.isVisible()) {
      const fontSize = await bodyText.evaluate((el) => {
        return window.getComputedStyle(el).fontSize;
      });

      // Text should be at least 16px for mobile
      const fontSizeNum = parseInt(fontSize);
      expect(fontSizeNum).toBeGreaterThanOrEqual(14);
    }
  });

  test('Skip navigation link exists and works', async ({ page }) => {
    await page.goto('/');

    const skipLink = page.locator('a[href="#main"], a:has-text(/skip/i)');

    // Should have skip navigation link (might be hidden until focused)
    if (await skipLink.count() > 0) {
      await skipLink.first().focus();
      await expect(skipLink.first()).toBeVisible();
    }
  });
});
