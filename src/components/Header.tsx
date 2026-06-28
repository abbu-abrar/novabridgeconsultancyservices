import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/process' },
  { label: 'Blog', to: '/blog' },
  { label: 'Careers', to: '/careers' },
]

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M10 5l3 3-3 3" />
  </svg>
)

const GlobeLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M12 2v20" strokeDasharray="2 3" />
  </svg>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
    document.body.style.overflow = ''
  }, [location.pathname])

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false)
    document.body.style.overflow = ''
  }, [])

  const toggleDrawer = useCallback(() => {
    setDrawerOpen(prev => {
      const next = !prev
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }, [])

  return (
    <>
      <div className="nb-topbar">
        <div className="nb-container">
          <div className="nb-topbar-inner">
            <div className="nb-topbar-left">
              <div className="nb-topbar-item">
                <PhoneIcon />
                <a href="tel:+918106197186">+91 81061 97186</a>
              </div>
              <div className="nb-topbar-item">
                <EmailIcon />
                <a href="mailto:hello@novabridgeconsultancyservices.in">hello@novabridgeconsultancyservices.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className={`nb-header${scrolled ? ' scrolled' : ''}`} id="header">
        <div className="nb-container">
          <div className="nb-header-inner">
            <Link className="nb-logo" to="/" aria-label="NovaBridge Consultancy Services Home">
              <div className="nb-logo-mark">
                <img
                  src="/logo.jpg"
                  alt="NovaBridge Logo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div
                  data-logo-fallback="true"
                  style={{
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #5a0a1a, #7a1a2e)',
                  }}
                >
                  <GlobeLogo />
                </div>
              </div>
              <div className="nb-logo-text">

                <span className="nb-logo-name">NovaBridge</span>
                <span className="nb-logo-sub">Consultancy Services</span>
              </div>
            </Link>

            <nav aria-label="Main navigation">
              <ul className="nb-nav-links" role="list">
                {NAV_ITEMS.map(item => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/contact" className="nb-nav-cta">
                    <span>Contact Us</span>
                    <ArrowIcon />
                  </Link>
                </li>
              </ul>
            </nav>

            <button
              className={`nb-hamburger${drawerOpen ? ' open' : ''}`}
              onClick={toggleDrawer}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`nb-mobile-drawer${drawerOpen ? ' open visible' : ''}`} role="dialog" aria-label="Navigation menu">
        <Link to="/" onClick={closeDrawer}>Home</Link>
        <Link to="/about" onClick={closeDrawer}>About Us</Link>
        <Link to="/services" onClick={closeDrawer}>Services</Link>
        <Link to="/process" onClick={closeDrawer}>How It Works</Link>
        <Link to="/blog" onClick={closeDrawer}>Blog</Link>
        <Link to="/careers" onClick={closeDrawer}>Careers</Link>
        <Link to="/contact" onClick={closeDrawer} className="nb-mob-cta">Contact Us</Link>
      </div>
    </>
  )
}
