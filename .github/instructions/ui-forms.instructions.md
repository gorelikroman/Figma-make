---
description: "Use when generating, editing, or reviewing form UI code. Covers form layout, button hierarchy, spacing, accessibility, responsive behavior, and design system compliance for DoktorABC forms."
applyTo: "src/app/**"
---

# Form Rules — DoktorABC Design System

These rules are MANDATORY when generating or editing any form in `src/app/`. Violations are errors unless marked `[warn]`.

## Components (FORM-DS-001)

Only design-kit components for form controls. Import from barrel:

```tsx
import { MainInput, MainDropdown, MainCheckbox, MainRadio, MainSwitcher, MainButton, IconButton } from './components/design-kit';
```

| Need | Component |
|------|-----------|
| Text input | `MainInput` |
| Select | `MainDropdown` |
| Checkbox | `MainCheckbox` |
| Radio | `MainRadio` |
| Toggle | `MainSwitcher` |
| Action button | `MainButton` |
| Icon-only button | `IconButton` |

NEVER use native `<input>`, `<select>`, `<button>`, `<textarea>` directly in forms.

If a control type is missing from the kit, create it inside `design-kit/` following existing token/pattern conventions.

## Tokens Only — No Inline Values (FORM-DS-002, FORM-SPACING-001)

All colors, border-radius, and spacing MUST come from CSS variables in `tokens.css`.

**Colors**: `var(--mapped-*)`, `var(--alias-*)`, `var(--brand-*)` only. No hex/rgb/hsl/oklch inline.

**Border-radius** (desktop/mobile):
- `--size-radius-none` (0), `--size-radius-xxs` (2), `--size-radius-xs` (4/3), `--size-radius-s` (8/6), `--size-radius-m` (12/8), `--size-radius-l` (16/12), `--size-radius-xl` (24/16), `--size-radius-xxl` (32/24), `--size-radius-full` (999)

**Spacing** tokens: 0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 60, 64, 68, 76, 84, 92, 100.

No arbitrary px/rem/em. No Tailwind arbitrary values (`gap-[15px]`, `rounded-[14px]`, `bg-[#hex]`).

## Button Hierarchy (FORM-ACTIONS-001, 002, 003)

### One primary CTA per form
Exactly ONE button with `style="solid" color="primary"` per form. All others must be `outline` or `ghost`.

### Secondary must be visually weaker
If primary is `solid` + `primary`, secondary must use `outline` or `ghost` with `neutral-dark`/`neutral-medium`/`neutral-light`. Secondary CANNOT have gradient background (reserved for primary solid).

**Default secondary**: `style="outline" color="neutral-dark"`.

### Destructive actions require confirmation
- Use `style="outline" color="error"` or `style="ghost" color="error"` — NOT `solid error` as primary.
- If destructive is the only action, a confirm dialog is required before execution.
- Position: destructive goes RIGHT of primary on desktop, BELOW primary on mobile.

**Fallback**: If two equal actions needed, use `solid primary` + `solid neutral-dark`.

## Spacing Rules (FORM-SPACING-002, 003, 004)

### Field gap
- Default: `var(--size-gap-16)` (16px). Compact: `var(--size-gap-12)`.
- Gap between fields MUST be consistent within a single form. `[warn]`
- Minimum: `var(--size-gap-8)`.

### Section gap
- Must be STRICTLY GREATER than field gap. Ratio: `section_gap >= field_gap × 1.5`. `[warn]`
- Recommended: `var(--size-gap-vertical-sm)` (26px desktop / 20px mobile) or `var(--size-gap-vertical-md)` (34/26).
- If form has no sections, this rule does not apply.

### Container padding
- Desktop: `var(--size-gap-24)`. Mobile: `var(--size-gap-16)`.
- If form is in a card, use `var(--size-radius-l)` or `var(--size-radius-m)` for border-radius.
- No arbitrary padding values.

## Fields & Labels (FORM-FIELDS-001, FORM-CONTENT-001)

### Every field must have a label
- `label` prop is REQUIRED and non-empty on every `MainInput` and `MainDropdown`.
- `placeholder` is a format hint (e.g. "your@email.com"), NOT a label replacement.
- Do NOT duplicate label text in placeholder.

### Consistent label style within a form `[warn]`
- Use NOUNS in sentence case: "Email", "First name", "Date of birth".
- Do NOT mix nouns, instructions ("Enter your..."), and questions ("Agree?") in one form.
- No ALL CAPS (reserved for overline text style).

## Button Text (FORM-CONTENT-002) `[warn]`

- Action-oriented verbs: "Save changes", "Create account", "Book appointment".
- No generic text: "OK", "Submit", "Click here", "Yes", "No".
- Max 3 words for primary button.
- Fallback for universal dialogs: "Confirm" / "Cancel".

## Accessibility (FORM-A11Y-001)

- Every `MainInput` MUST have `inputId` prop set (or rely on auto-generated ID via `useId`).
- `<label htmlFor>` must match `<input id>` — MainInput handles this internally when `inputId` is provided.
- Error/helper text must be linked via `aria-describedby`.
- If label is visually hidden (floating), it must still exist in DOM for screen readers.

## Responsive Layout (FORM-RESPONSIVE-001, 002, 003)

### Mobile-first, breakpoint at 768px (`lg:` prefix)

### Fields full-width on mobile `[warn]`
- All inputs: `w-full` by default.
- Buttons in action group: `w-full` on mobile, `w-auto` on desktop → `className="w-full lg:w-auto"`.

### Multi-column collapses `[warn]`
- Always: `grid grid-cols-1 lg:grid-cols-2` (never `grid-cols-2` without mobile fallback).
- Collapse order: left→right becomes top→bottom.
- Never hide required fields on mobile (`hidden` is forbidden for required fields).

### Touch targets `[warn]`
- Minimum 44×44px for all interactive elements on mobile.
- Kit components already comply: MainInput 48px, MainButton 48px, IconButton 56px.
- Custom elements: set `min-height: 44px` explicitly.
- Minimum 8px gap between touch targets.

## Quick Checklist

Before finishing any form code, verify:

- [ ] Only design-kit components used (no native HTML form elements)
- [ ] No inline hex/rgb, no arbitrary px for spacing or radius
- [ ] Exactly 1 primary solid button; secondary is outline/ghost
- [ ] Destructive actions use outline/ghost error (or solid error + confirm dialog)
- [ ] All fields have non-empty `label` prop
- [ ] Field gap is consistent (`--size-gap-16` default)
- [ ] Section gap > field gap
- [ ] Container padding from tokens
- [ ] `inputId` provided or auto-generated on every MainInput
- [ ] `grid-cols-1 lg:grid-cols-2` for multi-column (not `grid-cols-2` alone)
- [ ] Buttons are `w-full` on mobile
- [ ] Button text is action-oriented, max 3 words
