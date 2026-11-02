import { Check } from 'lucide-react'
import Reveal from './Reveal.jsx'
import Marker from './Marker.jsx'
import WhatsAppIcon from './WhatsAppIcon.jsx'
import { business, whatsappLink } from '../data/site.js'
import { images } from '../data/images.js'

const firstName = business.technician.name.split(' ')[0]

export default function MeetTechnician() {
  const { portrait, roadside } = images.technician
  return (
    <div className="container about-grid">
      <div className="about-collage">
        <Reveal from="left" className="about-photo about-photo--main">
          <img src={portrait.src} alt={portrait.alt} loading="lazy" />
        </Reveal>
        <Reveal from="up" delay={200} className="about-photo about-photo--small tech-photo--small">
          <img src={roadside.src} alt={roadside.alt} loading="lazy" />
        </Reveal>
        <Reveal delay={360} className="tech-tag">
          <strong>{business.technician.name}</strong>
          <span>{business.technician.role}</span>
        </Reveal>
      </div>
      <div>
        <Reveal as="span" className="eyebrow">Meet your technician</Reveal>
        <Reveal as="h2" delay={80}>
          No shop counter. {firstName} <Marker type="underline">comes to you.</Marker>
        </Reveal>
        <Reveal as="p" delay={160}>
          {business.name} is run by {business.technician.name}, a mobile repair technician with about{' '}
          {business.technician.yearsExperience} years of experience, working across {business.city}. He fixes
          phones, TVs and speakers. There is no shop to travel to and no queue. Send a message, say
          where you are, and he will meet you at home, at work or at a spot that suits you.
        </Reveal>
        <Reveal as="ul" delay={220} className="check-list">
          <li><Check size={18} /> You deal with the person doing the repair</li>
          <li><Check size={18} /> Free check and a clear quote before any work starts</li>
          <li><Check size={18} /> Available any day, any time</li>
        </Reveal>
        <Reveal delay={280} className="btn-row tech-cta">
          <a href={whatsappLink(`Hi ${firstName}, I need a repair.`)} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> WhatsApp {firstName}
          </a>
        </Reveal>
      </div>
    </div>
  )
}
