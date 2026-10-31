import { Check } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import Marker from '../components/Marker.jsx'
import { business, reasons } from '../data/site.js'
import { images } from '../data/images.js'

export default function About() {
  return (
    <>
      <PageHero
        title={`About ${business.name}`}
        text={`A local phone repair shop in ${business.city}, built on honest work and fair prices.`}
        image={images.repair.street}
      />

      <section className="section">
        <div className="container about-grid">
          <div>
            <Reveal as="span" className="eyebrow">Our story</Reveal>
            <Reveal as="h2" delay={80}>Fixing phones, building <Marker type="underline">trust</Marker></Reveal>
            {/* TODO: replace with the real story — when you started, who does the repairs, what makes you different */}
            <Reveal as="p" delay={160}>
              Your phone holds your photos, your contacts, your M-Pesa and your business. When it
              breaks, you need it back quickly and you need to trust the person fixing it.
            </Reveal>
            <Reveal as="p" delay={220}>
              That is why we started {business.name}: to give people in {business.city} a repair
              shop that explains the problem clearly, quotes honestly and uses parts that last.
            </Reveal>
            <Reveal as="ul" delay={280} className="check-list">
              <li><Check size={18} /> Clear diagnosis and a quote before any work</li>
              <li><Check size={18} /> Quality, tested replacement parts</li>
              <li><Check size={18} /> {business.warrantyDays}-day warranty on repairs</li>
              <li><Check size={18} /> Your data and privacy respected</li>
            </Reveal>
          </div>
          {/* TODO: swap these for real photos of your shop and team */}
          <div className="about-collage">
            <Reveal from="right" className="about-photo about-photo--main">
              <img src={images.business.phoneShop.src} alt={images.business.phoneShop.alt} loading="lazy" />
            </Reveal>
            <Reveal from="up" delay={200} className="about-photo about-photo--small">
              <img src={images.repair.screwdriver.src} alt={images.repair.screwdriver.alt} loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--white">
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
