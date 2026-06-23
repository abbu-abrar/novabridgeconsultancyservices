import { useEffect, useMemo, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { BLOG_CATEGORIES, ARTICLES } from './blogData'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M10 5l3 3-3 3" />
  </svg>
)

function buildCollectionDescription() {
  return 'Visa & immigration guidance, study abroad updates, and practical checklists designed to help Indian students and professionals plan with confidence.'
}

export default function BlogPage() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('nb-in')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )
    el.querySelectorAll('.nb-reveal').forEach(r => obs.observe(r))
    return () => obs.disconnect()
  }, [])

  const description = useMemo(() => buildCollectionDescription(), [])

  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'NovaBridge Blog & Insights',
      description,
      url: 'https://novabridgeconsultancyservices.in/blog',
      itemListElement: ARTICLES.slice(0, 10).map((a, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: a.title,
        url: `https://novabridgeconsultancyservices.in/blog/${a.slug}`,
      })),
    }),
    [description]
  )

  return (
    <div ref={ref}>
      <Helmet>
        <title>Blog &amp; Insights • NovaBridge</title>
        <meta name="description" content={description} />

        <link rel="canonical" href="https://novabridgeconsultancyservices.in/blog" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novabridgeconsultancyservices.in/blog" />
        <meta property="og:title" content="Blog &amp; Insights • NovaBridge" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://novabridgeconsultancyservices.in/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://novabridgeconsultancyservices.in/blog" />
        <meta name="twitter:title" content="Blog &amp; Insights • NovaBridge" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://novabridgeconsultancyservices.in/og-image.jpg" />

        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <section className="nb-page-hero">
        <div className="nb-container">
          <div className="nb-page-hero-inner nb-reveal">
            <div className="nb-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Blog</span>
            </div>
            <h1 className="nb-page-h1">Blog &amp; <em>Insights</em></h1>
            <p className="nb-page-sub">Expert articles, guides, and updates on visa processes, immigration law changes, and study abroad opportunities — written by our team of specialist counsellors.</p>
          </div>
        </div>
      </section>

      <section className="nb-section nb-section--border-t">
        <div className="nb-container">
          <div className="nb-blog-filters nb-reveal">
            {BLOG_CATEGORIES.map((c, i) => (
              <button className={`nb-blog-filter${i === 0 ? ' active' : ''}`} key={c}>{c}</button>
            ))}
          </div>

          <div className="nb-blog-grid nb-reveal nb-reveal-delay-1">
            {ARTICLES.map((a, i) => (
              <article className="nb-blog-card" key={i}>
                <div className="nb-blog-card-meta">
                  <span className="nb-blog-category">{a.category}</span>
                  <span className="nb-blog-date">{a.date}</span>
                </div>
                <h3 className="nb-blog-title">{a.title}</h3>
                <p className="nb-blog-excerpt">{a.excerpt}</p>
                <div className="nb-blog-footer">
                  <span className="nb-blog-readtime">{a.readTime}</span>
                  <Link to={`/blog/${a.slug}`} className="nb-blog-link">Read More <ArrowIcon /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nb-section nb-final-cta">
        <div className="nb-container">
          <div className="nb-reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
            <h2 className="nb-section-h2" style={{ marginBottom: 16 }}>Have a Question About <em>Visa Processing?</em></h2>
            <p className="nb-section-sub" style={{ marginBottom: 32 }}>
              Our team is here to help. Book a free consultation or reach out directly.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="nb-btn-primary">Book Free Consultation <ArrowIcon /></Link>
              <a href="https://wa.me/918106197186" className="nb-btn-secondary" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
