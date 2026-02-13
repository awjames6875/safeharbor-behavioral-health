import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { adamJamesBio } from '@/data/adamJamesBio'

export const metadata: Metadata = {
    title: 'Adam James | Founder of Safe Harbor Behavioral Health',
    description: 'Learn about Adam James, founder of Safe Harbor Behavioral Health, Integrity Corporate Housing, and Growthgenix.ai. From homeless to 7-figure entrepreneur, his mission is helping people see themselves differently.',
    keywords: 'Adam James, Safe Harbor Behavioral Health founder, Tulsa entrepreneur, behavioral health, Integrity Corporate Housing, Growthgenix.ai, mental health advocate',
    alternates: {
        canonical: '/adam-james'
    },
    openGraph: {
        title: 'Adam James | Founder of Safe Harbor Behavioral Health',
        description: 'Adam James builds companies that help people see themselves differently. Founder of Safe Harbor Behavioral Health, Integrity Corporate Housing, and Growthgenix.ai.',
        url: 'https://safeharborbehavioralhealth.com/adam-james',
        images: [
            {
                url: '/images/adam-james.png',
                width: 800,
                height: 800,
                alt: 'Adam James - Founder of Safe Harbor Behavioral Health',
            }
        ]
    },
    twitter: {
        title: 'Adam James | Founder of Safe Harbor Behavioral Health',
        description: 'Adam James builds companies that help people see themselves differently.',
        images: ['/images/adam-james.png']
    }
}

export default function AdamJamesPage() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Adam James",
        "url": adamJamesBio.website,
        "image": "https://safeharborbehavioralhealth.com/images/adam-james.png",
        "jobTitle": "Founder",
        "worksFor": [
            {
                "@type": "Organization",
                "name": "Safe Harbor Behavioral Health"
            },
            {
                "@type": "Organization",
                "name": "Integrity Corporate Housing"
            },
            {
                "@type": "Organization",
                "name": "Growthgenix.ai"
            }
        ],
        "description": adamJamesBio.tagline,
        "sameAs": [adamJamesBio.website]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema)
                }}
            />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0">
                                <Image
                                    src={adamJamesBio.image}
                                    alt="Adam James"
                                    fill
                                    className="object-cover rounded-2xl shadow-2xl"
                                    priority
                                />
                            </div>
                            <div className="text-center lg:text-left">
                                <h1 className="text-4xl lg:text-5xl font-bold mb-4">{adamJamesBio.name}</h1>
                                <p className="text-xl lg:text-2xl opacity-95 mb-6">{adamJamesBio.tagline}</p>
                                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                                    {adamJamesBio.companies.map((company, index) => (
                                        <span
                                            key={index}
                                            className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                                        >
                                            {company.role} • {company.name}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={adamJamesBio.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-6 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                >
                                    Visit adamjamesoftulsa.com
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                                {adamJamesBio.introduction}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Story Sections */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-12">

                            {/* Early Life */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                        🌱
                                    </span>
                                    Early Life
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg">{adamJamesBio.earlyLife}</p>
                            </div>

                            {/* Career Beginnings */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                        📈
                                    </span>
                                    Career Beginnings
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg">{adamJamesBio.careerBeginnings}</p>
                            </div>

                            {/* 2008 Crash */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                        💔
                                    </span>
                                    The Crash of 2008
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{adamJamesBio.crash2008}</p>
                            </div>

                            {/* Tulsa Impact */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        🏙️
                                    </span>
                                    Impact in Tulsa
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg">{adamJamesBio.tulsaImpact}</p>
                            </div>

                            {/* The Fall */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm border-l-4 border-amber-500">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                                        ⚖️
                                    </span>
                                    The Fall
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">{adamJamesBio.theFall}</p>
                            </div>

                            {/* Prison Transformation */}
                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                                        💡
                                    </span>
                                    Transformation
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">{adamJamesBio.prisonTransformation}</p>
                            </div>

                            {/* New Beginning */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        🚀
                                    </span>
                                    A New Beginning
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg">{adamJamesBio.newBeginning}</p>
                            </div>

                            {/* Safe Harbor Success */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        ⭐
                                    </span>
                                    Safe Harbor Success
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-lg">{adamJamesBio.safeHarborSuccess}</p>
                            </div>

                            {/* Current Ventures */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                        🎯
                                    </span>
                                    Current Ventures
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg">{adamJamesBio.currentVentures}</p>
                            </div>

                            {/* Mission */}
                            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                        🎖️
                                    </span>
                                    His Mission
                                </h2>
                                <p className="leading-relaxed text-lg whitespace-pre-line opacity-95">{adamJamesBio.mission}</p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Quote Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <blockquote className="text-2xl lg:text-3xl font-medium text-gray-800 italic leading-relaxed">
                                {adamJamesBio.quote}
                            </blockquote>
                            <p className="mt-6 text-primary-600 font-semibold">— Adam James</p>
                        </div>
                    </div>
                </section>

                {/* Key Achievements */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Key Achievements</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {adamJamesBio.achievements.map((achievement, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-4"
                                    >
                                        <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 flex-shrink-0 font-bold text-sm">
                                            {index + 1}
                                        </span>
                                        <p className="text-gray-700">{achievement}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-4">Join the Mission</h2>
                            <p className="text-xl opacity-95 mb-8">
                                {adamJamesBio.callToAction}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                                >
                                    Contact Safe Harbor
                                </Link>
                                <a
                                    href={adamJamesBio.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center inline-flex items-center justify-center gap-2"
                                >
                                    Visit adamjamesoftulsa.com
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
