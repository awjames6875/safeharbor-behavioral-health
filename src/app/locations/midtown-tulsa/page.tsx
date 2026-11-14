import { Metadata } from 'next'
import EnhancedLocationPageTemplate from '@/components/EnhancedLocationPageTemplate'
import { getLocationBySlug } from '@/data/locations'

export const metadata: Metadata = {
  title: 'Child Therapy Midtown Tulsa | Medicaid Accepted | Safe Harbor',
  description: 'Child therapy and teen counseling in Midtown Tulsa. Safe Harbor accepts Medicaid/SoonerCare. Serving Maple Ridge, Swan Lake & Utica Square families. Call (918) 553-5746.',
  keywords: 'child therapy midtown Tulsa, teen counseling Utica Square, Medicaid therapist Swan Lake, SoonerCare mental health Maple Ridge, behavioral health midtown Tulsa',
  alternates: {
    canonical: '/locations/midtown-tulsa'
  }
}

export default function MidtownTulsaPage() {
  const location = getLocationBySlug('midtown-tulsa')
  
  if (!location) {
    return <div>Location not found</div>
  }

  return <EnhancedLocationPageTemplate location={location} />
}