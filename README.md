# Homeaglow Presentation Library

Static GitHub Pages site for Homeaglow presentation decks.

## Structure

- `/` is the presentation directory.
- `presentations/<slug>/` contains each individual deck.
- `shared/deck.css` and `shared/deck.js` provide the shared presentation system.
- `DESIGN.md` documents the visual language and rules for new decks.
- `AGENTS.md` documents how agents should create, update, verify, and publish decks.
- `CLAUDE.md` points Claude to the same agent instructions.

## Current Decks

- `presentations/agentic-coding-hag-2026/` — Agentic Coding, Homeaglow offsite June 2026.

## Creating A New Deck With An Agent

Open this repository with an agent and provide the topic, audience, source context, desired length, and event/date. Ask it to create a new presentation following `AGENTS.md` and `DESIGN.md`.

The homepage includes a "Create a new presentation" card that links to the agent instructions.

## Local Preview

From the repository root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.
