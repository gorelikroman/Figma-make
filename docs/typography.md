# Typography System

48 text styles across 6 categories. All use CSS custom properties.

**Fonts:** Poppins (headings, buttons) + Roboto (body, labels).

---

## Usage Pattern

```tsx
<h1 style={{
  fontFamily: 'var(--text-h1-family)',
  fontSize: 'var(--text-h1-size)',
  fontWeight: 'var(--text-h1-weight)',
  lineHeight: 'var(--text-h1-line-height)',
  color: 'var(--mapped-text-primary)'
}}>
  Page Title
</h1>
```

Pattern: `--text-{style}-{property}` where property is `family`, `size`, `weight`, `line-height`.

---

## Display (3 styles) — Hero sections

| Style | Size | Weight | Line Height | Font |
|-------|------|--------|-------------|------|
| `display-1` | 72px | 700 Bold | 1.1 | Poppins |
| `display-2` | 64px | 700 Bold | 1.1 | Poppins |
| `display-3` | 52px | 600 Semibold | 1.1 | Poppins |

## Headings (6 styles) — Content hierarchy

| Style | Size | Weight | Line Height | Font |
|-------|------|--------|-------------|------|
| `h1` | 48px | 600 Semibold | 1.5 | Poppins |
| `h2` | 42px | 600 Semibold | 1.5 | Poppins |
| `h3` | 32px | 600 Semibold | 1.5 | Poppins |
| `h4` | 28px | 500 Medium | 1.5 | Poppins |
| `h5` | 22px | 500 Medium | 1.5 | Poppins |
| `h6` | 18px | 500 Medium | 1.5 | Poppins |

## Body (5 styles) — Readable text

| Style | Size | Weight | Line Height | Font |
|-------|------|--------|-------------|------|
| `body-xl` | 22px | 400 Regular | 1.75 | Roboto |
| `body-lg` | 18px | 400 Regular | 1.75 | Roboto |
| `body-md` | 16px | 400 Regular | 1.5 | Roboto |
| `body-sm` | 14px | 400 Regular | 1.5 | Roboto |
| `body-xs` | 12px | 400 Regular | 1.5 | Roboto |

## Labels (4 styles) — Forms, tags

| Style | Size | Weight | Line Height | Font |
|-------|------|--------|-------------|------|
| `label-lg` | 16px | 500 Medium | 1.5 | Roboto |
| `label-md` | 14px | 500 Medium | 1.5 | Roboto |
| `label-sm` | 12px | 500 Medium | 1.5 | Roboto |
| `label-xs` | 10px | 500 Medium | 1.5 | Roboto |

## Buttons (3 styles) — Interactive elements

| Style | Size | Weight | Line Height | Font |
|-------|------|--------|-------------|------|
| `button-lg` | 18px | 500 Medium | 1.1 | Poppins |
| `button-md` | 16px | 500 Medium | 1.1 | Poppins |
| `button-sm` | 14px | 500 Medium | 1.1 | Poppins |

## Meta (2 styles) — Captions, overlines

| Style | Size | Weight | Line Height | Font |
|-------|------|--------|-------------|------|
| `caption` | 12px | 400 Regular | 1.5 | Roboto |
| `overline` | 10px | 600 Semibold | 1.5 | Roboto |

---

## Font Sizes

| Token | Value |
|-------|-------|
| `--font-size-10` | 10px |
| `--font-size-12` | 12px |
| `--font-size-14` | 14px |
| `--font-size-16` | 16px |
| `--font-size-18` | 18px |
| `--font-size-22` | 22px |
| `--font-size-28` | 28px |
| `--font-size-32` | 32px |
| `--font-size-42` | 42px |
| `--font-size-48` | 48px |
| `--font-size-52` | 52px |
| `--font-size-64` | 64px |
| `--font-size-72` | 72px |

## Font Weights

| Token | Value | Use |
|-------|-------|-----|
| `--font-weight-regular` | 400 | Body text |
| `--font-weight-medium` | 500 | Labels, buttons |
| `--font-weight-semibold` | 600 | Headings |
| `--font-weight-bold` | 700 | Display text |

## Line Heights

| Token | Value | Use |
|-------|-------|-----|
| `--line-height-tight` | 1.1 | Display, buttons |
| `--line-height-normal` | 1.5 | Standard text |
| `--line-height-relaxed` | 1.75 | Long-form reading |

---

## Best Practices

- Use `display-*` only for hero sections
- Use `h1`–`h6` for content hierarchy
- Use `body-md` as default paragraph style
- Use `label-md` for form labels
- Use `caption` for helper/error text under inputs
- Pair primary color with headings, secondary with body text
- Use `overline` with `text-transform: uppercase; letter-spacing: 0.1em` for category labels
