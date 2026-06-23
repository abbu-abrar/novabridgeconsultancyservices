import { useEffect, useRef } from 'react'

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
)

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
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

const FEATURES = [
  { icon: <CheckCircleIcon />, title: 'Professional Guidance', desc: 'Certified counsellors with deep expertise in immigration law and embassy procedures. You are never guessing — you are guided.' },
  { icon: <ClockIcon />, title: 'Fast & Reliable Service', desc: 'We respect deadlines. Our streamlined workflows and direct embassy relationships keep your application moving without unnecessary delays.' },
  { icon: <UserIcon />, title: 'Personalized Support', desc: 'No two cases are identical. We tailor our strategy to your background, destination, and goals — treating you as an individual, not a number.' },
  { icon: <LockIcon />, title: 'Transparent Process', desc: 'No hidden charges. No surprise fees. Our pricing is clear upfront — what you are quoted is what you pay. Every step is communicated clearly.' },
]

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null)

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

  return (
    <section className="nb-section nb-section--bg nb-section--border-t" id="why-us" ref={ref}>
      <div className="nb-container">
        <div className="nb-why-grid">
          <div className="nb-reveal">
            <div className="nb-section-label">Why NovaBridge</div>
            <h2 className="nb-section-h2">What Makes Us <em>Different</em></h2>
            <p className="nb-section-sub" style={{ marginBottom: 36 }}>
              Many consultancies overpromise. We do not. Our reputation is built on clear communication, genuine expertise, and results that speak for themselves.
            </p>

            <div className="nb-why-features">
              {FEATURES.map((f, i) => (
                <div className="nb-why-feature" key={i}>
                  <div className="nb-why-feature-icon">{f.icon}</div>
                  <div className="nb-why-feature-body">
                    <div className="nb-why-feature-title">{f.title}</div>
                    <div className="nb-why-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="nb-reveal nb-reveal-delay-2">
            <div className="nb-why-visual">
              <div className="nb-quote-block">
                <div className="nb-quote-mark">&ldquo;</div>
                <p className="nb-quote-text">
                  Every applicant&apos;s case is unique. Our role is to listen closely, prepare thoroughly, and stand by our clients until their visa is approved.
                </p>
                <div className="nb-quote-attr">— NovaBridge Counselling Team</div>
              </div>

              <div className="nb-why-cta-block">
                <div className="nb-why-cta-label">Reach us directly</div>
                <div className="nb-contact-quick">
                  <div className="nb-cq-item">
                    <span className="nb-cq-icon"><PhoneIcon /></span>
                    <a href="tel:+918106197186">+91 81061 97186</a>
                  </div>
                  <div className="nb-cq-item">
                    <span className="nb-cq-icon"><PhoneIcon /></span>
                    <a href="tel:+918019133283">+91 80191 33283</a>
                  </div>
                  <div className="nb-cq-item">
                    <span className="nb-cq-icon"><MailIcon /></span>
                    <a href="mailto:hello@novabridgeconsultancyservices.in">hello@novabridgeconsultancyservices.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
