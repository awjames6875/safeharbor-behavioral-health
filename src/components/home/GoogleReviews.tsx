// Real Google reviews only.
//
// This replaced a carousel of four invented testimonials that used
// images.unsplash.com stock photos as reviewer faces.
//
// TO ENABLE: paste the real reviews below, exactly as written on Google, and
// set GOOGLE_BUSINESS_PROFILE_URL. Until then this section renders nothing —
// that is deliberate. An empty section is better than an invented one.
//
// Do not add AggregateRating or Review schema here: Google does not show
// review rich results for self-hosted reviews of your own business.

const GOOGLE_BUSINESS_PROFILE_URL = '' // e.g. https://g.page/r/...

type Review = {
  /** Reviewer's real first name + last initial, e.g. "Jamie R." */
  name: string
  /** Review text, verbatim from Google. Never paraphrased. */
  text: string
  /** Date shown on the review, e.g. "March 2026" */
  date: string
}

const reviews: Review[] = [
  // { name: '', text: '', date: '' },
  // { name: '', text: '', date: '' },
]

export default function GoogleReviews() {
  if (reviews.length === 0) return null

  return (
    <section className="section-padding bg-navy-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-teal-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-900 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
            Reviews from our <span className="text-teal-400 italic">Families</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review) => (
            <figure key={review.name} className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <blockquote className="text-white/90 text-lg leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className="w-12 h-12 shrink-0 rounded-full bg-teal-600 text-white flex items-center justify-center text-lg font-bold"
                >
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{review.name}</p>
                  <p className="text-white/60 text-sm">
                    {GOOGLE_BUSINESS_PROFILE_URL ? (
                      <a
                        href={GOOGLE_BUSINESS_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-teal-300 underline"
                      >
                        Review from Google
                      </a>
                    ) : (
                      'Review from Google'
                    )}
                    {' · '}
                    {review.date}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
