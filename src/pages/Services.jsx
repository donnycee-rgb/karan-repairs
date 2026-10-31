import { Link } from '../components/Link.jsx'
import { ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import ServiceIcon from '../components/ServiceIcon.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import Marquee from '../components/Marquee.jsx'
import { services, brands } from '../data/site.js'
import { images, serviceImages } from '../data/images.js'

export default function Services() {
  return (
    <>
      <PageHero
        title="Our services"
        text="Whatever is wrong with your phone, bring it in. We diagnose the problem and give you a clear quote before any work starts."
        image={images.repair.board}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 4) * 100}>
                <Link to={`/contact?service=${s.id}`} className="photo-card">
                  <div className="photo-card-img">
                    <img src={serviceImages[s.id].src} alt={serviceImages[s.id].alt} loading="lazy" />
                  </div>
                  <div className="photo-card-body">
                    <ServiceIcon name={s.icon} size={20} />
                    <h3>{s.title}</h3>
                    <p>{s.details}</p>
                    <span className="card-link">Book this repair <ArrowRight size={16} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-band">
        <Marquee items={brands} />
      </div>

      <section className="section section--white">
        <div className="container">
          <div className="section-head">
            <Reveal as="h2">Do not see your phone?</Reveal>
            <Reveal as="p" delay={80}>
              We repair all the brands above and many more. Send us your model on WhatsApp and we
              will tell you if we can fix it.
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
