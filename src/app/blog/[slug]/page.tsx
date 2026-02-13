import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/data/blogPosts'

function formatArticleContent(content: string): string {
  return content
    // Handle paragraphs - split by double newlines and wrap in <p> tags
    .split('\n\n')
    .map(paragraph => {
      // Skip empty paragraphs
      if (!paragraph.trim()) return ''
      
      // Handle headers
      if (paragraph.startsWith('# ')) {
        return `<h1 class="text-3xl font-bold text-navy-800 mt-8 mb-4">${paragraph.substring(2)}</h1>`
      }
      if (paragraph.startsWith('## ')) {
        return `<h2 class="text-2xl font-bold text-navy-800 mt-6 mb-3">${paragraph.substring(3)}</h2>`
      }
      if (paragraph.startsWith('### ')) {
        return `<h3 class="text-xl font-semibold text-navy-800 mt-5 mb-2">${paragraph.substring(4)}</h3>`
      }
      
      // Handle lists
      if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
        const listItems = paragraph
          .split('\n')
          .filter(line => line.startsWith('- '))
          .map(line => `<li class="text-navy-700">${line.substring(2)}</li>`)
          .join('')
        return `<ul class="list-disc ml-6 mb-4 space-y-1">${listItems}</ul>`
      }
      
      // Handle regular paragraphs
      let formattedParagraph = paragraph
        // Bold text
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-navy-800">$1</strong>')
        // Italic text
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Handle line breaks within paragraphs
        .replace(/\n/g, '<br>')
      
      return `<p class="mb-4 text-navy-700">${formattedParagraph}</p>`
    })
    .filter(paragraph => paragraph !== '')
    .join('')
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      authors: [post.author],
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => 
    post.relatedPosts.includes(p.slug)
  ).slice(0, 3)

  const categories = [
    { name: 'Child', slug: 'child', color: 'bg-blue-100 text-blue-800' },
    { name: 'Teen', slug: 'teen', color: 'bg-purple-100 text-purple-800' },
    { name: 'Parents', slug: 'parents', color: 'bg-green-100 text-green-800' },
    { name: 'Body & Brain', slug: 'body-brain', color: 'bg-orange-100 text-orange-800' },
  ]

  const categoryInfo = categories.find(cat => cat.slug === post.category)

  return (
    <article className="bg-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-teal-50 to-cream-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-navy-600">
                <li><Link href="/" className="hover:text-teal-600">Home</Link></li>
                <li className="text-gray-400">/</li>
                <li><Link href="/blog" className="hover:text-teal-600">Blog</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-600">{post.title}</li>
              </ol>
            </nav>

            {/* Category */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                categoryInfo?.color || 'bg-gray-100 text-gray-800'
              }`}>
                {categoryInfo?.name || post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-navy-600">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {post.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-gray-500">Mental Health Professional</p>
                </div>
              </div>
              <div className="text-sm">
                <p>Published {post.date}</p>
                <p className="text-gray-500">{post.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-3">
              {/* Excerpt */}
              <div className="bg-cream-50 border-l-4 border-teal-500 p-6 mb-8">
                <p className="text-lg text-navy-700 italic">
                  {post.excerpt}
                </p>
              </div>

              {/* Article Body */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="article-content text-navy-800 leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: formatArticleContent(post.content)
                  }}
                />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-medium text-gray-600 mr-2">Tags:</span>
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cream-50 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">
                      {post.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-800 mb-2">{post.author}</h3>
                    <p className="text-navy-600 mb-3">
                      Licensed mental health professional specializing in child and adolescent therapy at SafeHarbor Behavioral Health in Tulsa, Oklahoma.
                    </p>
                    <p className="text-sm text-gray-600">
                      Our team of experienced therapists provides comprehensive mental health services to children, teens, and families throughout the Tulsa metro area.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 bg-navy-800 text-white rounded-lg">
                <h3 className="text-xl font-bold mb-3">Need Professional Support?</h3>
                <p className="mb-4">
                  If you're concerned about your child's mental health or need professional guidance, our experienced team at SafeHarbor Behavioral Health is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-block bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors font-medium text-center"
                  >
                    Schedule Consultation
                  </Link>
                  <Link
                    href="/services"
                    className="inline-block border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-navy-800 transition-colors font-medium text-center"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Quick Links */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-navy-800 mb-4">Quick Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/resources/crisis-help" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                        Crisis Help & Support
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/individual-therapy" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                        Individual Therapy
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/group-therapy" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                        Group Therapy
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/body-brain" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                        Body-Brain Integration
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-navy-800 mb-3">Stay Updated</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Get mental health tips and resources delivered to your inbox
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                    />
                    <button className="w-full px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors text-sm font-medium">
                      Subscribe
                    </button>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-navy-800 text-white p-6 rounded-lg">
                  <h3 className="text-lg font-bold mb-4">Get Help Now</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Crisis Line:</p>
                      <a href="tel:988" className="text-teal-300 hover:text-teal-200">
                        Call or Text 988
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">SafeHarbor:</p>
                      <a href="tel:918-553-5746" className="text-teal-300 hover:text-teal-200">
                        (918) 553-5746
                      </a>
                    </div>
                    <div>
                      <p className="font-medium">Location:</p>
                      <p className="text-gray-300">Serving Tulsa Metro Area</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.slug} className="group">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video bg-gradient-to-br from-teal-100 to-cream-100 flex items-center justify-center">
                          <div className="text-teal-600 text-4xl">
                            {relatedPost.icon}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              categories.find(cat => cat.slug === relatedPost.category)?.color || 'bg-gray-100 text-gray-800'
                            }`}>
                              {categories.find(cat => cat.slug === relatedPost.category)?.name || relatedPost.category}
                            </span>
                            <span className="text-gray-500 text-sm">{relatedPost.readTime}</span>
                          </div>
                          <h3 className="text-lg font-bold text-navy-800 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>By {relatedPost.author.split(',')[0]}</span>
                            <span className="mx-2">•</span>
                            <span>{relatedPost.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "SafeHarbor Behavioral Health",
              "logo": {
                "@type": "ImageObject",
                "url": "https://safeharborbehavioralhealth.com/images/logo.png"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://safeharborbehavioralhealth.com/blog/${post.slug}`
            },
            "keywords": post.tags.join(", "),
            "articleSection": "Mental Health",
            "about": {
              "@type": "Thing",
              "name": "Child Mental Health"
            }
          })
        }}
      />
    </article>
  )
}