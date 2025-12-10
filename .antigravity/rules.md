# Antigravity Dev Rules - SafeHarbor Behavioral Health

Project: SafeHarbor Behavioral Health website (Next.js 14 + TypeScript)

## Session Initialization

ALWAYS read first (in this order):
1. `../memory-bank/projectbrief.md` - Project overview and critical rules
2. `../memory-bank/techContext.md` - Technology stack and architecture
3. `../memory-bank/activeContext.md` - Current work focus
4. `../memory-bank/progress.md` - Todo list and project status

Understanding previous session context ensures continuity and prevents duplicate work.

## Session Termination

ALWAYS update before closing:

1. Update `../memory-bank/activeContext.md`:
   - Work summary (2-3 sentences)
   - Files modified + reasons (WHY matters)
   - Git branch and last commit
   - Next actions
   - Update timestamp

2. Update `../memory-bank/progress.md`:
   - Mark completed tasks [x]
   - Add new tasks discovered
   - Update timestamp

Confirm: "Memory bank updated with session work."

## Protected Resources

**DO NOT MODIFY:**
- `src/data/locations.ts` - 15 production business locations (CRITICAL DATA)

## Mandatory Requirements

1. **Medicaid/SoonerCare Visibility** - Must appear on every page (primary insurance)
2. **988 Crisis Hotline** - Red banner header, visible on all pages, 24/7 support
3. **Mobile-First Design** - Users access during crisis on phones
4. **Simplest Possible Implementation** - Minimal code changes, reuse patterns

## Special Commands

### "update memory bank"
- Collect all session changes
- Update activeContext.md (work done, files changed, next steps)
- Update progress.md (completed tasks, new tasks)
- Confirm updates to user

### "continue where I left off"
- Read all 4 memory-bank/ files
- Summarize: last session work + current focus + next priority
- Ask user: "Continue with [task], or switch priorities?"

## Technology Stack

- **Framework:** Next.js 14.2.18 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS (colors: teal-500, navy-800, cream-50/100)
- **Animation:** Framer Motion 12.23.25
- **AI:** Google Generative AI 0.24.1 (Voice Agent)

## Development Workflow

1. **Read memory bank** → Understand current state
2. **Make focused changes** → Keep edits simple
3. **Test:** `npm run dev` (port 3000)
4. **Update memory bank** → Before ending session

## Technical Guidelines

- **Architecture:** App Router pattern (src/app/[route]/page.tsx)
- **Component Structure:** src/components/[category]/ComponentName.tsx
- **Data Files:** src/data/[name].ts
- **Styling:** Tailwind utility classes + Framer Motion
- **Color System:** teal-500 primary, navy-800 secondary, cream backgrounds

## Key Files

### Protected
- `src/data/locations.ts` - 15 PRODUCTION LOCATIONS (NEVER MODIFY)

### Critical
- `tailwind.config.ts` - Design system
- `CLAUDE.md` - Architecture documentation
- `src/app/layout.tsx` - Root layout with Schema.org

### Documentation
- `memory-bank/projectbrief.md` - Project identity
- `memory-bank/techContext.md` - Technical details
- `memory-bank/activeContext.md` - Current state
- `memory-bank/progress.md` - Task tracking

## Project Context

**Organization:** SafeHarbor Behavioral Health
**Service:** Child & teen mental health therapy (Tulsa, OK)
**Target:** Rank #1 for "child therapy Tulsa"
**Audience:** Low-income families, Medicaid-focused
**Differentiator:** Body & Brain movement therapy program
**Status:** 75% launch ready (SEO 90%, Content 85%, Technical 70%, Conversion 50%, Performance 60%, Compliance 40%)

## Code Principles

**Simplicity Over Complexity:**
- Minimize file changes per task
- Reuse existing patterns
- Avoid premature optimization
- Keep changes focused

**From project rules:** "Make every task and code change as simple as possible."

## Commands

```bash
npm run dev        # Development (port 3000)
npm run build      # Production build
npm run lint       # Code quality
npx playwright test # E2E testing
```

---

See `../CLAUDE.md` for comprehensive architecture guide.
