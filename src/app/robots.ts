// app/robots.ts
// Drop this file in your app/ directory — creates robots.txt automatically

import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ChatGPT-User', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'Applebot', allow: '/' },
    ],
    sitemap: 'https://www.safeharborbehavioralhealth.com/sitemap.xml',
  }
}
