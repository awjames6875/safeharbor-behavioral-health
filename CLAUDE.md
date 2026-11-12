# Safe Harbor Behavioral Health (L0 entry)

Next.js 14 site for safeharborbehavioralhealth.com. This file routes. It holds no working content.

## Who I'm working with
- Adam James, Safe Harbor owner. ADHD: one step at a time, numbered, copy-paste ready.
- Simplest change that fixes the root cause. No temporary fixes, no scope creep.

## Language rules (never violate)
- Use the words therapy and therapist (Adam's decision, 2026-10-06; the old "emotional wellness" restriction is retired).
- No specific dollar amounts in B2B messaging. Use: new revenue stream, facility fee partnership.
- Always include safeharborbehavioralhealth.com in outreach.

## Truth rules (site content)
- One office phone: (918) 553-5746. Canonical host: https://www.safeharborbehavioralhealth.com
- Only claim what is live: no medication management or psychiatric services, all ages, live insurance only.
- No fabricated clinicians, testimonials, reviews or phone numbers.

## Hard rules
- `src/data/locations.ts` (15 production locations): never delete or modify without explicit instruction.
- 988 crisis banner visible on every page. Medicaid/SoonerCare prominent. Mobile-first.
- Never push to main. Work on a branch. Do not stage unrelated uncommitted work.

## Anti-patterns
- Rewriting files wider than the task needs.
- Fixing a symptom (e.g. editing built HTML) instead of the source.
- Committing without `npm run build` passing.
- Pasting the same rule into multiple files. Link to it instead.

## Routing table
| Task | Go to |
|---|---|
| What is this pipeline, run ID convention | `CONTEXT.md` |
| Current state, last session, next steps | `memory-bank/activeContext.md` |
| Todo list and launch status | `memory-bank/progress.md` |
| Business rules and goals | `memory-bank/projectbrief.md` |
| Stack, commands, colors, architecture | `memory-bank/techContext.md` |
| Find problems (SEO, truth, phones, language) | `01_audit/CONTEXT.md` |
| Fix a batch of findings | `02_fix/CONTEXT.md` |
| Build, test, scan, commit | `03_verify/CONTEXT.md` |

## Session start and end
- Start: read `CONTEXT.md` and `memory-bank/activeContext.md`, then the room for the task.
- End (or when Adam says "update memory bank"): update `memory-bank/activeContext.md` and `memory-bank/progress.md` with what changed, which files and why, and next steps.
