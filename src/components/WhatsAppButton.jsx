import WhatsAppIcon from './WhatsAppIcon.jsx'
import { whatsappLink } from '../data/site.js'

export default function WhatsAppButton() {
  return (
    <a
      className="wa-float"
      href={whatsappLink('Hi FixTech, I need help with my phone.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
