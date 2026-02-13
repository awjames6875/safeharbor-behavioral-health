import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white border-t border-navy-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                <img src="/logo.jpg" alt="SafeHarbor Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-cream-100">SafeHarbor</h3>
                <p className="text-xs text-teal-200 tracking-wide uppercase">Behavioral Health</p>
              </div>
            </div>
            <p className="text-navy-100 text-sm leading-relaxed mb-6">
              Providing compassionate, evidence-based mental health care to children, teens, and families in the Tulsa community.
            </p>
            <div className="bg-navy-800/50 rounded-xl p-4 border border-navy-700">
              <p className="text-red-300 text-xs font-bold uppercase tracking-wider mb-1">Crisis Help 24/7</p>
              <a href="tel:988" className="text-2xl font-bold hover:text-white transition-colors flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                988
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-teal-100">Services</h4>
            <ul className="space-y-3 text-navy-100">
              <li>
                <Link href="/services/individual-therapy" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Individual Therapy
                </Link>
              </li>
              <li>
                <Link href="/services/group-therapy" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Group Therapy
                </Link>
              </li>
              <li>
                <Link href="/services/medication-management" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Medication Management
                </Link>
              </li>
              <li>
                <Link href="/services/psychiatric-evaluation" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Psychiatric Evaluation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-teal-100">Quick Links</h4>
            <ul className="space-y-3 text-navy-100">
              <li>
                <Link href="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs/body-brain" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Body-Brain Program
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Our Locations
                </Link>
              </li>
              <li>
                <Link href="/resources/crisis-help" className="hover:text-white hover:translate-x-1 transition-all inline-block">
                  Crisis Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-teal-100">Contact Info</h4>
            <ul className="space-y-4 text-navy-100">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-teal-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Tulsa, Oklahoma</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-teal-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <a href="tel:918-553-5746" className="text-lg font-bold text-white hover:text-teal-300 transition-colors">
                    (918) 553-5746
                  </a>
                  <p className="text-xs text-teal-400 mt-1">We Accept Medicaid</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-teal-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@safeharborbehavioralhealth.com" className="hover:text-white transition-colors">
                  support@safeharborbehavioralhealth.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8 text-center text-navy-300 text-sm">
          <p className="mb-4">&copy; {new Date().getFullYear()} SafeHarbor Behavioral Health. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}