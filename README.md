# Liberl Field Guide

A bilingual, release-version field guide for *Trails in the Sky 2nd Chapter* (2026 remake), hosted on GitHub Pages.

[Open the public site](https://chase-580.github.io/liberl-field-guide/)

## Included

- English-first interface with full Chinese switching and saved theme preference
- Prologue and Chapter 1 verified route; chapter chest milestones through the Final Chapter
- Quest timing desk, spoiler-light missables, boss notes, and build guidance
- 566-chest completion ledger with persistent browser checkboxes
- Visible verification dates and source links for remake-specific facts
- Preserved original *Trails in the Sky FC* guide at `/original-fc/`
- Responsive desktop and mobile layouts

The remake launched on September 17, 2026. The guide is updated in release order and labels records that still need remake verification.

## Run locally

```powershell
python -m http.server 4173 --directory dist
```

Open `http://127.0.0.1:4173`.

## Deployment

Pushes to `main` deploy the contents of `dist` to GitHub Pages through GitHub Actions.
