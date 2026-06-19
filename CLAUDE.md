# Professional Website Project

**Project Goal:** Build a professional, highly used, attractive website with evolving design system and persistent project memory.

## Quick Start
- **Frontend:** React + Vite + Tailwind CSS
- **Design System:** Storybook + component library + design tokens
- **Versioning:** Git with design history tracking
- **Memory:** Persistent context system in `.claude/memory/`

## Directory Structure
```
WEBS/
├── .claude/                    # Claude Code settings & memory
│   ├── memory/                # Persistent project context
│   └── settings.json          # Project settings
├── src/
│   ├── components/            # Reusable component library
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── ...
│   ├── design-tokens/         # Design system (colors, typography, spacing)
│   ├── layouts/               # Page layouts
│   ├── pages/                 # Page components
│   ├── styles/                # Global styles
│   └── App.tsx
├── .storybook/                # Storybook configuration
├── docs/                      # Design documentation
│   ├── DESIGN_SYSTEM.md       # Component library reference
│   ├── BRAND.md               # Brand guidelines
│   └── ARCHITECTURE.md        # Technical architecture
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

## Project Phases

### Phase 1: Foundation (Current)
- [x] Git repository initialized
- [ ] Node.js & npm installed
- [ ] Frontend project scaffolded
- [ ] Design tokens defined
- [ ] Storybook configured

### Phase 2: Design System
- [ ] Core components built (Button, Card, Header, Footer)
- [ ] Design system documentation
- [ ] Component variants & states
- [ ] Accessibility (ARIA) compliance

### Phase 3: Website
- [ ] Homepage design
- [ ] Additional pages (Features, Pricing, About, Contact)
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] SEO optimization

### Phase 4: Polish & Launch
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Deployment configuration
- [ ] Analytics setup

## Key Files to Know

### Design System
- `src/design-tokens/` — Colors, typography, spacing, shadows (single source of truth)
- `src/components/` — Reusable component library with variants
- `docs/DESIGN_SYSTEM.md` — Component documentation

### Project Memory
- `.claude/memory/MEMORY.md` — Index of all project memories
- `.claude/memory/project_*.md` — Project-specific context (persists across sessions)
- `.claude/memory/feedback_*.md` — Claude Code feedback and patterns (what works, what doesn't)

### Documentation
- `docs/DESIGN_SYSTEM.md` — Design system overview, component API, usage examples
- `docs/BRAND.md` — Brand guidelines, color palette, typography rules
- `docs/ARCHITECTURE.md` — Technical architecture, component hierarchy, data flow

## Development Workflow

### When starting work:
1. Claude Code loads project memory (see `.claude/memory/MEMORY.md`)
2. Review recent decisions in memory files
3. Check git log for design evolution
4. Read CLAUDE.md (this file) for current phase

### When making changes:
1. Create feature branch: `git checkout -b feature/component-name`
2. Build component in `src/components/`
3. Add Storybook story in `src/components/Component.stories.tsx`
4. Update `docs/DESIGN_SYSTEM.md` with new component
5. Commit with descriptive message: `git commit -m "feat(components): add Button component with variants"`

### When launching a new major feature:
1. Update `CLAUDE.md` with new phase or section
2. Create memory file documenting the decision: `.claude/memory/project_<feature>.md`
3. Add to `MEMORY.md` index

## Important Patterns

### Reusability First
- All components go in `src/components/` so they can be reused across pages
- Design tokens are centralized in `src/design-tokens/`
- No magic numbers; everything references design tokens

### Design Tokens (Single Source of Truth)
```typescript
// src/design-tokens/colors.ts
export const colors = {
  primary: '#3B82F6',
  secondary: '#1F2937',
  success: '#10B981',
  error: '#EF4444',
  // ...
}

// Usage in components
import { colors } from '../design-tokens/colors'
```

### Component Structure
```typescript
// src/components/Button/Button.tsx
import React from 'react'
import { colors } from '../../design-tokens/colors'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children,
  onClick 
}) => {
  // Implementation
}
```

### Git Workflow
- `main` — production-ready code
- `develop` — staging branch
- `feature/*` — feature branches (delete after merge)
- Commit messages: `type(scope): description` (e.g., `feat(components): add Card component`)

## Next Steps

1. **Install Node.js** from https://nodejs.org/ (LTS recommended)
2. **Run setup script:**
   ```bash
   npm install
   npm run dev          # Start dev server
   npm run storybook    # View component library
   ```
3. **Start building** — See `docs/DESIGN_SYSTEM.md` for component guidelines

## Contact & Maintainer
- Email: haohanzang@gmail.com
- Project started: 2026-06-18
