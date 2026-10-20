# Second Brain Pod · SETUP

**AGENT: START HERE.** A person has dropped this file into a Dust Pod and asked you to set the Pod up as their second brain. Follow it in order. Do not skip the interview. Draft, never send; change nothing in the person's tools. When you finish, report with the checklist in Part 6 and stop.

Human reading this? The agent does the work. Your part is six answers and one review. About ten minutes.

Read `METHOD.md` from this kit first if it is available to you: it defines the five homes, the prioritization matrix, the three lenses and the three horizons.

---

## Part 0 · Contract

You will:
1. Ask six questions in one message, accept partial answers, use the defaults below.
2. Build the five homes and the distilled layer (`README.md`, `horizons.md`, `matrix.md`).
3. Fill the horizon grid from the interview, leaving empty cells empty and visible.
4. Score the person's first items on the matrix and show the quadrants.
5. Probe the tools the person allows with read-only calls only.
6. Propose the routines and schedule them only after an explicit yes. Report and stop.

You will not:
- Send email or messages, update a CRM, book meetings or post outside this Pod.
- Invent facts, names, numbers or signals. Missing is "not found".
- Fill empty horizon cells with generic text. An empty cell is a finding.

If you are not inside a Pod (no Files tab, no Pod description), say so and ask the person to create one (Pods → New → Restricted) and run you again from inside it.

Reference for Pods, Files and wake-ups: https://docs.dust.tt/docs/user-documentation/pods/overview

---

## Part 1 · Interview (one message, six questions)

Send all six in one message. One-line answers are fine; "skip" applies the default.

1. **You.** Name, role, timezone, team and team size. Where should the Friday review arrive: here in the Pod (default), a Slack or Teams DM, or email?
2. **Direction.** In one sentence, what should be true about your team or business four quarters from now? If you have three themes, name them.
3. **This quarter.** The two or three outcomes you are committed to, with a number if you have one. Then your biggest open bet: something you want to learn this quarter before investing more.
4. **Three lenses, one line each.** (a) Efficiency: the recurring work that eats your team's week. (b) Sourcing: the companies, people or topics you want to follow, and what a good partner looks like for you. (c) Outreach: the five to ten people you should stay close to this quarter (partners, mentors, peers, customers).
5. **Tools I may read.** Calendar (Google or Outlook), mailbox (Gmail or Outlook), messaging (Slack or Teams), CRM, data warehouse, web search. Anything not listed stays off.
6. **Rhythm and red lines.** Friday review time (default 16:00 your time). Daily capture triage: a fixed time or "manual" (default manual). Anything I must never touch or mention.

Defaults when skipped: review in the Pod Fridays 16:00 local; manual triage; no tools, sample data from `context/`.

Wait for the answer. If it is incomplete, continue with defaults and list the gaps in the final report.

---

## Part 2 · Tool probes (read-only)

For each allowed tool, run one small read-only call and record connected / needs authentication / not available:

- Calendar: people met last week outside the person's team (names, companies).
- Mailbox: external threads with no reply from the person for ten or more days.
- Messaging: most repeated questions in the team channel over 30 days (efficiency signal).
- CRM: partner-type companies touched in the last 90 days.
- Data warehouse: the latest value of one metric named in question 3, if any.
- Web search: one dated public signal for one company from question 4b.

Never block setup on a tool. With nothing connected, use `context/` from this kit and label outputs "sample data".

---

## Part 3 · Build the Pod

Create these files in the Pod's Files, using the templates in this kit and the interview answers:

1. `README.md` from `pod/README.pod.md`: who, direction, priorities, the five homes, distilled layer, sources, routines, guardrails, change log.
2. The five homes plus two: `inbox/`, `projects/`, `areas/`, `resources/`, `people/`, `decisions/`, `archive/`. Put a one-line `about.md` in each so the folder exists and explains itself.
3. `horizons.md` from `pod/horizons.template.md`, filled with the `horizon-planning` skill from questions 2, 3 and 4. Leave cells empty when the person gave nothing; list them under "Empty cells" in the report.
4. `matrix.md` from `pod/matrix.template.md`, filled with the `prioritization-matrix` skill: score every outcome, bet, recurring-work item, partner idea and outreach target the person named in questions 3 and 4 (usually eight to twelve items). Show the quadrants.
5. `people/<name>.md` for each person in question 4c: role, why they matter, last contact (from calendar or mailbox if connected, else "unknown"), cadence suggestion, next touch.
6. `watchlist.md` from question 4b: companies, people, topics, one row each, with the last dated signal if the web or CRM probe found one.
7. `outreach/queue.md` (the week's candidates, from the matrix's Outreach items) and `outreach/log.md` (empty, with the column headers date, person, channel, what, sent by).
8. `logs/`: empty; reviews go here as `logs/YYYY-MM-DD-review.md`.
9. Skills: if the workspace lets you create Skills, create the five from `skills/*/SKILL.md`. If not, copy the skill bodies into `skills/` in the Pod Files and reference them from `README.md`; agents read Pod files automatically.
10. Agent: if the person wants a dedicated agent, create it from `agents/second-brain-agent.md` with the five skills and only the tools from Part 2. Otherwise the default agent in this Pod follows `README.md`.
11. Pod description: set it to `pod/description.md` with the three priorities if you can edit it; otherwise ask the person to paste it. The description is read by every agent in the Pod; keep it current at each monthly check.
12. Optional banner: if Frames are enabled, copy `frames/PriorityMatrix/` into the Pod Files, write the matrix to `matrix.json` next to it and suggest pinning the Frame as the Pod banner. Skip silently if Frames are unavailable.

Keep every section under one screen. Tables with a `Source` column beat prose.

---

## Part 4 · First review

Run the `weekly-review` skill in "first run" mode: no history yet, so the output is the matrix top five, the horizon grid with its empty cells named, the week's three outreach names with a reason (and a draft each, marked not sent), one efficiency move, and one sourcing signal if any tool or `context/` provided one.

Post it in this conversation and save it to `logs/YYYY-MM-DD-review.md`. Ask: "Is the top five right? Which empty horizon cell do you want to fill first?" Apply corrections to `matrix.md` and `horizons.md` before moving on.

---

## Part 5 · Routines (ask first)

Propose, then schedule only after an explicit yes:

- **Friday review**: weekly at the agreed time. Prompt: "Run the weekly-review skill. Rescore matrix.md, update horizons.md if it is the first Friday of the month, refill outreach/queue.md, save to logs/." Delivery: this Pod, or the DM the person chose if messaging is connected.
- **Capture triage** (only if the person chose a fixed time): daily. Prompt: "Run capture-and-file on inbox/ and on anything I pasted here since yesterday."
- **Quarterly reset**: the last Friday of the quarter; fold into the Friday review with the prompt "Also run horizon-planning in reset mode."

Scheduling uses the wake-up tool in this conversation (one schedule per conversation; start a second conversation for the second routine). Wake-ups run with the person's credentials and are billed to them; "stop the schedule" in that conversation ends it. Reference: https://docs.dust.tt/docs/user-documentation/agents/tools/wake-ups

If the person declines, write the prompts into `README.md` under Routines for manual use.

---

## Part 6 · Verify and report

```
Second Brain Pod · setup report
Live:      [ ] README.md   [ ] 7 folders with about.md   [ ] horizons.md ({n} of 9 cells filled)   [ ] matrix.md ({n} items)   [ ] people/ ({n})   [ ] watchlist.md   [ ] outreach/queue.md   [ ] first review in logs/
Sources:   Calendar: ...   Mailbox: ...   Messaging: ...   CRM: ...   Warehouse: ...   Web: ...
Empty cells: {list, e.g. Sourcing × 4Q}
Routines:  Friday review: scheduled / manual   Capture triage: scheduled / manual   Quarterly reset: noted for {date}
Pending:   (tasks created: authentication, people without last contact, metric to define)
Change it: edit README.md, horizons.md or matrix.md, or tell me in this Pod. To stop a schedule, say "stop the schedule" in its conversation.
```

Create a Pod task for each pending item and one per empty horizon cell ("Fill Sourcing × 4Q"). Then stop and wait for the person.

---

## Appendix · Guardrails to copy into every agent in this Pod

- Draft, never send. No email, message, CRM update or booking without an explicit instruction in the current conversation.
- Every item gets a lens (Efficiency, Sourcing, Outreach) and a horizon (1Q, 2Q, 4Q).
- Never invent facts, names, numbers or signals. "Not found", then ask.
- Public information about people: professional role and public professional activity only, with source and date.
- One screen per review. Detail lives in the homes.
