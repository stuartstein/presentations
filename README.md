# Homeaglow Presentation Library

Static GitHub Pages site for Homeaglow presentation decks.

## Structure

- `/` is the presentation directory.
- `presentations/<slug>/` contains each individual deck.
- `shared/deck.css` and `shared/deck.js` provide the shared presentation system.
- `DESIGN.md` documents the visual language and rules for new decks.

## Current Decks

- `presentations/agentic-coding-hag-2026/` — Agentic Coding, Homeaglow offsite June 2026.

## Local Preview

From the repository root:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.
