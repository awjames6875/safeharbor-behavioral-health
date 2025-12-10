# SafeHarbor Behavioral Health - Project Brief

**Last Updated:** 2025-12-09

## Project Identity
- **Organization:** SafeHarbor Behavioral Health
- **Location:** Tulsa, Oklahoma metro area (15 office locations)
- **Service:** Child and teen mental health therapy specializing in Medicaid/SoonerCare acceptance
- **Website:** SafeHarbor Behavioral Health (Next.js 14 + TypeScript)
- **Phone:** (918) 391-3606
- **Emergency:** 988 (Suicide & Crisis Lifeline - 24/7)

## Critical Business Rules (NEVER VIOLATE)

1. **LOCATION DATA PROTECTION** - The 15 locations in `src/data/locations.ts` are production business data. NEVER delete, remove, or modify core location data without explicit user instruction. These represent physical office locations critical to business operations.

2. **Medicaid/SoonerCare Emphasis** - Must be prominently displayed on all pages. This is the primary insurance accepted and the key differentiator for our target audience (low-income families in crisis).

3. **988 Crisis Hotline Visibility** - Must appear on every page (red banner in header). We serve crisis-intervention as primary use case - users are often searching during mental health emergencies on mobile devices.

4. **Mobile-First Design** - Many users access during crisis situations on phones. Design and functionality must prioritize mobile experience.

5. **Same-Week Appointments** - Key selling point. Must be highlighted throughout the site to differentiate from competitors with 4-6 week wait times.

## Project Structure

### Pages (42 total routes)

**Top-Level Pages:**
- Homepage (src/app/page.tsx)
- About (src/app/about/page.tsx)
- Contact (src/app/contact/page.tsx)

**Service Pages (13 services):**
- Behavioral Assessments
- Child Therapy
- Crisis Intervention
- Family Therapy
- Group Therapy
- Individual Therapy
- Medication Management
- Parent Coaching
- Psychiatric Evaluation
- School Support
- Substance Abuse Treatment
- Teen Counseling
- Trauma Treatment

**Location Pages (16 locations):**
- Bixby
- Broken Arrow
- Brookside
- Cherry Street
- Downtown Tulsa
- East Tulsa
- Jenks
- Midtown
- Midtown Tulsa
- North Tulsa
- Owasso
- Sand Springs
- Sapulpa
- South Tulsa
- Union District
- West Tulsa

**Special Pages:**
- Body & Brain Program (src/app/programs/body-brain/page.tsx)
- Adam James Founder Bio (src/app/adam-james/page.tsx)
- Blog Listing (src/app/blog/page.tsx)
- Blog Post Detail (src/app/blog/[slug]/page.tsx)
- Crisis Resources (src/app/resources/crisis-help/page.tsx)

## Key Differentiators

### Body & Brain Program
Revolutionary therapy combining movement with mental health treatment. Uses yoga, dance, martial arts, team sports, adventure therapy, and sensory integration activities. Available for ages 5-18. Recent results: 89% anxiety reduction, 76% emotional regulation improvement, 92% confidence increase.

### Multi-Location Strategy
15 dedicated locations across Tulsa metro with unique local SEO content. Each location page includes: neighborhood keywords, nearby schools, local landmarks, FAQs specific to that location.

### Medicaid-Focused
Primary target audience is low-income families with Medicaid/SoonerCare. "Same-week appointments" is key differentiator against competitors. Heavy emphasis on accessibility and affordability throughout the site.

## Business Goals (SEO Strategy)

**Primary Goal:** Rank #1 on Google for "child therapy Tulsa", "teen counseling Tulsa", and related keywords within 72 hours of launch.

**Target Keywords:**
- "child therapy Tulsa"
- "teen counseling Tulsa"
- "mental health Tulsa"
- "Medicaid therapist Tulsa"
- "SoonerCare mental health"
- "child mental health crisis Tulsa"
- "Body Brain program"
- Movement therapy Tulsa"
- [Every keyword] + [each of 15 neighborhoods]

**Target Audience:**
- Parents of children ages 3-12 with behavioral challenges
- Parents of teens (13-18) with anxiety, depression, academic struggles
- Families seeking Medicaid-covered therapy
- Schools and pediatricians making referrals

## Launch Readiness

**Current Status:** 75% ready for launch

**Breakdown by Component:**
- SEO Foundation: 90% ✅
- Content Structure: 85% ✅
- Technical Implementation: 70% 🔄
- Conversion Elements: 50% ❌
- Performance: 60% ❌
- Compliance: 40% ❌

**Missing/Incomplete (from PRD.md):**
1. Contact Forms - Need on every page
2. Sticky Header - With phone number and emergency button
3. Trust Badges - HIPAA, CARF accreditation, insurance badges
4. Performance Testing - Need 95+ PageSpeed score
5. Meta Descriptions - Remaining pages need optimization
6. Live Chat Widget - Add to all pages
7. Exit-Intent Popup - Lead capture
8. Blog Content - Need 10 launch articles
9. Security Headers - HTTPS, CSP implementation
10. Real Testimonials - Replace placeholder success stories

## Data Sources

### Key Configuration Files
- `src/data/locations.ts` - 15 locations with coordinates, neighborhoods, schools, landmarks, FAQs
- `src/data/services.ts` - Service metadata and FAQs
- `src/data/voiceAgentKnowledge.ts` - Voice agent context and knowledge base
- `src/data/adamJamesBio.ts` - Founder biography

### Design System
- Colors defined in `tailwind.config.ts`: teal-500 (#14b8a6), navy-800 (#1e293b), cream-50/100
- Theme: Warm, compassionate, professional - designed for anxious parents seeking help
- Logo: Nautical/lighthouse theme stored at `/public/logo.jpg`

### Brand Messaging
- Tone: Warm, compassionate, non-judgmental, parent-focused
- Reading Level: 8th grade (accessible to all education levels)
- Voice: Supportive but professional, emphasizing both safety and expertise

## Success Metrics

**Week 1 Targets:**
- All pages indexed by Google
- Contact form submissions > 5/day
- Phone calls > 10/day

**Month 1 Targets:**
- Top 3 ranking for target keywords
- 50+ organic sessions/day
- 15+ lead conversions/week
- 4.5+ star Google reviews

## Team/Contact

- Owner/User: Managing memory bank and directing development
- AI Assistants: Claude Code (primary), Cursor, Cline, Antigravity, Windsurf (secondary)
- Repository: SafeHarbor website codebase (Next.js 14, GitHub)
