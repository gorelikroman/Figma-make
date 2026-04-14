# DoktorABC UI Kit — System Rules

You are generating code for the DoktorABC design system. These rules are HARD CONSTRAINTS. Violations are errors.

## Rule 0: Do Not Hallucinate

Before using any component, token, or class — verify it exists in the source files listed in README.md.
If you are unsure whether a component prop, CSS variable, or Tailwind class exists, READ the source file first.
Do NOT invent components, props, tokens, or utility classes.

## Rule 1: Components — Use Only the Kit

All UI controls MUST come from `src/app/components/design-kit/`. Import from barrel:

```tsx
import { MainButton, MainInput, MainCheckbox } from './components/design-kit';
```

Available components (complete list, nothing else exists):

| Component | Purpose |
|-----------|---------|
| `MainButton` | Action buttons (3 styles × 7 colors) |
| `IconButton` | Icon-only buttons (4 colors × 2 shapes) |
| `MainInput` | Text fields with label, validation, icons |
| `MainDropdown` | Select dropdown |
| `MainCheckbox` | Checkbox |
| `MainRadio` | Radio button |
| `MainSwitcher` | Toggle between two options |
| `MainProgressBar` | Progress indicator |
| `MainAccordion` | Expandable section |
| `MainBreadcrumbs` | Breadcrumb navigation |
| `Image` | Image with blur-up loading |

**FORBIDDEN:** Native `<input>`, `<select>`, `<button>`, `<textarea>` in any form or UI.
If a control type is missing, create it inside `design-kit/` following existing conventions.

## Rule 2: Tokens — No Arbitrary Values

Every color, spacing, radius, and font value MUST come from `src/styles/tokens.css`.

**Colors** — Only CSS variables:
```
var(--mapped-*)    ← use these in components
var(--alias-*)     ← semantic references
var(--brand-*)     ← raw values (avoid in components)
```
FORBIDDEN: inline `#hex`, `rgb()`, `hsl()`, `oklch()`, hardcoded color strings.

**Spacing** — Only token values (px): 0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 60, 64, 68, 76, 84, 92, 100.
FORBIDDEN: arbitrary `px`, `rem`, `em` values. No Tailwind arbitrary values like `gap-[15px]`.

**Border radius** — Only tokens: `--size-radius-none` through `--size-radius-full`.
FORBIDDEN: `rounded-[14px]` or any arbitrary radius.

## Rule 3: Typography — Two Fonts, Token Styles

- Headings, buttons: Poppins (`--font-family-primary`)
- Body, labels: Roboto (`--font-family-secondary`)
- Use composite tokens: `--text-{style}-{family|size|weight|line-height}`
- Styles: `display-1..3`, `h1..h6`, `body-xl..xs`, `label-lg..xs`, `button-lg..sm`, `caption`, `overline`

FORBIDDEN: arbitrary `font-size`, `font-weight`, or `font-family` values.

## Rule 4: Responsive — Mobile First

- Breakpoint: 768px. Tailwind prefix: `lg:` for desktop.
- Fields: `w-full` on mobile, constrained on desktop.
- Multi-column: always `grid-cols-1 lg:grid-cols-2` (never `grid-cols-2` alone).
- Buttons: `w-full lg:w-auto` in action groups.
- Touch targets: minimum 44×44px on mobile.

## Rule 5: Button Hierarchy

- Maximum ONE `style="solid" color="primary"` button per form/screen.
- Secondary buttons: `style="outline"` or `style="ghost"` with neutral color.
- Destructive actions: `color="error"` with `outline` or `ghost` style + confirmation.
- Button text: action verbs, max 3 words. No generic "OK", "Submit", "Click here".

## Rule 6: Form Structure

- Every `MainInput` and `MainDropdown` MUST have a non-empty `label` prop.
- `placeholder` is a format hint, NOT a label replacement.
- Field gap: `var(--size-gap-16)` default, consistent within one form.
- Section gap must be strictly greater than field gap.
- Container padding: `var(--size-gap-24)` desktop, `var(--size-gap-16)` mobile.

## Rule 7: When In Doubt

1. Check `src/styles/tokens.css` for available tokens
2. Check `src/app/components/design-kit/*.tsx` for component props
3. Check `docs/components.md` for API reference
4. Check `docs/tokens.md` for token architecture
5. If something doesn't exist — ASK, don't invent

## Quick Reference

```
Tokens:        src/styles/tokens.css
Components:    src/app/components/design-kit/
API docs:      docs/components.md
Typography:    docs/typography.md
Token guide:   docs/tokens.md
Form rules:    .github/instructions/ui-forms.instructions.md
```
