import { useRef } from 'react'
import { MessageCircle, Search, Wrench, PackageCheck } from 'lucide-react'
import { useScrollProgress } from '../hooks/useScrollProgress.js'
import { steps } from '../data/site.js'

const ICONS = [MessageCircle, Search, Wrench, PackageCheck]

// The four repair steps on a vertical line that fills with orange as you scroll,
// lighting up each step as the fill reaches it.
export default function RepairTimeline() {
  const ref = useRef(null)
  useScrollProgress(ref)

  return (
    <div ref={ref} className="timeline">
      <div className="timeline-rail" aria-hidden="true">
        <div className="timeline-fill" />
      </div>
      <ol className="timeline-steps">
        {steps.map((s, i) => {
          const Icon = ICONS[i] ?? Wrench
          return (
            <li className="timeline-step" key={s.title} style={{ '--at': i / steps.length }}>
              <span className="timeline-dot">
                <Icon size={20} />
              </span>
              <div>
                <span className="timeline-num">Step {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
