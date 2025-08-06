import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 h-full hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 text-primary-600 font-semibold flex items-center">
          Learn More
          <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}