import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/data/blogPosts'

export const metadata: Metadata = {
  title: 'Blog | Mental Health Resources & Insights',
  description: 'Expert insights on child and teen mental health from SafeHarbor Behavioral Health. Learn about anxiety, ADHD, depression, and parenting tips from our Tulsa therapy professionals.',
  keywords: 'child mental health blog, teen therapy insights, parenting tips Tulsa, ADHD resources, anxiety help children, behavioral health articles',
  openGraph: {
    title: 'SafeHarbor Blog | Mental Health Resources & Insights',
    description: 'Expert insights on child and teen mental health from SafeHarbor Behavioral Health professionals.',
    type: 'website',
  },
}

const categories = [
  { name: 'All Posts', slug: 'all', color: 'bg-teal-100 text-teal-800' },
  { name: 'Child', slug: 'child', color: 'bg-blue-100 text-blue-800' },
  { name: 'Teen', slug: 'teen', color: 'bg-purple-100 text-purple-800' },
  { name: 'Parents', slug: 'parents', color: 'bg-green-100 text-green-800' },
  { name: 'Body & Brain', slug: 'body-brain', color: 'bg-orange-100 text-orange-800' },
]

const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3)
const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 6)

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-cream-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">
              Mental Health Insights & Resources
            </h1>
            <p className="text-xl text-navy-600 mb-8">
              Expert guidance from SafeHarbor's mental health professionals to support your family's wellbeing
            </p>
            
            {/* Newsletter Signup */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h3 className="text-lg font-semibold text-navy-800 mb-3">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Get mental health tips and resources delivered to your inbox
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.slug}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:opacity-80 ${category.color}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-navy-800 mb-8">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video bg-gradient-to-br from-teal-100 to-cream-100 flex items-center justify-center">
                        <div className="text-teal-600 text-4xl">
                          {post.icon}
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            categories.find(cat => cat.slug === post.category)?.color || 'bg-gray-100 text-gray-800'
                          }`}>
                            {categories.find(cat => cat.slug === post.category)?.name || post.category}
                          </span>
                          <span className="text-gray-500 text-sm">{post.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <span>By {post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Recent Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-navy-800 mb-8">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-teal-100 to-cream-100 flex items-center justify-center">
                      <div className="text-teal-600 text-4xl">
                        {post.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          categories.find(cat => cat.slug === post.category)?.color || 'bg-gray-100 text-gray-800'
                        }`}>
                          {categories.find(cat => cat.slug === post.category)?.name || post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span>By {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-teal-50 to-cream-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">
            Need Professional Support?
          </h2>
          <p className="text-navy-600 mb-6 max-w-2xl mx-auto">
            If you're concerned about your child's mental health or need professional guidance, 
            our team of experienced therapists in Tulsa is here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors font-medium"
          >
            Schedule a Consultation
          </Link>
        </section>
      </div>
    </div>
  )
}