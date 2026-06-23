import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M10 5l3 3-3 3" />
  </svg>
)

export default function ThankYouPage() {
  return (
    <div>
      <Helmet>
        <title>Thank You • NovaBridge</title>
        <meta name="description" content="Thanks for reaching out to NovaBridge. Our team will contact you within one business day." />
      </Helmet>

      <section className="nb-page-hero">
        <div className="nb-container">
          <div className="nb-page-hero-inner nb-reveal">
            <div className="nb-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Thank You</span>
            </div>
            <h1 className="nb-page-h1">Thank <em>You</em></h1>
            <p className="nb-page-sub">We’ve received your message. Our counsellors will get back to you within one business day.</p>
          </div>
        </div>
      </section>

      <section className="nb-section nb-section--border-t">
        <div className="nb-container">
          <div className="nb-reveal" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
            <div style={{ fontSize: 64, marginBottom: 12, fontWeight: 800, color: 'var(--nb-accent)' }} aria-hidden="true">
              ✓
            </div>
            <h2 className="nb-section-h2" style={{ marginBottom: 10 }}>Next Steps</h2>
            <p className="nb-section-sub" style={{ marginBottom: 20 }}>
              While you wait, you can browse our services or read the latest blog insights.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/services" className="nb-btn-primary">Explore Services <ArrowIcon /></Link>
              <Link to="/blog" className="nb-btn-secondary">Visit Blog</Link>
              <Link to="/contact" className="nb-btn-secondary">Send Another Message</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

