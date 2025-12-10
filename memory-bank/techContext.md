# Technical Context

**Last Updated:** 2025-12-09

## Tech Stack

### Core Framework
- **Next.js:** 14.2.18 (App Router architecture)
- **React:** 18.x
- **TypeScript:** Strict mode enabled

### Styling & Animation
- **Tailwind CSS:** 3.4.16 (utility-first CSS framework)
- **Framer Motion:** 12.23.25 (advanced animations and page transitions)
- **React Intersection Observer:** 9.16.0 (scroll-triggered animations)
- **clsx:** 2.1.1 (class name management)
- **tailwind-merge:** 3.4.0 (Tailwind class merging)

### AI Integration
- **Google Generative AI:** 0.24.1 (Gemini API for Voice Agent)

### Icons & UI
- **React Icons:** 5.5.0 (icon library)

### Build Tools
- **PostCSS:** 8.4.49
- **Autoprefixer:** 10.4.20

### Testing
- **Playwright:** E2E testing framework (config exists, tests available)

## Color System (from tailwind.config.ts)

### Primary Colors
- **Teal 500:** `#14b8a6` - Primary buttons, accents, hover states
- **Teal 600:** `#0d9488` - Active/darker teal variant

### Secondary Colors
- **Navy 800:** `#1e293b` - Dark text, headers, footer background
- **Navy 700:** `#2d4a9f` - Secondary dark shade
- **Navy 50:** `#f0f4ff` - Light navy tint

### Background Colors
- **Cream 50:** `#fffbf0` - Warm off-white background
- **Cream 100:** `#fef3c7` - Lighter cream for highlights

### Neutral Grays (Slate)
- Slate 50 through 900 - For neutral text, borders, subtle backgrounds

### Additional Colors
- **Red 600:** `bg-red-600` - EXCLUSIVE use for crisis/emergency messaging only
- **Soft Shadow:** `0 4px 20px -2px rgba(0, 0, 0, 0.05)` - Subtle shadows
- **Glow Effect:** `0 0 15px rgba(141, 163, 153, 0.3)` - Soft teal glow

## Architecture Patterns

### File Organization
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Schema.org, SEO metadata)
│   ├── globals.css         # Global styles
│   ├── page.tsx            # Homepage
│   ├── services/           # 13 service pages (child-therapy/, teen-counseling/, etc.)
│   ├── locations/          # 16 location pages
│   ├── programs/           # Programs (body-brain/, etc.)
│   ├── resources/          # Resources (crisis-help/, etc.)
│   ├── blog/               # Blog listing + dynamic posts
│   └── adam-james/         # Founder bio page
├── components/             # Reusable components
│   ├── layout/             # Header, Footer, Navigation, StickyHeader
│   ├── home/               # Homepage sections
│   ├── ui/                 # Reusable UI components (NEW directory)
│   ├── schema/             # Schema.org components
│   └── [standalone]        # Individual components (ContactForm, VoiceAgent, etc.)
└── data/                   # Data files
    ├── locations.ts        # 15 locations (PROTECTED - NEVER MODIFY)
    ├── services.ts         # Services metadata
    ├── blogPosts.ts        # Blog content
    ├── adamJamesBio.ts     # Founder bio (NEW)
    └── voiceAgentKnowledge.ts  # Voice agent knowledge (NEW)
```

### Component Structure Pattern
- **loc Components:** Follow Next.js App Router pattern (page.tsx in directory)
- **Feature Components:** src/components/[category]/ComponentName.tsx
- **Data Files:** TypeScript objects exported as named exports
- **Styles:** Tailwind classes + Framer Motion animations

### Protected Data
- **`src/data/locations.ts`** - 15 production locations with:
  - Address, phone, coordinates
  - Neighborhoods served
  - Nearby schools
  - Local landmarks
  - FAQs specific to location
  - **STATUS:** CRITICAL BUSINESS DATA - NEVER DELETE OR MODIFY

### New Features in Progress
- **Voice Agent:** src/components/VoiceAgent.tsx - AI chat interface using Google Generative AI
- **UI Component Library:** src/components/ui/ - New reusable components (scroll-morph-hero, circular-testimonials)
- **Adam James Page:** src/app/adam-james/ - Founder biography page with photo (public/images/adam-james.png)
- **Voice Knowledge Base:** src/data/voiceAgentKnowledge.ts - Context for AI assistant

## Development Workflow

### Running Locally
```bash
npm run dev        # Start development server on http://localhost:3000
npm run build      # Production build (checks for errors)
npm run start      # Start production server
npm run lint       # Run ESLint with Next.js config
```

### Testing
```bash
npx playwright test                           # Run all E2E tests
npx playwright test --ui                      # Interactive UI mode
npx playwright test --headed                  # Run with visible browser
npx playwright test tests/navigation.spec.ts  # Run specific test file
npx playwright test --project=chromium        # Run on specific browser
npx playwright show-report                    # View HTML test report
```

### Port Management (if conflicts)
```bash
npx kill-port 3000      # Kill process on port 3000
PORT=3001 npm run dev   # Run on alternative port
```

## Schema.org & SEO Implementation

### Structured Data Types
- **LocalBusiness Schema** - on location pages
- **FAQPage Schema** - on service/location pages
- **BreadcrumbList Schema** - navigation hierarchy
- **Service Schema** - for service pages
- **Organization Schema** - homepage

### SEO Configuration
- **Meta Tags:** Unique title and description for all pages
- **Keywords:** Medicaid, mental health, child therapy, location-based terms
- **Internal Linking:** Cross-links between services and locations
- **Sitemap:** Auto-generated (sitemap.xml, robots.txt exist)

## Key Dependencies

### Version Management
- Check `package.json` for exact versions
- Google Generative AI is pinned to 0.24.1 (for Voice Agent)
- Framer Motion is at 12.23.25 (extensive animation support)
- Next.js 14.2.18 (latest stable 14.x)

### Environment Variables (`.env.local` - gitignored)
- Google Generative AI API key (for Voice Agent)
- Analytics tracking IDs (GA4, GTM, Clarity)
- Any other sensitive configuration

## Important Files Reference

### Configuration Files
- **tailwind.config.ts** - Color theme, fonts, custom CSS utilities
- **tsconfig.json** - TypeScript strict mode settings
- **next.config.js** - Next.js app configuration, image optimization
- **playwright.config.ts** - E2E test configuration

### Root Metadata
- **src/app/layout.tsx** - Root layout component with Schema.org markup, meta tags, fonts
- **src/app/globals.css** - Global CSS and animations

### Critical Data
- **src/data/locations.ts** - ALL 15 LOCATIONS (PROTECTED)
- **src/app/about/page.tsx** - About page with company info

### Logo
- **public/logo.jpg** - Lighthouse-themed logo (nautical design)

## Animation Strategy

### Framer Motion Usage
- **Page Transitions:** Smooth routing animations between pages
- **Scroll-Triggered:** Elements animate into view using Intersection Observer
- **Floating Elements:** Parallax and floating effects on service cards
- **Hover States:** Cards lift and show additional information on hover
- **Count-up Animations:** Statistics animate when scrolled into view

### Performance
- Animations use `will-change` and `transform` for GPU acceleration
- Framer Motion handles frame skipping automatically

## Build & Deployment

### Pre-Deployment Checks
```bash
npm run build    # Must succeed with no errors
npm run lint     # All linting rules must pass
```

### Performance Targets
- PageSpeed Desktop: 95+
- PageSpeed Mobile: 90+
- Core Web Vitals: All green

### Hosting Considerations
- Static site generation where possible
- Images optimized (WebP with fallbacks)
- Compression enabled
- Security headers configured
