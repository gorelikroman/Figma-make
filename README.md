# DoktorABC UI Kit

React + TypeScript design system: 11 components, 1400+ design tokens, 48 text styles.

---

## Context Map — For Any AI Service

**Start from this file.** Then load files based on your task.

### 1. Design Tokens (source of truth)
- `src/styles/tokens.css` — All CSS variables: BRAND → ALIAS → MAPPED
- `src/styles/fonts.css` — Poppins + Roboto font-face declarations
- `src/styles/theme.css` — Base styles, Tailwind integration

### 2. React Components (production code)
- `src/app/components/design-kit/*.tsx` — 11 components
- `src/app/components/design-kit/index.ts` — Barrel export

### 3. Figma Make EJS Templates (for Figma Make only)
- `figma-make-context/components/*.ejs` — EJS source blueprints
- `figma-make-context/tailwind.config.js` — Token → Tailwind class mapping

### 4. Documentation
- `docs/components.md` — Full component API (props, types, sizes)
- `docs/typography.md` — 48 text styles with tables
- `docs/tokens.md` — Token architecture, colors, spacing, radius
- `docs/integration.md` — How to copy kit into another project

### 5. Design Rules (AI form generation)
- `.github/copilot-instructions.md` — Global design system constraints
- `.github/instructions/ui-forms.instructions.md` — Form-specific rules
- `.github/prompts/generate-form.prompt.md` — Prompt for form generation
- `guidelines/examples/*.md` — Individual rule cards (16 rules)

---

## Per-Service Setup

| Service | What to provide |
|---------|----------------|
| **Figma Make** | This README + `figma-make-context/` + `src/styles/tokens.css` + `docs/components.md` |
| **Claude Code / Cursor / Windsurf** | Point to this repo. Reads `.github/` auto. Use `@file` to reference specific docs |
| **GitHub Copilot** | Auto-reads `.github/copilot-instructions.md`. No setup needed |
| **Google AI Studio** | Upload: this README + `src/styles/tokens.css` + `docs/components.md` + `docs/tokens.md` |
| **Lovable / Bolt / v0** | Paste this README as context, or link GitHub repo |

---

## Project Structure

```
src/
├── app/
│   ├── App.tsx
│   └── components/
│       └── design-kit/              # 11 production components
│           ├── MainButton.tsx       # 3 styles × 7 colors
│           ├── IconButton.tsx       # 4 colors × 2 shapes
│           ├── MainInput.tsx        # Text input with validation
│           ├── MainDropdown.tsx     # Select dropdown
│           ├── MainCheckbox.tsx
│           ├── MainRadio.tsx
│           ├── MainSwitcher.tsx
│           ├── MainProgressBar.tsx
│           ├── MainAccordion.tsx
│           ├── MainBreadcrumbs.tsx
│           ├── Image.tsx
│           └── index.ts            # Barrel export
├── styles/
│   ├── tokens.css                   # 1400+ design tokens (single source of truth)
│   ├── fonts.css                    # Font imports
│   └── theme.css                    # Base styles
docs/                                # Human + AI-readable documentation
guidelines/examples/                 # AI form rule cards
figma-make-context/                  # EJS templates + Tailwind config (Figma Make only)
.github/                             # AI agent instructions
```

---

## Quick Start

```tsx
import { MainButton, MainInput, MainCheckbox } from './components/design-kit';

export default function App() {
  return (
    <div className="p-6 space-y-4">
      <MainInput label="Email" type="email" placeholder="your@email.com" />
      <MainCheckbox label="I agree to terms" />
      <MainButton text="Submit" color="primary" style="solid" />
    </div>
  );
}
```

---

## Design System

**Token hierarchy** (never bypass):
```
BRAND (raw hex, px)  →  ALIAS (semantic)  →  MAPPED (component-level)
```

**Key variables:**
```css
var(--mapped-surface-background)   /* Page background */
var(--mapped-surface-card)         /* Card background */
var(--mapped-text-primary)         /* Main text */
var(--mapped-text-secondary)       /* Secondary text */
var(--mapped-border-subtle)        /* Light border */
var(--size-gap-16)                 /* Standard spacing */
var(--size-radius-m)               /* Standard radius (12px) */
```

**Colors:** Primary (green), Secondary (light green), Neutral (gray), Error (red), Warning (orange), Info (blue).

**Typography:** 48 styles — Display (3), Headings (6), Body (5), Labels (4), Buttons (3), Meta (2). Pattern: `--text-{style}-{family|size|weight|line-height}`.

---

## Tech Stack

React, TypeScript, Tailwind CSS v4, CSS Variables, Poppins + Roboto (Google Fonts).

---

## 📖 Learn More

- **Token Architecture**: See `/src/styles/tokens.css` comments
- **Component Props**: See **[USAGE_GUIDE.md](./USAGE_GUIDE.md)**
- **Examples**: See **[QUICK_START.md](./QUICK_START.md)**
- **Typography**: See **[TEXT_STYLES_GUIDE.md](./TEXT_STYLES_GUIDE.md)**

---

## 🎯 Common Use Cases

### Login Form
```tsx
import { MainButton, MainInput, MainCheckbox } from './components/design-kit';

<div className="max-w-sm mx-auto space-y-4">
  <MainInput label="Email" type="email" />
  <MainInput label="Password" type="password" />
  <MainCheckbox label="Remember me" />
  <MainButton text="Sign In" color="primary" style="solid" className="w-full" />
</div>
```

### Settings Panel
```tsx
import { MainSwitcher, MainDropdown } from './components/design-kit';

<div className="space-y-4">
  <MainSwitcher label="Enable notifications" />
  <MainSwitcher label="Dark mode" />
  <MainDropdown 
    label="Language"
    values={['English', 'Русский']}
  />
</div>
```

### Card Grid
```tsx
import { MainButton, Image } from './components/design-kit';

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {items.map(item => (
    <div key={item.id} className="p-6 rounded-lg" 
         style={{ background: 'var(--mapped-surface-card)' }}>
      <Image src={item.image} alt={item.title} width={400} height={300} />
      <h3 className="text-[22px] my-4">{item.title}</h3>
      <MainButton text="Learn More" color="primary" style="outline" />
    </div>
  ))}
</div>
```

---

## 🚀 Next Steps

1. **Read** [QUICK_START.md](./QUICK_START.md) - Get started in 3 minutes
2. **Explore** components in `/src/app/components/design-kit/`
3. **Browse** [USAGE_GUIDE.md](./USAGE_GUIDE.md) for API reference
4. **Learn** typography system in [TEXT_STYLES_GUIDE.md](./TEXT_STYLES_GUIDE.md)
5. **Start building** your application!

---

**Ready to Build! 🎨✨**

_11 components | 48 text styles | Full design token system | TypeScript | Accessible | Production-ready_