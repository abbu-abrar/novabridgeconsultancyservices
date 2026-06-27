import { useState, useEffect, useRef, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M10 5l3 3-3 3" />
  </svg>
)

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const ShieldSmallIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const ShieldCheckSmallIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const LockSmallIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const SERVICES_OPTIONS = [
  'Visa Assistance',
  'Study Abroad Guidance',
  'Business Visa Support',
  'Tourist & Visit Visa',
  'Documentation Assistance',
  'Immigration & Consultancy',
  'Not sure yet',
]

function sanitizeInput(value: string): string {
  return value
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .trim()
    .slice(0, 2000)
}

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (submitting) return
    setSubmitError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    const name = sanitizeInput(String(formData.get('name') || ''))
    const phone = sanitizeInput(String(formData.get('phone') || ''))
    const email = sanitizeInput(String(formData.get('email') || ''))
    const service = sanitizeInput(String(formData.get('service') || ''))
    const message = sanitizeInput(String(formData.get('message') || ''))

    if (!name || !phone || !email || !message) return

    setSubmitting(true)

    try {
      const submitData = new FormData()
      submitData.set('name', name)
      submitData.set('phone', phone)
      submitData.set('email', email)
      submitData.set('service', service)
      submitData.set('message', message)
      submitData.set('_captcha', 'false')
      submitData.set('_next', 'https://novabridgeconsultancyservices.in/thank-you')

      await fetch('https://formsubmit.co/hello@novabridgeconsultancyservices.in', {
        method: 'POST',
        body: submitData,
      })

      setSubmitted(true)
    } catch {
      setSubmitting(false)
      alert('Failed to send message. Please try again or contact us at hello@novabridgeconsultancyservices.in')
      setSubmitted(false)
      setSubmitError('Something went wrong. Please try again in a moment.')
    }
  }

  return (
    <div ref={sectionRef}>
      <section className="nb-page-hero">
        <div className="nb-container">
          <div className="nb-page-hero-inner nb-reveal">
            <div className="nb-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Contact</span>
            </div>
            <h1 className="nb-page-h1">Get in <em>Touch</em></h1>
            <p className="nb-page-sub">Ready to take the next step? Reach out to us by phone, email, or fill out the form below. We respond within one business day.</p>
          </div>
        </div>
      </section>

      <section className="nb-section nb-section--border-t">
        <div className="nb-container">
          <div className="nb-contact-grid">
            <div className="nb-reveal">
              <ul className="nb-contact-info-list" role="list">
                <li className="nb-ci-item">
                  <div className="nb-ci-icon"><MapPinIcon /></div>
                  <div className="nb-ci-body">
                    <div className="nb-ci-label">Office Address</div>
                    <div className="nb-ci-value"># 12-2-826/A/47/11, GTC Colony,<br />Mehdipatnam, Hyderabad – 500 028</div>
                  </div>
                </li>
                <li className="nb-ci-item">
                  <div className="nb-ci-icon"><PhoneIcon /></div>
                  <div className="nb-ci-body">
                    <div className="nb-ci-label">Phone</div>
                    <div className="nb-ci-value">
                      <a href="tel:+918106197186">+91 81061 97186</a><br />
                      <a href="tel:+918019133283">+91 80191 33283</a>
                    </div>
                  </div>
                </li>
                <li className="nb-ci-item">
                  <div className="nb-ci-icon"><MailIcon /></div>
                  <div className="nb-ci-body">
                    <div className="nb-ci-label">Email</div>
                    <div className="nb-ci-value">
                      <a href="mailto:hello@novabridgeconsultancyservices.in">hello@novabridgeconsultancyservices.in</a>
                    </div>
                  </div>
                </li>
                <li className="nb-ci-item">
                  <div className="nb-ci-icon"><ClockIcon /></div>
                  <div className="nb-ci-body">
                    <div className="nb-ci-label">Office Hours</div>
                    <div className="nb-ci-value">Monday – Saturday</div>
                    <div className="nb-hours-row">
                      <div className="nb-hours-badge">
                        <div className="nb-hours-open-dot" />
                        Open · 10 AM – 7 PM
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="nb-social-links">
                <a
                  className="nb-social-btn"
                  href="https://www.instagram.com/novabridgeconsultancyservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow on Instagram"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.86 3.9 2.32 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.14 0-3.5.01-4.74.07-2.27.1-3.3 1.15-3.4 3.4-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.1 2.25 1.13 3.3 3.4 3.4 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c2.26-.1 3.3-1.14 3.4-3.4.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.1-2.25-1.14-3.3-3.4-3.4A66 66 0 0 0 12 3.96zm0 3.06a4.98 4.98 0 1 1 0 9.96 4.98 4.98 0 0 1 0-9.96zm0 1.8a3.18 3.18 0 1 0 0 6.36 3.18 3.18 0 0 0 0-6.36zm6.34-2.16a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0z" />
                  </svg>
                  Instagram
                </a>
                <a
                  className="nb-social-btn"
                  href="https://wa.me/918106197186"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <svg viewBox="0 0 32 32" fill="currentColor">
                    <path d="M16.04 2.667C8.65 2.667 2.667 8.65 2.667 16.04c0 2.83.83 5.46 2.26 7.66L2.667 29.33l5.79-2.21a13.27 13.27 0 0 0 7.58 2.35c7.39 0 13.37-5.98 13.37-13.37S23.43 2.667 16.04 2.667zm0 24.32a10.9 10.9 0 0 1-5.56-1.52l-.4-.24-3.43 1.31 1.34-3.34-.26-.41a10.93 10.93 0 0 1-1.68-5.78c0-6.05 4.93-10.97 10.99-10.97 6.06 0 10.98 4.92 10.98 10.97 0 6.06-4.92 10.98-10.98 10.98zm6.02-8.22c-.33-.16-1.94-.96-2.24-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.24-.71.08-.33-.16-1.38-.51-2.62-1.62-.97-.86-1.62-1.93-1.81-2.25-.19-.33-.02-.5.14-.66.16-.16.33-.41.5-.62.16-.2.22-.35.33-.58.11-.22.05-.41-.05-.58-.11-.16-.93-2.24-1.27-3.06-.34-.82-.69-.71-.94-.72-.24-.01-.52-.01-.8-.01-.27 0-.71.1-1.08.5-.36.4-1.39 1.36-1.39 3.32 0 1.96 1.42 3.85 1.62 4.11.2.27 2.7 4.13 6.55 5.62 3.85 1.49 3.85 1 4.55.93.7-.07 1.94-.79 2.21-1.55.27-.76.27-1.41.19-1.55-.08-.13-.3-.21-.63-.37z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="nb-contact-form nb-reveal nb-reveal-delay-2">
              <div className="nb-form-header">
                <div className="nb-form-title">Send a Message</div>
                <div className="nb-form-sub">We respond within one business day. Your information is encrypted and secure.</div>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: 'var(--nb-ink)', marginBottom: 8 }}>Thank You!</h3>
                  <p style={{ fontSize: 15, color: 'var(--nb-ink-3)', lineHeight: 1.7 }}>
                    Your message has been sent successfully. We will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {submitError ? (
                    <div
                      role="alert"
                      className="nb-form-error"
                      style={{
                        margin: '0 0 18px',
                        padding: '14px 16px',
                        borderRadius: 12,
                        background: 'rgba(200, 0, 0, 0.08)',
                        color: 'var(--nb-ink)',
                        border: '1px solid rgba(200, 0, 0, 0.25)',
                        fontWeight: 600,
                      }}
                    >
                      {submitError}
                    </div>
                  ) : null}

                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://novabridgeconsultancyservices.in/thank-you" />

                  <div className="nb-form-row">
                    <div className="nb-form-group">
                      <label className="nb-form-label" htmlFor="fname">Full Name</label>
                      <input className="nb-form-input" type="text" id="fname" name="name" placeholder="Your full name" required autoComplete="name" maxLength={100} />
                    </div>
                    <div className="nb-form-group">
                      <label className="nb-form-label" htmlFor="fphone">Phone Number</label>
                      <input className="nb-form-input" type="tel" id="fphone" name="phone" placeholder="+91 XXXXX XXXXX" required autoComplete="tel" maxLength={20} pattern="[\+]?[0-9\s\-\(\)]{7,20}" />
                    </div>
                  </div>

                  <div className="nb-form-group">
                    <label className="nb-form-label" htmlFor="femail">Email Address</label>
                    <input className="nb-form-input" type="email" id="femail" name="email" placeholder="you@email.com" required autoComplete="email" maxLength={200} />
                  </div>

                  <div className="nb-form-group">
                    <label className="nb-form-label" htmlFor="fservice">Service Required</label>
                    <select className="nb-form-input nb-form-select" id="fservice" name="service" required>
                      <option value="">Select a service...</option>
                      {SERVICES_OPTIONS.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="nb-form-group">
                    <label className="nb-form-label" htmlFor="fmessage">Your Message</label>
                    <textarea className="nb-form-input" id="fmessage" name="message" placeholder="Tell us about your situation and plans..." required maxLength={2000} />
                  </div>

                  <div className="nb-form-actions">
                    <button type="submit" className="nb-form-submit" disabled={submitting}>
                      {submitting ? 'Sending...' : 'Send Message'}
                      <ArrowIcon />
                    </button>
                    <p className="nb-form-note">
                      By submitting, you agree to our{' '}
                      <Link to="/privacy">Privacy Policy</Link>.
                      Your data is encrypted and never shared.
                    </p>
                    <div className="nb-security-badges">
                      <div className="nb-security-badge">
                        <ShieldSmallIcon /> SSL Secure
                      </div>
                      <div className="nb-security-badge">
                        <ShieldCheckSmallIcon /> Privacy Protected
                      </div>
                      <div className="nb-security-badge">
                        <LockSmallIcon /> Encrypted
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="nb-map-section">
        <iframe
          src="https://www.google.com/maps?q=GTC+Colony+Mehdipatnam+Hyderabad&output=embed"
          allowFullScreen
          loading="lazy"
          title="NovaBridge Consultancy Services — Mehdipatnam, Hyderabad"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
