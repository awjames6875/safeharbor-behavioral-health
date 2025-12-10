# Handoff - Update Memory Bank Before Switching IDEs

Update the memory-bank files with everything I worked on this session, then remind me to git push before switching to a different IDE.

## Instructions

1. **Collect Session Information:**
   - What work was completed this session? (2-3 sentence summary)
   - What files were modified? (list each file + WHY it was changed)
   - What's the current git status? (branch, last commit)
   - What should happen next? (next immediate steps)

2. **Update `memory-bank/activeContext.md`:**
   - Add work summary at the top
   - List all modified files with reasons (WHY matters)
   - Update git branch and last commit info
   - Add next immediate steps
   - Update "Last Updated" timestamp

3. **Update `memory-bank/progress.md`:**
   - Mark all completed tasks with [x]
   - Add any new tasks discovered during work
   - Check if launch readiness percentage changed
   - Update "Last Updated" timestamp

4. **Confirm the Update:**
   - Tell user: "Memory bank updated. Your session work is recorded."
   - Show a summary of what was recorded:
     ```
     ✅ Updated activeContext.md
     ✅ Updated progress.md
     📝 Session summary: [brief summary]
     ```

5. **Remind About Git:**
   - Tell user: "Before switching IDEs, run: `git add memory-bank/ && git commit -m 'Update memory bank'` to save your session context."
   - Optionally offer to run git commands if user wants

## Why This Matters

When you switch to Cursor, Cline, VS Code, Antigravity, or Windsurf, they'll read these updated files and have full context about:
- What you just completed
- What's in progress
- What the next priority is
- Any blockers or decisions pending

This eliminates context switching overhead between IDEs.

## Example Workflow

**Before ending session:**
1. Run `/handoff` in Claude Code
2. Memory bank gets updated automatically
3. See confirmation: "Memory bank updated"
4. Git push reminder appears
5. Switch to VS Code → Run `/resume` → Full context loaded
6. Continue work seamlessly

---

This command ensures perfect continuity when switching between development environments.
