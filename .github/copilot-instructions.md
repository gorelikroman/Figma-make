# DoktorABC Design System — AI Instructions

You are working inside the DoktorABC UI Kit project. Every code generation, edit, and review MUST follow the design system rules below.

## Mandatory Rule Sources

When working with files in `src/app/**`, load and follow the instructions from:
- `.github/instructions/ui-forms.instructions.md` — form generation and validation rules

Do NOT generate UI code that violates these rules. If a rule conflicts with a user request, warn the user and suggest a compliant alternative.

## Design System Architecture

Token hierarchy (never bypass):
```
BRAND (raw hex, px)  →  ALIAS (semantic)  →  MAPPED (component-level)
```

All values come from `src/styles/tokens.css`. Do not invent colors, spacing, or radius values.

## Components

Use ONLY components from `src/app/components/design-kit/`:
- **Text input**: `MainInput`
- **Select**: `MainDropdown`
- **Checkbox**: `MainCheckbox`
- **Radio**: `MainRadio`
- **Toggle**: `MainSwitcher`
- **Progress**: `MainProgressBar`
- **Button**: `MainButton` (3 styles × 7 colors)
- **Icon button**: `IconButton` (4 colors × 2 shapes)
- **Accordion**: `MainAccordion`
- **Breadcrumbs**: `MainBreadcrumbs`
- **Image**: `Image`

Import from barrel: `import { MainButton, MainInput } from './components/design-kit';`

Never use native `<input>`, `<select>`, `<button>` directly in forms.

## Spacing

Only token values allowed. No arbitrary px/rem/em.
- Field gap: `var(--size-gap-16)` default, `var(--size-gap-12)` compact
- Section gap: `var(--size-gap-vertical-sm)` or higher (must be > field gap)
- Container padding: `var(--size-gap-24)` desktop, `var(--size-gap-16)` mobile

Full list: 0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 60, 64, 68, 76, 84, 92, 100.
Vertical sections: xxs(16/12), xs(20/16), sm(26/20), md(34/26), lg(48/32), xl(64/40), xxl(110/72) — desktop/mobile.

## Colors

Only via CSS variables: `var(--mapped-*)`, `var(--alias-*)`, `var(--brand-*)`.
No inline hex/rgb/hsl/oklch in component code.

## Border Radius

Only tokens: `var(--size-radius-none)` through `var(--size-radius-full)`.
No arbitrary border-radius values.

## Typography

- Headings: Poppins (`--font-family-primary`)
- Body: Roboto (`--font-family-secondary`)
- Use text style tokens: `--text-h1-*`, `--text-body-md-*`, `--text-label-md-*`, `--text-button-lg-*`, etc.

## Responsive

- Mobile-first approach
- Breakpoint: 768px (`lg:` prefix in Tailwind)
- Fields: full-width on mobile, constrained on desktop
- Multi-column layouts: `grid-cols-1 lg:grid-cols-2`
- Touch targets: minimum 44×44px
