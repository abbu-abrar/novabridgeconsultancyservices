import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M10 5l3 3-3 3" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l3.5 3.5L13 5" />
  </svg>
)

const SERVICES = [
  {
    id: 'visa',
    num: '01',
    title: 'Visa Assistance',
    tagline: 'End-to-end visa support for every category',
    description: 'Our visa assistance service covers the complete lifecycle — from initial eligibility assessment through to embassy submission and follow-up. We handle student visas, work permits, business visas, tourist visas, and more.',
    features: [
      'Initial eligibility assessment and case evaluation',
      'Complete application form preparation and review',
      'Embassy appointment scheduling and coordination',
      'Document verification against embassy requirements',
      'Financial proof and sponsorship documentation',
      'Interview preparation and mock sessions',
      'Application tracking and status updates',
      'Post-approval guidance and travel preparation',
    ],
    countries: ['UK', 'Australia', 'Canada', 'USA', 'Japan', 'UAE', 'Germany', 'New Zealand'],
    turnaround: '2–6 weeks depending on country and visa type',
  },
  {
    id: 'study',
    num: '02',
    title: 'Study Abroad Guidance',
    tagline: 'From university selection to student visa approval',
    description: 'We provide comprehensive study abroad guidance for students aiming to pursue education overseas. Our counsellors have deep relationships with universities across multiple countries and can help you find the right fit for your academic goals and budget.',
    features: [
      'University and course shortlisting based on profile',
      'Application preparation and SOP writing guidance',
      'Scholarship and financial aid identification',
      'Education loan assistance and documentation',
      'Student visa application and processing',
      'Pre-departure briefing and travel planning',
      'Accommodation and initial settlement guidance',
      'Post-landing support and alumni network access',
    ],
    countries: ['UK', 'Australia', 'Canada', 'USA', 'Germany', 'New Zealand', 'Ireland'],
    turnaround: '4–12 weeks (university application + visa)',
  },
  {
    id: 'business',
    num: '03',
    title: 'Business Visa Support',
    tagline: 'Professional visa solutions for corporate travellers',
    description: 'Our business visa service is designed for entrepreneurs, executives, and professionals who need to travel for meetings, conferences, expansions, or investment purposes. We ensure your application is polished and compliant.',
    features: [
      'Business visa eligibility assessment',
      'Invitation letter coordination with host companies',
      'Company verification and registration documents',
      'Financial statements and business proof preparation',
      'Multi-entry and long-term visa applications',
      'Corporate group visa processing',
      'Expedited processing for urgent travel',
      'Compliance documentation for immigration authorities',
    ],
    countries: ['UK', 'USA', 'Australia', 'UAE', 'Canada', 'Singapore', 'Japan'],
    turnaround: '1–4 weeks depending on destination',
  },
  {
    id: 'tourist',
    num: '04',
    title: 'Tourist & Visit Visas',
    tagline: 'Smooth travel planning for holidays and family visits',
    description: 'Whether you are planning a family holiday, visiting relatives, or exploring a new country, we handle the complete visa process. Our team ensures your application meets all requirements for a smooth approval.',
    features: [
      'Tourist visa eligibility assessment',
      'Itinerary and travel plan preparation',
      'Financial proof and bank statement guidance',
      'Hotel booking and accommodation documentation',
      'Travel insurance coordination',
      'Family visit visa sponsorship letters',
      'Multiple-entry visa applications',
      'Group and family visa processing',
    ],
    countries: ['UK', 'Schengen (Europe)', 'USA', 'Australia', 'Thailand', 'Japan', 'UAE', 'Singapore'],
    turnaround: '1–3 weeks depending on destination',
  },
  {
    id: 'docs',
    num: '05',
    title: 'Documentation Assistance',
    tagline: 'Meticulous document preparation and verification',
    description: 'Documents are the backbone of any visa application. Our documentation service ensures every certificate, form, and financial record is accurate, complete, and formatted to meet embassy standards before submission.',
    features: [
      'Document checklist preparation for each visa type',
      'Verification of educational certificates and transcripts',
      'Financial document review and organisation',
      'Police clearance and character certificate guidance',
      'Medical examination coordination',
      'Translation and notarisation assistance',
      'Document apostille and attestation support',
      'Digital document management and secure storage',
    ],
    countries: ['All destinations'],
    turnaround: '1–2 weeks for complete documentation package',
  },
  {
    id: 'immigration',
    num: '06',
    title: 'Immigration & Consultancy',
    tagline: 'Strategic planning for long-term relocation',
    description: 'For clients seeking permanent residency, skilled worker visas, or long-term relocation, our immigration consultancy provides strategic guidance. We assess your profile against current immigration criteria and develop a customised pathway.',
    features: [
      'Points-based immigration assessment (Canada Express Entry, Australia SkillSelect, etc.)',
      'PR pathway planning and strategy',
      'Skilled worker programme guidance',
      'Provincial/state nomination support',
      'Employer-sponsored visa applications',
      'Immigration compliance and renewal support',
      'Citizenship pathway planning',
      'Family reunion and dependent visa support',
    ],
    countries: ['Canada', 'Australia', 'UK', 'New Zealand', 'Germany'],
    turnaround: '3–12 months depending on programme and country',
  },
]

export default function ServicesPage() {
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
    <>
      {/* Page Hero */}
      <section className="nb-page-hero">
        <div className="nb-container">
          <div className="nb-page-hero-inner nb-reveal">
            <div className="nb-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>
            <h1 className="nb-page-h1">Our <em>Services</em></h1>
            <p className="nb-page-sub">Comprehensive visa and immigration solutions — from initial consultation to visa approval. Every service is delivered with transparency, precision, and care.</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="nb-section nb-section--border-t">
        <div className="nb-container">
          <div className="nb-services-detail-grid" ref={ref}>
            {SERVICES.map((s, i) => (
              <div className="nb-service-detail-card nb-reveal" key={s.id} id={s.id}>
                <div className="nb-sdc-header">
                  <div className="nb-sdc-num">{s.num}</div>
                  <div>
                    <h2 className="nb-sdc-title">{s.title}</h2>
                    <p className="nb-sdc-tagline">{s.tagline}</p>
                  </div>
                </div>
                <p className="nb-sdc-desc">{s.description}</p>
                <div className="nb-sdc-features">
                  <div className="nb-sdc-features-title">What&apos;s Included</div>
                  <ul className="nb-sdc-feature-list">
                    {s.features.map((f, j) => (
                      <li key={j}><CheckIcon /> {f}</li>
                    ))}
                  </ul>
                </div>
                <div className="nb-sdc-meta">
                  <div className="nb-sdc-meta-item">
                    <span className="nb-sdc-meta-label">Destinations</span>
                    <div className="nb-sdc-meta-tags">
                      {s.countries.map(c => (
                        <span className="nb-dest-tag" key={c}>{c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="nb-sdc-meta-item">
                    <span className="nb-sdc-meta-label">Typical Timeline</span>
                    <span className="nb-sdc-meta-value">{s.turnaround}</span>
                  </div>
                </div>
                <Link to="/contact" className="nb-btn-primary" style={{ marginTop: 20 }}>
                  Enquire About This Service <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why NovaBridge for Services */}
      <section className="nb-section nb-section--bg nb-section--border-t">
        <div className="nb-container">
          <div className="nb-section-header nb-reveal">
            <div className="nb-section-label">Why Choose Us</div>
            <h2 className="nb-section-h2">What Sets Our Services <em>Apart</em></h2>
          </div>
          <div className="nb-services-why-grid nb-reveal nb-reveal-delay-1">
            <div className="nb-services-why-card">
              <div className="nb-sw-num">01</div>
              <h3>Transparent Pricing</h3>
              <p>Every fee is quoted upfront. No hidden charges, no surprise invoices. What we quote is what you pay.</p>
            </div>
            <div className="nb-services-why-card">
              <div className="nb-sw-num">02</div>
              <h3>Embassy Relationships</h3>
              <p>Direct coordination with embassies and consulates ensures faster processing and fewer complications.</p>
            </div>
            <div className="nb-services-why-card">
              <div className="nb-sw-num">03</div>
              <h3>Case-Specific Strategy</h3>
              <p>Every application is unique. We develop a custom strategy based on your profile, destination, and goals.</p>
            </div>
            <div className="nb-services-why-card">
              <div className="nb-sw-num">04</div>
              <h3>End-to-End Support</h3>
              <p>From first consultation to visa in hand — we are with you at every stage, including post-approval guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="nb-section nb-final-cta">
        <div className="nb-container">
          <div className="nb-reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
            <h2 className="nb-section-h2" style={{ marginBottom: 16 }}>Need Help Choosing the <em>Right Service?</em></h2>
            <p className="nb-section-sub" style={{ marginBottom: 32 }}>
              Book a free consultation. Our counsellors will assess your situation and recommend the best path forward.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="nb-btn-primary">Book Free Consultation <ArrowIcon /></Link>
              <a href="https://wa.me/918106197186" className="nb-btn-secondary" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
