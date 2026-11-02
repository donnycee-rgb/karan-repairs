import { Check } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import Marker from '../components/Marker.jsx'
import WorkGallery from '../components/WorkGallery.jsx'
import { business, reasons } from '../data/site.js'
import { images } from '../data/images.js'

export default function About() {
  return (
    <>
      <PageHero
        title={`About ${business.name}`}
        text={`A mobile repair service across ${business.city}, built on honest work and fair prices.`}
        image={images.repair.street}
      />

      <section className="section">
        <div className="container about-grid">
          <div>
            <Reveal as="span" className="eyebrow">Our story</Reveal>
            <Reveal as="h2" delay={80}>Fixing phones, building <Marker type="underline">trust</Marker></Reveal>
            <Reveal as="p" delay={160}>
              Your phone holds your photos, your contacts, your M-Pesa and your business. When it
              breaks, you need it back quickly and you need to trust the person fixing it.
            </Reveal>
            <Reveal as="p" delay={220}>
              That is why {business.technician.name}, with about {business.technician.yearsExperience} years
              of experience repairing phones, started {business.name}: a repair service for
              people in {business.city} that comes to you, explains the problem clearly, quotes
              honestly and uses parts that last. No shop rent means no shop queue, and you always
              deal with the person doing the work.
            </Reveal>
            <Reveal as="ul" delay={280} className="check-list">
              <li><Check size={18} /> Free check and a quote before any work</li>
              <li><Check size={18} /> Quality, tested replacement parts</li>
              <li><Check size={18} /> {business.warrantyDays}-day warranty on replaced parts</li>
              <li><Check size={18} /> Your data and privacy respected</li>
            </Reveal>
          </div>
          <div className="about-collage">
            <Reveal from="right" className="about-photo about-photo--main">
              <img src={images.technician.portrait.src} alt={images.technician.portrait.alt} loading="lazy" />
            </Reveal>
            <Reveal from="up" delay={200} className="about-photo about-photo--small">
              <img src={images.work[0].src} alt={images.work[0].alt} loading="lazy" />
            </Reveal>
            <Reveal delay={360} className="tech-tag">
              <strong>{business.technician.name}</strong>
              <span>{business.technician.role}</span>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" className="eyebrow">From the workbench</Reveal>
            <Reveal as="h2" delay={80}>Recent <Marker type="underline">jobs</Marker></Reveal>
          </div>
          <WorkGallery />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal as="h2">What we stand for</Reveal>
          </div>
          <div className="grid grid-4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 100} className="card card--tilt">
                <ServiceIcon name={r.icon} />
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
