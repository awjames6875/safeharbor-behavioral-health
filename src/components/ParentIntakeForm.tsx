'use client'

import { useState } from 'react'

export default function ParentIntakeForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const nameParts = formData.parentName.trim().split(/\s+/)
      const firstName = nameParts[0] || ''
      const lastName = nameParts.slice(1).join(' ') || ''

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          phone: formData.phone,
          childName: formData.childName,
          childAge: formData.childAge,
          source: 'website-parents-intake',
        }),
      })

      if (!response.ok) throw new Error('Submission failed')
      setSubmitStatus('success')
      setFormData({ parentName: '', phone: '', email: '', childName: '', childAge: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">You&apos;re All Set!</h3>
        <p className="text-green-700">
          We&apos;ll call you within 2 hours during business hours to get your child enrolled.
          Questions? Call <a href="tel:9185535746" className="font-bold underline">(918) 553-5746</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-4">
      <div>
        <label htmlFor="intake-parentName" className="block text-sm font-medium text-gray-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="intake-parentName"
          name="parentName"
          required
          value={formData.parentName}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          placeholder="First and last name"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="intake-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="intake-phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            placeholder="(918) 555-0123"
          />
        </div>
        <div>
          <label htmlFor="intake-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="intake-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="intake-childName" className="block text-sm font-medium text-gray-700 mb-1">
            Child&apos;s First Name *
          </label>
          <input
            type="text"
            id="intake-childName"
            name="childName"
            required
            value={formData.childName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label htmlFor="intake-childAge" className="block text-sm font-medium text-gray-700 mb-1">
            Child&apos;s Age *
          </label>
          <select
            id="intake-childAge"
            name="childAge"
            required
            value={formData.childAge}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">Select age</option>
            {[3, 4, 5, 6, 7, 8].map(age => (
              <option key={age} value={age}>{age} years old</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal-500 text-white py-3 px-6 rounded-md font-bold text-lg hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Enroll My Child'}
      </button>

      {submitStatus === 'error' && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please call <a href="tel:9185535746" className="underline font-bold">(918) 553-5746</a>.
        </p>
      )}

      <p className="text-xs text-gray-500 text-center">
        Covered by SoonerCare/Medicaid. We&apos;ll contact you within 2 hours during business hours.
      </p>
    </form>
  )
}
