# 03_verify

## Job
Prove the fix works and commit only that fix.

## Inputs
- The changed files from `02_fix`.
- Commands and ports: `memory-bank/techContext.md`.

## Process
1. `npm run build` must pass. (`npm run lint` currently fails on a known duplicate `@next/next` plugin in a parent `node_modules`, unrelated to our changes. Run `npx tsc --noEmit` as well.)
2. Re-run the audit check that found the problem against the built output. Violation count must drop to zero for the fixed groups.
3. For UI changes, run the relevant Playwright spec (`npx playwright test tests/e2e/critical/<spec>`).
4. Confirm `git diff` shows only intended files and `src/data/locations.ts` is untouched.
5. Stage only the files for this run. Commit message: `fix(<area>): <what and why>`.
6. Write the Review section in `tasks/todo.md` (root cause, what changed, what was verified, open items).
7. Update `memory-bank/activeContext.md` and `memory-bank/progress.md`.

## Outputs
- One commit on the working branch (never main, no push unless Adam asks).
- Review section in `tasks/todo.md`.

## Done when
Build passes, audit check is clean, commit is made, memory bank is updated. Update "Review status" in `CONTEXT.md`.
