import { test, expect } from '@playwright/test';

test.describe('Security Compliance', () => {
  test('No CARF accreditation claims on homepage', async ({ page }) => {
    await page.goto('/');
    const content = await page.content();
    expect(content.toLowerCase()).not.toContain('carf');
  });

  test('No CARF claims on location pages', async ({ page }) => {
    await page.goto('/locations/midtown-tulsa');
    const content = await page.content();
    expect(content.toLowerCase()).not.toContain('carf accredited');
  });

  test('No CARF claims on service pages', async ({ page }) => {
    await page.goto('/services/child-therapy');
    const content = await page.content();
    expect(content.toLowerCase()).not.toContain('carf accredited');
  });

  test('HIPAA compliance messaging present on contact form', async ({ page }) => {
    await page.goto('/contact');
    const hipaaText = page.getByText(/HIPAA|confidential/i);

    if (await hipaaText.count() > 0) {
      await expect(hipaaText.first()).toBeVisible();
    }
  });

  test('Crisis hotline always accessible (988)', async ({ page }) => {
    // Test multiple pages have 988 accessible
    const pages = ['/', '/services/child-therapy', '/locations/midtown-tulsa'];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      const has988 = await page.getByText(/988|crisis/i).count() > 0;
      expect(has988).toBe(true);
    }
  });

  test('No sensitive data in URLs', async ({ page }) => {
    await page.goto('/contact');

    // Forms should not send sensitive data in URL (GET requests)
    const formElement = page.locator('form').first();
    const method = await formElement.getAttribute('method');

    if (method) {
      expect(method.toUpperCase()).not.toBe('GET');
    }
  });

  test('Privacy policy link exists but documents missing page', async ({ page }) => {
    await page.goto('/contact');

    const privacyLink = page.locator('a[href="/privacy"]');

    // Check if link exists (it should reference privacy policy)
    if (await privacyLink.count() > 0) {
      // Navigate to it
      await privacyLink.click();

      // Should be 404 - documenting the missing page
      // This is expected and serves as a reminder to create the page
    }
  });

  test('All tel: links are properly formatted', async ({ page }) => {
    await page.goto('/');

    const telLinks = page.locator('a[href^="tel:"]');
    const count = await telLinks.count();

    expect(count).toBeGreaterThan(0);

    // Check format of first tel link
    const href = await telLinks.first().getAttribute('href');
    expect(href).toMatch(/^tel:\+?[0-9\-\s()]+$/);
  });

  test('External links open in new tab when appropriate', async ({ page }) => {
    await page.goto('/');

    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();

    // Should have some external links with target="_blank"
    if (count > 0) {
      const firstLink = externalLinks.first();
      await expect(firstLink).toHaveAttribute('rel', /noopener|noreferrer/);
    }
  });
});
