# Design Tokens

All styling values come from CSS custom properties defined in `src/styles/tokens.css`.

## Architecture

```
BRAND (raw hex, px)  →  ALIAS (semantic)  →  MAPPED (component-level)
```

- **BRAND** — Base colors and sizes. Never use directly in components.
- **ALIAS** — Semantic names referencing brand. E.g. `--alias-primary-400` → `--brand-green-dark-600`.
- **MAPPED** — What components actually consume. E.g. `--mapped-surface-primary` → `--alias-primary-400`.

---

## Color Palette

### Brand Colors

| Scale | Variable pattern | Hue |
|-------|-----------------|-----|
| Primary | `--brand-green-dark-{100–1000}` | Green |
| Secondary | `--brand-green-light-{25–900}` | Light green |
| Neutral | `--brand-neutral-{0–1700}` | Gray |
| Error | `--brand-red-{50–900}` | Red |
| Warning | `--brand-orange-{50–900}` | Orange |
| Info | `--brand-blue-{50–900}` | Blue |

### Alias Colors (semantic)

| Alias | Maps to | Usage |
|-------|---------|-------|
| `--alias-primary-*` | green-dark | Main brand actions |
| `--alias-secondary-*` | green-light | Secondary actions |
| `--alias-error-*` | red | Errors, destructive |
| `--alias-warning-*` | orange | Warnings |
| `--alias-info-*` | blue | Information |

### Mapped Colors (use these in components)

**Surfaces:**
```css
var(--mapped-surface-background)    /* Page background */
var(--mapped-surface-card)          /* Card background */
var(--mapped-surface-primary)       /* Primary color fill */
var(--mapped-surface-error)         /* Error background */
var(--mapped-surface-success)       /* Success background */
var(--mapped-surface-footer)        /* Footer background */
```

**Text:**
```css
var(--mapped-text-primary)          /* Main text */
var(--mapped-text-secondary)        /* Secondary text */
var(--mapped-text-tertiary)         /* Light/muted text */
var(--mapped-text-disabled)         /* Disabled state */
var(--mapped-text-error)            /* Error messages */
var(--mapped-text-success)          /* Success messages */
var(--mapped-text-warning)          /* Warning messages */
var(--mapped-text-info)             /* Info messages */
var(--mapped-text-on-primary)       /* Text on primary surfaces */
var(--mapped-text-link)             /* Link text */
```

**Borders:**
```css
var(--mapped-border-default)        /* Standard border */
var(--mapped-border-subtle)         /* Light border */
var(--mapped-border-strong)         /* Emphasized border */
var(--mapped-border-focus)          /* Focus ring */
var(--mapped-border-error)          /* Error border */
var(--mapped-border-success)        /* Success border */
var(--mapped-border-primary)        /* Primary border */
var(--mapped-border-disabled)       /* Disabled border */
```

**Icons:**
```css
var(--mapped-icon-primary)
var(--mapped-icon-secondary)
var(--mapped-icon-disabled)
var(--mapped-icon-error)
var(--mapped-icon-success)
```

**Gradient:**
```css
var(--bg-primary-green-gradient)    /* linear-gradient(to right, primary, secondary) */
```

---

## Spacing

Gap tokens: `--size-gap-{n}` where n = 0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 60, 64, 68, 76, 84, 92, 100.

Vertical section gaps (desktop/mobile):

| Token | Desktop | Mobile |
|-------|---------|--------|
| `--size-gap-vertical-xxs` | 16px | 12px |
| `--size-gap-vertical-xs` | 20px | 16px |
| `--size-gap-vertical-sm` | 26px | 20px |
| `--size-gap-vertical-md` | 34px | 26px |
| `--size-gap-vertical-lg` | 48px | 32px |
| `--size-gap-vertical-xl` | 64px | 40px |
| `--size-gap-vertical-xxl` | 110px | 72px |

---

## Border Radius

| Token | Value |
|-------|-------|
| `--size-radius-none` | 0 |
| `--size-radius-xxs` | 2px |
| `--size-radius-xs` | 4px |
| `--size-radius-s` | 8px |
| `--size-radius-m` | 12px |
| `--size-radius-l` | 16px |
| `--size-radius-xl` | 20px |
| `--size-radius-xxl` | 24px |
| `--size-radius-full` | 9999px |

---

## Typography Tokens

**Font families:**
```css
var(--font-family-primary)     /* Poppins — headings, buttons */
var(--font-family-secondary)   /* Roboto — body, labels */
```

**Text style pattern:** `--text-{style}-{property}` — see [docs/typography.md](typography.md).

---

## Responsive

- Breakpoint: **768px**
- Mobile-first approach
- Tailwind prefix: `lg:` for desktop overrides
- Touch targets: minimum 44×44px

---

## Usage in Tailwind

```tsx
// Arbitrary value syntax
<div className="bg-[var(--mapped-surface-card)] text-[var(--mapped-text-primary)] p-[var(--size-gap-16)] rounded-[var(--size-radius-m)]">
  Content
</div>

// With gradient
<div className="bg-[image:var(--bg-primary-green-gradient)]">
  Gradient
</div>
```

## Customization

Edit `src/styles/tokens.css` to change brand colors:

```css
:root {
  --brand-green-dark-600: #YOUR_PRIMARY;
  --brand-green-light-400: #YOUR_SECONDARY;
}
```

All alias and mapped tokens update automatically.
