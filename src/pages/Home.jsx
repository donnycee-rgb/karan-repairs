import { Phone, ArrowRight, ShieldCheck, Clock, BadgeCheck } from 'lucide-react'
import { Link } from '../components/Link.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Faq from '../components/Faq.jsx'
import Reveal from '../components/Reveal.jsx'
import Marker from '../components/Marker.jsx'
import PhoneCard from '../components/PhoneCard.jsx'
import CrackSlider from '../components/CrackSlider.jsx'
import Marquee from '../components/Marquee.jsx'
import RepairTimeline from '../components/RepairTimeline.jsx'
import { StackPanels, StackPanel } from '../components/StackPanels.jsx'
import { business, services, reasons, brands } from '../data/site.js'
import { images, serviceImages } from '../data/images.js'

const c = images.customers
// Each phone card cycles through its own set of customers
const pick = (...i) => i.map((n) => c[n % c.length])


export default function Home() {
  const topServices = services.slice(0, 4)

  return (
    <>
      <StackPanels>
        <StackPanel tone="dark" first label="Introduction">
          <div className="hero">
            <div className="hero-grid-bg" aria-hidden="true" />
            <div className="container hero-layout">
              <div className="hero-copy">
                <span className="eyebrow hero-in" style={{ '--i': 0 }}>Phone repair in {business.city}</span>
                <h1>
                  <span className="hero-line hero-in" style={{ '--i': 1 }}>Cracked, dead</span>
                  <span className="hero-line hero-in" style={{ '--i': 2 }}>or soaked?</span>
                  <span className="hero-line hero-in" style={{ '--i': 3 }}>
                    Fixed <span className="accent"><Marker type="circle" delay={1100}>fast.</Marker></span>
                  </span>
                </h1>
                <p className="hero-text hero-in" style={{ '--i': 4 }}>
                  Screens, batteries, charging ports and water damage for iPhone and Android. Quality
                  parts, fair prices and a warranty on every repair.
                </p>
                <div className="btn-row hero-in" style={{ '--i': 5 }}>
                  <Link to="/contact" className="btn btn-primary">
                    Book a repair <ArrowRight size={18} />
                  </Link>
                  <a href={business.phoneLink} className="btn btn-outline-light">
                    <Phone size={18} /> {business.phone}
                  </a>
                </div>
                <div className="hero-badges hero-in" style={{ '--i': 6 }}>
                  <span><ShieldCheck size={18} /> Quality parts</span>
                  <span><Clock size={18} /> Same-day repairs</span>
                  <span><BadgeCheck size={18} /> {business.warrantyDays}-day warranty</span>
                </div>
              </div>

              <div className="hero-phones">
                <PhoneCard className="hero-phone hero-phone--a" photos={pick(0, 3, 6)} tilt={-8} delay={0} time="9:41"
                  statuses={['Screen replaced', 'Battery at 100%', 'Ready for pickup']} />
                <PhoneCard className="hero-phone hero-phone--b" photos={pick(1, 4, 5)} tilt={6} delay={1400} time="12:05"
                  statuses={['Charging port fixed', 'Speaker working', 'Back glass done']} />
                <PhoneCard className="hero-phone hero-phone--c" photos={pick(2, 5, 0)} tilt={-3} delay={2800} time="16:20"
                  statuses={['Water damage cleared', 'Camera replaced', 'Data kept safe']} />
                <svg viewBox="0 0 60 40" className="hero-arrow" fill="none" aria-hidden="true">
                  <path d="M4 34c10 4 22-2 20-12-1-6-9-6-9 0 0 9 18 12 36-14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M44 6l7 2-3 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="hero-arrow-label">Back in your hand, like new</span>
              </div>
            </div>
            <div className="scroll-cue" aria-hidden="true"><span /></div>
          </div>
        </StackPanel>

        <StackPanel tone="light" label="Before and after">
          <div className="container panel-split">
            <div>
              <Reveal as="span" className="eyebrow">See the difference</Reveal>
              <Reveal as="h2" delay={80} className="panel-title">
                From <Marker type="underline">shattered</Marker> to brand new
              </Reveal>
              <Reveal as="p" delay={160} className="panel-text">
                Drag the handle across the screen. That is what we do every day: replace broken
                glass and displays with quality parts, test everything, and hand your phone back
                looking and working like new.
              </Reveal>
              <Reveal delay={240} className="btn-row">
                <Link to="/pricing" className="btn btn-dark">See screen prices</Link>
                <Link to="/services" className="btn btn-outline">All services</Link>
              </Reveal>
            </div>
            <Reveal from="right" delay={120}>
              <CrackSlider photo={c[1]} />
            </Reveal>
          </div>
        </StackPanel>

        <StackPanel tone="photo" label="Your phone is your business">
          <div className="biz">
            <img src={images.business.vendor.src} alt={images.business.vendor.alt} className="biz-bg" />
            <div className="biz-overlay" />
            <div className="container biz-content">
              <div>
                <Reveal as="span" className="eyebrow">Built for the hustle</Reveal>
                <Reveal as="h2" delay={80} className="biz-title">
                  Your phone is your <Marker type="underline">business.</Marker>
                </Reveal>
                <Reveal as="p" delay={160} className="biz-text">
                  M-Pesa, WhatsApp orders, customer calls. When your phone is down, so is your
                  income. We get you back up and running, often the same day.
                </Reveal>
                <Reveal delay={220}>
                  <Link to="/contact" className="btn btn-primary">
                    Get back online <ArrowRight size={18} />
                  </Link>
                </Reveal>
              </div>
              <div className="biz-polaroids">
                <Reveal from="up" delay={200} className="polaroid" style={{ '--r': '-6deg' }}>
                  <img src={images.business.juiceShop.src} alt={images.business.juiceShop.alt} loading="lazy" />
                  <span>For traders</span>
                </Reveal>
                <Reveal from="up" delay={320} className="polaroid" style={{ '--r': '4deg' }}>
                  <img src={images.business.phoneShop.src} alt={images.business.phoneShop.alt} loading="lazy" />
                  <span>For shop owners</span>
                </Reveal>
              </div>
            </div>
          </div>
        </StackPanel>
      </StackPanels>

      <div className="marquee-band">
        <Marquee items={brands} />
      </div>

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" className="eyebrow">Our services</Reveal>
            <Reveal as="h2" delay={80}>What we <Marker type="underline">fix</Marker></Reveal>
            <Reveal as="p" delay={160}>From cracked screens to phones that will not switch on.</Reveal>
          </div>
          <div className="grid grid-4">
            {topServices.map((s, i) => (
              <Reveal key={s.id} delay={i * 100}>
                <Link to={`/contact?service=${s.id}`} className="photo-card">
                  <div className="photo-card-img">
                    <img src={serviceImages[s.id].src} alt={serviceImages[s.id].alt} loading="lazy" />
                  </div>
                  <div className="photo-card-body">
                    <ServiceIcon name={s.icon} size={20} />
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <span className="card-link">Book this <ArrowRight size={16} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="center-row">
            <Link to="/services" className="btn btn-outline">
              View all services <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container panel-split panel-split--top">
          <div className="sticky-copy">
            <Reveal as="span" className="eyebrow">How it works</Reveal>
            <Reveal as="h2" delay={80} className="panel-title panel-title--light">
              Four steps from <Marker type="circle">broken</Marker> to back in your hand
            </Reveal>
            <Reveal delay={160} className="workbench">
              <img src={images.repair.street.src} alt={images.repair.street.alt} loading="lazy" />
            </Reveal>
          </div>
          <RepairTimeline />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" className="eyebrow">Why choose us</Reveal>
            <Reveal as="h2" delay={80}>Repairs you can <Marker type="underline">trust</Marker></Reveal>
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

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <Reveal as="span" className="eyebrow">FAQ</Reveal>
            <Reveal as="h2" delay={80}>Common questions</Reveal>
          </div>
          <Reveal delay={120}>
            <Faq />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
