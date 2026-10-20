# Second Brain Pod · proactivity and vision

A templated Dust Pod that keeps what you know, decide and intend outside your head, and hands you the next move: the three things this week, the three people to reach, the one efficiency fix, the signal worth acting on. Built around a prioritization matrix, three lenses (team operational efficiency, industry and partnership sourcing, proactive outreach) and three horizons (one quarter, two quarters, four quarters).

Built for the Dust × aiBL workshop *Build your Command Center*. Sister kits: the [Command Center Pod](https://github.com/giga-dust/aibl-command-center) (deals, large accounts, revenue) and [The Goal Pod](https://github.com/giga-dust/aibl-the-goal) (operational efficiency through constraints).

## What you get

| Daily (two minutes) | Every Friday | Monthly and quarterly | On demand |
|---|---|---|---|
| **Capture triage**: everything you dropped in the inbox, filed with a one-line why. | **Weekly review**: what moved, carry or close, matrix rescored, next week's three names and one efficiency move. | **Horizon check** and **quarterly reset**: commitments on track, bets promoted or killed, direction restated. | "What do I know about Acme?", "Score this idea", "Who should I reach out to this week?", "Where does our team's time go?" |

The method is in [METHOD.md](METHOD.md): capture → file → distill → act, the five homes, the matrix, the three lenses, the three horizons, the routines.

## Install in three steps (about ten minutes)

1. **Create an account** at [dust.tt](https://dust.tt). Workshop attendees: choose the Business plan and enter the attendee code **AIBL2026PRO**. Forgot the code? Email support@dust.tt.
2. **Create a Pod** (left sidebar → Pods → New → Restricted, members: just you). Name it `Second Brain`.
3. **Drop in the setup file.** In the Pod, start a conversation with the default agent and paste:

   > Read https://raw.githubusercontent.com/giga-dust/aibl-second-brain/main/SETUP.md and set up this Pod by following it exactly. Start with the interview.

   Prefer files? Download `SETUP.md`, upload it in the Pod's **Files** tab, then say: *"Set up this Pod using SETUP.md. Start with the interview."*

The agent asks six questions, builds the five homes, fills the horizon grid with your answers, scores your first ten items on the matrix, probes the tools you allow (read-only) and offers to schedule the routines. Nothing is sent or changed in your tools during setup.

## Connect your tools

Connect what feeds the three lenses, in order (details and read-only checks in [CONNECT.md](CONNECT.md)):

| Priority | Tool | What it unlocks |
|---|---|---|
| 1 | **Calendar** (Google Calendar or Outlook Calendar) | Who you met and will meet: the raw material for `people/` and the outreach cadence; meeting load for the efficiency lens |
| 2 | **Mailbox** (Gmail or Outlook) | Commitments made, threads waiting, warm relationships going cold |
| 3 | **Messaging** (Slack or Microsoft Teams) | Team signals for the efficiency lens; where the Friday review is delivered |
| 4 | **CRM** (HubSpot, Salesforce, Attio) | Partner and customer relationships, if you keep them there |
| 5 | **Data warehouse** (Snowflake, BigQuery, Databricks) | Numbers behind the 1Q commitments, when they live in data |
| Optional | **Web search and research tools** | Industry signals and partner sourcing |
| Optional | **Notion, Google Drive, Confluence** (via Company Data) | Your existing notes; the Pod distills, your docs stay where they are |

No tools yet? The kit ships with a fictional inbox, matrix, watchlist and outreach queue so the first review renders anyway.

## What is inside

| Path | What it is |
|---|---|
| `METHOD.md` | The second brain method for a Pod: stages, five homes, matrix, lenses, horizons, routines |
| `SETUP.md` | The drop-in playbook the Pod agent follows: interview, homes, horizon grid, first matrix, tool probes, routines |
| `CONNECT.md` | Which tools to connect, in what order, with a read-only check for each |
| `pod/README.pod.md` | Template of the README the agent writes into your Pod |
| `pod/description.md` | The Pod description: current priorities and the pointer to the README |
| `pod/horizons.template.md` | The 3 × 3 horizon grid, empty |
| `pod/matrix.template.md` | The prioritization matrix table, empty |
| `skills/capture-and-file/SKILL.md` | Daily triage into the five homes; extracts decisions, people and commitments |
| `skills/prioritization-matrix/SKILL.md` | Scores items (impact, effort, confidence, urgency), assigns quadrant, lens and horizon |
| `skills/horizon-planning/SKILL.md` | Fills and resets the 1Q / 2Q / 4Q grid across the three lenses |
| `skills/weekly-review/SKILL.md` | The Friday review and the monthly horizon check |
| `skills/sourcing-and-outreach/SKILL.md` | Industry and partnership signals, partner fit score, the week's three names with drafts |
| `agents/second-brain-agent.md` | Name, description, instructions and settings for the agent |
| `routines/ROUTINES.md` | Daily, weekly, monthly and quarterly routines with wake-up settings |
| `context/` | Fictional sample: inbox, matrix, horizons, watchlist, outreach queue |
| `frames/PriorityMatrix/` | Optional Frame that plots `matrix.json` as the four quadrants; pin it as the Pod banner |

## Principles

- Capture everything, keep little, decide more. The distilled layer (`README.md`, `horizons.md`, `matrix.md`) is what agents read first.
- Every item gets a lens and a horizon. No lens, no horizon, no attention.
- Proactive means scheduled: the brain brings you three names and one fix every Friday, whether or not you asked.
- Drafts, never sends. Nothing leaves the Pod without you.

## License

MIT, see `LICENSE`. The PARA structure is Tiago Forte's; the matrix and horizon grid here are the kit's own simplifications.
