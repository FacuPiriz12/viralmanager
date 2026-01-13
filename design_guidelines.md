# Design Guidelines: Viral Video Management Platform (Light Edition)

## Design Approach
**Reference-Based**: TikTok's clean, content-first aesthetic adapted to light mode + Instagram's bright, airy layouts + Linear's crisp typography and spacious organization.

## Core Design Principles
- **Light-First Interface**: Pure white (#FFFFFF) primary surfaces, soft gray (#F8F9FA) secondary backgrounds, light gray (#E9ECEF) borders
- **Gradient Accent System**: Pink (#FF006E) to Cyan (#00F5FF) for CTAs, highlights, and interactive states
- **High Contrast Typography**: Near-black text (#0F0F0F) on white for maximum readability
- **Spacious & Breathing**: Generous whitespace, clean separation between sections

---

## Typography System

**Fonts**: Inter (body), Space Grotesk (headings) via Google Fonts

**Hierarchy**:
- Hero Headline: Space Grotesk, 64px desktop/40px mobile, 700 weight, #0F0F0F
- Section Headers: Space Grotesk, 48px desktop/32px mobile, 600 weight, #0F0F0F
- Subheadings: Space Grotesk, 24px, 500 weight, #374151
- Body Large: Inter, 20px, 400 weight, #374151
- Body Standard: Inter, 16px, 400 weight, #6B7280
- UI Labels: Inter, 14px, 500 weight, #6B7280, uppercase 0.5px tracking
- Captions: Inter, 13px, 400 weight, #9CA3AF

---

## Layout System

**Spacing Scale**: Tailwind units 2, 4, 8, 12, 16, 20, 24, 32
**Container**: max-w-7xl, px-8 mobile, px-12 tablet, px-16 desktop
**Section Padding**: py-20 desktop, py-12 mobile
**Grid**: 12-column for dashboards, 3-column video galleries (2-col tablet, 1-col mobile)

---

## Component Library

### Navigation
**Fixed Top Bar** (h-20):
- White background with subtle shadow (0 1px 3px rgba(0,0,0,0.05))
- Logo left, nav center, CTA/profile right
- Active nav: Gradient underline (2px, pink-to-cyan)
- Desktop: horizontal menu | Mobile: hamburger menu

### Hero Section
**Full-Width Image Hero** (85vh desktop, 70vh mobile):
- Background: High-quality image (1920x1080) of modern video editing workspace with bright screens, clean interface
- Overlay: Subtle white gradient (bottom: rgba(255,255,255,0.95) for text readability)
- Content: Centered, max-w-4xl
- Headline + subheading (max-w-2xl) + dual CTAs
- Primary CTA: Gradient background (pink-to-cyan), white text, px-8 py-4, rounded-xl, backdrop-blur on image background
- Secondary CTA: White background with gradient border, gradient text, px-8 py-4, rounded-xl, backdrop-blur

### Video Grid/Gallery
**3-Column Masonry** (16:9 thumbnails):
- Card: White background, rounded-xl, shadow-md, hover lift + shadow-lg
- Thumbnail gradient overlay on hover (pink-to-cyan, 10% opacity)
- Metadata: Views, duration badge (gradient background), engagement icons
- Gap-6 between cards

### Dashboard Stats
**4-Column Metric Cards**:
- White background, rounded-2xl, shadow-sm
- Gradient left border (4px, pink-to-cyan)
- Large number (40px, #0F0F0F), label below (14px, #6B7280)
- Icon top-right with gradient fill
- p-8 padding

### Feature Sections
**Alternating 2-Column Layouts** (Image + Text):
- Image side: Dashboard mockup screenshots (800x600), rounded-xl, shadow-lg
- Text side: Heading + description + features list + CTA link
- Background alternates: white, #F8F9FA
- py-24 section padding

**3-Column Feature Cards**:
- White cards, rounded-xl, p-8, shadow-sm, hover shadow-md
- Gradient icon (Heroicons), heading, description
- Gap-8 between cards

### Testimonials
**2-Column Grid**:
- White cards with subtle gray border (#E9ECEF)
- Circular avatar (96px), name/role, quote
- Gradient quotation mark accent
- p-8 padding, rounded-2xl

### Forms & CTAs
**Input Fields**:
- White background, 1px gray border (#E9ECEF)
- Focus: Gradient border, subtle shadow
- Rounded-lg, px-6 py-4

**Upload Zone**:
- Light gray background (#F8F9FA), dashed gradient border
- Centered icon + text
- Drag state: Gradient border solidifies

**Button Variations**:
- Primary: Gradient (pink-to-cyan), white text, rounded-xl, shadow-md hover
- Secondary: White bg, gradient border, gradient text
- Ghost: Transparent, gradient text hover

### Footer
**4-Column Layout** (bg #F8F9FA, py-16):
- Logo/tagline, Product, Resources, Newsletter/Social
- Gradient divider line at top
- Newsletter: Inline input + gradient button
- Social icons with gradient hover states

---

## Images

**Hero Image**: Bright, modern video editing workspace (1920x1080), multiple monitors showing analytics dashboards, vibrant but clean UI, natural lighting, professional setup

**Feature Screenshots**: 4-5 dashboard mockups showing analytics, video library, editing interface, creator profiles (each ~800x600)

**Video Thumbnails**: Diverse content placeholders (16:9), bright and colorful with gradient overlays on interactive states

**Testimonial Avatars**: Circular creator photos (96x96)

---

## Visual Effects
- **Shadows**: Layered shadows (sm, md, lg, xl) for depth without heaviness
- **Gradients**: Pink-to-cyan on borders, buttons, icons, hover states
- **Hover States**: Lift (translateY -2px) + shadow increase
- **Backdrop Blur**: On buttons over images for legibility