export default function TrustBar() {
  const trustItems = [
    { icon: '🏆', text: 'CARF Accredited' },
    { icon: '✓', text: 'Medicaid Accepted' },
    { icon: '📅', text: 'Same Week Appointments' },
    { icon: '🆘', text: '24/7 Crisis Support' },
  ]

  return (
    <section className="bg-teal-500 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center space-x-2">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm md:text-base font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}