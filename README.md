# Professional Website

A modern, professional website built with **React**, **Vite**, **Tailwind CSS**, and a comprehensive **design system** with **Storybook** component documentation.

## 🎯 Quick Overview

This project features:
- ✅ **Design System First** — Centralized design tokens and reusable components
- ✅ **Component Library** — Storybook for isolated component development
- ✅ **Git Version Control** — Track design evolution over time
- ✅ **Persistent Memory** — Claude Code remembers project context across sessions
- ✅ **TypeScript** — Type-safe development
- ✅ **Tailwind CSS** — Utility-first styling
- ✅ **Accessibility** — WCAG 2.1 AA compliant components

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

1. **Install Node.js** from https://nodejs.org/

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   This opens http://localhost:5173 in your browser.

4. **View the component library:**
   ```bash
   npm run storybook
   ```
   This opens http://localhost:6006 with Storybook.

## 📁 Project Structure

```
WEBS/
├── .claude/
│   └── memory/              # Persistent project context
├── .storybook/              # Storybook configuration
├── src/
│   ├── components/          # Reusable component library
│   │   ├── Button/
│   │   ├── Card/
│   │   └── Header/
│   ├── design-tokens/       # Colors, typography, spacing
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── docs/
│   ├── DESIGN_SYSTEM.md     # Component API & patterns
│   ├── BRAND.md             # Brand guidelines
│   └── ARCHITECTURE.md      # Technical structure
├── CLAUDE.md                # Project documentation
└── package.json
```

## 🎨 Design System

### Design Tokens
Located in `src/design-tokens/`, these centralize:
- **Colors** — Primary, secondary, semantic colors
- **Typography** — Fonts, sizes, weights, line heights
- **Spacing** — Consistent 8px scale
- **Shadows** — Depth & elevation
- **Border Radius** — Rounded corners

### Components
All reusable components live in `src/components/`:
- **Button** — Multiple variants (primary, secondary, outline, ghost)
- **Card** — Content container with padding & shadow options
- **Header** — Site header with navigation
- **Input** — Form inputs with validation
- **Badge** — Small labels & tags
- *More coming soon...*

Each component includes:
- TypeScript types
- Storybook documentation
- Accessibility features
- Multiple variants & sizes

## 🧑‍💻 Development Workflow

### Creating a New Component

1. **Create component folder:**
   ```
   src/components/ComponentName/
   ├── ComponentName.tsx
   ├── ComponentName.stories.tsx
   └── README.md
   ```

2. **Build the component:**
   ```typescript
   // src/components/ComponentName/ComponentName.tsx
   import React from 'react'

   interface ComponentNameProps {
     // Props here
   }

   export const ComponentName: React.FC<ComponentNameProps> = (props) => {
     return <div>{/* Component JSX */}</div>
   }
   ```

3. **Document in Storybook:**
   ```typescript
   // src/components/ComponentName/ComponentName.stories.tsx
   import type { Meta, StoryObj } from '@storybook/react'
   import { ComponentName } from './ComponentName'

   const meta: Meta<typeof ComponentName> = {
     component: ComponentName,
     tags: ['autodocs'],
   }

   export default meta
   type Story = StoryObj<typeof meta>

   export const Default: Story = {
     args: { /* default props */ },
   }
   ```

4. **Commit your changes:**
   ```bash
   git add src/components/ComponentName/
   git commit -m "feat(components): add ComponentName component"
   ```

### Git Workflow

```bash
# Create a feature branch
git checkout -b feature/component-name

# Make changes and commit
git add .
git commit -m "feat(components): add ComponentName"

# Merge back to main
git checkout main
git merge feature/component-name
```

## 📖 Documentation

Read more in these files:
- **[CLAUDE.md](./CLAUDE.md)** — Project phases, structure, and development guidelines
- **[docs/DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md)** — Component API, tokens, and guidelines
- **[docs/BRAND.md](./docs/BRAND.md)** — Brand identity, colors, typography, and voice
- **[docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md)** — Technical structure and data flow

## 📝 Memory System

This project uses a persistent memory system in `.claude/memory/`:
- **MEMORY.md** — Index of all project memories
- **project_professional_website.md** — Project-specific context and decisions
- **feedback_*.md** — What works and what doesn't

These memories persist across sessions, so Claude Code remembers project context automatically.

## 🛠 Available Commands

```bash
npm run dev              # Start development server (http://localhost:5173)
npm run build           # Build for production
npm run preview         # Preview production build
npm run storybook       # Start Storybook (http://localhost:6006)
npm run build-storybook # Build Storybook for deployment
npm run lint            # Run ESLint
npm run type-check      # Run TypeScript type checking
```

## 🎯 Project Phases

### Phase 1: Foundation ✅ (Current)
- [x] Git repository initialized
- [x] Project documentation created
- [x] Design system defined
- [x] Component structure scaffolded
- [ ] Node.js dependency installation

### Phase 2: Design System (Next)
- [ ] Core components built (Button, Card, Header, Footer)
- [ ] Component variants documented
- [ ] Storybook fully configured
- [ ] Accessibility compliance verified

### Phase 3: Website
- [ ] Homepage design & implementation
- [ ] Additional pages (Features, Pricing, About, Contact)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] SEO optimization

### Phase 4: Polish & Launch
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Analytics integration
- [ ] Deployment

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Storybook Guide](https://storybook.js.org/docs/react/get-started/introduction)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

## 💡 Best Practices

1. **Reuse components** — Everything goes in `src/components/` for reuse
2. **Use design tokens** — No magic numbers, reference design tokens
3. **Build variants** — Each component should support multiple variants
4. **Document in Storybook** — Add stories for every component
5. **Keep it accessible** — ARIA attributes, keyboard navigation, contrast
6. **Commit frequently** — Small, descriptive commits are easier to review
7. **Update memory** — Document major decisions in project memory

## 📞 Support

- Read the project documentation in CLAUDE.md
- Check design system guidelines in docs/DESIGN_SYSTEM.md
- Review existing component examples in Storybook
- Check project memory in .claude/memory/ for context

---

**Built with ❤️ for professional, modern web experiences**

Email: haohanzang@gmail.com
