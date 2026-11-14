# Site change pipeline (L1)

## Purpose and boundary
Every change to the Safe Harbor site moves through three rooms: find the problem, fix it in one small batch, verify and commit. This pipeline covers content, SEO and truth fixes to `src/`. It does not cover business strategy, outreach or GHL/VAPI setup.

## Run convention
- One run = one audit batch = one branch of commits.
- Run ID: `YYYY-MM-DD_short-name`, e.g. `2026-10-07_batch-a`.
- The run log is a section in `tasks/todo.md` headed with the run ID: checklist while working, Review section when done.
- A run is closed when `03_verify` passes and the Review section is written.

## Stable vs per-run
- Stable (change rarely): `CLAUDE.md`, this file, room `CONTEXT.md` files, `memory-bank/projectbrief.md`, `memory-bank/techContext.md`.
- Per-run (change every run): `tasks/todo.md` run section, `memory-bank/activeContext.md`, `memory-bank/progress.md`.

## Review status
Initial setup. Rooms are new and unproven. Update this line after the first run completes through all three rooms.
