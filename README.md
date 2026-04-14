# DoktorABC UI Kit

React + TypeScript design system with 11 components, 600+ design tokens, and 48 text styles.

---

## For AI Services — Start Here

Use this section to configure any AI coding service. Point it to this README as the entry file.

### Figma Make

Upload **one** of these as context:

| Option | File | When to use |
|--------|------|-------------|
| Single file | `figma-make-bundle.md` | Simple, all-in-one context |
| Split context | `figma-make-context/` folder | When the service supports multiple files |

### Claude Code / Cursor / Windsurf

Point the agent to this repository. It will auto-discover:
- `.github/copilot-instructions.md` — Global design system rules
- `.github/instructions/ui-forms.instructions.md` — Form-specific rules
- `.github/prompts/generate-form.prompt.md` — Form generation prompt

### GitHub Copilot (VS Code)

No setup needed. Copilot reads `.github/copilot-instructions.md` automatically.

### Lovable / Bolt / v0

Paste this README as context, or link the GitHub repo. Key facts the AI needs:

1. Components are in `src/app/components/design-kit/` — import from barrel `index.ts`
2. All styling uses CSS variables from `src/styles/tokens.css`
3. Token hierarchy: `BRAND → ALIAS → MAPPED` — use `var(--mapped-*)` in components
4. Fonts: Poppins (headings) + Roboto (body)
5. Responsive breakpoint: 768px (mobile-first, `lg:` for desktop)

---

## Project Structure

```
src/
├── app/
│   ├── App.tsx                          # Application entry
│   └── components/
│       └── design-kit/                  # 11 production components
│           ├── MainButton.tsx           # 3 styles × 7 colors
│           ├── IconButton.tsx           # 4 colors × 2 shapes
│           ├── MainInput.tsx            # Text input with validation
│           ├── MainDropdown.tsx         # Select dropdown
│           ├── MainCheckbox.tsx         # Checkbox
│           ├── MainRadio.tsx            # Radio button
│           ├── MainSwitcher.tsx         # Toggle switch
│           ├── MainProgressBar.tsx      # Progress bar
│           ├── MainAccordion.tsx        # Accordion
│           ├── MainBreadcrumbs.tsx      # Breadcrumbs
│           ├── Image.tsx               # Image with blur-up
│           └── index.ts                # Barrel export
├── styles/
│   ├── tokens.css                       # 600+ design tokens
│   ├── fonts.css                        # Font imports
│   └── theme.css                        # Base styles
docs/
├── components.md                        # Full component API
├── typography.md                        # 48 text styles
├── tokens.md                            # Token system reference
└── integration.md                       # How to add to another project
guidelines/
├── examples/                            # AI form rule cards
└── templates/                           # Rule card templates
.github/
├── copilot-instructions.md              # AI workspace rules
├── instructions/ui-forms.instructions.md
└── prompts/generate-form.prompt.md
figma-make-bundle.md                     # Single-file context for Figma Make
figma-make-context/                      # Split context for Figma Make
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

## Documentation

| Document | Content |
|----------|---------|
| [docs/components.md](docs/components.md) | All 11 components — props, types, sizes, examples |
| [docs/typography.md](docs/typography.md) | 48 text styles with usage tables |
| [docs/tokens.md](docs/tokens.md) | Token architecture, colors, spacing, radius |
| [docs/integration.md](docs/integration.md) | How to copy this kit into another project |
| [CHANGELOG.md](CHANGELOG.md) | Version history |
| [ATTRIBUTIONS.md](ATTRIBUTIONS.md) | Third-party credits |

### Add New Component

```tsx
// /src/app/components/design-kit/YourComponent.tsx
import React from 'react';

export const YourComponent: React.FC<Props> = (props) => {
  return (
    <div style={{
      background: 'var(--mapped-surface-card)',
      color: 'var(--mapped-text-primary)'
    }}>
      {/* Your component */}
    </div>
  );
};
```

Then export in `/src/app/components/design-kit/index.ts`:

```tsx
export { YourComponent } from './YourComponent';
```

---

## 📦 Using in Existing Project

See **[COPY_TO_PROJECT.md](./COPY_TO_PROJECT.md)** for step-by-step instructions.

**Quick version:**

1. Copy `/src/app/components/design-kit/` folder
2. Copy `/src/styles/*.css` files
3. Import styles in your main file:
   ```tsx
   import '../styles/tokens.css';
   import '../styles/fonts.css';
   import '../styles/theme.css';
   ```
4. Start using components:
   ```tsx
   import { MainButton } from './components/design-kit';
   ```

---

## ✅ Features

- ✅ **TypeScript** - Full type safety
- ✅ **Accessibility** - ARIA labels, keyboard navigation
- ✅ **Responsive** - Mobile-first design
- ✅ **Hover Effects** - All interactive states
- ✅ **Token System** - Consistent design language
- ✅ **Documentation** - Comprehensive guides
- ✅ **Production Ready** - Battle-tested components

---

## 🏗️ Built With

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS
- **CSS Variables** - Design tokens
- **Google Fonts** - Poppins & Roboto

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