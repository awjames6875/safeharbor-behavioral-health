# 01_audit

## Job
Find problems before touching code. Output is a list of findings, not changes.

## Inputs
- The site: `src/`, built HTML from `npm run build`, or a local `npm run start` server.
- Rules to check against: truth rules and language rules in `CLAUDE.md`.

## Process
1. Pick the audit type: canonicals, phones, banned content (medication, ages, fake reviews, "therapy" in parent-facing text), titles/H1s, NAP, schema.
2. Search the source (Grep) and the built output for violations. Do not read-fix as you go.
3. Group findings by root cause, not by file.
4. List each group in the run section of `tasks/todo.md` as unchecked items with file paths.
5. Mark anything that needs an owner decision as `[ ] Open:` and ask Adam. Do not guess.

## Outputs
- Unchecked todo items in `tasks/todo.md` under the run ID.
- Proposed content rewrites go in `tasks/` (e.g. `tasks/blog-rewrites.md`), not applied.

## Done when
Adam has seen the findings and approved which ones to fix. Next room: `02_fix`.
