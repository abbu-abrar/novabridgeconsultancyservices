import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import ProcessPage from './pages/ProcessPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import CareersPage from './pages/CareersPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import CookiesPage from './pages/CookiesPage'
import RefundPage from './pages/RefundPage'
import DisclaimerPage from './pages/DisclaimerPage'
import BlogPostPage from './pages/BlogPostPage'
import ThankYouPage from './pages/ThankYouPage'
import NotFoundPage from './pages/NotFoundPage'
import { HelmetProvider } from 'react-helmet-async'

export default function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/refund" element={<RefundPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </HelmetProvider>
  )
}

