# Component API Reference

11 production-ready React components. Import from barrel:

```tsx
import { MainButton, MainInput, MainCheckbox } from './components/design-kit';
```

---

## Buttons

### MainButton

3 styles × 7 colors.

```tsx
<MainButton
  text="Save"
  style="solid"            // solid | outline | ghost
  color="primary"          // primary | neutral-dark | neutral-medium | neutral-light | error | warning | info
  disabled={false}
  onClick={() => {}}
  className="w-full"
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | yes | Button label |
| `style` | `'solid'` \| `'outline'` \| `'ghost'` | yes | Visual style |
| `color` | `'primary'` \| `'neutral-dark'` \| `'neutral-medium'` \| `'neutral-light'` \| `'error'` \| `'warning'` \| `'info'` | yes | Color scheme |
| `disabled` | boolean | no | Disabled state |
| `onClick` | function | no | Click handler |
| `className` | string | no | Additional CSS classes |

### IconButton

4 colors × 2 shapes.

```tsx
<IconButton
  color="primary"          // neutral | outline | primary | simple
  style="circular"         // rectangle | circular
  icon="/icon.svg"         // optional, default arrow
  disabled={false}
  onClick={() => {}}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `color` | `'neutral'` \| `'outline'` \| `'primary'` \| `'simple'` | yes | Color variant |
| `style` | `'rectangle'` \| `'circular'` | yes | Shape |
| `icon` | string | no | Icon path (default: arrow) |
| `disabled` | boolean | no | Disabled state |
| `onClick` | function | no | Click handler |

---

## Form Controls

### MainInput

Text fields with label, validation, icons.

```tsx
<MainInput
  label="Email"
  placeholder="your@email.com"
  type="email"              // text | email | password | search
  status="default"          // default | error | success
  obligatory={true}         // red asterisk
  description="Helper text"
  maxLength={100}
  leftIcon="/icon.svg"
  rightIcon="/icon.svg"
  clearIcon="/clear.svg"
  clearIconPosition="right" // left | right
  disabled={false}
  onChange={(value) => {}}
  onFocus={() => {}}
  onBlur={() => {}}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | string | no | Label above field |
| `placeholder` | string | no | Placeholder text |
| `type` | `'text'` \| `'email'` \| `'password'` \| `'search'` | no | Input type |
| `status` | `'default'` \| `'error'` \| `'success'` | no | Validation state |
| `obligatory` | boolean | no | Show required asterisk |
| `description` | string | no | Helper text below field |
| `maxLength` | number | no | Max characters |
| `leftIcon` / `rightIcon` | string | no | Icon paths |
| `clearIcon` | string | no | Clear button icon |
| `clearIconPosition` | `'left'` \| `'right'` | no | Clear icon placement |
| `disabled` | boolean | no | Disabled state |
| `onChange` | `(value: string) => void` | no | Value change handler |

**Sizes:** Mobile 48px height, 12px padding, 8px radius. Desktop 60px height, 16px padding, 16px radius.

### MainDropdown

Custom select with scrollable dropdown.

```tsx
<MainDropdown
  placeholder="Choose..."
  values={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', disabled: true }
  ]}
  selectedValue="1"
  onChange={(value, label) => {}}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `placeholder` | string | no | Placeholder text |
| `values` | `string[]` \| `DropdownOption[]` | yes | Options array |
| `selectedValue` | string | no | Currently selected value |
| `onChange` | `(value: string, label: string) => void` | no | Selection handler |

**Features:** Custom scrollbar (4px, gradient), max-height 300px, auto-close on outside click.

### MainCheckbox

```tsx
<MainCheckbox
  label="I agree to terms"
  checked={true}
  status="default"          // default (checkmark) | indeterminate (dash)
  disabled={false}
  onChange={(checked) => {}}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | string | no | Label text |
| `checked` | boolean | no | Checked state |
| `status` | `'default'` \| `'indeterminate'` | no | Check style |
| `disabled` | boolean | no | Disabled state |
| `onChange` | `(checked: boolean) => void` | no | Change handler |

**Sizes:** Box 20×20px, container 24×24px, checkmark 12×12px.

### MainRadio

```tsx
<MainRadio
  name="plan"
  value="premium"
  label="Premium Plan"
  checked={selected === 'premium'}
  disabled={false}
  onChange={(checked, value) => {}}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | yes | Radio group name |
| `value` | string | yes | Option value |
| `label` | string | no | Label text |
| `checked` | boolean | no | Selected state |
| `disabled` | boolean | no | Disabled state |
| `onChange` | `(checked: boolean, value: string) => void` | no | Change handler |

**Sizes:** Circle 20×20px, container 24×24px, inner circle 14×14px.

### MainSwitcher

Toggle between two options.

```tsx
<MainSwitcher
  firstValue="Monthly"
  secondValue="Annual"
  selectedValue="Monthly"
  disabled={false}
  onChange={(value) => {}}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `firstValue` | string | yes | First option text |
| `secondValue` | string | yes | Second option text |
| `selectedValue` | string | no | Currently selected |
| `disabled` | boolean | no | Disabled state |
| `onChange` | `(value: string) => void` | no | Change handler |

**Sizes:** Track 52px (mobile), 60px (desktop). Animation: 200ms with scale(0.95).

---

## Indicators

### MainProgressBar

```tsx
<MainProgressBar
  percentage={75}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `percentage` | number | yes | Progress 0–100 |

**Appearance:** Height 8px. Gradient: `linear-gradient(90deg, #15967C, #72B33E)`. Transition: 300ms ease-out.

---

## Navigation

### MainAccordion

```tsx
<MainAccordion
  title="FAQ Question"
  text="<p>Answer with <strong>HTML</strong> support</p>"
  isOpen={false}
  groupId="faq"
  onToggle={(isOpen) => {}}
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `title` | string | yes | Accordion header |
| `text` | string | yes | Content (HTML allowed) |
| `isOpen` | boolean | no | Initial open state |
| `groupId` | string | no | Group ID for sync |
| `onToggle` | `(isOpen: boolean) => void` | no | Toggle handler |

**Animation:** Grid rows transition 300ms ease-in-out, opacity transition. Icon toggles plus ↔ minus.

### MainBreadcrumbs

```tsx
<MainBreadcrumbs
  items={[
    { title: 'Home', uri: '/' },
    { title: 'Products', uri: '/products' },
    { title: 'Details' }
  ]}
  mainPath="/"
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `items` | `string[]` \| `BreadcrumbItem[]` | yes | Navigation items |
| `mainPath` | string | no | Base path |

**BreadcrumbItem:** `{ title: string; uri?: string; breadcrumbs_title?: string }`

Last item is non-clickable. Separator: `/`. Hover effect on links.

---

## Media

### Image

Blur-up loading effect with WebP support.

```tsx
<Image
  original={{ assetUri: '/photo.jpg', assetAlt: 'Description' }}
  webp={{ assetUri: '/photo.webp' }}
  minimizedWebp={{ assetUri: '/photo-thumb.webp' }}
  noLazyLoad={false}
  priority="low"            // high | low
  imageClasses="rounded-lg"
  wrapperClasses="w-full"
/>
```

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `original` | `{ assetUri: string; assetAlt?: string }` | yes | Main image |
| `webp` | Asset | no | WebP version |
| `minimizedWebp` | Asset | no | Blur-up preview |
| `noLazyLoad` | boolean | no | Disable lazy loading |
| `priority` | `'high'` \| `'low'` | no | Loading priority |
| `imageClasses` | string | no | CSS for `<img>` |
| `wrapperClasses` | string | no | CSS for wrapper |

**Effects:** `backdrop-filter: blur(10px)`, opacity transition 400ms.
