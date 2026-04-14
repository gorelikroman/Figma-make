# 📋 Project Overview - UI Kit Starter Template

Clean starter project with complete design system. **No demo UI** - just pure components and styles ready to use.

---

## 🎯 Purpose

This is a **starter template**, not a showcase. Use it as a foundation for new React projects with a professional design system already configured.

---

## 📁 File Structure

```
/
├── 📚 Documentation (8 files)
│   ├── START_HERE.md              ⭐ Read this first!
│   ├── README.md                  📖 Complete overview
│   ├── QUICK_START.md             🚀 3-minute guide
│   ├── USAGE_GUIDE.md             📘 Full API reference
│   ├── TEXT_STYLES_GUIDE.md       ✍️ Typography system
│   ├── UI_KIT_README.md           🎨 Component overview
│   ├── COPY_TO_PROJECT.md         📦 Integration guide
│   └── PROJECT_OVERVIEW.md        📋 This file
│
├── /src
│   ├── /app
│   │   ├── App.tsx                ← Your starting point (clean!)
│   │   └── /components
│   │       ├── /design-kit        ← 11 production components
│   │       │   ├── MainButton.tsx
│   │       │   ├── IconButton.tsx
│   │       │   ├── MainCheckbox.tsx
│   │       │   ├── MainRadio.tsx
│   │       │   ├── MainSwitcher.tsx
│   │       │   ├── MainProgressBar.tsx
│   │       │   ├── MainInput.tsx
│   │       │   ├── MainDropdown.tsx
│   │       │   ├── MainAccordion.tsx
│   │       │   ├── MainBreadcrumbs.tsx
│   │       │   ├── Image.tsx
│   │       │   └── index.ts       (barrel export)
│   │       │
│   │       ├── /figma             (Figma Make utilities)
│   │       └── /ui                (shadcn/ui components - optional)
│   │
│   └── /styles
│       ├── tokens.css             ← 600+ design tokens
│       ├── fonts.css              ← Poppins + Roboto
│       ├── theme.css              ← Tailwind + base styles
│       ├── tailwind.css           (Tailwind directives)
│       └── index.css              (imports all styles)
│
├── package.json
├── vite.config.ts
└── postcss.config.mjs
```

---

## 🎨 What's Included

### ✅ Components (11)
All in `/src/app/components/design-kit/`:

1. **MainButton** - 7 colors × 3 styles (solid, outline, ghost)
2. **IconButton** - Icon-only buttons with 4 variants
3. **MainCheckbox** - Animated checkboxes
4. **MainRadio** - Radio button groups
5. **MainSwitcher** - Toggle switches
6. **MainProgressBar** - Progress indicators
7. **MainInput** - Text inputs with validation
8. **MainDropdown** - Select dropdowns
9. **MainAccordion** - Expandable sections
10. **MainBreadcrumbs** - Navigation breadcrumbs
11. **Image** - Images with blur-up loading

### ✅ Design System

**600+ Design Tokens** (`/src/styles/tokens.css`):
- Colors: 7 palettes with 5-17 shades each
- Typography: 48 text style variables
- Spacing: gap-0 to gap-100
- Border radius: xs to xxl
- Shadows, borders, and more

**Typography System** (48 styles):
- Display (3) - 72px, 64px, 52px
- Headings (6) - H1-H6
- Body (5) - XL, LG, MD, SM, XS
- Labels (4) - LG, MD, SM, XS
- Buttons (3) - LG, MD, SM
- Meta (2) - Caption, Overline

**Fonts** (`/src/styles/fonts.css`):
- Poppins - Headings, buttons
- Roboto - Body text, forms

---

## 🚀 How to Use

### 1️⃣ Start Development
```bash
npm run dev
```

### 2️⃣ Open `/src/app/App.tsx`

Currently shows a simple welcome message. **Replace it with your app!**

### 3️⃣ Import Components

```tsx
import { MainButton, MainInput } from './components/design-kit';

function App() {
  return (
    <div className="p-6">
      <MainInput label="Email" type="email" />
      <MainButton text="Submit" color="primary" style="solid" />
    </div>
  );
}
```

### 4️⃣ Use Design Tokens

```tsx
<div style={{
  background: 'var(--mapped-surface-card)',
  color: 'var(--mapped-text-primary)',
  padding: 'var(--size-gap-24)',
  borderRadius: 'var(--size-radius-m)'
}}>
  Your content
</div>
```

### 5️⃣ Use Typography

```tsx
<h1 style={{
  fontFamily: 'var(--text-h1-family)',
  fontSize: 'var(--text-h1-size)',
  fontWeight: 'var(--text-h1-weight)',
  lineHeight: 'var(--text-h1-line-height)',
  color: 'var(--mapped-text-primary)'
}}>
  Title
</h1>
```

---

## 📚 Documentation Guide

**Start here:**
1. **[START_HERE.md](./START_HERE.md)** ⭐ - First steps
2. **[QUICK_START.md](./QUICK_START.md)** - 3-minute quickstart

**Deep dive:**
3. **[TEXT_STYLES_GUIDE.md](./TEXT_STYLES_GUIDE.md)** - Typography
4. **[USAGE_GUIDE.md](./USAGE_GUIDE.md)** - Component API
5. **[README.md](./README.md)** - Full overview

**Integration:**
6. **[COPY_TO_PROJECT.md](./COPY_TO_PROJECT.md)** - Copy to existing project

---

## 🎯 Key Features

✅ **Clean Start** - No demo UI, just code  
✅ **TypeScript** - Full type safety  
✅ **Design Tokens** - BRAND → ALIAS → MAPPED  
✅ **48 Text Styles** - Complete typography system  
✅ **11 Components** - Production-ready  
✅ **Documented** - 8 comprehensive guides  
✅ **Accessible** - ARIA labels, keyboard nav  
✅ **Responsive** - Mobile-first with 768px breakpoint  

---

## 🔧 Token System Architecture

```
BRAND TOKENS
  ↓ (reference)
ALIAS TOKENS
  ↓ (reference)
MAPPED TOKENS
  ↓ (used in components)
COMPONENTS
```

**Example:**
```
--brand-green-dark-600: #00734a        (BRAND)
  ↓
--alias-primary-500: var(--brand-green-dark-600)  (ALIAS)
  ↓
--mapped-surface-primary: var(--alias-primary-500)  (MAPPED)
  ↓
background: var(--mapped-surface-primary)     (COMPONENT)
```

This allows changing the entire color scheme by updating BRAND tokens.

---

## 💡 Design Philosophy

### Token-Based
All values come from design tokens. No hardcoded colors or sizes.

### Semantic Naming
Use `--mapped-text-primary` not `--color-gray-900`. Meaning over implementation.

### Component-Focused
Components are self-contained with all states (hover, focus, disabled).

### TypeScript First
Full type definitions for props and better DX.

### Accessibility
ARIA labels, keyboard navigation, screen reader support built-in.

---

## 🎨 Color Schemes Available

| Scheme | Use Case |
|--------|----------|
| **primary** | Main actions, CTAs |
| **neutral-dark** | Alternative buttons |
| **neutral-medium** | Secondary actions |
| **neutral-light** | Subtle actions |
| **error** | Destructive actions |
| **warning** | Caution |
| **info** | Information |

---

## 🗂️ Optional Folders

### `/src/app/components/ui/`
Contains shadcn/ui components (optional). You can:
- Keep them for additional components
- Remove if you only need design-kit

### `/src/app/components/figma/`
Contains Figma Make utilities:
- `ImageWithFallback.tsx` - Used by Figma Make

---

## 📦 Ready to Ship

This project is production-ready:
- ✅ No console errors
- ✅ No missing dependencies
- ✅ All components tested
- ✅ Full TypeScript coverage
- ✅ Comprehensive documentation
- ✅ Clean, minimal starting point

---

## 🚀 Next Steps

1. Read **[START_HERE.md](./START_HERE.md)**
2. Open `/src/app/App.tsx` and start coding
3. Import components from `./components/design-kit`
4. Use design tokens for consistency
5. Build your app! 🎉

---

**This is your starting point. Make it yours! 🎨✨**

_Clean template • 11 components • 48 text styles • 600+ tokens • Production-ready_
