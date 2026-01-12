# ViralManager

## Overview

ViralManager is a cross-platform viral video analytics dashboard designed for content creators, community managers, and agencies. The application aggregates viral video content from TikTok, Instagram, and YouTube, providing insights through viral scoring algorithms, collection management, and ad intelligence features. It helps users discover trending content formats, analyze engagement metrics, and organize research into collections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript, using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching
- **Styling**: Tailwind CSS with custom dark theme (ttblack, ttbg, ttpink, ttcyan, ttgray color palette)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts` with Zod validation
- **Build**: esbuild for server bundling, Vite for client bundling

### Data Storage
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM with drizzle-zod for schema validation
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Drizzle Kit with `db:push` command for schema synchronization

### Key Data Models
- **Videos**: Stores viral video metadata including platform, engagement metrics (views, likes, comments, shares), niche categorization, ad type (Organic/Paid), revenue estimates, hooks, and CTAs
- **Collections**: User-created folders containing arrays of video IDs for organization

### API Structure
The API uses a typed contract pattern defined in `shared/routes.ts`:
- `GET /api/videos` - List videos with optional filters (platform, niche, search)
- `POST /api/videos` - Create new video entry
- `GET /api/collections` - List all collections
- `POST /api/collections` - Create new collection
- `PUT /api/collections/:id` - Update existing collection

### Viral Score Algorithm
Located in `client/src/lib/viralScore.ts`, computes a 0-100 score based on:
- Normalized views (45% weight)
- Engagement rate (35% weight)
- Share velocity as growth proxy (20% weight)

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage in PostgreSQL

### UI/Component Libraries
- **Radix UI**: Full suite of accessible primitives (dialogs, dropdowns, tabs, etc.)
- **shadcn/ui**: Pre-built component configurations in `client/src/components/ui/`
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **CMDK**: Command palette component
- **Vaul**: Drawer component
- **react-day-picker**: Calendar/date picker

### State & Data
- **TanStack React Query**: Server state management and caching
- **Zod**: Runtime type validation for API contracts
- **drizzle-zod**: Automatic Zod schema generation from Drizzle tables

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Intelligent class merging
- **clsx**: Conditional class construction

### Build & Development
- **Vite**: Frontend build tool with HMR
- **esbuild**: Server bundling for production
- **tsx**: TypeScript execution for development

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal**: Error overlay in development
- **@replit/vite-plugin-cartographer**: Development tooling
- **@replit/vite-plugin-dev-banner**: Development environment indicator