# Progress Tracker

**Last Updated:** 2026-10-08
**Current Sprint:** Scroll Harbor hero (homepage) + truth/SEO cleanup
**Detailed task log:** `tasks/todo.md` (audit rounds) and `tasks/scroll-harbor-spec.md` (hero)

## In Progress: Scroll Harbor hero (`feat/scroll-harbor-hero`)
- [x] Character sheet, storyboard, spec approved
- [x] Scene stills (7) and 480p rehearsal clips (6) generated
- [x] Script approved (softened substance line, judgment-free promise, tagline reveal at the end)
- [x] ScrollHarborHero component built and wired into the homepage
- [x] Mobile posters + lazy video loading (mobile Lighthouse 71 -> 88, desktop 100)
- [x] Committed and pushed (`79d1d30`, `cb4f636`)
- [x] Adam approved the captioned preview (2026-10-08)
- [x] Final 1080p render of the 6 clips (270 credits, 104.5 left)
- [x] Encode (crf 26, ~18 MB total), replace `public/scroll-harbor/c1-c6.mp4`, seam + size check
- [x] Build passes, committed `c4f0681` (not pushed)
- [ ] Lighthouse re-check with 1080p clips, push, PR decision (Adam)

## Done Since Last Update (2025-12 to 2026-10)
- [x] Canonicals fixed (www, self-canonicals on every page)
- [x] Fake phone numbers replaced with (918) 553-5746
- [x] Truth fixes: no medication management / psychiatric services, all ages, live insurance only (Medicaid/SoonerCare, BCBS, Aetna, United Healthcare), "48 hours once intake paperwork is completed"
- [x] EasyEnrollment links removed; "Safe Harbor" brand spelling
- [x] 3 competitor-gap blog posts added
- [x] ICM layer (root CLAUDE.md router, CONTEXT.md, 01_audit / 02_fix / 03_verify rooms)

## Backlog

### High
- [ ] Round 5: adult mental health + adult recovery (IOP, no MAT) pages; homepage "Adults / Recovery" card 404s today. Waiting on Adam's IOP answers.
- [ ] Privacy policy page (still missing)
- [ ] Terms of service page (still missing)
- [ ] Move Gemini key server-side (`NEXT_PUBLIC_GEMINI_API_KEY` in `VoiceAgent.tsx`)
- [ ] Rewrite old blog posts' psychiatric claims and invented case studies (`tasks/blog-rewrites.md`)
- [ ] `/services/adhd-treatment` in sitemap 404s (remove or build)

### Medium
- [ ] Cookie consent banner
- [ ] Connect site to GHL with VAPI voice agent
- [ ] Security headers
- [ ] Run the Playwright/Vitest suites from 2025-12 (never confirmed run)

## Launch Readiness
Not re-scored since 2025-12-10 (was 78%). Re-score after the hero ships.
