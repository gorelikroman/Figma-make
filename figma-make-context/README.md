# Figma Make — EJS Component Templates

This folder contains EJS source templates for Figma Make component generation.

## Contents
- `tailwind.config.js` — Tailwind class mapping for design tokens
- `components/*.ejs` — EJS blueprints for all 11 React components

## Shared files (not duplicated here)
- **Tokens:** `src/styles/tokens.css`
- **Fonts:** `src/styles/fonts.css`
- **Base styles:** `src/styles/theme.css`

## How to use
Provide these EJS templates + the shared style files above as context to Figma Make.
Treat EJS templates as blueprints; convert to React components using token variables.
