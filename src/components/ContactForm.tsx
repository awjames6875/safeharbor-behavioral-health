'use client'

import Script from 'next/script'

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

      <div className="w-full" style={{ minHeight: '1020px' }}>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/tP6U9TbhZI7RcUEAeDm1"
          style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
          id="inline-tP6U9TbhZI7RcUEAeDm1" 
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Safe Harbor - Free Consultation"
          data-height="1020"
          data-layout-iframe-id="inline-tP6U9TbhZI7RcUEAeDm1"
          data-form-id="tP6U9TbhZI7RcUEAeDm1"
          title="Safe Harbor - Free Consultation"
        />
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      </div>

      {/* Emergency Notice */}
      <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-red-800 font-medium">
          🚨 <strong>Emergency?</strong> If you or your child is in immediate danger, 
          call 911 or the National Suicide Prevention Lifeline at <a href="tel:988" className="underline font-bold">988</a>
        </p>
      </div>
    </div>
  )
}