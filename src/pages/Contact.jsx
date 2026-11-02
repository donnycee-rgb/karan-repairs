import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Phone, MapPin, Clock, Send } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import WhatsAppIcon from '../components/WhatsAppIcon.jsx'
import { business, services, whatsappLink } from '../data/site.js'
import { images } from '../data/images.js'

export default function Contact() {
  const [params] = useSearchParams()
  const preselected = services.find((s) => s.id === params.get('service'))

  const [form, setForm] = useState({
    name: '',
    phone: '',
    model: '',
    service: preselected?.title ?? '',
    area: '',
    message: '',
  })
  const [errors, setErrors] = useState({})

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  // The booking is sent as a pre-filled WhatsApp message, so no server is needed.
  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name'
    if (!form.phone.trim()) next.phone = 'Enter your phone number'
    if (!form.model.trim()) next.model = 'Enter your phone model'
    if (!form.service) next.service = 'Choose a repair'
    setErrors(next)
    if (Object.keys(next).length) return

    const text = [
      'Hi FixTech, I would like to book a repair.',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Phone model: ${form.model}`,
      `Repair: ${form.service}`,
      form.area && `Area: ${form.area}`,
      form.message && `Details: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(text), '_blank', 'noopener')
  }

  return (
    <>
      <PageHero
        title="Book a repair"
        text="Tell us what is wrong and where you are. We will get back to you with a quote and arrange to meet."
        image={images.customers[5]}
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-methods">
            <a className="contact-method" href={business.phoneLink}>
              <span className="icon-box"><Phone size={22} /></span>
              <div>
                <h3>Call us</h3>
                <p>{business.phone}</p>
              </div>
            </a>
            <a className="contact-method" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <span className="icon-box"><WhatsAppIcon size={22} /></span>
              <div>
                <h3>WhatsApp</h3>
                <p>Send a photo of the damage for a faster quote</p>
              </div>
            </a>
            <div className="contact-method">
              <span className="icon-box"><MapPin size={22} /></span>
              <div>
                <h3>We come to you</h3>
                <p>{business.meetUp}</p>
              </div>
            </div>
            <div className="contact-method">
              <span className="icon-box"><Clock size={22} /></span>
              <div>
                <h3>Working hours</h3>
                {business.hours.map((h) => (
                  <p key={h.days}>{h.days}: {h.time}</p>
                ))}
              </div>
            </div>
          </div>

          <form className="form" onSubmit={submit} noValidate>
            <h2>Repair request</h2>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" value={form.name} onChange={update} placeholder="Jane Wanjiku" />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} placeholder="0712 345 678" />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="model">Phone model</label>
                <input id="model" name="model" value={form.model} onChange={update} placeholder="Samsung A14" />
                {errors.model && <span className="field-error">{errors.model}</span>}
              </div>
              <div className="field">
                <label htmlFor="service">Repair needed</label>
                <select id="service" name="service" value={form.service} onChange={update}>
                  <option value="">Choose a repair</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Not sure">Not sure</option>
                </select>
                {errors.service && <span className="field-error">{errors.service}</span>}
              </div>
            </div>
            <div className="field">
              <label htmlFor="area">Where are you? (town or area)</label>
              <input id="area" name="area" value={form.area} onChange={update} placeholder="Kerugoya, Kutus, Sagana..." />
            </div>
            <div className="field">
              <label htmlFor="message">What is wrong? (optional)</label>
              <textarea id="message" name="message" rows={4} value={form.message} onChange={update} placeholder="Dropped it and the screen is cracked, touch still works" />
            </div>
            <button type="submit" className="btn btn-primary">
              <Send size={18} /> Send via WhatsApp
            </button>
            <p className="form-hint">This opens WhatsApp with your details filled in. Just press send.</p>
          </form>
        </div>
      </section>
    </>
  )
}
