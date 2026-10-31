import { Link } from './Link.jsx'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import Logo from './Logo.jsx'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { business, whatsappLink } from '../data/site.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-text">
            Fast, honest phone repair in {business.city}. iPhone and Android, done right.
          </p>
        </div>

        <div>
          <h4>Pages</h4>
          <ul className="footer-list">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Book a repair</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-list">
            <li><Phone size={16} /><a href={business.phoneLink}>{business.phone}</a></li>
            <li>
              <WhatsAppIcon size={16} />
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            </li>
            {business.email && (
              <li><Mail size={16} /><a href={`mailto:${business.email}`}>{business.email}</a></li>
            )}
            {business.locations.map((l) => (
              <li key={l.name}><MapPin size={16} /><span>{l.name}: {l.address}</span></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Opening hours</h4>
          <ul className="footer-list">
            {business.hours.map((h) => (
              <li key={h.days}><Clock size={16} /><span>{h.days}: {h.time}</span></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  )
}
