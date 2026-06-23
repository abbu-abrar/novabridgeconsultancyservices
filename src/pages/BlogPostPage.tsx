import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import type { BlogArticle } from './blogData'
import { ARTICLES } from './blogData'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M10 5l3 3-3 3" />
  </svg>
)

function estimateDescription(article: BlogArticle) {
  return `${article.title}. ${article.excerpt}`
}

export default function BlogPostPage() {
  const { slug } = useParams()

  const article = useMemo(() => {
    if (!slug) return null
    return ARTICLES.find((a) => a.slug === slug) ?? null
  }, [slug])

  if (!article) {
    // Let the catch-all 404 route handle it by rendering nothing here.
    // (Alternatively we could navigate("*") but that adds extra effects.)
    return (
      <div>
        <Helmet>
          <title>Blog Post Not Found • NovaBridge</title>
          <meta name="description" content="The blog post you are looking for does not exist." />
        </Helmet>
        <section className="nb-page-hero">
          <div className="nb-container">
            <div className="nb-page-hero-inner nb-reveal">
              <div className="nb-breadcrumb">
                <Link to="/">Home</Link>
                <span>/</span>
                <span>Blog</span>
                <span>/</span>
                <span>Not Found</span>
              </div>
              <h1 className="nb-page-h1">Blog Post <em>Not Found</em></h1>
              <p className="nb-page-sub">This article may have been moved or removed.</p>

              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 16 }}>
                <Link to="/blog" className="nb-btn-primary">Back to Blog <ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div>
      <Helmet>
        <title>{article.title} • NovaBridge</title>
        <meta name="description" content={estimateDescription(article)} />
      </Helmet>

      <section className="nb-page-hero">
        <div className="nb-container">
          <div className="nb-page-hero-inner nb-reveal">
            <div className="nb-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <Link to="/blog">Blog</Link>
              <span>/</span>
              <span>{article.category}</span>
            </div>
            <h1 className="nb-page-h1">{article.title}</h1>
            <p className="nb-page-sub">{article.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="nb-section nb-section--border-t">
        <div className="nb-container">
          <div className="nb-reveal" style={{ maxWidth: 900, margin: '0 auto' }}>
            <div className="nb-blog-post-meta" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 14 }}>
              <span className="nb-blog-category">{article.category}</span>
              <span className="nb-blog-date">{article.date}</span>
              <span className="nb-blog-readtime">{article.readTime}</span>
            </div>

            <div className="nb-blog-post-body" style={{ lineHeight: 1.85, color: 'var(--nb-ink)' }}>
              {article.content.map((p, i) => (
                <p key={i} style={{ marginBottom: 14 }}>
                  {p}
                </p>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-start', flexWrap: 'wrap', marginTop: 24 }}>
              <Link to="/blog" className="nb-btn-secondary">Back to Blog</Link>
              <Link to="/contact" className="nb-btn-primary">Talk to an Advisor <ArrowIcon /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

