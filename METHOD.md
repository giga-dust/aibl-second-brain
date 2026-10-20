# The Second Brain method, for a Dust Pod

A second brain is a place outside your head where what you know, decide and intend is kept, so that your attention is free for the next decision. In Dust it is one private Pod: Files hold the knowledge, the Pod description holds your current priorities, agents read both before they answer, and routines keep it alive without you doing the filing.

This kit gives the Pod a spine: **capture → file → distill → act**, one **prioritization matrix**, three **lenses** and three **horizons**.

## 1. Capture → file → distill → act

| Stage | What happens | In the Pod |
|---|---|---|
| Capture | Anything worth keeping lands in one place: a note, a link, a thought, a meeting takeaway, a name | `inbox/` folder, or just paste it in a Pod conversation and say "capture" |
| File | Each item goes to one of five homes (below) with a one-line why | `capture-and-file` skill, daily |
| Distill | What matters is pulled up: decisions, commitments, people, signals; the rest stays as source | Weekly review; `README.md` and `horizons.md` are the distilled layer |
| Act | The brain hands you the next move: the three things this week, the three people to reach, the one efficiency fix | `weekly-review` and `sourcing-and-outreach` skills |

Five homes, adapted from PARA (Projects, Areas, Resources, Archive) with one addition:

- `projects/` : outcomes with an end date (one file per project).
- `areas/` : standards you keep without an end date: team, finance, hiring, partnerships, your craft.
- `resources/` : things you may want later: articles, benchmarks, templates, industry notes.
- `people/` : one file per person who matters: role, what they care about, last contact, next touch.
- `decisions/` : a log of decisions with date, options considered, why. The most undervalued file in any brain.
- `archive/` : done or dormant. Never deleted, never in the way.

## 2. The prioritization matrix

Every candidate for your attention (a project, a bet, an outreach, an efficiency fix, an industry move) gets four numbers and two tags.

| Field | Scale | Question |
|---|---|---|
| Impact | 1 to 5 | If this works, how much does it move the quarter's goal or the four-quarter direction? |
| Effort | 1 to 5 | Weeks of focused work, including other people's time. 1 = hours, 5 = a quarter. |
| Confidence | 1 to 5 | How much evidence says it will work? 1 = hunch, 5 = proven here before. |
| Urgency | 1 to 5 | What happens if it waits a quarter? 1 = nothing, 5 = the window closes. |
| Lens | Efficiency, Sourcing, Outreach | Which of the three lenses it serves (one). |
| Horizon | 1Q, 2Q, 4Q | When it must pay off (see below). |

**Priority score = Impact × Confidence ÷ Effort**, with Urgency as the tie-breaker. It is deliberately simple so you can argue with it.

Four quadrants on Impact (vertical) × Effort (horizontal):

| | Low effort | High effort |
|---|---|---|
| **High impact** | **Quick wins**: do this quarter. Max five at a time. | **Big bets**: plan over two quarters, with a learning goal for the first. |
| **Low impact** | **Fill-ins**: delegate, automate or give to an agent. | **Time sinks**: drop, or park in `archive/` with a date to reconsider. |

The matrix lives in `matrix.md` (a table) and in `frames/PriorityMatrix/matrix.json` for the banner Frame. Rescored every Friday.

## 3. Three lenses

| Lens | Question it answers | What the brain keeps | What the brain hands you |
|---|---|---|---|
| **Operational efficiency** (for the team) | Where does our time go, and what should stop, be automated or move to an agent? | Recurring work inventory, handoffs, meeting load, agent candidates | One efficiency move a week, sized and owned. For constraint depth, use the sister kit [The Goal Pod](https://github.com/giga-dust/aibl-the-goal). |
| **Industry and partnership sourcing** | What is changing around us, and who should we build with? | Watchlist (companies, people, topics), dated signals, partner candidates with a fit score, events | One signal a week worth acting on; a ranked partner shortlist each month |
| **Proactive outreach** | Who should hear from us before they need to? | `people/` files with cadence, warmth and last contact; outreach queue; follow-up log | Three names a week with a reason and a draft, never sent without you |

## 4. Three horizons

| Horizon | Name | What belongs here | Rule |
|---|---|---|---|
| **1 quarter** | Commit | Outcomes with a number, an owner and a date | Max three per lens. If it is not measurable, it is not a commitment. |
| **2 quarters** | Bet | Hypotheses worth a quarter of learning before a quarter of execution | Each bet names what you must learn by the end of this quarter to keep it alive. |
| **4 quarters** | Direction | The picture of the team or business a year out: three themes and what must be true for each | Rewritten once a quarter. Everything in 1Q and 2Q should point at it. |

The three lenses by three horizons form the **horizon grid**, kept in `horizons.md`. Nine cells, each with one to three lines. When a cell is empty, that is a finding: you have no view there yet.

```
                 1 quarter · Commit      2 quarters · Bet        4 quarters · Direction
Efficiency       ...                     ...                     ...
Sourcing         ...                     ...                     ...
Outreach         ...                     ...                     ...
```

## 5. Routines that keep it alive

| When | Routine | Output |
|---|---|---|
| Daily (two minutes) | Capture triage: inbox to homes | Zero inbox, one line per filed item |
| Friday | Weekly review: what moved, carry or close, rescore the matrix, next week's three names and one efficiency move | `logs/YYYY-MM-DD-review.md`, matrix updated, outreach queue refilled |
| Monthly | Horizon check: 1Q commitments on track? What did the 2Q bets teach? Partner shortlist refreshed | `horizons.md` updated |
| Quarterly | Reset: close 1Q, promote or kill 2Q bets, restate 4Q direction | New `horizons.md`, matrix reset |

## 6. Dust specifics worth knowing

- One Restricted Pod, members: you. Agents in the Pod read the Files and the Pod description automatically; put your current priorities and a pointer to `README.md` in the description and keep it current.
- Connected knowledge (Notion, Google Drive, Confluence) stays where it is; the Pod holds the distilled layer and links out.
- Agents can write files into the Pod: meeting notes, summaries, the weekly review. Ask them to, and the brain fills itself.
- Share one file or one Frame with someone when they need it; the Pod itself stays yours.
- Light use: ask questions and capture. Medium: add the Friday review. Heavy: schedule the routines with wake-ups and pin the matrix Frame as the Pod banner.

Reference: https://docs.dust.tt/docs/user-documentation/pods/examples/personal-second-brain
