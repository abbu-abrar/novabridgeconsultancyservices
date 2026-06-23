import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <section className="nb-page-hero nb-page-hero--short">
        <div className="nb-container">
          <div className="nb-page-hero-inner">
            <div className="nb-breadcrumb">
              <Link to="/">Home</Link>
              <span>/</span>
              <span>{title}</span>
            </div>
            <h1 className="nb-page-h1">{title}</h1>
            <p className="nb-page-sub">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="nb-section nb-section--border-t">
        <div className="nb-container">
          <div className="nb-legal-content">
            {children}
          </div>
        </div>
      </section>
    </>
  )
}
