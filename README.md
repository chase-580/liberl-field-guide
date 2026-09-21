# Liberl Field Guide

A static bilingual MVP guide for the original release of *The Legend of Heroes: Trails in the Sky FC*.

[Open the public site](https://chase-580.github.io/liberl-field-guide/)

## Included

- English-first interface with complete Chinese switching
- Prologue walkthrough and request board
- Missable and collectible checklist
- Search and filters
- Local progress persistence
- Responsive desktop and mobile layouts

## Run locally

```powershell
python -m http.server 4173 --directory dist
```

Open `http://127.0.0.1:4173`.

## Deployment

Pushes to `main` deploy the contents of `dist` to GitHub Pages through GitHub Actions.
