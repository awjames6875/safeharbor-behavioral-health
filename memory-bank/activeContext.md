# Active Context

**Last Updated:** 2025-12-10
**Current Sprint:** Testing Infrastructure Implementation

## What I'm Working On Right Now

Implementing comprehensive testing infrastructure for SafeHarbor Behavioral Health website. Created complete E2E testing suite with Playwright, unit testing with Vitest, accessibility testing, and security compliance tests. Fixed critical bug: `react-countup` dependency was missing (AnimatedStats.tsx was importing it but package.json didn't include it).

## Modified Files (This Session)

1. **package.json** - Added 11 test scripts + 11 testing dependencies + fixed react-countup bug
2. **playwright.config.ts** - NEW: Playwright E2E test configuration with 5 browser projects
3. **vitest.config.ts** - NEW: Vitest unit test configuration with JSdom environment
4. **tests/setup.ts** - NEW: Test environment setup with Next.js mocks

## New Test Files Created (This Session - 10 files)

### Critical E2E Tests (5 files in tests/e2e/critical/):
1. **crisis-support.spec.ts** - 988 banner visibility, crisis page, FloatingActions crisis button
2. **homepage.spec.ts** - Homepage load time, console errors, HeroSection, TestimonialCarousel, Medicaid messaging
3. **navigation.spec.ts** - Main nav, Services/Locations dropdowns, mobile menu, keyboard accessibility
4. **contact-forms.spec.ts** - Form rendering, required fields, HIPAA notices, form validation
5. **locations.spec.ts** - All 15 location pages load, phone numbers clickable, mobile responsiveness

### Feature Tests (2 files in tests/e2e/features/):
6. **services.spec.ts** - All 13 service pages load, Medicaid messaging, CTAs, Body & Brain program
7. **voice-agent.spec.ts** - VoiceAgent button, opens/closes, greeting, text input, crisis keywords

### Compliance Tests (2 files in tests/e2e/compliance/):
8. **accessibility.spec.ts** - Heading hierarchy, alt text, form labels, keyboard navigation, color contrast
9. **security.spec.ts** - No CARF claims, HIPAA messaging, 988 accessibility, tel: links format, external links

### Unit Tests (1 file in src/__tests__/data/):
10. **locations.test.ts** - Verifies 15 locations protected, no duplicates, URL-safe slugs, required fields

## Dependencies Installed (13 packages)

**devDependencies:**
- @playwright/test@^1.57.0
- @testing-library/jest-dom@^6.9.1
- @testing-library/react@^14.3.1
- @testing-library/user-event@^14.6.1
- @vitejs/plugin-react@^4.7.0
- @vitest/coverage-v8@^1.6.1
- axe-core@^4.11.0
- axe-playwright@^1.2.3
- jsdom@^23.2.0
- vitest@^1.6.1

**dependencies (BUG FIX):**
- react-countup@^6.5.3 (was missing - fixes AnimatedStats.tsx console errors)

## Test Scripts Added to package.json

- `npm run test` - Run Vitest in watch mode
- `npm run test:unit` - Run unit tests once
- `npm run test:unit:watch` - Run unit tests in watch mode
- `npm run test:unit:coverage` - Run with coverage report
- `npm run test:e2e` - Run all E2E tests (Playwright)
- `npm run test:e2e:ui` - Run E2E tests in UI mode
- `npm run test:e2e:headed` - Run E2E tests with visible browser
- `npm run test:e2e:debug` - Debug E2E tests
- `npm run test:e2e:report` - View Playwright HTML report
- `npm run test:critical` - Run only critical priority tests
- `npm run test:all` - Run all tests (unit + E2E)

## Test Coverage Summary

**Created tests for:**
- ✅ Crisis support features (highest priority - 988 banner, crisis page)
- ✅ Homepage core features (load time, console errors, components)
- ✅ Navigation system (desktop/mobile, dropdowns, keyboard)
- ✅ Contact forms (validation, HIPAA notices, submission)
- ✅ All 15 location pages (load status, phone numbers, responsiveness)
- ✅ All 13 service pages (child-therapy, teen-counseling, etc.)
- ✅ VoiceAgent AI chat (open/close, greeting, crisis response)
- ✅ Accessibility (heading hierarchy, alt text, form labels, keyboard nav)
- ✅ Security compliance (no CARF claims, HIPAA messaging, tel: links)
- ✅ Location data protection (verify 15 locations, no duplicates, immutable)

## Known Issues/Blockers

**Blockers:**
- Playwright browsers not yet installed (need to run `npx playwright install`)
- Tests not yet executed (need to run `npm run test:critical` to verify)

**Expected Test Failures (documented):**
- Privacy policy page doesn't exist (/privacy returns 404) - referenced in footer and forms
- Terms of service page doesn't exist (/terms returns 404) - referenced in footer

**Known Warnings:**
- Google Gemini API key exposed client-side (NEXT_PUBLIC_GEMINI_API_KEY)
- No cookie consent banner (GDPR/CCPA compliance missing)

## Next Immediate Steps

1. Install Playwright browsers: `npx playwright install`
2. Run critical test suite: `npm run test:critical`
3. Fix any failing tests (expect some failures for known issues)
4. Run full E2E test suite: `npm run test:e2e`
5. Run unit tests: `npm run test:unit`
6. Review test coverage report
7. Create privacy policy and terms pages (currently missing)
8. Consider moving Google Gemini API to server-side to hide key

## Questions/Decisions Needed

1. Should we create privacy policy and terms of service pages now or after testing?
2. Should Google Gemini API key be moved to server-side API route?
3. Do we need additional tests beyond the 10 test files created?
4. Should tests run in CI/CD (GitHub Actions) or only locally?
5. What is the acceptable test pass rate? (95%+ excluding known failures?)

## Testing Infrastructure Details

**Test Framework Stack:**
- **Primary:** Playwright (E2E, cross-browser: Chrome/Firefox/Safari, mobile testing)
- **Secondary:** Vitest (unit tests, component tests, fast execution)
- **Accessibility:** axe-core + axe-playwright (WCAG compliance)
- **Coverage:** Vitest v8 coverage provider

**Test Organization:**
```
tests/
  ├── e2e/
  │   ├── critical/          (5 tests - MUST PASS)
  │   ├── features/          (2 tests - Service pages, VoiceAgent)
  │   └── compliance/        (2 tests - Accessibility, Security)
  └── setup.ts

src/__tests__/
  └── data/
      └── locations.test.ts  (1 test - Location data protection)
```

**Test Priorities:**
- P0 (Critical): Crisis support, homepage, navigation, forms, locations
- P1 (High): Services, VoiceAgent, mobile responsiveness
- P2 (Compliance): Accessibility, security audits

## Performance Notes

- Playwright tests run in parallel (5 browser configurations)
- Test timeout: 30 seconds per test
- Retry on failure: 2 retries in CI, 0 in local dev
- Screenshots/videos captured on failures only
- Dev server auto-starts before tests (no manual setup needed)

## Environment Status

- Development server: Ready (`npm run dev` on port 3000)
- Build status: Last successful (no build since testing added)
- Test suite: Ready to run (browsers need install first)
- Coverage: Not yet measured (will run after first test execution)
