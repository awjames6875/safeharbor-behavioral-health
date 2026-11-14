# Audit fixes 1–2 (branch fix/audit-critical)

Truth rule: one office phone (918) 553-5746. Canonical host: https://www.safeharborbehavioralhealth.com. Never push to main.

## Item 1: Canonicals (CANON-1)
- [x] layout.tsx: metadataBase -> www; remove site-wide `canonical: '/'`
- [x] Add self-canonical to the 27 pages without one (blog/[slug] via metadata function)
- [x] Hard-coded absolute non-www canonicals -> relative paths (6 files)
- [x] resources/crisis canonical (wrong domain) -> /resources/crisis
- [x] Hard-coded openGraph.url host -> www

## Item 2: Phones (PHONE-1)
- [x] south-tulsa page 555-0102 -> office number
- [x] midtown page 555-0101 / fax 555-0201 -> office number, drop fax
- [x] resources/crisis 555-0123 (SafeHarbor) -> office number
- [x] ContactSection 391-3606 -> office number
- [x] ParentIntakeForm placeholder -> "Your phone number"
- [x] /locations index + templates show office number (locations.ts untouched)
- [x] blogPosts.ts: remove third-party 587-9471

## Verify
- [x] npm run build + lint
- [x] one www self-referencing canonical on sampled pages
- [x] grep for leftover fake phones
- [x] one commit (files overlap), no push

## Item 3: Leftover non-www URLs (Phase 0 of redesign plan)
- [x] services/page.tsx openGraph.url -> www
- [x] 81 non-www URLs in JSON-LD / breadcrumbs / templates (22 files) -> www
- [x] sitemap.ts + robots.ts already www (no change)
- [x] tsc clean; 0 non-www URLs left in src
- [ ] Adam to confirm: 918-391-3607..3620 are intended per-location numbers (locations.ts, untouched)
- [ ] Adam to confirm: "therapy" wording rule (repo CLAUDE.md vs 2026-09-13 handoff)

## Review
- Root cause of CANON-1: metadataBase was non-www, and layout.tsx set canonical "/" site-wide, so the 27 pages with no canonical all claimed to be the homepage. Fixed both, added self-canonicals (25 new metadata exports + blog + blog/[slug]), made 6 absolute canonicals relative, fixed the wrong-domain crisis canonical, moved og:url hosts to www.
- PHONE-1: replaced fake 555-01xx / 391-36xx / placeholder numbers with (918) 553-5746; /locations index now shows the office number; locations.ts untouched; removed third-party 587-9471 from the teen-depression blog post.
- Verified: tsc clean, npm run build passes, built HTML has one www self-referencing canonical on sampled pages, no 555-0 / 391-36 left in built HTML.
- Notes: `npm run lint` fails on a pre-existing duplicate @next/next plugin (parent-folder node_modules), not related. Third-party (918) 587-9471 remains on /resources/crisis (real crisis resource, not flagged). JSON-LD/breadcrumb non-www URLs left for a later item.

## Batch A (in progress)
- [x] H1-1: Header logo h1 -> div (removes the duplicate H1 on every page)
- [x] TITLE-3 (layout only): "Safe Harbor Behavioral Health" in default title, template, OG, siteName, schema
- [x] NAP-1/NAP-2: full address with Suite 207 in footer
- [x] TRUTH-1 partial: GoogleReviews unmounted from homepage (file kept for real reviews), placeholder verification codes removed
- [ ] TRUTH-1 rest: "medication management" / "psychiatric evaluation" (nav, footer, schema, pages), "ages 3-17", SafeHarborEasyEnrollment links, Cigna/UnitedHealthcare in InsuranceSection, "48 hours" - awaiting owner decision
- [ ] TITLE-3 rest: 38 page titles/H1s still say "SafeHarbor" (about, blog posts, ...)
- Note: scroll-morph-hero.tsx (Unsplash) is imported nowhere, so it does not ship; left alone.

## Batch A, owner decisions applied
- [x] Removed Medication Management and Psychiatric Evaluation (pages deleted; nav, footer, services list, schema, sitemap, location template, data, voice agent)
- [x] Ages: "children, teens, and adults" replaces "ages 3-17" / "ages 5-12"
- [x] Insurance: Medicaid/SoonerCare, Blue Cross Blue Shield, Aetna listed as accepted; Cigna / United Healthcare removed
- [x] Speed claim reworded: "within 48 hours once intake paperwork is completed" (owner-approved; client.json banned_text still flags "48 hours", update it there)
- [x] Substance use recovery support added where the removed services were listed
- [ ] Open: SafeHarborEasyEnrollment links (12 pages), blog posts still mention psychiatric team / medication management, TITLE-3 in 38 page titles

## Round 3 (owner answers)
- [x] client.json (SEO engine): "48 hours"/"48-hour"/United Healthcare no longer banned; United Healthcare added to insurance_live (Cigna stays banned)
- [x] United Healthcare listed as accepted on the homepage insurance section
- [x] SafeHarborEasyEnrollment removed: CTAs now go to /contact (contact page button removed), line removed from llms.txt
- [x] "ages 3–17" (en dash) -> "all ages"
- [x] TITLE-3: "SafeHarbor" -> "Safe Harbor" across src (handles, Therapy Portal URL and locations.ts untouched)
- [x] Blog rewrites proposed in tasks/blog-rewrites.md (not applied)

## ICM setup (2026-10-07_icm-light)
- [x] Root CLAUDE.md slimmed to L0 router (265 lines -> ~50); architecture/commands already live in memory-bank/techContext.md
- [x] Root CONTEXT.md (pipeline, run ID convention, stable vs per-run)
- [x] 01_audit, 02_fix, 03_verify each with their own CONTEXT.md
- [ ] Adam to decide: turn .cursorrules / .clinerules / .windsurfrules / .antigravity/rules.md into one-line pointers to CLAUDE.md (not touched)

### Review
- Applied only the ICM pattern to the change workflow. src/ untouched, no code changes, locations.ts untouched.
- Walk Test: CLAUDE.md -> CONTEXT.md -> memory-bank/activeContext.md = 3 reads to orient.
- Old CLAUDE.md held a duplicated copy of the rules plus long architecture notes; those were removed because techContext.md already covers them.

## Round 4: competitor-gap posts
- [x] Researched 3 Tulsa competitors' 1-3 star Google reviews via Playwright (tasks/competitor-gap-posts.md)
- [x] Added 3 blog posts (48h after paperwork, recovery, insurance + fees), added to sitemap.ts; no "therapy" words
- [x] Blog titles now use the post's own metaTitle (no doubled brand suffix) in blog/[slug]
- [ ] Not done: rewrite of old posts' psychiatric claims and invented case studies (tasks/blog-rewrites.md); VAPI agent claims until it is live

## Round 5: adult + recovery pages (from competitor analysis 2026-10-08)
Why: homepage "Adults / Recovery" card links to /services/adult-mental-health, which 404s. No adult or adult-recovery page exists, so Google has nothing to rank against LifeStance, Valley Hope, Laureate, Parkside, FCS. Facts: NO opioid medication (MAT); IOP unconfirmed — never claim either.
ON HOLD (2026-10-09): Adam asked what IOP is, so IOP is NOT confirmed. Step 2 waits on whether Safe Harbor has ODMHSAS substance-use certification. Step 1 (adult mental health page) can go ahead.

- [x] 1. Create `src/app/services/adult-mental-health/page.tsx` (same structure as the ADHD page): anxiety, depression, trauma, stress, grief, life after incarceration; live insurance; Zoom statewide; same-week
- [ ] 2. ON HOLD: adult recovery page. Adam confirmed no ODMHSAS certification yet (see Round 6)
- [x] 3. Add `adult-mental-health` to `src/app/sitemap.ts`
- [x] 4. Add an adult mental health card to the `src/app/services/page.tsx` list
- [x] 5. Verify: tsc + build, homepage card no longer 404s, grep for "Suboxone|MAT|detox" = 0 on new pages

### Review
- New /services/adult-mental-health: one H1, www self-canonical, 988 banner, 0 IOP/MAT/detox/Suboxone mentions, no "therapy" in visible copy, no medication. Uses the owner-approved "48 hours once intake paperwork is completed" wording.
- Homepage "I Need Help" card now resolves. Added to sitemap and /services list. Build passes.

Not touching: youth substance-abuse page, locations.ts, nav dropdown.

### Questions for Adam (needed so nothing is invented)
- IOP schedule: which days, how many hours, in-person, Zoom, or both?
- IOP insurance: same as the rest (Medicaid, BCBS, Aetna)?
- Adults only (18+)?
- RESOLVED: /services/adhd-treatment now exists (d8e64a8), so keep it in the sitemap.

## Round 6: Adam's answers (2026-10-09)
Answers: IOP 8am-5pm by Zoom; create privacy page; create ADHD page; one phone number everywhere.

- [x] 1. Phones: in `src/data/locations.ts` change only the 15 `phone:` values (918-391-3607..3620) and the matching numbers in the 15 `metaDescription` lines to the office number (918) 553-5746. Nothing else in that file changes. (Adam's explicit instruction.)
- [x] 2. Privacy page: new `src/app/privacy/page.tsx` (plain server page, metadata + canonical `/privacy`, same layout style as `faq/page.tsx`). Covers only what the site really does: contact/intake forms go to GoHighLevel, the voice assistant sends what you say to Google Gemini, phone and email contact, no selling of data, cookies, children, how to reach us. Marked "needs attorney review". Footer link and sitemap entry already exist.
- [x] 3. ADHD page: new `src/app/services/adhd-treatment/page.tsx`, copying the structure of an existing service page. Content: ADHD and focus support for children, teens and adults; behavior strategies, parent coaching, school support, Body & Brain; Zoom statewide; live insurance only. No medication, no "therapy"/"therapist" wording, no invented staff or stats. Homepage card and sitemap already point here.
- [x] 4. Same homepage grid: "Trauma Recovery" card links to `/services/trauma-therapy` (404). Change to `/services/trauma-treatment` (one line in `AnimatedServicesGrid.tsx`).
- [x] 5. Verify: `npm run build`, open /privacy, /services/adhd-treatment, a location page; grep `391-36` = 0.
- [x] 6. Commit on `feat/scroll-harbor-hero` (only these files), no push until Adam says.

### Review
- Phones: 14 location numbers + 14 meta descriptions now (918) 553-5746 (midtown already was). Nothing else in locations.ts changed. 0 "391-36" left in the build.
- /privacy: new page describing only what the site does (GoHighLevel forms + team notification, Google-processed voice assistant, no selling, HIPAA via Notice of Privacy Practices, cookies, children, contact). Needs attorney review; Adam to confirm a Notice of Privacy Practices is given at intake.
- /services/adhd-treatment: new page, no medication, no "therapy" wording, live insurance only, Zoom statewide. Homepage card and sitemap now resolve.
- Trauma card now links to /services/trauma-treatment.
- Build passes (4GB heap); both new pages have www self-canonicals and the 988 banner.
- Still open: Terms and Accessibility footer links (create or remove?).

## Round 7: Terms + Accessibility pages (Adam: "create the terms and accessibility pages")
- [x] 1. Third legal page = rule of three: move the privacy page layout into `src/components/LegalPage.tsx` (title, updated date, intro, sections, contact block). Privacy page keeps its text, just uses the component.
- [x] 2. New `src/app/terms/page.tsx`: website info is not medical advice, using the site does not make you a client, emergencies -> 988/911, voice assistant is automated, insurance coverage varies, links to other sites, no warranties, Oklahoma law. No invented fees or cancellation policies. Needs attorney review.
- [x] 3. New `src/app/accessibility/page.tsx`: goal of WCAG 2.1 AA (not a claim of full compliance), how to get help another way (phone, email, Zoom), how to report a problem. No unverified office access claims.
- [x] 4. Verify: build, both pages render with canonical + 988 banner, footer links resolve. Commit + push the branch.

### Review
- Shared `LegalPage` component now renders /privacy, /terms and /accessibility (same look, one place to change it). Privacy text unchanged.
- Build passes; each page has one H1, a www self-canonical and the 988 banner. All three footer links and sitemap entries now resolve.
- Terms and Privacy need attorney review. Accessibility states a WCAG 2.1 AA goal, not a claim of full compliance.

On hold: IOP / adult recovery page. Adam confirmed 2026-10-09: no ODMHSAS certification yet. Do not build or claim IOP until he has it.

---

# PR #2 merge conflicts (branch feat/scroll-harbor-hero <- origin/main)

Dry run (`git merge-tree`) shows 13 conflicts. Main's change: EasyEnrollment removal. Ours: truth fixes (phone, ages 5+, no psychiatric/medication claims).

Conflicted files:
- Content (11): parents, services/page, and service pages behavioral-assessments, child-therapy, crisis-intervention, family-therapy, group-therapy, parent-coaching, school-support, teen-counseling, trauma-treatment
- Modify/delete (2): services/medication-management, services/psychiatric-evaluation (we deleted, main edited)

## Rules for resolving
- Keep our truth fixes (phone, ages 5+, no psychiatric/medication claims, 988 banner).
- Take main's EasyEnrollment removal.
- Modify/delete: keep them deleted (we removed those services on purpose). Only check main's edit was just the EasyEnrollment removal.
- Never touch `src/data/locations.ts`.

## Steps
- [ ] 1. Protect uncommitted work: `git stash -u` (hero tweak, globals.css, package files, todo.md), pop after the merge
- [ ] 2. `git merge origin/main` on this branch (no push yet)
- [ ] 3. Resolve the 11 content conflicts, one file at a time, showing Adam each diff summary
- [ ] 4. Resolve the 2 modify/delete conflicts (keep deleted)
- [ ] 5. grep for leftover `<<<<<<<`, `EasyEnrollment`, fake phones, "all ages"
- [ ] 6. `npm run build` passes
- [ ] 7. Commit the merge, `git stash pop`, check nothing unrelated got staged
- [ ] 8. Adam OKs, then push the branch (not main); check PR #2 shows mergeable and Vercel passes
- [ ] 9. Lighthouse re-check on the preview, then Adam decides on merge

## Review
(fill in after the work is done)
