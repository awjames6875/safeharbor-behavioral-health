# Active Context

**Last Updated:** 2026-10-17
**Current Sprint:** Scroll Harbor hero (homepage) + truth/SEO cleanup
**Branch:** `feat/scroll-harbor-hero` (pushed to origin, no PR yet). Never push to main.

## What I'm Working On Right Now

Fixed a corrupted client directive at the top of `src/components/home/ScrollHarborHero.tsx` that was preventing the app from compiling (`have y'use client'` instead of `'use client'`). The project now builds successfully again.

Building the scroll-driven "Safe Harbor" story hero for the homepage: a family in a boat goes from storm to harbor as the visitor scrolls (7 scenes, 6 video clips, captions as real HTML text). The component is built and wired in with 480p rehearsal clips. Adam approved the captioned preview on 2026-10-08, so the next step is the final 1080p render of the 6 clips and swapping them in.

## Recent Commits (this branch)

- `79d1d30` feat(home): scroll-driven Safe Harbor story hero (ScrollHarborHero.tsx, posters, homepage wiring, spec, approved script)
- `cb4f636` feat(home): 480p rehearsal clips c1-c6 (placeholders until the 1080p render)
- `1b59022` docs: character sheet, storyboard and spec (`tasks/scroll-harbor-spec.md`)

## Key Files

- `src/components/home/ScrollHarborHero.tsx` - the hero component (one H1, captions in HTML, stills only on phone and reduced motion)
- `public/scroll-harbor/` - posters (desktop + mobile WebP) and clips c1-c6.mp4
- `tasks/scroll-harbor-spec.md` - storyboard, spec, checkpoints
- `tasks/scroll-harbor-refs/` - scene stills (s1-s7.png) and rehearsal clips
- Preview for Adam: `safe-harbor-preview.mp4` on the Desktop

## Results So Far

- Lighthouse: desktop 100, mobile 88 (was 71 before responsive posters and lazy video loading)
- Hero sits below the fixed header; one H1 on the page

## Uncommitted (not part of the hero commits)

- `package.json`, `package-lock.json`, `src/app/globals.css`, `.claude/settings.local.json`
- New `CLAUDE.md` files in `src/components/`, `src/components/home/`, `src/app/api/contact/`, `src/app/services/substance-abuse/`
- Check what these are before staging anything.

## Done 2026-10-09 (built, NOT committed yet; Adam says "commit" first, no push)

- Clips 4 and 5 restored to the smooth 480p rehearsal encodes (the 1080p re-renders had identity drift / a "double step")
- Desktop hero shows the whole picture (`object-contain`, navy side bars); phones unchanged. Full-bleed mockup shown, Adam hasn't decided
- "Need help?" bubble hidden while the story is on screen (`FloatingActions.tsx`)
- New story line "So you reached out for help." (friend feedback); story text keeps clear of the floating chat button on phones (`pr-24`)
- New logo everywhere (`public/logo.webp`, `public/logo.png`, `public/icons/*`; old `logo.jpg` removed); favicons and app icons that used to 404 now exist
- Logo "unravels" (opens and turns) next to the last line at the end of the story

## Done 2026-10-17 (commits d317251, b337959, 538d1d4, f72d14e; not pushed)

- Voice API: model `gemini-2.5-flash` (deprecated, 500s) -> `gemini-flash-latest`. `GEMINI_API_KEY` IS set on Vercel (Production only; add Preview if previews need voice)
- Removed psychiatry keyword/specialty and the 24/7 crisis + psychiatric-emergency FAQ (`services.ts`)
- Ages: floor is 5 everywhere (no 3-4, no 'all ages'); adults added to site-wide copy
- SUD: temporary license -> `/services/substance-abuse` is now Drug & Alcohol Counseling (assessments + outpatient, ages 5+). No IOP, no medication, license not named
- Adam confirmed: attorney reviewed /privacy and /terms; HIPAA notice given at intake; ADHD card OK (already links to /services/adhd-treatment)
- Still says 24/7 crisis: `services.ts` crisis description/meta, `voiceAgentKnowledge.ts` Crisis Intervention, `VoiceAgent.tsx:195`. `about/page.tsx:5` says 'ODMHSAS certified' (contradicts no-certification note). Ask Adam before changing

## Next Immediate Steps

1. DONE: 1080p clips rendered, encoded (crf 26, ~18 MB), committed `c4f0681` (not pushed). Full preview: `safe-harbor-final-1080p.mp4` on the Desktop.
2. Lighthouse re-check, push, then Adam decides on the PR.
3. Proposed (awaiting Adam's OK): "ADHD & Focus" card -> /services/child-therapy with Zoom wording (no ADHD specialty page); "Trauma Recovery" card -> /services/trauma-treatment; drop adhd-treatment from sitemap.
4. Privacy / Terms / Accessibility pages: explained to Adam, waiting on create vs. remove footer links. Legal text needs attorney review.
5. Round 5 (adult mental health + adult recovery pages) is waiting on Adam's answers in `tasks/todo.md`.

## Done 2026-10-09 late (commit `d8e64a8`, not pushed)

- `locations.ts`: all locations now use (918) 553-5746 (Adam: "only one number for everywhere")
- New `/privacy` (draft, attorney review) and `/services/adhd-treatment` (no medication, no "therapy" wording)
- Homepage Trauma Recovery card -> `/services/trauma-treatment`
- IOP: Adam has NO ODMHSAS certification yet. Planned format 8am-5pm by Zoom. Do not claim IOP.
- Still uncommitted: `ScrollHarborHero.tsx` logo flex-layout tweak, `tasks/todo.md`

## Open Questions for Adam

- Open the PR (gh CLI not logged in; Adam to run `gh auth login` or use the compare link). Branch pushed through `ccb456f` (terms + accessibility pages).
- Confirm a HIPAA Notice of Privacy Practices is given at intake (privacy page says so)
- Turn `.cursorrules` / `.clinerules` / `.windsurfrules` / `.antigravity/rules.md` into pointers to CLAUDE.md?
