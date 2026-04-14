# 🎨 Text Styles Guide - UI Kit Typography System

Complete typography system with semantic text styles for all use cases.

---

## 📚 Typography Hierarchy

### Display Styles (Hero Sections)

#### Display 1 - Largest hero text
```tsx
<h1 style={{
  fontFamily: 'var(--text-display-1-family)',
  fontSize: 'var(--text-display-1-size)',      // 72px
  fontWeight: 'var(--text-display-1-weight)',  // 700 (Bold)
  lineHeight: 'var(--text-display-1-line-height)' // 1.1
}}>
  Your Hero Title
</h1>
```

#### Display 2 - Large hero text
```tsx
fontFamily: 'var(--text-display-2-family)',
fontSize: 'var(--text-display-2-size)',      // 64px
fontWeight: 'var(--text-display-2-weight)',  // 700 (Bold)
lineHeight: 'var(--text-display-2-line-height)' // 1.1
```

#### Display 3 - Medium hero text
```tsx
fontFamily: 'var(--text-display-3-family)',
fontSize: 'var(--text-display-3-size)',      // 52px
fontWeight: 'var(--text-display-3-weight)',  // 600 (Semibold)
lineHeight: 'var(--text-display-3-line-height)' // 1.1
```

---

### Heading Styles

#### H1 - Main page heading
```tsx
fontFamily: 'var(--text-h1-family)',     // Poppins
fontSize: 'var(--text-h1-size)',         // 48px
fontWeight: 'var(--text-h1-weight)',     // 600 (Semibold)
lineHeight: 'var(--text-h1-line-height)' // 1.5
```

#### H2 - Section heading
```tsx
fontFamily: 'var(--text-h2-family)',     // Poppins
fontSize: 'var(--text-h2-size)',         // 42px
fontWeight: 'var(--text-h2-weight)',     // 600 (Semibold)
lineHeight: 'var(--text-h2-line-height)' // 1.5
```

#### H3 - Subsection heading
```tsx
fontFamily: 'var(--text-h3-family)',     // Poppins
fontSize: 'var(--text-h3-size)',         // 32px
fontWeight: 'var(--text-h3-weight)',     // 600 (Semibold)
lineHeight: 'var(--text-h3-line-height)' // 1.5
```

#### H4 - Card/Component heading
```tsx
fontFamily: 'var(--text-h4-family)',     // Poppins
fontSize: 'var(--text-h4-size)',         // 28px
fontWeight: 'var(--text-h4-weight)',     // 500 (Medium)
lineHeight: 'var(--text-h4-line-height)' // 1.5
```

#### H5 - Small heading
```tsx
fontFamily: 'var(--text-h5-family)',     // Poppins
fontSize: 'var(--text-h5-size)',         // 22px
fontWeight: 'var(--text-h5-weight)',     // 500 (Medium)
lineHeight: 'var(--text-h5-line-height)' // 1.5
```

#### H6 - Smallest heading
```tsx
fontFamily: 'var(--text-h6-family)',     // Poppins
fontSize: 'var(--text-h6-size)',         // 18px
fontWeight: 'var(--text-h6-weight)',     // 500 (Medium)
lineHeight: 'var(--text-h6-line-height)' // 1.5
```

---

### Body Text Styles

#### Body XL - Large paragraphs
```tsx
fontFamily: 'var(--text-body-xl-family)',     // Roboto
fontSize: 'var(--text-body-xl-size)',         // 22px
fontWeight: 'var(--text-body-xl-weight)',     // 400 (Regular)
lineHeight: 'var(--text-body-xl-line-height)' // 1.75
```

#### Body Large - Intro text
```tsx
fontFamily: 'var(--text-body-lg-family)',     // Roboto
fontSize: 'var(--text-body-lg-size)',         // 18px
fontWeight: 'var(--text-body-lg-weight)',     // 400 (Regular)
lineHeight: 'var(--text-body-lg-line-height)' // 1.75
```

#### Body Medium - Standard paragraph
```tsx
fontFamily: 'var(--text-body-md-family)',     // Roboto
fontSize: 'var(--text-body-md-size)',         // 16px
fontWeight: 'var(--text-body-md-weight)',     // 400 (Regular)
lineHeight: 'var(--text-body-md-line-height)' // 1.5
```

#### Body Small - Compact text
```tsx
fontFamily: 'var(--text-body-sm-family)',     // Roboto
fontSize: 'var(--text-body-sm-size)',         // 14px
fontWeight: 'var(--text-body-sm-weight)',     // 400 (Regular)
lineHeight: 'var(--text-body-sm-line-height)' // 1.5
```

#### Body XS - Fine print
```tsx
fontFamily: 'var(--text-body-xs-family)',     // Roboto
fontSize: 'var(--text-body-xs-size)',         // 12px
fontWeight: 'var(--text-body-xs-weight)',     // 400 (Regular)
lineHeight: 'var(--text-body-xs-line-height)' // 1.5
```

---

### Label Styles (Form Elements, Tags)

#### Label Large
```tsx
fontFamily: 'var(--text-label-lg-family)',     // Roboto
fontSize: 'var(--text-label-lg-size)',         // 16px
fontWeight: 'var(--text-label-lg-weight)',     // 500 (Medium)
lineHeight: 'var(--text-label-lg-line-height)' // 1.5
```

#### Label Medium
```tsx
fontFamily: 'var(--text-label-md-family)',     // Roboto
fontSize: 'var(--text-label-md-size)',         // 14px
fontWeight: 'var(--text-label-md-weight)',     // 500 (Medium)
lineHeight: 'var(--text-label-md-line-height)' // 1.5
```

#### Label Small
```tsx
fontFamily: 'var(--text-label-sm-family)',     // Roboto
fontSize: 'var(--text-label-sm-size)',         // 12px
fontWeight: 'var(--text-label-sm-weight)',     // 500 (Medium)
lineHeight: 'var(--text-label-sm-line-height)' // 1.5
```

#### Label XS
```tsx
fontFamily: 'var(--text-label-xs-family)',     // Roboto
fontSize: 'var(--text-label-xs-size)',         // 10px
fontWeight: 'var(--text-label-xs-weight)',     // 500 (Medium)
lineHeight: 'var(--text-label-xs-line-height)' // 1.5
```

---

### Button Text Styles

#### Button Large
```tsx
fontFamily: 'var(--text-button-lg-family)',     // Poppins
fontSize: 'var(--text-button-lg-size)',         // 18px
fontWeight: 'var(--text-button-lg-weight)',     // 500 (Medium)
lineHeight: 'var(--text-button-lg-line-height)' // 1.1
```

#### Button Medium
```tsx
fontFamily: 'var(--text-button-md-family)',     // Poppins
fontSize: 'var(--text-button-md-size)',         // 16px
fontWeight: 'var(--text-button-md-weight)',     // 500 (Medium)
lineHeight: 'var(--text-button-md-line-height)' // 1.1
```

#### Button Small
```tsx
fontFamily: 'var(--text-button-sm-family)',     // Poppins
fontSize: 'var(--text-button-sm-size)',         // 14px
fontWeight: 'var(--text-button-sm-weight)',     // 500 (Medium)
lineHeight: 'var(--text-button-sm-line-height)' // 1.1
```

---

### Caption & Meta Styles

#### Caption - Helper text
```tsx
fontFamily: 'var(--text-caption-family)',     // Roboto
fontSize: 'var(--text-caption-size)',         // 12px
fontWeight: 'var(--text-caption-weight)',     // 400 (Regular)
lineHeight: 'var(--text-caption-line-height)' // 1.5
```

#### Overline - Category labels
```tsx
fontFamily: 'var(--text-overline-family)',     // Roboto
fontSize: 'var(--text-overline-size)',         // 10px
fontWeight: 'var(--text-overline-weight)',     // 600 (Semibold)
lineHeight: 'var(--text-overline-line-height)' // 1.5
```

---

## 🎯 Usage Examples

### Hero Section
```tsx
<section className="text-center">
  <h1 style={{
    fontFamily: 'var(--text-display-1-family)',
    fontSize: 'var(--text-display-1-size)',
    fontWeight: 'var(--text-display-1-weight)',
    lineHeight: 'var(--text-display-1-line-height)',
    color: 'var(--mapped-text-primary)'
  }}>
    Welcome to Our Platform
  </h1>
  
  <p style={{
    fontFamily: 'var(--text-body-xl-family)',
    fontSize: 'var(--text-body-xl-size)',
    fontWeight: 'var(--text-body-xl-weight)',
    lineHeight: 'var(--text-body-xl-line-height)',
    color: 'var(--mapped-text-secondary)'
  }}>
    Build amazing products with our design system
  </p>
</section>
```

### Article Layout
```tsx
<article>
  <h1 style={{
    fontFamily: 'var(--text-h1-family)',
    fontSize: 'var(--text-h1-size)',
    fontWeight: 'var(--text-h1-weight)',
    lineHeight: 'var(--text-h1-line-height)',
    color: 'var(--mapped-text-primary)'
  }}>
    Article Title
  </h1>

  <p style={{
    fontFamily: 'var(--text-body-md-family)',
    fontSize: 'var(--text-body-md-size)',
    fontWeight: 'var(--text-body-md-weight)',
    lineHeight: 'var(--text-body-md-line-height)',
    color: 'var(--mapped-text-secondary)'
  }}>
    Article content goes here...
  </p>
</article>
```

### Card Component
```tsx
<div className="card">
  <span style={{
    fontFamily: 'var(--text-overline-family)',
    fontSize: 'var(--text-overline-size)',
    fontWeight: 'var(--text-overline-weight)',
    lineHeight: 'var(--text-overline-line-height)',
    color: 'var(--mapped-text-tertiary)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em'
  }}>
    CATEGORY
  </span>

  <h3 style={{
    fontFamily: 'var(--text-h3-family)',
    fontSize: 'var(--text-h3-size)',
    fontWeight: 'var(--text-h3-weight)',
    lineHeight: 'var(--text-h3-line-height)',
    color: 'var(--mapped-text-primary)'
  }}>
    Card Title
  </h3>

  <p style={{
    fontFamily: 'var(--text-body-sm-family)',
    fontSize: 'var(--text-body-sm-size)',
    fontWeight: 'var(--text-body-sm-weight)',
    lineHeight: 'var(--text-body-sm-line-height)',
    color: 'var(--mapped-text-secondary)'
  }}>
    Card description
  </p>

  <span style={{
    fontFamily: 'var(--text-caption-family)',
    fontSize: 'var(--text-caption-size)',
    fontWeight: 'var(--text-caption-weight)',
    lineHeight: 'var(--text-caption-line-height)',
    color: 'var(--mapped-text-tertiary)'
  }}>
    Last updated: Today
  </span>
</div>
```

---

## 📏 Font Size Scale

| Size Variable | Value | Use Case |
|--------------|-------|----------|
| `--font-size-10` | 10px | Overlines, tiny labels |
| `--font-size-12` | 12px | Captions, helper text |
| `--font-size-14` | 14px | Small body, labels |
| `--font-size-16` | 16px | Standard body, inputs |
| `--font-size-18` | 18px | Large body, buttons |
| `--font-size-22` | 22px | H5, large body |
| `--font-size-28` | 28px | H4 |
| `--font-size-32` | 32px | H3 |
| `--font-size-42` | 42px | H2 |
| `--font-size-48` | 48px | H1 |
| `--font-size-52` | 52px | Display 3 |
| `--font-size-64` | 64px | Display 2 |
| `--font-size-72` | 72px | Display 1 |

---

## ⚖️ Font Weight Scale

| Weight Variable | Value | Use Case |
|----------------|-------|----------|
| `--font-weight-regular` | 400 | Body text |
| `--font-weight-medium` | 500 | Labels, buttons |
| `--font-weight-semibold` | 600 | Headings, emphasis |
| `--font-weight-bold` | 700 | Display text, strong emphasis |

---

## 📐 Line Height Scale

| Line Height Variable | Value | Use Case |
|---------------------|-------|----------|
| `--line-height-tight` | 1.1 | Display text, buttons |
| `--line-height-normal` | 1.5 | Standard text |
| `--line-height-relaxed` | 1.75 | Long-form reading |

---

## 🎨 Combining with Colors

```tsx
// Primary heading
<h1 style={{
  fontFamily: 'var(--text-h1-family)',
  fontSize: 'var(--text-h1-size)',
  fontWeight: 'var(--text-h1-weight)',
  lineHeight: 'var(--text-h1-line-height)',
  color: 'var(--mapped-text-primary)' // Dark text
}}>

// Secondary text
<p style={{
  fontFamily: 'var(--text-body-md-family)',
  fontSize: 'var(--text-body-md-size)',
  fontWeight: 'var(--text-body-md-weight)',
  lineHeight: 'var(--text-body-md-line-height)',
  color: 'var(--mapped-text-secondary)' // Gray text
}}>

// Tertiary/Meta text
<span style={{
  fontFamily: 'var(--text-caption-family)',
  fontSize: 'var(--text-caption-size)',
  fontWeight: 'var(--text-caption-weight)',
  lineHeight: 'var(--text-caption-line-height)',
  color: 'var(--mapped-text-tertiary)' // Light gray
}}>
```

---

## ✅ Best Practices

### ✓ Do's
- Use display styles for hero sections only
- Use heading styles (H1-H6) for content hierarchy
- Use body styles for readable text
- Use label styles for form elements and tags
- Use button styles for interactive elements
- Combine text styles with color tokens

### ✗ Don'ts
- Don't use display styles for regular headings
- Don't mix Poppins and Roboto in same text block
- Don't override line-height without reason
- Don't use tight line-height for long paragraphs

---

## 🔄 Responsive Considerations

Current system uses fixed pixel sizes. For responsive design, combine with Tailwind's responsive prefixes:

```tsx
<h1 
  className="text-[32px] lg:text-[48px]"
  style={{
    fontFamily: 'var(--text-h1-family)',
    fontWeight: 'var(--text-h1-weight)',
    lineHeight: 'var(--text-h1-line-height)'
  }}
>
  Responsive Heading
</h1>
```

---

**Complete Typography System** ✨  
_48 text style variables | 2 font families | Fully semantic | Production-ready_
