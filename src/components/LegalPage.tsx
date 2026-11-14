import Link from 'next/link'

interface LegalSection {
  heading: string
  body: string[]
}

interface LegalPageProps {
  title: string
  lastUpdated: string
  intro: string
  sections: LegalSection[]
}

export default function LegalPage({ title, lastUpdated, intro, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg opacity-90">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-gray-700">
            <p className="text-lg">{intro}</p>

            {sections.map(section => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold text-navy-800 mb-4">{section.heading}</h2>
                <div className="space-y-3">
                  {section.body.map(paragraph => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-4">Contact us</h2>
              <p>Safe Harbor Behavioral Health</p>
              <address className="not-italic">2510 East 15th Street, Suite 207<br />Tulsa, OK 74104</address>
              <p className="mt-3">
                Phone: <a href="tel:918-553-5746" className="text-teal-600 hover:underline">(918) 553-5746</a>
              </p>
              <p>
                Email: <a href="mailto:support@safeharborbehavioralhealth.com" className="text-teal-600 hover:underline">support@safeharborbehavioralhealth.com</a>
              </p>
            </div>

            <p className="text-sm text-gray-500">
              In a crisis, call or text 988. For general questions, visit our <Link href="/contact" className="text-teal-600 hover:underline">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
