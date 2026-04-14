# 🎨 UI Kit for Figma Make

Full-featured React design system converted from EJS components in GitHub repository `gorelikroman/Figma-make/tree/main/figma-make-context`.

## ✨ What's Included

### 🔘 Buttons (2)
- **MainButton** - 3 styles (solid/outline/ghost) × 7 colors
- **IconButton** - 4 variants × 2 shapes (rectangle/circular)

### 📝 Forms (5)
- **MainInput** - text fields with validation
- **MainCheckbox** - checkboxes
- **MainRadio** - radio buttons
- **MainSwitcher** - toggle switches
- **MainDropdown** - select dropdowns

### 🗂️ Navigation (2)
- **MainAccordion** - accordions
- **MainBreadcrumbs** - breadcrumb navigation

### 📊 Indicators (1)
- **MainProgressBar** - progress bars with 4 colors

### 🖼️ Media (1)
- **Image** - images with blur-up loading effect

**Total: 11 components** ✅

---

## 🚀 Quick Start

### 1. Copy files to new project

```
📁 Copy:
├── /src/app/components/design-kit/  (all components)
├── /src/styles/tokens.css           (CSS variables)
├── /src/styles/fonts.css            (Poppins + Roboto)
└── /src/styles/theme.css            (base styles)
```

### 2. Import styles

```tsx
// In your App.tsx
import '../styles/tokens.css';
import '../styles/fonts.css';
import '../styles/theme.css';
```

### 3. Use components

**Option A: Import individual components**
```tsx
import { MainButton } from './components/design-kit/MainButton';
import { MainInput } from './components/design-kit/MainInput';
```

**Option B: Import from index (recommended)**
```tsx
import { 
  MainButton, 
  MainInput, 
  MainCheckbox,
  IconButton 
} from './components/design-kit';
```

---

## 📖 Usage Examples

### Simple Form

```tsx
import { MainButton, MainInput, MainCheckbox } from './components/design-kit';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6 space-y-4">
      <MainInput 
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <MainCheckbox 
        label="Subscribe to newsletter"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
      />
      
      <MainButton 
        text="Submit"
        color="primary"
        style="solid"
        className="w-full"
      />
    </div>
  );
}
```

### Button Group

```tsx
import { MainButton, IconButton } from './components/design-kit';

function ButtonGroup() {
  return (
    <div className="flex gap-3 items-center">
      <MainButton text="Save" color="primary" style="solid" />
      <MainButton text="Cancel" color="neutral-dark" style="outline" />
      <IconButton color="primary" style="circular" />
    </div>
  );
}
```

### Upload Progress

```tsx
import { MainProgressBar } from './components/design-kit';

function UploadProgress({ progress }: { progress: number }) {
  return (
    <MainProgressBar 
      value={progress}
      max={100}
      showLabel={true}
      color="primary"
    />
  );
}
```

---

## 🎨 Color System

### Available Colors

```tsx
// MainButton colors
color="primary"           // Green gradient
color="neutral-dark"      // Dark gray
color="neutral-medium"    // Medium gray
color="neutral-light"     // Light gray
color="error"             // Red
color="warning"           // Orange
color="info"              // Blue
```

### Button Styles

```tsx
style="solid"    // Filled
style="outline"  // Outlined
style="ghost"    // Transparent with underline
```

---

## 🎯 CSS Variables (Tokens)

All components use CSS variables from `tokens.css`:

```css
/* Text colors */
--mapped-text-primary
--mapped-text-secondary
--mapped-text-on-primary

/* Backgrounds */
--mapped-surface-card
--mapped-surface-background
--mapped-surface-primary

/* Borders */
--mapped-border-subtle
--mapped-border-white

/* Fonts */
--font-family-primary   /* Poppins - headings */
--font-family-secondary /* Roboto - body */
```

### How to Customize Colors for Your Brand

Edit in `tokens.css`:

```css
:root {
  /* Your brand colors */
  --brand-primary-400: #your-color;
  --brand-secondary-400: #your-color;
  
  /* Everything else auto-updates */
}
```

---

## 📱 Responsive Design

All components are responsive (mobile-first):

```tsx
// Buttons automatically adapt:
// Mobile: 14px, padding 18px
// Desktop (lg:): 22px, padding 32px

<MainButton text="Responsive" />
```

Use Tailwind for additional responsiveness:

```tsx
<MainButton 
  text="Click"
  className="w-full lg:w-auto"
/>
```

---

## ♿ Accessibility

All components include:
- ✅ ARIA attributes
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ Disabled states
- ✅ Screen reader support

---

## 🔧 Customization

### Add Custom Classes

```tsx
<MainButton 
  text="Custom"
  className="shadow-xl hover:scale-105 transition-transform"
/>
```

### Override Styles

```tsx
<MainInput 
  label="Custom"
  style={{ 
    border: '2px solid red' 
  }}
/>
```

---

## 📦 Component API

### MainButton
```typescript
interface MainButtonProps {
  text: string;
  style?: 'solid' | 'outline' | 'ghost';
  color?: 'primary' | 'neutral-dark' | 'neutral-medium' | 'neutral-light' | 'error' | 'warning' | 'info';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}
```

### IconButton
```typescript
interface IconButtonProps {
  color?: 'neutral' | 'outline' | 'primary' | 'simple';
  style?: 'rectangle' | 'circular';
  disabled?: boolean;
  icon?: string; // URL to icon
  onClick?: (e: React.MouseEvent) => void;
}
```

### MainInput
```typescript
interface MainInputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'search';
  error?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
```

**For complete API see [USAGE_GUIDE.md](./USAGE_GUIDE.md)**

---

## 🎓 Additional Resources

- 📚 [Full guide](./USAGE_GUIDE.md)
- 🎨 [Original design system](https://github.com/gorelikroman/Figma-make/tree/main/figma-make-context)
- 🔍 [Demo of all components](./src/app/App.tsx) (current project)

---

## ✅ New Project Checklist

- [ ] Copy `/src/app/components/design-kit/`
- [ ] Copy `/src/styles/tokens.css`
- [ ] Copy `/src/styles/fonts.css`
- [ ] Copy `/src/styles/theme.css`
- [ ] Import styles in App.tsx
- [ ] Import needed components
- [ ] Done! 🎉

---

**Built for Figma Make | Full TypeScript | All hover effects working!** ✨
