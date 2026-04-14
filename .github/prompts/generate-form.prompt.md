---
description: "Generate a complete form component following DoktorABC design system rules. Produces accessible, responsive, token-compliant form code."
agent: "agent"
argument-hint: "Describe the form: purpose, fields, and actions"
---

# Generate Form Component

You are generating a form component for the DoktorABC UI Kit project.

## Mandatory Context

Before writing any code, load and follow ALL rules from:
- [Form rules](../instructions/ui-forms.instructions.md)
- [Workspace instructions](../copilot-instructions.md)

## Input

The user describes the form. Extract:
1. **Form purpose** — what the form does (login, registration, settings, etc.)
2. **Fields** — list of inputs with types (text, email, password, dropdown, checkbox, radio, toggle)
3. **Actions** — primary action, secondary actions, destructive actions
4. **Layout** — single section or multi-section, single or multi-column
5. **Variant** — default or compact (affects field gap)

If any of these are unclear, ask the user before generating.

## Output Structure

Generate a single `.tsx` file with this structure:

```
1. Imports (design-kit barrel + React hooks)
2. Interface for props (if needed)
3. Component function
   a. Form container (padding from tokens, optional card background)
   b. Form header section (title + subtitle, section gap)
   c. Fields section (consistent field gap)
      - Multi-column groups with responsive collapse
   d. Action group (button hierarchy: primary + secondary)
4. Export
```

## Generation Rules

### Imports
```tsx
import { MainInput, MainDropdown, MainCheckbox, MainRadio, MainSwitcher, MainButton } from './components/design-kit';
```
Only import components you actually use.

### Container
```tsx
<div style={{
  padding: 'var(--size-gap-24)',        // desktop; var(--size-gap-16) on mobile via className
  background: 'var(--mapped-surface-card)',
  borderRadius: 'var(--size-radius-l)',
}}>
```

### Fields Layout
```tsx
{/* Single column */}
<div className="flex flex-col" style={{ gap: 'var(--size-gap-16)' }}>
  <MainInput label="Email" inputId="email" placeholder="your@email.com" type="email" />
</div>

{/* Two columns with responsive collapse */}
<div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 'var(--size-gap-16)' }}>
  <MainInput label="First name" inputId="first-name" />
  <MainInput label="Last name" inputId="last-name" />
</div>
```

### Section Separation
Between form sections (header → fields → actions), use section gap:
```tsx
<div className="flex flex-col" style={{ gap: 'var(--size-gap-vertical-sm)' }}>
  {/* section 1: header */}
  {/* section 2: fields */}
  {/* section 3: actions */}
</div>
```

### Action Group
```tsx
{/* Desktop: row, right-aligned. Mobile: column, full-width, reversed order */}
<div className="flex flex-col-reverse lg:flex-row lg:justify-end" style={{ gap: 'var(--size-gap-16)' }}>
  <MainButton text="Cancel" style="outline" color="neutral-dark" className="w-full lg:w-auto" />
  <MainButton text="Save changes" style="solid" color="primary" className="w-full lg:w-auto" />
</div>
```

### Labels
- Every field: `label` prop is required and non-empty
- Use nouns in sentence case: "Email", "Date of birth", "Phone number"
- `placeholder` is a format hint only, never duplicates label

### Field IDs
- Every `MainInput`: provide `inputId` prop OR rely on auto-generated ID
- Pattern: `inputId="form-name-field-name"` (e.g. `inputId="login-email"`)

## Self-Check

After generating, verify against this checklist:
- [ ] Only design-kit components (no native `<input>`, `<select>`, `<button>`)
- [ ] No inline hex/rgb/hsl, no arbitrary px/rem for spacing or radius
- [ ] Exactly 1 `style="solid" color="primary"` button
- [ ] Secondary buttons use `outline` or `ghost`
- [ ] All fields have `label` prop
- [ ] Field gap consistent (`--size-gap-16` or `--size-gap-12` for compact)
- [ ] Section gap > field gap
- [ ] Multi-column uses `grid-cols-1 lg:grid-cols-2`
- [ ] Buttons `w-full lg:w-auto`
- [ ] Button text is action-oriented, max 3 words
- [ ] Container padding from tokens

If any check fails, fix the code before presenting to the user.
