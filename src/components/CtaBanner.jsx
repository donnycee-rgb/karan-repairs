import { Phone } from 'lucide-react'
import { Link } from './Link.jsx'
import Reveal from './Reveal.jsx'
import Marker from './Marker.jsx'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { business, whatsappLink } from '../data/site.js'
import { images } from '../data/images.js'

export default function CtaBanner() {
  return (
    <section className="cta-city">
      <img src={images.nairobi.src} alt="" className="cta-city-bg" loading="lazy" />
      <div className="cta-city-overlay" />
      <div className="container cta-city-content">
        <Reveal as="span" className="eyebrow">Right here in {business.city}</Reveal>
        <Reveal as="h2" delay={80}>
          Phone giving you <Marker type="circle">trouble?</Marker>
        </Reveal>
        <Reveal as="p" delay={160}>Get a quote today. Call, WhatsApp, or book online.</Reveal>
        <Reveal delay={240} className="btn-row btn-row--center">
          <Link to="/contact" className="btn btn-primary">Book a repair</Link>
          <a href={whatsappLink()} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> WhatsApp
          </a>
          <a href={business.phoneLink} className="btn btn-outline-light">
            <Phone size={18} /> Call
          </a>
        </Reveal>
      </div>
    </section>
  )
}
