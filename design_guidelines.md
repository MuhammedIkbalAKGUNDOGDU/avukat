# Design Guidelines: Professional Law Firm Website

## Design Approach

**Selected Approach:** Design System + Professional Services Reference
- Base: Material Design principles for structure and consistency
- Reference: Modern professional service websites (law firms, consulting) emphasizing trust and authority
- Key Principle: Timeless professionalism over trendy aesthetics

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Primary Navy: 220 45% 25% (deep navy for headers, primary buttons)
- Secondary Navy: 220 35% 35% (navigation, secondary elements)
- Gold Accent: 42 85% 55% (sparingly for CTAs, highlights)
- Neutral Background: 0 0% 98% (page backgrounds)
- White: 0 0% 100% (card backgrounds, contrast)
- Text Primary: 220 20% 15% (body text)
- Text Secondary: 220 10% 45% (supporting text)

**Dark Mode:**
- Primary Navy: 220 50% 15% (darker navy for depth)
- Secondary Navy: 220 40% 20%
- Gold Accent: 42 75% 60% (slightly muted for dark mode)
- Background: 220 20% 10% (deep navy-tinted background)
- Surface: 220 15% 15% (card backgrounds)
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%

### B. Typography

**Font Families:**
- Primary: 'Playfair Display' (serif) - For headings, establishing authority
- Secondary: 'Inter' (sans-serif) - For body text, navigation, UI elements

**Type Scale:**
- Hero Heading: text-5xl md:text-6xl lg:text-7xl, font-bold
- Page Title: text-4xl md:text-5xl, font-bold
- Section Title: text-3xl md:text-4xl, font-semibold
- Card Title: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-normal
- Body: text-base, font-normal
- Small: text-sm, font-normal

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (e.g., p-4, mb-8, gap-12)

**Container Strategy:**
- Max width: max-w-7xl for standard sections
- Padding: px-6 md:px-8 lg:px-12
- Section vertical spacing: py-16 md:py-20 lg:py-24

**Grid Patterns:**
- Practice Areas: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-8
- Team Members: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-10
- Two-column content: grid-cols-1 lg:grid-cols-2, gap-12

### D. Component Library

**Navigation:**
- Fixed top navigation with subtle shadow on scroll
- Height: h-20, transparent background transitioning to navy on scroll
- Links: Subtle gold underline on hover (2px thickness)
- Language switcher: Dropdown with flag icons

**Buttons:**
- Primary CTA: Navy background, white text, gold border on hover, px-8 py-3, rounded-sm
- Secondary: Outlined navy border, navy text, gold background on hover, px-6 py-3
- Text buttons: Gold text, underline on hover

**Cards:**
- Practice Area Cards: White/surface background, subtle shadow, border-s-4 border-gold, p-6, rounded-md, hover:shadow-lg transition
- Lawyer Profile Cards: White/surface background, image top (aspect-square), content p-6, hover:scale-105 transition

**Forms:**
- Input fields: border-2 border-neutral-300 dark:border-neutral-600, rounded-md, px-4 py-3, focus:border-gold
- Labels: text-sm font-semibold mb-2 text-navy
- Submit button: Primary button style, w-full on mobile

**Footer:**
- Three-column layout (Quick Links, Practice Areas, Contact Info)
- Navy background, white/gold text
- Subtle top border (gold, 2px)

### E. Page-Specific Layouts

**Home Page:**
- Hero: Full-width, min-h-screen with professional background image (law library/scales of justice), overlay with navy gradient (opacity-70), centered content
- Practice Areas: Grid of 3-4 cards with icons, short descriptions
- Team Preview: Grid of 3 featured lawyers with photos
- Trust Indicators: Stats or client testimonials in between sections

**Practice Area Detail:**
- Hero: Smaller (h-64), area-specific imagery
- Content: Two-column layout (sidebar with related areas, main content)

**Team Page:**
- Grid layout with all lawyers
- Filter/sort by practice area (optional enhancement)

**Lawyer Profile:**
- Hero section with large photo (rounded-lg), name, title
- Two-column: Biography on left, Education/Bar Admissions on right
- Practice areas tags below

**Contact Page:**
- Two-column: Form on left (col-span-2), Map/info on right (col-span-1)
- Office hours, phone, email prominently displayed

### F. RTL Support Considerations

- All spacing uses logical properties (ms-, me-, ps-, pe- instead of ml-, mr-, pl-, pr-)
- Navigation and footer layouts flip appropriately
- Text alignment: text-start instead of text-left
- Icons and logos position based on language direction

### G. Images

**Required Images:**
1. **Hero Image (Home):** Professional law library or modern office setting with natural light - Large, high-quality, full-width background image
2. **Lawyer Portraits:** Professional headshots with consistent styling (neutral background, professional attire)
3. **Practice Area Icons:** Simple, professional icons (scales of justice, briefcase, gavel, family, building, etc.)
4. **Office/Contact:** Office exterior or reception area for contact page

**Image Treatment:**
- Subtle overlay (navy with 40-60% opacity) on hero images
- Consistent aspect ratios for lawyer photos (square or 3:4)
- Professional, high-resolution (avoid stock photo look)

### H. Interactions & Animations

**Minimal, Professional Animations:**
- Card hover: subtle scale (1.02) and shadow increase, duration-300
- Button hover: smooth color transitions, duration-200
- Navigation: Smooth scroll behavior
- Page transitions: Fade in content on route change
- No distracting parallax or scroll-triggered animations

### I. Accessibility & Localization

- Maintain WCAG AA contrast ratios in all color combinations
- Focus states: Visible gold ring on all interactive elements
- Language switcher clearly labeled with native language names
- Font size: Minimum 16px for body text (18px preferred for readability)
- Adequate spacing for Arabic script (line-height: 1.8 for Arabic)