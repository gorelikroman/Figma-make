# ⚡ Quick Start - UI Kit for Figma Make

## 🎯 In 3 Minutes

### 1️⃣ Copy Files (2 min)

```
📁 FROM current project → TO NEW project:

/src/app/components/design-kit/   → copy entire folder
/src/styles/tokens.css            → copy file
/src/styles/fonts.css             → copy file
/src/styles/theme.css             → copy file
```

### 2️⃣ Import Styles (30 sec)

```tsx
// At the top of /src/app/App.tsx
import '../styles/tokens.css';
import '../styles/fonts.css';
import '../styles/theme.css';
```

### 3️⃣ Use Components (30 sec)

```tsx
import { MainButton, MainInput } from './components/design-kit';

export default function App() {
  return (
    <div className="p-6">
      <MainButton text="Click Me" color="primary" style="solid" />
      <MainInput label="Email" placeholder="Enter email" />
    </div>
  );
}
```

**Done! 🎉**

---

## 🎨 Component Cheatsheet

### 🔘 Buttons

```tsx
// Main button
<MainButton 
  text="Save" 
  color="primary"        // primary | neutral-dark | neutral-medium | neutral-light | error | warning | info
  style="solid"          // solid | outline | ghost
  disabled={false}
/>

// Icon button
<IconButton 
  color="primary"        // neutral | outline | primary | simple
  style="circular"       // rectangle | circular
  icon="/icon.svg"       // optional
/>
```

### 📝 Forms

```tsx
// Text input
<MainInput 
  label="Email"
  type="email"           // text | email | password | search
  placeholder="your@email.com"
  error="Invalid email"  // optional
/>

// Checkbox
<MainCheckbox 
  label="I agree"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>

// Radio
<MainRadio 
  name="option"
  value="1"
  label="Option 1"
  checked={selected === '1'}
/>

// Switcher
<MainSwitcher 
  label="Enable"
  checked={enabled}
/>

// Dropdown
<MainDropdown 
  label="Choose"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}
/>
```

### 📊 Indicators

```tsx
// Progress bar
<MainProgressBar 
  value={75}
  max={100}
  showLabel={true}
  color="primary"        // primary | error | warning | info
/>
```

### 🗂️ Navigation

```tsx
// Accordion
<MainAccordion 
  title="Section"
  isOpen={open}
  onToggle={() => setOpen(!open)}
>
  Content here
</MainAccordion>

// Breadcrumbs
<MainBreadcrumbs 
  items={[
    { label: 'Home', href: '/' },
    { label: 'Page' }
  ]}
/>
```

### 🖼️ Media

```tsx
// Image with blur-up effect
<Image 
  src="/photo.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

---

## 🎨 Button Colors

```tsx
color="primary"           // 🟢 Green gradient
color="neutral-dark"      // ⚫ Dark gray
color="neutral-medium"    // ⚪ Medium gray  
color="neutral-light"     // ◻️ Light gray
color="error"             // 🔴 Red
color="warning"           // 🟠 Orange
color="info"              // 🔵 Blue
```

---

## 🎨 Button Styles

```tsx
style="solid"    // ■ Filled
style="outline"  // □ Outlined
style="ghost"    // _ Transparent + underlined
```

---

## 📦 Importing Components

### Option A: Individual imports
```tsx
import { MainButton } from './components/design-kit/MainButton';
import { MainInput } from './components/design-kit/MainInput';
```

### Option B: Via index (recommended)
```tsx
import { 
  MainButton, 
  MainInput, 
  MainCheckbox,
  IconButton,
  MainProgressBar 
} from './components/design-kit';
```

---

## 🎯 Ready-to-Use Examples

### Login Form

```tsx
import { MainButton, MainInput, MainCheckbox } from './components/design-kit';

function LoginForm() {
  return (
    <div className="max-w-sm mx-auto space-y-4 p-6">
      <MainInput label="Email" type="email" />
      <MainInput label="Password" type="password" />
      <MainCheckbox label="Remember me" />
      <MainButton text="Sign In" color="primary" style="solid" className="w-full" />
    </div>
  );
}
```

### Card Component

```tsx
import { MainButton, Image } from './components/design-kit';

function Card() {
  return (
    <div className="p-6 rounded-[16px]" style={{ background: 'var(--mapped-surface-card)' }}>
      <Image src="/photo.jpg" alt="Product" width={400} height={300} />
      <h3 className="text-[22px] my-4">Product Name</h3>
      <MainButton text="Buy Now" color="primary" style="solid" />
    </div>
  );
}
```

### Settings Panel

```tsx
import { MainSwitcher, MainDropdown } from './components/design-kit';

function Settings() {
  return (
    <div className="space-y-4">
      <MainSwitcher label="Enable notifications" />
      <MainSwitcher label="Dark mode" />
      <MainDropdown 
        label="Language"
        options={[
          { value: 'en', label: 'English' },
          { value: 'ru', label: 'Русский' }
        ]}
      />
    </div>
  );
}
```

---

## 🔧 CSS Variables

### Colors

```css
var(--mapped-text-primary)      /* Primary text */
var(--mapped-text-secondary)    /* Secondary text */
var(--mapped-text-on-primary)   /* Text on colored background */

var(--mapped-surface-card)      /* Card background */
var(--mapped-surface-background)/* Page background */

var(--mapped-border-subtle)     /* Subtle border */
var(--mapped-border-white)      /* White border */
```

### Fonts

```css
var(--font-family-primary)      /* Poppins - headings */
var(--font-family-secondary)    /* Roboto - body text */
```

### Text Styles

Complete typography system with semantic text styles:

```css
/* Display styles (72px, 64px, 52px) - for hero sections */
var(--text-display-1-family)
var(--text-display-1-size)
var(--text-display-1-weight)
var(--text-display-1-line-height)

/* Heading styles (H1: 48px, H2: 42px, H3: 32px, H4: 28px, H5: 22px, H6: 18px) */
var(--text-h1-family)
var(--text-h1-size)
var(--text-h1-weight)
var(--text-h1-line-height)
/* ... h2, h3, h4, h5, h6 */

/* Body text (XL: 22px, LG: 18px, MD: 16px, SM: 14px, XS: 12px) */
var(--text-body-md-family)
var(--text-body-md-size)
var(--text-body-md-weight)
var(--text-body-md-line-height)
/* ... xl, lg, sm, xs */

/* Labels (LG: 16px, MD: 14px, SM: 12px, XS: 10px) */
var(--text-label-md-family)
var(--text-label-md-size)
var(--text-label-md-weight)
var(--text-label-md-line-height)

/* Buttons (LG: 18px, MD: 16px, SM: 14px) */
var(--text-button-md-family)
var(--text-button-md-size)
var(--text-button-md-weight)
var(--text-button-md-line-height)

/* Caption & Overline */
var(--text-caption-family)      /* 12px regular */
var(--text-overline-family)     /* 10px semibold */
```

### Usage

```tsx
<div style={{ 
  background: 'var(--mapped-surface-card)',
  color: 'var(--mapped-text-primary)',
  fontFamily: 'var(--font-family-secondary)'
}}>
  Content
</div>

// Typography example
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
  Paragraph text
</p>
```

---

## ✅ Checklist

- [ ] Copied `/src/app/components/design-kit/`
- [ ] Copied 3 files from `/src/styles/`
- [ ] Added style imports to App.tsx
- [ ] Verified button hover effects work
- [ ] Verified fonts loaded correctly

---

## 🚀 Next Steps

1. **Read examples:** [UI_KIT_README.md](./UI_KIT_README.md)
2. **Full API reference:** [USAGE_GUIDE.md](./USAGE_GUIDE.md)
3. **Typography system:** [TEXT_STYLES_GUIDE.md](./TEXT_STYLES_GUIDE.md)
4. **Copy instructions:** [COPY_TO_PROJECT.md](./COPY_TO_PROJECT.md)

---

**Ready to Use! 🎨✨**

_11 components | Full TypeScript | Complete Typography System | All hovers working | Responsive | Accessible_