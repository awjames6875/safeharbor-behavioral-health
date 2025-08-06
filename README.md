# SafeHarbor Behavioral Health Website

A modern, responsive website for SafeHarbor Behavioral Health, specializing in child and teen mental health services in Tulsa, Oklahoma. Features the innovative Body & Brain program combining movement with therapy.

## Key Features

### Homepage Sections
- **Hero Section**: Eye-catching headline with wave animation background
- **Trust Bar**: CARF accreditation, Medicaid acceptance, same-week appointments
- **Services Grid**: Child therapy, teen counseling, family therapy, trauma treatment, Body & Brain, school support
- **Body & Brain Feature**: Unique movement-based therapy program showcase
- **Insurance Section**: Medicaid/SoonerCare and major insurance acceptance
- **Contact Section**: Emergency hotline, contact form, office hours, location map

### Design Features
- **Mobile-First**: Optimized for parents searching on phones during crisis
- **Fast Loading**: Optimized performance for quick access to help
- **Emotional Design**: Reassuring colors (teal/navy/cream) for anxious parents
- **Crisis Priority**: 24/7 crisis support prominently displayed
- **Accessibility**: WCAG compliant for all users

## Pages Structure

- **Home**: Landing page with services overview
- **Services**: 
  - Individual Therapy
  - Group Therapy
  - Medication Management
  - Psychiatric Evaluation
- **Programs**:
  - Body-Brain Integration Program
- **About**: Agency information and mission
- **Contact**: Contact form and information
- **Locations**:
  - Midtown Tulsa
  - South Tulsa
  - Broken Arrow
- **Resources**:
  - Crisis Help

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/               # Next.js app router pages
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   ├── services/      # Services pages
│   ├── programs/      # Programs pages
│   ├── locations/     # Location pages
│   └── resources/     # Resource pages
├── components/        # Reusable components
│   ├── layout/        # Layout components
│   └── sections/      # Page sections
```

## Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **React Hook Form**: Form handling (for contact form)

## Color Scheme

- Primary: Blue shades (#0ea5e9)
- Secondary: Gray shades
- Accent: Red for crisis/emergency information

## Contact

SafeHarbor Behavioral Health
- Phone: (918) 555-0100
- Email: info@safeharborbh.com
- Crisis Help: Call or Text 988

## License

© 2024 SafeHarbor Behavioral Health. All rights reserved.