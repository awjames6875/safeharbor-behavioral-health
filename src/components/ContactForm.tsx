'use client'

import { useState } from 'react'

interface ContactFormProps {
  formType?: 'general' | 'service' | 'crisis' | 'location';
  serviceName?: string;
  locationName?: string;
  className?: string;
}

export default function ContactForm({ 
  formType = 'general',
  serviceName,
  locationName,
  className = ''
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    insurance: '',
    preferredLocation: locationName || '',
    serviceInterest: serviceName || '',
    concerns: '',
    urgency: 'routine',
    preferredContact: 'phone',
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Track form submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: `contact_form_${formType}`,
        value: 1
      })
    }

    try {
      // In a real implementation, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
      
      setSubmitStatus('success')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          parentName: '',
          childName: '',
          childAge: '',
          phone: '',
          email: '',
          insurance: '',
          preferredLocation: locationName || '',
          serviceInterest: serviceName || '',
          concerns: '',
          urgency: 'routine',
          preferredContact: 'phone',
          consent: false
        })
        setSubmitStatus('idle')
      }, 3000)

    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFormTitle = () => {
    switch (formType) {
      case 'crisis':
        return 'Crisis Support Request'
      case 'service':
        return `Request Information: ${serviceName}`
      case 'location':
        return `Schedule Appointment - ${locationName}`
      default:
        return 'Schedule Free Consultation'
    }
  }

  const locations = [
    'Midtown Tulsa', 'South Tulsa', 'Broken Arrow', 'North Tulsa', 'Downtown Tulsa',
    'Owasso', 'Jenks', 'Bixby', 'Sand Springs', 'Sapulpa', 'Brookside',
    'Cherry Street', 'East Tulsa', 'West Tulsa', 'Union District'
  ]

  const services = [
    'Individual Child Therapy', 'Teen Counseling', 'Family Therapy', 'Group Therapy',
    'Crisis Intervention', 'Medication Management', 'Behavioral Assessments',
    'Trauma Treatment', 'School Support', 'Parent Coaching', 'Body & Brain Program'
  ]

  if (submitStatus === 'success') {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-lg p-6 ${className}`}>
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Thank You for Reaching Out!
          </h3>
          <p className="text-green-700 mb-4">
            We've received your request and will contact you within 2 hours during business hours.
            For immediate assistance, call <a href="tel:918-391-3606" className="font-bold underline">918-391-3606</a>.
          </p>
          {formType === 'crisis' && (
            <div className="bg-red-100 border border-red-300 rounded p-4 mt-4">
              <p className="text-red-800 font-medium">
                <strong>Crisis Resources:</strong> If this is an emergency, please call 911 or the National Suicide Prevention Lifeline at 988.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {formType === 'crisis' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h4 className="text-red-800 font-semibold mb-2">🚨 Crisis Support Available</h4>
          <p className="text-red-700 text-sm mb-2">
            If you or your child is in immediate danger, please call 911 or go to your nearest emergency room.
          </p>
          <p className="text-red-700 text-sm">
            <strong>24/7 Crisis Line:</strong> <a href="tel:988" className="underline font-bold">988 (Suicide & Crisis Lifeline)</a>
          </p>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-navy-800 mb-2">{getFormTitle()}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
            ✓ Medicaid & SoonerCare Accepted
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
            ✓ Same-Week Appointments
          </span>
          <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">
            ✓ Free Consultation
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          Complete this form and we'll contact you within 2 hours during business hours. 
          All information is confidential and HIPAA-compliant.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Parent Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
              Parent/Guardian Name *
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              required
              value={formData.parentName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="(918) 555-0123"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>

        {/* Child Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">
              Child's First Name
            </label>
            <input
              type="text"
              id="childName"
              name="childName"
              value={formData.childName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Child's name"
            />
          </div>

          <div>
            <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
              Child's Age
            </label>
            <select
              id="childAge"
              name="childAge"
              value={formData.childAge}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select age</option>
              {Array.from({ length: 18 }, (_, i) => i + 3).map(age => (
                <option key={age} value={age}>{age} years old</option>
              ))}
            </select>
          </div>
        </div>

        {/* Service & Location Preferences */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-1">
              Service Interest
            </label>
            <select
              id="serviceInterest"
              name="serviceInterest"
              value={formData.serviceInterest}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select a service</option>
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="preferredLocation" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Location
            </label>
            <select
              id="preferredLocation"
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="">Select location</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Insurance */}
        <div>
          <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">
            Insurance/Payment Method
          </label>
          <select
            id="insurance"
            name="insurance"
            value={formData.insurance}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          >
            <option value="">Select your insurance</option>
            <option value="medicaid">Oklahoma Medicaid</option>
            <option value="soonercare">SoonerCare</option>
            <option value="bcbs">Blue Cross Blue Shield</option>
            <option value="united">UnitedHealthcare</option>
            <option value="aetna">Aetna</option>
            <option value="cigna">Cigna</option>
            <option value="other-insurance">Other Insurance</option>
            <option value="self-pay">Self Pay</option>
            <option value="not-sure">Not Sure</option>
          </select>
        </div>

        {/* Urgency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
              How urgent is your need?
            </label>
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="routine">Routine (within 1-2 weeks)</option>
              <option value="soon">Soon (within a few days)</option>
              <option value="urgent">Urgent (within 24 hours)</option>
              <option value="crisis">Crisis (immediate)</option>
            </select>
          </div>

          <div>
            <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Contact Method
            </label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="phone">Phone call</option>
              <option value="email">Email</option>
              <option value="text">Text message</option>
            </select>
          </div>
        </div>

        {/* Concerns */}
        <div>
          <label htmlFor="concerns" className="block text-sm font-medium text-gray-700 mb-1">
            Tell us about your concerns (optional)
          </label>
          <textarea
            id="concerns"
            name="concerns"
            rows={4}
            value={formData.concerns}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="What challenges is your child facing? What are your main concerns?"
          />
        </div>

        {/* Consent */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label htmlFor="consent" className="text-sm text-gray-700">
            I consent to be contacted by SafeHarbor Behavioral Health and understand that my information 
            is protected under HIPAA. I agree to the <a href="/privacy" className="text-teal-600 underline">Privacy Policy</a>.
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting || !formData.consent}
            className="w-full bg-teal-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? 'Submitting...' : 'Send My Request'}
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-2">
            We'll contact you within 2 hours during business hours (Mon-Fri 8am-6pm, Sat 9am-2pm)
          </p>
          
          {submitStatus === 'error' && (
            <p className="text-red-600 text-sm text-center mt-2">
              There was an error submitting your request. Please call us directly at (918) 391-3606.
            </p>
          )}
        </div>

        {/* Emergency Notice */}
        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-800 font-medium">
            🚨 <strong>Emergency?</strong> If you or your child is in immediate danger, 
            call 911 or the National Suicide Prevention Lifeline at <a href="tel:988" className="underline font-bold">988</a>
          </p>
        </div>
      </form>
    </div>
  )
}