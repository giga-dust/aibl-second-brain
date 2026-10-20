---
name: second-brain-pod
description: Use to set up, explain or re-shape a Second Brain Pod for someone who runs a team or a business and wants one place for direction, priorities, people and the week's three outreach touches. Shapes the whole Pod - six-question interview, read-only tool checks, the PARA homes, horizons and matrix files, pinned dashboard, Friday review as a wake-up - then stays as the operating manual. The workflow skills capture-and-file, prioritization-matrix, horizon-planning, weekly-review and sourcing-and-outreach run inside the Pod it shapes.
---

# Second Brain Pod

A Second Brain Pod keeps direction, priorities and people in one place and turns them into a Friday review: the matrix top five, the horizon grid with its empty cells named, three outreach touches drafted but not sent. Agents read the Pod's `README.md`, description and Files first; the Friday routine rewrites them. This skill shapes that Pod.

Attached to this skill:

- `METHOD.md`: the five homes (inbox, projects, areas, resources, people, plus decisions and archive), the three lenses (efficiency, sourcing, outreach), the matrix formula and the 3×3 horizon grid. Copy it into the Pod Files.
- `CONNECT.md`: which tools to connect, in what order, one read-only check per tool.
- `README.pod.md`, `description.md`, `horizons.template.md`, `matrix.template.md`: templates for the Pod files.
- `manifest.json`, `index.tsx`, `theme.ts`, `BannerView.tsx`, `data.json`: the dashboard, built for the Pod banner (280 px tall).
- `horizons.sample.md`, `matrix.sample.md`, `inbox-sample.md`, `outreach-queue.md`, `watchlist.md`: fictional sample data for a dry run. Label every output built on them "sample data".

Workflow skills shipped with this kit: `capture-and-file` (triage into the homes), `prioritization-matrix` (Impact × Confidence ÷ Effort, with urgency as a tie-break), `horizon-planning` (three lenses × three horizons), `weekly-review` (the Friday format), `sourcing-and-outreach` (watchlist signals and the week's three touches). If one is not active in this conversation, enable it, or ask the person to attach it from the composer. Short versions are at the end of this file.

## Contract

Do:
1. Ask six questions in one message; accept partial answers; fill the rest with the defaults.
2. Probe tools with read-only calls only. Never block on a tool.
3. Write the Pod files: the homes, `horizons.md`, `matrix.md`, people pages, watchlist, outreach queue. One screen per section.
4. Create and pin the dashboard.
5. Run the first review on live data, or on sample data when nothing is connected.
6. Propose the routines; schedule only after the person says yes.
7. Report what is live and what is pending. Then stop.

Do not:
- Send email or messages, post anywhere, update the CRM, book meetings. Outreach is drafted, never sent.
- Invent people, signals, numbers or dates. Missing data is "not found".
- Create agents. The default agent in this Pod, with this skill and the workflow skills, is enough.
- Score anything the person did not name. The matrix ranks their items, not ideas of yours.

Not inside a Pod? Say so and ask the person to create one (Pods → New → Restricted, members: just them) and to run you again from inside it. Reference: https://docs.dust.tt/docs/user-documentation/pods/overview

## 1 · Interview (one message, six questions)

1. **You.** Name, role, timezone, team and team size. Where should the Friday review arrive: here in the Pod (default), a Slack or Teams DM, or email?
2. **Direction.** In one sentence, what should be true about your team or business four quarters from now? If you have three themes, name them.
3. **This quarter.** The two or three outcomes you are committed to, with a number if you have one. Then your biggest open bet: something you want to learn this quarter before investing more.
4. **Three lenses, one line each.** (a) Efficiency: the recurring work that eats your team's week. (b) Sourcing: the companies, people or topics you want to follow, and what a good partner looks like for you. (c) Outreach: the five to ten people you should stay close to this quarter.
5. **Tools I may read.** Calendar (Google or Outlook), mailbox (Gmail or Outlook), messaging (Slack or Teams), CRM, data warehouse, web search. Anything not listed stays off.
6. **Rhythm and red lines.** Friday review time (default 16:00 your time). Daily capture triage: a fixed time or "manual" (default manual). Anything I must never touch or mention.

Defaults when skipped: review in the Pod Fridays 16:00 local; manual triage; no tools, sample data.

## 2 · Check the tools (read-only)

Run the check from `CONNECT.md` for each allowed tool and record connected / needs authentication / not available:

- Calendar: last contact date with each outreach name, from meeting attendees in the last 90 days.
- Mailbox: last thread with each outreach name, and any thread waiting on the person.
- Messaging: mentions of the watchlist names in the last 14 days.
- CRM: records for the watchlist companies, with owner and last activity.
- Web search: one dated public signal per watchlist company (funding, hire, launch, outage).
- Data warehouse: one metric for one committed outcome, if the person named a table.

If nothing is connected, use the sample files and write "sample data" in every header.

## 3 · Write the Pod files

1. `README.md` from `README.pod.md`: who, direction, priorities, the five homes, distilled layer, sources, routines, guardrails, change log.
2. `method/METHOD.md`: a copy of the attached method.
3. The homes: `inbox/`, `projects/`, `areas/`, `resources/`, `people/`, `decisions/`, `archive/`, each with a one-line `about.md`.
4. `horizons.md` from `horizons.template.md`, filled with `horizon-planning` from questions 2, 3 and 4. Leave cells empty when the person gave nothing and list them under "Empty cells" in the report.
5. `matrix.md` from `matrix.template.md`, filled with `prioritization-matrix`: score every outcome, bet, recurring-work item, partner idea and outreach target the person named (usually eight to twelve items). Show the quadrants.
6. `people/<name>.md` for each person in question 4c: role, why they matter, last contact (calendar or mailbox, else "unknown"), cadence, next touch.
7. `watchlist.md` from question 4b: companies, people, topics, one row each, with the last dated signal if a probe found one.
8. `outreach/queue.md` (this week's candidates from the matrix's Outreach items) and `outreach/log.md` (empty, columns: date, person, channel, what, sent by).
9. `logs/`: empty; reviews go here as `logs/YYYY-MM-DD-review.md`.
10. Pod description: `description.md` with the three priorities. If you cannot edit it, ask the person to paste it. Keep it current at each monthly check.

## 4 · Dashboard (the pinned banner)

The dashboard renders `data.json` and nothing else. The Friday routine rewrites `data.json`; the person sees the direction, the top five and the week's three touches at the top of the Pod.

1. Create `SecondBrainDashboard/` in the Pod Files with the attached `manifest.json`, `index.tsx`, `theme.ts`, `ui/BannerView.tsx` (the attached `BannerView.tsx` goes under `ui/`) and `data.json`.
2. After the first review (step 5), overwrite `data.json` in the same shape: direction, the top five with score, lens and horizon, the 3×3 horizon grid as filled or empty cells, the week's three touches, the next empty cell to fill.
3. Publish with the Create Frames skill: `dsbx frame publish /files/pod-<podId>/SecondBrainDashboard/manifest.json`.
4. Pin it as the Pod banner with the Pods tool, or ask the person to pin it (Files → the Frame → Pin as Pod banner).

If Frames or the Computer are unavailable, skip this step and say so in the report.

## 5 · First review

Run `weekly-review` in first-run mode: no history yet, so the output is the matrix top five, the horizon grid with its empty cells named, the week's three outreach names with a reason and a draft each (marked not sent), one efficiency move, one sourcing signal if any probe or sample file provided one.

Post it here, save it to `logs/YYYY-MM-DD-review.md`, rewrite `SecondBrainDashboard/data.json`. Ask: "Is the top five right? Which empty horizon cell do you want to fill first?" Apply corrections to `matrix.md` and `horizons.md` before moving on.

## 6 · Routines (ask first)

Propose, then schedule only after an explicit yes. One schedule per conversation; start a second conversation for the second routine. Wake-ups run with the person's credentials; "stop the schedule" in that conversation ends it. Reference: https://docs.dust.tt/docs/user-documentation/agents/tools/wake-ups

- **Friday review**, weekly at the agreed time: "Run the weekly-review skill. Rescore matrix.md, update horizons.md if it is the first Friday of the month, refill outreach/queue.md, rewrite SecondBrainDashboard/data.json and republish the dashboard. Save to logs/."
- **Capture triage**, daily, only if the person chose a fixed time: "Run capture-and-file on inbox/ and on anything I pasted here since yesterday."
- **Quarterly reset**, last Friday of the quarter, folded into the Friday review: "Also run horizon-planning in reset mode."

If the person declines, write the prompts into `README.md` under Routines for manual use.

## 7 · Report and stop

```
Second Brain Pod · setup report
Live:      [ ] README.md   [ ] homes created   [ ] horizons.md (empty cells: n)   [ ] matrix.md (items: n)   [ ] people/ (n)   [ ] first review in logs/   [ ] dashboard pinned
Sources:   Calendar: ...   Mailbox: ...   Messaging: ...   CRM: ...   Web: ...   Warehouse: ...
Routines:  Friday review: scheduled / manual   Capture triage: scheduled / manual
Pending:   (one Pod task per missing item)
Change it: edit README.md, horizons.md or matrix.md, or tell me in this Pod. "stop the schedule" ends a routine.
```

Create a Pod task for each pending item. Then stop.

## Running the Pod after setup

| Ask | Skill | Writes |
|---|---|---|
| "File this" / paste anything | `capture-and-file` | the right home, `inbox/` emptied |
| "Rescore" / "what should I do first?" | `prioritization-matrix` | `matrix.md`, `SecondBrainDashboard/data.json` |
| "Fill the horizon grid" / quarterly reset | `horizon-planning` | `horizons.md` |
| "Friday review" | `weekly-review` | `logs/`, `outreach/queue.md`, `data.json` |
| "Who should I reach out to this week?" / "anything new on the watchlist?" | `sourcing-and-outreach` | `outreach/queue.md`, `watchlist.md` |

Short versions, for when a workflow skill is not active:

- **capture-and-file.** For each captured item: which home (project, area, resource, person, decision), one-line summary, a next action if any, a link to the source. Archive what is done.
- **prioritization-matrix.** Score each item 1 to 5 on impact, confidence and effort: score = impact × confidence ÷ effort, urgency breaks ties. Quadrants: quick win (high impact, low effort), big bet (high, high), fill-in (low, low), time sink (low, high). Show the top five and what changed.
- **horizon-planning.** A 3×3 grid: lenses (efficiency, sourcing, outreach) × horizons (1Q, 2Q, 4Q). One line per cell from what the person said; empty cells stay empty and get named.
- **weekly-review.** Sections: top five (with movement), horizon grid status, this week's three touches with drafts marked not sent, one efficiency move, one sourcing signal, what to archive. One screen.
- **sourcing-and-outreach.** Watchlist: one dated signal per company or person, with the source. Outreach: three names for the week chosen by last contact and the matrix, a reason each, a draft each, never sent.

Guardrails for every agent in this Pod: draft, never send; never invent, write "not found"; score only what the person named; one screen per review.
