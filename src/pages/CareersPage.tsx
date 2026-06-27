import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M10 5l3 3-3 3" />
  </svg>
)

const OPENINGS = [
  {
    title: 'Immigration Counsellor',
    type: 'Full-Time',
    location: 'Mehdipatnam, Hyderabad',
    experience: '3–5 years',
    description: 'Guide clients through visa applications for UK, Australia, and Canada. Assess eligibility, prepare documentation, and manage the end-to-end process.',
    requirements: [
      'Bachelor\'s degree in any field',
      '3+ years of experience in immigration consultancy',
      'Knowledge of UK, Australia, and Canada visa processes',
      'Excellent communication skills in English and Telugu/Hindi',
      'Strong attention to detail and documentation skills',
    ],
  },
  {
    title: 'Study Abroad Advisor',
    type: 'Full-Time',
    location: 'Mehdipatnam, Hyderabad',
    experience: '2–4 years',
    description: 'Help students find the right university and course, prepare applications, SOPs, and manage student visa processing for top study destinations.',
    requirements: [
      'Bachelor\'s degree (Master\'s preferred)',
      '2+ years in study abroad counselling',
      'Familiarity with university admissions in UK, Australia, Canada',
      'SOP and application writing experience',
      'Passion for helping students achieve their academic goals',
    ],
  },
  {
    title: 'Documentation Specialist',
    type: 'Full-Time',
    location: 'Mehdipatnam, Hyderabad',
    experience: '1–3 years',
    description: 'Verify, organise, and prepare client documents for embassy submission. Ensure compliance with country-specific requirements.',
    requirements: [
      'Bachelor\'s degree',
      '1+ years in document processing or admin role',
      'High attention to detail',
      'Familiarity with embassy document requirements',
      'Organised and methodical approach to work',
    ],
  },
  {
    title: 'Client Relations Executive',
    type: 'Full-Time',
    location: 'Mehdipatnam, Hyderabad',
    experience: '1–2 years',
    description: 'Be the first point of contact for clients. Manage enquiries, schedule consultations, and ensure excellent client experience throughout.',
    requirements: [
      'Bachelor\'s degree',
      '1+ years in customer service or client relations',
      'Excellent verbal and written communication',
      'Proficiency in MS Office and CRM tools',
      'Empathetic and professional demeanour',
    ],
  },
]

const PERKS = [
  'Competitive salary with performance incentives',
  'Paid training and professional development',
  'Health insurance for you and your family',
  'Paid time off and public holidays',
  'Flexible working hours',
  'Team outings and annual retreats',
  'Opportunity to travel for conferences and training',
  'Growth-oriented work environment',
]

export default function CareersPage() {
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
      <section className="nb-page-hero">
        <div className="nb-container">
          <div className="nb-page-hero-inner nb-reveal">
            <div className="nb-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Careers</span>
            </div>
            <h1 className="nb-page-h1">Join <em>Our Team</em></h1>
            <p className="nb-page-sub">We are always looking for talented, passionate people who want to make a real difference in people&apos;s lives. Explore our current openings below.</p>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="nb-section nb-section--border-t">
        <div className="nb-container">
          <div className="nb-section-header nb-reveal">
            <div className="nb-section-label">Why NovaBridge</div>
            <h2 className="nb-section-h2">A Place Where <em>Your Work Matters</em></h2>
            <p className="nb-section-sub">Every application you handle changes someone&apos;s life. Here, you are not just processing paperwork — you are helping families reunite, students pursue their dreams, and professionals build their futures.</p>
          </div>

          <div className="nb-careers-perks nb-reveal nb-reveal-delay-1">
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>What We Offer</h3>
            <div className="nb-perks-grid">
              {PERKS.map((p, i) => (
                <div className="nb-perk-item" key={i}>
                  <svg viewBox="0 0 16 16" fill="none" stroke="var(--nb-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l3.5 3.5L13 5" /></svg>
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="nb-section nb-section--bg nb-section--border-t">
        <div className="nb-container">
          <div className="nb-section-header nb-reveal">
            <div className="nb-section-label">Open Positions</div>
            <h2 className="nb-section-h2">Current <em>Openings</em></h2>
          </div>

          <div className="nb-jobs-list nb-reveal nb-reveal-delay-1">
            {OPENINGS.map((job, i) => (
              <details className="nb-job-card" key={i}>
                <summary className="nb-job-summary">
                  <div className="nb-job-main">
                    <h3 className="nb-job-title">{job.title}</h3>
                    <div className="nb-job-meta">
                      <span className="nb-job-tag">{job.type}</span>
                      <span className="nb-job-tag">{job.location}</span>
                      <span className="nb-job-tag">{job.experience}</span>
                    </div>
                  </div>
                  <div className="nb-job-arrow">+</div>
                </summary>
                <div className="nb-job-details">
                  <p className="nb-job-desc">{job.description}</p>
                  <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, color: 'var(--nb-ink)' }}>Requirements</h4>
                  <ul className="nb-job-reqs">
                    {job.requirements.map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
<a
href={`mailto:hello@novabridgeconsultancyservices.in?subject=${encodeURIComponent(`Application: ${job.title}`)}`}
                    className="nb-btn-primary"
                    style={{ marginTop: 16 }}
                  >
                    Apply Now <ArrowIcon />
                  </a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nb-section nb-final-cta">
        <div className="nb-container">
          <div className="nb-reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
            <h2 className="nb-section-h2" style={{ marginBottom: 16 }}>Don&apos;t See a <em>Fit?</em></h2>
            <p className="nb-section-sub" style={{ marginBottom: 32 }}>
              Send us your resume at hello@novabridgeconsultancyservices.in. We are always open to meeting talented people who share our values.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:hello@novabridgeconsultancyservices.in" className="nb-btn-primary">Send Your Resume <ArrowIcon /></a>
              <Link to="/contact" className="nb-btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
