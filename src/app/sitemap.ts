// app/sitemap.ts
// SEO Fix: Auto-generates sitemap.xml with all pages, priorities, and dates
// Drop this file in your app/ directory

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.safeharborbehavioralhealth.com'
  const now = new Date().toISOString()

  // Core pages (highest priority)
  const corePages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/programs', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/programs/body-brain', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/parents', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/partners', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/locations', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/resources', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/resources/crisis-help', priority: 0.7, changeFrequency: 'monthly' as const },
  ]

  // Service pages (high priority - money pages)
  const servicePages = [
    'individual-therapy', 'group-therapy', 'medication-management',
    'psychiatric-evaluation', 'child-therapy', 'teen-counseling',
    'family-therapy', 'trauma-therapy', 'adhd-treatment',
    'school-support', 'parent-coaching', 'behavioral-assessments',
    'crisis-intervention', 'substance-abuse',
  ].map(slug => ({
    path: `/services/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  // Location pages (important for local SEO)
  const locationPages = [
    'downtown-tulsa', 'midtown-tulsa', 'brookside', 'cherry-street',
    'broken-arrow', 'owasso', 'jenks', 'bixby', 'sand-springs',
    'sapulpa', 'south-tulsa', 'north-tulsa', 'east-tulsa',
    'west-tulsa', 'union-district',
  ].map(slug => ({
    path: `/locations/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }))

  // Blog posts
  const blogPosts = [
    'is-my-childs-behavior-normal',
    'teen-depression-tulsa-guide',
    'body-brain-helps-adhd',
    'school-anxiety-tips',
    'social-media-teen-mental-health',
    'childhood-trauma-recognition',
    'medicaid-mental-health-tulsa',
    'children-divorce-support',
    'group-therapy-shy-children',
  ].map(slug => ({
    path: `/blog/${slug}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }))

  // Legal pages (low priority)
  const legalPages = [
    { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/accessibility', priority: 0.2, changeFrequency: 'yearly' as const },
  ]

  const allPages = [...corePages, ...servicePages, ...locationPages, ...blogPosts, ...legalPages]

  return allPages.map(page => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
