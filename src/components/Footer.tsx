import { Link } from 'react-router-dom'

const GlobeLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M12 2v20" strokeDasharray="2 3" />
  </svg>
)

const ShieldSmallIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const FooterShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const SERVICES = [
  { label: 'Visa Assistance', to: '/services#visa' },
  { label: 'Study Abroad Guidance', to: '/services#study' },
  { label: 'Business Visa Support', to: '/services#business' },
  { label: 'Tourist & Visit Visa', to: '/services#tourist' },
  { label: 'Documentation Assistance', to: '/services#docs' },
  { label: 'Immigration & Consultancy', to: '/services#immigration' },
]

const COMPANY = [
  { label: 'About Us', to: '/about' },
  { label: 'How It Works', to: '/process' },
  { label: 'Blog & Insights', to: '/blog' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="nb-footer">
      <div className="nb-container">
        <div className="nb-footer-grid">
          <div>
            <Link to="/" className="nb-footer-logo">
              <div className="nb-footer-logo-mark">
                <div className="nb-footer-logo-mark" style={{ position: 'relative' }}>
                  <img
                    src="/logo.png"
                    alt="NovaBridge Logo"
                    onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
          style={{ position: 'relative', zIndex: 1 }}
  />
  <div style={{ 
    position: 'absolute', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    background: 'linear-gradient(135deg, #5a0a1a, #7a1a2e)' 
  }}>
    <GlobeLogo />
  </div>
</div>
              </div>
              <div>
                <div className="nb-footer-logo-name">NovaBridge</div>
                <span className="nb-footer-logo-sub">Consultancy Services</span>
              </div>
            </Link>
            <p className="nb-footer-desc">
              Trusted visa and immigration advisors in Mehdipatnam, Hyderabad. Helping students, professionals, and travellers move forward with confidence since 2018.
            </p>
            <div className="nb-footer-cert">
              <div className="nb-footer-cert-badge">
                <ShieldSmallIcon /> SSL Secured
              </div>
              <div className="nb-footer-cert-badge">
                <ShieldCheckIcon /> GDPR Compliant
              </div>
              <div className="nb-footer-cert-badge">
                <LockIcon /> ISO 27001 Ready
              </div>
            </div>
          </div>

          <div>
            <div className="nb-footer-col-title">Services</div>
            <ul className="nb-footer-list">
              {SERVICES.map(s => (
                <li key={s.label}><Link to={s.to}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="nb-footer-col-title">Company</div>
            <ul className="nb-footer-list">
              {COMPANY.map(c => (
                <li key={c.label}><Link to={c.to}>{c.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="nb-footer-col-title">Contact</div>
            <ul className="nb-footer-list">
              <li># 12-2-826/A/47/11, GTC Colony,<br />Mehdipatnam, Hyderabad – 500 028</li>
              <li><a href="tel:+918106197186">+91 81061 97186</a></li>
              <li><a href="tel:+918019133283">+91 80191 33283</a></li>
              <li><a href="mailto:hello@novabridgeconsultancyservices.in">hello@novabridgeconsultancyservices.in</a></li>
              <li><a href="https://www.instagram.com/novabridgeconsultancyservices" target="_blank" rel="noopener noreferrer">@novabridgeconsultancyservices</a></li>
            </ul>
          </div>
        </div>

        <div className="nb-footer-bottom">
          <span className="nb-footer-copy">&copy; 2024 NovaBridge Consultancy Services. All rights reserved.</span>
          <div className="nb-footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
            <Link to="/refund">Refund Policy</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
          <div className="nb-footer-secure">
            <FooterShieldIcon />
            256-bit SSL Encryption Active
          </div>
        </div>
      </div>
    </footer>
  )
}
