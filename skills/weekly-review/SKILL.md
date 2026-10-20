---
name: weekly-review
description: Use for the Friday review ("weekly review", "what moved this week", "plan next week"), for the first run at setup, and monthly with the horizon check folded in. Reads the week's logs, files and connected tools, rescored the matrix, refills the outreach queue, and hands the user next week's three names, one efficiency move and one signal. Saves to logs/.
---

# Weekly review

Friday, one screen. What moved, what carries, what the brain hands you for next week.

## Inputs

1. Last review in `logs/` (none on first run).
2. `matrix.md`, `horizons.md`, `outreach/queue.md`, `outreach/log.md`, `watchlist.md`, `decisions/` entries from this week, `inbox/` (should be empty; if not, run `capture-and-file` first).
3. Connected tools, read-only: calendar (who you met this week, next week's meetings), mailbox (threads going cold), messaging (team signals), CRM, warehouse, web (one signal per watchlist item at most).

## Method

1. **What moved.** Decisions made, commitments closed, matrix items done or changed, people contacted (from `outreach/log.md` and calendar). Five lines max.
2. **Carry or close.** For each Quick win not done: carry (why), close (why), or demote. Rescore with `prioritization-matrix`; show changes.
3. **Horizon check** on the first Friday of the month: run `horizon-planning` in check mode.
4. **Next week, three lenses:**
   - Outreach: three names from `sourcing-and-outreach`, each with the reason and a draft marked "not sent".
   - Efficiency: one move, sized (hours saved per week or items unblocked), with an owner suggestion. Pull from recurring asks in messaging, from meeting load, or from Fill-ins in the matrix.
   - Sourcing: one dated signal worth acting on, with the action; or "no signal this week" (that is acceptable).
5. **Pod description.** If priorities changed, propose the new description text.
6. Save to `logs/YYYY-MM-DD-review.md`; refresh `frames/PriorityMatrix/matrix.json` if present.

## Output format

```
Weekly review · {date} · sources: {list} · missing: {list}

Moved: ...
Carry / close: ...
Matrix top five: 1. ... 2. ... (quadrant · score · next step)
Horizon check (first Friday only): {on track / at risk / empty cells}

Next week
- Reach: {name} · {why now} · draft below (not sent)  × 3
- Fix: {efficiency move} · {size} · {owner}
- Act on: {signal} · {action}   or   no signal this week

One question for you: {the decision that would unblock the most}
```

## Rules

- One screen. Drafts and detail go under "Prepared for you" at the end.
- Compare to last week; a review without the delta is a status report.
- Never send, book or update anything. Drafts are drafts.
- Never invent a signal to fill the Sourcing line.
