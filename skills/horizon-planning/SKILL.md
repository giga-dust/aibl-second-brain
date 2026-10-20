---
name: horizon-planning
description: Use to fill, check or reset the horizon grid: three lenses (team operational efficiency, industry and partnership sourcing, proactive outreach) by three horizons (one quarter commit, two quarters bet, four quarters direction). Fill mode at setup, check mode monthly, reset mode on the last Friday of the quarter. Writes horizons.md.
---

# Horizon planning

Nine cells. Each one answers "what are we doing about this lens, on this horizon?" An empty cell is a finding.

## The grid

| Lens | 1 quarter · Commit | 2 quarters · Bet | 4 quarters · Direction |
|---|---|---|---|
| Operational efficiency (team) | Up to three measurable outcomes: number, owner, date | Hypotheses about how the team should work, each with what we must learn this quarter | The way the team runs a year out, and what must be true |
| Industry and partnership sourcing | Shortlists delivered, partnerships started, events chosen | Bets on where the industry goes and which partner types matter | The position we hold in our ecosystem a year out |
| Proactive outreach | Relationships started or deepened, with a cadence kept | Bets on which relationships compound | The network we want to have, and what it enables |

Rules per horizon:
- **1Q Commit**: measurable or it is not a commitment. Max three per lens. Each maps to at least one Quick win or Big bet in `matrix.md`.
- **2Q Bet**: each bet names the learning goal for this quarter and the signal that would kill it.
- **4Q Direction**: one theme per lens plus "what must be true". Rewritten, not appended, once a quarter.

## Modes

**Fill (setup).** From the interview: direction sentence → 4Q cells (split by lens, leave a lens empty if the sentence does not cover it); commitments → 1Q cells; open bet → 2Q cell of its lens; lens answers → fill gaps where the person gave concrete content. Never pad. List empty cells.

**Check (monthly, inside the Friday review).** For each 1Q cell: on track, at risk, done, with the number. For each 2Q cell: what did we learn this month; keep, adjust or kill. For each empty cell: propose one question to the user that would fill it. Update `horizons.md`, keep the previous version's date in the footer.

**Reset (last Friday of the quarter).** Close 1Q cells (done or carried, with a reason). Promote 2Q bets to 1Q commitments or kill them. Ask the user to restate the 4Q direction in one sentence and rewrite the 4Q cells. Archive the old grid to `archive/horizons-YYYY-QN.md`. Reset `matrix.md` horizons accordingly.

## Output format

```
Horizon grid · {mode} · {date}
{the 3 × 3 table}
Empty cells: {list}. Suggested questions: {one per empty cell}.
Changes since last: {bullets}
Pod description update: {the three priorities, for the user to paste or for the agent to set}
```

## Rules

- Nine cells, one to three lines each. No paragraphs.
- Empty stays empty until the user gives real content.
- Every 1Q commitment points at a matrix item; every Big bet points at a 2Q cell. Report orphans.
- Writes only to Pod files; proposes the Pod description text.
