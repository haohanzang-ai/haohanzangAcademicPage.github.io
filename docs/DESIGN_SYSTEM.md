# Design System

## Overview
Our design system is built on **design tokens** (colors, typography, spacing, shadows) and **reusable components**. Every component is documented in Storybook and follows consistent patterns for variants, states, and accessibility.

## Design Tokens

### Color Palette
```typescript
// src/design-tokens/colors.ts
export const colors = {
  // Primary (brand color)
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    900: '#1E3A8A',
  },
  
  // Neutral (grays)
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    900: '#111827',
  },
  
  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#06B6D4',
}
```

### Typography

**Font Families:**
- Headings: `Inter` (sans-serif)
- Body: `Inter` (sans-serif)

**Font Sizes & Line Heights:**
```typescript
export const typography = {
  // Headings
  h1: { size: '2.5rem', weight: 700, lineHeight: 1.1 },    // 40px
  h2: { size: '2rem', weight: 700, lineHeight: 1.2 },      // 32px
  h3: { size: '1.5rem', weight: 600, lineHeight: 1.2 },    // 24px
  
  // Body
  bodyLarge: { size: '1.125rem', weight: 400, lineHeight: 1.6 },    // 18px
  body: { size: '1rem', weight: 400, lineHeight: 1.6 },             // 16px
  bodySmall: { size: '0.875rem', weight: 400, lineHeight: 1.5 },    // 14px
  
  // UI Labels
  labelLarge: { size: '1rem', weight: 600, lineHeight: 1.4 },       // 16px
  label: { size: '0.875rem', weight: 600, lineHeight: 1.4 },        // 14px
  labelSmall: { size: '0.75rem', weight: 600, lineHeight: 1.3 },    // 12px
}
```

### Spacing Scale
```typescript
export const spacing = {
  0: '0',
  2: '0.5rem',    // 8px
  4: '1rem',      // 16px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
}
```

### Shadows
```typescript
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
}
```

### Border Radius
```typescript
export const borderRadius = {
  none: '0',
  sm: '0.25rem',     // 4px
  md: '0.5rem',      // 8px
  lg: '0.75rem',     // 12px
  xl: '1rem',        // 16px
  full: '9999px',
}
```

## Core Components

### Button
The foundational interactive element. Supports multiple variants, sizes, and states.

**Variants:**
- `primary` — Main call-to-action, uses primary color
- `secondary` — Alternative action, neutral styling
- `outline` — Bordered variant for lower emphasis
- `ghost` — Minimal variant, text only

**Sizes:**
- `sm` — Small (12px padding)
- `md` — Medium (16px padding, default)
- `lg` — Large (20px padding)

**States:**
- Default
- Hover
- Active
- Disabled
- Loading (with spinner)

**Accessibility:**
- Focus ring visible on keyboard navigation
- Proper contrast ratio (WCAG AA minimum 4.5:1)
- Supports `aria-label` and `aria-disabled`

---

### Card
Container component for content grouping with consistent padding and shadow.

**Variants:**
- `elevated` — Shadow-based depth (default)
- `outlined` — Border-based differentiation
- `plain` — No styling, padding only

**Props:**
- `padding` — `sm`, `md`, `lg`
- `hoverable` — Lift on hover

---

### Header/Navigation
Site header with logo, navigation menu, and optional call-to-action.

**Structure:**
- Logo/branding (left)
- Navigation menu (center)
- Actions/profile (right)

**Responsive Behavior:**
- Desktop: Full menu visible
- Tablet: Condensed menu with icon indicators
- Mobile: Hamburger menu, collapsible

---

### Footer
Site footer with links, legal info, social media.

**Sections:**
- Company info & logo
- Link groups (Products, Resources, Legal, etc.)
- Social links
- Copyright

---

### Input Fields
Text input, email, password, textarea with consistent styling and validation states.

**Variants:**
- `text` — Text input (default)
- `email` — Email input with validation
- `password` — Masked input
- `textarea` — Multi-line text
- `select` — Dropdown

**States:**
- Default
- Focus
- Filled
- Error (red border, error message below)
- Success (green border)
- Disabled

**Validation:**
- Required field indicator (*)
- Error message display
- Helper text below

---

### Badge
Small label for status, category, or metadata.

**Variants:**
- `info` — Blue badge for informational
- `success` — Green badge for positive states
- `warning` — Amber badge for caution
- `error` — Red badge for errors

**Sizes:**
- `sm`, `md`, `lg`

---

### Modal/Dialog
Overlay component for focused user attention and critical actions.

**Features:**
- Backdrop overlay (click-to-close, optionally disabled)
- Focus trap
- Escape key to close (optionally disabled)
- Header with close button
- Action buttons (primary, secondary, cancel)

---

## Component Development Guidelines

### 1. **Create Component Folder**
```
src/components/Button/
├── Button.tsx           # Main component
├── Button.stories.tsx   # Storybook documentation
├── Button.module.css    # Scoped styles (optional, use Tailwind)
└── README.md           # Component documentation
```

### 2. **Build with TypeScript**
```typescript
import React from 'react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  children,
  onClick,
  className = '',
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-colors'
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 disabled:bg-gray-100',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:text-blue-700 hover:bg-blue-50',
  }
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? '...' : children}
    </button>
  )
}
```

### 3. **Document in Storybook**
```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'ghost'],
      control: { type: 'select' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Click Me' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Click Me' },
}

export const Large: Story = {
  args: { size: 'lg', children: 'Large Button' },
}

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
}
```

### 4. **Test Accessibility**
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] ARIA attributes are present and correct
- [ ] Semantic HTML is used (buttons are `<button>`, links are `<a>`)

### 5. **Performance Checklist**
- [ ] No unnecessary re-renders (use `React.memo` if needed)
- [ ] No inline functions in event handlers
- [ ] Large lists use keys and virtualization

---

## Using Components in Pages

```typescript
// src/pages/Home.tsx
import { Button } from '../components/Button/Button'
import { Card } from '../components/Card/Card'
import { Header } from '../components/Header/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <Card>
        <h1>Welcome</h1>
        <p>This is your professional website.</p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </Card>
    </div>
  )
}
```

## Viewing Components

Start Storybook:
```bash
npm run storybook
```

This launches an interactive component library at `http://localhost:6006` where you can see all components, their variants, and interact with them.

---

## Extending the Design System

When adding new components or tokens:
1. Update `src/design-tokens/` with new tokens
2. Build component in `src/components/ComponentName/`
3. Add Storybook stories and documentation
4. Update this file with component API
5. Commit with: `git commit -m "feat(components): add ComponentName"`
6. Update project memory if making significant design decision
