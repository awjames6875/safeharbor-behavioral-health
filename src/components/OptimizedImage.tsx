'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  lazy?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  webpSrc?: string;
  location?: string;
  serviceType?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  lazy = true,
  placeholder = 'empty',
  blurDataURL,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 90,
  webpSrc,
  location,
  serviceType
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [webpError, setWebpError] = useState(false)

  // Enhanced alt text for SEO
  const enhancedAlt = `${alt}${location ? ` in ${location}` : ''}${serviceType ? ` - ${serviceType}` : ''} - SafeHarbor Behavioral Health Tulsa`

  // Fallback image for errors
  const handleImageError = () => {
    if (!webpError && webpSrc) {
      setWebpError(true)
    } else {
      setImageError(true)
    }
  }

  if (imageError) {
    return (
      <div 
        className={`bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={enhancedAlt}
      >
        <div className="text-center text-teal-600">
          <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium">SafeHarbor Behavioral Health</span>
        </div>
      </div>
    )
  }

  // Use WebP if available and not errored, otherwise fall back to original
  const imageSrc = (!webpError && webpSrc) ? webpSrc : src

  return (
    <>
      {/* WebP support check and preload for critical images */}
      {priority && webpSrc && (
        <link 
          rel="preload" 
          as="image" 
          href={webpSrc}
          type="image/webp"
        />
      )}
      
      <Image
        src={imageSrc}
        alt={enhancedAlt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        loading={lazy ? 'lazy' : 'eager'}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        quality={quality}
        onError={handleImageError}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
    </>
  )
}

// Utility function to generate WebP src from original src
export function generateWebPSrc(originalSrc: string): string {
  const extension = originalSrc.split('.').pop()?.toLowerCase()
  if (extension && ['jpg', 'jpeg', 'png'].includes(extension)) {
    return originalSrc.replace(new RegExp(`\\.${extension}$`, 'i'), '.webp')
  }
  return originalSrc
}

// Utility function to optimize alt text for SEO
export function optimizeAltText(baseAlt: string, location?: string, serviceType?: string): string {
  let altText = baseAlt
  
  // Add location context if provided
  if (location && !altText.toLowerCase().includes(location.toLowerCase())) {
    altText += ` in ${location}`
  }
  
  // Add service context if provided
  if (serviceType && !altText.toLowerCase().includes(serviceType.toLowerCase())) {
    altText += ` - ${serviceType}`
  }
  
  // Add brand context if not present
  if (!altText.toLowerCase().includes('safeharbor') && !altText.toLowerCase().includes('behavioral health')) {
    altText += ' - SafeHarbor Behavioral Health'
  }
  
  // Add Tulsa if location not specified but other indicators suggest it's local
  if (!altText.toLowerCase().includes('tulsa') && (location || serviceType)) {
    altText += ' Tulsa'
  }
  
  return altText
}