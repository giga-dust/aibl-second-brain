# Second Brain Pod · a Dust kit

A Pod that keeps direction, priorities and people in one place and turns them into a Friday review.

**For:** People who run a team or a business: founders, general managers, heads of function.
**Shape:** Direction. One Pod skill shapes the Pod; the other skills run the routines inside it. No agent definitions, nothing is sent without you.

## What is in the kit

Everything is a Dust skill. The import reads every folder that holds a `SKILL.md`; the files next to it (templates, sample data, the dashboard) come along as that skill's attachments.

| Skill | What it does |
|---|---|
| `second-brain-pod` | **The Pod skill.** Shapes the whole Pod: six-question interview, read-only tool checks, the five homes, horizons and matrix files, people pages, pinned dashboard, Friday review as a wake-up. Stays as the operating manual. |
| `capture-and-file` | Triage anything you paste into the right home. |
| `prioritization-matrix` | Impact × confidence ÷ effort, four quadrants, a top five. |
| `horizon-planning` | Three lenses × three horizons, empty cells named. |
| `weekly-review` | The Friday format. |
| `sourcing-and-outreach` | Watchlist signals and the week's three touches, drafted and never sent. |

The Pod skill folder also carries `CONNECT.md` (which tools to connect, one read-only check each), the Pod file templates, fictional sample data for a dry run, and `dashboard/`: a Frame built for the Pod banner that shows direction, the matrix top five, the 3×3 horizon grid, this week's three touches.

## Set up in ten minutes

1. **Import the skills.** In Dust: Skills → Create skill → From existing → paste `https://github.com/giga-dust/aibl-second-brain` → select all → Import. Set availability to "Members and agents" so the Pod's agent can use them.
2. **Create a Pod.** Pods → New → Restricted, members: you.
3. **Attach the Pod skill and start.** In the Pod, attach `second-brain-pod` from the composer and send: *Set up this Pod. Start with the interview.*
4. **Answer six questions.** One-line answers are fine; "skip" applies the default. The agent checks your tools read-only, writes the Pod files, pins the dashboard, runs the first brief on your data or on the sample data, and proposes the routines (a Friday review weekly, capture triage daily if you want it, a quarterly reset). It schedules nothing until you say yes.

Tools to connect, in order of value: calendar, mailbox, messaging, CRM, web search, optionally a data warehouse. Details and a read-only check per tool are in `skills/second-brain-pod/CONNECT.md`.

## Guardrails built into every skill

- Prepare, never send: no email, message, CRM update or meeting without an explicit instruction in the current conversation.
- Never invent: missing data is written as "not found in connected sources".
- One screen per brief; decisions first, detail underneath.
- Routines run as wake-ups with your credentials. "Stop the schedule" ends one.

## Sister kits

[Command Center Pod](https://github.com/giga-dust/aibl-command-center) · [The Goal Pod](https://github.com/giga-dust/aibl-the-goal). Same structure, same guardrails, a different shape.

## Workshop

Built for the Dust × aiBL workshop "Build your Command Center". Attendee code **AIBL2026PRO** at sign-up. Questions: support@dust.tt.

MIT licence. The sample data is fictional.
