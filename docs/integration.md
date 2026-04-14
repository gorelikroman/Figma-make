# Integration Guide

How to use this UI Kit in another project.

---

## Required Files

```
src/app/components/design-kit/   ← All 11 components + index.ts
src/styles/tokens.css            ← Design tokens (BRAND/ALIAS/MAPPED)
src/styles/fonts.css             ← Poppins + Roboto font imports
src/styles/theme.css             ← Base styles
```

## Step 1: Copy Files

Copy the folders above into your project, keeping the same directory structure.

## Step 2: Import Styles

Add imports at the top of your entry file (e.g., `App.tsx`):

```tsx
import '../styles/tokens.css';   // Must be first
import '../styles/fonts.css';
import '../styles/theme.css';
```

## Step 3: Use Components

```tsx
import { MainButton, MainInput, MainCheckbox } from './components/design-kit';

export default function App() {
  return (
    <div className="p-6">
      <MainInput label="Email" placeholder="your@email.com" />
      <MainCheckbox label="I agree" />
      <MainButton text="Submit" color="primary" style="solid" />
    </div>
  );
}
```

---

## Minimal File Sets

**Buttons only:**
```
src/app/components/design-kit/MainButton.tsx
src/app/components/design-kit/IconButton.tsx
src/app/components/design-kit/index.ts
src/styles/tokens.css
src/styles/fonts.css
```

**Complete form:**
```
src/app/components/design-kit/MainButton.tsx
src/app/components/design-kit/MainInput.tsx
src/app/components/design-kit/MainCheckbox.tsx
src/app/components/design-kit/MainDropdown.tsx
src/app/components/design-kit/MainRadio.tsx
src/app/components/design-kit/index.ts
src/styles/tokens.css
src/styles/fonts.css
```

---

## Verification Checklist

- [ ] `src/app/components/design-kit/` contains all 11 components + `index.ts`
- [ ] `src/styles/` contains `tokens.css`, `fonts.css`, `theme.css`
- [ ] Style imports added to entry file in correct order
- [ ] Components import without errors
- [ ] Poppins and Roboto fonts load in browser
- [ ] Button hover effects work

---

## Troubleshooting

**"Module not found"** — Check import path. From `App.tsx`:
```tsx
// Correct
import { MainButton } from './components/design-kit';
```

**Styles not applied** — Ensure CSS imports are present and `tokens.css` is imported first.

**Fonts not loading** — Check `fonts.css` import. Verify Google Fonts are not blocked by network policies.

**CSS variables undefined** — Ensure `tokens.css` is imported before `theme.css`.
