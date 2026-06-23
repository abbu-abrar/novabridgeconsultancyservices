import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M10 5l3 3-3 3" />
  </svg>
)

const DETAILED_STEPS = [
  {
    n: '01',
    title: 'Free Initial Consultation',
    duration: '30–45 minutes',
    description: 'Every engagement begins with a free, no-obligation consultation. We sit down with you — in person at our Mehdipatnam office or via video call — to understand your goals, background, and current situation.',
    details: [
      'Discuss your immigration goals and timeline',
      'Review your educational and professional background',
      'Assess your eligibility for relevant visa categories',
      'Explain the process, requirements, and realistic timelines',
      'Answer all your questions with honest, informed advice',
      'Provide a clear fee structure with no hidden costs',
    ],
  },
  {
    n: '02',
    title: 'Strategy & Document Preparation',
    duration: '1–3 weeks',
    description: 'Once you decide to proceed, we develop a customised strategy for your case. Our documentation team then works with you to gather, verify, and organise every document needed.',
    details: [
      'Develop a case-specific strategy based on your profile',
      'Provide a detailed document checklist for your visa type',
      'Review and verify all documents against embassy requirements',
      'Guide you on financial proofs, sponsorship letters, and certificates',
      'Coordinate with universities or employers for supporting documents',
      'Prepare and review all application forms for accuracy',
    ],
  },
  {
    n: '03',
    title: 'Application Submission & Processing',
    duration: '1–6 weeks',
    description: 'We prepare and submit your application with meticulous attention to detail. Every form is double-checked, every document is in order, and every requirement is met before we file.',
    details: [
      'Complete and submit all application forms',
      'Schedule embassy appointments and manage timelines',
      'Coordinate biometrics and interview appointments',
      'Track application status and provide regular updates',
      'Handle any requests for additional information or documents',
      'Prepare you for embassy interviews with mock sessions',
    ],
  },
  {
    n: '04',
    title: 'Follow-Up & Approval',
    duration: '1–8 weeks',
    description: 'After submission, we do not disappear. We actively track your application, respond to any embassy queries, and keep you informed until your visa is approved.',
    details: [
      'Monitor application status through embassy portals',
      'Respond promptly to any requests or clarifications',
      'Provide updates at every milestone',
      'Coordinate passport collection or stamping',
      'Guide you on next steps after approval',
    ],
  },
  {
    n: '05',
    title: 'Post-Approval Support',
    duration: 'Ongoing',
    description: 'Our relationship does not end with visa approval. We provide post-approval guidance to help you prepare for your journey and settle into your new destination.',
    details: [
      'Pre-departure briefing and travel preparation tips',
      'Accommodation and initial settlement guidance',
      'Airport pickup and local orientation (where available)',
      'Alumni network access for ongoing support',
      'Follow-up check-in after arrival',
    ],
  },
]

const FAQS = [
  { q: 'How long does the entire process take?', a: 'It depends on the visa type and destination country. Tourist visas typically take 1–3 weeks, student visas 4–12 weeks, and PR applications 3–12 months. We provide specific timelines during your initial consultation.' },
  { q: 'What documents do I need to bring?', a: 'This varies by visa type, but generally includes: passport, photographs, educational certificates, financial statements, employment letters, and any country-specific forms. We provide a detailed checklist after your consultation.' },
  { q: 'Do you guarantee visa approval?', a: 'No ethical consultancy can guarantee visa approval — the decision always rests with the embassy. What we guarantee is thorough preparation, honest assessment, and our best effort to present the strongest possible application.' },
  { q: 'Can I track my application status?', a: 'Yes. We provide regular updates at every stage. You can also reach out to us anytime for the latest status on your application. Most embassy portals also offer online tracking.' },
  { q: 'What if my visa is refused?', a: 'In the rare event of a refusal, we review the reasons, advise on options (reapplication, appeal, or alternative pathways), and adjust our strategy accordingly. Our fees for reapplication depend on the scope of work involved.' },
]

export default function ProcessPage() {
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
              <span>How It Works</span>
            </div>
            <h1 className="nb-page-h1">How It <em>Works</em></h1>
            <p className="nb-page-sub">A clear, step-by-step breakdown of our process — from your first call to your visa approval. No jargon, no surprises.</p>
          </div>
        </div>
      </section>

      <section className="nb-section nb-section--border-t">
        <div className="nb-container">
          <div className="nb-process-detail-list">
            {DETAILED_STEPS.map((step, i) => (
              <div className="nb-process-detail-card nb-reveal" key={i}>
                <div className="nb-pdc-left">
                  <div className="nb-pdc-number">{step.n}</div>
                  <div className="nb-pdc-duration">{step.duration}</div>
                </div>
                <div className="nb-pdc-right">
                  <h2 className="nb-pdc-title">{step.title}</h2>
                  <p className="nb-pdc-desc">{step.description}</p>
                  <ul className="nb-pdc-details">
                    {step.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="nb-section nb-section--bg nb-section--border-t">
        <div className="nb-container">
          <div className="nb-section-header nb-reveal">
            <div className="nb-section-label">FAQ</div>
            <h2 className="nb-section-h2">Frequently Asked <em>Questions</em></h2>
          </div>
          <div className="nb-faq-list nb-reveal nb-reveal-delay-1">
            {FAQS.map((faq, i) => (
              <details className="nb-faq-item" key={i}>
                <summary className="nb-faq-q">{faq.q}</summary>
                <p className="nb-faq-a">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="nb-section nb-final-cta">
        <div className="nb-container">
          <div className="nb-reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
            <h2 className="nb-section-h2" style={{ marginBottom: 16 }}>Ready to Begin <em>Your Journey?</em></h2>
            <p className="nb-section-sub" style={{ marginBottom: 32 }}>
              Start with a free consultation. We will assess your case and guide you through every step.
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
