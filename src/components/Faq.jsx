import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/site.js'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div className={`faq-item ${open === i ? 'faq-item--open' : ''}`} key={f.q}>
          <button
            className="faq-q"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {f.q}
            <ChevronDown size={20} />
          </button>
          {open === i && <p className="faq-a">{f.a}</p>}
        </div>
      ))}
    </div>
  )
}
