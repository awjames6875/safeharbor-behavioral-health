import Link from 'next/link'
import { blogPosts } from '@/data/blogPosts'

export default function BlogFeature() {
  // Get featured posts or first 3 posts
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3)
  const displayPosts = featuredPosts.length >= 3 ? featuredPosts : blogPosts.slice(0, 3)

  const categories = [
    { name: 'Child', slug: 'child', color: 'bg-blue-100 text-blue-800' },
    { name: 'Teen', slug: 'teen', color: 'bg-purple-100 text-purple-800' },
    { name: 'Parents', slug: 'parents', color: 'bg-green-100 text-green-800' },
    { name: 'Body & Brain', slug: 'body-brain', color: 'bg-orange-100 text-orange-800' },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-cream-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Mental Health Resources & Insights
            </h2>
            <p className="text-lg text-navy-600 max-w-3xl mx-auto">
              Expert guidance from our mental health professionals to support your family's wellbeing. 
              Discover practical tips, strategies, and insights for helping children and teens thrive.
            </p>
          </div>

          {/* Featured Articles */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {displayPosts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                    {/* Article Image/Icon */}
                    <div className="aspect-video bg-gradient-to-br from-teal-100 to-cream-100 flex items-center justify-center">
                      <div className="text-teal-600 text-5xl">
                        {post.icon}
                      </div>
                    </div>
                    
                    {/* Article Content */}
                    <div className="p-6">
                      {/* Category and Read Time */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          categories.find(cat => cat.slug === post.category)?.color || 'bg-gray-100 text-gray-800'
                        }`}>
                          {categories.find(cat => cat.slug === post.category)?.name || post.category}
                        </span>
                        <span className="text-gray-500 text-sm">{post.readTime}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      {/* Author and Date */}
                      <div className="flex items-center text-sm text-gray-500">
                        <span>By {post.author.split(',')[0]}</span>
                        <span className="mx-2">•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-navy-600 mb-6">
              Explore more helpful articles and mental health resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-block bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors font-medium"
              >
                View All Articles
              </Link>
              <Link
                href="/contact"
                className="inline-block border-2 border-teal-500 text-teal-600 px-6 py-3 rounded-md hover:bg-teal-500 hover:text-white transition-colors font-medium"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}