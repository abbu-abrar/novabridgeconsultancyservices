import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M10 5l3 3-3 3" />
  </svg>
)

const MILESTONES = [
  { year: '2018', title: 'Founded', desc: 'NovaBridge Consultancy Services was established in Mehdipatnam, Hyderabad with a vision to provide honest, transparent immigration guidance.' },
  { year: '2019', title: 'First 500 Clients', desc: 'Reached our first 500 clients milestone, building a reputation for reliable visa assistance and personalised service.' },
  { year: '2020', title: 'Digital Transformation', desc: 'Expanded our services online to continue supporting clients during challenging times. Launched virtual consultations and digital document management.' },
  { year: '2021', title: 'Expanded Destinations', desc: 'Broadened our expertise to cover 15+ destination countries including Japan, Germany, and New Zealand alongside our core markets.' },
  { year: '2022', title: 'Team Growth', desc: 'Grew our team of certified counsellors to 15+ specialists, each with deep expertise in specific visa categories and destinations.' },
  { year: '2023', title: '2,000+ Clients', desc: 'Crossed the 2,000-client mark with a 95%+ satisfaction rate. Expanded our study abroad and immigration services significantly.' },
  { year: '2024', title: 'Industry Recognition', desc: 'Recognised as one of Hyderabad\'s leading immigration consultancies. Launched specialised corporate visa services for businesses.' },
]

const VALUES = [
  {
    title: 'Transparency',
    desc: 'We believe in complete honesty. Every fee, every timeline, every possibility is communicated clearly upfront. No hidden charges, no false promises.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
    ),
  },
  {
    title: 'Integrity',
    desc: 'We never mislead clients about their chances. If a visa outcome is uncertain, we say so. Our reputation is built on trust, not sales tactics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
    ),
  },
  {
    title: 'Excellence',
    desc: 'Every application we prepare meets the highest standards. We invest in training, stay current with immigration law changes, and continuously improve our processes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
    ),
  },
  {
    title: 'Client-First',
    desc: 'Every decision we make starts with one question: what is best for the client? We treat each case as if it were our own family member\'s future.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
    ),
  },
]

const TEAM = [
  { name: 'Senior Immigration Team', role: 'Certified immigration specialists with 8+ years of experience across UK, Australia, Canada, and UAE visa categories.', initials: 'SIT' },
  { name: 'Student Counselling Team', role: 'Dedicated study abroad advisors with direct relationships with 50+ universities across 7 countries.', initials: 'SCT' },
  { name: 'Documentation Specialists', role: 'Meticulous document experts who ensure every form, certificate, and record meets embassy standards.', initials: 'DOS' },
  { name: 'Client Relations Team', role: 'Your dedicated point of contact — keeping you informed at every stage and answering all your questions.', initials: 'CRT' },
]

export default function AboutPage() {
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

  return (
    <div ref={ref}>
      {/* Page Hero */}
      <section className="nb-page-hero">
        <div className="nb-container">
          <div className="nb-page-hero-inner nb-reveal">
            <div className="nb-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>About Us</span>
            </div>
            <h1 className="nb-page-h1">About <em>NovaBridge</em></h1>
            <p className="nb-page-sub">Building trust through honest immigration guidance since 2018. Learn about our journey, our values, and the team behind every successful visa application.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="nb-section nb-section--border-t">
        <div className="nb-container">
          <div className="nb-about-story-grid nb-reveal">
            <div>
              <div className="nb-section-label">Our Story</div>
              <h2 className="nb-section-h2" style={{ fontSize: 32 }}>From a Small Office in Mehdipatnam to Hyderabad&apos;s <em>Trusted Name</em></h2>
            </div>
            <div>
              <p className="nb-about-body">
                NovaBridge Consultancy Services was founded in 2018 with a clear mission: to provide honest, professional, and results-driven immigration guidance to people in Hyderabad and beyond. We saw too many consultancies overpromising and underdelivering — and we wanted to be different.
              </p>
              <p className="nb-about-body">
                Starting from a small office in Mehdipatnam, we built our reputation one client at a time. Every successful visa approval, every satisfied student, every grateful professional who started their journey abroad through us — they are the foundation of who we are today.
              </p>
              <p className="nb-about-body">
                Today, with a team of 15+ certified counsellors and over 2,500 clients served, we are one of Hyderabad&apos;s most trusted immigration consultancies. But our core belief remains the same: <strong>every person deserves clear, honest, expert advice on their path abroad.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="nb-section nb-section--bg nb-section--border-t">
        <div className="nb-container">
          <div className="nb-section-header nb-reveal">
            <div className="nb-section-label">Our Values</div>
            <h2 className="nb-section-h2">What <em>Drives Us</em></h2>
          </div>
          <div className="nb-values-grid nb-reveal nb-reveal-delay-1">
            {VALUES.map((v, i) => (
              <div className="nb-value-card" key={i}>
                <div className="nb-value-icon">{v.icon}</div>
                <h3 className="nb-value-title">{v.title}</h3>
                <p className="nb-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="nb-section nb-section--border-t">
        <div className="nb-container">
          <div className="nb-section-header nb-reveal">
            <div className="nb-section-label">Our Team</div>
            <h2 className="nb-section-h2">The People Behind <em>Your Success</em></h2>
            <p className="nb-section-sub">Our team of certified counsellors and specialists bring decades of combined experience in immigration, education, and client service.</p>
          </div>
          <div className="nb-team-grid nb-reveal nb-reveal-delay-1">
            {TEAM.map((t, i) => (
              <div className="nb-team-card" key={i}>
                <div className="nb-team-avatar">{t.initials}</div>
                <h3 className="nb-team-name">{t.name}</h3>
                <p className="nb-team-role">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="nb-section nb-section--bg nb-section--border-t">
        <div className="nb-container">
          <div className="nb-section-header nb-reveal">
            <div className="nb-section-label">Our Journey</div>
            <h2 className="nb-section-h2">Key <em>Milestones</em></h2>
          </div>
          <div className="nb-timeline nb-reveal nb-reveal-delay-1">
            {MILESTONES.map((m, i) => (
              <div className="nb-timeline-item" key={i}>
                <div className="nb-timeline-year">{m.year}</div>
                <div className="nb-timeline-content">
                  <h3 className="nb-timeline-title">{m.title}</h3>
                  <p className="nb-timeline-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nb-section nb-final-cta">
        <div className="nb-container">
          <div className="nb-reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
            <h2 className="nb-section-h2" style={{ marginBottom: 16 }}>Want to Be Part of <em>Our Story?</em></h2>
            <p className="nb-section-sub" style={{ marginBottom: 32 }}>
              Whether you are a client looking for guidance or a professional interested in joining our team, we would love to hear from you.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="nb-btn-primary">Get in Touch <ArrowIcon /></Link>
              <Link to="/careers" className="nb-btn-secondary">View Open Positions</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
