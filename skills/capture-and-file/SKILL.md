---
name: capture-and-file
description: Use when the user says "capture", pastes a note, link, meeting takeaway or thought, or asks to clear the inbox. Files each item into one of the five homes (projects, areas, resources, people, decisions, or archive) with a one-line why, and extracts decisions, commitments and people into their own files. Read-only on external tools; writes only Pod files.
---

# Capture and file

Capture everything, keep little, decide more. One pass, one home per item.

## Inputs

- New items: text pasted in the conversation, files in `inbox/`, or (when asked) today's meeting notes written by other agents in the Pod.
- The distilled layer: `README.md` (priorities), `horizons.md`, `matrix.md`, the list of files in `projects/`, `areas/`, `people/`.

## Method

For each item:
1. **Name it** in one line (what it is, from whom or where, dated).
2. **Extract** anything that lives elsewhere: a decision → `decisions/YYYY-MM-DD-<slug>.md` (date, decision, options considered, why, who); a commitment (ours or theirs) → the relevant project or person file under "Open commitments"; a person → `people/<name>.md` (create if new: role, why they matter, last contact, next touch); a dated external signal → `watchlist.md`.
3. **File** the item itself in one home, by this order of questions: Does it serve an outcome with a date? → `projects/<project>.md`. Does it keep a standard without an end date? → `areas/<area>.md`. Might I want it later? → `resources/<topic>.md`. None of the above → `archive/` with a one-line reason.
4. **Tag** anything that is a candidate for attention with a lens (Efficiency, Sourcing, Outreach) and a horizon (1Q, 2Q, 4Q) and add it to `matrix.md` unscored, for Friday.
5. **Remove** it from `inbox/`.

Append to existing files; never overwrite a file's history. Keep each appended entry to three lines plus the source.

## Output format

```
Captured {n} items · {date}
- {item} → {home}/{file} · why: {one line} · extracted: {decision | commitment | person | signal | none}
...
Added to matrix (unscored): {n}. New people: {names}. Inbox: empty.
```

## Rules

- One home per item. When two fit, choose the one closer to an outcome (projects over areas over resources).
- Never invent dates or attributions; write "undated" or "source unknown".
- Never delete. `archive/` is the only exit.
- Writes only to Pod files. No external tool is modified.
