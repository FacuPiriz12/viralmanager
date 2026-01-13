# Design Guidelines: Viral Video Management Platform

## Design Approach
**Reference-Based**: TikTok aesthetic with dark mode foundation, gradient accents, and modern video-first UI patterns. Supplement with Linear's typography clarity and Notion's dashboard organization.

## Core Design Principles
- **Dark-First Interface**: Deep charcoal/near-black backgrounds (#0a0a0a to #1a1a1a)
- **Gradient Accent System**: Pink (#FF006E) to Cyan (#00F5FF) gradients for CTAs, highlights, and interactive elements
- **Video-Centric Layout**: Large preview areas, thumbnail grids, and immersive playback zones
- **High-Tech Polish**: Glassmorphism effects, subtle animations, sharp edges with occasional soft glows

---

## Typography System

**Primary Font**: Inter (Google Fonts)
**Accent Font**: Space Grotesk for headings (Google Fonts)

**Hierarchy**:
- Hero Headline: Space Grotesk, 56-72px, 700 weight
- Section Headers: Space Grotesk, 36-48px, 600 weight
- Body Large: Inter, 18-20px, 400 weight
- Body Standard: Inter, 15-16px, 400 weight
- UI Labels: Inter, 13-14px, 500 weight, uppercase tracking (0.5px)

---

## Layout System

**Spacing Scale**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
**Container Max-Width**: 1440px with 8 horizontal padding on mobile, 12 on tablet, 16 on desktop
**Grid System**: 12-column grid for dashboard layouts, 3-column for video galleries on desktop, 2-column tablet, 1-column mobile

---

## Component Library

### Navigation
**Top Bar (Fixed)**:
- Transparent background with backdrop blur (glassmorphism)
- Logo left, primary nav center, user profile/CTA right
- Height: 16 units
- Gradient underline on active nav items

### Hero Section
**Full-Width Video Showcase**:
- Height: 85vh on desktop, 70vh mobile
- Background: Large hero image showing video editing interface or creator dashboard
- Overlay: Dark gradient (top: transparent, bottom: #0a0a0a 80% opacity)
- Content: Centered with headline, subtitle (max-width 700px), dual CTA buttons
- Primary CTA: Pink-to-cyan gradient background with blur effect, white text
- Secondary CTA: Outlined with gradient border, transparent background with blur

### Video Grid Layouts
**Masonry-Style Gallery**:
- 3 columns desktop, 2 tablet, 1 mobile
- Card design: Rounded corners (12px), hover lift effect
- Thumbnail: 16:9 aspect ratio with gradient overlay on hover
- Metadata overlay: View count, duration badge, engagement indicators
- Glass card background with subtle border

### Dashboard Sections
**Stats Cards**:
- 4-column grid for metrics (views, likes, shares, revenue)
- Glass card with gradient left border accent
- Large number (32px), label below (14px)
- Icon top-right corner (pink/cyan gradient fill)

**Video Management Table**:
- Dark background with alternating row tints
- Columns: Thumbnail preview, Title, Status (badge), Analytics, Actions
- Status badges: Gradient backgrounds (processing/live/archived)
- Inline action buttons with icon-only design

### Feature Sections (Marketing Pages)
**3-Column Feature Grid**:
- Icon (gradient fill) + Title + Description pattern
- Icons from Heroicons (use gradient CSS for dual-tone effect)
- Card: Subtle glass background, 20 padding, 16 gap between elements

**Video Timeline Showcase**:
- Horizontal scroll on mobile, full-width desktop
- Visual representation of editing timeline with gradient progress indicators
- Screenshots/mockups of the interface in action

**Testimonials**:
- 2-column layout with creator profile images
- Glass card design with quote, name, role, avatar
- Gradient quotation mark icon

### Forms & Inputs
**Text Fields**:
- Dark background (#1a1a1a), 1px gradient border
- Focus state: Thicker gradient border glow
- Padding: 4 vertical, 6 horizontal
- Rounded corners: 8px

**Upload Zone**:
- Dashed gradient border
- Drag-and-drop area with centered icon + text
- Active state: Solid gradient border

### CTAs & Buttons
**Primary**: Gradient background (pink-to-cyan), white text, rounded-lg, px-8 py-4
**Secondary**: Transparent with gradient border, white text, same padding
**Text Links**: Gradient text color on hover

### Footer
**Multi-Section Layout**:
- 4-column grid: Logo/tagline, Product links, Resources, Social/Newsletter
- Dark background with subtle top gradient border
- Newsletter input: Inline with gradient submit button
- Social icons: Gradient fill on hover

---

## Images Section

**Hero Image**: 
- Large, high-quality image (1920x1080 minimum) showing a modern video editing dashboard or content creator workspace with multiple screens, analytics, and vibrant UI elements
- Placement: Full-width background of hero section
- Treatment: Slight blur with dark overlay gradient

**Feature Section Images**:
- Dashboard mockup screenshots (3-4 images) showing analytics, video library, editing interface
- Size: 800x600px approximately
- Placement: Alternating left/right in feature sections or within glass cards

**Video Thumbnails**:
- Placeholder images showing diverse content types (16:9 ratio)
- Use in grid galleries and management tables
- Include gradient overlays for interactive states

**Team/Creator Images** (if testimonial section):
- Circular avatars, 80x80px
- Placed left of testimonial text

---

## Visual Effects
- **Glassmorphism**: backdrop-blur-xl with semi-transparent backgrounds
- **Gradient Accents**: Pink-to-cyan on borders, buttons, icons, text highlights
- **Subtle Glows**: Box shadows with gradient colors on hover states
- **Border Treatments**: 1px gradient borders on cards and containers