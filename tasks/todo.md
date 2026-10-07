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
