---
name: Homeaglow Presentation System
version: 1.0
fonts:
  sans: Figtree
  mono: DM Mono
colors:
  yellow: "#FED346"
  yellow_deep: "#F2BD12"
  yellow_wash: "#FFFAEA"
  ink: "#1B1A1A"
  muted: "#6B6663"
  paper: "#FAF9F7"
  paper_2: "#F2F0EC"
radii:
  pill: 999px
  card: 18-22px
  badge: 9-14px
shadows:
  card: "0 12px 30px -20px rgba(27,26,26,.4)"
  lift: "0 22px 55px -30px rgba(27,26,26,.45)"
---

# Design Language

This repository uses a shared presentation style for Homeaglow internal decks. Treat this file as the design contract for new presentations. New decks should reuse `shared/deck.css` and `shared/deck.js` before adding deck-specific CSS.

## Mood

Clear, confident, and practical. The decks should feel like an engineering playbook: polished enough for an offsite, but still direct and useful. Avoid marketing-page composition, decorative clutter, and generic AI gradients.

## Layout

- Slides are full-screen, centered, and sparse.
- Each slide uses `.wrap` as the main content width, with a maximum of `1200px`.
- Prefer one main idea per slide.
- Use large display headlines only for the slide's primary claim.
- Use cards for repeated items, decision points, and framed process steps. Do not nest cards inside cards.
- Keep charts and diagrams centered when they are the subject of the slide.
- The root URL is a presentation directory. Each deck lives at `presentations/<slug>/`.

## Typography

- Display: Figtree, weight `800-900`, tight but not negative letter spacing beyond the existing CSS.
- Body: Figtree, regular or medium, muted color, generous line height.
- Labels and metadata: DM Mono, uppercase, small, with wide tracking.
- Headlines should use sentence-like language, not abstract nouns.
- Keep supporting copy short enough to be read at presentation distance.

## Color

- Yellow is the signature accent. Use it for highlights, pills, progress, active states, and key callouts.
- Ink is the main text and dark-card color.
- White is the main canvas.
- Warm paper tones are used for soft contrast.
- Do not turn the whole deck into a one-color yellow theme. Yellow should punctuate, not flood.

## Components

### Kicker

Use `.kicker` for slide labels and compact context. Keep it short: one to four words.

### Highlight

Use `.hl` to highlight a meaningful word or phrase in the headline. Avoid highlighting entire long sentences.

### Cards

Use `.cardx` for repeated content blocks. Keep titles punchy and body text under two lines when possible.

### Diagrams

Prefer semantic diagrams over decorative icons. A diagram should answer "what relates to what?" or "what state is this in?" Use icons when they clarify state or role.

### Prompt Block

Use `.promptbox` to show a prompt, brief, or instruction file on a slide. Give it a `.tag` label (for example `prompt.md`) and one paragraph per idea. Mark the leading intent and closing ask with `p.key` so the bookends stand out. Keep it to a single column and distill a long prompt to the parts worth reading at presentation distance.

### Status Pills

Use state pills for process state: `grilling`, `implementing`, `ready for QA`, `human`, `assisted`, `automated`, and similar. Keep labels short.

## Motion

- Slide elements reveal via `data-r` sequence.
- Motion should clarify the reading order.
- Avoid large bouncing, spinning, or constant animation.
- Respect reduced-motion preferences through CSS.

## Responsive Behavior

- Slides are optimized for presentation view first, then mobile review.
- On narrow screens, grids collapse to one column, rails hide, and state pills move below the item text.
- Text must never overflow its card or button.

## Creating A New Deck

1. Create a folder at `presentations/<slug>/`.
2. Copy the document shell from an existing deck.
3. Link shared assets with:
   - `../../shared/deck.css`
   - `../../shared/deck.js`
4. Keep deck-specific content inside `<div id="deck">`.
5. Add the deck to the root `index.html` directory grid.
6. Update `README.md` if the deck is part of the published set.

## Do Not

- Do not add decorative gradient blobs or generic AI-purple styling.
- Do not make a landing page for a deck.
- Do not use tiny text to explain important content.
- Do not put UI cards inside other cards.
- Do not add custom per-slide CSS until shared components are insufficient.
