'use client'

import { useState } from 'react'

interface ServiceContactFormProps {
  serviceName: string
  serviceTitle?: string
}

export default function ServiceContactForm({ serviceName, serviceTitle }: ServiceContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    childAge: '',
    serviceInterested: serviceName,
    insuranceType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        childAge: '',
        serviceInterested: serviceName,
        insuranceType: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const serviceOptions = [
    'Child Therapy',
    'Teen Counseling',
    'Family Therapy',
    'Trauma Treatment',
    'Group Therapy',
    'School Support',
    'Substance Abuse',
    'Parent Coaching',
    'Crisis Intervention',
    'Behavioral Assessments'
  ]

  const insuranceOptions = [
    'Oklahoma Medicaid',
    'SoonerCare',
    'Blue Cross Blue Shield',
    'Aetna',
    'UnitedHealthcare',
    'Other Insurance',
    'Self-Pay',
    'Not Sure'
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-navy-800 mb-3">
          Schedule Your {serviceTitle || serviceName} Consultation
        </h3>
        <p className="text-gray-600">
          Take the first step toward better mental health for your child. Same-week appointments available.
        </p>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-semibold">Thank you! We'll contact you within 24 hours to schedule your appointment.</p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md mb-6">
          <p className="font-semibold">Something went wrong. Please call us at (918) 391-3606 or try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-navy-800 mb-2">
              Parent/Guardian Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-navy-800 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
              placeholder="(918) 555-0100"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-navy-800 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="childAge" className="block text-sm font-semibold text-navy-800 mb-2">
              Child's Age *
            </label>
            <input
              type="text"
              id="childAge"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
              placeholder="e.g. 8 years old"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="serviceInterested" className="block text-sm font-semibold text-navy-800 mb-2">
              Service Interested In *
            </label>
            <select
              id="serviceInterested"
              name="serviceInterested"
              value={formData.serviceInterested}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
            >
              {serviceOptions.map(service => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="insuranceType" className="block text-sm font-semibold text-navy-800 mb-2">
              Insurance Type *
            </label>
            <select
              id="insuranceType"
              name="insuranceType"
              value={formData.insuranceType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors"
            >
              <option value="">Select Insurance</option>
              {insuranceOptions.map(insurance => (
                <option key={insurance} value={insurance}>
                  {insurance}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-navy-800 mb-2">
            Tell Us About Your Concerns (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-colors resize-none"
            placeholder="Briefly describe what you'd like help with..."
          />
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-md p-4">
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold text-teal-800">We Accept Medicaid & Most Insurance</span>
          </div>
          <p className="text-sm text-teal-700">
            Same-week appointments available. Our insurance specialists will verify your benefits.
          </p>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-md hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending Request...' : 'Schedule My Consultation'}
          </button>
          <p className="text-sm text-gray-600 mt-3">
            We'll contact you within 24 hours to schedule your appointment
          </p>
        </div>

        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Prefer to call?</p>
          <a
            href="tel:918-391-3606"
            className="text-teal-600 hover:text-teal-700 font-semibold text-lg"
          >
            (918) 391-3606
          </a>
        </div>
      </form>
    </div>
  )
}