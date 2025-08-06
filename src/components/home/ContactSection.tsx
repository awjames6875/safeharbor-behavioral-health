'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    parentName: '',
    childAge: '',
    phone: '',
    email: '',
    insurance: '',
    concern: '',
    preferredTime: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out. We will contact you within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Get Help Today
            </h2>
            <p className="text-lg text-gray-600">
              We're here to help your family heal and thrive
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              {/* Crisis Hotline - Most Prominent */}
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-red-700 mb-2">
                  🆘 Crisis Support Available 24/7
                </h3>
                <p className="text-gray-700 mb-3">
                  If your child is in immediate danger, don't wait.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:988"
                    className="block bg-red-600 text-white text-center px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-bold text-lg"
                  >
                    Call or Text 988 - Crisis Lifeline
                  </a>
                  <a
                    href="tel:911"
                    className="block bg-white text-red-600 border-2 border-red-600 text-center px-6 py-3 rounded-md hover:bg-red-50 transition-colors font-bold"
                  >
                    Call 911 - Emergency
                  </a>
                </div>
              </div>

              {/* Regular Contact Info */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-navy-800 mb-4">
                  📞 Call Us Today
                </h3>
                <a
                  href="tel:918-555-0100"
                  className="text-3xl font-bold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  (918) 555-0100
                </a>
                
                <div className="mt-6 space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy-800">Office Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Emergency Only</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-teal-500 mr-3 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy-800">Main Location</p>
                      <p className="text-gray-600">1234 Main Street</p>
                      <p className="text-gray-600">Tulsa, OK 74103</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-2 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-500">Interactive Map</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-navy-800 mb-6">
                  Request an Appointment
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
                        Child's Age *
                      </label>
                      <input
                        type="text"
                        id="childAge"
                        name="childAge"
                        required
                        value={formData.childAge}
                        onChange={handleChange}
                        placeholder="e.g., 8 years"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="insurance" className="block text-sm font-medium text-gray-700 mb-1">
                        Insurance
                      </label>
                      <select
                        id="insurance"
                        name="insurance"
                        value={formData.insurance}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      >
                        <option value="">Select...</option>
                        <option value="medicaid">Medicaid/SoonerCare</option>
                        <option value="bcbs">Blue Cross Blue Shield</option>
                        <option value="united">United Healthcare</option>
                        <option value="other">Other Insurance</option>
                        <option value="none">No Insurance</option>
                      </select>
                    </div>
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="concern" className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Concern
                    </label>
                    <textarea
                      id="concern"
                      name="concern"
                      rows={3}
                      value={formData.concern}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Briefly describe what brings you to SafeHarbor..."
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Contact Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning (8am-12pm)</option>
                      <option value="afternoon">Afternoon (12pm-5pm)</option>
                      <option value="evening">Evening (5pm-7pm)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors font-semibold text-lg"
                  >
                    Request Appointment
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    We'll contact you within 24 hours to schedule your appointment.
                    For immediate assistance, please call us directly.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}