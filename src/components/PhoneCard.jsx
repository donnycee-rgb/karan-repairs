import { BatteryFull, Wifi, Signal, CircleCheck } from 'lucide-react'
import { useCycle } from '../hooks/useCycle.js'

// A tilted phone-shaped card: status bar, photos cross-fading with a slow zoom,
// and a "repair done" notification that changes with each photo.
export default function PhoneCard({ photos, statuses = [], tilt = -6, delay = 0, time = '9:41', className = '' }) {
  const active = useCycle(photos.length, 4200, delay)
  const status = statuses.length ? statuses[active % statuses.length] : null

  return (
    <div className={`phone-card ${className}`} style={{ '--tilt': `${tilt}deg` }} aria-hidden="true">
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-status">
          <span>{time}</span>
          <span className="phone-status-icons">
            <Signal size={11} />
            <Wifi size={11} />
            <BatteryFull size={13} />
          </span>
        </div>
        <div className="phone-screen">
          {photos.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              alt=""
              className={`phone-photo ${i === active ? 'is-active' : ''}`}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
          {status && (
            <div className="phone-toast" key={active}>
              <CircleCheck size={16} />
              <span>{status}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
