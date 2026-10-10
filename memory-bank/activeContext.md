# Active Context

**Last Updated:** 2026-10-08
**Current Sprint:** Scroll Harbor hero (homepage) + truth/SEO cleanup
**Branch:** `feat/scroll-harbor-hero` (pushed to origin, no PR yet). Never push to main.

## What I'm Working On Right Now

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

## Next Immediate Steps

1. DONE: 1080p clips rendered, encoded (crf 26, ~18 MB), committed `c4f0681` (not pushed). Full preview: `safe-harbor-final-1080p.mp4` on the Desktop.
2. Lighthouse re-check, push, then Adam decides on the PR.
3. Proposed (awaiting Adam's OK): "ADHD & Focus" card -> /services/child-therapy with Zoom wording (no ADHD specialty page); "Trauma Recovery" card -> /services/trauma-treatment; drop adhd-treatment from sitemap.
4. Privacy / Terms / Accessibility pages: explained to Adam, waiting on create vs. remove footer links. Legal text needs attorney review.
5. Round 5 (adult mental health + adult recovery pages) is waiting on Adam's answers in `tasks/todo.md`.

## Open Questions for Adam

- IOP details (days, hours, in-person/Zoom, insurance, adults only?) for the adult recovery page
- Remove `/services/adhd-treatment` from the sitemap (404) or keep it for a later page?
- Are 918-391-3607..3620 real per-location numbers (`locations.ts`, untouched)?
- Turn `.cursorrules` / `.clinerules` / `.windsurfrules` / `.antigravity/rules.md` into pointers to CLAUDE.md?
