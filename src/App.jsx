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

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // Instant, so the smooth-scroll setting doesn't animate it during the page transition
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
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
