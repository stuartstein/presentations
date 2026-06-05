# Homeaglow Presentation Library

Static GitHub Pages site for Homeaglow presentation decks.

## Structure

- `/` is the homepage with a human creation-instructions popup and the presentation directory.
- `presentations/<slug>/` contains each individual deck.
- `shared/deck.css` and `shared/deck.js` provide the shared presentation system.
- `DESIGN.md` documents the visual language and rules for new decks.
- `AGENTS.md` documents how agents should create, update, verify, and publish decks.
- `CLAUDE.md` points Claude to the same agent instructions.

## Current Decks

- `presentations/agentic-coding-hag-2026/` — Agentic Coding, Homeaglow offsite June 2026.
- `presentations/claude-on-a-schedule-hag-2026/` — Claude on a Schedule (recurring prompts), Homeaglow offsite June 2026.

## Creating A New Deck With An Agent

Open this repository with an agent and provide the topic, audience, source context, desired length, and event/date. Ask it to create a new presentation following `AGENTS.md` and `DESIGN.md`.

The homepage includes a top "Create a presentation" button that opens human-readable instructions. Agent-specific workflow details live in `AGENTS.md` for agents working inside the repo.

## Local Preview

From the repository root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Printing To PDF

Open a deck and use the top-right "Print PDF" button. In the browser print dialog, choose "Save as PDF"; the shared print stylesheet renders each slide as one 16:9 landscape page.
