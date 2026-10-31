import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Pricing from './pages/Pricing.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { pages, notFound } from './data/seo.js'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Instant, so the smooth-scroll setting doesn't animate it during the page transition
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

// Keeps the tab title and description in step with the page while visitors click around.
// Link previews come from the HTML that scripts/seo.js writes at build time.
function PageMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const meta = pages[pathname.replace(/(.)\/$/, '$1')] ?? notFound
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <PageMeta />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
