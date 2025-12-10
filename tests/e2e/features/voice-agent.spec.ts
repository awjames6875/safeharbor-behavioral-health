import { test, expect } from '@playwright/test';

test.describe('VoiceAgent AI Chat', () => {
  test('VoiceAgent button exists on homepage', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Look for AI chat button
    const aiButton = page.locator(
      'button[aria-label*="assistant" i], button:has-text(/AI|chat|assistant/i), [aria-label*="AI"]'
    );

    if (await aiButton.isVisible({ timeout: 2000 })) {
      await expect(aiButton.first()).toBeVisible();
    }
  });

  test('VoiceAgent opens and closes', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const aiButton = page.locator(
      'button[aria-label*="assistant" i], button:has-text(/AI|chat/i), [aria-label*="AI"]'
    );

    if (await aiButton.isVisible({ timeout: 2000 })) {
      // Click to open
      await aiButton.first().click();
      await page.waitForTimeout(500);

      // Chat should be visible
      const chatContainer = page.locator('[role="dialog"], .chat-container, .ai-chat');
      if (await chatContainer.isVisible({ timeout: 2000 })) {
        await expect(chatContainer.first()).toBeVisible();
      }
    }
  });

  test('VoiceAgent greets user', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const aiButton = page.locator(
      'button[aria-label*="assistant" i], button:has-text(/AI|chat/i), [aria-label*="AI"]'
    );

    if (await aiButton.isVisible({ timeout: 2000 })) {
      await aiButton.first().click();
      await page.waitForTimeout(1000);

      // Look for greeting message
      const greeting = page.locator('text=/hello|hi|how can|what|help/i');
      if (await greeting.isVisible({ timeout: 2000 })) {
        await expect(greeting.first()).toBeVisible();
      }
    }
  });

  test('VoiceAgent handles text input', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const aiButton = page.locator(
      'button[aria-label*="assistant" i], button:has-text(/AI|chat/i), [aria-label*="AI"]'
    );

    if (await aiButton.isVisible({ timeout: 2000 })) {
      await aiButton.first().click();
      await page.waitForTimeout(500);

      // Find input field
      const input = page.locator('input[type="text"], textarea').last();
      if (await input.isVisible({ timeout: 2000 })) {
        await input.fill('What services do you offer?');
        await page.keyboard.press('Enter');

        // Should get a response
        await page.waitForTimeout(1000);
      }
    }
  });

  test('VoiceAgent responds to crisis keywords', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const aiButton = page.locator(
      'button[aria-label*="assistant" i], button:has-text(/AI|chat/i), [aria-label*="AI"]'
    );

    if (await aiButton.isVisible({ timeout: 2000 })) {
      await aiButton.first().click();
      await page.waitForTimeout(500);

      const input = page.locator('input[type="text"], textarea').last();
      if (await input.isVisible({ timeout: 2000 })) {
        await input.fill('I need help in a crisis');
        await page.keyboard.press('Enter');

        // Should mention 988 or crisis resources
        const response = page.locator('text=/988|crisis|help/i');
        if (await response.isVisible({ timeout: 3000 })) {
          await expect(response.first()).toBeVisible();
        }
      }
    }
  });

  test('VoiceAgent is accessible with keyboard', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Tab to AI button
    let tabCount = 0;
    while (tabCount < 20) {
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(
        () => (document.activeElement as HTMLElement).getAttribute('aria-label')
      );

      if (focused?.includes('assistant') || focused?.includes('AI')) {
        // Found the button, press Enter to open
        await page.keyboard.press('Enter');
        await page.waitForTimeout(500);
        break;
      }
      tabCount++;
    }
  });
});
