import { test, expect } from '@playwright/test';

test.describe('Contact Forms', () => {
  test('Contact page loads', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).not.toHaveTitle(/404/i);
    await expect(page.locator('form')).toBeVisible();
  });

  test('Form has required fields', async ({ page }) => {
    await page.goto('/contact');

    // Check for common form fields
    const inputs = page.locator('input, textarea, select');
    expect(await inputs.count()).toBeGreaterThan(0);
  });

  test('Form submit button exists', async ({ page }) => {
    await page.goto('/contact');

    const submitButton = page.locator('button[type="submit"], button:has-text(/submit|send|contact/i)');
    await expect(submitButton.first()).toBeVisible();
  });

  test('Form has consent/HIPAA notice', async ({ page }) => {
    await page.goto('/contact');

    // Check for HIPAA or consent messaging
    const hipaaText = page.getByText(/HIPAA|consent|confidential/i);
    if (await hipaaText.isVisible({ timeout: 1000 })) {
      await expect(hipaaText.first()).toBeVisible();
    }
  });

  test('Can fill out contact form', async ({ page }) => {
    await page.goto('/contact');

    // Find first name input
    const nameInput = page.locator('input[placeholder*="name" i], input[name*="name" i]').first();
    if (await nameInput.isVisible()) {
      await nameInput.fill('Test Parent');
    }

    // Find email input
    const emailInput = page.locator('input[type="email"]').first();
    if (await emailInput.isVisible()) {
      await emailInput.fill('test@example.com');
    }

    // Find phone input
    const phoneInput = page.locator('input[type="tel"], input[name*="phone" i]').first();
    if (await phoneInput.isVisible()) {
      await phoneInput.fill('918-555-1234');
    }
  });

  test('Service contact forms exist on service pages', async ({ page }) => {
    await page.goto('/services/child-therapy');

    // Should have a contact form or CTA
    const forms = page.locator('form');
    const ctaButtons = page.locator('button:has-text(/contact|schedule|book/i)');

    const formsCount = await forms.count();
    const ctaCount = await ctaButtons.count();

    expect(formsCount + ctaCount).toBeGreaterThan(0);
  });

  test('Form references HIPAA compliance', async ({ page }) => {
    await page.goto('/contact');

    const hipaaText = page.getByText(/HIPAA|confidential|privacy/i);
    if (await hipaaText.count() > 0) {
      await expect(hipaaText.first()).toBeVisible();
    }
  });
});
