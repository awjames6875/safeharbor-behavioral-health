'use client'

import { useState, useEffect } from 'react'

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    // Check if popup was dismissed in last 30 days
    const lastDismissed = localStorage.getItem('exitIntentDismissed')
    if (lastDismissed) {
      const dismissedDate = new Date(lastDismissed)
      const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      if (dismissedDate > thirtyDaysAgo) {
        return // Don't show popup
      }
    }

    let hasTriggered = false

    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered) return
      if (e.clientY <= 0) {
        hasTriggered = true
        setShowPopup(true)
      }
    }

    const handleBeforeUnload = () => {
      if (!hasTriggered) {
        hasTriggered = true
        setShowPopup(true)
      }
    }

    // Show popup after 10 seconds as fallback
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        hasTriggered = true
        setShowPopup(true)
      }
    }, 10000)

    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setShowPopup(false)
    localStorage.setItem('exitIntentDismissed', new Date().toISOString())
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      
      // Simulate download - in real implementation, trigger actual download
      const link = document.createElement('a')
      link.href = '/guides/10-signs-your-child-needs-help.pdf' // Placeholder URL
      link.download = '10-Signs-Your-Child-Needs-Help.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      setTimeout(() => {
        handleClose()
      }, 2000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-teal-500 to-navy-800 text-white p-6 rounded-t-2xl">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
            aria-label="Close popup"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold mb-2">Wait! Your Child's Mental Health Can't Wait</h2>
          <p className="text-lg opacity-95">Don't leave empty-handed</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-800 mb-2">Get Our Free Guide</h3>
            <p className="text-lg text-navy-700 font-semibold mb-3">
              "10 Signs Your Child Needs Mental Health Support"
            </p>
            <p className="text-sm text-gray-600">
              Written by licensed therapists • Trusted by 10,000+ Oklahoma families
            </p>
          </div>

          {submitStatus === 'success' ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Download Starting!</h3>
              <p className="text-green-700">Check your downloads folder. We'll also email you the guide.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="popup-email" className="block text-sm font-semibold text-navy-800 mb-2">
                  Enter your email to get the free guide:
                </label>
                <input
                  type="email"
                  id="popup-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md text-sm">
                  Something went wrong. Please try again or call us at (918) 391-3606.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 rounded-md hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Getting Your Guide...' : 'Get My Free Guide'}
              </button>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                  No spam. We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="bg-cream-50 p-4 rounded-b-2xl border-t border-gray-100">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Need immediate help?</p>
            <a
              href="tel:918-391-3606"
              className="text-teal-600 hover:text-teal-700 font-semibold"
            >
              Call (918) 391-3606
            </a>
            <span className="text-gray-400 mx-2">•</span>
            <span className="text-sm text-gray-600">We Accept Medicaid</span>
          </div>
        </div>
      </div>
    </div>
  )
}