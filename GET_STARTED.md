# 🎯 Get Started in 30 Seconds

## Step 1: Install & Run
```bash
npm install
npm run dev
```

## Step 2: Read This
**→ [START_HERE.md](./START_HERE.md)** ⭐

## Step 3: Start Coding
Open `/src/app/App.tsx` and replace the welcome message with your app.

---

## Quick Component Import

```tsx
import { 
  MainButton, 
  MainInput, 
  MainCheckbox 
} from './components/design-kit';

function App() {
  return (
    <div className="p-6">
      <MainInput label="Email" type="email" />
      <MainCheckbox label="I agree" />
      <MainButton text="Submit" color="primary" style="solid" />
    </div>
  );
}
```

---

## 📚 Full Documentation

- **[START_HERE.md](./START_HERE.md)** - First steps
- **[QUICK_START.md](./QUICK_START.md)** - 3-minute guide
- **[TEXT_STYLES_GUIDE.md](./TEXT_STYLES_GUIDE.md)** - Typography
- **[USAGE_GUIDE.md](./USAGE_GUIDE.md)** - Full API
- **[README.md](./README.md)** - Complete overview

---

**That's it! You're ready to build. 🚀**
