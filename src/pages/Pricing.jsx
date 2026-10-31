import PageHero from '../components/PageHero.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Reveal from '../components/Reveal.jsx'
import { prices, business, whatsappLink } from '../data/site.js'
import { images } from '../data/images.js'

const ksh = (n) => `From KSh ${n.toLocaleString('en-KE')}`

export default function Pricing() {
  return (
    <>
      <PageHero
        title="Pricing"
        text="Honest, upfront prices. The final cost depends on your phone model, and we always confirm it with you before we start."
        image={images.repair.matBroken}
      />

      <section className="section">
        <div className="container">
          <Reveal className="price-table">
            <div className="price-row price-row--head">
              <span>Repair</span>
              <span>Price</span>
            </div>
            {prices.map((p, i) => (
              <div className="price-row" key={p.repair} style={{ '--row': i }}>
                <span>{p.repair}</span>
                {p.from ? (
                  <span className="price-value">{ksh(p.from)}</span>
                ) : (
                  <a
                    className="price-quote"
                    href={whatsappLink(`Hi FixTech, how much is: ${p.repair}? My phone is a `)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get a quote
                  </a>
                )}
              </div>
            ))}
          </Reveal>
          <p className="note">
            Every repair includes a {business.warrantyDays}-day warranty on parts and labour. Send us your phone model on WhatsApp for an exact quote.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
