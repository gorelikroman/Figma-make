# UI Kit Usage Guide

## 🚀 How to Use This UI Kit in Other Figma Make Projects

### Method 1: Direct File Copy

#### Step 1: Copy Files

```bash
# From current project copy to new project:

# Components
/src/app/components/design-kit/ → /src/app/components/design-kit/

# Styles
/src/styles/tokens.css → /src/styles/tokens.css
/src/styles/fonts.css → /src/styles/fonts.css
/src/styles/theme.css → /src/styles/theme.css

# Fonts (if needed)
/public/fonts/ → /public/fonts/
```

#### Step 2: Import Styles in Your App.tsx

```tsx
// In your /src/app/App.tsx
import '../styles/tokens.css';
import '../styles/fonts.css';
import '../styles/theme.css';
```

#### Step 3: Use Components

```tsx
import { MainButton } from './components/design-kit/MainButton';
import { IconButton } from './components/design-kit/IconButton';
import { MainInput } from './components/design-kit/MainInput';

export default function App() {
  return (
    <div className="p-6">
      <MainButton 
        text="Click Me" 
        color="primary" 
        style="solid" 
      />
      
      <IconButton 
        color="primary" 
        style="circular" 
      />
      
      <MainInput 
        placeholder="Enter text" 
        label="Email"
      />
    </div>
  );
}
```

---

### Method 2: Creating a Reusable Template

#### Create an export file for all components:

**`/src/app/components/design-kit/index.ts`**

```typescript
// Export all components
export { MainButton } from './MainButton';
export type { MainButtonProps } from './MainButton';

export { IconButton } from './IconButton';
export type { IconButtonProps } from './IconButton';

export { MainCheckbox } from './MainCheckbox';
export type { MainCheckboxProps } from './MainCheckbox';

export { MainRadio } from './MainRadio';
export type { MainRadioProps } from './MainRadio';

export { MainSwitcher } from './MainSwitcher';
export type { MainSwitcherProps } from './MainSwitcher';

export { MainProgressBar } from './MainProgressBar';
export type { MainProgressBarProps } from './MainProgressBar';

export { MainInput } from './MainInput';
export type { MainInputProps } from './MainInput';

export { MainDropdown } from './MainDropdown';
export type { MainDropdownProps } from './MainDropdown';

export { MainAccordion } from './MainAccordion';
export type { MainAccordionProps } from './MainAccordion';

export { MainBreadcrumbs } from './MainBreadcrumbs';
export type { MainBreadcrumbsProps } from './MainBreadcrumbs';

export { Image } from './Image';
export type { ImageProps } from './Image';
```

#### Then import like this:

```tsx
import {
  MainButton,
  IconButton,
  MainInput,
  MainCheckbox,
  MainRadio,
  type MainButtonProps,
  type MainInputProps
} from './components/design-kit';
```

---

### Method 3: Quick Start with Ready Layout

Create a base layout component:

**`/src/app/components/Layout.tsx`**

```tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div 
      className="min-h-screen"
      style={{ 
        background: 'var(--mapped-surface-background)',
        color: 'var(--mapped-text-primary)',
        fontFamily: 'var(--font-family-secondary)'
      }}
    >
      {children}
    </div>
  );
};
```

Use it:

```tsx
import { Layout } from './components/Layout';
import { MainButton } from './components/design-kit';

export default function App() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="font-[var(--font-family-primary)] text-[32px] lg:text-[48px] mb-8">
          My App
        </h1>
        
        <MainButton text="Get Started" color="primary" style="solid" />
      </div>
    </Layout>
  );
}
```

---

## 🎨 Customizing for Your Project

### Changing Color Scheme

Edit `/src/styles/tokens.css`:

```css
:root {
  /* Change brand colors to match your brand */
  --brand-primary-400: #your-primary-color;
  --brand-secondary-400: #your-secondary-color;
  
  /* Other tokens auto-update */
}
```

### Changing Fonts

Edit `/src/styles/tokens.css`:

```css
:root {
  --font-family-primary: 'YourHeaderFont', sans-serif;
  --font-family-secondary: 'YourBodyFont', sans-serif;
}
```

Add fonts in `/src/styles/fonts.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

---

## 📦 Components and Their API

### MainButton

```tsx
<MainButton 
  text="Button Text"
  style="solid" | "outline" | "ghost"
  color="primary" | "neutral-dark" | "neutral-medium" | "neutral-light" | "error" | "warning" | "info"
  disabled={false}
  onClick={() => {}}
  className="custom-class"
/>
```

### IconButton

```tsx
<IconButton 
  color="neutral" | "outline" | "primary" | "simple"
  style="rectangle" | "circular"
  icon="/path/to/icon.svg"  // optional, uses default arrow
  disabled={false}
  onClick={() => {}}
/>
```

### MainInput

```tsx
<MainInput 
  label="Label"
  placeholder="Enter text"
  type="text" | "email" | "password" | "search"
  error="Error message"  // optional
  disabled={false}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### MainCheckbox

```tsx
<MainCheckbox 
  label="Accept terms"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  disabled={false}
/>
```

### MainRadio

```tsx
<MainRadio 
  name="group1"
  value="option1"
  label="Option 1"
  checked={selected === 'option1'}
  onChange={(e) => setSelected(e.target.value)}
/>
```

### MainSwitcher

```tsx
<MainSwitcher 
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
  label="Enable feature"
/>
```

### MainProgressBar

```tsx
<MainProgressBar 
  value={75}
  max={100}
  showLabel={true}
  color="primary" | "error" | "warning" | "info"
/>
```

### MainDropdown

```tsx
<MainDropdown 
  label="Select option"
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' }
  ]}
  value={selectedValue}
  onChange={(e) => setSelectedValue(e.target.value)}
  placeholder="Choose..."
/>
```

### MainAccordion

```tsx
<MainAccordion 
  title="Accordion Title"
  isOpen={isOpen}
  onToggle={() => setIsOpen(!isOpen)}
>
  <p>Content goes here</p>
</MainAccordion>
```

### MainBreadcrumbs

```tsx
<MainBreadcrumbs 
  items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Details' }
  ]}
/>
```

### Image (with blur-up effect)

```tsx
<Image 
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

---

## 🎯 Usage Examples

### Registration Form

```tsx
import { MainButton, MainInput, MainCheckbox } from './components/design-kit';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <form className="max-w-md mx-auto space-y-6 p-8">
      <h2 className="font-[var(--font-family-primary)] text-[28px]">
        Sign Up
      </h2>
      
      <MainInput 
        type="email"
        label="Email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <MainInput 
        type="password"
        label="Password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      
      <MainCheckbox 
        label="I agree to Terms & Conditions"
        checked={agreed}
        onChange={(e) => setAgreed(e.target.checked)}
      />
      
      <MainButton 
        text="Create Account"
        color="primary"
        style="solid"
        disabled={!agreed}
        className="w-full"
      />
    </form>
  );
}
```

### Product Card

```tsx
import { MainButton, IconButton, Image } from './components/design-kit';

function ProductCard() {
  return (
    <div 
      className="rounded-[16px] p-6"
      style={{ 
        background: 'var(--mapped-surface-card)',
        border: '1px solid var(--mapped-border-subtle)'
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-[var(--font-family-primary)] text-[22px]">
          Product Name
        </h3>
        <IconButton color="outline" style="circular" />
      </div>
      
      <Image 
        src="/product.jpg"
        alt="Product"
        width={400}
        height={300}
        className="rounded-lg mb-4"
      />
      
      <p 
        className="text-[14px] mb-6"
        style={{ color: 'var(--mapped-text-secondary)' }}
      >
        Product description goes here...
      </p>
      
      <div className="flex gap-3">
        <MainButton 
          text="Add to Cart"
          color="primary"
          style="solid"
          className="flex-1"
        />
        <MainButton 
          text="Details"
          color="primary"
          style="outline"
          className="flex-1"
        />
      </div>
    </div>
  );
}
```

---

## 🔧 Troubleshooting

### Problem: CSS variables not working

**Solution:** Ensure you imported tokens.css:

```tsx
import '../styles/tokens.css';
```

### Problem: Fonts not loading

**Solution:** Check fonts.css import and font availability:

```tsx
import '../styles/fonts.css';
```

### Problem: Components look incorrect

**Solution:** Import theme.css for base styles:

```tsx
import '../styles/theme.css';
```

---

## 📚 Additional Resources

- **GitHub design system repo:** `gorelikroman/Figma-make/tree/main/figma-make-context`
- **Tokens:** Complete BRAND → ALIAS → MAPPED system
- **Responsive:** Auto-adapts for mobile/desktop
- **Accessibility:** ARIA attributes and keyboard navigation

---

## 💡 Best Practices

1. **Use CSS variables** instead of hardcoded colors
2. **Wrap in Layout** for consistent styling
3. **Don't override font-size** via Tailwind (uses tokens)
4. **Use className** for additional customization
5. **Follow responsive patterns** (mobile-first)

---

**Ready! Your UI Kit is ready to use in any Figma Make project! 🎉**
