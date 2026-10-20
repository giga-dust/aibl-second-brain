# Routines

| Routine | When (default) | Prompt | Skill | Where it lands |
|---|---|---|---|---|
| Capture triage | Daily, fixed time, or manual on "capture" | "Run capture-and-file on inbox/ and on anything I pasted here since yesterday." | `capture-and-file` | This Pod |
| Weekly review | Fridays 16:00, your timezone | "Run the weekly-review skill. Rescore matrix.md, update horizons.md if it is the first Friday of the month, refill outreach/queue.md, save to logs/." | `weekly-review` → `prioritization-matrix`, `sourcing-and-outreach`, `horizon-planning` (check) | This Pod, or a Slack or Teams DM if connected |
| Horizon check | First Friday of the month | Folded into the weekly review | `horizon-planning` (check mode) | This Pod |
| Quarterly reset | Last Friday of the quarter | "Also run horizon-planning in reset mode." | `horizon-planning` (reset mode) | This Pod |
| Partner shortlist | Monthly, on demand | "Refresh the watchlist and give me the partner shortlist." | `sourcing-and-outreach` | This Pod |

## How scheduling works in Dust

- Schedules use the agent's **wake-up** tool inside a conversation. One schedule per conversation; the agent opens another conversation for a second routine.
- A wake-up runs with your credentials and is billed to you; nobody else can post in a conversation that has an active wake-up.
- To stop: say "stop the schedule" in that conversation. To change timing: say the new time.
- Reference: https://docs.dust.tt/docs/user-documentation/agents/tools/wake-ups

## Manual mode

No schedules? Paste the prompts above on Friday. The files update the same way.

## Light, medium, heavy

- Light: capture and ask questions. The brain is a searchable memory.
- Medium: add the Friday review. The brain starts handing you moves.
- Heavy: schedule the routines, pin the matrix Frame as the Pod banner, connect calendar and mailbox. The brain becomes proactive.

## After a quarter

Ask: "Read the archived horizon grid and the thirteen reviews. What did we commit to, what did we deliver, which bets paid off, who did we actually stay close to?" That answer is the real return on a second brain.
