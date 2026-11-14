# 02_fix

## Job
Apply the approved findings as one small, root-cause change set.

## Inputs
- Approved items in the run section of `tasks/todo.md`.
- Rules in `CLAUDE.md` (hard rules, language, truth).

## Process
1. Read each file before editing it. Match its style.
2. Fix the source of the problem, not the symptom. If one root cause appears in many files, fix the shared source first.
3. Smallest possible edit per file. No refactors, no extra features.
4. Never edit `src/data/locations.ts` without explicit instruction from Adam.
5. Tick each item in `tasks/todo.md` as it is done and give Adam a one-line summary of the change.
6. Leave unrelated uncommitted work alone.

## Outputs
- Edited files in `src/` and `public/`.
- Ticked items in `tasks/todo.md`.

## Done when
Every approved item is ticked. Next room: `03_verify`.
