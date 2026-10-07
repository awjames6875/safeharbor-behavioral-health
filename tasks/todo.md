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
