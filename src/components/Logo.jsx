import { useState } from 'react'
import { Wrench } from 'lucide-react'
import { business } from '../data/site.js'

// Uses public/logo.png. Until that file exists, shows a text wordmark instead.
export default function Logo({ light = false }) {
  const [missing, setMissing] = useState(false)

  if (!missing) {
    return (
      <img
        className="logo-img"
        src="/logo.png"
        alt={business.name}
        onError={() => setMissing(true)}
      />
    )
  }

  return (
    <span className={`wordmark ${light ? 'wordmark--light' : ''}`}>
      <span className="wordmark-icon"><Wrench size={18} strokeWidth={2.5} /></span>
      <span>Fix<span className="accent">Tech</span> Repair</span>
    </span>
  )
}
