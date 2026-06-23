import { useEffect, useRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Ticker from '../components/Ticker'
import WhyUs from '../components/WhyUs'
import TrustBand from '../components/TrustBand'

const CheckIcon = () => (
  <svg viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 5l3.5 3.5L11 1" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M10 5l3 3-3 3" />
  </svg>
)

const ArrowRight = () => (
  <svg viewBox="0 0 14 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 1.5L13 6m0 0L8.5 10.5M13 6H1" />
  </svg>
)

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const GlobeSVG = () => (
  <svg className="nb-globe-svg" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" rx="8" fill="#faf8f5" />
    <g stroke="#e0d5c7" strokeWidth="0.8">
      <line x1="0" y1="75" x2="400" y2="75" />
      <line x1="0" y1="150" x2="400" y2="150" />
      <line x1="0" y1="225" x2="400" y2="225" />
      <line x1="100" y1="0" x2="100" y2="300" />
      <line x1="200" y1="0" x2="200" y2="300" />
      <line x1="300" y1="0" x2="300" y2="300" />
    </g>
    <path d="M170 70q10-6 22-3q12 4 11 16q-6 8-17 7q-14-3-16-20Z" fill="#e0d5c7" opacity="0.9" />
    <path d="M176 100q11-3 18 0q8 6 7 24q-3 15-15 19q-13 3-18-10q-6-18 8-33Z" fill="#e0d5c7" opacity="0.9" />
    <path d="M215 55q40-8 64 3q24 13 21 34q-6 19-27 18q-22-2-32-14q-24-11-26-41Z" fill="#e0d5c7" opacity="0.9" />
    <path d="M48 55q24-11 40 2q14 11 8 30q-10 18-29 14q-21-5-22-24q-1-14 3-22Z" fill="#e0d5c7" opacity="0.9" />
    <path d="M78 135q13-5 19 3q8 10 5 29q-5 16-18 18q-14 0-16-19q-3-23 10-31Z" fill="#e0d5c7" opacity="0.9" />
    <path d="M285 145q16-6 26 3q10 11 5 24q-6 11-21 8q-14-3-14-19q0-11 4-16Z" fill="#e0d5c7" opacity="0.9" />
    <path d="M240 95Q300 70 310 195" stroke="#5a0a1a" strokeWidth="1.5" strokeDasharray="5 4" fill="none" opacity="0.35" />
    <path d="M240 95Q200 60 108 78" stroke="#5a0a1a" strokeWidth="1.5" strokeDasharray="5 4" fill="none" opacity="0.35" />
    <path d="M240 95Q230 160 88 185" stroke="#5a0a1a" strokeWidth="1.5" strokeDasharray="5 4" fill="none" opacity="0.35" />
    <circle cx="240" cy="95" r="6" fill="#5a0a1a" />
    <circle cx="240" cy="95" r="10" fill="#5a0a1a" opacity="0.12" />
    <circle cx="240" cy="95" r="16" fill="#5a0a1a" opacity="0.06" />
    <circle cx="310" cy="195" r="5" fill="#b8922a" />
    <circle cx="108" cy="78" r="5" fill="#b8922a" />
    <circle cx="88" cy="185" r="5" fill="#b8922a" />
    <text x="246" y="92" fontFamily="Inter,sans-serif" fontSize="9" fill="#5a0a1a" fontWeight="700">HYD</text>
    <text x="318" y="193" fontFamily="Inter,sans-serif" fontSize="8.5" fill="#7a5a10">AU</text>
    <text x="84" y="72" fontFamily="Inter,sans-serif" fontSize="8.5" fill="#7a5a10">UK</text>
    <text x="62" y="182" fontFamily="Inter,sans-serif" fontSize="8.5" fill="#7a5a10">UAE</text>
  </svg>
)

function useAnimatedCounter(target: number, duration = 2000) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)

  const start = useCallback(() => {
    if (started) return
    setStarted(true)
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setValue(target)
    }
    requestAnimationFrame(step)
  }, [target, duration, started])

  return { value, start }
}

function StatCounter({ target, label }: { target: number; label: string }) {
  const { value, start } = useAnimatedCounter(target)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { start(); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [start])

  const format = (n: number) => {
    if (target >= 1000) return `${Math.floor(n / 1000)}K+`
    return `${n}+`
  }

  return (
    <div className="nb-hero-stat" ref={ref}>
      <span className="nb-hero-stat-n">{format(value)}</span>
      <span className="nb-hero-stat-l">{label}</span>
    </div>
  )
}

const TESTIMONIALS = [
  { name: 'Priya M.', role: 'Student Visa — UK', text: 'NovaBridge made my UK student visa process incredibly smooth. The counsellors were honest about timelines and guided me through every document. I got my visa in just 3 weeks.' },
  { name: 'Rajesh K.', role: 'Business Visa — Australia', text: 'Professional, transparent, and efficient. They handled my Australian business visa with complete accuracy. No hidden charges, no false promises — just solid work.' },
  { name: 'Fatima S.', role: 'Tourist Visa — Japan', text: 'I was nervous about applying for a Japan tourist visa, but the team at NovaBridge walked me through every step. Got approved on the first attempt. Highly recommend their services.' },
  { name: 'Arjun Reddy', role: 'Immigration — Canada', text: 'The immigration team gave me a realistic assessment from day one. They prepared my PR application meticulously and kept me informed throughout. Very satisfied with the outcome.' },
]

const COUNTRIES = [
  { flag: '🇬🇧', name: 'United Kingdom', programs: ['Student Visa', 'Work Permit', 'Skilled Worker'] },
  { flag: '🇦🇺', name: 'Australia', programs: ['Student Visa', 'PR Pathway', 'Business Innovation'] },
  { flag: '🇨🇦', name: 'Canada', programs: ['Express Entry', 'Study Permit', 'PNP'] },
  { flag: '🇯🇵', name: 'Japan', programs: ['Student Visa', 'Work Visa', 'Business Manager'] },
  { flag: '🇦🇪', name: 'UAE', programs: ['Employment Visa', 'Investor Visa', 'Golden Visa'] },
  { flag: '🇩🇪', name: 'Germany', programs: ['Student Visa', 'Work Permit', 'EU Blue Card'] },
]

export default function HomePage() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const reveals = el.querySelectorAll('.nb-reveal')
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
    reveals.forEach(r => obs.observe(r))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="nb-hero" id="home" ref={sectionRef}>
        <div className="nb-hero-bg-orb nb-hero-bg-orb--1" />
        <div className="nb-hero-bg-orb nb-hero-bg-orb--2" />
        <div className="nb-hero-bg-orb nb-hero-bg-orb--3" />
        <div className="nb-hero-orb-ring">
          <div className="nb-hero-orb-dot" />
          <div className="nb-hero-orb-dot nb-hero-orb-dot--2" />
        </div>

        <div className="nb-container">
          <div className="nb-hero-inner">
            <div>
              <div className="nb-hero-badge nb-reveal">
                <span className="nb-badge-dot" />
                Hyderabad&apos;s Trusted Immigration Advisors
              </div>

              <h1 className="nb-hero-h1 nb-reveal nb-reveal-delay-1">
                <span className="nb-line">Connecting Dreams</span>
                <span className="nb-line"><em>Across <span className="nb-highlight">Borders</span></em></span>
              </h1>

              <p className="nb-hero-p nb-reveal nb-reveal-delay-2">
                <strong>Expert guidance</strong> on student visas, work permits, business visas, and tourist visas. Based in <strong>Mehdipatnam, Hyderabad</strong> — we deliver honest, professional, and results-driven consultancy.
              </p>

              <div className="nb-hero-actions nb-reveal nb-reveal-delay-3">
                <Link to="/contact" className="nb-btn-primary">
                  Book Free Consultation
                  <ArrowIcon />
                </Link>
                <Link to="/services" className="nb-btn-secondary">Explore Services</Link>
              </div>

              <div className="nb-hero-trust nb-reveal nb-reveal-delay-4">
                <div className="nb-trust-pill">
                  <div className="nb-trust-pill-check"><CheckIcon /></div>
                  No hidden fees
                </div>
                <div className="nb-trust-pill">
                  <div className="nb-trust-pill-check"><CheckIcon /></div>
                  Honest guidance only
                </div>
                <div className="nb-trust-pill">
                  <div className="nb-trust-pill-check"><CheckIcon /></div>
                  2,500+ clients served
                </div>
              </div>
            </div>

            <div className="nb-hero-visual nb-reveal nb-reveal-delay-2" aria-hidden="true">
              <div className="nb-hero-card">
                <div className="nb-hero-card-accent" />
                <div className="nb-globe-wrap">
                  <GlobeSVG />
                </div>
                <div className="nb-hero-stats-grid">
                  <StatCounter target={15} label="Counsellors" />
                  <StatCounter target={2500} label="Clients Served" />
                  <StatCounter target={150} label="Active Cases" />
                </div>
                <div className="nb-hero-float-badge">
                  <div className="nb-float-dot" />
                  Accepting new applications
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* About Preview */}
      <AboutPreview />

      {/* Services Preview */}
      <ServicesPreview />

      {/* Destinations */}
      <DestinationsSection />

      {/* Process Preview */}
      <ProcessPreview />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Why Us & Trust */}
      <WhyUs />
      <TrustBand />

      {/* Final CTA */}
      <FinalCTA />
    </>
  )
}

function AboutPreview() {
  return (
    <section className="nb-section nb-section--border-t" id="about">
      <div className="nb-container">
        <div className="nb-section-header nb-reveal">
          <div className="nb-section-label">About Us</div>
          <h2 className="nb-section-h2">Trusted Immigration Advisors <em>in Hyderabad</em></h2>
          <p className="nb-section-sub">NovaBridge was built on a simple belief: every person deserves clear, honest, expert advice on their path abroad.</p>
        </div>

        <div className="nb-about-grid">
          <div className="nb-reveal">
            <p className="nb-about-body">
              <strong>Based in Mehdipatnam, Hyderabad</strong>, our counsellors bring real, hands-on experience across student admissions, skilled worker pathways, business visas, and travel documentation. We serve each client as an individual — not a file number.
            </p>
            <p className="nb-about-body">
              From initial consultation to visa approval, we manage the complexity so you can focus on your future. Our <strong>transparent process</strong> has earned the trust of over 2,500 clients and counting.
            </p>
            <div className="nb-about-pillars">
              <div className="nb-about-pillar">
                <div className="nb-pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                </div>
                <div className="nb-pillar-body">
                  <div className="nb-pillar-title">Expert Counsellors</div>
                  <div className="nb-pillar-desc">Experienced advisors across all major visa categories and destination countries.</div>
                </div>
              </div>
              <div className="nb-about-pillar">
                <div className="nb-pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div className="nb-pillar-body">
                  <div className="nb-pillar-title">Honest Advice, Always</div>
                  <div className="nb-pillar-desc">We assess every case carefully and give realistic guidance — no false promises.</div>
                </div>
              </div>
              <div className="nb-about-pillar">
                <div className="nb-pillar-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 2 13 9 20 9" /><path d="M13 2L4 13h9l-1 9 9-11h-9l1-9z" /></svg>
                </div>
                <div className="nb-pillar-body">
                  <div className="nb-pillar-title">Efficient Processing</div>
                  <div className="nb-pillar-desc">Streamlined documentation and application management to minimise delays.</div>
                </div>
              </div>
            </div>
            <Link to="/about" className="nb-btn-primary">Learn More About Us <ArrowIcon /></Link>
          </div>

          <div className="nb-reveal nb-reveal-delay-2">
            <div className="nb-about-visual-stack">
              <div className="nb-about-vis-card nb-about-vis-card--accent">
                <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, background: 'rgba(255,255,255,0.04)', borderRadius: '50%' }} />
                <div className="nb-avc-label nb-avc-label--light">Happy Clients</div>
                <div className="nb-avc-big nb-avc-big--light">2,500+</div>
                <div className="nb-avc-sub nb-avc-sub--light">Across Student, Work &amp; Tourist Visas</div>
              </div>
              <div className="nb-about-vis-card">
                <div className="nb-avc-label">Key Destinations</div>
                <div className="nb-about-vis-destinations">
                  {[{ flag: '🇬🇧', name: 'UK' }, { flag: '🇦🇺', name: 'Australia' }, { flag: '🇯🇵', name: 'Japan' }, { flag: '🇦🇪', name: 'UAE' }].map((d, i) => (
                    <div className="nb-dest-mini" key={i}>
                      <span className="nb-dest-mini-flag">{d.flag}</span>
                      <span className="nb-dest-mini-name">{d.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  const services = [
    { num: '01', label: 'Visa Assistance', title: 'Visa Assistance', body: 'Complete visa application support for all major categories. We handle eligibility assessment, form preparation, appointment scheduling, and follow-up with embassies.' },
    { num: '02', label: 'Study Abroad', title: 'Study Abroad Guidance', body: 'University shortlisting, course selection, SOP preparation, documentation, and visa application — we guide aspiring students through every stage.' },
    { num: '03', label: 'Business Visa', title: 'Business Visa Support', body: 'End-to-end support for business travellers and corporate clients. We manage invitation letters, company verification, and compliance documentation.' },
    { num: '04', label: 'Tourist & Visit', title: 'Tourist & Visit Visas', body: 'Planning a family visit, holiday, or short trip? We manage documentation, itinerary requirements, financial proofs, and processing.' },
    { num: '05', label: 'Documentation', title: 'Documentation Assistance', body: 'Meticulous document review, verification, and organisation. We ensure every form meets embassy standards before submission.' },
    { num: '06', label: 'Immigration', title: 'Immigration & Consultancy', body: 'Strategic immigration planning for long-term relocation. We advise on PR pathways, skilled worker programmes, and compliance requirements.' },
  ]

  return (
    <section className="nb-section nb-section--bg nb-section--border-t" id="services">
      <div className="nb-container">
        <div className="nb-section-header nb-reveal">
          <div className="nb-section-label">What We Do</div>
          <h2 className="nb-section-h2">Comprehensive Visa &amp; <em>Immigration Services</em></h2>
          <p className="nb-section-sub">Focused, end-to-end support across the areas our clients need most — handled with precision, transparency, and care.</p>
        </div>

        <div className="nb-services-grid">
          {services.map((s, i) => (
            <article className={`nb-service-card nb-reveal nb-reveal-delay-${Math.min(i, 3)}`} key={s.num}>
              <div className="nb-service-num">{s.num} — {s.label}</div>
              <h3 className="nb-service-title">{s.title}</h3>
              <p className="nb-service-body">{s.body}</p>
              <Link to="/contact" className="nb-service-cta">
                Enquire now <ArrowRight />
              </Link>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }} className="nb-reveal">
          <Link to="/services" className="nb-btn-primary">View All Services <ArrowIcon /></Link>
        </div>
      </div>
    </section>
  )
}

function DestinationsSection() {
  return (
    <section className="nb-section nb-section--border-t">
      <div className="nb-container">
        <div className="nb-section-header nb-reveal">
          <div className="nb-section-label">Destinations</div>
          <h2 className="nb-section-h2">Where We Can <em>Help You Go</em></h2>
          <p className="nb-section-sub">We provide expert guidance for visas and immigration to these popular destinations — with up-to-date knowledge of each country&apos;s requirements.</p>
        </div>

        <div className="nb-destinations-grid nb-reveal nb-reveal-delay-1">
          {COUNTRIES.map((c, i) => (
            <div className="nb-dest-card" key={i}>
              <div className="nb-dest-flag">{c.flag}</div>
              <div className="nb-dest-name">{c.name}</div>
              <div className="nb-dest-programs">
                {c.programs.map(p => (
                  <span className="nb-dest-tag" key={p}>{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }} className="nb-reveal">
          <Link to="/contact" className="nb-btn-primary">Plan Your Journey <ArrowIcon /></Link>
        </div>
      </div>
    </section>
  )
}

function ProcessPreview() {
  const steps = [
    { n: '01', title: 'Free Consultation', body: 'Tell us your situation and goals. We assess your eligibility honestly and explain exactly what is possible.' },
    { n: '02', title: 'Document Checklist', body: 'We give you a clear, complete list of documents needed — and help you gather and verify everything correctly.' },
    { n: '03', title: 'Application Filing', body: 'Our advisors prepare and submit your application, handling every form and requirement with precision.' },
    { n: '04', title: 'Visa Approval', body: 'We track your application status and support you through any follow-up — right until your visa is in hand.' },
  ]

  return (
    <section className="nb-section nb-section--border-t" id="process">
      <div className="nb-container">
        <div className="nb-section-header nb-reveal">
          <div className="nb-section-label">How It Works</div>
          <h2 className="nb-section-h2">Simple, <em>Transparent</em> Process</h2>
          <p className="nb-section-sub">We keep things straightforward. Here is what happens from your first enquiry to your visa approval.</p>
        </div>

        <div className="nb-process-steps nb-reveal nb-reveal-delay-1">
          {steps.map((step) => (
            <div className="nb-process-step" key={step.n}>
              <div className="nb-step-number">{step.n}</div>
              <div className="nb-step-n">Step {step.n}</div>
              <div className="nb-step-title">{step.title}</div>
              <div className="nb-step-body">{step.body}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }} className="nb-reveal">
          <Link to="/process" className="nb-btn-primary">See Full Process <ArrowIcon /></Link>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

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

  const go = (next: number) => {
    const n = TESTIMONIALS.length
    setActive((prev) => {
      const raw = next
      if (raw < 0) return n - 1
      if (raw >= n) return 0
      return raw
    })
  }

  return (
    <section className="nb-section nb-section--bg nb-section--border-t" ref={ref}>
      <div className="nb-container">
        <div className="nb-section-header nb-reveal">
          <div className="nb-section-label">Testimonials</div>
          <h2 className="nb-section-h2">What Our Clients <em>Say About Us</em></h2>
          <p className="nb-section-sub">Real feedback from real clients. Their success stories speak louder than any promise.</p>
        </div>

        {/* Desktop/tablet grid */}
        <div className="nb-testimonials-grid nb-reveal nb-reveal-delay-1 nb-testimonials-grid--desktop">
          {TESTIMONIALS.map((t, i) => (
            <div className="nb-testimonial-card" key={i}>
              <div className="nb-testimonial-stars">
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <p className="nb-testimonial-text">&ldquo;{t.text}&rdquo;</p>
              <div className="nb-testimonial-author">
                <div className="nb-testimonial-avatar">{t.name.charAt(0)}</div>
                <div>
                  <div className="nb-testimonial-name">{t.name}</div>
                  <div className="nb-testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="nb-testimonials-carousel nb-testimonials-carousel--mobile nb-reveal nb-reveal-delay-1">
          <div className="nb-testimonials-carousel-inner">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`nb-testimonial-card nb-testimonials-carousel-item${i === active ? ' active' : ''}`}
                aria-hidden={i !== active}
              >
                <div className="nb-testimonial-stars">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="nb-testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="nb-testimonial-author">
                  <div className="nb-testimonial-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="nb-testimonial-name">{t.name}</div>
                    <div className="nb-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="nb-testimonials-carousel-controls" role="group" aria-label="Testimonials carousel controls">
            <button type="button" className="nb-carousel-btn" onClick={() => go(active - 1)} aria-label="Previous testimonial">
              ‹
            </button>
            <div className="nb-carousel-dots" aria-label="Testimonials pagination">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`nb-carousel-dot${i === active ? ' active' : ''}`}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active}
                />
              ))}
            </div>
            <button type="button" className="nb-carousel-btn" onClick={() => go(active + 1)} aria-label="Next testimonial">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


function FinalCTA() {
  return (
    <section className="nb-section nb-final-cta">
      <div className="nb-container">
        <div className="nb-reveal" style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <h2 className="nb-section-h2" style={{ marginBottom: 16 }}>Ready to Start Your <em>Journey?</em></h2>
          <p className="nb-section-sub" style={{ marginBottom: 32 }}>
            Book a free consultation today. Our expert counsellors will assess your case and guide you every step of the way.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="nb-btn-primary">Book Free Consultation <ArrowIcon /></Link>
            <a href="https://wa.me/918106197186" className="nb-btn-secondary" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  )
}
