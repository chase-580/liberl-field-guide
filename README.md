# Liberl Field Guide

A static bilingual completion guide for the original release of *The Legend of Heroes: Trails in the Sky FC*.

[Open the public site](https://chase-580.github.io/liberl-field-guide/)

## Included

- English-first interface with complete Chinese switching
- Complete Prologue through Final Chapter route
- Every listed request with opening and expiry checkpoints (368 maximum BP)
- Chapter chest ledger (164 total), all 58 recipes, and all 11 *Carnelia* volumes
- Wanted monsters, major bosses, eight playable characters, quartz, and arts references
- Source and verification record, last checked 2026-09-22
- Request filters and local progress tracking
- Local progress persistence
- Responsive desktop and mobile layouts

## Run locally

```powershell
python -m http.server 4173 --directory dist
```

Open `http://127.0.0.1:4173`.

## Deployment

Pushes to `main` deploy the contents of `dist` to GitHub Pages through GitHub Actions.
