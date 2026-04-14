# 📋 How to Copy UI Kit to Another Figma Make Project

## Option 1: Manual Copy (recommended for beginners)

### Step 1: Open Two Browser Windows
- **Window 1:** Current project (UI Kit Demo)
- **Window 2:** Your new Figma Make project

### Step 2: Copy Component Files

In **Window 1** (UI Kit Demo), copy the contents of each file:

#### Components (11 files):

1. `/src/app/components/design-kit/MainButton.tsx`
2. `/src/app/components/design-kit/IconButton.tsx`
3. `/src/app/components/design-kit/MainCheckbox.tsx`
4. `/src/app/components/design-kit/MainRadio.tsx`
5. `/src/app/components/design-kit/MainSwitcher.tsx`
6. `/src/app/components/design-kit/MainProgressBar.tsx`
7. `/src/app/components/design-kit/MainInput.tsx`
8. `/src/app/components/design-kit/MainDropdown.tsx`
9. `/src/app/components/design-kit/MainAccordion.tsx`
10. `/src/app/components/design-kit/MainBreadcrumbs.tsx`
11. `/src/app/components/design-kit/Image.tsx`

**+ Index file:**
12. `/src/app/components/design-kit/index.ts`

In **Window 2** (new project), create these same files and paste the contents.

---

### Step 3: Copy Style Files

#### Styles (3 files):

1. **`/src/styles/tokens.css`** 
   - All CSS variables (BRAND → ALIAS → MAPPED)
   - Colors, typography, spacing

2. **`/src/styles/fonts.css`**
   - Google Fonts imports (Poppins + Roboto)

3. **`/src/styles/theme.css`**
   - Base styles for h1, h2, body, etc.

---

### Step 4: Import Styles in App.tsx

In **new project**, open `/src/app/App.tsx` and add imports at the top:

```tsx
import '../styles/tokens.css';
import '../styles/fonts.css';
import '../styles/theme.css';

// Your code...
export default function App() {
  // ...
}
```

---

### Step 5: Use Components

```tsx
import { MainButton, MainInput, IconButton } from './components/design-kit';

export default function App() {
  return (
    <div className="p-6">
      <MainButton text="Hello" color="primary" style="solid" />
      <IconButton color="primary" style="circular" />
      <MainInput label="Email" placeholder="Enter email" />
    </div>
  );
}
```

---

## Option 2: Copy via ZIP (faster)

### If using local development:

1. **Download current project** as ZIP
2. Unzip and copy needed folders:
   ```
   ui-kit-project/src/app/components/design-kit/ 
   → 
   new-project/src/app/components/design-kit/
   
   ui-kit-project/src/styles/
   →
   new-project/src/styles/
   ```
3. Import styles in App.tsx (see Step 4 above)

---

## Option 3: Create Reusable Template

### For advanced users:

1. Save current project as **Template**
2. When creating new project select "Use Template"
3. Delete unnecessary demo pages
4. Keep only components and styles

---

## ✅ Verification Checklist

After copying, verify that:

- [ ] Folder `/src/app/components/design-kit/` contains all 11 components
- [ ] File `/src/app/components/design-kit/index.ts` exists
- [ ] Files in `/src/styles/` (tokens.css, fonts.css, theme.css) are copied
- [ ] Style imports added to App.tsx
- [ ] Components import without errors
- [ ] Poppins and Roboto fonts load correctly
- [ ] Button hover effects work

---

## 🐛 Troubleshooting

### Problem: "Module not found"

**Cause:** Incorrect import path

**Solution:**
```tsx
// ❌ Wrong
import { MainButton } from '../components/design-kit/MainButton';

// ✅ Correct (from App.tsx)
import { MainButton } from './components/design-kit/MainButton';

// ✅ Or via index
import { MainButton } from './components/design-kit';
```

---

### Problem: Styles not applying

**Cause:** CSS files not imported

**Solution:** Add at the top of App.tsx:
```tsx
import '../styles/tokens.css';
import '../styles/fonts.css';
import '../styles/theme.css';
```

---

### Problem: Fonts not loading

**Cause:** fonts.css not imported

**Solution:** 
1. Ensure fonts.css is imported
2. Check Network tab in DevTools
3. If Google Fonts blocked, use local fonts

---

### Problem: CSS variables not working

**Cause:** tokens.css not imported first

**Solution:** Imports must be in correct order:
```tsx
import '../styles/tokens.css';  // ← FIRST!
import '../styles/fonts.css';
import '../styles/theme.css';
```

---

## 📊 What You Get

After copying you'll have:

✅ **11 ready-to-use components** with TypeScript types  
✅ **Complete design system** (BRAND → ALIAS → MAPPED)  
✅ **Responsive design** (mobile + desktop)  
✅ **Hover effects** on all interactive elements  
✅ **7 color schemes** for buttons  
✅ **Accessibility** (ARIA, keyboard nav)  
✅ **Customization** via CSS variables  

---

## 🎯 Minimal File Set

If you only need **buttons**:

```
Copy:
├── /src/app/components/design-kit/MainButton.tsx
├── /src/app/components/design-kit/IconButton.tsx
├── /src/app/components/design-kit/index.ts (optional)
└── /src/styles/tokens.css
└── /src/styles/fonts.css
```

If you need a **complete form**:

```
Copy:
├── /src/app/components/design-kit/MainButton.tsx
├── /src/app/components/design-kit/MainInput.tsx
├── /src/app/components/design-kit/MainCheckbox.tsx
├── /src/app/components/design-kit/MainDropdown.tsx
└── /src/styles/tokens.css
└── /src/styles/fonts.css
```

---

## 🚀 Done!

You can now use the UI Kit in any Figma Make project!

**Next steps:**
1. Read [UI_KIT_README.md](./UI_KIT_README.md) for examples
2. Study [USAGE_GUIDE.md](./USAGE_GUIDE.md) for complete API
3. Start building your project! 🎨✨
