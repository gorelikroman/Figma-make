# UI Kit Documentation 🎨

Полная библиотека компонентов дизайн-системы на базе React + Tailwind CSS + CSS Variables.

## ✅ Компоненты (ПОЛНЫЙ СПИСОК)

### **1. MainButton** - Основная кнопка
**Файл:** `/src/app/components/design-kit/MainButton.tsx`

**Props:**
- `text` - Текст кнопки
- `style` - `'solid'` | `'outline'` | `'ghost'`
- `color` - `'primary'` | `'neutral-dark'` | `'neutral-medium'` | `'neutral-light'` | `'error'` | `'warning'` | `'info'`
- `disabled` - Отключенное состояние
- `onClick` - Callback

---

### **2. IconButton** - Кнопка с иконкой
**Файл:** `/src/app/components/design-kit/IconButton.tsx`

**Props:**
- `color` - `'neutral'` | `'outline'` | `'primary'` | `'simple'`
- `style` - `'rectangle'` | `'circular'`
- `disabled` - Отключенное состояние
- `icon` - Путь к иконке
- `onClick` - Callback

---

### **3. MainCheckbox** - Чекбокс
**Файл:** `/src/app/components/design-kit/MainCheckbox.tsx`

**Props:**
- `checked` - Состояние (true/false)
- `disabled` - Отключенное состояние
- `status` - `'default'` (галочка) | `'indeterminate'` (линия)
- `label` - Текст метки
- `onChange` - Callback (checked: boolean) => void

**Размеры:**
- Box: 20×20px, Container: 24×24px
- Checkmark: 12×12px, Indeterminate: 10×2px

---

### **4. MainRadio** - Радиокнопка
**Файл:** `/src/app/components/design-kit/MainRadio.tsx`

**Props:**
- `checked` - Состояние выбора
- `disabled` - Отключенное состояние
- `label` - Текст метки
- `name` - Имя группы радиокнопок
- `value` - Значение
- `onChange` - Callback (checked: boolean, value: string) => void

**Размеры:**
- Circle: 20×20px, Container: 24×24px
- Inner circle: 14×14px

---

### **5. MainSwitcher** - Переключатель
**Файл:** `/src/app/components/design-kit/MainSwitcher.tsx`

**Props:**
- `firstValue` - Текст первой опции (required)
- `secondValue` - Текст второй опции (required)
- `selectedValue` - Выбранное значение
- `disabled` - Отключенное состояние
- `onChange` - Callback (value: string) => void

**Размеры:**
- Track: 52px (mobile), 60px (desktop)
- Анимация: 200ms с scale(0.95)

---

### **6. MainProgressBar** - Прогресс-бар
**Файл:** `/src/app/components/design-kit/MainProgressBar.tsx`

**Props:**
- `percentage` - Процент (0-100)

**Характеристики:**
- Height: 8px
- Gradient: linear-gradient(90deg, #15967C, #72B33E)
- Transition: 300ms ease-out

---

### **7. MainInput** - Текстовое поле
**Файл:** `/src/app/components/design-kit/MainInput.tsx`

**Props:**
- `placeholder` - Placeholder текст
- `disabled` - Отключенное состояние
- `label` - Метка над полем
- `obligatory` - Показать красную звёздочку (required)
- `description` - Описание под полем
- `maxLength` - Макс. количество символов
- `leftIcon` - Иконка слева
- `rightIcon` - Иконка справа
- `clearIcon` - Иконка очистки
- `clearIconPosition` - `'left'` | `'right'`
- `status` - `'default'` | `'error'` | `'success'`
- `type` - Тип input (`'text'`, `'password'`, и т.д.)
- `onChange` - Callback (value: string) => void
- `onFocus` - Callback
- `onBlur` - Callback

**Размеры:**
- Mobile: 48px height, 12px padding, 8px radius
- Desktop: 60px height, 16px padding, 16px radius

---

### **8. MainDropdown** - Выпадающий список
**Файл:** `/src/app/components/design-kit/MainDropdown.tsx`

**Props:**
- `placeholder` - Placeholder текст
- `values` - Массив опций (string[] или DropdownOption[])
- `selectedValue` - Выбранное значение
- `onChange` - Callback (value: string, label: string) => void

**Опция (DropdownOption):**
```tsx
{
  value: string;
  label: string;
  disabled?: boolean;
}
```

**Характеристики:**
- Кастомный скроллбар (4px, gradient)
- Max height: 300px
- Auto-close при клике вне компонента

---

### **9. MainAccordion** - Аккордеон
**Файл:** `/src/app/components/design-kit/MainAccordion.tsx`

**Props:**
- `title` - Заголовок (required)
- `text` - Контент (required, HTML допускается)
- `isOpen` - Начальное состояние (открыт/закрыт)
- `groupId` - ID группы (для синхронизации)
- `onToggle` - Callback (isOpen: boolean) => void

**Анимация:**
- Grid rows transition (300ms ease-in-out)
- Opacity transition
- Иконка меняется: plus → minus

---

### **10. MainBreadcrumbs** - Хлебные крошки
**Файл:** `/src/app/components/design-kit/MainBreadcrumbs.tsx`

**Props:**
- `items` - Массив элементов (string[] или BreadcrumbItem[])
- `mainPath` - Базовый путь

**Item (BreadcrumbItem):**
```tsx
{
  title: string;
  uri?: string | null;
  breadcrumbs_title?: string;
}
```

**Характеристики:**
- Последний элемент не кликабельный
- Разделитель: `/`
- Hover effect на ссылках

---

### **11. Image** - Компонент изображения
**Файл:** `/src/app/components/design-kit/Image.tsx`

**Props:**
- `original` - Оригинальное изображение (required)
- `webp` - WebP версия
- `minimizedWebp` - Размытая превью для blur-up
- `noLazyLoad` - Отключить lazy loading
- `priority` - `'high'` | `'low'`
- `imageClasses` - CSS классы для img
- `wrapperClasses` - CSS классы для wrapper
- `pictureClasses` - CSS классы для picture

**Asset объект:**
```tsx
{
  assetUri: string;
  assetAlt?: string;
}
```

**Характеристики:**
- Blur-up эффект (backdrop-filter: blur(10px))
- Opacity transition (400ms)
- Поддержка WebP + fallback

---

## 🎨 Design Tokens

### Иерархия токенов (3 уровня)

**BRAND** → **ALIAS** → **MAPPED**

#### BRAND Tokens (базовые цвета):
- `--brand-green-dark-*` (100-1000)
- `--brand-green-light-*` (25-900)
- `--brand-neutral-*` (0-1700)
- `--brand-red-*` (50-900)
- `--brand-blue-*` (50-900)
- `--brand-orange-*` (50-900)

#### ALIAS Tokens (семантические):
- `--alias-primary-*` → green-dark
- `--alias-secondary-*` → green-light
- `--alias-error-*` → red
- `--alias-warning-*` → orange
- `--alias-info-*` → blue

#### MAPPED Tokens (компонентные):
- **Surface:** background, card, primary, error, success, footer
- **Text:** primary, secondary, tertiary, disabled, error, success, warning, info, on-primary, link
- **Border:** default, subtle, strong, focus, error, success, primary, disabled
- **Icons:** primary, secondary, disabled, error, success

### Использование в Tailwind:
```tsx
<div className="bg-[var(--mapped-surface-card)] text-[var(--mapped-text-primary)]">
  Content
</div>
```

---

## 📐 Размеры (Spacing)

**Gap tokens:**
- `--size-gap-*` (0, 2, 4, 6, 8...64)
- `--size-gap-vertical-*` (xxs...xxl)

**Border Radius:**
- `--size-radius-*` (none, xxs, xs, s, m, l, xl, xxl, full)

**Responsive breakpoint:** 768px

---

## 🔤 Типографика

**Шрифты:**
- **Poppins** (300, 400, 500, 600, 700) - Headers, Buttons
- **Roboto** (400, 700) - Body text

**Font Family Variable:**
```tsx
className="font-[var(--font-family-primary)]"
```

---

## 🎯 Градиенты

**Primary Green Gradient:**
```css
--bg-primary-green-gradient: linear-gradient(to right, var(--alias-primary-400), var(--alias-secondary-400));
```

**Использование:**
```tsx
<div className="bg-[image:var(--bg-primary-green-gradient)]">
  Gradient background
</div>
```

---

## 📂 Структура проекта

```
/src
  /app
    /components
      /design-kit
        MainButton.tsx        ✅
        IconButton.tsx        ✅
        MainCheckbox.tsx      ✅
        MainRadio.tsx         ✅
        MainSwitcher.tsx      ✅
        MainProgressBar.tsx   ✅
        MainInput.tsx         ✅
        MainDropdown.tsx      ✅
        MainAccordion.tsx     ✅
        MainBreadcrumbs.tsx   ✅
        Image.tsx             ✅
    App.tsx                   ✅ UI Kit Demo
  /styles
    tokens.css                ✅
    fonts.css                 ✅
    index.css                 ✅
    tailwind.css              ✅
    theme.css                 ✅
```

---

## 🚀 Использование

### Запуск:
```bash
npm install
npm run dev
```

### UI Kit Demo:
Откройте `http://localhost:5173` и переключайтесь между секциями:
- Main Buttons
- Icon Buttons
- Form Controls
- Inputs & Dropdowns
- Navigation
- Color Tokens
- Typography

---

## 📝 Примеры кода

### Button:
```tsx
<MainButton 
  text="Submit" 
  color="primary" 
  style="solid"
  onClick={() => console.log('Clicked')}
/>
```

### Input с валидацией:
```tsx
<MainInput 
  placeholder="Email"
  label="Email Address"
  obligatory
  description="Required field"
  status="error"
  maxLength={50}
  onChange={(value) => console.log(value)}
/>
```

### Dropdown:
```tsx
<MainDropdown 
  placeholder="Select size"
  values={['Small', 'Medium', 'Large']}
  selectedValue="Medium"
  onChange={(value, label) => console.log(value)}
/>
```

### Accordion:
```tsx
<MainAccordion 
  title="Question?"
  text="Answer here..."
  isOpen={false}
/>
```

### Breadcrumbs:
```tsx
<MainBreadcrumbs 
  items={[
    { title: 'Home', uri: '/' },
    { title: 'Products', uri: '/products' },
    { title: 'Details' }
  ]}
/>
```

---

## ✨ Особенности

### Responsive дизайн:
- Все компоненты адаптивны
- Breakpoint: 768px (mobile → desktop)
- Автоматическое изменение размеров

### Accessibility:
- Скрытые native inputs для screen readers
- Keyboard navigation поддержка
- Focus states

### Hover эффекты:
- Все интерактивные элементы имеют hover
- Transition duration: 200-300ms
- Smooth animations

---

## 🎉 Статус

**✅ ПОЛНОСТЬЮ ГОТОВО!**

**11 компонентов:**
1. ✅ MainButton
2. ✅ IconButton
3. ✅ MainCheckbox
4. ✅ MainRadio
5. ✅ MainSwitcher
6. ✅ MainProgressBar
7. ✅ MainInput
8. ✅ MainDropdown
9. ✅ MainAccordion
10. ✅ MainBreadcrumbs
11. ✅ Image

**Технологии:**
- ⚛️ React + TypeScript
- 🎨 Tailwind CSS v4
- 🎯 CSS Variables (Design Tokens)
- 📱 Fully Responsive
- ♿ Accessible

---

**Создано:** Figma Make AI  
**Дата:** 2025  
**Статус:** 🟢 Production Ready
