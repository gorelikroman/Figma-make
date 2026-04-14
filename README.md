# 🎨 UI Kit Starter Project

Production-ready React + TypeScript starter template with complete design system.

> **👉 New to this project?**  
> **Quick:** [GET_STARTED.md](./GET_STARTED.md) (30 sec)  
> **First Steps:** [START_HERE.md](./START_HERE.md) (5 min)  
> **All Docs:** [DOCUMENTATION_INDEX.md](./DOCUMENTATION_INDEX.md)

---

## 📦 What's Included

### ✅ Complete Design System
- **11 UI Components** - Buttons, Forms, Navigation, Indicators
- **48 Text Styles** - Display, Headings, Body, Labels, Buttons, Captions
- **Token System** - BRAND → ALIAS → MAPPED architecture
- **Color Palette** - 7 color schemes with semantic naming
- **Typography** - Poppins (headings) + Roboto (body)
- **Responsive** - Mobile-first with 768px breakpoint

### 📁 Project Structure

```
/src
├── /app
│   ├── App.tsx                      # ← Start here
│   └── /components
│       └── /design-kit              # 11 ready-to-use components
│           ├── MainButton.tsx
│           ├── IconButton.tsx
│           ├── MainCheckbox.tsx
│           ├── MainRadio.tsx
│           ├── MainSwitcher.tsx
│           ├── MainProgressBar.tsx
│           ├── MainInput.tsx
│           ├── MainDropdown.tsx
│           ├── MainAccordion.tsx
│           ├── MainBreadcrumbs.tsx
│           ├── Image.tsx
│           └── index.ts             # Barrel export
│
└── /styles
    ├── tokens.css                   # Design tokens (BRAND/ALIAS/MAPPED)
    ├── fonts.css                    # Poppins & Roboto fonts
    └── theme.css                    # Base styles + Tailwind config

📚 Documentation
├── QUICK_START.md                   # 3-minute quickstart
├── UI_KIT_README.md                 # Component overview
├── USAGE_GUIDE.md                   # Full API reference
├── TEXT_STYLES_GUIDE.md             # Typography system
└── COPY_TO_PROJECT.md               # Integration guide
```

---

## 🚀 Quick Start

### 1. Start Using Components

```tsx
// /src/app/App.tsx
import { MainButton, MainInput, MainCheckbox } from './components/design-kit';

export default function App() {
  return (
    <div className="p-6">
      <MainInput label="Email" type="email" />
      <MainCheckbox label="I agree" />
      <MainButton text="Submit" color="primary" style="solid" />
    </div>
  );
}
```

### 2. Use Typography System

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

<p style={{
  fontFamily: 'var(--text-body-md-family)',
  fontSize: 'var(--text-body-md-size)',
  fontWeight: 'var(--text-body-md-weight)',
  lineHeight: 'var(--text-body-md-line-height)',
  color: 'var(--mapped-text-secondary)'
}}>
  Your content here
</p>
```

### 3. Use CSS Variables

```tsx
<div style={{
  background: 'var(--mapped-surface-card)',
  border: '1px solid var(--mapped-border-subtle)',
  borderRadius: 'var(--size-radius-m)',
  padding: 'var(--size-gap-16)'
}}>
  Card content
</div>
```

---

## 📚 Documentation

| File | Description |
|------|-------------|
| **[QUICK_START.md](./QUICK_START.md)** | 3-minute guide with examples |
| **[UI_KIT_README.md](./UI_KIT_README.md)** | Component overview |
| **[USAGE_GUIDE.md](./USAGE_GUIDE.md)** | Full API reference |
| **[TEXT_STYLES_GUIDE.md](./TEXT_STYLES_GUIDE.md)** | Complete typography system |
| **[COPY_TO_PROJECT.md](./COPY_TO_PROJECT.md)** | How to copy to existing project |

---

## 🎨 Available Components

```tsx
import { 
  MainButton,        // Primary buttons with 7 colors × 3 styles
  IconButton,        // Icon-only buttons
  MainCheckbox,      // Checkboxes with animations
  MainRadio,         // Radio buttons
  MainSwitcher,      // Toggle switches
  MainProgressBar,   // Progress indicators
  MainInput,         // Text inputs with validation
  MainDropdown,      // Select dropdowns
  MainAccordion,     // Expandable sections
  MainBreadcrumbs,   // Navigation breadcrumbs
  Image              // Images with blur-up effect
} from './components/design-kit';
```

---

## 🎯 Text Style System

### Categories
- **Display** (3 styles) - 72px, 64px, 52px - Hero sections
- **Headings** (6 styles) - H1-H6 - Content hierarchy
- **Body** (5 styles) - XL, LG, MD, SM, XS - Readable text
- **Labels** (4 styles) - Forms and tags
- **Buttons** (3 styles) - Interactive elements
- **Meta** (2 styles) - Caption & Overline

### Example

```tsx
// Display 1 - Hero title
fontFamily: 'var(--text-display-1-family)'    // Poppins
fontSize: 'var(--text-display-1-size)'        // 72px
fontWeight: 'var(--text-display-1-weight)'    // 700 (Bold)
lineHeight: 'var(--text-display-1-line-height)' // 1.1

// Body Medium - Standard text
fontFamily: 'var(--text-body-md-family)'      // Roboto
fontSize: 'var(--text-body-md-size)'          // 16px
fontWeight: 'var(--text-body-md-weight)'      // 400 (Regular)
lineHeight: 'var(--text-body-md-line-height)' // 1.5
```

See **[TEXT_STYLES_GUIDE.md](./TEXT_STYLES_GUIDE.md)** for all 48 styles.

---

## 🎨 Design Token System

### Architecture
```
BRAND (base colors/sizes)
  ↓
ALIAS (semantic names)
  ↓
MAPPED (component usage)
```

### Color Categories
- **Primary** - Green dark (#00734a)
- **Secondary** - Green light (#7aba47)
- **Neutral** - Gray scale (17 shades)
- **Error** - Red (#cc0000)
- **Warning** - Orange (#f08e00)
- **Info** - Blue (#257db0)

### Most Used Variables

```css
/* Surfaces */
var(--mapped-surface-background)      /* Page background */
var(--mapped-surface-card)            /* Card background */
var(--mapped-surface-primary)         /* Primary color */

/* Text */
var(--mapped-text-primary)            /* Main text */
var(--mapped-text-secondary)          /* Secondary text */
var(--mapped-text-tertiary)           /* Light text */

/* Borders */
var(--mapped-border-subtle)           /* Light border */
var(--mapped-border-default)          /* Standard border */
var(--mapped-border-focus)            /* Focus state */

/* Spacing */
var(--size-gap-8)                     /* 8px */
var(--size-gap-16)                    /* 16px */
var(--size-gap-24)                    /* 24px */

/* Radius */
var(--size-radius-s)                  /* 8px */
var(--size-radius-m)                  /* 12px */
var(--size-radius-l)                  /* 16px */
```

---

## 🔧 Customization

### Change Primary Color

Edit `/src/styles/tokens.css`:

```css
/* Change brand primary color */
--brand-green-dark-600: #YOUR_COLOR;
```

### Change Font

Edit `/src/styles/fonts.css` and `/src/styles/tokens.css`:

```css
/* Add your font import */
@import url('https://fonts.googleapis.com/css2?family=YourFont');

/* Update font family */
--font-family-primary: 'YourFont', sans-serif;
```

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