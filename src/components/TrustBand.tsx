import { useEffect, useRef } from 'react'

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const ShieldVerifiedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const FileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

const TRUST_ITEMS = [
  { icon: <ShieldCheckIcon />, title: 'SSL Secured', desc: '256-bit encryption on all data transfers. Your information is protected at every touchpoint.' },
  { icon: <ShieldVerifiedIcon />, title: 'Privacy Protected', desc: 'We never share your documents or personal data with third parties. Strict confidentiality guaranteed.' },
  { icon: <LockIcon />, title: 'Verified & Compliant', desc: 'All processes follow current embassy guidelines and immigration regulations. Accuracy is our standard.' },
  { icon: <FileIcon />, title: 'Document Safekeeping', desc: 'Secure storage and handling of all client documents with access logs and audit trails.' },
]

export default function TrustBand() {
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
    <section className="nb-trust-band" ref={ref}>
      <div className="nb-container">
        <div className="nb-trust-grid nb-reveal">
          {TRUST_ITEMS.map((item, i) => (
            <div className="nb-trust-item" key={i}>
              <div className="nb-trust-icon-wrap">{item.icon}</div>
              <div>
                <div className="nb-trust-item-title">{item.title}</div>
                <div className="nb-trust-item-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
