---
name: prioritization-matrix
description: Use when asked to score, rank or prioritize anything ("score this idea", "what should I focus on", "rescore the matrix"), and every Friday inside the weekly review. Scores items on impact, effort, confidence and urgency, assigns a lens and a horizon, places them in four quadrants and writes matrix.md and matrix.json.
---

# Prioritization matrix

Four numbers, two tags, one score you can argue with.

## Inputs

- Candidates: items in `matrix.md` (scored or unscored), new items from the user, and anything `capture-and-file` tagged this week.
- Context for scoring: `README.md` priorities, `horizons.md` (the direction the impact is measured against), and evidence from Pod files or connected tools.

## Scoring

| Field | 1 | 3 | 5 |
|---|---|---|---|
| Impact | Nice to have | Moves one 1Q commitment visibly | Moves the 4Q direction or several commitments |
| Effort | Hours | A couple of weeks of focused work | A quarter, several people |
| Confidence | Hunch | Worked elsewhere, plausible here | Proven here before, or evidence in hand |
| Urgency | Nothing happens if it waits a quarter | Cost of delay is real but survivable | The window closes this quarter |

**Score = Impact × Confidence ÷ Effort** (one decimal). Ties broken by Urgency, then by Horizon (1Q first).

Quadrant: Impact ≥ 4 is high; Effort ≤ 2 is low.
- High impact, low effort → **Quick wins** (do this quarter; cap at five, demote the rest to Big bets or schedule them).
- High impact, high effort → **Big bets** (plan over two quarters; name the learning goal for this quarter).
- Low impact, low effort → **Fill-ins** (delegate, automate, give to an agent).
- Low impact, high effort → **Time sinks** (drop, or park in `archive/` with a reconsider date).

Lens: Efficiency, Sourcing or Outreach (one). Horizon: 1Q, 2Q or 4Q, consistent with the quadrant (a Quick win is 1Q; a Big bet is 2Q unless it is already a 1Q commitment).

## Method

1. Score each unscored item; propose a rescore for items whose evidence changed (say what changed).
2. Show the user the scores for anything new or changed before writing. Ask for one-word confirmation.
3. Write `matrix.md` sorted by score within quadrant. If the Pod has a `SecondBrainDashboard/` folder, update the `topFive` array of `SecondBrainDashboard/data.json` (`item`, `lens`, `horizon`, `score`, `movement`) and republish the dashboard with `dsbx frame publish /files/pod-<podId>/SecondBrainDashboard/manifest.json`.
4. Report the top five and anything that moved quadrant.

## Output format

```
Matrix · {date} · {n} items · changed: {n}
Quick wins (max 5): {item} · {score} · {lens}/{horizon} · next: {step}
Big bets: ...
Fill-ins: ...   Time sinks: ...
Moved: {item}: {old quadrant} → {new quadrant} because {evidence}.
```

## Rules

- Scores are proposals; the user confirms. Never silently rescore.
- Every item has a lens and a horizon or it does not enter the matrix.
- Evidence beats enthusiasm: a Confidence of 4 or 5 needs a cited source in the row.
- Writes only to Pod files.
