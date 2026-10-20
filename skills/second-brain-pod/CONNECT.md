# Connect your tools

Connect what feeds the three lenses. Each row has a read-only check to confirm the connection before the first review. Skip what you do not have; the brain flags missing sources instead of guessing.

Workspace admins add tools under **Admin → Tools** (in a fresh workspace, that is you). Most tools ask each person to authenticate once, the first time an agent uses them.

| Order | Category | Options | Lens it feeds | Read-only check |
|---|---|---|---|---|
| 1 | Calendar | Google Calendar, Outlook Calendar | Outreach (who you met, cadence), Efficiency (meeting load) | "Who did I meet last week, outside my team? Names and companies." |
| 2 | Mailbox | Gmail, Outlook | Outreach (threads going cold), Efficiency (commitments made) | "Which threads with people outside the company have had no reply from me for 10 or more days?" |
| 3 | Messaging | Slack, Microsoft Teams | Efficiency (recurring asks, handoffs), delivery of the Friday review | "What were the most repeated questions in our team channel in the last 30 days?" |
| 4 | CRM | HubSpot, Salesforce, Attio | Sourcing and Outreach (partners, customers) | "List partner-type companies we have talked to in the last 90 days." |
| 5 | Data warehouse | Snowflake, BigQuery, Databricks | 1Q commitments that are numbers | "Show the weekly value of {metric} for the last 12 weeks." |
| Optional | Web search, research and people tools | Built-in web search, LinkedIn-type tools | Sourcing (signals), Outreach (role changes) | "What changed at {company} in the last 30 days? Public sources, dated." |
| Optional | Knowledge | Notion, Google Drive, Confluence via Company Data | All: your existing notes | "Find my notes on {topic}." |

## Rules the agent follows with these tools

- Read-only during setup and routine runs.
- Any email, message, CRM update or booking requires an explicit instruction in the current conversation, after you reviewed the draft.
- If a tool is not connected, the review says "source not connected" in one line and continues.
- Public information about people is limited to professional role and public professional activity, cited with source and date.
- Tool access uses your own credentials. What you cannot see, the agent cannot see.

## Two-minute preflight (workshop)

0:00 to 1:30: authenticate the calendar and the mailbox.
1:30 to 2:00: run the first read-only check. If it lists names, you are ready to build.
