# Brand Guidelines

## Brand Identity

### Mission
Create a professional, modern, and attractive digital presence that builds trust with users and drives engagement.

### Brand Values
- **Professional** — Polished, reliable, enterprise-grade
- **Modern** — Current design trends, cutting-edge UX
- **Accessible** — Inclusive design for all users
- **Performant** — Fast, responsive, optimized

### Brand Voice
- Clear and direct (no jargon)
- Confident but not arrogant
- Helpful and supportive
- Professional with personality

---

## Visual Identity

### Color Palette

#### Primary Color (Action & CTA)
- **Brand Blue**: `#3B82F6`
- Use for: Primary buttons, links, highlights, brand elements
- Variations:
  - Light: `#DBEAFE` (backgrounds)
  - Dark: `#1D4ED8` (hover states)

#### Secondary Color (Neutral)
- **Dark Gray**: `#1F2937`
- Use for: Text, headings, body content
- Variations:
  - Light: `#F9FAFB` (page backgrounds)
  - Medium: `#6B7280` (secondary text)

#### Semantic Colors
- **Success**: `#10B981` (positive actions, confirmations)
- **Warning**: `#F59E0B` (caution, warnings)
- **Error**: `#EF4444` (errors, deletions)
- **Info**: `#06B6D4` (informational, tooltips)

#### Usage Rules
- Don't use more than 2 primary colors per page
- Maintain sufficient contrast (min 4.5:1 for text on background)
- Use semantic colors for their intended purpose only
- Never use color alone to convey information (pair with icons/text)

---

### Typography

#### Font Family
- **Primary**: Inter (sans-serif)
  - Available via Google Fonts or system fonts
  - Clean, modern, highly readable
  - Use for all text

#### Font Weights
- **Bold (700)**: Headings (h1, h2, h3)
- **Semibold (600)**: Labels, call-outs
- **Regular (400)**: Body text, paragraphs

#### Font Sizes & Hierarchy

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| h1 | 40px | 700 | Page titles, main headings |
| h2 | 32px | 700 | Section headings |
| h3 | 24px | 600 | Subsection headings |
| Body Large | 18px | 400 | Intro paragraphs, featured text |
| Body | 16px | 400 | Main paragraph text (default) |
| Body Small | 14px | 400 | Secondary text, captions |
| Label Large | 16px | 600 | Buttons, form labels |
| Label | 14px | 600 | Input labels, badges |
| Label Small | 12px | 600 | Helper text, fine print |

#### Typography Rules
- Maintain minimum line height of 1.5 for readability
- Maximum line length of 80 characters for body text
- Never use more than 3 font weights on one page
- Headings should be 1.5-2x the size of body text

---

### Spacing & Layout

#### Spacing Scale
```
0, 8px, 16px, 24px, 32px, 48px, 64px, 80px
```

#### Usage
- **8px**: Small gaps between elements (icon + text)
- **16px**: Standard padding, margins between sections
- **24px**: Section breaks, card padding
- **32px**: Major section separation
- **48px+**: Page-level spacing

#### Grid & Layout
- Use a 12-column grid for responsive layouts
- Mobile: 1 column (full width minus gutters)
- Tablet: 2-4 columns
- Desktop: Full 12-column grid
- Gutter width: 16px

---

### Imagery & Icons

#### Photography Style
- Professional, high-quality
- People-focused where possible (builds connection)
- Diverse representation
- Natural lighting preferred
- Consistent color tone and mood

#### Icon Style
- Minimal, line-based (2px stroke weight)
- Consistent sizing (16px, 24px, 32px)
- Rounded corners (2px radius)
- Must work at small sizes (legible at 16px)

#### Example Scenarios
- Header logo: Color version at 40px
- Navigation icons: Outline style at 24px
- Decorative images: Photograph at 50% opacity
- Error states: Red outline icon with error color text

---

### Motion & Animation

#### Principles
- Keep animations under 300ms for UI interactions
- Use ease-in-out for natural motion
- Avoid excessive animations (distraction)
- Always provide `prefers-reduced-motion` option

#### Examples
- Button hover: 150ms color change
- Modal entrance: 200ms fade + slide down
- Loading state: Continuous pulse or spinner

#### Accessibility
- Never animate motion-sensitive content indefinitely
- Respect `prefers-reduced-motion: reduce`
- Animations should enhance, not hinder, usability

---

## Component Guidelines

### Buttons
- **Primary**: Brand blue background, white text, rounded corners
- **Secondary**: Neutral gray background, dark text
- **Outline**: Border only, filled on hover
- **Ghost**: Text only, no background
- Minimum size: 44px x 44px (touch targets)
- Always include focus ring for keyboard navigation

### Cards
- Consistent padding (16px to 24px)
- Shadow for depth (lifted appearance)
- Border radius: 8px
- Internal spacing: 16px between elements

### Forms
- Label above input field
- Visible focus states (blue ring)
- Error states: Red border + error message
- Success states: Green checkmark
- Helper text: Small gray text below input

### Navigation
- Clear hierarchy (current page highlighted)
- Keyboard accessible (Tab navigation)
- Mobile: Hamburger menu or navigation drawer
- Desktop: Full horizontal menu

### Modals & Overlays
- Semi-transparent backdrop (40% opacity)
- Large shadow for depth
- Clear close button (X icon, top right)
- Escape key to close
- Focus trap within modal

---

## Accessibility Standards

### WCAG 2.1 AA Compliance (Minimum)

#### Color Contrast
- Normal text: 4.5:1 ratio
- Large text (18px+): 3:1 ratio
- UI elements: 3:1 ratio

#### Keyboard Navigation
- All interactive elements accessible via Tab key
- Logical tab order (left-to-right, top-to-bottom)
- Focus states clearly visible
- No keyboard traps

#### Screen Reader Support
- Semantic HTML (`<button>`, `<a>`, `<nav>`, etc.)
- ARIA labels for icons
- Alternative text for images
- Form labels associated with inputs
- Heading hierarchy (h1 > h2 > h3, no skips)

#### Testing Tools
- axe DevTools (browser extension)
- Wave (browser extension)
- Lighthouse (Chrome DevTools)
- Manual keyboard navigation testing

---

## Content Guidelines

### Tone
- Friendly but professional
- Clear and concise
- Avoid marketing jargon
- Use active voice
- Second person ("you") when addressing users

### Writing Style
- Short sentences (under 20 words)
- Short paragraphs (2-3 sentences max)
- Use lists for multiple items
- Action-oriented headlines

### Headings
- Clear value proposition
- Keyword-focused
- Scannable (not full sentences)

### Call-to-Actions (CTAs)
- Use action verbs: Get Started, Learn More, Sign Up
- Be specific about result: "Create Account" not "Submit"
- Place above the fold or at end of section

---

## Usage Examples

### Hero Section
```
Headline (h1, 40px, brand blue)
Subheading (body large, dark gray)
Primary CTA Button
Background image (nature/professional theme)
```

### Feature Card
```
Icon (24px, brand blue)
Heading (h3, 24px)
Description (body text, 14px, medium gray)
Optional link (brand blue, underlined on hover)
```

### Form
```
Form title (h2)
Label (14px, semibold) + Input field
Error state: Red border + error message (12px, red)
Submit button (primary variant)
Secondary action: Link (ghost button or text link)
```

---

## Performance & Technical

### Image Optimization
- Use modern formats: WebP with JPEG fallback
- Compress images (Tinify, ImageOptim)
- Lazy load below-the-fold images
- Responsive images (srcset)

### Lighthouse Scores (Target)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Bundle Size
- Initial JS: < 50KB (gzipped)
- CSS: < 15KB (gzipped)
- Lazy-load large components

---

## Brand Don'ts

❌ Don't use colors outside the palette without approval
❌ Don't mix serif and sans-serif fonts
❌ Don't use animations that last > 300ms
❌ Don't ignore contrast ratios
❌ Don't use justified text alignment
❌ Don't place text over images without a scrim
❌ Don't make interactive elements < 44px
❌ Don't use more than 3 colors per section

---

## Brand Asset Checklist

- [ ] Logo (SVG, PNG, favicon)
- [ ] Color palette (HEX codes, RGB, HSL)
- [ ] Typography files (Font files or CDN links)
- [ ] Icon set (24-pack of common icons)
- [ ] Sample photography (5-10 images)
- [ ] Component library (Storybook)
- [ ] Design tokens (JSON/TypeScript)
- [ ] Design system documentation
- [ ] Accessibility audit report

---

## Contact & Support

For brand questions or clarifications:
- Email: haohanzang@gmail.com
- Review DESIGN_SYSTEM.md for component API
- Check ARCHITECTURE.md for technical structure
