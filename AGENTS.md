# Agent Instructions

This repository is a static GitHub Pages presentation library. The intended workflow is to open the repo with an agent, provide the presentation context, and ask it to create or update a deck using the shared style.

## Source Of Truth

- Read `DESIGN.md` before creating or restyling slides.
- Use `shared/deck.css` and `shared/deck.js` for the presentation system.
- Keep deck content in `presentations/<slug>/index.html`.
- Keep the root `index.html` as the presentation directory.
- Do not create `CONTEXT.md`; local project notes should not be committed.

## Creating A Presentation

When asked to create a new presentation:

1. Clarify or infer the audience, purpose, event/date, approximate slide count, and source material.
2. Choose a short lowercase slug, for example `agentic-coding-hag-2026`.
3. Create `presentations/<slug>/index.html`.
4. Copy the document shell from an existing deck and link:
   - `../../shared/deck.css`
   - `../../shared/deck.js`
5. Build slides inside `<div id="deck">`.
6. Add or update the deck card in the root `index.html`.
7. Update `README.md` when the deck should be listed publicly.
8. Run a local server and verify:
   - `/` loads the directory.
   - `/presentations/<slug>/` loads the deck.
   - Slide count and navigation work.
   - No text overlaps at desktop size.
   - Referenced images/icons load.

## Deck Structure

Each deck should include:

- Full HTML document shell.
- Shared font imports.
- Shared CSS and JS links.
- Background layer with `.bg`.
- `.topbar`, `.counter`, `.bar`, `.rail`, and `.hint`.
- One `<section class="slide">` per slide.
- `data-sec` values for section labels.
- `data-r` values for reveal order.

## Design Rules

- Use the shared visual language from `DESIGN.md`.
- Prefer clear, useful diagrams over decorative visuals.
- Use icons when they clarify a role, state, or tool.
- Keep one main idea per slide.
- Keep supporting text brief.
- Do not make marketing landing pages for decks.
- Do not add broad custom CSS unless the shared system cannot express the layout.
- If a new component pattern is broadly reusable, add it to `shared/deck.css` and document it in `DESIGN.md`.

## Homepage Rules

The root `index.html` is the directory. For each deck card, include:

- Event or category kicker.
- Deck title.
- One-sentence summary.
- Metadata chips such as slide count, topic, and audience.
- Link to `presentations/<slug>/`.

Keep the "Create a new presentation" guide card visible so future users know how to use the repo with an agent.

## Verification Commands

From the repository root:

```sh
python3 -m http.server 8000
```

Then check:

```sh
curl -sL http://localhost:8000/ | rg 'Presentation library|presentations/'
curl -sL http://localhost:8000/presentations/<slug>/ | rg 'shared/deck.css|shared/deck.js|<section class="slide'
```

Use the browser for visual QA when available.

## Publishing

Commit changes with a concise message and push to `main`. GitHub Pages serves the repository root.
