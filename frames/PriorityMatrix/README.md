# PriorityMatrix

An optional Dust Frame that plots the Second Brain's prioritization matrix: items on impact (up) × effort (right), four quadrants, dots colored by horizon (1Q, 2Q, 4Q), a top-five list, and details on hover or tap. It reads `./matrix.json` from its own folder.

- No server functions, no tool calls, no live refresh. It is a snapshot the agent updates by rewriting `matrix.json` (the `prioritization-matrix` and `weekly-review` skills do this).
- To use it: copy this folder into the Pod's Files, let the agent write `matrix.json`, publish the Frame, then Files → the Frame → **Pin as Pod banner**.
- `matrix.json` here is sample data so the Frame renders before the first real scoring.
