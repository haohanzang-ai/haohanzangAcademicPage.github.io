# Technical Architecture

## Overview

This is a **component-driven, design-system-first** architecture built with React, Vite, and Tailwind CSS. Every page is composed of reusable components, and all styling is driven by centralized design tokens.

## Core Principles

1. **Single Source of Truth** — Design tokens are defined once, used everywhere
2. **Reusability** — All components live in `src/components/` for easy reuse
3. **Type Safety** — TypeScript for compile-time correctness
4. **Accessibility First** — WCAG 2.1 AA compliance built-in
5. **Performance** — Lazy loading, code splitting, optimized bundles

## Technology Stack

| Layer | Technology | Why? |
|-------|-----------|------|
| **UI Framework** | React 18 | Component-based, large ecosystem |
| **Build Tool** | Vite | Fast dev server, instant HMR, fast builds |
| **Language** | TypeScript | Type safety, better DX, refactoring confidence |
| **Styling** | Tailwind CSS | Utility-first, scalable, design tokens integration |
| **Component Docs** | Storybook | Isolated component development, documentation |
| **Version Control** | Git | Design history, collaboration, rollback |

## Directory Architecture

```
WEBS/
├── .claude/                 # Claude Code settings
│   ├── memory/             # Persistent project context
│   └── settings.json       # Project-level settings
│
├── .storybook/             # Storybook configuration
│   ├── main.ts            # Storybook setup
│   └── preview.ts         # Storybook theme & global styles
│
├── src/                    # Source code
│   ├── components/         # ⭐ Reusable component library
│   │   ├── Button/        # Example: Button component
│   │   │   ├── Button.tsx           # Main component
│   │   │   ├── Button.stories.tsx   # Storybook documentation
│   │   │   └── README.md            # Component API docs
│   │   ├── Card/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Input/
│   │   └── Badge/
│   │
│   ├── design-tokens/      # ⭐ Centralized design system
│   │   ├── colors.ts       # Color palette
│   │   ├── typography.ts   # Font sizes, weights, line heights
│   │   ├── spacing.ts      # 8px scale
│   │   ├── shadows.ts      # Depth & elevation
│   │   └── index.ts        # Export all tokens
│   │
│   ├── layouts/            # Page layout components
│   │   ├── MainLayout.tsx  # Standard page layout
│   │   └── BlankLayout.tsx # No sidebar/nav layout
│   │
│   ├── pages/              # Page components
│   │   ├── Home.tsx        # Homepage
│   │   ├── Features.tsx    # Features page
│   │   ├── Pricing.tsx     # Pricing page
│   │   └── Contact.tsx     # Contact form page
│   │
│   ├── App.tsx             # Root app component
│   ├── main.tsx            # React entry point
│   ├── index.css           # Global styles & Tailwind imports
│   └── App.css             # App-specific styles
│
├── docs/                   # Documentation
│   ├── DESIGN_SYSTEM.md    # Component API, patterns, guidelines
│   ├── BRAND.md            # Brand identity, colors, voice
│   └── ARCHITECTURE.md     # This file
│
├── CLAUDE.md               # Project roadmap & guidelines
├── README.md               # Getting started guide
├── package.json            # NPM dependencies & scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── postcss.config.js       # PostCSS configuration
└── .gitignore              # Git ignore patterns
```

## Component Architecture

### Component Structure

Every component follows this pattern:

```
src/components/ComponentName/
├── ComponentName.tsx           # Main component (exports React.FC)
├── ComponentName.stories.tsx   # Storybook documentation
├── README.md                   # Component API documentation
└── index.ts                    # Export (optional, for convenience)
```

### Component Template

```typescript
// src/components/Button/Button.tsx
import React from 'react'

/**
 * Button component
 * @param variant - Visual style: primary, secondary, outline, ghost
 * @param size - Button size: sm, md, lg
 * @param disabled - Disable the button
 * @param onClick - Click handler
 */
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick,
}) => {
  // Implementation with Tailwind classes
  return (
    <button
      className="..."
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {children}
    </button>
  )
}
```

### Component Variants

Each component supports multiple **variants**, **sizes**, and **states**:

- **Variants** — `primary`, `secondary`, `outline`, `ghost`
- **Sizes** — `sm`, `md`, `lg`
- **States** — default, hover, active, disabled, loading, error

Example:
```tsx
<Button variant="primary" size="lg" disabled={false}>
  Click Me
</Button>
```

## Design Token Architecture

### Centralization Strategy

All design decisions are stored in `src/design-tokens/`:

```typescript
// src/design-tokens/colors.ts
export const colors = {
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
  },
  // ...
}

// Usage in components
import { colors } from '../design-tokens/colors'
className={`text-[${colors.primary[600]}]`}
```

### Tokens Include:
- **Colors** — Palette, variations
- **Typography** — Font sizes, weights, line heights
- **Spacing** — 8px scale (8, 16, 24, 32, 48, 64, 80px)
- **Shadows** — Elevation levels
- **Border Radius** — Rounded corner sizes

### Single Source of Truth
- Design tokens defined in `src/design-tokens/`
- Reflected in `tailwind.config.js`
- Documented in `docs/BRAND.md`
- Enforced in Storybook

## Data Flow

```
User Input → Component → Props → Render → DOM
```

### Example: Button Click

1. User clicks button
2. `onClick` handler fires
3. Handler calls parent component function
4. Parent updates state
5. Component re-renders with new props
6. UI updates

```tsx
// Parent
const [isLoading, setIsLoading] = useState(false)

<Button
  onClick={() => submitForm()}
  loading={isLoading}
>
  Submit
</Button>
```

## Styling Architecture

### Approach: Tailwind CSS + Design Tokens

**Why Tailwind?**
- Utility-first → rapid development
- Small bundle size
- Easy theming via `tailwind.config.js`
- Great IDE support
- Active community

**Workflow:**
1. Design tokens → `tailwind.config.js`
2. Components use Tailwind classes
3. Storybook previews component variations
4. Build optimizes unused CSS

### Example:

```tsx
// Don't do this:
<div style={{ backgroundColor: '#3B82F6', padding: '1rem' }}>

// Do this:
<div className="bg-primary-600 p-4">
```

## State Management

**Philosophy:** Keep it simple.

For this project:
- **Component-level state** — `useState` for local UI state
- **URL state** — React Router for navigation
- **No global state manager** unless needed

If app grows complex, consider:
- Redux
- Zustand
- Jotai

## Accessibility Architecture

### Built-in Accessibility
- **Semantic HTML** — Use `<button>`, `<a>`, `<nav>`, etc.
- **ARIA Attributes** — `aria-label`, `aria-disabled`, `aria-busy`
- **Keyboard Navigation** — Tab through interactive elements
- **Focus Management** — Visible focus rings
- **Color Contrast** — 4.5:1 minimum (WCAG AA)
- **Test with** — Axe, Wave, Lighthouse

### Example:
```tsx
<button
  aria-disabled={disabled}
  aria-busy={loading}
  className="focus-visible:outline-2 focus-visible:outline-primary-600"
>
  {loading ? '...' : 'Click Me'}
</button>
```

## Build & Deployment

### Development
```bash
npm run dev           # Start Vite dev server (HMR enabled)
npm run storybook     # Start Storybook component library
```

### Production
```bash
npm run build         # TypeScript check + Vite build
npm run preview       # Preview production build locally
```

### Build Output
- **dist/** — Optimized HTML, CSS, JS
- **File splitting** — Components lazy-loaded
- **CSS optimization** — Unused styles removed (PurgeCSS)
- **Source maps** — For debugging

## Performance Optimization

### Current Strategy
1. **Vite** — Fast build & HMR
2. **React.memo** — Prevent unnecessary re-renders
3. **Code splitting** — Lazy-load pages with React.lazy
4. **CSS optimization** — Tailwind's PurgeCSS
5. **Image optimization** — WebP + JPEG fallback

### Monitoring
Use Lighthouse in Chrome DevTools:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

## Git Workflow

### Branching Strategy

```
main (production-ready)
  └─ feature/component-name (features)
  └─ fix/bug-name (bug fixes)
  └─ docs/page-name (documentation)
```

### Commit Messages
```
feat(components): add Button component
fix(button): correct hover state color
docs(design-system): update typography guidelines
style(tailwind): adjust spacing scale
refactor(card): simplify shadow implementation
```

### Example Workflow
```bash
# Create feature branch
git checkout -b feature/new-component

# Make changes
# ... edit files ...

# Commit
git add src/components/NewComponent/
git commit -m "feat(components): add NewComponent"

# Merge back
git checkout main
git merge feature/new-component

# Clean up
git branch -d feature/new-component
```

## Testing Strategy

### Components
- **Storybook** — Visual testing, documentation
- **Manual testing** — Interactive testing in Storybook
- **Keyboard navigation** — Tab through components
- **Screen reader** — Test with accessibility tools

### Recommended Tools
- Jest — Unit testing
- React Testing Library — Component testing
- Cypress — E2E testing
- Axe — Accessibility testing

## Project Memory

### Persistent Context
The `.claude/memory/` system stores:
- **Project decisions** — Why we chose React, Tailwind, etc.
- **Design patterns** — What works, what doesn't
- **Lessons learned** — From previous changes
- **Future plans** — Roadmap and milestones

This allows Claude Code to remember context across sessions.

## Extending the Architecture

### Adding a New Component
1. Create folder: `src/components/ComponentName/`
2. Write component with TypeScript
3. Add Storybook stories
4. Update `docs/DESIGN_SYSTEM.md`
5. Commit: `git commit -m "feat(components): add ComponentName"`

### Adding a New Token
1. Update `src/design-tokens/tokens.ts`
2. Update `tailwind.config.js`
3. Update `docs/BRAND.md`
4. Use in components via Tailwind classes

### Adding a New Page
1. Create file: `src/pages/PageName.tsx`
2. Use layout: `<MainLayout>` or `<BlankLayout>`
3. Compose from components
4. Add route in router (if using React Router)
5. Document in `CLAUDE.md`

## Future Enhancements

- [ ] React Router for multi-page routing
- [ ] Form validation library (React Hook Form)
- [ ] API integration layer
- [ ] State management (if complexity grows)
- [ ] Testing suite (Jest + React Testing Library)
- [ ] E2E testing (Cypress)
- [ ] Authentication flow
- [ ] Database integration

---

**This architecture scales** from a single landing page to a full-featured web application while maintaining consistency, performance, and developer experience.
