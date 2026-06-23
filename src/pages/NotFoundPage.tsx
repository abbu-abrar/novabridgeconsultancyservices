import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M10 5l3 3-3 3" />
  </svg>
)

export default function NotFoundPage() {
  return (
    <div>
      <Helmet>
        <title>Page Not Found • NovaBridge</title>
        <meta name="description" content="The page you’re looking for doesn’t exist. Explore NovaBridge’s services and contact us for help." />
      </Helmet>

      <section className="nb-page-hero">
        <div className="nb-container">
          <div className="nb-page-hero-inner nb-reveal">
            <div className="nb-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>404</span>
            </div>
            <h1 className="nb-page-h1">Page <em>Not Found</em></h1>
            <p className="nb-page-sub">The link may be broken or the page may have moved. Use the options below to continue.</p>
          </div>
        </div>
      </section>

      <section className="nb-section nb-section--border-t">
        <div className="nb-container">
          <div className="nb-reveal" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
            <div style={{ fontSize: 84, fontWeight: 900, lineHeight: 1, marginBottom: 16, color: 'var(--nb-accent)' }}>
              404
            </div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 8 }}>
              <Link to="/" className="nb-btn-primary">Go to Home <ArrowIcon /></Link>
              <Link to="/contact" className="nb-btn-secondary">Contact Us</Link>
              <Link to="/blog" className="nb-btn-secondary">Read the Blog</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

